import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, metadata, metaDescription, excerpt, slug, mainImage } = blog;
  const teaser = excerpt || metaDescription || metadata || "";

  return (
    <article className="relative">
      <div className="shadow-blog flex h-full flex-col overflow-hidden rounded-xl bg-white">
        <div className="relative block aspect-video">
          {mainImage ? (
            <Image
              src={mainImage ? imageBuilder(mainImage).url() : ""}
              alt={title}
              fill
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
