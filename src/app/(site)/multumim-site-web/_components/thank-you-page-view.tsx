"use client";

import { useEffect } from "react";
import { emitLeadEvent } from "@/components/Leads/events";
import { consumeWebSiteSubmission } from "@/components/Leads/web-site-confirmation";

/**
 * Semnalul principal pentru conversia campaniei de site-uri web.
 */
export default function ThankYouPageView() {
  useEffect(() => {
    if (!consumeWebSiteSubmission()) return;
    try {
      emitLeadEvent("lead-web-site", "site_web_thank_you_page_view", {
        page_path: "/multumim-site-web",
        flow: "lead-web-site",
      });
    } catch {
      /* ignore */
    }
  }, []);

  return null;
}
