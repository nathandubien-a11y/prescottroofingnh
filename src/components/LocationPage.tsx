import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";
import { TrustBar } from "@/components/TrustBar";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import type { LocationData } from "@/data/locations/types";

const serviceLinks = [
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Storm & Wind Damage", href: "/services/storm-damage" },
  { label: "Ice Dam Removal", href: "/services/ice-dam-removal" },
  { label: "Gutters", href: "/services/gutters" },
];

export function LocationPage({ data }: { data: LocationData }) {
  const { city, state, county } = data;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/roofing" },
              { label: `${city}, ${state}` },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {data.h1}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            {data.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-brand-copper text-white rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Get a Free Roof Inspection
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
            >
              <PhoneIcon />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Intro + Service Links */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-lg text-brand-charcoal/80 leading-relaxed mb-8">
              {data.intro}
            </p>

            <h2 className="text-xl font-bold text-brand-navy mb-4">
              Our Services in {city}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {serviceLinks.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-brand-coppertint/20 rounded-md hover:border-brand-copper/40 hover:shadow-sm transition-all group"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-brand-copper shrink-0"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="font-medium text-brand-navy group-hover:text-brand-copper transition-colors">
                    {svc.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, i) => (
        <div key={i}>
          <section
            className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-white" : "bg-brand-offwhite"}`}
          >
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs[0] && (
                  <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                    {section.paragraphs[0]}
                  </p>
                )}
                {section.bullets && (
                  <ul className="space-y-3 mb-6">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-brand-copper shrink-0 mt-0.5"
                        >
                          <path
                            d="m9 12 2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="text-brand-charcoal/80">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphs.slice(1).map((p, j) => (
                  <p
                    key={j}
                    className="text-brand-charcoal/80 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Mid-page CTA after storm damage section */}
          {section.showMidCta && (
            <section className="bg-brand-copper py-12">
              <div className="mx-auto max-w-4xl px-4 text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  Think You Have Storm Damage?
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  Ask about your insurance claim. We&apos;ll inspect your roof
                  for free and tell you if filing makes sense.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/free-inspection"
                    className="inline-flex items-center px-8 py-4 text-lg font-bold bg-white text-brand-copper rounded-md hover:bg-brand-offwhite transition-colors"
                  >
                    Ask About Your Insurance Claim
                  </Link>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
                  >
                    <PhoneIcon />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}

      {/* Why Choose */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-8">
              {data.whyChoose.heading}
            </h2>
            <ul className="space-y-4">
              {data.whyChoose.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-brand-copper shrink-0 mt-0.5"
                  >
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="text-brand-charcoal/80">
                    <strong className="text-brand-navy">{item.bold}</strong>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Nearby Towns */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
              {data.neighborhoods.heading}
            </h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-6">
              Prescott Roofing serves all of {city}, {state} including{" "}
              {data.neighborhoods.areas.join(", ")}.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              We also serve nearby:
            </p>
            <div className="flex flex-wrap gap-3">
              {data.neighborhoods.nearbyTowns.map((town) =>
                town.href === "#" ? (
                  <span
                    key={town.name}
                    className="px-4 py-2 bg-brand-offwhite border border-brand-coppertint/30 rounded-full text-sm font-medium text-brand-navy"
                  >
                    {town.name}
                  </span>
                ) : (
                  <Link
                    key={town.name}
                    href={town.href}
                    className="px-4 py-2 bg-brand-offwhite border border-brand-coppertint/30 rounded-full text-sm font-medium text-brand-navy hover:border-brand-copper hover:text-brand-copper transition-colors"
                  >
                    {town.name}
                  </Link>
                ),
              )}
              <Link
                href="/roofing"
                className="px-4 py-2 text-sm font-semibold text-brand-copper hover:underline"
              >
                View all service areas &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">
            Frequently Asked Questions &mdash; Roofing in {city}, {state}
          </h2>
          <FAQAccordion items={data.faqs} />
          <FAQSchema items={data.faqs} />
        </div>
      </section>

      {/* Inline Lead Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-4">
                Get Your Free Roof Inspection in {city}
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Whether you need a full roof replacement, a targeted repair, or
                help with a storm damage insurance claim, it starts with a free
                inspection. We&apos;ll assess your roof&apos;s condition, give
                you an honest recommendation, and provide a written estimate
                &mdash; no pressure, no obligation.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed">
                Serving {city} and all of {county} County, {state}. Call us at{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-bold text-brand-copper hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or fill out the form to get started.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        heading={data.closingCta.heading}
        subheading={data.closingCta.subheading}
      />

      {/* JSON-LD: RoofingContractor */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: siteConfig.name,
            url: `${siteConfig.url}/${data.slug}`,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            ...(siteConfig.address
              ? {
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: siteConfig.address,
                    addressLocality: siteConfig.city,
                    addressRegion: siteConfig.state,
                    postalCode: siteConfig.zip,
                    addressCountry: "US",
                  },
                }
              : {}),
            areaServed: [
              {
                "@type": "City",
                name: `${city}, ${state}`,
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: `${county} County, ${state}`,
                },
              },
              ...data.neighborhoods.nearbyTowns.map((t) => ({
                "@type": "City",
                name: t.name,
              })),
            ],
            description: `Expert roofing contractor serving ${city}, ${county} County, ${state}. Roof replacement, repair, storm damage restoration, and insurance claim assistance.`,
            priceRange: "$$",
            image: `${siteConfig.url}/logo-color.jpg`,
          }),
        }}
      />
    </>
  );
}
