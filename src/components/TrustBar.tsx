import { siteConfig } from "@/lib/siteConfig";

export function TrustBar() {
  return (
    <section className="bg-white border-y border-brand-coppertint/30 py-8" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          <div>
            <p className="text-2xl font-extrabold text-brand-navy">{siteConfig.stats.yearsInBusiness}</p>
            <p className="text-sm text-brand-charcoal/70 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-brand-navy">{siteConfig.stats.roofsCompleted}</p>
            <p className="text-sm text-brand-charcoal/70 mt-1">Roofs Completed</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-brand-copper">{siteConfig.stats.googleRating} &#9733;</p>
            <p className="text-sm text-brand-charcoal/70 mt-1">Google Rating</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-navy" aria-hidden="true">
              <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z" fill="currentColor" opacity="0.15" />
              <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="m9 12 2 2 4-4" stroke="#C45A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm font-semibold text-brand-navy">Fully Licensed & Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
}
