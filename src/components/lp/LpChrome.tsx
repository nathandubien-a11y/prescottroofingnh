import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

/** Minimal header for ad landing pages: logo and click-to-call only, no navigation. */
export function LpHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-coppertint/30">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-3">
        <Logo height={34} className="h-[34px] w-auto" />
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-3 py-2 sm:px-4 text-sm sm:text-base font-bold text-white hover:bg-brand-navy/90 transition-colors"
        >
          <PhoneIcon className="text-brand-copper" />
          <span className="hidden sm:inline">Call</span> {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}

/** Mobile-only bottom bar keeping both conversion actions in reach while scrolling. */
export function LpStickyBar() {
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 bg-brand-navy border-t border-white/10 safe-area-bottom">
        <a href={siteConfig.phoneHref} className="flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm">
          <PhoneIcon className="text-brand-copper" />
          Call Now
        </a>
        <a href="#quote" className="flex items-center justify-center py-3.5 bg-brand-copper text-white font-bold text-sm">
          Free Quote
        </a>
      </div>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  );
}

/** Slim footer with the legal links ad platforms and SMS registration expect. */
export function LpFooter() {
  return (
    <footer className="bg-brand-navy text-white/60 text-xs">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}, operated by Dubien Enterprises LLC. {siteConfig.license}.
        </p>
        <nav className="flex gap-4" aria-label="Legal">
          <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
          <Link href="/sms-terms" className="hover:text-white">SMS Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
