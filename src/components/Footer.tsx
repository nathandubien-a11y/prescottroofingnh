import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig, serviceAreaTowns } from "@/lib/siteConfig";

const serviceLinks = [
  { href: "/services/roof-replacement", label: "Roof Replacement" },
  { href: "/services/roof-repair", label: "Roof Repair" },
  { href: "/services/storm-damage", label: "Storm & Wind Damage" },
  { href: "/services/ice-dam-removal", label: "Ice Dam Removal" },
  { href: "/services/gutters", label: "Gutters" },
  { href: "/insurance-claims", label: "Insurance Claims" },
];

const companyLinks = [
  { href: "/about", label: "About Archer" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/free-inspection", label: "Free Inspection" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Logo height={32} variant="white" className="mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              {siteConfig.tagline}. Serving {siteConfig.serviceArea.description} with precision roofing, storm damage repair, and insurance claim expertise.
            </p>
            <div className="flex items-center gap-2 text-white">
              <PhoneIcon className="text-brand-copper" />
              <a href={siteConfig.phoneHref} className="font-semibold hover:text-brand-copper transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="block mt-2 text-sm hover:text-brand-copper transition-colors">
                {siteConfig.email}
              </a>
            )}
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-brand-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-brand-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {serviceAreaTowns.slice(0, 10).map((town) => (
                <li key={town.slug}>
                  <Link href={`/roofing/${town.slug}`} className="text-sm hover:text-brand-copper transition-colors">
                    {town.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/roofing" className="text-sm text-brand-copper hover:text-brand-coppertint transition-colors">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            {siteConfig.license} &bull; {siteConfig.insurance}
          </p>
        </div>
      </div>
    </footer>
  );
}
