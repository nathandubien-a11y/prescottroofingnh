import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { LocationPage } from "@/components/LocationPage";
import { manchesterNH } from "@/data/locations/manchester-nh";

const data = manchesterNH;

export const metadata: Metadata = {
  title: `Roofing Contractor ${data.city} ${data.state}`,
  description: data.meta.description,
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    url: `${siteConfig.url}/${data.slug}`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: data.meta.title,
    description: data.meta.description,
  },
};

export default function ManchesterPage() {
  return <LocationPage data={data} />;
}
