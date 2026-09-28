"use client";

import Image from "next/image";
import Link from "next/link";
import type { LeadSource } from "./types";
import { emitLeadEvent } from "./events";
import { ContactLink } from "./interactions";

export function LeadHeader({ source }: { source: LeadSource }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-3 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Web Dynamicx — Acasă"
        >
          <Image src="/images/logo/logo.svg" alt="" width={40} height={40} />
          <span className="hidden text-sm font-bold tracking-tight text-slate-950 sm:block">
            Web Dynamicx
          </span>
        </Link>
        <nav
          aria-label="Navigare pagină"
          className="flex items-center gap-3 text-xs font-semibold text-slate-700 sm:gap-7 sm:text-sm"
        >
          <a href="#proiecte" className="hover:text-primary py-3">
            {source === "lead-web-site" ? "Exemplu de site" : "Proiecte"}
          </a>
          <a href="#preturi" className="hover:text-primary py-3">
            Prețuri
          </a>
          <a
            href="#formular-lead"
            className="bg-primary rounded-full px-4 py-3 text-white hover:bg-blue-800"
            onClick={() => {
              emitLeadEvent(source, "cta_click", { placement: "header" });
              document
                .getElementById("formular-lead")
                ?.focus({ preventScroll: true });
            }}
          >
            Cere ofertă
          </a>
        </nav>
      </div>
    </header>
  );
}

export function LeadFooter({ source }: { source: LeadSource }) {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 pt-9 pb-28 text-sm text-slate-600 sm:px-8 lg:pb-9">
      <div className="mx-auto flex max-w-[1176px] flex-col justify-between gap-6 lg:flex-row">
        <div>
          <p className="font-bold text-slate-950">Web Dynamicx</p>
          <p className="mt-2">Web design și dezvoltare web</p>
          <ContactLink
            source={source}
            kind="email"
            href="mailto:webdynamicx@gmail.com"
            className="mt-2 inline-block underline-offset-4 hover:underline"
          >
            webdynamicx@gmail.com
          </ContactLink>
        </div>
        <nav
          aria-label="Informații legale"
          className="flex flex-wrap items-start gap-x-5 gap-y-3"
        >
          <Link href="/politica-de-confidentialitate">Confidențialitate</Link>
          <Link href="/termeni-si-conditii">Termeni și condiții</Link>
          <Link href="/politica-cookies">Cookies</Link>
        </nav>
        <p>© {new Date().getFullYear()} Web Dynamicx</p>
      </div>
    </footer>
  );
}
