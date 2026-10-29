"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { saveLeadUserData } from "@/lib/googleAds";

const TRACKING_PARAMS = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

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
async function deliverLead(fields: Record<string, string>, subject: string): Promise<boolean> {
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

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-md text-base text-brand-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function LpQuoteForm({
  source,
  projectOptions = ["Full replacement", "Repair", "Not sure"],
}: {
  source: string;
  projectOptions?: string[];
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const smsConsent = formData.get("sms_consent") === "yes";

    // Keep the ad click ID and UTM tags so each lead can be tied back to the campaign.
    const params = new URLSearchParams(window.location.search);
    const tracking: Record<string, string> = {};
    for (const key of TRACKING_PARAMS) {
      const value = params.get(key);
      if (value) tracking[key] = value;
    }

    // Spam trap: bots fill the hidden field. Pretend it worked and send nothing.
    if (data.company_website) {
      router.push("/lp/thank-you");
      return;
    }
    delete data.company_website;

    const delivered = await deliverLead(
      {
        ...data,
        ...tracking,
        sms_consent: smsConsent ? "yes" : "no",
        ...(smsConsent ? { sms_consent_at: new Date().toISOString(), sms_consent_page: window.location.href } : {}),
        lead_source: source,
        landing_page: window.location.href,
      },
      `New Ad Lead: ${data.name} — ${data.project || "Roof Quote"} (${data.town})`,
    );

    if (!delivered) {
      setStatus("error");
      return;
    }
    window.dataLayer?.push({ event: "lead_form_success", lead_source: source });
    await saveLeadUserData(data.email, data.phone);
    router.push("/lp/thank-you");
  }

  return (
    <form
      id="quote"
      onSubmit={handleSubmit}
      className="relative scroll-mt-24 bg-white rounded-xl p-6 md:p-7 shadow-2xl border-t-4 border-brand-copper"
    >
      <h2 className="text-2xl font-extrabold text-brand-navy leading-tight">Get Your Free Roof Quote</h2>
      <p className="text-sm text-brand-charcoal/70 mt-1 mb-5">
        Takes 30 seconds. We&apos;ll reach out within 24 hours to schedule your free inspection.
      </p>

      <div className="space-y-3">
        <div>
          <label htmlFor="lp-name" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Full name
          </label>
          <input id="lp-name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lp-phone" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Phone
          </label>
          <input id="lp-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lp-email" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Email <span className="font-normal text-brand-charcoal/50">(optional)</span>
          </label>
          <input id="lp-email" name="email" type="email" autoComplete="email" inputMode="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lp-town" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Town or address
          </label>
          <input id="lp-town" name="town" type="text" autoComplete="address-level2" required placeholder="e.g. Bedford, NH" className={inputClass} />
        </div>
        <fieldset>
          <legend className="block text-sm font-semibold text-brand-charcoal mb-1.5">What do you need?</legend>
          <div className="grid grid-cols-3 gap-2">
            {projectOptions.map((opt, i) => (
              <label key={opt} className="relative cursor-pointer">
                <input type="radio" name="project" value={opt} defaultChecked={i === 0} className="peer sr-only" />
                <span className="flex h-full items-center justify-center text-center rounded-md border border-gray-300 px-2 py-2.5 text-sm font-medium text-brand-charcoal peer-checked:border-brand-copper peer-checked:bg-brand-copper/10 peer-checked:text-brand-navy peer-focus-visible:ring-2 peer-focus-visible:ring-brand-copper/50">
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {/* Spam trap: hidden from people, filled in by bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="lp-website">Leave this field empty</label>
          <input id="lp-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <label htmlFor="lp-sms" className="mt-4 flex items-start gap-2.5 cursor-pointer">
        <input
          id="lp-sms"
          type="checkbox"
          name="sms_consent"
          value="yes"
          className="mt-0.5 w-4 h-4 shrink-0 rounded border-gray-300 text-brand-copper focus:ring-brand-copper/50"
        />
        <span className="text-[11px] leading-snug text-brand-charcoal/60">
          Optional: I agree to receive text messages from Prescott Roofing about my inquiry, scheduling, reminders, and project
          updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent is not
          a condition of purchase. See our{" "}
          <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and{" "}
          <Link href="/sms-terms" className="underline">SMS Terms</Link>.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          Something went wrong. Please call us at{" "}
          <a href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 w-full py-4 bg-brand-copper text-white text-lg font-extrabold rounded-md hover:bg-brand-copper/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="mt-3 text-xs text-brand-charcoal/60 text-center">
        No cost, no obligation. We never sell or share your information.
      </p>
    </form>
  );
}
