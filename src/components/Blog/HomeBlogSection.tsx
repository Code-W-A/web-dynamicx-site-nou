import { getPosts } from "@/sanity/sanity-utils";
import SingleBlog from "./SingleBlog";

export default async function HomeBlogSection() {
  const posts = await getPosts();

  return (
    <section id="news" className="bg-[#f8f9ff] py-20 lg:pt-[90px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                BLOG
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]">
                Articole recente
              </h2>
              <p className="text-body-color text-lg font-medium">
                Web design, creare site și SEO pentru rezultate măsurabile.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))]">
          {posts.slice(0, 3).map((blog) => (
            <SingleBlog blog={blog} key={blog?.slug.current} />
          ))}
        </div>
      </div>
    </section>
  );
}
