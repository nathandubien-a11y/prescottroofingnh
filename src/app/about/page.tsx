import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Archer Roofing",
  description:
    "Learn about Archer Roofing — a family-owned roofing company serving Southern NH. Precision craftsmanship and real insurance-claim expertise.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Archer Roofing
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Family-owned. Precision-driven. Insurance-claim experts. Here&apos;s the story behind the name and why it matters for your roof.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                Why &ldquo;Archer&rdquo;?
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Archer Roofing is named after the owner&apos;s son, Archer. It&apos;s personal — but it&apos;s also purposeful. An archer is defined by precision: straight lines, exact measurements, hitting the mark every time. That&apos;s exactly how we approach every roofing project.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                We&apos;re a family-owned company, and we put our family&apos;s name behind every roof we touch. That means no cutting corners, no cheap materials, and no disappearing after the job is done. When your name is on it, you do it right.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-8">
                This isn&apos;t a faceless franchise or a crew with a truck and a ladder. Archer Roofing is built on the belief that Southern NH homeowners deserve a roofer who combines genuine craftsmanship with the expertise to handle everything — including the insurance and storm-damage claims that most roofers fumble.
              </p>

              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                Insurance-Restoration Expertise
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Our team comes from the insurance-restoration world. We have direct, hands-on experience with Xactimate estimating (the software insurance companies use), adjuster relationships, claims documentation, and the entire approval process. This is the expertise that most roofing contractors don&apos;t have — and it&apos;s what sets Archer apart.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed">
                When a storm hits your neighborhood and you need both a roof repair and a successful insurance claim, we&apos;re the team that can deliver on both — because we&apos;ve been doing it for years. And for retail customers, we offer competitive pricing and flexible financing to make a new roof affordable.
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
        subheading="Schedule a free inspection and see the Archer difference — precision, honesty, and real expertise."
      />
    </>
  );
}
