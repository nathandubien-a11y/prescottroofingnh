import { siteConfig } from "@/lib/siteConfig";

/** Answers "what will it cost?" for cost-related ad searches, then points to the free quote. */
export function LpCostFactors({
  eyebrow,
  title,
  intro,
  factors,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  factors: { title: string; desc: string }[];
}) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-brand-copper font-bold text-sm uppercase tracking-widest">{eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy text-center">{title}</h2>
        <p className="mt-4 mx-auto max-w-2xl text-center text-brand-charcoal/75">{intro}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((f) => (
            <div key={f.title} className="rounded-lg border border-brand-coppertint/40 bg-brand-offwhite p-5">
              <h3 className="font-bold text-brand-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            Get my free written quote
          </a>
          <a href={siteConfig.phoneHref} className="font-semibold text-brand-navy underline">
            Or call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
