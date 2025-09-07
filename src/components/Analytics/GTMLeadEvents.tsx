"use client";

type LeadType = "contact_form" | "phone" | "whatsapp" | "email" | "cta";

export function trackLead(eventType: LeadType, extra?: Record<string, any>) {
  try {
    // Prefer native dataLayer push; compatible with GTM and gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "generate_lead",
      lead_type: eventType,
      page_location: typeof window !== "undefined" ? window.location.href : undefined,
      ...extra,
    });
  } catch {}
}

export function trackCTA(label: string) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "cta_click", label });
  } catch {}
}

export default function GTMLeadEvents() {
  return null;
}


