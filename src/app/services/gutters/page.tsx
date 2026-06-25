import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gutter Installation & Repair in Southern NH",
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
];

export default function GuttersPage() {
  return (
    <ServicePageLayout
      serviceName="Gutters"
      heroDescription="Seamless gutter installation, repair, and gutter guard systems to protect your home's roof, siding, and foundation from water damage."
      faqs={faqs}
      schemaService="Gutter Installation and Repair"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          Your Roof Is Only as Good as Your Gutters
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          Gutters are the unsung hero of your roof system. They channel thousands of gallons of water away from your home every year — protecting your foundation, siding, landscaping, and basement from water damage. When gutters fail, everything downstream pays the price.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing installs, repairs, and maintains gutter systems across Southern NH. We treat gutters as a critical part of your roofing system — because they are.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Our Gutter Services</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Seamless aluminum gutter installation (custom-cut on-site)",
            "Gutter repair and re-pitching for proper drainage",
            "Downspout installation and rerouting",
            "Gutter guard and leaf protection systems",
            "Fascia board inspection and repair",
            "Gutter cleaning and maintenance",
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

        <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
          Get a Free Gutter Assessment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
