import type { Metadata } from "next";
import { LpHeader, LpStickyBar, LpFooter } from "@/components/lp/LpChrome";
import { LpQuoteForm } from "@/components/lp/LpQuoteForm";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

// Paid-traffic landing page for metal roofing searches; kept out of search results.
export const metadata: Metadata = {
  title: { absolute: "Metal Roof Installation in Southern NH | Free Quote | Prescott Roofing" },
  description:
    "Standing seam metal roof installation across Southern NH and Northern MA with a lifetime warranty. Sheds snow, lasts decades, installed by a local, licensed crew. Free inspection and written quote.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/metal-roofing" },
};

const heroPoints = [
  "Lifetime warranty on every metal roof we install",
  "Standing seam metal roofs built for heavy New England snow",
  "Flexible financing with affordable monthly payments",
  "Written, line-item quote, and we respond within 24 hours",
];

const trustItems = [
  { title: "Lifetime Warranty", sub: "On every metal roof" },
  { title: "Standing Seam", sub: "Concealed-fastener panels" },
  { title: "Built for Snow", sub: "Sheds snow and ice" },
  { title: "Licensed & Insured", sub: "Family-owned, NH & MA" },
];

const benefits = [
  { title: "Sheds snow", desc: "Slick panels let snow slide off instead of piling up, which cuts down on ice dams and heavy roof loads." },
  { title: "Lasts for decades", desc: "A properly installed metal roof typically lasts 40–70 years. For many homeowners, it's the last roof they'll buy." },
  { title: "Low maintenance", desc: "No curling, cracking, or granule loss. Most years it needs little more than a look after big storms." },
  { title: "Fire & wind resistant", desc: "Metal won't burn and holds up well against the wind-driven storms that tear shingles loose." },
  { title: "Energy efficient", desc: "Reflective finishes help keep attics cooler in summer, easing the load on your AC." },
  { title: "Clean, modern look", desc: "Crisp vertical lines and a wide range of colors to fit farmhouses, colonials, and modern builds." },
];

const comparison = [
  { label: "Typical lifespan", metal: "40–70 years", shingle: "20–30 years" },
  { label: "Snow & ice", metal: "Sheds snow, fewer ice dams", shingle: "Holds snow; ice dams more likely" },
  { label: "Maintenance", metal: "Minimal", shingle: "Periodic repairs as it ages" },
  { label: "Upfront cost", metal: "Higher", shingle: "Lower" },
  { label: "Long-term value", metal: "Often lower cost per year", shingle: "May need replacing sooner" },
];

const steps = [
  { title: "Request your quote", desc: "Fill out the form or call. We'll reach out within 24 hours to book a time that works for you." },
  { title: "Free inspection & written estimate", desc: "We measure your roof, review panel and color options, and give you a clear line-item quote. No pressure." },
  { title: "Professional installation", desc: "Full tear-off, deck inspection, high-temperature underlayment, and panels installed to manufacturer spec." },
];

const faqs = [
  {
    q: "How much does a metal roof cost?",
    a: "Metal costs more upfront than asphalt shingles, but it typically lasts two to three times as long. Your price depends on roof size, pitch, panel type, and color. After a free inspection you get a written, line-item quote.",
  },
  {
    q: "What warranty comes with a metal roof?",
    a: "Every metal roof we install comes with a lifetime warranty. We'll walk you through exactly what's covered, in writing, at your free inspection.",
  },
  {
    q: "Is a metal roof loud when it rains?",
    a: "Not when it's installed over solid decking and underlayment, the way we install residential metal roofs. Most homeowners say it sounds about the same as their old shingle roof.",
  },
  {
    q: "Can you install metal over my existing shingles?",
    a: "We recommend a full tear-off so we can inspect and repair the deck underneath and install proper underlayment. It's the best way to make a metal roof last as long as it should.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Flexible financing with affordable monthly payments is available. Ask about it during your free inspection.",
  },
  {
    q: "What areas do you serve?",
    a: "Homeowners within about 30 miles of Manchester, including Nashua, Bedford, Concord, Derry, Salem, and into Northern Massachusetts, plus Cheshire County, NH.",
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#C45A28" />
      <polyline points="8 12 11 15 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Shield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-navy shrink-0">
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z" fill="currentColor" opacity="0.12" />
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="#C45A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Vertical ribs that echo standing seam panels, used as a subtle hero texture. */
const seamPattern = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 46px)",
};

export default function MetalRoofingLandingPage() {
  return (
    <>
      <LpHeader />

      {/* Hero + form */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0" style={seamPattern} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/40 via-transparent to-brand-copper/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-7 md:py-16 grid gap-7 md:gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-semibold text-brand-coppertint">
              Standing Seam Metal Roofing · Southern NH &amp; Northern MA
            </p>
            <h1 className="mt-4 text-[2rem] leading-[1.1] sm:text-5xl font-extrabold text-white">
              The last roof you&apos;ll ever buy,{" "}
              <span className="text-brand-copper">built for NH winters.</span>
            </h1>
            <p className="mt-4 hidden sm:block text-lg text-white/80 max-w-xl">
              Prescott Roofing installs standing seam metal roofs that shed snow, shrug off storms, and come with a lifetime
              warranty. Start with a free, no-pressure inspection and a written quote.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
              {heroPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white">
                  <Check className="mt-0.5" />
                  <span className="text-[15px] sm:text-base font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.phoneHref}
              className="mt-7 hidden lg:inline-flex items-center gap-2 text-white/90 font-semibold hover:text-white"
            >
              <PhoneIcon className="text-brand-copper" />
              Prefer to talk? Call {siteConfig.phone}
            </a>
          </div>
          <LpQuoteForm
            source="Google Ads – Metal Roofing LP"
            projectOptions={["New metal roof", "Compare metal vs. shingle", "Not sure"]}
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-brand-coppertint/30" aria-label="Highlights">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {trustItems.map((t) => (
            <div key={t.title} className="flex items-center gap-3">
              <Shield />
              <div>
                <p className="text-sm font-extrabold text-brand-navy leading-tight">{t.title}</p>
                <p className="text-xs text-brand-charcoal/60">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-offwhite py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-brand-copper font-bold text-sm uppercase tracking-widest">Why metal</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy text-center">
            Made for the way New England winters treat a roof
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg bg-white border border-brand-coppertint/40 p-5">
                <div className="flex items-center gap-3">
                  <Check />
                  <h3 className="font-bold text-brand-navy">{b.title}</h3>
                </div>
                <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal vs shingle */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-center">Metal vs. asphalt shingles</h2>
          <p className="mt-3 text-center text-brand-charcoal/70">
            Not sure which is right for your home? We install both and will give you an honest recommendation.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border border-brand-coppertint/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-brand-navy text-white text-left">
                  <th className="px-4 py-3 font-bold" scope="col"><span className="sr-only">Feature</span></th>
                  <th className="px-4 py-3 font-bold" scope="col">Standing seam metal</th>
                  <th className="px-4 py-3 font-bold" scope="col">Asphalt shingles</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} className={`border-t border-brand-coppertint/20 ${i % 2 ? "bg-brand-offwhite/50" : ""}`}>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-brand-navy">{row.label}</th>
                    <td className="px-4 py-3 text-brand-charcoal/80">{row.metal}</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">{row.shingle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Get My Free Metal Roof Quote
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Three simple steps</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-lg bg-white/5 border border-white/10 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-copper text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Get My Free Quote
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
            >
              <PhoneIcon className="text-brand-copper" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-center">Common questions</h2>
          <div className="mt-8 divide-y divide-brand-coppertint/40 border-y border-brand-coppertint/40">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-navy">
                  {f.q}
                  <span className="text-brand-copper text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-brand-charcoal/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-copper py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">See what a metal roof would cost for your home</h2>
          <p className="mt-3 text-white/90 text-lg">Free inspection. Written quote. No pressure, no obligation.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-4 bg-brand-navy text-white text-lg font-bold rounded-md hover:bg-brand-navy/90 transition-colors"
            >
              Get My Free Quote
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-brand-navy text-lg font-bold rounded-md hover:bg-white/90 transition-colors"
            >
              <PhoneIcon className="text-brand-copper" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <LpFooter />
      <LpStickyBar />
    </>
  );
}
