import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const organization: Record<string, unknown> = {
    "@type": ["RoofingContractor", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: `${siteConfig.name} provides expert roof replacement, repair, storm damage restoration, and insurance claim assistance across Southern New Hampshire and Northern Massachusetts. ${siteConfig.tagline}.`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      ...(siteConfig.streetAddress ? { streetAddress: siteConfig.streetAddress } : {}),
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: "US",
    },
    areaServed: [
      ...siteConfig.serviceArea.counties.map((county) => ({
        "@type": "AdministrativeArea",
        name: `${county.name} County, ${county.state}`,
      })),
      ...serviceAreaTowns.map((town) => ({
        "@type": "City",
        name: `${town.name}, ${town.state}`,
      })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: `24/7 emergency storm response; office hours ${siteConfig.officeHours}`,
    },
    priceRange: "$$",
    sameAs: [...siteConfig.sameAs, ...Object.values(siteConfig.social)].filter(Boolean),
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

  if (siteConfig.foundingDate) {
    organization.foundingDate = siteConfig.foundingDate;
  }
  if (siteConfig.founder) {
    organization.founder = { "@type": "Person", name: siteConfig.founder };
  }
  if (siteConfig.stats.googleReviewCount > 0) {
    organization.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.googleRating,
      reviewCount: siteConfig.stats.googleReviewCount,
      bestRating: 5,
    };
  }

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.tagline,
    inLanguage: "en-US",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [website, organization],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
