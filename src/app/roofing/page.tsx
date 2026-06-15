import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { serviceAreaTowns } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Roofing Contractor Serving Southern NH",
  description:
    "Archer Roofing serves Hillsborough, Rockingham, and Merrimack counties in Southern New Hampshire. Find expert roofing services in your town.",
  alternates: { canonical: "/roofing" },
};

const counties = [
  {
    name: "Hillsborough County",
    towns: serviceAreaTowns.filter((t) => t.county === "Hillsborough"),
  },
  {
    name: "Rockingham County",
    towns: serviceAreaTowns.filter((t) => t.county === "Rockingham"),
  },
  {
    name: "Merrimack County",
    towns: serviceAreaTowns.filter((t) => t.county === "Merrimack"),
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Roofing Services Across Southern New Hampshire
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Archer Roofing proudly serves homeowners throughout Hillsborough, Rockingham, and Merrimack counties. Find your town below to learn more about our services in your area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {counties.map((county) => (
              <div key={county.name}>
                <h2 className="text-xl font-extrabold text-brand-navy mb-4 pb-3 border-b-2 border-brand-copper">
                  {county.name}
                </h2>
                <ul className="space-y-2">
                  {county.towns.map((town) => (
                    <li key={town.slug}>
                      <Link
                        href={`/roofing/${town.slug}`}
                        className="flex items-center gap-2 text-brand-charcoal hover:text-brand-copper transition-colors group"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-copper shrink-0">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span className="group-hover:underline">Roofing in {town.name}, NH</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-brand-coppertint/20 rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Don&apos;t see your town?</h3>
            <p className="text-brand-charcoal/70 mb-4">
              We serve all of Southern NH. If your town isn&apos;t listed, we likely cover it — give us a call or request a free inspection.
            </p>
            <Link href="/free-inspection" className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors">
              Request Free Inspection
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
