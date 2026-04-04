import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resolvePostTeaser } from "@/lib/blog-post-text";
import type { BlogArticleTeaser } from "@/types/blog";

type TopicClusterArticlesSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  articles: BlogArticleTeaser[];
  hubHref: string;
  hubCtaLabel: string;
  className?: string;
};

export default function TopicClusterArticlesSection({
  eyebrow,
  title,
  intro,
  articles,
  hubHref,
  hubCtaLabel,
  className = "",
}: TopicClusterArticlesSectionProps) {
  const listedArticles = articles.filter((article) => Boolean(article.slug?.current)).slice(0, 3);

  if (listedArticles.length === 0) {
    return null;
  }

  return (
    <section className={`bg-white py-20 sm:py-24 ${className}`.trim()}>
      <div className="container px-5">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{intro}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {listedArticles.map((article) => {
            const slug = article.slug?.current;
            if (!slug) return null;
            const teaser = resolvePostTeaser(article);

            return (
              <article
                key={article._id ?? slug}
                className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  <Link href={`/blog/${slug}`} className="transition hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                {teaser ? (
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">{teaser}</p>
                ) : (
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    Articol din clusterul editorial Web Dynamicx, gândit să completeze pagina de serviciu cu detalii
                    practice și contexte de decizie.
                  </p>
                )}
                <Link
                  href={`/blog/${slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Citește articolul
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href={hubHref}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
          >
            {hubCtaLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
