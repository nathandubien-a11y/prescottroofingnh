export interface LocationSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  showMidCta?: boolean;
}

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  county: string;
  meta: {
    title: string;
    description: string;
    heroImageAlt: string;
  };
  h1: string;
  heroSubhead: string;
  intro: string;
  sections: LocationSection[];
  whyChoose: {
    heading: string;
    items: { bold: string; text: string }[];
  };
  neighborhoods: {
    heading: string;
    areas: string[];
    nearbyTowns: { name: string; href: string }[];
  };
  faqs: { question: string; answer: string }[];
  closingCta: {
    heading: string;
    subheading: string;
  };
}
