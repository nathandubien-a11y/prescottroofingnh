import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Storm & Wind Damage Roof Repair NH",
  description:
    "Emergency storm damage roof repair in Southern NH. Insurance claim documentation, adjuster coordination, and full restoration from Prescott Roofing.",
  alternates: { canonical: "/services/storm-damage" },
};

const faqs = [
  {
    question: "What should I do immediately after a storm damages my roof?",
    answer: "First, ensure everyone is safe. If there's an active leak, place buckets and move valuables away from the area. Document any visible damage with photos from ground level (don't climb on the roof). Then call us — we'll do a thorough inspection and help you file a claim if needed.",
  },
  {
    question: "How do I know if my roof has storm damage?",
    answer: "Not all storm damage is visible from the ground. Warning signs include missing or lifted shingles, dents in metal flashing or vents, granules in your gutters, and water stains inside. We provide free storm-damage inspections to identify issues you might miss.",
  },
  {
    question: "Will my insurance cover storm damage repairs?",
    answer: "Most homeowner's policies cover sudden storm damage (wind, hail, fallen trees) minus your deductible. We specialize in insurance claims and will document everything your adjuster needs to approve the claim. Our team uses Xactimate — the same estimating software your insurer uses.",
  },
  {
    question: "How fast can you respond after a storm?",
    answer: "We prioritize emergency storm calls and can typically have someone on-site within 24 hours. If there's an active leak, we'll tarp the area to prevent further damage while we work on the permanent repair plan.",
  },
  {
    question: "What's the difference between wind damage and hail damage?",
    answer: "Wind damage typically shows as lifted, creased, or missing shingles — often in a directional pattern on the side facing the wind. Hail damage appears as circular dents or bruises on shingles, with visible granule loss at impact points. Both are covered by most homeowner's policies, and we document each type differently for your adjuster.",
  },
  {
    question: "What if my insurance company denies or underpays my claim?",
    answer: "This happens more often than it should. We handle supplement requests — additional documentation and scope detail that demonstrates damage the initial adjuster missed. Our Xactimate estimates match the format insurers use internally, which makes the supplement process more effective.",
  },
];

export default function StormDamagePage() {
  return (
    <ServicePageLayout
      serviceName="Storm & Wind Damage Repair"
      canonicalPath="/services/storm-damage"
      heroDescription="Rapid-response storm damage assessment, emergency repair, and full restoration. We document everything for your insurance claim and handle the process from start to finish."
      faqs={faqs}
      schemaService="Storm Damage Roof Repair"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
          Fast Response. Expert Restoration. Real Claims Experience.
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Southern New Hampshire gets hit hard — nor&apos;easters, summer thunderstorms, hail, and high winds can all damage your roof. When a storm strikes, you need a roofer who responds fast, documents thoroughly, and knows how to work with insurance companies.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          That&apos;s where Prescott Roofing is different. Our team brings real insurance-restoration experience to every storm call. We don&apos;t just fix roofs — we know how to get claims approved. From the initial inspection through the final supplement, we handle the documentation and adjuster coordination so you can focus on getting your home back to normal.
        </p>

        <h3 className="text-xl font-bold text-brand-navy mb-4">Our Storm Damage Process</h3>
        <div className="space-y-6 mb-8">
          {[
            { step: "1", title: "Emergency Response", desc: "We respond within 24 hours. If there's an active leak, we tarp the area immediately to prevent further interior damage — protecting your belongings and limiting the scope of the claim." },
            { step: "2", title: "Thorough Inspection & Documentation", desc: "We inspect every inch of your roof and document all damage with detailed photos and measurements. Our reports use Xactimate format — the same estimating software your insurer uses — so there's no translation needed." },
            { step: "3", title: "Insurance Claim Support", desc: "We help you file the claim, coordinate directly with your adjuster on-site, and advocate for full coverage of the damage we've documented. If the initial scope falls short, we file detailed supplements with line-item justification." },
            { step: "4", title: "Professional Repair or Replacement", desc: "Once the claim is approved, we restore your roof to pre-storm condition with quality materials and precision workmanship. You get the same manufacturer-backed warranties as any other Prescott Roofing job." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-copper text-white font-bold flex items-center justify-center shrink-0 text-lg">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">{item.title}</h4>
                <p className="text-brand-charcoal/70 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src="/roof-replacement-in-progress-decking.jpg"
          alt="Storm damage roof restoration in progress showing exposed decking and shingle bundles ready for installation"
          width={1200}
          height={800}
          className="rounded-lg object-cover w-full aspect-[3/2] mb-8"
        />

        <h3 className="text-xl font-bold text-brand-navy mb-4">Types of Storm Damage We Repair</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Wind-lifted, creased, and missing shingles",
            "Hail damage to shingles, vents, and flashing",
            "Fallen tree and branch impact damage",
            "Ice dam damage to eaves and interior",
            "Blown-off ridge caps and ridge vents",
            "Damaged or detached gutters and downspouts",
            "Compromised flashing at chimneys, walls, and valleys",
            "Punctured or torn underlayment and decking",
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

        <h3 className="text-xl font-bold text-brand-navy mb-4">Why Insurance Claims Experience Matters</h3>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Most roofers can fix storm damage. Fewer can navigate the insurance process that pays for it. The difference matters because an underdocumented claim often means an underpaid settlement — and you end up covering the gap out of pocket.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-4">
          Our team uses Xactimate estimating — the same software your insurance company uses internally — which means our documentation speaks their language. We know what adjusters look for, what triggers supplements, and how to ensure your claim covers the full scope of damage.
        </p>
        <p className="text-brand-charcoal/80 leading-relaxed mb-8">
          Most homeowners with legitimate storm damage pay only their deductible for a full <Link href="/services/roof-replacement" className="text-brand-copper font-semibold hover:underline">roof replacement</Link>. We make sure the process works the way it&apos;s supposed to.
        </p>

        <div className="bg-brand-copper/10 border border-brand-copper/30 rounded-lg p-6">
          <h4 className="text-lg font-bold text-brand-navy mb-2">Had a Recent Storm?</h4>
          <p className="text-brand-charcoal/70 mb-4">
            Don&apos;t wait for a leak to appear. Storm damage is often invisible from ground level but gets worse with every rain. Schedule a free storm-damage inspection and we&apos;ll identify any issues before they become expensive problems.
          </p>
          <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
            Free Storm Damage Inspection
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
