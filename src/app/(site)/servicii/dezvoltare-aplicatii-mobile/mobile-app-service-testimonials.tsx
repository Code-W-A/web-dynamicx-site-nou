import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const mobileTestimonials = [
  {
    id: "my-butterfly",
    quote:
      "Aplicația My Butterfly a fost realizată foarte bine din punct de vedere UX și funcțional. Interfața este ușor de folosit, experiența rămâne intuitivă, iar produsul final este bine structurat și pregătit pentru utilizare reală.",
    name: "My Butterfly",
    label: "Aplicație mobilă de recomandări",
    href: "/portofoliu-aplicatii-mobile/my-butterfly-recomandari-palete-tenis",
  },
  {
    id: "cristina-zurba",
    quote:
      "Aplicația Cristina Zurba Tarot & Astrology reflectă foarte bine identitatea brandului și oferă o experiență elegantă și ușor de parcurs. Designul este bine gândit, iar partea vizuală și funcționalitatea se leagă firesc într-un produs digital coerent și profesionist.",
    name: "Cristina Zurba Tarot & Astrology",
    label: "Aplicație mobilă pentru brand personal",
    href: "/portofoliu-aplicatii-mobile/cristina-zurba-tarot-lecturi-ai",
  },
] as const;

export default function MobileAppServiceTestimonials() {
  return (
    <section className="border-y border-slate-100 bg-white py-10 sm:py-12">
      <div className="container px-5">
        <div className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Feedback</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Feedback din proiecte mobile reale</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Două exemple scurte care susțin calitatea produsului și atenția acordată experienței de utilizare.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {mobileTestimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50/75 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <Quote size={18} className="text-primary" />
              <div className="mt-4">
                <p className="text-sm leading-7 text-slate-700 sm:text-base">{item.quote}</p>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Vezi proiectul în portofoliu
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-7 text-slate-600 sm:text-base">
          <Link href="/portofoliu-aplicatii-mobile" className="font-semibold text-primary underline-offset-4 hover:underline">
            Vezi mai multe proiecte în portofoliul de aplicații mobile
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
