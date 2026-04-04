import Link from "next/link";

export type RelatedServiceBlockProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  className?: string;
};

export default function RelatedServiceBlock({
  title,
  description,
  href,
  ctaLabel,
  className = "",
}: RelatedServiceBlockProps) {
  return (
    <aside
      className={`rounded-sm border border-[#E9ECF8] bg-slate-50/80 p-5 sm:p-6 ${className}`.trim()}
      aria-labelledby="related-service-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Serviciu relevant</p>
      <h2 id="related-service-heading" className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="text-body-color mt-2 text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="bg-primary mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        {ctaLabel}
      </Link>
    </aside>
  );
}
