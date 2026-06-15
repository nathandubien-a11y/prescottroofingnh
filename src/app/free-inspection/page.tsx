import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export const metadata: Metadata = {
  title: "Free Roof Inspection | Get a Quote",
  description:
    "Schedule your free, no-obligation roof inspection with Archer Roofing. Serving Southern NH with expert assessments, honest recommendations, and insurance claim help.",
  alternates: { canonical: "/free-inspection" },
};

export default function FreeInspectionPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Free Inspection" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get Your Free Roof Inspection
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            No cost. No obligation. Just an honest assessment of your roof&apos;s condition from Southern NH&apos;s most trusted roofing experts.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-6">
                What to Expect
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  { step: "1", title: "Schedule", desc: "Fill out the form or call us. We'll find a time that works for you — usually within 48 hours." },
                  { step: "2", title: "Inspection", desc: "We inspect your entire roof system — shingles, flashing, vents, gutters, and attic. We take photos and document everything." },
                  { step: "3", title: "Report", desc: "You get an honest assessment with clear recommendations. If it's fine, we'll tell you. If it needs work, we'll explain your options and provide a detailed estimate." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-copper text-white font-bold flex items-center justify-center shrink-0 text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy">{item.title}</h3>
                      <p className="text-brand-charcoal/70 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-brand-coppertint/20 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-brand-navy mb-3">Prefer to call?</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-xl font-bold text-brand-copper hover:underline"
                >
                  <PhoneIcon className="text-brand-copper" />
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-brand-charcoal/60 mt-2">Available {siteConfig.hours}</p>
              </div>

              <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6">
                <h3 className="font-bold text-brand-navy mb-2">Storm or Insurance Claim?</h3>
                <p className="text-sm text-brand-charcoal/70">
                  Check the insurance claim box on the form and we&apos;ll prioritize your request. We bring real Xactimate estimating experience and will help you navigate the entire claims process — at no extra cost.
                </p>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
    </>
  );
}
