import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Replacement in Southern NH",
  description:
    "Full asphalt shingle roof replacement across Southern NH. Manufacturer-backed warranties, insurance claim help, and precision installation.",
  alternates: { canonical: "/services/roof-replacement" },
};

const faqs = [
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements in Southern NH are completed in 1-3 days, depending on the size of your home and weather conditions. Larger homes with steep pitches, multiple layers, or extensive decking repair may take up to four days. We'll give you a specific timeline during your free inspection.",
  },
  {
    question: "What type of shingles do you use?",
    answer: "We primarily install architectural (dimensional) asphalt shingles from GAF, CertainTeed, and Owens Corning. These include the GAF Timberline HDZ, CertainTeed Landmark, and their premium counterparts. Each offers 130+ mph wind warranties, algae resistance, and a lifespan of 25-50 years depending on the line.",
  },
  {
    question: "Will my insurance cover a roof replacement?",
    answer: "If your roof was damaged by a covered peril — wind, hail, ice damming, or a fallen tree — your homeowner's insurance typically covers replacement minus your deductible. We specialize in insurance claims: Xactimate documentation, adjuster coordination, and supplement handling when the initial approval falls short.",
  },
  {
    question: "How do I know if I need a replacement vs. a repair?",
    answer: "Common signs you need a full replacement include: shingles that are 20+ years old, widespread curling or buckling, multiple leaks, heavy granule loss in gutters, or significant storm damage. During your free inspection, we'll give you an honest assessment — we won't push a replacement if a repair will do.",
  },
  {
    question: "Do you handle the permits?",
    answer: "Yes. We handle all necessary building permits for every town we serve and ensure your new roof meets current New Hampshire or Massachusetts building codes. That's included in our service — you don't need to worry about it.",
  },
  {
    question: "Can I put new shingles over my existing roof?",
    answer: "We don't recommend it. Layering new shingles over old ones hides underlying deck damage, adds weight the structure may not support, and can void manufacturer warranties. Every Prescott Roofing replacement starts with a complete tear-off so we can inspect and repair the deck underneath.",
  },
  {
    question: "What warranties do I get?",
    answer: "You receive two warranties: the shingle manufacturer's material warranty (typically 25-50 years depending on the product line) and our workmanship warranty covering installation quality. With enhanced manufacturer programs, system warranties can cover both materials and labor for the full warranty period.",
  },
  {
    question: "Do you offer financing for roof replacements?",
    answer: "Yes. We offer flexible financing options with affordable monthly payments so a new roof doesn't have to wait. Ask us about available financing during your free inspection and we'll walk you through the options.",
  },
];

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      serviceName="Roof Replacement"
      heroDescription="Full asphalt shingle roof replacement with manufacturer-backed warranties and precision installation. The #1 roofing service for Southern NH homeowners."
      faqs={faqs}
      schemaService="Residential Roof Replacement"
      canonicalPath="/services/roof-replacement"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          New Hampshire&apos;s Weather Demands a Roof That Can Take It
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Between heavy snow loads, ice dams, nor&apos;easters, and summer storms, your roof takes more punishment in Southern NH than in most parts of the country. When it&apos;s time for a replacement, you need a contractor who understands these conditions and installs with the precision to withstand them.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Prescott Roofing specializes in complete asphalt shingle roof replacements for homes across Hillsborough, Rockingham, and Merrimack counties. We use top-tier materials from manufacturers like GAF, Owens Corning, and CertainTeed, and every installation is backed by both manufacturer and workmanship warranties.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">What&apos;s Included in Every Roof Replacement</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Every Prescott Roofing replacement follows the same systematic process — no shortcuts, no exceptions. Here&apos;s what you get:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Complete tear-off of existing roofing materials down to the deck",
            "Full deck inspection — we repair or replace any damaged or soft plywood sheathing",
            "Ice & water shield membrane along eaves, in valleys, and around all penetrations",
            "Premium synthetic underlayment across the entire roof surface",
            "New aluminum drip edge along eaves and rakes",
            "Architectural shingle installation with manufacturer-spec nailing patterns",
            "Step and counter flashing at all walls, chimneys, and penetrations",
            "Ridge vent installation for balanced attic ventilation",
            "Pipe boot and vent flashing replacement",
            "Complete cleanup with magnetic nail sweep of the yard and landscaping",
            "Final walkthrough and quality inspection with you",
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

        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src="/gaf-storm-guard-underlayment-installation.jpg"
            alt="GAF Storm Guard ice and water shield underlayment being installed during a roof replacement in Southern NH"
            width={800}
            height={1000}
            className="rounded-lg object-cover w-full aspect-[4/5]"
          />
          <Image
            src="/completed-shingle-roof-southern-nh.jpg"
            alt="Completed architectural shingle roof viewed from the ridge on a residential home in Southern NH"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full aspect-[4/5]"
          />
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Shingle Options: Good, Better, Best</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          We install architectural shingles from the industry&apos;s top manufacturers. Each tier offers increasing wind resistance, warranty coverage, and aesthetic appeal. Here&apos;s how the most popular lines compare:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-brand-navy text-white text-left">
                <th className="px-4 py-3 font-bold">Tier</th>
                <th className="px-4 py-3 font-bold">Product</th>
                <th className="px-4 py-3 font-bold">Wind Rating</th>
                <th className="px-4 py-3 font-bold">Warranty</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-brand-coppertint/20">
                <td className="px-4 py-3 font-semibold text-brand-navy">Good</td>
                <td className="px-4 py-3 text-brand-charcoal/80">CertainTeed Landmark</td>
                <td className="px-4 py-3 text-brand-charcoal/80">110 mph</td>
                <td className="px-4 py-3 text-brand-charcoal/80">Limited Lifetime</td>
              </tr>
              <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                <td className="px-4 py-3 font-semibold text-brand-navy">Better</td>
                <td className="px-4 py-3 text-brand-charcoal/80">GAF Timberline HDZ</td>
                <td className="px-4 py-3 text-brand-charcoal/80">130 mph</td>
                <td className="px-4 py-3 text-brand-charcoal/80">Limited Lifetime + LayerLock</td>
              </tr>
              <tr className="border-t border-brand-coppertint/20">
                <td className="px-4 py-3 font-semibold text-brand-navy">Better</td>
                <td className="px-4 py-3 text-brand-charcoal/80">CertainTeed Landmark Pro</td>
                <td className="px-4 py-3 text-brand-charcoal/80">130 mph</td>
                <td className="px-4 py-3 text-brand-charcoal/80">Limited Lifetime + Max Def colors</td>
              </tr>
              <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                <td className="px-4 py-3 font-semibold text-brand-copper">Best</td>
                <td className="px-4 py-3 text-brand-charcoal/80">GAF Timberline UHDZ</td>
                <td className="px-4 py-3 text-brand-charcoal/80">130 mph</td>
                <td className="px-4 py-3 text-brand-charcoal/80">Limited Lifetime + Ultra-HD styling</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          All shingles in our lineup carry algae-resistance technology and Class A fire ratings. The &quot;Better&quot; and &quot;Best&quot; tiers unlock enhanced system warranties from the manufacturer when paired with matching starter strips, ridge caps, and underlayment — covering both materials and labor for the full warranty period. During your inspection, we&apos;ll recommend the tier that fits your priorities and budget.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Typical NH Project Timeline</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          From first call to final cleanup, here&apos;s what a typical residential roof replacement looks like:
        </p>
        <ol className="space-y-4 mb-8 ml-4">
          {[
            { label: "Free Inspection (Day 1)", desc: "We assess your roof's condition, photograph findings, and discuss options. You get a written estimate — no pressure." },
            { label: "Material Selection (Days 2-3)", desc: "Choose your shingle line, color, and warranty tier. We order materials and schedule the install." },
            { label: "Installation (Days 5-10)", desc: "Typical installs take 1-3 days depending on home size and complexity. We protect landscaping, complete the tear-off, inspect the deck, and install your new roof system." },
            { label: "Final Walkthrough", desc: "We walk the property with you, point out the work, run a magnetic nail sweep, and make sure you're satisfied before we leave." },
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

        <h3 className="text-xl font-bold text-brand-navy mb-4">What Affects Replacement Cost</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Every roof is different. These factors influence the scope and price of your replacement:
        </p>
        <ul className="space-y-2 mb-8 ml-4">
          {[
            "Roof size (measured in roofing squares — 1 square = 100 sq ft)",
            "Pitch/steepness — steep roofs require more safety equipment and labor time",
            "Number of existing layers to tear off (one layer vs. two adds labor and disposal)",
            "Decking condition — soft or rotted plywood must be replaced before shingling",
            "Roof complexity — dormers, valleys, hips, and multiple planes add material and labor",
            "Access — tight lots, landscaping obstacles, or multi-story homes affect staging",
            "Material choice — Good/Better/Best tiers carry different material costs",
            "Ventilation upgrades — adding or expanding ridge vents, soffit vents, or baffles",
          ].map((item) => (
            <li key={item} className="text-brand-charcoal/80 leading-relaxed list-disc">{item}</li>
          ))}
        </ul>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          We provide a detailed, line-item written estimate so you know exactly what you&apos;re paying for — no surprises at the end.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Insurance vs. Retail: Two Paths to a New Roof</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          <strong className="text-brand-navy">Insurance path:</strong> If storm damage triggered the replacement, we handle the entire claims process. We document damage with Xactimate-formatted estimates, meet your adjuster on-site, and file supplements when the initial scope doesn&apos;t cover everything. Most homeowners with legitimate storm damage pay only their deductible for a full replacement.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-6">
          <strong className="text-brand-navy">Retail path:</strong> If your roof has simply aged out or you prefer not to file a claim, we offer competitive pricing and flexible financing options. You get the same materials, the same precision installation, and the same warranties — just a different payment path. We&apos;ll work with you to find the right product tier and payment option for your budget.
        </p>

        <div className="bg-brand-navy/5 border border-brand-coppertint/30 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Not Sure If You Need a Replacement?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            Book a free inspection and we&apos;ll give you an honest assessment. If a <Link href="/services/roof-repair" className="text-brand-copper font-semibold hover:underline">repair</Link> will do, we&apos;ll tell you — we don&apos;t push replacements you don&apos;t need.
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
