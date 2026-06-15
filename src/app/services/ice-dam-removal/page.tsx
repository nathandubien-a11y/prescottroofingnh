import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ice Dam Removal & Winter Roof Issues NH",
  description:
    "Safe ice dam removal and prevention in Southern New Hampshire. Protect your roof from freeze-thaw damage with Archer Roofing's winter roofing expertise.",
  alternates: { canonical: "/services/ice-dam-removal" },
};

const faqs = [
  {
    question: "What causes ice dams?",
    answer: "Ice dams form when heat escapes through your roof and melts snow on the upper sections. The meltwater flows down to the colder eaves, where it refreezes and creates a dam. Water then pools behind the dam and can seep under shingles into your home. Poor attic insulation and ventilation are the primary culprits.",
  },
  {
    question: "Can ice dams be prevented?",
    answer: "Yes. Proper attic insulation and ventilation are the long-term solution — they keep the roof surface cold so snow doesn't melt unevenly. Ice and water shield membrane along the eaves also provides a critical backup barrier. We can assess your attic setup and recommend improvements.",
  },
  {
    question: "Is it safe to remove ice dams myself?",
    answer: "We strongly advise against DIY ice dam removal. Using picks, axes, or salt can damage your shingles and void warranties. Working on an icy roof is extremely dangerous. Our team uses professional steaming equipment that removes ice dams safely without damaging your roof.",
  },
  {
    question: "Does insurance cover ice dam damage?",
    answer: "Most homeowner's policies cover sudden water damage caused by ice dams (the interior damage), but may not cover the ice dam removal itself or long-term fixes. We can help you understand your coverage and document damage for a claim.",
  },
];

export default function IceDamRemovalPage() {
  return (
    <ServicePageLayout
      serviceName="Ice Dam Removal & Winter Roof Issues"
      heroDescription="Safe, effective ice dam removal and prevention for New Hampshire homeowners. Protect your roof and home from the freeze-thaw cycles that cause costly water damage."
      faqs={faqs}
      schemaService="Ice Dam Removal"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          New Hampshire&apos;s #1 Winter Roof Problem — And How to Beat It
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          If you&apos;ve lived in Southern NH for a winter, you know ice dams. Those thick ridges of ice along your eaves aren&apos;t just ugly — they&apos;re actively forcing water under your shingles and into your home. Left unchecked, ice dams cause stained ceilings, rotting sheathing, mold growth, and damaged insulation.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Archer Roofing provides both emergency ice dam removal and long-term prevention solutions. We understand the specific challenges of New Hampshire winters, and we&apos;ll help you protect your home from the inside out.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Our Ice Dam Services</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Professional steam ice dam removal (safe, no roof damage)",
            "Emergency response for active leaks from ice dams",
            "Attic insulation assessment and improvement recommendations",
            "Ventilation evaluation (ridge vent, soffit vent, baffles)",
            "Ice and water shield installation during roof replacement",
            "Heat cable installation for chronic problem areas",
            "Interior water damage documentation for insurance claims",
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

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Why Ice Dams Are Worse in Southern NH</h4>
          <p className="text-brand-charcoal/70">
            Southern NH sits in a zone where temperatures regularly fluctuate around freezing throughout winter. This constant freeze-thaw cycle creates ideal ice dam conditions — especially on roofs with inadequate ventilation or insulation. Older homes in towns like Manchester, Nashua, and Concord are particularly vulnerable.
          </p>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Prevention Is the Best Strategy</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          While we&apos;re here to help with emergency removal, the real fix for ice dams is preventing them from forming. During your free inspection, we&apos;ll assess your attic&apos;s insulation and ventilation and recommend cost-effective improvements that will pay for themselves in reduced energy bills and prevented water damage.
        </p>

        <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
          Schedule Winter Roof Assessment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
