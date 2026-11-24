import { siteConfig } from "@/lib/siteConfig";

// Leads are emailed to Nathan through Web3Forms (free plan, browser-side only). FormSubmit is a
// last-resort backup; it has been unreliable, so it is only tried if Web3Forms fails.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "4afedbf5-747d-48b0-839f-a1d7575329bd"; // public by design; tied to nathan@prescottroofingnh.com
const BACKUP_CC = "nathan@prescottroofingnh.com";
const REQUEST_TIMEOUT_MS = 12000;

type LeadReply = { success?: string | boolean } | null;

async function post(url: string, body: BodyInit, headers: Record<string, string> = {}): Promise<LeadReply> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { method: "POST", headers: { Accept: "application/json", ...headers }, body, signal: controller.signal });
    const reply = (await res.json().catch(() => null)) as LeadReply;
    return res.ok ? reply : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

const isTrue = (v: unknown) => String(v) === "true";

/** Returns true once a lead has been accepted for delivery. */
export async function deliverLead(fields: Record<string, string>, subject: string): Promise<boolean> {
  // Form data (not JSON) avoids a CORS preflight, which some networks and browsers block.
  const body = new FormData();
  body.append("access_key", WEB3FORMS_KEY);
  body.append("subject", subject);
  body.append("from_name", "Prescott Roofing Website");
  if (fields.email) body.append("replyto", fields.email);
  for (const [key, value] of Object.entries(fields)) body.append(key, value);
  if (isTrue((await post(WEB3FORMS_ENDPOINT, body))?.success)) return true;

  const backup = await post(
    `https://formsubmit.co/ajax/${siteConfig.email}`,
    JSON.stringify({ ...fields, _subject: subject, _cc: BACKUP_CC }),
    { "Content-Type": "application/json" },
  );
  return isTrue(backup?.success);
}
