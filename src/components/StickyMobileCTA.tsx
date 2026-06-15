"use client";

import Link from "next/link";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/siteConfig";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-navy border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <Link
          href="/free-inspection"
          className="flex items-center justify-center gap-2 py-3.5 bg-brand-copper text-white font-bold text-sm"
        >
          Free Inspection
        </Link>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm"
        >
          <PhoneIcon className="text-brand-copper" />
          Call Now
        </a>
      </div>
    </div>
  );
}
