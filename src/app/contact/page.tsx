import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export const metadata: Metadata = {
  title: "Contact Prescott Roofing",
  description:
    "Contact Prescott Roofing for roofing services across Southern New Hampshire. Call 603-451-2224 or fill out our contact form for a free inspection.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Have a question? Need an estimate? Ready to schedule your free inspection? Get in touch — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-copper/10 flex items-center justify-center shrink-0">
                    <PhoneIcon className="text-brand-copper" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Phone</h3>
                    <a href={siteConfig.phoneHref} className="text-lg font-semibold text-brand-copper hover:underline">
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-brand-charcoal/60 mt-1">Available {siteConfig.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-copper/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C45A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-copper hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-copper/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C45A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Service Area</h3>
                    <p className="text-brand-charcoal/80">
                      {siteConfig.serviceArea.description}
                    </p>
                    <p className="text-sm text-brand-charcoal/60 mt-1">
                      {siteConfig.serviceArea.counties.map(c => `${c.name} (${c.state})`).join(", ")}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
