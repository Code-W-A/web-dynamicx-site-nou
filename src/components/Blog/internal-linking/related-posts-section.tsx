import { resolvePostTeaser } from "@/lib/blog-post-text";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildBlogRelatedImageUrl } from "@/sanity/image-helpers";
import type { BlogRelatedPostCard } from "@/types/blog";

export type RelatedPostsSectionProps = {
  posts: BlogRelatedPostCard[];
  currentSlug?: string;
};

function postHref(slug: BlogRelatedPostCard["slug"]): string | null {
  const s = typeof slug === "object" && slug?.current ? slug.current : typeof slug === "string" ? slug : null;
  return s ? `/blog/${s}` : null;
}

function formatPublishedAt(value?: string) {
  if (!value) {
    return "";
  }

  try {
    return new Date(value).toLocaleDateString("ro-RO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function RelatedPostsSection({ posts, currentSlug }: RelatedPostsSectionProps) {
  const filtered = posts.filter((p) => {
    const href = postHref(p.slug);
    if (!href) return false;
    if (currentSlug && href === `/blog/${currentSlug}`) return false;
    return true;
  });

  if (filtered.length === 0) return null;

  const isFeaturedSingle = filtered.length === 1;
  const gridClassName = isFeaturedSingle
    ? "mt-6"
    : filtered.length === 2
      ? "mt-6 grid gap-5 lg:grid-cols-2"
      : "mt-6 grid gap-5 lg:grid-cols-3";

  return (
    <section
      className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,_rgba(248,250,252,0.9)_0%,_#ffffff_100%)] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-6"
      aria-labelledby="related-posts-heading"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Continuă lectura</p>
        <h2 id="related-posts-heading" className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
          Articole înrudite
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Dacă vrei să aprofundezi subiectul, continuă cu unul dintre articolele de mai jos.
        </p>
      </div>

      <ul className={gridClassName}>
        {filtered.map((p) => {
          const href = postHref(p.slug);
          if (!href) return null;
          const teaser = resolvePostTeaser(p);
          const publishedAt = formatPublishedAt(p.publishedAt);
          let imgUrl: string | null = null;
          if (p.mainImage && typeof p.mainImage === "object") {
            try {
              imgUrl = buildBlogRelatedImageUrl(p.mainImage);
            } catch {
              imgUrl = null;
            }
          }
          return (
            <li key={p._id ?? href}>
              <Link
                href={href}
                className={`group flex h-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_55px_rgba(74,108,247,0.14)] ${
                  isFeaturedSingle ? "md:grid md:grid-cols-[minmax(0,240px)_1fr]" : "flex-col"
                }`}
              >
                {imgUrl ? (
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeaturedSingle ? "min-h-[220px]" : "aspect-[16/10] w-full"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={typeof p.mainImage?.alt === "string" && p.mainImage.alt.trim() ? p.mainImage.alt.trim() : p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes={isFeaturedSingle ? "(max-width: 768px) 100vw, 240px" : "(max-width: 1024px) 100vw, 360px"}
                    />
                  </div>
                ) : null}

                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-primary">
                      Articol recomandat
                    </span>
                    {publishedAt ? <span>{publishedAt}</span> : null}
                  </div>

                  <span
                    className={`mt-4 font-semibold tracking-tight text-slate-950 transition group-hover:text-primary ${
                      isFeaturedSingle ? "text-xl sm:text-2xl" : "text-lg"
                    }`}
                  >
                    {p.title}
                  </span>
                  {teaser ? (
                    <p
                      className={`mt-3 leading-relaxed text-slate-600 ${
                        isFeaturedSingle ? "line-clamp-4 text-sm sm:text-base" : "line-clamp-3 text-sm"
                      }`}
                    >
                      {teaser}
                    </p>
                  ) : null}

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Citește articolul
                      <ArrowRight size={16} aria-hidden className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
