"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./section-heading";
import { faqs } from "./content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Întrebări frecvente" center />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="rounded-2xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-black sm:text-base">{faq.question}</span>
                  <ChevronDown size={18} className={`text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-gray-700">{faq.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
