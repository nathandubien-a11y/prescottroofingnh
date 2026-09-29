import type { Metadata } from "next";
import Link from "next/link";
import { RoofWatermark } from "@/components/RoofWatermark";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="relative bg-brand-navy py-20 md:py-28">
      <RoofWatermark />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <p className="text-7xl font-extrabold text-brand-copper mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/free-inspection"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
          >
            Get a Free Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}
