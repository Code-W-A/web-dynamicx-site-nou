"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import type { LeadSource } from "./types";

// Only predefined UI metadata belongs here. Never pass form values or the URL query.
type EventDetails = {
  placement?: string;
  package_name?: string;
  lead_type?: "contact_form" | "phone" | "whatsapp" | "email";
  form_name?: string;
  error_type?: "validation" | "request";
};

export function emitLeadEvent(
  source: LeadSource,
  event: string,
  details: EventDetails = {},
) {
  const data = {
    source,
    page_location: window.location.origin + window.location.pathname,
    ...details,
  };
  try {
    if (!process.env.NEXT_PUBLIC_GTM_ID && process.env.NEXT_PUBLIC_GA_ID) {
      sendGAEvent("event", event, data);
    } else {
      sendGTMEvent({ event, ...data });
    }
  } catch {
    // Analytics must never interrupt a contact request.
  }
}
