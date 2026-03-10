import { Quote } from "lucide-react";
import { testimonials } from "./content";
import SectionHeading from "./section-heading";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Social proof"
          title="Ce apreciaza clientii in colaborarea cu WebDynamicx"
          description="Testimoniale orientate pe rezultate de business si experienta de lucru."
          center
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-testimonial">
              <Quote size={20} className="text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{`"${item.quote}"`}</p>
              <p className="mt-5 text-sm font-semibold text-black">{item.name}</p>
              <p className="text-xs text-body-color">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
