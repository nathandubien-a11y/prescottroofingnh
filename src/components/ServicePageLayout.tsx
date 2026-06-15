import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/siteConfig";

type ServicePageLayoutProps = {
  serviceName: string;
  heroDescription: string;
  children: React.ReactNode;
  faqs: FAQItem[];
  schemaService?: string;
};

export function ServicePageLayout({ serviceName, heroDescription, children, faqs, schemaService }: ServicePageLayoutProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: schemaService || serviceName,
    provider: {
      "@type": "RoofingContractor",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.serviceArea.counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c} County, NH`,
    })),
    description: heroDescription,
  };

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: serviceName }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{serviceName}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{heroDescription}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">{children}</div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
            <FAQSchema items={faqs} />
          </div>
        </section>
      )}

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
