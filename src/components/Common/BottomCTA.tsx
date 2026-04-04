"use client";

import { useEffect, useState, useCallback } from "react";
import ContactModal from "./ContactModal";
import { usePathname } from "next/navigation";
import { trackLead, trackCTA } from "@/components/Analytics/GTMLeadEvents";
import { Phone, Mail, X } from "lucide-react";

export default function BottomCTA() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const pathname = usePathname();
  const [waUrl, setWaUrl] = useState(
    "https://wa.me/40774550758?text=Salut!%20Am%20nevoie%20de%20informatii%20despre%20serviciile%20Web%20Dynamicx.",
  );

  useEffect(() => {
    try {
      const title = typeof document !== "undefined" ? document.title : "";
      const page = title || pathname || "/";
      const message = `Salut! Sunt pe pagina ${page} și aș dori informații despre serviciile Web Dynamicx.`;
      setWaUrl(`https://wa.me/40774550758?text=${encodeURIComponent(message)}`);
    } catch {}
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setFabVisible(true), 7000);

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
        setFabVisible(true);
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
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("contenteditable") === "true"
      ) {
        setIsTyping(true);
      }
    };
    const onFocusOut = () => setIsTyping(false);
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

  const openMenu = () => {
    vibrate();
    try {
      trackCTA("BottomCTA - Contact rapid deschis");
    } catch {}
    setMenuOpen(true);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openContact = () => {
    vibrate();
    try {
      trackCTA("BottomCTA - Contact");
    } catch {}
    closeMenu();
    setContactModalOpen(true);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!fabVisible) return null;

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        aria-controls="contact-rapid-dialog"
        aria-label="Contact rapid: sună, WhatsApp sau formular"
        onClick={() => {
          vibrate();
          if (menuOpen) closeMenu();
          else openMenu();
        }}
        className={`contact-fab-pulse fixed z-[42] flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-gray-900 bg-white px-4 py-3 text-sm font-bold tracking-tight text-gray-900 shadow-[0_8px_28px_rgba(0,0,0,0.14)] transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 sm:min-h-[3.25rem] sm:px-5 sm:text-base ${
          isTyping ? "opacity-50" : "opacity-100"
        }`}
        style={{
          right: `max(1rem, env(safe-area-inset-right, 0px))`,
          bottom: `max(1rem, env(safe-area-inset-bottom, 0px))`,
        }}
      >
        Contact rapid
      </button>

      {menuOpen ? (
        <div className="fixed inset-0 z-[48] flex items-end justify-center sm:items-center sm:p-4" role="presentation">
          <button
            type="button"
            aria-label="Închide contact rapid"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={closeMenu}
          />
          <div
            id="contact-rapid-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-rapid-title"
            className="relative z-10 w-full max-w-md rounded-t-3xl border border-gray-100 bg-white p-6 shadow-2xl sm:rounded-3xl"
            style={{ marginBottom: `max(0px, env(safe-area-inset-bottom, 0px))` }}
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h2 id="contact-rapid-title" className="text-lg font-bold text-gray-900">
                  Contact rapid
                </h2>
                <p className="mt-1 text-sm text-gray-600">Alege cum vrei să ne contactezi.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  vibrate();
                  closeMenu();
                }}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                aria-label="Închide"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:0774550758"
                aria-label="Sună Web Dynamicx: consultanță rapidă la 0774 550 758"
                onClick={() => {
                  vibrate();
                  try {
                    trackLead("phone");
                  } catch {}
                  closeMenu();
                }}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-green-500 px-4 py-4 text-white transition hover:bg-green-600"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Phone size={22} className="text-white" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="block text-base font-semibold">Sună</span>
                  <span className="text-sm opacity-90">Consultanță rapidă · 0774 550 758</span>
                </span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrie-ne pe WhatsApp: disponibil acum, răspuns în câteva minute"
                onClick={() => {
                  vibrate();
                  try {
                    trackLead("whatsapp");
                  } catch {}
                  closeMenu();
                }}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-green-500 px-4 py-4 text-white transition hover:bg-green-600"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.890 3.488" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-base font-semibold">WhatsApp</span>
                  <span className="text-sm opacity-90">Disponibili acum · răspuns în câteva minute</span>
                </span>
              </a>

              <button
                type="button"
                onClick={openContact}
                aria-label="Deschide formularul de contact: ofertă în 24h"
                className="flex w-full items-center gap-4 rounded-2xl border border-primary/20 bg-primary px-4 py-4 text-left text-white transition hover:bg-primary/90"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Mail size={22} className="text-white" aria-hidden />
                </span>
                <span>
                  <span className="block text-base font-semibold">Formular contact</span>
                  <span className="text-sm opacity-90">Ofertă în 24h</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {contactModalOpen ? (
        <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      ) : null}
    </>
  );
}
