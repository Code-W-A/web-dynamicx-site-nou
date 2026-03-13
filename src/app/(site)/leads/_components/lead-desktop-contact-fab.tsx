"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Phone, FileText } from "lucide-react";

export default function LeadDesktopContactFab() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const whatsappHref = useMemo(() => {
    const message = `Salut! Sunt pe pagina ${pathname} si vreau oferta.`;
    return `https://wa.me/40774550758?text=${encodeURIComponent(message)}`;
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed right-4 bottom-4 z-[50] sm:right-6 sm:bottom-6"
      style={{ marginBottom: "calc(env(safe-area-inset-bottom, 0px))" }}
    >
      {open ? (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} className="text-green-600" />
            WhatsApp
          </a>
          <a
            href="tel:+40774550758"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} className="text-primary" />
            Suna acum
          </a>
          <Link
            href="#formular-lead"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            <FileText size={16} className="text-primary" />
            Formular
          </Link>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Contact rapid"
        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90"
      >
        Contact rapid
      </button>
    </div>
  );
}
