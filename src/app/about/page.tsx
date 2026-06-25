import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Prescott Roofing",
  description:
    "Learn about Prescott Roofing — a family-owned roofing company serving Southern NH. Quality craftsmanship and real insurance-claim expertise.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Prescott Roofing
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Family-owned. Quality-driven. Insurance-claim experts. Here&apos;s who we are and why it matters for your roof.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                Who We Are
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Prescott Roofing is a family-owned company built on a simple idea: do the job right, every single time. We put our name behind every roof we touch, and that means no cutting corners, no cheap materials, and no disappearing after the job is done.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                We&apos;re a family-owned company, and we put our family&apos;s name behind every roof we touch. That means no cutting corners, no cheap materials, and no disappearing after the job is done. When your name is on it, you do it right.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-8">
                This isn&apos;t a faceless franchise or a crew with a truck and a ladder. Prescott Roofing is built on the belief that Southern NH homeowners deserve a roofer who combines genuine craftsmanship with the expertise to handle everything — including the insurance and storm-damage claims that most roofers fumble.
              </p>

              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                Retail Roofing Specialists
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                At Prescott Roofing, we specialize in retail roofing — straightforward roof replacements, repairs, and installations for homeowners who want quality work at a fair price. Competitive pricing, flexible financing, and manufacturer-backed warranties are the foundation of every project we take on.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed">
                That said, our team also brings real insurance-restoration experience to the table. If you&apos;re dealing with storm damage and need to file a claim, we can handle that too — from Xactimate estimates and damage documentation to adjuster coordination and the full approval process. Whether you&apos;re paying out of pocket or going through insurance, you get the same precision craftsmanship on every project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-brand-coppertint/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-4">Our Commitments</h3>
                <ul className="space-y-3">
                  {[
                    "Honest assessments — we won't push a replacement if a repair will do",
                    "Transparent pricing — no hidden fees or surprise charges",
                    "Insurance expertise — real Xactimate experience, not just a badge",
                    "Quality materials — manufacturer-spec installs with full warranties",
                    "Clean job sites — magnetic nail sweep and complete cleanup, every time",
                    "Standing behind our work — we don't disappear after the last shingle",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#C45A28" />
                        <polyline points="8 12 11 15 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-brand-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Licensing & Insurance</h3>
                <p className="text-white/80 text-sm mb-2">{siteConfig.license}</p>
                <p className="text-white/80 text-sm">{siteConfig.insurance}</p>
                <p className="text-white/60 text-xs mt-3">
                  {/* [NATHAN: SUPPLY] — exact license number and insurance policy details */}
                  License and policy numbers available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <CTASection
        heading="Ready to Work With a Roofer You Can Trust?"
        subheading="Schedule a free inspection and see the Prescott difference — quality, honesty, and real expertise."
      />
    </>
  );
}
