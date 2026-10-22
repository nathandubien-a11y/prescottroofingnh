import type { Metadata } from "next";
import { LpHeader, LpFooter } from "@/components/lp/LpChrome";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

// Reaching this page means a quote request went through; use it as the Google Ads conversion page.
export const metadata: Metadata = {
  title: { absolute: "Thank You | Prescott Roofing" },
  robots: { index: false, follow: false },
};

export default function LandingThankYouPage() {
  return (
    <>
      <LpHeader />
      <section className="bg-brand-offwhite flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Thanks, your request is in.</h1>
          <p className="mt-4 text-lg text-brand-charcoal/75">
            We&apos;ll reach out within 24 hours to schedule your free roof inspection. Need to talk sooner? Give us a call.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            <PhoneIcon />
            Call {siteConfig.phone}
          </a>
          <div className="mt-12 rounded-lg border border-brand-coppertint/40 bg-white p-6 text-left">
            <h2 className="font-bold text-brand-navy">What happens next</h2>
            <ol className="mt-3 space-y-2 text-sm text-brand-charcoal/75 list-decimal pl-5">
              <li>We reach out to book a time that works for you.</li>
              <li>We inspect your whole roof system and take photos.</li>
              <li>You get a clear, written quote, including your CertainTeed warranty options.</li>
            </ol>
          </div>
        </div>
      </section>
      <LpFooter />
    </>
  );
}
