import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ice Dam Removal & Winter Roof Issues NH",
  description:
    "Safe ice dam removal and prevention in Southern New Hampshire. Protect your roof from freeze-thaw damage with Prescott Roofing's winter roofing expertise.",
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
    answer: "Most homeowner's policies cover sudden water damage caused by ice dams (the interior damage), but may not cover the ice dam removal itself or long-term fixes like insulation upgrades. We can help you understand your coverage and document damage for a claim.",
  },
  {
    question: "How do I know if I have an ice dam?",
    answer: "Look for thick ridges of ice along your eaves, icicles hanging from the gutter line, or water stains on interior walls and ceilings during winter. You may also notice ice forming behind your gutters rather than inside them. If you see any of these signs, call us before the water damage spreads.",
  },
  {
    question: "Will new gutters help prevent ice dams?",
    answer: "Gutters themselves don't cause ice dams — but clogged gutters can make the problem worse by giving meltwater no path off the roof. Clean, properly pitched gutters combined with adequate attic ventilation are the best combination. We can assess both during a winter roof evaluation.",
  },
];

export default function IceDamRemovalPage() {
  return (
    <ServicePageLayout
      serviceName="Ice Dam Removal & Winter Roof Issues"
      canonicalPath="/services/ice-dam-removal"
      heroDescription="Safe, effective ice dam removal and prevention for New Hampshire homeowners. Protect your roof and home from the freeze-thaw cycles that cause costly water damage."
      faqs={faqs}
      schemaService="Ice Dam Removal"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          New Hampshire&apos;s #1 Winter Roof Problem — And How to Beat It
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          If you&apos;ve lived in Southern NH for a winter, you know ice dams. Those thick ridges of ice along your eaves aren&apos;t just ugly — they&apos;re actively forcing water under your shingles and into your home. Left unchecked, ice dams cause stained ceilings, rotting sheathing, mold growth, and damaged insulation.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing provides both emergency ice dam removal and long-term prevention solutions. We understand the specific challenges of New Hampshire winters, and we&apos;ll help you protect your home from the inside out.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">How Ice Dams Form</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Understanding the cycle helps you understand the fix. Here&apos;s what happens:
        </p>
        <ol className="space-y-4 mb-8 ml-4">
          {[
            { label: "Heat Escapes the Attic", desc: "Warm air from your living space rises into the attic through gaps around fixtures, ductwork, and poorly sealed penetrations. Inadequate insulation makes this worse." },
            { label: "Snow Melts Unevenly", desc: "The warm attic heats the roof deck, melting snow from underneath on the upper sections of the roof where the attic sits. The eaves, which extend past the exterior wall, stay cold." },
            { label: "Meltwater Refreezes at the Eave", desc: "Water flows down the warm upper roof and hits the cold eave overhang. It refreezes, building up a ridge of ice — the dam." },
            { label: "Water Pools and Penetrates", desc: "As the dam grows, meltwater pools behind it. This standing water seeps under shingles, through the underlayment, and into your home. The damage compounds with every freeze-thaw cycle." },
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-copper text-white font-bold flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
              <div>
                <p className="font-bold text-brand-navy">{step.label}</p>
                <p className="text-brand-charcoal/70 text-sm mt-1">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

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
            Southern NH sits in a zone where temperatures regularly fluctuate around freezing throughout winter. This constant freeze-thaw cycle creates ideal ice dam conditions — especially on roofs with inadequate ventilation or insulation. Older homes in towns like Manchester, Nashua, Bedford, and Derry are particularly vulnerable because they were built before modern energy codes required the attic sealing and insulation depth that prevents heat loss through the roof deck.
          </p>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Prevention Is the Best Strategy</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          While we&apos;re here to help with emergency removal, the real fix for ice dams is preventing them from forming. The solution is almost always in your attic, not on your roof:
        </p>
        <ul className="space-y-2 mb-6 ml-4">
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Air sealing:</strong> Close gaps around light fixtures, plumbing stacks, attic hatches, and ductwork that allow warm air into the attic.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Insulation:</strong> Bring attic insulation up to current code depth (R-49 or higher in NH climate zones) to slow heat transfer through the ceiling.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Ventilation:</strong> Ensure balanced intake (soffit vents with proper baffles) and exhaust (ridge vent) so any heat that does reach the attic is flushed before it warms the deck.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Ice & water shield:</strong> During a <Link href="/services/roof-replacement" className="text-brand-copper font-semibold hover:underline">roof replacement</Link>, we install ice and water shield membrane along eaves, in valleys, and around penetrations as a last-line defense.</li>
        </ul>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          During your free inspection, we&apos;ll assess your attic&apos;s insulation and ventilation and recommend cost-effective improvements that will pay for themselves in reduced energy bills and prevented water damage.
        </p>

        <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
          Schedule Winter Roof Assessment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
