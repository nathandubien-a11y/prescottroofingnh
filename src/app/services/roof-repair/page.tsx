import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Repair in Southern NH",
  description:
    "Roof leak repair, flashing, chimney sealing, and shingle replacement across Southern NH. Fast response and honest assessments from Prescott Roofing.",
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
  {
    question: "How much does a roof repair cost?",
    answer: "Roof repair costs vary widely depending on the type of repair, materials involved, and how accessible the damage is. A simple shingle replacement costs far less than a full flashing overhaul. We provide written estimates after every inspection so you know exactly what to expect.",
  },
  {
    question: "Will a repair void my roof warranty?",
    answer: "Not if it's done correctly by a qualified contractor. We follow manufacturer specifications on every repair — matching shingle lines, using compatible underlayment and flashing, and maintaining proper nailing patterns. This preserves your existing warranty coverage.",
  },
];

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      serviceName="Roof Repair"
      canonicalPath="/services/roof-repair"
      heroDescription="Expert leak detection, flashing repair, chimney sealing, and shingle replacement across Southern New Hampshire. We fix it right the first time."
      faqs={faqs}
      schemaService="Residential Roof Repair"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          Stop the Leak Before It Becomes a Bigger Problem
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          A small roof problem today can become a major headache tomorrow. Water damage spreads fast — from sheathing rot to mold in your attic to stained ceilings and compromised insulation. In Southern New Hampshire, where freeze-thaw cycles stress every joint and seam on your roof, even minor damage accelerates quickly.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing provides thorough roof repairs across Hillsborough, Rockingham, and Merrimack counties. We don&apos;t just patch over the symptom — we diagnose the root cause and deliver a lasting fix. If a repair won&apos;t cut it, we&apos;ll tell you honestly and walk you through your <Link href="/services/roof-replacement" className="text-brand-copper font-semibold hover:underline">replacement options</Link>.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Common Roof Repairs We Handle</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Leak detection and targeted repair",
            "Missing, cracked, or curling shingle replacement",
            "Flashing repair and replacement around chimneys, vents, and skylights",
            "Chimney flashing and crown sealing",
            "Ridge cap repair and replacement",
            "Pipe boot and vent seal replacement",
            "Soffit and fascia repair",
            "Valley repair and re-sealing",
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

        <Image
          src="/chimney-flashing-shingle-roof.jpg"
          alt="Close-up of chimney step flashing and shingle work on a residential roof in Southern NH"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full aspect-[4/3] mb-8"
        />

        <h3 className="text-xl font-bold text-brand-navy mb-4">How We Approach Every Repair</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Not every leak starts where the water stain appears. Water can travel along rafters, sheathing, and underlayment before it finds a way into your living space — sometimes feet from the actual entry point. That&apos;s why every Prescott Roofing repair starts with a thorough inspection, not a guess.
        </p>
        <ol className="space-y-4 mb-8 ml-4">
          {[
            { label: "Inspection", desc: "We examine the roof surface, attic space, and interior damage points to trace the leak back to its source. We check flashing, boots, valleys, and shingle condition." },
            { label: "Diagnosis", desc: "We identify the root cause — not just the symptom. A water stain near a chimney might be a flashing failure, a cracked cricket, or condensation from a bathroom vent. The fix depends on the cause." },
            { label: "Written Estimate", desc: "You get a clear, line-item estimate for the repair. No surprises, no vague labor charges. If we think a repair isn't worth it given your roof's age, we'll say so." },
            { label: "Lasting Repair", desc: "We match materials to your existing roof, follow manufacturer nailing patterns, and seal every penetration. The goal is a fix that lasts as long as the rest of the roof." },
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

        <h3 className="text-xl font-bold text-brand-navy mb-4">Repair vs. Replace: An Honest Assessment</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          We don&apos;t push replacements when a repair will solve the problem. But we also won&apos;t put a bandage on a roof that&apos;s past its useful life — that would just cost you more in the long run. Here&apos;s our general guideline:
        </p>
        <ul className="space-y-2 mb-8 ml-4">
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Repair makes sense</strong> when damage is localized, the roof is under 15-20 years old, and the surrounding shingles are in good shape.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Replacement makes sense</strong> when you have multiple active leaks, widespread curling or granule loss, or the roof is approaching the end of its warranty period.</li>
        </ul>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          During your free inspection, we&apos;ll show you what we found and explain exactly why we&apos;re recommending what we&apos;re recommending.
        </p>

        <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Storm Damage?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            If your repair is related to <Link href="/services/storm-damage" className="text-brand-copper font-semibold hover:underline">storm or wind damage</Link>, we can help with the insurance claim too. We document damage in Xactimate format and coordinate directly with your adjuster.
          </p>
          <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
            Schedule Free Inspection
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
