"use client";

import { useEffect } from "react";
import { trackCustomLeadEvent } from "@/components/Analytics/GTMLeadEvents";

/**
 * Semnalul principal pentru conversia campaniei de magazine online.
 */
export default function ThankYouPageView() {
  useEffect(() => {
    try {
      trackCustomLeadEvent("online_store_thank_you_page_view", {
        page_path: "/multumim-magazin-online",
        flow: "lead-magazin-online",
      });
    } catch {
      /* ignore */
    }
  }, []);

  return null;
}
