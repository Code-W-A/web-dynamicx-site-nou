import { resolvePostTeaser } from "@/lib/blog-post-text";
import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, slug, mainImage } = blog;
  const teaser = resolvePostTeaser(blog);
  const mainImageAlt =
    mainImage && typeof mainImage.alt === "string" && mainImage.alt.trim() ? mainImage.alt.trim() : title;

  return (
    <article className="relative">
      <div className="shadow-blog flex h-full flex-col overflow-hidden rounded-xl bg-white">
        <div className="relative block aspect-video">
          {mainImage ? (
            <Image
              src={mainImage ? imageBuilder(mainImage).url() : ""}
              alt={mainImageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full duration-300 group-hover:scale-110"
            />
          ) : (
            "No image"
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">
          <div>
            <h3 className="mb-3 line-clamp-2">
              <Link
                href={`/blog/${slug?.current}`}
                className="hover:text-primary text-xl font-semibold text-black duration-200"
              >
                <span className="absolute inset-0" aria-hidden />

                {title}
              </Link>
            </h3>

            <p className="text-body-color mb-4 line-clamp-3 text-base font-medium">
              {teaser}
            </p>
          </div>

          <p className="hover:text-primary text-sm font-medium text-black underline duration-200 hover:no-underline">
            Citește mai mult
          </p>
        </div>
      </div>
    </article>
  );
}
