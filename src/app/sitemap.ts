import type { MetadataRoute } from "next";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";
import { blogPosts } from "@/lib/blogPosts";

export const dynamic = "force-static";

const BUILD_DATE = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const seoSlugs = new Set(["manchester-nh", "nashua-nh", "bedford-nh"]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-replacement`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/roof-repair`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/storm-damage`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ice-dam-removal`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/gutters`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roofing`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/free-inspection`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/financing`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: BUILD_DATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: BUILD_DATE, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaTowns.map((town) => ({
    url: `${base}/roofing/${town.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: seoSlugs.has(town.slug) ? 0.9 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...serviceAreaPages, ...blogPages];
}
