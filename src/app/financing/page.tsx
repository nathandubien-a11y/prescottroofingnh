import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

const ACORN_URL =
  "https://www.acornfinance.com/pre-qualify/?d=B4E3E&utm_medium=user_pre_qual_link";

export const metadata: Metadata = {
  title: "Financing | Affordable Roofing Payment Options",
  description:
    "Affordable roofing financing options from Prescott Roofing. Personal loans up to $100,000 with fixed rates, flexible terms, and no prepayment penalties. Check your rate with no impact to your credit score.",
  alternates: { canonical: "/financing" },
};

const steps = [
  {
    step: "1",
    title: "Check Your Rate",
    desc: "Answer a few quick questions — it takes about 60 seconds. This is a soft credit check, so there's no impact to your credit score.",
  },
  {
    step: "2",
    title: "Compare Offers",
    desc: "Receive personalized loan offers from multiple lenders. Compare rates, terms, and monthly payments side by side to find the best fit.",
  },
  {
    step: "3",
    title: "Get Funded",
    desc: "Choose your preferred offer and complete the application with your selected lender. Qualified applicants can receive funding as soon as 24 hours.",
  },
];

const benefits = [
  {
    title: "Loans Up to $100,000",
    desc: "Finance your full roof replacement, repair, or upgrade — no matter the scope of the project.",
    icon: "dollar",
  },
  {
    title: "Fixed Monthly Payments",
    desc: "Predictable payments that never change. Know exactly what you owe each month for the life of the loan.",
    icon: "calendar",
  },
  {
    title: "Flexible Terms",
    desc: "Choose repayment terms from 2 to 12 years to fit your budget. Longer terms available for qualified borrowers.",
    icon: "clock",
  },
  {
    title: "No Prepayment Penalties",
    desc: "Pay off your loan early without any extra fees or penalties. Save on interest whenever you can.",
    icon: "check",
  },
  {
    title: "Competitive Fixed Rates",
    desc: "Compare offers from 20+ lenders to find the lowest rate you qualify for — all in one place.",
    icon: "percent",
  },
  {
    title: "No Credit Score Impact",
    desc: "Checking your rate uses a soft credit inquiry. Your credit score stays exactly where it is.",
    icon: "shield",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Financing" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Affordable Roofing Financing
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            A new roof is an investment in your home. We&apos;ve partnered with Acorn Finance to offer flexible payment options so you can get the roof you need — on a timeline that works for your budget.
          </p>
          <a
            href={ACORN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            Apply for Financing
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
              Getting financing for your roofing project is simple. Check your rate in 60 seconds with no impact to your credit score.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-copper text-white font-bold flex items-center justify-center text-2xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={ACORN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Check Your Rate &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
              Through our partnership with Acorn Finance, you get access to competitive loan options from 20+ lenders — all through one simple application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-coppertint/20 rounded-lg p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-brand-navy flex items-center justify-center">
                  <BenefitIcon type={item.icon} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-10 text-center">
            Financing FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Will checking my rate affect my credit score?",
                a: "No. The initial rate check uses a soft credit inquiry, which has no impact on your credit score. A hard credit pull only occurs if you choose to move forward with a specific lender's offer.",
              },
              {
                q: "How much can I finance?",
                a: "Qualified borrowers can access personal loans from $1,000 up to $100,000, depending on creditworthiness and lender requirements.",
              },
              {
                q: "What are the repayment terms?",
                a: "Loan terms range from 2 to 12 years, with longer terms available for applicants with excellent credit. All loans feature fixed monthly payments so your rate never changes.",
              },
              {
                q: "How quickly can I get funded?",
                a: "Qualified applicants can receive approval during business hours and funding as soon as 24 hours after completing the full application with their chosen lender.",
              },
              {
                q: "Are there any fees or prepayment penalties?",
                a: "There are no prepayment penalties — you can pay off your loan early and save on interest. For loans under $40,000, some lenders may charge an origination fee of 1–6%, though fee-free options are available. Loans over $40,000 have no processing charges.",
              },
              {
                q: "Can I apply with a co-borrower?",
                a: "Yes. Adding a co-borrower may help you qualify for a larger loan amount or better interest rate.",
              },
              {
                q: "Can I use financing for any roofing service?",
                a: "Absolutely. Financing can be used for roof replacements, repairs, storm damage restoration, gutter installation, and any other roofing service we offer.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-brand-coppertint/20 rounded-lg p-6">
                <h3 className="font-bold text-brand-navy mb-2">{faq.q}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Check your rate in 60 seconds with no impact to your credit score. Or call us to discuss your project and financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ACORN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Apply for Financing
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
            >
              <PhoneIcon />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function BenefitIcon({ type }: { type: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C45A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {type === "dollar" && <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>}
      {type === "calendar" && <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
      {type === "clock" && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
      {type === "check" && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
      {type === "percent" && <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>}
      {type === "shield" && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>}
    </svg>
  );
}
