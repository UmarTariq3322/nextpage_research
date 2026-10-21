import { NextResponse } from "next/server";

import { isValidAmbassadorCode, registrationId, sheetConfig } from "@/lib/nexmeta-server";
import { pricing, proofLimits, quote, studyLevels, type ModuleKey } from "@/content/nexmeta";

const MODULE_KEYS: ModuleKey[] = ["m1", "m2", "m3"];

const text = (form: FormData, key: string, max = 200) => String(form.get(key) ?? "").trim().slice(0, max);

function fail(error: string, status = 400, field?: string) {
  return NextResponse.json({ ok: false, error, field }, { status });
}

export async function POST(request: Request) {
  const config = sheetConfig();
  if (!config) {
    return fail("Online registration is not set up yet. Please register on WhatsApp for now.", 503);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail("The form could not be read. Please try again.");
  }

  // Honeypot: real visitors never see or fill this field.
  if (text(form, "website")) return NextResponse.json({ ok: true, id: "NXM-IGNORED" });

  const name = text(form, "name", 120);
  const email = text(form, "email", 160);
  const whatsapp = text(form, "whatsapp", 30);
  const institution = text(form, "institution", 160);
  const level = text(form, "level", 60);
  const city = text(form, "city", 80);
  const heardFrom = text(form, "heardFrom", 60);
  const paymentMethod = text(form, "paymentMethod", 60);
  const transactionId = text(form, "transactionId", 80);
  const code = text(form, "ambassadorCode", 40).toUpperCase();
  const full = form.get("full") === "true";
  const modules = form.getAll("modules").map(String).filter((m): m is ModuleKey => MODULE_KEYS.includes(m as ModuleKey));

  if (!name) return fail("Please enter your full name.", 400, "name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Please enter a valid email address.", 400, "email");
  if (whatsapp.replace(/\D/g, "").length < 10) return fail("Please enter a valid WhatsApp number.", 400, "whatsapp");
  if (!institution) return fail("Please enter your institution.", 400, "institution");
  if (!(studyLevels as readonly string[]).includes(level)) return fail("Please select your current level.", 400, "level");
  if (!full && modules.length === 0) return fail("Please choose the full course or at least one module.", 400, "package");
  if (!paymentMethod) return fail("Please select how you paid.", 400, "paymentMethod");
  if (!transactionId) return fail("Please enter the transaction ID.", 400, "transactionId");
  if (form.get("consent") !== "on") return fail("Please confirm the declaration.", 400, "consent");

  const codeValid = code ? isValidAmbassadorCode(code) : false;
  if (code && !codeValid) return fail("That ambassador code is not valid.", 400, "ambassadorCode");

  const proof = form.get("proof");
  if (!(proof instanceof File) || proof.size === 0) return fail("Please upload your payment screenshot.", 400, "proof");
  if (proof.size > proofLimits.maxBytes) return fail("The screenshot must be 5 MB or smaller.", 400, "proof");
  if (!proofLimits.types.includes(proof.type)) return fail("Upload a JPG, PNG, WebP or PDF file.", 400, "proof");

  // Price is always recomputed here; the browser's preview is never trusted.
  const selection = { full, modules: full ? [] : modules };
  const price = quote(selection, codeValid);
  const id = registrationId();

  const payload = {
    secret: config.secret,
    registrationId: id,
    submittedAt: new Date().toISOString(),
    name,
    email,
    whatsapp,
    institution,
    level,
    city,
    heardFrom,
    package: full ? pricing.full.label : modules.map((m) => pricing[m].label).join(", "),
    ambassadorCode: codeValid ? code : "",
    subtotal: price.subtotal,
    discount: price.discount,
    total: price.total,
    paymentMethod,
    transactionId,
    proof: {
      name: proof.name.replace(/[^\w.\-]+/g, "_").slice(0, 80),
      type: proof.type,
      base64: Buffer.from(await proof.arrayBuffer()).toString("base64"),
    },
  };

  try {
    const res = await fetch(config.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !result?.ok) throw new Error(result?.error ?? `Sheet responded ${res.status}`);
  } catch (err) {
    console.error("NexMeta registration failed to save", err);
    return fail("We couldn't save your registration. Please try again, or contact us on WhatsApp.", 502);
  }

  return NextResponse.json({ ok: true, id, total: price.total });
}
