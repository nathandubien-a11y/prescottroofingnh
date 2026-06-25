import type { MetadataRoute } from "next";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-replacement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/roof-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/storm-damage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ice-dam-removal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/gutters`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roofing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/free-inspection`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaTowns.map((town) => ({
    url: `${base}/roofing/${town.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...serviceAreaPages];
}
