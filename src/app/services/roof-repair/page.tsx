import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Repair in Southern NH",
  description:
    "Expert roof leak repair, flashing repair, chimney sealing, and shingle replacement across Southern New Hampshire. Fast response, honest assessments from Prescott Roofing.",
  alternates: { canonical: "/services/roof-repair" },
};

const faqs = [
  {
    question: "How do I know if my roof has a leak?",
    answer: "Common signs include water stains on ceilings or walls, damp spots in the attic, missing or damaged shingles, and granules collecting in gutters. If you notice any of these, schedule a free inspection — catching leaks early prevents expensive structural damage.",
  },
  {
    question: "Can you repair my roof, or does it need to be replaced?",
    answer: "That depends on the extent of the damage, the age of your roof, and the condition of the underlying structure. If the damage is localized and the roof is otherwise sound, a repair is usually the right call. We'll always give you an honest recommendation.",
  },
  {
    question: "How quickly can you respond to an emergency repair?",
    answer: "For emergency situations like active leaks or storm damage, we prioritize rapid response. In most cases, we can have someone at your property within 24 hours to assess the damage and begin temporary or permanent repairs.",
  },
  {
    question: "Do you repair flat roofs or only shingled roofs?",
    answer: "We primarily work with shingled residential roofs, but we can assess and repair most residential roof types. Contact us with details about your situation and we'll let you know if we can help.",
  },
];

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      serviceName="Roof Repair"
      heroDescription="Expert leak detection, flashing repair, chimney sealing, and shingle replacement across Southern New Hampshire. We fix it right the first time."
      faqs={faqs}
      schemaService="Residential Roof Repair"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          Stop the Leak Before It Becomes a Bigger Problem
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          A small roof problem today can become a major headache tomorrow. Water damage spreads fast — from sheathing rot to mold in your attic to stained ceilings and compromised insulation. The smart move is to catch it early and fix it right.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing provides thorough roof repairs across Southern NH. We don&apos;t just patch over the symptom — we diagnose the root cause and deliver a lasting fix. If a repair won&apos;t cut it, we&apos;ll tell you honestly and walk you through your options.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Common Roof Repairs We Handle</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Leak detection and targeted repair",
            "Missing, cracked, or curling shingle replacement",
            "Flashing repair and replacement around chimneys, vents, and skylights",
            "Chimney flashing and crown sealing",
            "Ridge cap repair",
            "Pipe boot and vent seal replacement",
            "Soffit and fascia repair",
            "Emergency tarping for active leaks",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                <circle cx="12" cy="12" r="10" fill="#C45A28" />
                <polyline points="8 12 11 15 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-brand-charcoal/80">{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Storm Damage?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            If your repair is related to storm or wind damage, we can help with the insurance claim too — just ask about our claims assistance when you schedule your inspection.
          </p>
          <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
            Schedule Free Inspection
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
