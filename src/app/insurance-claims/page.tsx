import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Roof Insurance Claim Help in New Hampshire",
  description:
    "Expert roof insurance claim assistance in NH. Xactimate-certified damage documentation, adjuster coordination, and full storm damage restoration. Archer Roofing — real claims experience, not a sales pitch.",
  alternates: { canonical: "/insurance-claims" },
  keywords: [
    "storm damage roof insurance claim NH",
    "roof insurance claim help New Hampshire",
    "roof damage insurance claim process",
    "Xactimate roofing estimate NH",
    "hail damage roof claim NH",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "Do I need to file my insurance claim before you inspect the roof?",
    answer: "No. In fact, we recommend you call us first. We'll do a free inspection, document any damage, and help you determine whether filing a claim makes sense. If the damage is below your deductible or doesn't qualify, we'll tell you honestly — so you don't file an unnecessary claim that goes on your record.",
  },
  {
    question: "What is Xactimate and why does it matter?",
    answer: "Xactimate is the estimating software used by nearly every insurance company to price claims. Most roofing contractors write estimates in their own format, which adjusters then have to translate — often resulting in lower payouts. Because our team writes estimates directly in Xactimate, our documentation speaks the same language as your insurer, which speeds up approvals and reduces underpayment.",
  },
  {
    question: "Will you meet with my insurance adjuster?",
    answer: "Absolutely. We attend every adjuster meeting and walk the roof with them to ensure all damage is identified and properly documented. This is one of the most important steps in the claims process — having an experienced advocate alongside the adjuster typically results in a more complete assessment.",
  },
  {
    question: "What if my claim is denied or underpaid?",
    answer: "Denied and underpaid claims are more common than they should be. We'll review the denial or supplement, identify what was missed, and help you file a supplement or appeal with additional documentation. Our Xactimate expertise and restoration background give us the tools to push back effectively.",
  },
  {
    question: "Does my insurance cover a full roof replacement?",
    answer: "If your roof has sustained damage from a covered peril (wind, hail, fallen tree, etc.) and the damage is extensive enough that repairs aren't viable, insurance typically covers a full replacement minus your deductible. We document thoroughly to support the case for replacement when it's warranted.",
  },
  {
    question: "How long does the insurance claim process take?",
    answer: "A straightforward claim typically takes 2-4 weeks from filing to approval. Complex claims or those requiring supplements can take longer. We stay on top of the process and keep you informed at every step. Once approved, we can usually begin work within 1-2 weeks.",
  },
  {
    question: "Do you charge anything for the inspection or claim help?",
    answer: "Our initial inspection and damage documentation are completely free. If you move forward with the work and the claim is approved, we work within the insurance payout — you're only responsible for your deductible. We never ask you to pay out of pocket beyond what your policy covers.",
  },
  {
    question: "Where does Archer Roofing's insurance expertise come from?",
    answer: "Our team has years of hands-on experience in the insurance-restoration industry. We've handled hundreds of claims, written Xactimate estimates, and worked directly with adjusters. Archer Roofing was built to bring that real-world claims expertise specifically to roofing — so homeowners get faster approvals and better outcomes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Storm Damage Inspection",
    description: "We inspect your entire roof system — shingles, flashing, vents, gutters, and the attic — and document every finding with detailed photos and measurements. No charge, no obligation.",
  },
  {
    number: "02",
    title: "Xactimate Damage Report",
    description: "We create a professional damage report using Xactimate — the same software your insurance company uses. This ensures your claim speaks their language from day one, reducing back-and-forth and improving approval rates.",
  },
  {
    number: "03",
    title: "Claim Filing Assistance",
    description: "We help you file the claim with your carrier and provide all necessary documentation upfront. If you've already filed, we'll supplement the claim with our findings.",
  },
  {
    number: "04",
    title: "Adjuster Meeting & Coordination",
    description: "We meet your adjuster on-site and walk the roof together. Our team ensures every item of damage is identified and accounted for. This step is where experience makes the biggest difference.",
  },
  {
    number: "05",
    title: "Approval & Scheduling",
    description: "Once the claim is approved, we review the scope with you, order materials, and schedule the work. If supplements are needed, we handle those too.",
  },
  {
    number: "06",
    title: "Precision Restoration",
    description: "We restore your roof to pre-storm condition with quality materials and meticulous craftsmanship. Your final invoice matches the approved claim — no surprise charges.",
  },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Insurance & Storm Damage Claims" }]} />
          <div className="max-w-3xl">
            <p className="text-brand-copper font-semibold text-sm uppercase tracking-widest mb-4">
              Our Core Differentiator
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Roof Insurance Claims Done Right — By People Who Actually Know the Process
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We don&apos;t just say &ldquo;we handle insurance claims.&rdquo; We come from the insurance-restoration world. Xactimate-certified. Adjuster-experienced. Claim-approved. This is what sets Archer Roofing apart from every other roofer in Southern NH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-inspection"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
              >
                Free Storm Damage Inspection
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
              Why Most Roofers Fail at Insurance Claims
            </h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Here&apos;s the truth most homeowners don&apos;t hear: the vast majority of roofing contractors have zero training in the insurance claims process. They show up, write an estimate in their own format, and leave you to figure out the rest. When the adjuster visits and disagrees with the scope, there&apos;s nobody in your corner.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              The result? Underpaid claims. Denied claims. Homeowners paying out of pocket for work that should have been covered. Or worse — contractors who inflate damage to juice a claim, which is illegal and puts <em>you</em> at risk.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Archer Roofing exists because we saw this problem from the other side. Our roots are in restoration — working directly with insurance companies for years. We know how claims should be documented, what adjusters look for, and exactly how to present damage so it gets approved <em>the first time</em>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "Xactimate", label: "Certified Estimates", desc: "The exact format your insurer uses" },
                { stat: "98%", label: "First-Submission Approval", desc: "Because documentation matters" },
                { stat: "10+", label: "Years in Restoration", desc: "Insurance claims are in our DNA" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-brand-coppertint/20 rounded-lg p-5 text-center">
                  <p className="text-2xl font-extrabold text-brand-copper">{item.stat}</p>
                  <p className="text-sm font-bold text-brand-navy mt-1">{item.label}</p>
                  <p className="text-xs text-brand-charcoal/60 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">
            Our 6-Step Claims Process
          </h2>
          <p className="text-brand-charcoal/70 mb-12 max-w-2xl">
            From the first inspection to the final nail, we handle the entire process so you can focus on your life — not paperwork.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-extrabold text-brand-coppertint/40 absolute -top-2 -left-1">
                  {step.number}
                </span>
                <div className="pt-10">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Claims Expertise Is Different */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
              Why Our Claims Expertise Is Different
            </h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              This isn&apos;t a marketing gimmick. Our team has years of experience in the insurance-restoration industry — the person documenting your roof damage has done hundreds of Xactimate estimates. We know exactly what documentation an adjuster needs to approve a claim. We&apos;ve been through the supplement and appeal process and know how to get results.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed">
              When you choose Archer Roofing for a storm damage project, you&apos;re getting real claims expertise focused entirely on doing your roof right.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">
            Insurance Claim FAQs
          </h2>
          <FAQAccordion items={faqs} />
          <FAQSchema items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Storm Damage? Let's Get Your Claim Started."
        subheading="Free inspection. Xactimate documentation. Adjuster coordination. No cost to you beyond your deductible."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roof Insurance Claim Assistance",
            provider: {
              "@type": "RoofingContractor",
              name: siteConfig.name,
              url: siteConfig.url,
              telephone: siteConfig.phone,
            },
            areaServed: siteConfig.serviceArea.counties.map((c) => ({
              "@type": "AdministrativeArea",
              name: `${c} County, NH`,
            })),
            description:
              "Expert roof insurance claim assistance including Xactimate-certified damage documentation, adjuster coordination, and full storm damage restoration across Southern New Hampshire.",
          }),
        }}
      />
    </>
  );
}
