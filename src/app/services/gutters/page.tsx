import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gutter Installation & Repair Southern NH",
  description:
    "Seamless gutter installation, repair, and gutter guard systems across Southern New Hampshire. Protect your home from water damage with Prescott Roofing.",
  alternates: { canonical: "/services/gutters" },
};

const faqs = [
  {
    question: "How often should gutters be cleaned?",
    answer: "In Southern NH, we recommend cleaning gutters at least twice a year — in late fall after the leaves drop and in late spring. Homes surrounded by trees may need more frequent cleaning. Gutter guards can significantly reduce the frequency.",
  },
  {
    question: "What are seamless gutters?",
    answer: "Seamless gutters are custom-fabricated on-site from a single piece of aluminum, cut to the exact length of each run. Unlike sectional gutters, they have no seams along the length, which means far fewer leak points and a cleaner appearance.",
  },
  {
    question: "Do gutter guards really work?",
    answer: "Quality gutter guards significantly reduce debris buildup and maintenance needs. They won't eliminate cleaning entirely — fine debris can still accumulate — but they prevent the major clogs from leaves, pine needles, and branches that cause overflows and ice dams.",
  },
  {
    question: "Can bad gutters damage my roof?",
    answer: "Yes. Clogged or damaged gutters cause water to back up under shingles, contributing to fascia rot, ice dams, and even foundation damage. Properly functioning gutters are essential to your roof system's overall health.",
  },
  {
    question: "What size gutters do I need?",
    answer: "Most homes in Southern NH use 5-inch K-style gutters with 2x3-inch or 3x4-inch downspouts. Homes with steep roofs, large roof areas, or heavy tree cover may benefit from 6-inch gutters and oversized downspouts to handle the higher water volume during heavy rain and snowmelt.",
  },
  {
    question: "Should I replace gutters when I replace my roof?",
    answer: "It depends on their condition. If your existing gutters are dented, sagging, leaking at seams, or pulling away from the fascia, a roof replacement is the ideal time to upgrade — we're already up there with equipment. We'll assess their condition during your inspection and give you an honest recommendation.",
  },
];

export default function GuttersPage() {
  return (
    <ServicePageLayout
      serviceName="Gutters"
      canonicalPath="/services/gutters"
      heroDescription="Seamless gutter installation, repair, and gutter guard systems to protect your home's roof, siding, and foundation from water damage."
      faqs={faqs}
      schemaService="Gutter Installation and Repair"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          Your Roof Is Only as Good as Your Gutters
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Gutters are the unsung hero of your roof system. They channel thousands of gallons of water away from your home every year — protecting your foundation, siding, landscaping, and basement from water damage. When gutters fail, everything downstream pays the price.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing installs, repairs, and maintains gutter systems across Southern NH. We treat gutters as a critical part of your roofing system — because they are. A new roof with failing gutters is like a new car with bald tires.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Our Gutter Services</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Seamless aluminum gutter installation (custom-cut on-site)",
            "Gutter repair, re-pitching, and realignment for proper drainage",
            "Downspout installation, rerouting, and extension",
            "Gutter guard and leaf protection systems",
            "Fascia board inspection and repair",
            "Gutter cleaning and seasonal maintenance",
            "Ice dam prevention support (proper gutter/eave coordination)",
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

        <h3 className="text-xl font-bold text-brand-navy mb-4">Why Seamless Gutters?</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Sectional gutters — the kind you buy in pieces at the hardware store — have seams every 10 feet. Every seam is a potential leak point, and they get worse over time as sealant dries out and expansion/contraction works the joints apart. In New Hampshire&apos;s freeze-thaw climate, those seams fail faster than in milder regions.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Seamless gutters are formed from a continuous coil of aluminum right at your home, cut to the exact length of each run. No mid-run seams means fewer leak points, less maintenance, and a cleaner look. The only joints are at corners and downspout connections, where we apply heavy-duty sealant and rivets.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Signs Your Gutters Need Attention</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Gutters don&apos;t fail dramatically — they degrade gradually, so it&apos;s easy to miss the warning signs until water damage appears. Watch for:
        </p>
        <ul className="space-y-2 mb-8 ml-4">
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Sagging or pulling away</strong> from the fascia board — usually means hidden rot or failed hangers.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Water pouring over the sides</strong> during rain — clogs, insufficient pitch, or undersized gutters.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Peeling paint or staining</strong> on your siding below the gutter line — overflow or leaking seams.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Pooling water near your foundation</strong> — missing, disconnected, or misdirected downspouts.</li>
          <li className="text-brand-charcoal/80 leading-relaxed list-disc"><strong className="text-brand-navy">Ice forming in or behind gutters</strong> — can contribute to <Link href="/services/ice-dam-removal" className="text-brand-copper font-semibold hover:underline">ice dam problems</Link> at the eave.</li>
        </ul>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Gutters and Your Roof: A System</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          We install gutters as part of a complete roof system, not as an afterthought. That means we coordinate gutter placement with drip edge installation, ensure proper overhang for water capture, and verify that downspout placement directs water well away from your foundation.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          If you&apos;re planning a <Link href="/services/roof-replacement" className="text-brand-copper font-semibold hover:underline">roof replacement</Link>, that&apos;s the ideal time to upgrade your gutters too. We&apos;re already on-site with the equipment, the old gutters come down during tear-off, and the new ones go up with fresh fascia and proper drip-edge integration.
        </p>

        <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Need a Gutter Assessment?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            We inspect gutters as part of every free roof inspection. Whether you need a full replacement, targeted repairs, or gutter guard installation, we&apos;ll give you an honest recommendation and a written estimate.
          </p>
          <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
            Get a Free Gutter Assessment
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
