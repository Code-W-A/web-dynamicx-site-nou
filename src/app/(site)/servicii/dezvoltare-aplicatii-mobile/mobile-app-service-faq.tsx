"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { mobileAppsServicePageData } from "./mobile-app-service-data";

export default function MobileAppServiceFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {mobileAppsServicePageData.faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={faq.question}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-slate-900 sm:text-lg">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="border-t border-slate-100 px-6 py-5">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
