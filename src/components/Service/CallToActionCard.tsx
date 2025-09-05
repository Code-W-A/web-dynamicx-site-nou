"use client";

import { useState } from "react";
import ContactModal from "@/components/Common/ContactModal";

export default function CallToActionCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary px-7 py-10 text-center">
      <div className="mx-auto w-full max-w-[215px]">
        <h3 className="mb-5 text-2xl font-bold text-white">Hai să vorbim</h3>
        <p className="mb-1.5 text-white">
          <a href="tel:+40774550758" className="underline-offset-2 hover:underline">
            +40 774 550 758
          </a>
        </p>
        <p className="mb-9 text-white">
          <a href="mailto:webdynamicx@gmail.com" className="underline-offset-2 hover:underline">
            webdynamicx@gmail.com
          </a>
        </p>
        <div className="space-y-2">
          <a
            href="tel:+40774550758"
            className="flex h-10 w-full items-center justify-center rounded-full bg-white text-center font-medium text-black"
          >
            Sună
          </a>
          <a
            href="https://wa.me/40774550758"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-full items-center justify-center rounded-full border border-white/60 text-center font-medium text-white hover:bg-white/10"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-full items-center justify-center rounded-full border border-white/60 bg-white/10 text-center font-medium text-white hover:bg-white/20"
          >
            Contact
          </button>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
