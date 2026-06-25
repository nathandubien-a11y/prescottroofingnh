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

// [todo] — replace with real Google reviews
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    town: "Manchester",
    rating: 5,
    text: "Prescott Roofing made our insurance claim process completely painless. They documented every detail and handled everything with our adjuster. New roof looks incredible and we only paid our deductible.",
  },
  {
    name: "Mike & Lisa P.",
    town: "Bedford",
    rating: 5,
    text: "After the big storm last winter, these guys were at our house the next morning. Professional, precise, and honest about what needed repair vs. replacement. Highly recommend.",
  },
  {
    name: "Tom R.",
    town: "Nashua",
    rating: 5,
    text: "We got three quotes and Prescott was the only one who took the time to explain our options clearly. The crew was on time, clean, and the roof is flawless. Family-owned and it shows.",
  },
  {
    name: "Jennifer K.",
    town: "Derry",
    rating: 5,
    text: "Our roof had serious ice dam damage and we didn't know where to start with the insurance claim. Prescott handled everything — the documentation, the adjuster meeting, the whole process. Couldn't be happier.",
  },
  {
    name: "David & Carol S.",
    town: "Hooksett",
    rating: 5,
    text: "Honest, fair, and skilled. They told us we only needed a repair when another company was pushing a full replacement. Saved us thousands and the repair has held up perfectly.",
  },
  {
    name: "Robert L.",
    town: "Merrimack",
    rating: 5,
    text: "The precision in their work is obvious. Straight lines, clean cuts, and they cleaned up the job site better than they found it. Plus they got our insurance claim approved in two weeks flat.",
  },
  {
    name: "Amanda T.",
    town: "Goffstown",
    rating: 5,
    text: "We chose Prescott specifically for their insurance claim expertise and they delivered. Their Xactimate estimate matched exactly what the adjuster needed. No back-and-forth, just an approved claim and a beautiful new roof.",
  },
  {
    name: "Chris B.",
    town: "Londonderry",
    rating: 5,
    text: "Great communication throughout the whole process. They showed up when they said they would, did what they said they'd do, and the price was what they quoted. Refreshing experience for a contractor.",
  },
  {
    name: "Patricia W.",
    town: "Salem",
    rating: 5,
    text: "I was worried about the ice dam situation on our older home. Prescott came out, removed the ice dam safely, fixed the water damage, and recommended insulation improvements to prevent it from happening again. Thorough and knowledgeable.",
  },
];

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

      <section className="py-4 bg-white border-b border-brand-coppertint/30">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#C45A28">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-brand-navy">
              {siteConfig.stats.googleRating} out of 5
            </span>
            <span className="text-brand-charcoal/60">
              ({siteConfig.stats.googleReviewCount} reviews)
            </span>
          </div>
          {/* [todo] — link to actual Google Business Profile */}
          <a
            href={siteConfig.googleBusinessUrl || "#"}
            className="text-sm font-semibold text-brand-copper hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave us a review on Google &rarr;
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join Our Happy Customers"
        subheading="See for yourself why homeowners across Southern NH trust Prescott Roofing. Start with a free inspection."
      />
    </>
  );
}
