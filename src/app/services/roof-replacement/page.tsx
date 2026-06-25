import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Replacement in Southern NH",
  description:
    "Expert asphalt shingle roof replacement across Southern New Hampshire. Manufacturer-backed warranties, insurance claim assistance, and precision installation from Prescott Roofing.",
  alternates: { canonical: "/services/roof-replacement" },
};

const faqs = [
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements in Southern NH are completed in 1-3 days, depending on the size of your home and weather conditions. We'll give you a specific timeline during your free inspection.",
  },
  {
    question: "What type of shingles do you use?",
    answer: "We primarily install architectural (dimensional) asphalt shingles from top manufacturers like GAF, Owens Corning, and CertainTeed. These shingles offer superior wind resistance, a longer lifespan (25-50 years), and a more attractive look than 3-tab shingles.",
  },
  {
    question: "Will my insurance cover a roof replacement?",
    answer: "If your roof was damaged by a covered peril (storm, hail, wind, fallen tree), your homeowner's insurance typically covers replacement minus your deductible. We specialize in insurance claims and can help you document damage and navigate the process.",
  },
  {
    question: "How do I know if I need a replacement vs. a repair?",
    answer: "Common signs you need a full replacement include: shingles that are 20+ years old, widespread curling or buckling, multiple leaks, granule loss in gutters, or significant storm damage. During your free inspection, we'll give you an honest assessment — we won't push a replacement if a repair will do.",
  },
  {
    question: "Do you handle the permits?",
    answer: "Yes. We handle all necessary permits and ensure your new roof meets New Hampshire building codes. That's included in our service — you don't need to worry about it.",
  },
];

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      serviceName="Roof Replacement"
      heroDescription="Full asphalt shingle roof replacement with manufacturer-backed warranties and precision installation. The #1 roofing service for Southern NH homeowners."
      faqs={faqs}
      schemaService="Residential Roof Replacement"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          New Hampshire&apos;s Weather Demands a Roof That Can Take It
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          Between heavy snow loads, ice dams, nor&apos;easters, and summer storms, your roof takes more punishment in Southern NH than in most parts of the country. When it&apos;s time for a replacement, you need a contractor who understands these conditions and installs with the precision to withstand them.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing specializes in complete asphalt shingle roof replacements for homes across Hillsborough, Rockingham, and Merrimack counties. We use top-tier materials from manufacturers like GAF, Owens Corning, and CertainTeed, and every installation is backed by both manufacturer and workmanship warranties.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">What&apos;s Included in Every Roof Replacement</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Complete tear-off of existing roofing materials",
            "Full deck inspection and repair of any damaged sheathing",
            "Ice & water shield installation in all valleys and eaves",
            "Premium synthetic underlayment for additional protection",
            "Architectural shingle installation with manufacturer-spec nailing patterns",
            "New flashing at all penetrations, walls, and chimneys",
            "Ridge vent installation for proper attic ventilation",
            "Complete cleanup with magnetic nail sweep",
            "Final walkthrough and quality inspection",
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

        <h3 className="text-xl font-bold text-brand-navy mb-4">Insurance Claim? We&apos;ve Got You Covered</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          If your roof replacement is the result of storm damage, we bring real insurance-restoration expertise to the table. We&apos;ll document damage using Xactimate (the same software your insurer uses), coordinate with your adjuster, and make sure nothing falls through the cracks.
        </p>

        <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Not Sure If You Need a Replacement?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            Book a free inspection and we&apos;ll give you an honest assessment. If a repair will do, we&apos;ll tell you — we don&apos;t push replacements you don&apos;t need.
          </p>
          <Link
            href="/free-inspection"
            className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            Schedule Free Inspection
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
