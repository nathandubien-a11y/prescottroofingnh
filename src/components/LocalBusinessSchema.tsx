import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: siteConfig.name,
    description: `${siteConfig.name} provides expert roof replacement, repair, storm damage restoration, and insurance claim assistance across Southern New Hampshire. ${siteConfig.tagline}.`,
    url: siteConfig.url,
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
      : {
          address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.city,
            addressRegion: siteConfig.state,
            postalCode: siteConfig.zip,
            addressCountry: "US",
          },
        }),
    areaServed: [
      ...siteConfig.serviceArea.counties.map((county) => ({
        "@type": "AdministrativeArea",
        name: `${county} County, NH`,
      })),
      ...serviceAreaTowns.map((town) => ({
        "@type": "City",
        name: `${town.name}, NH`,
      })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    image: `${siteConfig.url}/og-image.png`,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm & Wind Damage Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ice Dam Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutters" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insurance Claim Assistance" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
