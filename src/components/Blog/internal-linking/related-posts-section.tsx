import { resolvePostTeaser } from "@/lib/blog-post-text";
import Image from "next/image";
import Link from "next/link";
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

export default function RelatedPostsSection({ posts, currentSlug }: RelatedPostsSectionProps) {
  const filtered = posts.filter((p) => {
    const href = postHref(p.slug);
    if (!href) return false;
    if (currentSlug && href === `/blog/${currentSlug}`) return false;
    return true;
  });

  if (filtered.length === 0) return null;

  return (
    <section className="mt-2" aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className="text-lg font-semibold tracking-tight text-slate-950">
        Articole înrudite
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const href = postHref(p.slug);
          if (!href) return null;
          const teaser = resolvePostTeaser(p);
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
                className="group flex h-full gap-3 rounded-sm border border-[#E9ECF8] bg-white p-3 transition hover:border-primary/25"
              >
                {imgUrl ? (
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xs bg-slate-100">
                    <Image
                      src={imgUrl}
                      alt={typeof p.mainImage?.alt === "string" && p.mainImage.alt.trim() ? p.mainImage.alt.trim() : p.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-semibold text-slate-950 group-hover:text-primary">{p.title}</span>
                  {teaser ? (
                    <p className="text-body-color mt-1 line-clamp-2 text-xs leading-relaxed">{teaser}</p>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
