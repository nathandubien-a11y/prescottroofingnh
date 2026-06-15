import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function CTASection({
  heading = "Ready to Protect Your Home?",
  subheading = "Get a free, no-obligation roof inspection from the team that treats every project with precision.",
  variant = "navy",
}: {
  heading?: string;
  subheading?: string;
  variant?: "navy" | "copper";
}) {
  const bg = variant === "navy" ? "bg-brand-navy" : "bg-brand-copper";

  return (
    <section className={`${bg} py-16 md:py-20`}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{heading}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/free-inspection"
            className={`inline-flex items-center px-8 py-4 text-lg font-bold rounded-md transition-colors ${
              variant === "navy"
                ? "bg-brand-copper text-white hover:bg-brand-copper/90"
                : "bg-white text-brand-copper hover:bg-brand-offwhite"
            }`}
          >
            Get My Free Inspection
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
          >
            <PhoneIcon />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
