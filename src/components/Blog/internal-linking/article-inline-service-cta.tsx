import Link from "next/link";

type ArticleInlineServiceCtaProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export default function ArticleInlineServiceCta({
  title,
  description,
  href,
  ctaLabel,
}: ArticleInlineServiceCtaProps) {
  return (
    <aside
      className="not-prose rounded-[1.5rem] border border-primary/15 bg-[linear-gradient(135deg,_rgba(74,108,247,0.06)_0%,_rgba(255,255,255,0.98)_100%)] p-5 shadow-[0_18px_40px_rgba(74,108,247,0.08)] sm:p-6"
      aria-label="Serviciu relevant"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Serviciu relevant
          </p>
          <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href={href}
            className="bg-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
