import { Quote } from "lucide-react";
import { testimonials } from "./content";
import SectionHeading from "./section-heading";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Feedback"
          title="Feedback orientat pe claritate și livrare"
          description="Câteva impresii despre colaborare, structură și produsul final."
          center
        />
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_38px_rgba(15,23,42,0.05)]"
            >
              <Quote size={20} className="text-primary" />
              <p className="mt-4 text-sm leading-7 text-slate-700">{`"${item.quote}"`}</p>
              <p className="mt-5 text-sm font-semibold text-slate-950">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
