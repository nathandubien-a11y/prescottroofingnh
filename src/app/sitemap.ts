import type { MetadataRoute } from "next";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const seoSlugs = new Set(["manchester-nh", "nashua-nh", "bedford-nh"]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-replacement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/roof-repair`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/storm-damage`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ice-dam-removal`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/gutters`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roofing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/free-inspection`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/financing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaTowns.map((town) => ({
    url: `${base}/roofing/${town.slug}`,
    changeFrequency: "monthly" as const,
    priority: seoSlugs.has(town.slug) ? 0.9 : 0.7,
  }));

  return [...staticPages, ...serviceAreaPages];
}
