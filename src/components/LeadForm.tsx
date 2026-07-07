"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";

const serviceOptions = [
  "Roof Replacement",
  "Roof Repair",
  "Storm / Wind Damage",
  "Ice Dam Removal",
  "Gutters",
  "Insurance Claim Help",
  "Free Inspection",
  "Other",
];

export function LeadForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `New Lead from ${data.name} — ${data.service || "General Inquiry"}`,
          }),
        }
      );
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`bg-white rounded-lg p-8 text-center ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">Thank You!</h3>
        <p className="text-brand-charcoal/70">
          We&apos;ve received your request and will contact you within 24 hours to schedule your free inspection.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg p-6 md:p-8 shadow-lg ${className}`}>
      <h3 className="text-xl font-bold text-brand-navy mb-1">Get Your Free Inspection</h3>
      <p className="text-sm text-brand-charcoal/60 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">
            Full Name <span className="text-brand-copper">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">
            Phone <span className="text-brand-copper">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal"
            placeholder="(603) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="town" className="block text-sm font-medium text-brand-charcoal mb-1">
            Town / Address <span className="text-brand-copper">*</span>
          </label>
          <input
            type="text"
            id="town"
            name="town"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal"
            placeholder="Manchester, NH"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-1">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal bg-white"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-copper/50 focus:border-brand-copper text-brand-charcoal resize-y"
            placeholder="Tell us about your roofing needs..."
          />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="insurance_claim"
              value="yes"
              className="mt-0.5 w-5 h-5 rounded border-gray-300 text-brand-copper focus:ring-brand-copper/50"
            />
            <span className="text-sm text-brand-charcoal">
              This is related to an <strong>insurance or storm-damage claim</strong> (we&apos;ll prioritize your request)
            </span>
          </label>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full py-3.5 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Inspection"}
      </button>

      <p className="mt-3 text-xs text-brand-charcoal/50 text-center">
        No spam, ever. We&apos;ll only use your info to schedule your inspection.
      </p>
    </form>
  );
}
