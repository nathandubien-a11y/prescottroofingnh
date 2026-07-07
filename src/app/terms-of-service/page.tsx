import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoofWatermark } from "@/components/RoofWatermark";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Prescott Roofing. Review the terms and conditions governing your use of our website and roofing services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-brand-navy py-16 md:py-20">
        <RoofWatermark />
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Effective Date: July 7, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-offwhite">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none space-y-8">

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">1. Agreement to Terms</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              By accessing or using the website at{" "}
              <a href="https://prescottroofingnh.com" className="text-brand-copper hover:underline">prescottroofingnh.com</a>{" "}
              (the &ldquo;Site&rdquo;) or by contacting Prescott Roofing for services, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our Site or services.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">2. Description of Services</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Prescott Roofing provides roof replacement, roof repair, storm and wind damage restoration, ice dam removal, gutter installation and repair, and related roofing services in New Hampshire and Massachusetts. Our website provides information about these services and allows potential customers to contact us.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">3. Use of the Website</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
            <ul className="list-disc pl-6 space-y-1 text-brand-charcoal/80">
              <li>Use the Site in any way that violates applicable local, state, national, or international laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">4. Service Estimates and Quotes</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Any estimates, quotes, or cost information provided through our website, virtual inspections, or phone consultations are preliminary and subject to change upon on-site assessment. Final pricing is determined after a thorough evaluation of the roof and any damage by our certified technicians. Prescott Roofing is not bound by preliminary estimates.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">5. Insurance Claims</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Prescott Roofing works with all major insurance carriers and will assist you in documenting damage for your insurance claim. However, we do not guarantee insurance coverage, claim approval, or specific reimbursement amounts. Insurance coverage decisions are made solely by your insurance carrier. You are responsible for understanding your policy terms and coverage.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">6. Emergency Response</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Our emergency storm damage response times represent our commitment to rapid service. Actual response times may vary based on weather conditions, traffic, technician availability, and geographic location. Response times to areas at the edges of our service territory may be longer.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">7. Intellectual Property</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              All content on this Site, including text, graphics, logos, images, and software, is the property of Prescott Roofing or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              This Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. Prescott Roofing does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">9. Limitation of Liability</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              To the fullest extent permitted by law, Prescott Roofing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this Site or our services. Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us for the specific service giving rise to the claim.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">10. Third-Party Links</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              Our Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">11. Governing Law</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of New Hampshire, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Hillsborough County, New Hampshire.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">12. Changes to Terms</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-extrabold text-brand-navy mt-10 mb-4">13. Contact Information</h2>
            <p className="text-brand-charcoal/80 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
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
