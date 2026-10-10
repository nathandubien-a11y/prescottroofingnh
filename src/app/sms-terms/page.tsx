import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description:
    "SMS Terms & Conditions for Prescott Roofing text messaging program. Learn about opt-in, opt-out, message frequency, and your rights.",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "SMS Terms & Conditions" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SMS Terms &amp; Conditions
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Effective Date: September 30, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none space-y-8">

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">1. Program Name and Description</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              <strong className="text-brand-navy">Prescott Roofing Customer Care Texts.</strong> Prescott Roofing (operated by Dubien Enterprises LLC) sends text messages to customers and prospective customers who opt in, about their inquiry, inspection scheduling, appointment reminders, estimate follow-ups, and project status updates.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">2. How You Opt In</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              You can opt in by checking the SMS consent box on the free inspection form at{" "}
              <a href="https://prescottroofingnh.com/free-inspection" className="text-brand-copper hover:underline">prescottroofingnh.com/free-inspection</a>{" "}
              or{" "}
              <a href="https://prescottroofingnh.com/contact" className="text-brand-copper hover:underline">prescottroofingnh.com/contact</a>{" "}
              and submitting the form.
            </p>
            {/* TODO: Confirm with Nathan whether text-to-join via START is active before adding:
                "You may also opt in by texting START to 603-451-2224." */}

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">3. Message Frequency</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Message frequency varies based on your inquiry and project.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">4. Cost</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Message and data rates may apply.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">5. Opt-Out</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              You can cancel at any time by replying <strong className="text-brand-navy">STOP</strong>. After you send STOP, we will send one final message confirming you have been unsubscribed and you will not receive further messages unless you opt in again.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">6. Help</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Reply <strong className="text-brand-navy">HELP</strong> for assistance, or contact us at{" "}
              <a href={siteConfig.phoneHref} className="text-brand-copper hover:underline">{siteConfig.phone}</a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-copper hover:underline">{siteConfig.email}</a>.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">7. Carrier Disclaimer</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Carriers are not liable for delayed or undelivered messages.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">8. Consent Not Required</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Consent to receive text messages is not a condition of any purchase.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">9. Privacy</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              See our{" "}
              <a href="https://prescottroofingnh.com/privacy-policy" className="text-brand-copper hover:underline">Privacy Policy</a>{" "}
              at prescottroofingnh.com/privacy-policy. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">10. Contact</h2>
            <div className="bg-white border border-brand-coppertint/20 rounded-lg p-6 mt-4">
              <p className="font-bold text-brand-navy mb-2">{siteConfig.name}</p>
              <p className="text-brand-charcoal/80 text-sm mb-1">Operated by Dubien Enterprises LLC</p>
              <p className="text-brand-charcoal/80">
                Phone: <a href={siteConfig.phoneHref} className="text-brand-copper hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="text-brand-charcoal/80">
                Email: <a href={`mailto:${siteConfig.email}`} className="text-brand-copper hover:underline">{siteConfig.email}</a>
              </p>
              <p className="text-brand-charcoal/80">
                Web: <a href={siteConfig.url} className="text-brand-copper hover:underline">{siteConfig.url}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
