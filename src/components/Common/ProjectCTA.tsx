"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import Graphic from "../Home/Newsletter/Graphic";

export default function ProjectCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappHref = "https://wa.me/40774550758";
  const callHref = "tel:+40774550758";

  return (
    <section className="mt-[-160px] bg-white">
      <div className="container">
        <div className="bg-primary relative z-10 overflow-hidden rounded-md py-[70px] text-center">
          <div className="relative z-10 mx-auto max-w-[770px] px-6">
            <h2 className="mb-10 text-2xl leading-tight font-bold text-white md:text-[40px]">
              Începe proiectul tău acum
            </h2>
            <div className="relative mx-auto max-w-[480px]">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-primary w-full rounded-full bg-white px-5 py-4 text-base font-semibold sm:w-auto sm:py-[10px]"
                >
                  Contact
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-full rounded-full border border-white/[13%] bg-white/[15%] px-8 py-4 text-center text-white outline-hidden transition hover:bg-white/20 focus:border-white focus-visible:shadow-none sm:w-auto"
                >
                  WhatsApp
                </a>
                <a
                  href={callHref}
                  className="text-white w-full rounded-full border border-white/[13%] bg-white/[15%] px-8 py-4 text-center text-white outline-hidden transition hover:bg-white/20 focus:border-white focus-visible:shadow-none sm:w-auto"
                >
                  Sună
                </a>
              </div>
            </div>
          </div>
          <Graphic />
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}


