"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import { usePathname } from "next/navigation";
import { trackLead, trackCTA } from "@/components/Analytics/GTMLeadEvents";

export default function BottomCTA() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const pathname = usePathname();
  const [waUrl, setWaUrl] = useState(
    "https://wa.me/40774550758?text=Salut!%20Am%20nevoie%20de%20informatii%20despre%20serviciile%20Web%20Dynamicx."
  );

  useEffect(() => {
    // Build WhatsApp message with current page context
    try {
      const title = typeof document !== "undefined" ? document.title : "";
      const page = title || pathname || "/";
      const message = `Salut! Sunt pe pagina ${page} și aș dori informații despre serviciile Web Dynamicx.`;
      const url = `https://wa.me/40774550758?text=${encodeURIComponent(message)}`;
      setWaUrl(url);
    } catch {}
  }, [pathname]);

  useEffect(() => {
    // Show after 7s or after 50% scroll, whichever happens first
    const timer = setTimeout(() => setIsVisible(true), 7000);

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const viewportHeight = window.innerHeight;
      const scrolled = scrollTop / (docHeight - viewportHeight);
      if (scrolled >= 0.5) {
        setIsVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Dim bar when typing in forms
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.getAttribute("contenteditable") === "true") {
        setIsTyping(true);
      }
    };
    const onFocusOut = (e: FocusEvent) => {
      setIsTyping(false);
    };
    document.addEventListener("focusin", onFocusIn as EventListener);
    document.addEventListener("focusout", onFocusOut as EventListener);
    return () => {
      document.removeEventListener("focusin", onFocusIn as EventListener);
      document.removeEventListener("focusout", onFocusOut as EventListener);
    };
  }, []);

  const vibrate = () => {
    if (typeof window !== "undefined" && navigator && (navigator as any).vibrate) {
      try {
        (navigator as any).vibrate(10);
      } catch {}
    }
  };

  const openContact = () => {
    vibrate();
    try { trackCTA("BottomCTA - Contact"); } catch {}
    setContactModalOpen(true);
  };

  if (!isVisible && !isMinimized) {
    return <div className="h-16"></div>;
  }

  return (
    <>
      {/* Minimized pill */}
      {isMinimized && (
        <button
          aria-label="Deschide bara CTA"
          onClick={() => {
            vibrate();
            setIsMinimized(false);
            setIsVisible(true);
          }}
          className="fixed bottom-4 right-4 z-[41] flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg"
          style={{ marginBottom: `calc(env(safe-area-inset-bottom, 0px))` }}
        >
          Contact rapid
        </button>
      )}

      {/* Fixed Bottom CTA Bar */}
      {isVisible && !isMinimized && (
        <div
          role="region"
          aria-label="Bara de acțiuni rapide: sună, WhatsApp, contact"
          className={`fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-lg transition-opacity ${isTyping ? "opacity-60" : "opacity-100"}`}
          style={{ paddingBottom: `calc(env(safe-area-inset-bottom, 0px))` }}
        >
          {/* Minimize - only on desktop/tablet */}
          <div className="relative hidden sm:block">
            <button
              aria-label="Minimizează bara CTA"
              onClick={() => {
                vibrate();
                setIsMinimized(true);
                setIsVisible(false);
              }}
              className="absolute right-3 top-2 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
            >
              Minimizați
            </button>
          </div>

          <div className="grid h-20 grid-cols-3">
            {/* Sună */}
            <a
              href="tel:0774550758"
              aria-label="Sună Web Dynamicx: consultanță rapidă la 0774 550 758"
              onClick={() => { vibrate(); try { trackLead("phone"); } catch {} }}
              className="flex flex-col items-center justify-center bg-green-500 text-white transition-colors hover:bg-green-600"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mb-0.5">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-[13px] font-semibold leading-none">Sună</span>
              <span className="text-[11px] leading-none opacity-90">Consultanță rapidă</span>
            </a>

            {/* WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrie-ne pe WhatsApp: disponibil acum, răspuns în câteva minute"
              onClick={() => { vibrate(); try { trackLead("whatsapp"); } catch {} }}
              className="flex flex-col items-center justify-center border-l border-green-400 bg-green-500 text-white transition-colors hover:bg-green-600"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mb-0.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.890 3.488"/>
              </svg>
              <span className="text-[13px] font-semibold leading-none">WhatsApp</span>
              <span className="text-[11px] leading-none opacity-90 flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>Disponibili acum • Răspuns în câteva minute</span>
            </a>

            {/* Contact */}
            <button
              onClick={openContact}
              aria-label="Deschide formularul de contact: ofertă în 24h"
              className="flex flex-col items-center justify-center border-l border-primary/70 bg-primary text-white transition-colors hover:bg-primary/90"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mb-0.5">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-[13px] font-semibold leading-none">Contact</span>
              <span className="text-[11px] leading-none opacity-90">Ofertă în 24h</span>
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModalOpen && (
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
}
