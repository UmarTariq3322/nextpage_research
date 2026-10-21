"use client";

import * as React from "react";
import { Check, CheckCircle2, Copy, FileUp, Loader2, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, fieldClasses } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  formatPKR,
  paymentAccounts,
  pricing,
  proofLimits,
  quote,
  referralSources,
  studyLevels,
  type ModuleKey,
} from "@/content/nexmeta";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const MODULES: ModuleKey[] = ["m1", "m2", "m3"];
type CodeState = "idle" | "checking" | "valid" | "invalid";
type Errors = Partial<Record<string, string>>;

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {optional && <span className="font-normal text-fg-mute">(optional)</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-fg-mute">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8 first-of-type:border-0 first-of-type:pt-0">
      <legend className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary font-mono text-xs text-primary-on">{n}</span>
        <span className="t-h3 text-xl">{title}</span>
      </legend>
      <div className="mt-6 space-y-5">{children}</div>
    </fieldset>
  );
}

export function RegistrationForm() {
  const [full, setFull] = React.useState(true);
  const [modules, setModules] = React.useState<ModuleKey[]>([]);
  const [code, setCode] = React.useState("");
  const [codeState, setCodeState] = React.useState<CodeState>("idle");
  const [file, setFile] = React.useState<File | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "error">("idle");
  const [formError, setFormError] = React.useState("");
  const [done, setDone] = React.useState<{ id: string; total: number } | null>(null);
  const [notice, setNotice] = React.useState("");

  const price = quote({ full, modules }, codeState === "valid");
  const hasSelection = full || modules.length > 0;
  const methods = Array.from(new Set(paymentAccounts.map((a) => a.method))).concat("Other");

  function toggleModule(m: ModuleKey) {
    setErrors((e) => ({ ...e, package: undefined }));
    const next = modules.includes(m) ? modules.filter((x) => x !== m) : [...modules, m].sort();
    // All three modules together cost more than the full course, so switch to it.
    if (next.length === MODULES.length) {
      setFull(true);
      setModules([]);
      setNotice(`All three modules selected, so we switched you to the full course (${formatPKR(pricing.full.price)}), which costs less.`);
      return;
    }
    setNotice("");
    setFull(false);
    setModules(next);
  }

  async function applyCode() {
    const value = code.trim();
    if (!value) return;
    setCodeState("checking");
    try {
      const res = await fetch("/api/nexmeta/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: value }),
      });
      const { valid } = (await res.json()) as { valid: boolean };
      setCodeState(valid ? "valid" : "invalid");
      setErrors((e) => ({ ...e, ambassadorCode: valid ? undefined : "That code is not valid." }));
    } catch {
      setCodeState("idle");
      setErrors((e) => ({ ...e, ambassadorCode: "Couldn't check the code. Try again." }));
    }
  }

  function pickFile(f: File | null) {
    setErrors((e) => ({ ...e, proof: undefined }));
    if (!f) return setFile(null);
    if (!proofLimits.types.includes(f.type)) {
      setErrors((e) => ({ ...e, proof: "Upload a JPG, PNG, WebP or PDF file." }));
      return setFile(null);
    }
    if (f.size > proofLimits.maxBytes) {
      setErrors((e) => ({ ...e, proof: "The file must be 5 MB or smaller." }));
      return setFile(null);
    }
    setFile(f);
  }

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const v = (k: string) => String(data.get(k) ?? "").trim();
    if (!v("name")) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) e.email = "Please enter a valid email address.";
    if (v("whatsapp").replace(/\D/g, "").length < 10) e.whatsapp = "Please enter a valid WhatsApp number.";
    if (!v("institution")) e.institution = "Please enter your institution.";
    if (!v("level")) e.level = "Please select your current level.";
    if (!hasSelection) e.package = "Choose the full course or at least one module.";
    if (code.trim() && codeState !== "valid") e.ambassadorCode = "Apply a valid code, or clear the field.";
    if (!v("paymentMethod")) e.paymentMethod = "Please select how you paid.";
    if (!v("transactionId")) e.transactionId = "Please enter the transaction ID.";
    if (!file) e.proof = "Please upload your payment screenshot.";
    if (data.get("consent") !== "on") e.consent = "Please confirm the declaration.";
    return e;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    setFormError("");
    const first = Object.keys(found).find((k) => found[k]);
    if (first) {
      form.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }

    data.set("full", String(full));
    data.delete("modules");
    if (!full) modules.forEach((m) => data.append("modules", m));
    data.set("ambassadorCode", codeState === "valid" ? code.trim() : "");
    if (file) data.set("proof", file);

    setStatus("submitting");
    try {
      const res = await fetch("/api/nexmeta/register", { method: "POST", body: data });
      const result = (await res.json()) as { ok: boolean; id?: string; total?: number; error?: string; field?: string };
      if (!result.ok) {
        setStatus("error");
        setFormError(result.error ?? "Something went wrong. Please try again.");
        if (result.field) {
          setErrors((e) => ({ ...e, [result.field!]: result.error }));
          form.querySelector<HTMLElement>(`[data-field="${result.field}"]`)?.focus();
        }
        return;
      }
      setDone({ id: result.id!, total: result.total ?? price.total });
      document.getElementById("register")?.scrollIntoView({ block: "start" });
    } catch {
      setStatus("error");
      setFormError("Network error. Check your connection and try again.");
    }
  }

  const err = (k: string) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` } : {};

  if (done) return <Confirmation id={done.id} total={done.total} />;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
      <div className="space-y-10">
        {/* Honeypot (hidden from people, filled by bots) */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <Step n={1} title="Your details">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Full name" error={errors.name}>
              <Input id="name" name="name" data-field="name" autoComplete="name" {...err("name")} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" name="email" type="email" data-field="email" autoComplete="email" {...err("email")} />
            </Field>
            <Field id="whatsapp" label="WhatsApp number" error={errors.whatsapp} hint="We'll use this to send class updates.">
              <Input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" placeholder="+92 3XX XXXXXXX" data-field="whatsapp" autoComplete="tel" {...err("whatsapp")} />
            </Field>
            <Field id="institution" label="University / institution" error={errors.institution}>
              <Input id="institution" name="institution" data-field="institution" autoComplete="organization" {...err("institution")} />
            </Field>
            <Field id="level" label="Current level" error={errors.level}>
              <select id="level" name="level" data-field="level" defaultValue="" className={cn(fieldClasses, "h-11")} {...err("level")}>
                <option value="" disabled>
                  Select one
                </option>
                {studyLevels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </Field>
            <Field id="city" label="City" optional>
              <Input id="city" name="city" autoComplete="address-level2" />
            </Field>
          </div>
        </Step>

        <Step n={2} title="Choose your package">
          <div data-field="package" tabIndex={-1} className="space-y-3 outline-none">
            <button
              type="button"
              aria-pressed={full}
              onClick={() => {
                setFull(true);
                setModules([]);
                setNotice("");
                setErrors((e) => ({ ...e, package: undefined }));
              }}
              className={cn(
                "flex w-full items-center gap-4 rounded-lg border p-5 text-left transition-colors",
                full ? "border-accent bg-accent-soft/60 ring-1 ring-accent" : "border-line-strong bg-surface hover:border-fg/30"
              )}
            >
              <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full border", full ? "border-accent bg-accent text-accent-on" : "border-line-strong")}>
                {full && <Check className="h-3 w-3" aria-hidden />}
              </span>
              <span className="flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-lg font-semibold tracking-tight">Full course</span>
                  <span className="rounded-sm bg-accent px-1.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-accent-on">Best value</span>
                </span>
                <span className="mt-0.5 block text-sm text-fg-soft">All three modules, the quiz and the certificate</span>
              </span>
              <span className="text-right">
                <span className="block font-display text-lg font-semibold">{formatPKR(pricing.full.price)}</span>
                <span className="block text-xs text-fg-mute">{formatPKR(pricing.full.ambassador)} with code</span>
              </span>
            </button>

            <p className="pt-2 text-sm text-fg-soft">Or choose individual modules:</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {MODULES.map((m) => {
                const on = !full && modules.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => toggleModule(m)}
                    className={cn(
                      "flex flex-col rounded-lg border p-4 text-left transition-colors",
                      on ? "border-accent bg-accent-soft/60 ring-1 ring-accent" : "border-line-strong bg-surface hover:border-fg/30"
                    )}
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{pricing[m].label}</span>
                      <span className={cn("grid h-5 w-5 place-items-center rounded-sm border", on ? "border-accent bg-accent text-accent-on" : "border-line-strong")}>
                        {on && <Check className="h-3 w-3" aria-hidden />}
                      </span>
                    </span>
                    <span className="mt-1 text-xs text-fg-soft">{pricing[m].detail}</span>
                    <span className="mt-3 font-display font-semibold">{formatPKR(pricing[m].price)}</span>
                    <span className="text-xs text-fg-mute">{formatPKR(pricing[m].ambassador)} with code</span>
                  </button>
                );
              })}
            </div>
            {notice && (
              <p role="status" className="rounded-md bg-accent-soft px-3 py-2 text-sm text-fg">
                {notice}
              </p>
            )}
            {errors.package && <p className="text-sm text-red-600 dark:text-red-400">{errors.package}</p>}
          </div>

          <Field id="ambassadorCode" label="Ambassador code" optional error={errors.ambassadorCode}>
            <div className="flex gap-2">
              <Input
                id="ambassadorCode"
                data-field="ambassadorCode"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setCodeState("idle");
                  setErrors((er) => ({ ...er, ambassadorCode: undefined }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyCode();
                  }
                }}
                placeholder="Enter code"
                className="uppercase"
                {...err("ambassadorCode")}
              />
              <Button type="button" variant="outline" onClick={applyCode} disabled={!code.trim() || codeState === "checking" || codeState === "valid"}>
                {codeState === "checking" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : codeState === "valid" ? "Applied" : "Apply"}
              </Button>
            </div>
            {codeState === "valid" && (
              <p className="flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" aria-hidden /> Code applied. You save {formatPKR(price.discount)}.
              </p>
            )}
          </Field>
        </Step>

        <Step n={3} title="Payment">
          <div className="rounded-lg border border-line bg-subtle p-5">
            <p className="text-sm">
              Send <strong className="font-semibold">{formatPKR(price.total)}</strong>{" "}
              {paymentAccounts.length > 0 ? "to one of the accounts below" : "using the payment details we share on WhatsApp"}, then add
              the transaction ID and a screenshot.
            </p>
            {paymentAccounts.length > 0 ? (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {paymentAccounts.map((a) => (
                  <li key={a.method + a.accountNumber} className="rounded-md border border-line bg-surface p-4 text-sm">
                    <p className="t-label">{a.method}</p>
                    <p className="mt-2 font-medium">{a.accountTitle}</p>
                    <p className="font-mono">{a.accountNumber}</p>
                    {a.note && <p className="mt-1 text-xs text-fg-mute">{a.note}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-fg-soft">
                Need the payment details?{" "}
                <a href={`${site.whatsapp.link}?text=${encodeURIComponent("Hi, please share the payment details for the NexMeta course.")}`} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline-offset-4 hover:underline">
                  ask us on WhatsApp
                </a>
                .
              </p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="paymentMethod" label="Paid via" error={errors.paymentMethod}>
              <select id="paymentMethod" name="paymentMethod" data-field="paymentMethod" defaultValue="" className={cn(fieldClasses, "h-11")} {...err("paymentMethod")}>
                <option value="" disabled>
                  Select one
                </option>
                {(paymentAccounts.length ? methods : ["Bank transfer", "JazzCash", "Easypaisa", "Other"]).map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>
            <Field id="transactionId" label="Transaction ID" error={errors.transactionId}>
              <Input id="transactionId" name="transactionId" data-field="transactionId" {...err("transactionId")} />
            </Field>
          </div>

          <Field id="proof" label="Payment screenshot" error={errors.proof} hint="JPG, PNG, WebP or PDF, up to 5 MB.">
            {file ? (
              <div className="flex items-center gap-3 rounded-md border border-line-strong bg-surface px-4 py-3">
                <FileUp className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{file.name}</span>
                  <span className="block text-xs text-fg-mute">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                </span>
                <button type="button" onClick={() => pickFile(null)} className="rounded-sm p-1 text-fg-mute hover:text-fg" aria-label="Remove file">
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ) : (
              <label
                htmlFor="proof"
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed px-4 py-8 text-center transition-colors hover:border-accent hover:bg-accent-soft/40",
                  errors.proof ? "border-red-500" : "border-line-strong"
                )}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  pickFile(e.dataTransfer.files?.[0] ?? null);
                }}
              >
                <FileUp className="h-6 w-6 text-fg-mute" aria-hidden />
                <span className="text-sm font-medium">Click to upload or drag the file here</span>
              </label>
            )}
            <input
              id="proof"
              type="file"
              data-field="proof"
              accept={proofLimits.types.join(",")}
              className="sr-only"
              onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
              {...err("proof")}
            />
          </Field>
        </Step>

        <Step n={4} title="Confirm">
          <Field id="heardFrom" label="How did you hear about NexMeta?" optional>
            <select id="heardFrom" name="heardFrom" defaultValue="" className={cn(fieldClasses, "h-11")}>
              <option value="">Select one</option>
              {referralSources.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>
          <div className="space-y-2">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" name="consent" data-field="consent" className="mt-0.5 h-4 w-4 accent-[rgb(var(--accent))]" {...err("consent")} />
              <span>I confirm these details are correct and that Nexpage Research may contact me on WhatsApp and email about this course.</span>
            </label>
            {errors.consent && (
              <p id="consent-error" className="text-sm text-red-600 dark:text-red-400">
                {errors.consent}
              </p>
            )}
          </div>

          {formError && (
            <p role="alert" className="rounded-md border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {formError}
            </p>
          )}

          <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Submitting…
              </>
            ) : (
              `Complete registration · ${formatPKR(price.total)}`
            )}
          </Button>
        </Step>
      </div>

      {/* Order summary */}
      <aside aria-label="Order summary" className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg border border-line bg-surface p-6 shadow-md">
          <p className="t-label">Order summary</p>
          {hasSelection ? (
            <ul className="mt-4 space-y-3 text-sm">
              {price.items.map((i) => (
                <li key={i.key} className="flex justify-between gap-4">
                  <span>{i.label}</span>
                  <span className="font-medium">{formatPKR(i.price)}</span>
                </li>
              ))}
              {price.discount > 0 && (
                <li className="flex justify-between gap-4 text-emerald-700 dark:text-emerald-400">
                  <span>Ambassador discount</span>
                  <span className="font-medium">− {formatPKR(price.discount)}</span>
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-fg-mute">Choose a package to see the total.</p>
          )}
          <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
            <span className="font-medium">Total</span>
            <span aria-live="polite" className="font-display text-2xl font-semibold tracking-tight">
              {formatPKR(price.total)}
            </span>
          </div>
          <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-xs text-fg-soft">
            <li>· Unique student ID for the final quiz</li>
            <li>· Certificate on completion</li>
          </ul>
        </div>
        <a
          href={`${site.whatsapp.link}?text=${encodeURIComponent("Hi, I have a question about the NexMeta course.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-md py-2 text-sm text-fg-soft transition-colors hover:text-fg"
        >
          <MessageCircle className="h-4 w-4" aria-hidden /> Questions? Ask us on WhatsApp
        </a>
      </aside>
    </form>
  );
}

function Confirmation({ id, total }: { id: string; total: number }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div role="status" className="mx-auto max-w-xl rounded-lg border border-line bg-surface p-8 text-center shadow-md sm:p-12">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-600">
        <CheckCircle2 className="h-7 w-7" aria-hidden />
      </span>
      <h3 className="t-h2 mt-6 text-3xl">Registration received</h3>
      <p className="mt-3 text-fg-soft">
        We&apos;ll verify your payment of {formatPKR(total)} and confirm on WhatsApp. Keep your registration ID for any questions.
      </p>
      <div className="mt-6 flex items-center justify-center gap-2 rounded-md border border-line-strong bg-subtle px-4 py-3">
        <span className="font-mono text-lg font-medium tracking-wider">{id}</span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(id).then(() => setCopied(true));
          }}
          className="rounded-sm p-1.5 text-fg-mute hover:text-fg"
          aria-label="Copy registration ID"
        >
          {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        </button>
      </div>
      <a
        href={`${site.whatsapp.link}?text=${encodeURIComponent(`Hi, I just registered for NexMeta. My registration ID is ${id}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong"
      >
        <MessageCircle className="h-4 w-4" aria-hidden /> Send your ID on WhatsApp
      </a>
    </div>
  );
}
