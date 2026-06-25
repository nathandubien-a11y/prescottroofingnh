import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Roofing Services in Southern NH",
  description:
    "Prescott Roofing offers roof replacement, repair, storm damage restoration, ice dam removal, and gutters across Southern New Hampshire and Northern Massachusetts.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Roof Replacement",
    description: "Complete asphalt shingle roof replacement with top-tier materials and manufacturer-backed warranties. Our most popular service for NH homeowners looking to upgrade or replace aging roofs.",
    href: "/services/roof-replacement",
    icon: <RoofIcon />,
  },
  {
    title: "Roof Repair",
    description: "Expert leak detection, flashing repair, chimney sealing, and missing shingle replacement. We diagnose the real problem and fix it right — no band-aid solutions.",
    href: "/services/roof-repair",
    icon: <WrenchIcon />,
  },
  {
    title: "Storm & Wind Damage Repair",
    description: "Rapid-response storm damage assessment and repair. We document damage for insurance claims, coordinate with adjusters, and restore your roof to pre-storm condition.",
    href: "/services/storm-damage",
    icon: <StormIcon />,
  },
  {
    title: "Ice Dam Removal & Winter Roof Issues",
    description: "Safe, effective ice dam removal and prevention solutions designed specifically for New Hampshire's harsh winters. Stop leaks and protect your home from freeze-thaw damage.",
    href: "/services/ice-dam-removal",
    icon: <SnowflakeIcon />,
  },
  {
    title: "Gutters",
    description: "Seamless gutter installation, repair, and gutter guard systems. Properly functioning gutters protect your roof, siding, and foundation from water damage.",
    href: "/services/gutters",
    icon: <GutterIcon />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Roofing Services
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From full roof replacements to emergency storm repairs, Prescott Roofing delivers precision craftsmanship backed by real insurance-claim expertise across Southern New Hampshire.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.href} {...svc} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function RoofIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>;
}
function WrenchIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" /></svg>;
}
function StormIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" /><polyline points="13 11 9 17 15 17 11 23" /></svg>;
}
function SnowflakeIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" /></svg>;
}
function GutterIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 4v10" /><path d="M4 8h16" /><path d="M6 8v4c0 2 2 4 6 4s6-2 6-4V8" /></svg>;
}
