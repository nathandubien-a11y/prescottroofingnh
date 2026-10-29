/** Google Ads account tag and the "Landing page quote request" conversion (customer 228-686-5050). */
export const GOOGLE_ADS_ID = "AW-18295048840";
export const LEAD_CONVERSION_SEND_TO = "AW-18295048840/hCPgCKjRkaYdEIiV4ZNE";

// Enhanced conversions: the form stores a SHA-256 hash of the lead's email and phone for the
// thank-you page, which passes them to Google with the conversion. Only hashes are kept or sent.
const LEAD_USER_DATA_KEY = "prw_lead_user_data";

export type LeadUserData = { sha256_email_address?: string; sha256_phone_number?: string };

async function sha256(value: string): Promise<string> {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Normalizes a US phone number to E.164 (+1XXXXXXXXXX), as Google requires. */
function toE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export async function saveLeadUserData(email?: string, phone?: string): Promise<void> {
  try {
    if (!crypto?.subtle) return;
    const data: LeadUserData = {};
    const normalizedEmail = email?.trim().toLowerCase();
    if (normalizedEmail) data.sha256_email_address = await sha256(normalizedEmail);
    const normalizedPhone = phone ? toE164(phone) : null;
    if (normalizedPhone) data.sha256_phone_number = await sha256(normalizedPhone);
    if (Object.keys(data).length) sessionStorage.setItem(LEAD_USER_DATA_KEY, JSON.stringify(data));
  } catch {
    // Enhanced conversions are a bonus; never block the lead over them.
  }
}

export function takeLeadUserData(): LeadUserData | null {
  try {
    const raw = sessionStorage.getItem(LEAD_USER_DATA_KEY);
    sessionStorage.removeItem(LEAD_USER_DATA_KEY);
    return raw ? (JSON.parse(raw) as LeadUserData) : null;
  } catch {
    return null;
  }
}
