"use client";

import { useEffect } from "react";
import { trackCustomLeadEvent } from "@/components/Analytics/GTMLeadEvents";

/**
 * Semnal separat pentru GTM / GA4 / Ads (ex. conversie pe pagina de mulțumire).
 */
export default function ThankYouPageView() {
  useEffect(() => {
    try {
      trackCustomLeadEvent("mobile_apps_thank_you_page_view", {
        page_path: "/multumim-aplicatie-mobile",
        flow: "lead-mobile-apps",
      });
    } catch {
      /* ignore */
    }
  }, []);

  return null;
}
