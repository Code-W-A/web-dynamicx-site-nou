"use client";

import { useEffect } from "react";
import { trackCustomLeadEvent } from "@/components/Analytics/GTMLeadEvents";

/**
 * Semnalul principal pentru conversia campaniei de site-uri web.
 */
export default function ThankYouPageView() {
  useEffect(() => {
    try {
      trackCustomLeadEvent("site_web_thank_you_page_view", {
        page_path: "/multumim-site-web",
        flow: "lead-web-site",
      });
    } catch {
      /* ignore */
    }
  }, []);

  return null;
}
