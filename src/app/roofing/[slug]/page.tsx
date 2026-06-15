import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/FAQAccordion";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

export function generateStaticParams() {
  return serviceAreaTowns.map((town) => ({ slug: town.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const town = serviceAreaTowns.find((t) => t.slug === slug);
  if (!town) return {};

  return {
    title: `Roofing Contractor in ${town.name}, NH`,
    description: `Archer Roofing provides expert roof replacement, repair, storm damage restoration, and insurance claim help in ${town.name}, ${town.county} County, NH. Call ${siteConfig.phone} for a free inspection.`,
    alternates: { canonical: `/roofing/${slug}` },
  };
}

function getFAQs(townName: string): FAQItem[] {
  return [
    {
      question: `What roofing services does Archer Roofing offer in ${townName}?`,
      answer: `We offer full roof replacement, roof repair, storm and wind damage restoration, ice dam removal, gutter installation, and expert insurance claim assistance for homeowners in ${townName} and surrounding areas.`,
    },
    {
      question: `How much does a roof replacement cost in ${townName}, NH?`,
      answer: `Roof replacement costs vary based on your home's size, roof pitch, material choice, and whether there's storm damage involved. We provide free inspections and detailed estimates. If insurance covers the work, you'll typically only pay your deductible.`,
    },
    {
      question: `Does Archer Roofing help with insurance claims in ${townName}?`,
      answer: `Absolutely. Insurance claim assistance is our core specialty. We provide Xactimate-certified damage documentation, meet with your adjuster, and coordinate the entire process. Our restoration background means we know exactly what insurers need to approve claims.`,
    },
    {
      question: `How quickly can you respond to a roofing emergency in ${townName}?`,
      answer: `We prioritize emergency calls and can typically be on-site within 24 hours for ${townName} and surrounding areas. For active leaks, we'll tarp the area immediately to prevent further damage.`,
    },
  ];
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const town = serviceAreaTowns.find((t) => t.slug === slug);
  if (!town) notFound();

  const faqs = getFAQs(town.name);
  const nearbyTowns = serviceAreaTowns.filter((t) => t.county === town.county && t.slug !== town.slug).slice(0, 5);

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Service Areas", href: "/roofing" }, { label: `${town.name}, NH` }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Roofing Contractor in {town.name}, NH
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Archer Roofing serves homeowners in {town.name}, {town.county} County with expert roof replacement, repair, storm damage restoration, and insurance claim assistance. Precision from every angle.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
              Expert Roofing Services for {town.name} Homeowners
            </h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              {town.weather}
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Whether you&apos;re near {town.landmarks}, Archer Roofing provides the full range of residential roofing services throughout {town.name} and {town.county} County. From complete roof replacements with manufacturer-backed warranties to emergency storm damage repairs, we deliver the precision and reliability your home needs.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8">
              What truly sets us apart in {town.name} is our insurance claim expertise. Our team brings real Xactimate estimating experience and adjuster relationships to every storm-damage project. That means faster claim approvals and a better outcome for you. We also offer competitive pricing and flexible financing for retail customers.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-4">Our Services in {town.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: "Roof Replacement", href: "/services/roof-replacement" },
                { label: "Roof Repair", href: "/services/roof-repair" },
                { label: "Storm & Wind Damage", href: "/services/storm-damage" },
                { label: "Ice Dam Removal", href: "/services/ice-dam-removal" },
                { label: "Gutters", href: "/services/gutters" },
                { label: "Insurance Claims", href: "/insurance-claims" },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-brand-coppertint/20 rounded-md hover:border-brand-copper/40 hover:shadow-sm transition-all group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-copper shrink-0">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="font-medium text-brand-navy group-hover:text-brand-copper transition-colors">{svc.label}</span>
                </Link>
              ))}
            </div>

            <div className="bg-brand-copper/10 border border-brand-copper/30 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-brand-navy mb-2">
                Free Roof Inspection in {town.name}
              </h4>
              <p className="text-brand-charcoal/70 mb-4">
                Schedule a free, no-obligation roof inspection. We&apos;ll assess your roof&apos;s condition, identify any issues, and provide an honest recommendation — whether it&apos;s a repair, replacement, or nothing at all.
              </p>
              <Link
                href="/free-inspection"
                className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
              >
                Schedule Free Inspection in {town.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">
            Roofing FAQs for {town.name}, NH
          </h2>
          <FAQAccordion items={faqs} />
          <FAQSchema items={faqs} />
        </div>
      </section>

      {/* Nearby towns */}
      {nearbyTowns.length > 0 && (
        <section className="py-12 bg-brand-offwhite">
          <div className="mx-auto max-w-7xl px-4">
            <h3 className="text-lg font-bold text-brand-navy mb-4">Also Serving Nearby</h3>
            <div className="flex flex-wrap gap-3">
              {nearbyTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/roofing/${t.slug}`}
                  className="px-4 py-2 bg-white border border-brand-coppertint/30 rounded-full text-sm font-medium text-brand-navy hover:border-brand-copper hover:text-brand-copper transition-colors"
                >
                  {t.name}, NH
                </Link>
              ))}
              <Link
                href="/roofing"
                className="px-4 py-2 text-sm font-semibold text-brand-copper hover:underline"
              >
                View all service areas &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Need a Roofer in ${town.name}?`}
        subheading={`Get a free roof inspection from Southern NH's most trusted roofing contractor. We'll be at your ${town.name} home within 24 hours.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: siteConfig.name,
            url: `${siteConfig.url}/roofing/${town.slug}`,
            telephone: siteConfig.phone,
            areaServed: {
              "@type": "City",
              name: `${town.name}, NH`,
              containedInPlace: { "@type": "AdministrativeArea", name: `${town.county} County, NH` },
            },
            description: `Expert roofing contractor serving ${town.name}, ${town.county} County, NH. Roof replacement, repair, storm damage restoration, and insurance claim assistance.`,
          }),
        }}
      />
    </>
  );
}
