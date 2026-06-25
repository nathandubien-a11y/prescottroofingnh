import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-3xl px-4">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>&bull;</span>
            <span>{post.readTime}</span>
            <span>&bull;</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">{p.replace("## ", "")}</h2>;
              }
              if (p.startsWith("**") && p.endsWith("**")) {
                return <p key={i} className="font-bold text-brand-navy mb-4">{p.replace(/\*\*/g, "")}</p>;
              }
              if (p.startsWith("- ") || p.startsWith("1. ")) {
                const items = p.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 mb-6 ml-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-brand-charcoal/80 leading-relaxed">
                        {item.replace(/^[-\d.]\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                      </li>
                    ))}
                  </ul>
                );
              }
              const rendered = p
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>');
              return <p key={i} className="text-brand-charcoal/80 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: rendered }} />;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-brand-coppertint/30">
            <Link href="/blog" className="text-brand-copper font-semibold hover:underline">
              &larr; Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: siteConfig.name },
            publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          }),
        }}
      />
    </>
  );
}
