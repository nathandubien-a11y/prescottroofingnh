import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Roofing Tips & Guides | Blog",
  description:
    "Roofing tips, storm damage guides, and insurance claim advice for New Hampshire homeowners from the experts at Archer Roofing.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Roofing Tips & Guides
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Expert advice on roof maintenance, storm damage, insurance claims, and ice dam prevention from the Archer Roofing team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg border border-brand-coppertint/20 p-6 md:p-8 hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-center gap-3 text-sm text-brand-charcoal/60 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-navy group-hover:text-brand-copper transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-brand-charcoal/70 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-sm font-semibold text-brand-copper group-hover:underline">
                    Read more &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
