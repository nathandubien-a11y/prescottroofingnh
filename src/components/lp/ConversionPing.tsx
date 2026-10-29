"use client";

import { useEffect } from "react";
import { LEAD_CONVERSION_SEND_TO, takeLeadUserData } from "@/lib/googleAds";

type Gtag = (...args: unknown[]) => void;

/**
 * Reports a Google Ads lead conversion when the thank-you page loads. If the Google tag hasn't
 * finished loading yet, the event is queued on dataLayer and sent once it does. Google counts at
 * most one conversion per ad click, so a page refresh won't double count.
 */
export function ConversionPing() {
  useEffect(() => {
    const w = window as unknown as { gtag?: Gtag; dataLayer?: unknown[] };
    const gtag: Gtag =
      w.gtag ??
      function () {
        // gtag.js expects the raw arguments object, not an array.
        // eslint-disable-next-line prefer-rest-params
        (w.dataLayer = w.dataLayer || []).push(arguments);
      };
    // Enhanced conversions: hashed email/phone from the form help Google match the lead to its ad click.
    const userData = takeLeadUserData();
    if (userData) gtag("set", "user_data", userData);
    gtag("event", "conversion", { send_to: LEAD_CONVERSION_SEND_TO });
  }, []);
  return null;
}
