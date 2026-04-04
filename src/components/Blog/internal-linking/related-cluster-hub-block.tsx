import Link from "next/link";

export type RelatedClusterHubBlockProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  className?: string;
};

export default function RelatedClusterHubBlock({
  title,
  description,
  href,
  ctaLabel,
  className = "",
}: RelatedClusterHubBlockProps) {
  return (
    <aside
      className={`rounded-sm border border-[#E9ECF8] bg-white p-5 sm:p-6 ${className}`.trim()}
      aria-labelledby="related-cluster-hub-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cluster relevant</p>
      <h2 id="related-cluster-hub-heading" className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="text-body-color mt-2 text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
      >
        {ctaLabel}
      </Link>
    </aside>
  );
}
