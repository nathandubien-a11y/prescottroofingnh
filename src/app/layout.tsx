import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SiteChrome } from "@/components/SiteChrome";
import { siteConfig } from "@/lib/siteConfig";
import { GOOGLE_ADS_ID } from "@/lib/googleAds";
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
        {/* Google tag: Google Ads tracking and website Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}',{allow_enhanced_conversions:true});gtag('config','G-K2VQ5LLG3N');`,
          }}
        />
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1149768807391687');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1149768807391687&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteChrome>
          <Footer />
          <StickyMobileCTA />
          {/* Bottom padding on mobile so sticky CTA doesn't cover content */}
          <div className="h-16 md:hidden" aria-hidden="true" />
        </SiteChrome>
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
