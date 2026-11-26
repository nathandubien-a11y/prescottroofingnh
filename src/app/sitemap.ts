import type { MetadataRoute } from "next";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";
import { blogPosts } from "@/lib/blogPosts";

export const dynamic = "force-static";

// Date the site's core pages (home, services, town pages, etc.) last had a real content change.
// Bump this when those pages are edited. Do not use the build date: the site rebuilds every time an
// article is published, and a lastmod that changes on every build teaches Google to ignore it.
const PAGES_UPDATED = "2026-11-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: PAGES_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-replacement`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/roof-repair`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/storm-damage`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ice-dam-removal`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/gutters`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roofing`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, lastModified: PAGES_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/free-inspection`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/financing`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: blogPosts[0]?.updated || blogPosts[0]?.date || PAGES_UPDATED, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: PAGES_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: PAGES_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/sms-terms`, lastModified: PAGES_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaTowns
    .filter((town) => town.tier === "full")
    .map((town) => ({
      url: `${base}/roofing/${town.slug}`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...serviceAreaPages, ...blogPages];
}
