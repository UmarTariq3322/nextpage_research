// Server-only helpers (import from route handlers only) for NexMeta registration. Configuration comes from
// environment variables so secrets never reach the browser bundle:
//   NEXMETA_AMBASSADOR_CODES   comma-separated valid codes, e.g. "AREEB10,SAAD10"
//   NEXMETA_SHEET_WEBHOOK_URL  Google Apps Script web app URL
//   NEXMETA_WEBHOOK_SECRET     shared secret, must match the Apps Script

export function isValidAmbassadorCode(code: string | null | undefined): boolean {
  const normalized = (code ?? "").trim().toUpperCase();
  if (!normalized) return false;
  const codes = (process.env.NEXMETA_AMBASSADOR_CODES ?? "")
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);
  return codes.includes(normalized);
}

export function sheetConfig() {
  const url = process.env.NEXMETA_SHEET_WEBHOOK_URL;
  const secret = process.env.NEXMETA_WEBHOOK_SECRET;
  return url && secret ? { url, secret } : null;
}

/** Short, human-readable ID students can quote, e.g. NXM-261021-7KQ4. */
export function registrationId(now = new Date()) {
  const date = now.toISOString().slice(2, 10).replace(/-/g, "");
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const suffix = Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
  return `NXM-${date}-${suffix}`;
}
