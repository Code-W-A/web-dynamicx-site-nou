"use client";

import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

type LeadType = "contact_form" | "phone" | "whatsapp" | "email" | "cta";

export function trackLead(eventType: LeadType, extra?: Record<string, any>) {
  try {
    sendGTMEvent({
      event: "generate_lead",
      lead_type: eventType,
      page_location: typeof window !== "undefined" ? window.location.href : undefined,
      ...extra,
    });
  } catch {}
}

export function trackCTA(label: string) {
  try {
    sendGTMEvent({ event: "cta_click", label });
  } catch {}
}

// Optional: direct GA4 events (use only if you want to bypass GTM for these)
export function sendGALead(eventType: LeadType, extra?: Record<string, any>) {
  try {
    sendGAEvent("event", "generate_lead", {
      lead_type: eventType,
      page_location: typeof window !== "undefined" ? window.location.href : undefined,
      ...extra,
    });
  } catch {}
}

export function sendGACTA(label: string) {
  try {
    sendGAEvent("event", "cta_click", { label });
  } catch {}
}

export default function GTMLeadEvents() {
  return null;
}


