"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the site-wide header, footer, and sticky CTA on every page except
 * paid-ad landing pages under /lp, which use their own minimal chrome so
 * visitors aren't pulled away from the quote form.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp")) return null;
  return <>{children}</>;
}
