import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/siteConfig";

const SLUG = "roof-financing-southern-nh";
const PUBLISH_DATE = "2026-10-02";
const TITLE = "Roof Financing in Southern NH: How to Find a Roofing Company Near You With Financing";
const META_TITLE = "Roof Financing in Southern NH: Options & 2026 Rates";
const META_DESCRIPTION = "Looking for a roofing company near you with financing? Compare 2026 roof loan options, monthly payments and red flags for Manchester, Nashua & Southern NH.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    type: "article",
    title: META_TITLE,
    description: META_DESCRIPTION,
    publishedTime: PUBLISH_DATE,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Prescott Roofing — Precision From Every Angle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const faqs: FAQItem[] = [
  {
    question: "Do roofing companies offer financing?",
    answer: "Many do. Roofers often partner with home improvement lenders to offer promotional “same as cash” plans or longer fixed-payment loans. Always ask for the cash price too, so you can see what the financing really costs.",
  },
  {
    question: "What credit score do I need to finance a roof?",
    answer: "It depends on the lender. Some contractor financing programs approve scores as low as 600, while the best personal loan and home equity rates generally go to borrowers with scores in the 700s.",
  },
  {
    question: "What’s the monthly payment on a new roof?",
    answer: "For a $15,000 roof, expect about $150 a month on a 15-year home equity loan, around $270 a month on a 7-year personal loan, and close to $400 a month on a credit card paid off over five years.",
  },
  {
    question: "Is it better to use a HELOC or contractor financing for a roof?",
    answer: "A HELOC or home equity loan usually costs less if you have equity and can wait a few weeks to close. Contractor financing is faster and needs no equity, but compare the APR, fees and total cost before choosing it.",
  },
  {
    question: "Is a new roof tax deductible?",
    answer: "Generally no, not for your primary home. A new roof is a capital improvement that adds to your home’s cost basis, which can lower your taxable gain when you sell. The federal 25C energy credit ended after 2025 and didn’t cover roofs. Talk to a tax professional about your situation.",
  },
];

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-copper font-semibold hover:underline">
      {children}
    </a>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="10" fill="#C45A28" />
      <polyline points="8 12 11 15 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RoofFinancingSouthernNHPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-3xl px-4">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Roof Financing Guide" }]} />
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time dateTime={PUBLISH_DATE}>
              {new Date(PUBLISH_DATE).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>&bull;</span>
            <span>14 min read</span>
            <span>&bull;</span>
            <span>Prescott Roofing</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {TITLE}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none">

            {/* Can you finance a new roof? */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Can you finance a new roof?</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Yes. Many homeowners in Southern New Hampshire finance a new roof instead of paying cash. <Link href="/blog/how-much-does-roofing-cost" className="text-brand-copper font-semibold hover:underline">A $15,000 roof</Link> typically works out to about $150 to $270 a month with a home equity or personal loan, depending on the rate and term.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              That&rsquo;s why so many people search for &ldquo;roofing companies near me with financing.&rdquo; A roof rarely waits for a convenient time. A leak shows up after a nor&rsquo;easter, an inspector flags the roof during a home sale, or the insurance company sends a non-renewal notice. Financing lets you fix the problem now instead of patching it until it gets worse.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              But not all roof financing is equal. The same $15,000 roof can cost you a few thousand dollars in interest, or much more than that, depending on how you pay for it. This guide covers your real options in 2026, what the monthly payments look like, and the red flags to watch for when a roofer offers financing.
            </p>

            {/* What a $15,000 roof costs per month */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">What a $15,000 roof costs per month</h2>
            <div className="overflow-x-auto mb-6 -mx-4 px-4">
              <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-bold">How you pay</th>
                    <th className="px-4 py-3 font-bold">Typical 2026 rate</th>
                    <th className="px-4 py-3 font-bold">Term</th>
                    <th className="px-4 py-3 font-bold">Approx. monthly payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">USDA 504 repair loan (if eligible)</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">1% fixed</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">20 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$69</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">MassHousing home improvement loan (MA only)</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">5% fixed</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">15 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$119</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Home equity loan</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">8.56% fixed</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">15 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$148</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">HELOC</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">7.29% variable</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">10 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">about $176</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Personal loan</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">12.53% average APR</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">7 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$269</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Credit card</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">19.63% average APR</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">5 years</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$394</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8 text-sm italic">
              Rates are national averages as of late September 2026 from Bankrate, plus program rates from USDA and MassHousing. Your rate depends on your credit, equity and lender. HELOC payments change with rates and are often interest-only at first.
            </p>

            {/* Your roof financing options, compared */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-6">Your roof financing options, compared</h2>

            <h3 className="text-xl font-bold text-brand-navy mb-3">1. Financing through your roofing company</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Many roofers partner with a home improvement lender so you can apply right at the kitchen table, often with a decision in minutes. It&rsquo;s the most convenient option, and it doesn&rsquo;t require home equity.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Plans usually come in two flavors. &ldquo;Same as cash&rdquo; or &ldquo;no interest if paid in full&rdquo; promos run 6 to 18 months, and reduced-rate plans stretch payments over many years. Lenders such as Synchrony, Regions Home Improvement Financing (formerly EnerBank) and Sunlight Financial offer these programs through contractors. Read the next section before you sign one.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3">2. Home equity loan</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A home equity loan gives you a lump sum at a fixed rate, currently averaging about 8.5% for 10- to 15-year terms (<ExtLink href="https://www.bankrate.com/home-equity/home-equity-loan-rates/">Bankrate</ExtLink>). It&rsquo;s usually the lowest-cost private option if you have equity, but it takes a few weeks to close and your home secures the loan.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3">3. HELOC (home equity line of credit)</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A HELOC works like a credit card backed by your home, with an average rate around 7.3% (<ExtLink href="https://www.bankrate.com/home-equity/heloc-rates/">Bankrate</ExtLink>). The rate is variable, so your payment can rise. It&rsquo;s a good fit if you&rsquo;re bundling the roof with other projects, like windows or gutters, over the next year or two.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3">4. Personal loan</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A personal loan needs no home equity and can fund within days. The trade-off is cost: the average APR is about 12.5%, with a range of roughly 8% to 36% depending on credit, and terms of 1 to 7 years (<ExtLink href="https://www.bankrate.com/loans/personal-loans/rates/">Bankrate</ExtLink>).
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3">5. Credit card</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              At an average APR near 19.6% (<ExtLink href="https://www.bankrate.com/finance/credit-cards/current-interest-rates/">Bankrate</ExtLink>), a credit card is the most expensive way to carry a roof. It only makes sense for a small repair you can pay off within a few months, or a 0% intro card you&rsquo;ll pay off before the promo ends.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3">6. Government and nonprofit programs</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Low-income, senior and rural homeowners may qualify for programs with rates as low as 1%, or even grants. These have income limits and paperwork, but they&rsquo;re worth checking first. See the assistance programs section below.
            </p>

            {/* How to choose a roofing company that offers financing */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">How to choose a roofing company that offers financing</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Financing is a convenience, not a reason to hire a roofer. Pick the contractor first, then decide how to pay. When you&rsquo;re comparing roofing companies near you that offer financing, look for these:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-brand-charcoal/80 leading-relaxed"><strong className="text-brand-navy">A cash price and a financed price, side by side.</strong> An honest roofer will show you both. If the financed total is much higher than the cash total, the difference is the true cost of the plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-brand-charcoal/80 leading-relaxed"><strong className="text-brand-navy">Local, licensed and insured.</strong> Ask for proof of liability and workers&rsquo; comp insurance. In Massachusetts, the contractor must also hold a Home Improvement Contractor registration for work on owner-occupied homes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-brand-charcoal/80 leading-relaxed"><strong className="text-brand-navy">A detailed written estimate.</strong> It should list materials, decking prices per sheet, flashing, ventilation, permits and disposal. A vague quote plus easy financing is how homeowners end up overpaying.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-brand-charcoal/80 leading-relaxed"><strong className="text-brand-navy">No pressure to sign today.</strong> Loan documents and your contract should be something you can take home and read.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-brand-charcoal/80 leading-relaxed"><strong className="text-brand-navy">A workmanship warranty in writing,</strong> separate from the shingle manufacturer&rsquo;s warranty.</span>
              </li>
            </ul>

            {/* Red flags with roof financing */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Red flags with roof financing</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              <strong className="text-brand-navy">Deferred-interest &ldquo;same as cash&rdquo; deals you can&rsquo;t pay off in time.</strong> If even a small balance is left when the promo ends, many plans charge all the interest back to day one. The CFPB found that about one in five deferred-interest promo balances ended up with retroactive interest, and in one example, $180 left unpaid triggered a $1,439 interest charge (<ExtLink href="https://www.consumerfinance.gov/data-research/research-reports/the-high-cost-of-retail-credit-cards/">CFPB</ExtLink>). After the promo, standard rates can run around 27% (<ExtLink href="https://www.synchrony.com/">Synchrony</ExtLink>).
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              <strong className="text-brand-navy">Hidden dealer fees.</strong> Many contractor loans charge the roofer a &ldquo;dealer fee,&rdquo; a percentage of the loan, to offer low or 0% rates (<ExtLink href="https://www.regions.com/contractor-financing">Regions</ExtLink>, <ExtLink href="https://www.gethearth.com/">Hearth</ExtLink>). Some contractors raise the project price to cover it, so you pay it without seeing it. The CFPB has warned that these fees often aren&rsquo;t reflected in the APR (<ExtLink href="https://www.consumerfinance.gov/about-us/blog/solar-financing-issue-spotlight/">CFPB</ExtLink>). Asking for the cash price is your best defense.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              <strong className="text-brand-navy">&ldquo;Low monthly payment&rdquo; with no total cost.</strong> A $99 payment sounds great until you learn it runs for 15 years. Always ask for the APR, the term and the total of all payments.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              <strong className="text-brand-navy">Tax-credit sales pitches.</strong> The federal energy-efficiency home improvement credit (25C) ended for anything installed after December 31, 2025 (<ExtLink href="https://www.irs.gov/newsroom/frequently-asked-questions-about-energy-efficient-home-improvements-and-residential-clean-energy-property-credits-changes-under-public-law-119-21">IRS</ExtLink>), and roofs weren&rsquo;t on its eligible list anyway (<ExtLink href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit">IRS</ExtLink>). If a roofer says a tax credit will cover part of your 2026 roof, ask them to show you where.
            </p>

            {/* Before you finance: check whether insurance should pay */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Before you finance: check whether insurance should pay</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              If your roof was damaged by wind, hail, a falling tree or ice, your homeowners policy may cover some or all of the replacement, minus your deductible. Insurance generally doesn&rsquo;t pay for normal wear and age, so a 25-year-old roof that&rsquo;s simply worn out is usually on you.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              <Link href="/services/storm-damage" className="text-brand-copper font-semibold hover:underline">A roofer experienced with insurance claims</Link> can inspect for storm damage and document it before you file. If a claim covers most of the roof, you may only need to finance the deductible and any upgrades. Be wary of any contractor who offers to &ldquo;cover&rdquo; or waive your deductible.
            </p>

            {/* Roof repair assistance programs in NH and MA */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Roof repair assistance programs in NH and MA</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              If you&rsquo;re on a limited income, check these before taking on a private loan:
            </p>
            <div className="overflow-x-auto mb-6 -mx-4 px-4">
              <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-bold">Program</th>
                    <th className="px-4 py-3 font-bold">Who it&rsquo;s for</th>
                    <th className="px-4 py-3 font-bold">What it offers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">USDA Section 504 Home Repair</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">Very-low-income owners in eligible rural areas</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">Loans up to $40,000 at 1% for 20 years; grants up to $10,000 for owners 62+</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">NH Housing Emergency Home Repair Loan</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">Current NH Housing mortgage borrowers</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">Up to $25,000 for up to 15 years for emergencies like roof damage not covered by insurance</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">MassHousing Home Improvement Loan</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">Massachusetts owners with income up to $139,000</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$7,500 to $50,000 at 5% fixed for 15 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              USDA eligibility depends on your address. Larger cities like Manchester and Nashua generally don&rsquo;t qualify, but many smaller New Hampshire towns do, so check your address with USDA&rsquo;s NH office at (603)&nbsp;223-6035.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              One program that doesn&rsquo;t help: Massachusetts&rsquo; 0% Mass Save HEAT Loan covers insulation, windows and heat pumps, but not roofing (<ExtLink href="https://www.masssave.com/residential/programs-and-services/financing/heat-loan-program">Mass Save</ExtLink>).
            </p>

            {/* FAQ */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-6">Frequently asked questions</h2>
            <FAQAccordion items={faqs} />

            {/* CTA block */}
            <div className="mt-12 bg-brand-copper/10 border border-brand-copper/30 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Looking for a roofer near you with financing?</h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Prescott Roofing serves homeowners in <Link href="/roofing/manchester-nh" className="text-brand-copper font-semibold hover:underline">Manchester</Link>, <Link href="/roofing/nashua-nh" className="text-brand-copper font-semibold hover:underline">Nashua</Link>, <Link href="/roofing/bedford-nh" className="text-brand-copper font-semibold hover:underline">Bedford</Link> and across Southern New Hampshire and Northern Massachusetts. We&rsquo;ll inspect your roof, check for storm damage your insurance should cover, and give you a detailed written estimate.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Prescott Roofing offers flexible financing options to qualified homeowners. Ask about available plans and monthly payment estimates during your free roof inspection.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                <Link href="/free-inspection" className="text-brand-copper font-semibold hover:underline">Schedule your free roof inspection</Link> and get a line-by-line estimate with no pressure.
              </p>
              <Link
                href="/free-inspection"
                className="inline-flex items-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
              >
                Get My Free Inspection
              </Link>
            </div>

            {/* Sources */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Sources</h2>
            <ul className="space-y-2 mb-8">
              {[
                { label: "Bankrate: Home equity loan rates", href: "https://www.bankrate.com/home-equity/home-equity-loan-rates/" },
                { label: "Bankrate: HELOC rates", href: "https://www.bankrate.com/home-equity/heloc-rates/" },
                { label: "Bankrate: Personal loan rates", href: "https://www.bankrate.com/loans/personal-loans/rates/" },
                { label: "Bankrate: Credit card interest rates", href: "https://www.bankrate.com/finance/credit-cards/current-interest-rates/" },
                { label: "Synchrony: Financing quick reference guide", href: "https://www.synchrony.com/" },
                { label: "Regions: Home improvement contractor financing", href: "https://www.regions.com/contractor-financing" },
                { label: "Sunlight Financial: Roofing loans", href: "https://www.sunlightfinancial.com/" },
                { label: "Hearth: What is a dealer fee?", href: "https://www.gethearth.com/" },
                { label: "CFPB: The high cost of retail credit cards", href: "https://www.consumerfinance.gov/data-research/research-reports/the-high-cost-of-retail-credit-cards/" },
                { label: "CFPB: Solar financing issue spotlight", href: "https://www.consumerfinance.gov/about-us/blog/solar-financing-issue-spotlight/" },
                { label: "USDA: Single Family Housing Repair Loans & Grants", href: "https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-repair-loans-grants" },
                { label: "USDA: New Hampshire repair loans and grants", href: "https://www.rd.usda.gov/nh" },
                { label: "NH Housing: Borrower programs", href: "https://www.nhhfa.org/homebuyers-homeowners/" },
                { label: "MassHousing: Home Improvement Loan Program", href: "https://www.masshousing.com/homeownership/home-improvement" },
                { label: "Mass Save: HEAT Loan", href: "https://www.masssave.com/residential/programs-and-services/financing/heat-loan-program" },
                { label: "IRS: FAQs on Public Law 119-21 energy credit changes", href: "https://www.irs.gov/newsroom/frequently-asked-questions-about-energy-efficient-home-improvements-and-residential-clean-energy-property-credits-changes-under-public-law-119-21" },
                { label: "IRS: Energy efficient home improvement credit", href: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit" },
                { label: "IRS Publication 530", href: "https://www.irs.gov/publications/p530" },
              ].map((source, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon />
                  <ExtLink href={source.href}>{source.label}</ExtLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-coppertint/30">
            <Link href="/blog" className="text-brand-copper font-semibold hover:underline">
              &larr; Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <CTASection />

      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: TITLE,
            description: META_DESCRIPTION,
            datePublished: PUBLISH_DATE,
            dateModified: PUBLISH_DATE,
            author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.logo}` },
            },
            image: `${siteConfig.url}/og-image.jpg`,
            mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${SLUG}` },
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <FAQSchema items={faqs} />

    </>
  );
}
