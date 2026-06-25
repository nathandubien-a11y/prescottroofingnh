"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/icons/Logo";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/roofing", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top bar — phone + hours (hidden on mobile, shown in sticky CTA instead) */}
      <div className="hidden md:block bg-brand-navy border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between text-sm text-white/80">
          <span>Serving Southern NH &amp; Northern MA — {siteConfig.serviceArea.counties.map(c => c.name).join(", ")} Counties</span>
          <div className="flex items-center gap-4">
            <span>{siteConfig.hours}</span>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-copper transition-colors"
            >
              <PhoneIcon className="text-brand-copper" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white mx-auto px-4 flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="Prescott Roofing home">
            <Logo height={36} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-navy hover:text-brand-copper transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/free-inspection"
              className="ml-2 inline-flex items-center px-5 py-2.5 bg-brand-copper text-white text-sm font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Free Inspection
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-copper text-white"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <PhoneIcon />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 text-brand-navy"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-navy/10 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-brand-navy hover:text-brand-copper hover:bg-brand-offwhite rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/free-inspection"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-5 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
            >
              Get My Free Inspection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
