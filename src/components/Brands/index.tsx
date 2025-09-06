import { brandsData } from "@/static-data/brands";

export default function Brands() {
  return (
    <section id="clients" className="relative bg-black pb-[250px] pt-20">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[700px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Clienții noștri
              </h2>
              <p className="text-lg font-medium text-body-color">
                Branduri și proiecte realizate de Web Dynamicx în România.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {brandsData.map((brand) => (
                <a
                  key={brand?.id}
                  href={brand?.link}
                  target="_blank"
                  className="mx-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white hover:text-white"
                >
                  {brand?.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
