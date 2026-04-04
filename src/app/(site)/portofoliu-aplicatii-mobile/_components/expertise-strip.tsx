import { mobilePortfolioHub } from "../mobile-app-portfolio-data";

function ExpertiseStrip() {
  return (
    <section
      className="border-t border-slate-200/80 bg-white py-12 sm:py-14"
      aria-labelledby="mobile-portfolio-expertise-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="mobile-portfolio-expertise-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            {mobilePortfolioHub.expertiseHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {mobilePortfolioHub.expertiseIntro}
          </p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {mobilePortfolioHub.expertiseCategories.map((label) => (
            <li key={label}>
              <span className="inline-flex rounded-full border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-center text-xs font-medium leading-snug text-slate-800 shadow-sm sm:px-4 sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
        {mobilePortfolioHub.expertiseClosingLine ? (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:mt-10 sm:text-base">
            {mobilePortfolioHub.expertiseClosingLine}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default ExpertiseStrip;
