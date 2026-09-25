import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "Read what Southern NH homeowners say about Prescott Roofing. Real reviews from real customers across Manchester, Nashua, Bedford, and beyond.",
  alternates: { canonical: "/reviews" },
};

// [NATHAN: SUPPLY] — Replace with verified Google reviews once GBP link is live.
// Until then this page shows the review widget pointing to Google only.
const testimonials: Testimonial[] = [];

export default function ReviewsPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Reviews" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Real reviews from homeowners across Southern New Hampshire. Our reputation is built on precision, honesty, and expertise.
          </p>
        </div>
      </section>

      {/* [NATHAN: SUPPLY] — Rating bar will be restored once real Google review data is connected */}

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-12">
              <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
                Reviews Coming Soon
              </h2>
              <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                We&apos;re collecting verified reviews from homeowners we&apos;ve served across Southern New Hampshire. In the meantime, check out our Google Business Profile for the latest customer feedback.
              </p>
              <a
                href={siteConfig.googleBusinessUrl || "#"}
                className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Our Google Reviews &rarr;
              </a>
            </div>
          )}
        </div>
      </section>

      <CTASection
        heading="Join Our Happy Customers"
        subheading="See for yourself why homeowners across Southern NH trust Prescott Roofing. Start with a free inspection."
      />
    </>
  );
}
