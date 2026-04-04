import Link from "next/link";

export type PortfolioHubBlockProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  className?: string;
};

export default function PortfolioHubBlock({
  title,
  description,
  href,
  ctaLabel,
  className = "",
}: PortfolioHubBlockProps) {
  return (
    <aside
      className={`rounded-sm border border-[#E9ECF8] bg-white p-5 sm:p-6 ${className}`.trim()}
      aria-labelledby="portfolio-hub-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Portofoliu</p>
      <h2 id="portfolio-hub-heading" className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="text-body-color mt-2 text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary/35 hover:text-primary"
      >
        {ctaLabel}
      </Link>
    </aside>
  );
}
