import { mobilePortfolioHub } from "../mobile-app-portfolio-data";

export default function PortfolioStatsStrip() {
  const { items, microLine } = mobilePortfolioHub.statsStrip;

  return (
    <section
      className="border-b border-slate-100 bg-slate-50/50 py-8 sm:py-9"
      aria-labelledby="mobile-portfolio-stats-heading"
    >
      <div className="container px-5">
        <h2 id="mobile-portfolio-stats-heading" className="sr-only">
          Experiență și livrări
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <li
              key={item.figure + item.label}
              className="rounded-xl border border-slate-200/80 bg-white/80 px-3 py-3.5 text-center shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-4 sm:py-4"
            >
              <p className="text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-[1.3rem]">
                {item.figure}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600 sm:text-xs">{item.label}</p>
            </li>
          ))}
        </ul>
        {microLine ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
            {microLine}
          </p>
        ) : null}
      </div>
    </section>
  );
}
