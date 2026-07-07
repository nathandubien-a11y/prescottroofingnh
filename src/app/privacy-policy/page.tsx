import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Prescott Roofing. Learn how we collect, use, and protect your information when you visit our website or request our services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Effective Date: July 7, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-brand-charcoal/80 leading-relaxed">
              Prescott Roofing (&ldquo;Prescott Roofing,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website located at{" "}
              <a href="https://prescottroofingnh.com" className="text-brand-copper hover:underline">prescottroofingnh.com</a>{" "}
              and its associated landing pages (collectively, the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use, disclose, and protect information about you when you visit our Site, contact us by phone, or request our services.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed">
              By using our Site, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our Site.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-bold text-brand-navy mb-2">a. Information You Provide Directly</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">When you contact us through our Site or by phone, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 text-brand-charcoal/80">
              <li>Your name, phone number, and email address</li>
              <li>Your property address and description of the damage or service needed</li>
              <li>Insurance carrier information and claim details you choose to share</li>
              <li>Any other information you voluntarily provide when communicating with us</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-navy mb-2">b. Information Collected Automatically</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">When you visit our Site, we and our third-party service providers automatically collect certain technical information, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-brand-charcoal/80">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version, operating system, and device type</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Search terms used to find our Site</li>
              <li>Date and time of your visit</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-navy mb-2">c. Call Tracking Information</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Our Site uses WhatConverts, a call tracking and lead management service. When you call a phone number displayed on our Site, WhatConverts may record the originating phone number, call duration, call recording (where permitted by law and disclosed), and the marketing source that led you to our Site (e.g., the search ad, keyword, or web page). This information is used solely to measure the effectiveness of our advertising campaigns and improve our response to customer inquiries.
            </p>

            <h3 className="text-lg font-bold text-brand-navy mb-2">d. Cookies and Similar Technologies</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We use cookies, pixel tags, and similar tracking technologies to operate and improve our Site, analyze traffic, and serve relevant advertising. You can control cookies through your browser settings; however, disabling cookies may affect the functionality of certain parts of our Site.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 text-brand-charcoal/80">
              <li>Respond to your inquiries and provide the roofing services you request</li>
              <li>Schedule on-site assessments and coordinate service delivery</li>
              <li>Communicate with you about your project, including status updates and follow-ups</li>
              <li>Process and document insurance claims on your behalf</li>
              <li>Measure and improve the performance of our advertising campaigns (including Google Ads)</li>
              <li>Analyze Site traffic and user behavior to improve our website and user experience</li>
              <li>Comply with applicable legal obligations</li>
              <li>Protect the rights, property, and safety of Prescott Roofing, our customers, and others</li>
            </ul>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">3. How We Share Your Information</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-charcoal/80">
              <li><strong className="text-brand-navy">Service Providers:</strong> Third-party vendors who assist us in operating our Site and delivering our services, including call tracking (WhatConverts), website analytics (Google Analytics / Umami), and advertising platforms (Google Ads). These providers are contractually obligated to use your information only as directed by us and in accordance with this policy.</li>
              <li><strong className="text-brand-navy">Insurance Companies:</strong> With your authorization, we may share damage documentation, inspection reports, scope of work, and related information with your insurance carrier or adjuster to support your claim.</li>
              <li><strong className="text-brand-navy">Legal Requirements:</strong> We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong className="text-brand-navy">Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">4. Third-Party Services and Advertising</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">Our Site uses the following third-party services that may collect information about your visit:</p>

            <h3 className="text-lg font-bold text-brand-navy mb-2">Google Ads &amp; Google Analytics</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We use Google Ads to advertise our services and Google Analytics to understand how visitors use our Site. Google may use cookies and similar technologies to serve ads based on your prior visits to our Site or other websites. You can opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-brand-copper hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>{" "}
              or by using the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-copper hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-lg font-bold text-brand-navy mb-2">WhatConverts</h3>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We use WhatConverts for call tracking and lead management. WhatConverts assigns tracking phone numbers to our Site to help us understand which advertising sources generate calls. When you call a tracking number, WhatConverts captures call data including the originating number, call duration, and marketing source. For more information, visit{" "}
              <a href="https://www.whatconverts.com/privacy-policy/" className="text-brand-copper hover:underline" target="_blank" rel="noopener noreferrer">WhatConverts&apos; Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">5. Data Retention</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We retain personal information for as long as necessary to fulfill the purposes described in this policy, including providing services, maintaining business records, complying with legal obligations, resolving disputes, and enforcing our agreements. Customer project records, including documentation provided to insurance carriers, are typically retained for a minimum of seven (7) years in accordance with standard business and legal requirements.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">6. Data Security</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your information and encourage you to exercise caution when sharing sensitive information online.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">7. Your Rights and Choices</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-brand-charcoal/80">
              <li><strong className="text-brand-navy">Access:</strong> The right to request a copy of the personal information we hold about you</li>
              <li><strong className="text-brand-navy">Correction:</strong> The right to request correction of inaccurate or incomplete information</li>
              <li><strong className="text-brand-navy">Deletion:</strong> The right to request deletion of your personal information, subject to certain legal exceptions</li>
              <li><strong className="text-brand-navy">Opt-Out of Marketing:</strong> The right to opt out of receiving marketing communications from us</li>
            </ul>
            <p className="text-brand-charcoal/80 leading-relaxed">
              To exercise any of these rights, please contact us using the information in the &ldquo;Contact Us&rdquo; section below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete that information promptly. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">9. Links to Third-Party Websites</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Our Site may contain links to third-party websites, including our social media profiles and insurance carrier portals. These third-party sites have their own privacy policies, and we are not responsible for their content or privacy practices. We encourage you to review the privacy policy of any third-party site you visit.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the &ldquo;Effective Date&rdquo; at the top of this page. Your continued use of our Site after any changes constitutes your acceptance of the updated policy. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">11. Contact Us</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white border border-brand-coppertint/20 rounded-lg p-6 mt-4">
              <p className="font-bold text-brand-navy mb-2">{siteConfig.name}</p>
              <p className="text-brand-charcoal/80">
                Phone: <a href={siteConfig.phoneHref} className="text-brand-copper hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="text-brand-charcoal/80">
                Email: <a href={`mailto:${siteConfig.email}`} className="text-brand-copper hover:underline">{siteConfig.email}</a>
              </p>
              <p className="text-brand-charcoal/80">
                Web: <a href={siteConfig.url} className="text-brand-copper hover:underline">{siteConfig.url}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
