import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/siteConfig";

const SLUG = "how-much-does-roofing-cost";
const PUBLISH_DATE = "2026-09-30";
const TITLE = "What Actually Drives Your Roofing Bill: 11 Cost Factors Contractors Won’t Tell You Upfront";
const META_TITLE = "How Much Does a New Roof Cost in NH? 11 Hidden Cost Factors";
const META_DESCRIPTION = "How much does roofing cost in NH & MA? See 2026 price ranges plus 11 hidden factors, from deck repairs to permits, that add $2,000–$12,000 to a quote.";

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
    question: "How much does a new roof cost in New Hampshire?",
    answer: "Most New Hampshire homeowners pay about $11,000 to $21,000 for an asphalt shingle roof replacement in 2026. Metal roofs typically run $15,000 to $35,000 or more depending on the panel type.",
  },
  {
    question: "How much does roofing cost per square?",
    answer: "Installed asphalt shingles cost roughly $520 to $710 per square (100 sq ft) in New Hampshire, including tear-off of one layer. Standing seam metal starts around $1,185 per square.",
  },
  {
    question: "Why did my final roofing bill come in higher than the quote?",
    answer: "The most common reasons are rotted decking found during tear-off, an extra layer of old shingles, and flashing or ventilation work that wasn’t priced upfront. Ask for per-sheet and per-layer prices in writing so there are no surprises.",
  },
  {
    question: "Do I need a permit to replace my roof in NH or MA?",
    answer: "It depends on the town in New Hampshire: Manchester requires one, while some towns don’t for a straight shingle replacement. In Massachusetts, a reroof requires a building permit, pulled by a registered Home Improvement Contractor.",
  },
  {
    question: "Can I put new shingles over my old roof to save money?",
    answer: "Only if you have a single layer in good condition, since code caps roofs at two layers. Most roofers advise against it: you can’t inspect the deck, the extra weight adds stress, and many manufacturer warranties require a full tear-off.",
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

export default function HowMuchDoesRoofingCostPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-3xl px-4">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Roofing Cost Guide" }]} />
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time dateTime={PUBLISH_DATE}>
              {new Date(PUBLISH_DATE).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>&bull;</span>
            <span>18 min read</span>
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

            {/* Intro */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">How much does roofing cost in 2026?</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Most homeowners in Southern New Hampshire and Northern Massachusetts pay about <strong className="text-brand-navy">$11,000 to $21,000</strong> to replace an asphalt shingle roof in 2026. That works out to roughly $5.50 to $7.00 per square foot of roof, or $550 to $700 per &ldquo;square&rdquo; (100 sq ft), installed with tear-off.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              But if you&rsquo;ve collected a few quotes, you already know the number on the first page isn&rsquo;t always the number on the final invoice. Two roofs that look identical from the street can land $10,000 apart. The difference is usually buried in variables most contractors don&rsquo;t bring up until the old shingles are off.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              This guide walks through the 11 factors that actually drive your roofing bill, including the &ldquo;hidden&rdquo; ones like deck repairs, permits, disposal and pitch that can add $2,000 to $12,000 to a quote. Use it to read estimates like a pro and compare contractors apples to apples.
            </p>

            {/* Typical prices table */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">Typical 2026 installed prices in New Hampshire</h2>
            <div className="overflow-x-auto mb-6 -mx-4 px-4">
              <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-bold">Roofing material</th>
                    <th className="px-4 py-3 font-bold">Price per sq ft</th>
                    <th className="px-4 py-3 font-bold">Price per square</th>
                    <th className="px-4 py-3 font-bold">Typical 20&ndash;30 square roof</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">3-tab asphalt shingles</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$5.20</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$520</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$10,400&ndash;$15,600</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Architectural asphalt shingles</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$5.70</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$570</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$11,400&ndash;$17,100</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Premium/designer asphalt shingles</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$7.10</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$710</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$14,200&ndash;$21,300</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Exposed-fastener steel panels</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$7.65</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$765</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$15,300&ndash;$22,950</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Standing seam steel</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$11.85</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$1,185</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$23,700&ndash;$35,550</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Prices include standard tear-off of one layer, underlayment and basic flashing, based on a 6/12 pitch (<ExtLink href="https://www.roofobservations.com/new-hampshire-roof-cost/">Roof Observations NH cost guide</ExtLink>). The average New Hampshire home is about 1,934 sq ft, or roughly 19 squares of roof before waste and pitch are factored in (<ExtLink href="https://www.thisoldhouse.com/roofing/reviews/roof-replacement-cost">This Old House</ExtLink>).
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Now for what moves your price up or down from those baselines.
            </p>

            {/* The 11 factors */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-6">The 11 factors that drive your roofing cost</h2>

            {/* Factor 1 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">1. Roof size (it&rsquo;s bigger than your house)</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Roofers price by the square, and your roof is almost always larger than your home&rsquo;s floor area. Overhangs, pitch and dormers add surface area, and every job needs extra material for cuts, starter strips and ridge caps.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Most estimates add a 10&ndash;15% waste factor on top of the measured area. A 1,900 sq ft home can easily need 24 to 28 squares of shingles. Ask every contractor for their measured square count so you can compare quotes on the same basis.
            </p>

            {/* Factor 2 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">2. Roof pitch and steepness</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Pitch is one of the biggest cost swings, and it rarely shows up as its own line item. Anything steeper than about 7/12 means crews need roof jacks, harnesses and more time per square, and walkable roofs become unwalkable.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Steep or complex roofs can raise the total by as much as 30% (<ExtLink href="https://www.roofobservations.com/new-hampshire-roof-cost/">Roof Observations</ExtLink>), or roughly $1,000 to $3,000 on a typical home (<ExtLink href="https://www.nerdwallet.com/article/finance/roof-replacement-cost">NerdWallet</ExtLink>). New England capes and colonials often run steeper than the national average, so this one hits local homeowners hard.
            </p>

            {/* Factor 3 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">3. Material choice and product tier</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Material sets your baseline. Architectural shingles are the standard choice for most New Hampshire homes, premium designer shingles cost about 25% more, and standing seam metal roughly doubles the price.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              The tier inside a brand matters too. Manufacturers sell good, better and best lines with different wind ratings, thicknesses and warranties. Two quotes that both say &ldquo;architectural shingles&rdquo; can be pricing very different products, so ask for the exact product line in writing.
            </p>

            {/* Factor 4 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">4. How many layers come off</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Most quotes assume you have one layer of shingles. If a previous owner roofed over the original, your contractor finds out at tear-off, and removal and disposal costs roughly double.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Tear-off typically runs $1 to $3 per sq ft, or about $100 to $150 per square (<ExtLink href="https://www.inchcalculator.com/roof-replacement-cost/">Inch Calculator</ExtLink>). On a 24-square roof, a surprise second layer can add $2,400 to $3,600. Building code also caps a roof at two layers (IRC R908.3.1.1), so a roof that already has two must be stripped to the deck.
            </p>

            {/* Factor 5 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">5. Deck and sheathing repairs</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              This is the most common change order in roofing, because nobody can see the plywood or OSB until the shingles come off. Years of small leaks, ice dams or poor ventilation leave soft, rotted or delaminated sheets that must be replaced before new shingles go on.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Installed sheathing runs about $2 to $6 per sq ft, or roughly $64 to $192 per 4x8 sheet (<ExtLink href="https://www.angi.com/articles/how-much-does-roof-sheathing-cost.htm">Angi</ExtLink>). Five soft sheets is a minor bump. Fifteen or twenty on an older roof can add $1,000 to $3,000 or more. A good quote states a per-sheet price and how many sheets are included, so you&rsquo;re never guessing.
            </p>

            {/* Factor 6 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">6. Permits and inspections</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Permit rules vary by town, and some quotes leave the fee out entirely. In Manchester, NH, a roofing permit costs 1% of the job&rsquo;s value plus a $25 application fee, or about $175 on a $15,000 roof (<ExtLink href="https://www.manchesternh.gov/Departments/Building">City of Manchester</ExtLink>). Some towns, like Derry, don&rsquo;t require a permit for a straight shingle replacement (<ExtLink href="https://www.derrynh.org/building-safety">Town of Derry</ExtLink>).
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              In Massachusetts, reroofing requires a building permit and the contractor&rsquo;s Home Improvement Contractor registration number on the application (<ExtLink href="https://www.mass.gov/info-details/780-cmr-residential-code">Mass.gov</ExtLink>). Fees in the Merrimack Valley are similar: Methuen charges $13 per $1,000 of job value (<ExtLink href="https://www.cityofmethuen.net/building-department">City of Methuen</ExtLink>) and Lowell charges $10 per $1,000 after the first $1,000 (<ExtLink href="https://www.lowellma.gov/302/Building-Department">City of Lowell</ExtLink>).
            </p>

            {/* Factor 7 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">7. Waste disposal and dumpsters</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Old shingles are heavy. A single square of torn-off shingles weighs roughly 200 to 430 pounds depending on the product (<ExtLink href="https://www.iko.com/na/blog/what-size-dumpster-for-roofing/">IKO</ExtLink>, <ExtLink href="https://www.dumpsters.com/blog/shingle-weight-calculator">Dumpsters.com</ExtLink>), so a 25-square roof can produce roughly 2.5 to 5 tons of debris.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A roll-off dumpster in the Manchester area runs about $935 to $1,165 for a 10- to 30-yard box (<ExtLink href="https://www.zters.com/dumpster-rental/new-hampshire/manchester/">ZTERS</ExtLink>), and overweight fees apply past the included tonnage. Two layers can mean two dumpsters. Confirm whether disposal, landfill fees and magnetic nail sweeps are included or billed separately.
            </p>

            {/* Factor 8 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">8. Flashing, chimneys, skylights and penetrations</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Every chimney, skylight, vent pipe and wall joint is a potential leak point, and each one takes labor to flash correctly. Reusing old, rusted flashing to save money is one of the most common shortcuts in the industry.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Chimney flashing replacement typically costs $400 to $1,600, and more for large or stone chimneys (<ExtLink href="https://www.angi.com/articles/how-much-does-chimney-flashing-cost.htm">Angi</ExtLink>). Skylight reflashing runs about $200 to $600 each (<ExtLink href="https://www.angi.com/articles/how-much-does-skylight-repair-cost.htm">Angi</ExtLink>). If your quote simply says &ldquo;flashing as needed,&rdquo; ask what that means in dollars.
            </p>

            {/* Factor 9 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">9. Code-required ice barrier and ventilation</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              New Hampshire enforces the 2021 International Residential Code, and Massachusetts&rsquo; building code is based on it too. Both require an ice barrier, such as ice and water shield, from the eaves to at least 24 inches inside the exterior wall line (IRC R905.1.2). On roofs of 8/12 pitch or steeper, Massachusetts adds a 36-inch minimum from the eave edge (<ExtLink href="https://www.mass.gov/info-details/780-cmr-residential-code">Mass.gov</ExtLink>).
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A low quote sometimes gets there by running a single course of ice shield, or none in the valleys. Ventilation is the other quiet line item: a properly balanced attic needs intake and exhaust, and a new ridge vent alone runs about $300 to $650 (<ExtLink href="https://www.angi.com/articles/how-much-does-ridge-vent-cost.htm">Angi</ExtLink>). Skipping it shortens shingle life and can void a manufacturer warranty.
            </p>

            {/* Factor 10 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">10. Access, height and roof complexity</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              A simple gable ranch with the driveway at the eaves is the cheapest roof to replace. Every complication adds labor: two or three stories, valleys, dormers, turrets, multiple roof planes, tight lots, landscaping to protect, or no place to park a dumpster.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Insurance estimating software even has a separate &ldquo;high roof&rdquo; charge per square for two-story homes. Expect a cut-up colonial with dormers to cost noticeably more per square than a simple cape of the same size.
            </p>

            {/* Factor 11 */}
            <h3 className="text-xl font-bold text-brand-navy mb-3">11. Timing, season and the labor market</h3>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              When you book matters. Late spring through fall is peak season in New England, and crews book out weeks in advance. Winter installs are possible, but cold-weather sealing, snow removal and shorter days can add $1,200 to $3,500 (<ExtLink href="https://www.thisoldhouse.com/roofing/reviews/roof-replacement-cost">This Old House</ExtLink>).
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              Material prices move too. Shingle roofing costs have risen about 50% since 2022 (<ExtLink href="https://www.fixr.com/costs/shingle-roof">Fixr</ExtLink>), and manufacturers typically announce increases at least once a year. Ask how long a quote&rsquo;s price is locked before you sign.
            </p>

            {/* Hidden costs table */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">How the hidden costs add up: $2,000 to $12,000</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Here&rsquo;s how the less-visible factors stack up on a typical 24-square architectural shingle roof in Southern New Hampshire with a $14,000 base quote. The &ldquo;easy roof&rdquo; has one layer and a few soft sheets. The &ldquo;problem roof&rdquo; is an older, steep two-story home that was roofed over once.
            </p>
            <div className="overflow-x-auto mb-6 -mx-4 px-4">
              <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-bold">Hidden cost item</th>
                    <th className="px-4 py-3 font-bold">Easy roof</th>
                    <th className="px-4 py-3 font-bold">Problem roof</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Building permit</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$165</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$500</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Dumpster and disposal (if not included)</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$950</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$1,200</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Second-layer tear-off</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$0</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$2,400</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Deck repair (sheets at $64&ndash;$192 each)</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$320 (5 sheets)</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$2,304 (12 sheets)</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Steep-pitch labor</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$0</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$3,000</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20 bg-brand-offwhite/50">
                    <td className="px-4 py-3 text-brand-charcoal/80">Chimney reflashing</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$400</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$1,600</td>
                  </tr>
                  <tr className="border-t border-brand-coppertint/20">
                    <td className="px-4 py-3 text-brand-charcoal/80">Ridge vent / ventilation</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$300</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">$650</td>
                  </tr>
                  <tr className="border-t-2 border-brand-copper bg-brand-copper/10">
                    <td className="px-4 py-3 font-bold text-brand-navy">Added to the base quote</td>
                    <td className="px-4 py-3 font-bold text-brand-navy">$2,135</td>
                    <td className="px-4 py-3 font-bold text-brand-navy">$11,654</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8 text-sm italic">
              Figures are illustrative, built from the sourced ranges above. Your roof will differ, which is exactly why a contractor should inspect it in person before pricing it.
            </p>

            {/* Compare quotes checklist */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">How to compare roofing quotes apples to apples</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Before you sign, ask every contractor the same questions:
            </p>
            <ol className="space-y-3 mb-8 ml-4 list-decimal list-outside">
              {[
                "How many squares did you measure, and what waste factor did you use?",
                "What exact shingle line, underlayment and ice barrier are you installing, and where?",
                "How many layers are you assuming, and what’s the charge per square if there’s another?",
                "How many sheets of decking are included, and what’s the price per additional sheet?",
                "Are the permit, dumpster, disposal fees and cleanup included?",
                "Are you replacing all flashing, including the chimney and step flashing, or reusing it?",
                "What ventilation are you installing, and does it meet the manufacturer’s warranty requirements?",
                "What workmanship and manufacturer warranties come with the job, and how long is this price good for?",
              ].map((item, i) => (
                <li key={i} className="text-brand-charcoal/80 leading-relaxed pl-2">{item}</li>
              ))}
            </ol>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              A quote that answers all eight in writing is usually the better value in the end, even when its first-page number is higher.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-6">Frequently asked questions</h2>
            <FAQAccordion items={faqs} />

            {/* CTA block */}
            <div className="mt-12 bg-brand-copper/10 border border-brand-copper/30 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Get a quote with no surprises</h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                At Prescott Roofing, we inspect your roof in person before we price it, and we spell out decking, layers, flashing, ventilation and permits in writing. That&rsquo;s what &ldquo;Precision From Every Angle&rdquo; means to us.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                If you&rsquo;re a homeowner in <Link href="/roofing/manchester-nh" className="text-brand-copper font-semibold hover:underline">Manchester</Link>, <Link href="/roofing/nashua-nh" className="text-brand-copper font-semibold hover:underline">Nashua</Link>, <Link href="/roofing/bedford-nh" className="text-brand-copper font-semibold hover:underline">Bedford</Link> or anywhere in Southern New Hampshire and Northern Massachusetts, <Link href="/free-inspection" className="text-brand-copper font-semibold hover:underline">schedule your free roof inspection</Link> and get a detailed, line-by-line estimate.
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
                { label: "This Old House: Roof replacement cost in New Hampshire", href: "https://www.thisoldhouse.com/roofing/reviews/roof-replacement-cost" },
                { label: "Roof Observations: New Hampshire roof cost guide", href: "https://www.roofobservations.com/new-hampshire-roof-cost/" },
                { label: "Fixr: Cost to shingle a roof", href: "https://www.fixr.com/costs/shingle-roof" },
                { label: "Inch Calculator: Roof replacement cost", href: "https://www.inchcalculator.com/roof-replacement-cost/" },
                { label: "NerdWallet: Roof replacement cost", href: "https://www.nerdwallet.com/article/finance/roof-replacement-cost" },
                { label: "Angi: Roof sheathing cost", href: "https://www.angi.com/articles/how-much-does-roof-sheathing-cost.htm" },
                { label: "Angi: Chimney flashing cost", href: "https://www.angi.com/articles/how-much-does-chimney-flashing-cost.htm" },
                { label: "Angi: Skylight repair cost", href: "https://www.angi.com/articles/how-much-does-skylight-repair-cost.htm" },
                { label: "Angi: Ridge vent cost", href: "https://www.angi.com/articles/how-much-does-ridge-vent-cost.htm" },
                { label: "City of Manchester, NH: Building permit fees", href: "https://www.manchesternh.gov/Departments/Building" },
                { label: "Town of Derry, NH: Permit guidance", href: "https://www.derrynh.org/building-safety" },
                { label: "Mass.gov: 780 CMR residential chapter 1 & ice barrier FAQ", href: "https://www.mass.gov/info-details/780-cmr-residential-code" },
                { label: "City of Methuen: Building permit fees", href: "https://www.cityofmethuen.net/building-department" },
                { label: "City of Lowell: Building permit fees", href: "https://www.lowellma.gov/302/Building-Department" },
                { label: "IKO: Dumpster size for roofing", href: "https://www.iko.com/na/blog/what-size-dumpster-for-roofing/" },
                { label: "Dumpsters.com: Shingle weight calculator", href: "https://www.dumpsters.com/blog/shingle-weight-calculator" },
                { label: "ZTERS: Dumpster rental in Manchester, NH", href: "https://www.zters.com/dumpster-rental/new-hampshire/manchester/" },
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
