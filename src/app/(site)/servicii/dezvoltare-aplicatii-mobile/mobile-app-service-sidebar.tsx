"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import ContactModal from "@/components/Common/ContactModal";
import { serviceData } from "@/static-data/service";

export default function MobileAppServiceSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
        <h3 className="text-3xl font-bold text-slate-950">Servicii</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {serviceData.map((service) => {
            const isActive = pathname === `/servicii/${service.slug}`;

            return (
              <Link
                key={service.id}
                href={`/servicii/${service.slug}`}
                className={`flex min-h-[88px] items-start gap-3 rounded-[1.25rem] border px-5 py-4 text-base font-medium transition ${
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-slate-200 bg-slate-50/60 text-slate-900 hover:border-primary/20 hover:bg-white hover:text-primary"
                }`}
              >
                <ArrowRight size={18} className="mt-1 shrink-0" />
                <span className="leading-6">{service.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] xl:sticky xl:top-24">
        <h3 className="text-2xl font-bold">Hai să vorbim</h3>
        <div className="mt-5 space-y-3 text-sm text-white/80">
          <a href="tel:+40774550758" className="flex items-center gap-3 transition hover:text-white">
            <Phone size={18} className="text-primary" />
            <span>+40 774 550 758</span>
          </a>
          <a href="mailto:webdynamicx@gmail.com" className="flex items-center gap-3 transition hover:text-white">
            <Mail size={18} className="text-primary" />
            <span>webdynamicx@gmail.com</span>
          </a>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href="tel:+40774550758"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            <Phone size={16} />
            Sună
          </a>
          <a
            href="https://wa.me/40774550758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/20"
          >
            Contact
          </button>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
