const steps = [
  {
    title: "Analiză și structurare inițială",
    text: "Înțelegem clar ce trebuie construit și cum va fi folosit în practică. Ieși cu priorități și un cadru pe care îl poți folosi în echipă.",
  },
  {
    title: "Interfață clară, gândită pentru utilizare rapidă",
    text: "Fluxuri pe telefon pe care utilizatorul le parcurge fără ghicit: pași puțini, feedback vizual și aspect aliniat brandului.",
  },
  {
    title: "Dezvoltare aplicație",
    text: "Implementare stabilă, pregătită pentru utilizare reală, testată pe dispozitive reale — nu doar la demo.",
  },
  {
    title: "Backend și administrare",
    text: "Unde e nevoie: date, conturi, conținut sau comenzi dintr-un panou, ca echipa să opereze fără să depindă de developer la fiecare schimbare mică.",
  },
  {
    title: "Publicare în magazine",
    text: "Pregătire și publicare corectă în Google Play și App Store, în linie cu politicile magazinelor.",
  },
  {
    title: "Suport după lansare",
    text: "Suport pentru ajustări și evoluție după lansare, pe măsură ce primești feedback de la utilizatori.",
  },
] as const;

export default function DevelopmentProcessSection() {
  return (
    <section className="border-y border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="dev-process-heading">
      <div className="container px-5">
        <h2 id="dev-process-heading" className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
          Ce primești concret într-un proiect de aplicație mobilă
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Ordinea tipică de mai jos; durata depinde de complexitate. Detaliile concrete le stabilim la început, în discuție,
          aliniate la tipul aplicației și la cum va fi folosită în echipă.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4 shadow-sm"
            >
              <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-primary/15 px-2 text-xs font-bold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-slate-950 sm:text-base">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
