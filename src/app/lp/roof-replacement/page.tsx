import type { Metadata } from "next";
import Image from "next/image";
import { LpHeader, LpStickyBar, LpFooter } from "@/components/lp/LpChrome";
import { LpQuoteForm } from "@/components/lp/LpQuoteForm";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

// Paid-traffic landing page: kept out of search so it doesn't compete with the main site.
export const metadata: Metadata = {
  title: { absolute: "Free Roof Replacement Quote | 50-Year CertainTeed Warranty | Prescott Roofing" },
  description:
    "CertainTeed ShingleMaster certified roof replacement in Southern NH and Northern MA. 50-year warranty available through CertainTeed plus a 20-year workmanship warranty. Free inspection and written quote.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/roof-replacement" },
};

const heroPoints = [
  "50-year warranty available through CertainTeed",
  "20-year workmanship warranty on every roof we install",
  "Flexible financing with affordable monthly payments",
  "Written, line-item quote, and we respond within 24 hours",
];

const trustItems = [
  { title: "CertainTeed ShingleMaster", sub: "Certified installer" },
  { title: "50-Year Warranty", sub: "Through CertainTeed" },
  { title: "20-Year Workmanship", sub: "Backed by Prescott" },
  { title: "Licensed & Insured", sub: "Family-owned, NH & MA" },
];

const included = [
  { title: "Complete tear-off", desc: "Old shingles come off down to the deck. We never layer over an old roof." },
  { title: "Deck inspection & repair", desc: "Soft or rotted plywood is replaced before a single shingle goes down." },
  { title: "Ice & water shield", desc: "Along eaves, valleys, and every penetration to stop ice-dam leaks." },
  { title: "Synthetic underlayment", desc: "Full-coverage secondary barrier under your new shingles." },
  { title: "New flashing & ventilation", desc: "Step flashing, pipe boots, drip edge, and ridge vent done right." },
  { title: "Spotless cleanup", desc: "Landscaping protected, magnetic nail sweep, final walkthrough with you." },
];

const steps = [
  { title: "Request your quote", desc: "Fill out the form or call. We'll reach out within 24 hours to book a time that works for you." },
  { title: "Free inspection & written estimate", desc: "We inspect the whole roof system, show you photos, and give you a clear line-item quote. No pressure." },
  { title: "Your new roof, usually in 1–3 days", desc: "We install, clean up, and walk the property with you before we leave." },
];

const projects = [
  { src: "/img/completed-shingle-roof-southern-nh.webp", alt: "Completed architectural shingle roof replacement in Manchester NH", label: "Full replacement · Manchester, NH" },
  { src: "/img/ranch-roof-replacement-completed.webp", alt: "Completed ranch-style roof replacement with new gutters in Derry NH", label: "Roof & gutters · Derry, NH" },
  { src: "/img/roof-replacement-tear-off-crew.webp", alt: "Prescott Roofing crew performing a multi-layer tear-off in Salem NH", label: "Multi-layer tear-off · Salem, NH" },
];

const faqs = [
  {
    q: "How much does a new roof cost?",
    a: "It depends on your roof's size, pitch, layers to remove, and the shingle line you choose. After a free inspection you get a written, line-item quote, so you know exactly what you're paying for before anything starts.",
  },
  {
    q: "What does the 50-year CertainTeed warranty cover?",
    a: "As a CertainTeed ShingleMaster certified contractor, we can offer a 50-year warranty through CertainTeed on qualifying installations that use a complete CertainTeed system. On top of that, every roof we install carries our own 20-year workmanship warranty. We'll walk you through exactly what's covered at your inspection.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Flexible financing with affordable monthly payments is available, so a new roof doesn't have to wait. Ask about it during your free inspection.",
  },
  {
    q: "What if my roof was damaged in a storm?",
    a: "Our team comes from the insurance-restoration world. We document the damage, meet your adjuster, and handle supplements, so the claim reflects everything your roof actually needs.",
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

export default function RoofReplacementLandingPage() {
  return (
    <>
      <LpHeader />

      {/* Hero + form */}
      <section className="relative bg-brand-navy overflow-hidden">
        <Image
          src="/img/completed-shingle-roof-southern-nh.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-7 md:py-16 grid gap-7 md:gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-semibold text-brand-coppertint">
              CertainTeed ShingleMaster Certified Roofer
            </p>
            <h1 className="mt-4 text-[2rem] leading-[1.1] sm:text-5xl font-extrabold text-white">
              A new roof built for New Hampshire winters,{" "}
              <span className="text-brand-copper">backed for 50 years.</span>
            </h1>
            <p className="mt-4 hidden sm:block text-lg text-white/80 max-w-xl">
              Prescott Roofing replaces roofs across Southern NH and Northern MA with CertainTeed shingles and a 50-year warranty
              available through CertainTeed. Start with a free, no-pressure inspection and a written quote.
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
          <LpQuoteForm source="Google Ads – Roof Replacement LP" />
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-brand-coppertint/30" aria-label="Credentials">
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

      {/* Warranty offer */}
      <section className="bg-brand-offwhite py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src="/img/roof-inspection.webp"
              alt="Prescott Roofing inspecting a residential roof in Southern New Hampshire"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-3 shadow">
              <p className="text-3xl font-extrabold text-brand-copper leading-none">50 Years</p>
              <p className="text-xs font-semibold text-brand-navy mt-1">Through CertainTeed, plus 20 years on our workmanship</p>
            </div>
          </div>
          <div>
            <p className="text-brand-copper font-bold text-sm uppercase tracking-widest">Why it matters</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
              Two warranties protecting your roof, not one.
            </h2>
            <p className="mt-4 text-brand-charcoal/80 leading-relaxed">
              As a CertainTeed ShingleMaster, we can register qualifying full-system installations for a 50-year warranty through
              CertainTeed, so your roof is backed by the manufacturer, not just the crew that installed it.
            </p>
            <p className="mt-3 text-brand-charcoal/80 leading-relaxed">
              On top of that, every roof we install carries our own 20-year workmanship warranty. We&apos;ll show you exactly
              what&apos;s covered at your free inspection.
            </p>
            <a
              href="#quote"
              className="mt-6 inline-flex items-center justify-center px-6 py-3.5 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Get My Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-center">Included in every Prescott roof</h2>
          <p className="mt-3 text-center text-brand-charcoal/70 max-w-2xl mx-auto">
            No shortcuts and no surprise line items. Here&apos;s what you get on every replacement.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="rounded-lg border border-brand-coppertint/40 p-5">
                <div className="flex items-center gap-3">
                  <Check />
                  <h3 className="font-bold text-brand-navy">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-brand-offwhite py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-center">Recent roofs in your area</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <figure key={p.src} className="rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-brand-navy">{p.label}</figcaption>
              </figure>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Find out what your new roof will cost</h2>
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
