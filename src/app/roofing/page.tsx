import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";
import { serviceAreaTowns } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Roofing Contractor Serving Southern NH & Northern MA",
  description:
    "Prescott Roofing serves Southern New Hampshire and Northern Massachusetts. Find expert roofing services in your town.",
  alternates: { canonical: "/roofing" },
};

const nhCounties = [
  {
    name: "Hillsborough County, NH",
    towns: serviceAreaTowns.filter((t) => t.county === "Hillsborough" && t.state === "NH"),
  },
  {
    name: "Rockingham County, NH",
    towns: serviceAreaTowns.filter((t) => t.county === "Rockingham"),
  },
  {
    name: "Merrimack County, NH",
    towns: serviceAreaTowns.filter((t) => t.county === "Merrimack"),
  },
];

const maCounties = [
  {
    name: "Middlesex County, MA",
    towns: serviceAreaTowns.filter((t) => t.county === "Middlesex"),
  },
  {
    name: "Essex County, MA",
    towns: serviceAreaTowns.filter((t) => t.county === "Essex"),
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Roofing Services Across Southern NH &amp; Northern MA
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Prescott Roofing proudly serves homeowners throughout Southern New Hampshire and Northern Massachusetts. Find your town below to learn more about our services in your area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-extrabold text-brand-navy mb-6">Southern New Hampshire</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {nhCounties.map((county) => (
              <div key={county.name}>
                <h3 className="text-xl font-extrabold text-brand-navy mb-4 pb-3 border-b-2 border-brand-copper">
                  {county.name}
                </h3>
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

          <h2 className="text-2xl font-extrabold text-brand-navy mb-6 mt-14">Northern Massachusetts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {maCounties.map((county) => (
              <div key={county.name}>
                <h3 className="text-xl font-extrabold text-brand-navy mb-4 pb-3 border-b-2 border-brand-copper">
                  {county.name}
                </h3>
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
                        <span className="group-hover:underline">Roofing in {town.name}, MA</span>
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
              We serve all of Southern NH and Northern MA. If your town isn&apos;t listed, we likely cover it — give us a call or request a free inspection.
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
