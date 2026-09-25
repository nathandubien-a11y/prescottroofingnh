import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
    default: "Prescott Roofing | Roofing Contractor in Southern NH",
    template: "%s | Prescott Roofing",
  },
  description:
    "Prescott Roofing provides expert roof replacement, repair, storm damage restoration, and insurance claim assistance across Southern New Hampshire and Northern Massachusetts. Precision from every angle. Call 603-451-2224.",
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Prescott Roofing — Precision From Every Angle" }],
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
        {gtmId && (
          <>
            <Script
              id="gtm-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
              }}
            />
            <Script
              id="gtm-events"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `document.addEventListener('click',function(e){
var a=e.target.closest('a[href^="tel:"]');
if(a)window.dataLayer.push({event:'tel_click',tel_number:a.href});
});
document.addEventListener('submit',function(e){
if(e.target.tagName==='FORM')window.dataLayer.push({event:'form_submit',form_action:e.target.action||'inline'});
});`,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
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
