import { resolvePostTeaser } from "@/lib/blog-post-text";
import Link from "next/link";
import { getMobileClusterPosts } from "@/sanity/sanity-utils";

export default async function MobileAppArticlesSection() {
  const articles = await getMobileClusterPosts(3);

  if (articles.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container px-5">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Resurse utile</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ghiduri despre dezvoltarea aplicațiilor mobile
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Dacă vrei să aprofundezi etapele, costurile și deciziile tehnice din spatele unui produs mobil, poți
            continua cu articolele din clusterul dedicat aplicațiilor mobile.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.map((article) => {
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
                    Articol din blogul Web Dynamicx despre lansare, structură și optimizare pentru aplicații mobile.
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
      </div>
    </section>
  );
}
