import Image from "next/image";
import Link from "next/link";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { RoofWatermark } from "@/components/RoofWatermark";

const services = [
  {
    title: "Roof Replacement",
    description: "Full asphalt shingle roof replacement with manufacturer-backed warranties. The #1 service for NH homeowners.",
    href: "/services/roof-replacement",
    icon: <RoofIcon />,
  },
  {
    title: "Roof Repair",
    description: "Leak detection, flashing repair, chimney sealing, and missing shingle replacement — done right the first time.",
    href: "/services/roof-repair",
    icon: <WrenchIcon />,
  },
  {
    title: "Storm & Wind Damage",
    description: "Emergency storm damage repair and full restoration. We respond fast and document everything for your claim.",
    href: "/services/storm-damage",
    icon: <StormIcon />,
  },
  {
    title: "Ice Dam Removal",
    description: "Safe ice dam removal and prevention for NH winters. Protect your roof from freeze-thaw damage cycles.",
    href: "/services/ice-dam-removal",
    icon: <SnowflakeIcon />,
  },
  {
    title: "Gutters",
    description: "Gutter installation, repair, and guard systems to protect your home's foundation and siding.",
    href: "/services/gutters",
    icon: <GutterIcon />,
  },
];

// [todo] — replace with real testimonials
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    town: "Manchester",
    rating: 5,
    text: "Prescott Roofing made our insurance claim process completely painless. They documented every detail and handled everything with our adjuster. New roof looks incredible.",
  },
  {
    name: "Mike & Lisa P.",
    town: "Bedford",
    rating: 5,
    text: "After the big storm last winter, these guys were at our house the next morning. Professional, precise, and honest about what needed repair vs. replacement. Highly recommend.",
  },
  {
    name: "Tom R.",
    town: "Nashua",
    rating: 5,
    text: "We got three quotes and Prescott was the only one who took the time to explain our options clearly. The crew was on time, clean, and the roof is flawless. Family-owned and it shows.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-copper/30 to-transparent" />
          <div
            className="absolute bottom-0 left-0 w-full h-64"
            style={{ background: "linear-gradient(170deg, transparent 40%, rgba(196,90,40,0.15) 100%)" }}
          />
        </div>

        <RoofWatermark />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-brand-copper font-semibold text-sm uppercase tracking-widest mb-4">
              Southern New Hampshire&apos;s Trusted Roofing Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-brand-offwhite">Your Roof.</span>{" "}
              <span className="text-brand-copper">Done Right.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Expert roof replacement, repair, and storm damage restoration across Hillsborough, Rockingham, and Merrimack counties. We combine insurance-claim expertise with the precision craftsmanship your home deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-inspection"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper text-white text-lg font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
              >
                Get My Free Inspection
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-md hover:border-white/60 transition-colors"
              >
                <PhoneIcon />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 0V60H0Z" fill="var(--color-brand-offwhite)" />
          </svg>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Roofing Services Built for New Hampshire
            </h2>
            <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
              From full replacements to emergency storm repairs, we deliver the precision and reliability your home needs — backed by real insurance-claim expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.href} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance / Storm Damage Differentiator */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-copper font-semibold text-sm uppercase tracking-widest mb-3">
                What Sets Us Apart
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">
                Insurance Expertise & Affordable Options for Every Homeowner
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4">
                Whether you&apos;re filing an insurance claim or paying out of pocket, we&apos;ve got you covered. Our team comes from the insurance-restoration world — with hands-on Xactimate estimating, adjuster negotiations, and the documentation that actually gets claims approved.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                For retail customers, we offer competitive pricing and flexible financing options to make a new roof affordable without cutting corners. No matter how you&apos;re paying, you get the same precision craftsmanship and attention to detail on every project.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Insurance claim expertise — Xactimate estimates & adjuster coordination",
                  "Competitive pricing for retail customers",
                  "Flexible financing available — affordable monthly payments",
                  "Same quality craftsmanship on every project, every time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <circle cx="12" cy="12" r="10" fill="#C45A28" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-brand-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/free-inspection"
                className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
              >
                Get My Free Inspection &rarr;
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/roof-inspection.jpg"
                alt="Roofing contractor inspecting a residential roof"
                width={800}
                height={1200}
                className="aspect-[4/3] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -left-4 bg-white rounded-lg shadow-xl p-4 border border-brand-coppertint/20">
                <p className="text-2xl font-extrabold text-brand-copper">98%</p>
                <p className="text-xs text-brand-charcoal/70">Claims approved<br />on first submission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prescott */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Why Prescott Roofing?
          </h2>
          <p className="text-lg text-brand-charcoal/70 max-w-3xl mx-auto mb-12">
            We&apos;re a family-owned roofing company that believes in doing the job right — no shortcuts, no excuses. We put our name behind every roof we touch, and that means quality materials, honest assessments, and craftsmanship you can count on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Precision", desc: "Exact measurements, straight lines, and attention to detail that separates good roofing from great roofing.", icon: "precision" },
              { title: "Family-Owned", desc: "We put our name — and our family's name — behind every project. That's accountability you can trust.", icon: "family" },
              { title: "Established", desc: "Years of experience in the restoration industry, with proven processes and a track record you can trust.", icon: "established" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-navy flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C45A28" strokeWidth="2" strokeLinecap="round">
                    {item.icon === "precision" && <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4m-3.93 7.07l-2.83-2.83M6.76 6.76L3.93 3.93" />}
                    {item.icon === "family" && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>}
                    {item.icon === "established" && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-brand-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-brand-charcoal/70">
              Real reviews from homeowners across Southern New Hampshire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-brand-copper font-semibold hover:underline">
              Read all reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Proudly Serving Southern NH &amp; Northern MA
            </h2>
            <p className="text-lg text-brand-charcoal/70">
              From Manchester to Nashua, Lowell to Haverhill — we serve homeowners across Southern New Hampshire and Northern Massachusetts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreaTowns.map((town) => (
              <Link
                key={town.slug}
                href={`/roofing/${town.slug}`}
                className="px-4 py-2 bg-white border border-brand-coppertint/30 rounded-full text-sm font-medium text-brand-navy hover:border-brand-copper hover:text-brand-copper transition-colors"
              >
                {town.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function RoofIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
    </svg>
  );
}

function StormIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
      <polyline points="13 11 9 17 15 17 11 23" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );
}

function GutterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6m0 4v10" /><path d="M4 8h16" /><path d="M6 8v4c0 2 2 4 6 4s6-2 6-4V8" />
    </svg>
  );
}

