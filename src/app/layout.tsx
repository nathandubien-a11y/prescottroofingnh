import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading-family",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Archer Roofing | Roofing Contractor in Southern NH",
    template: "%s | Archer Roofing",
  },
  description:
    "Archer Roofing provides expert roof replacement, repair, storm damage restoration, and insurance claim assistance across Southern New Hampshire. Precision from every angle. Call 603-931-4655.",
  keywords: [
    "roofing contractor NH",
    "roof replacement Southern NH",
    "storm damage roof repair NH",
    "roof insurance claim New Hampshire",
    "ice dam removal NH",
    "roofing Manchester NH",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Archer Roofing — Precision From Every Angle" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        {/* Bottom padding on mobile so sticky CTA doesn't cover content */}
        <div className="h-16 md:hidden" aria-hidden="true" />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
