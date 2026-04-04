import { GitBranch, Layers, Target, Users } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Produs folosit în realitate",
    text: "Prioritizăm ce se folosește în salon, pe teren sau în telefon — nu funcții de fațadă.",
  },
  {
    icon: Users,
    title: "Utilizator + business",
    text: "Fluxuri clare pentru client sau angajat, aliniate la obiectivele tale operaționale.",
  },
  {
    icon: GitBranch,
    title: "Pregătit să evolueze",
    text: "Arhitectură în care poți adăuga funcții fără să reîncepi de la zero.",
  },
  {
    icon: Target,
    title: "Claritate de produs",
    text: "Pași puțini, mesaje explicite — designul susține obiectivul, nu îl ascunde.",
  },
] as const;

export default function WhyUsSection() {
  return (
    <section className="border-t border-slate-100 bg-white py-14 sm:py-16" aria-labelledby="why-us-heading">
      <div className="container px-5">
        <h2 id="why-us-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          De ce să discutăm despre aplicația ta
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          Ne potrivim echipe care vor să lanseze ceva ce utilizatorii chiar deschid din nou — în limite de timp și buget realiste.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="inline-flex rounded-2xl bg-primary/10 p-2.5 text-primary">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
