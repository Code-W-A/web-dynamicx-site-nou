"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import axios from "axios";
import validateEmail from "@/app/libs/validate";
import { trackCTA, trackLead } from "@/components/Analytics/GTMLeadEvents";

type Variant = "phone" | "email";

const STORAGE_KEYS = {
  viewedAt: "mini_lead_form_viewed_at",
  dismissedAt: "mini_lead_form_dismissed_at",
  submittedAt: "mini_lead_form_submitted_at",
  variant: "mini_lead_form_variant",
} as const;

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function isWithin24h(timestampMs?: number | null) {
  if (!timestampMs || Number.isNaN(timestampMs)) return false;
  return Date.now() - timestampMs < ONE_DAY_MS;
}

function readNumber(key: string): number | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const num = Number(raw);
    return Number.isFinite(num) ? num : null;
  } catch {
    return null;
  }
}

function writeNumber(key: string, value: number) {
  try {
    localStorage.setItem(key, String(value));
  } catch {}
}

function readVariant(): Variant | null {
  try {
    const v = localStorage.getItem(STORAGE_KEYS.variant);
    return v === "phone" || v === "email" ? v : null;
  } catch {
    return null;
  }
}

function writeVariant(v: Variant) {
  try {
    localStorage.setItem(STORAGE_KEYS.variant, v);
  } catch {}
}

function validatePhone(input: string): boolean {
  const digits = input.replace(/[^\d+]/g, "");
  // Accept common RO and international formats; require >= 10 digits
  // Examples: 07xxxxxxxx, +407xxxxxxxx, 02xxxxxxxx, +402xxxxxxxx
  const numeric = digits.replace(/\D/g, "");
  return numeric.length >= 9 && numeric.length <= 15;
}

export default function MiniLeadForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const ctaRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTriggeredRef = useRef(false);

  const variant: Variant = useMemo(() => {
    if (typeof window === "undefined") return "email";
    const existing = readVariant();
    if (existing) return existing;
    const v = Math.random() < 0.5 ? "phone" : "email";
    writeVariant(v);
    return v;
  }, []);

  const label = variant === "phone" ? "Telefon" : "Email";

  const canShow = useMemo(() => {
    if (typeof window === "undefined") return false;
    const viewedAt = readNumber(STORAGE_KEYS.viewedAt);
    const dismissedAt = readNumber(STORAGE_KEYS.dismissedAt);
    const submittedAt = readNumber(STORAGE_KEYS.submittedAt);
    if (isWithin24h(submittedAt)) return false;
    if (isWithin24h(dismissedAt)) return false;
    if (isWithin24h(viewedAt)) return false;
    return true;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!canShow) return;

    const onScroll = () => {
      // Percent scrolled of the document
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      if (ratio >= 0.5) {
        triggerVisible();
      }
    };

    const triggerVisible = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;
      writeNumber(STORAGE_KEYS.viewedAt, Date.now());
      setIsVisible(true);
      window.removeEventListener("scroll", onScroll, { passive: true } as any);
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    // Start 10s timer
    timerRef.current = setTimeout(() => {
      triggerVisible();
    }, 10000);

    // Also listen for scroll to 50%
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll as any);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [canShow]);

  const sendCTAOnce = useCallback((labelText: string) => {
    if (ctaRef.current) return;
    ctaRef.current = true;
    try {
      trackCTA(labelText);
    } catch {}
    setTimeout(() => {
      ctaRef.current = false;
    }, 800);
  }, []);

  const isValid = useMemo(() => {
    if (!value) return false;
    if (variant === "email") return Boolean(validateEmail(value));
    return validatePhone(value);
  }, [value, variant]);

  const close = useCallback(() => {
    writeNumber(STORAGE_KEYS.dismissedAt, Date.now());
    setIsVisible(false);
  }, []);

  const onSubmit = useCallback(
    async (e?: FormEvent) => {
      e?.preventDefault?.();
      setHasInteracted(true);
      setError(null);
      if (!isValid) {
        setError(variant === "email" ? "Introduce un email valid." : "Introduce un telefon valid.");
        return;
      }
      setLoading(true);
      try {
        await axios.post(
          "/api/mini-lead",
          {
            variant,
            value,
            page: typeof window !== "undefined" ? window.location.href : "",
          },
          { headers: { "Content-Type": "application/json" } }
        );
        writeNumber(STORAGE_KEYS.submittedAt, Date.now());
        try {
          trackLead("contact_form", { source: "mini_lead_form", variant });
        } catch {}
        setIsVisible(false);
      } catch (err: any) {
        setError(err?.response?.data?.error || "A apărut o eroare. Încearcă din nou.");
      } finally {
        setLoading(false);
      }
    },
    [isValid, variant, value]
  );

  if (!isVisible) return null;

  return (
    <div
      data-nosnippet
      className="fixed right-4 bottom-24 sm:right-6 sm:bottom-28 z-[60] animate-in slide-in-from-bottom-4 duration-300"
      aria-live="polite"
      role="dialog"
      aria-label="Solicită ofertă rapid"
    >
      <div className="w-[340px] rounded-2xl border border-white/20 bg-gradient-to-br from-white to-stone-50/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="mb-1 inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-green-700 uppercase tracking-wide">OFERTĂ RAPIDĂ</span>
            </div>
            <h3 className="text-lg font-bold text-black leading-tight">
              Primești oferta în <span className="text-blue-600">aceeași zi</span>
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Lasă {label.toLowerCase()}-ul și îți facem o estimare personalizată gratuită.
            </p>
          </div>
          <button
            aria-label="Închide"
            onClick={close}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400 transition-all hover:bg-stone-200 hover:text-stone-600 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <input
              id="mini-lead-input"
              inputMode={variant === "phone" ? "tel" : "email"}
              type={variant === "phone" ? "tel" : "email"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendCTAOnce("mini_lead_form_enter");
                }
              }}
              placeholder={variant === "phone" ? "Introdu numărul de telefon" : "Introdu adresa de email"}
              className="block w-full rounded-xl border-2 border-stone-200 bg-white px-4 py-3 text-base text-black placeholder-stone-400 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-stone-300"
              aria-invalid={hasInteracted && !isValid}
              aria-describedby={error ? "mini-lead-error" : undefined}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {variant === "phone" ? (
                <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              )}
            </div>
            {error && (
              <p id="mini-lead-error" className="mt-2 text-xs text-red-600 font-medium">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            onClick={() => sendCTAOnce("mini_lead_form_submit_click")}
            disabled={loading || !isValid}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-base font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                Se trimite...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Primesc oferta gratuită
              </div>
            )}
          </button>

          <div className="text-center">
            <p className="text-xs text-stone-500 leading-relaxed">
              Prin trimiterea formularului sunteți de acord cu{" "}
              <a href="/politica-de-confidentialitate" className="text-blue-600 hover:text-blue-700 underline decoration-1 underline-offset-2" target="_blank" rel="noopener noreferrer">
                Politica de Confidențialitate
              </a>
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-3 text-xs text-stone-400 hover:text-stone-600 transition-colors underline decoration-1 underline-offset-2"
            >
              Nu acum, mulțumesc
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


