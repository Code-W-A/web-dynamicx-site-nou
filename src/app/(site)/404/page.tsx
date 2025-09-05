import CommonCard from "@/components/Common/CommonCard";
import { Metadata } from "next";
import Link from "next/link";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Pagina nu a fost gasita | ${siteName}`,
  description: "Pagina nu a fost gasita.",
  robots: { index: false, follow: false },
};

export default function ErrorPage() {
  return (
    <section className="py-[120px] lg:pt-[200px]">
      <div className="px-4 xl:container">
        <CommonCard>
          <div className="relative pt-6 text-center md:pt-8">
            <span className="text-primary mb-2 block text-lg font-semibold">
              Oops!
            </span>
            <h1 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px]">
              Pagina nu a fost găsită!
            </h1>
          </div>
          <p className="text-body-color mb-6 text-center">
            Pagina pe care o cauți nu există sau a fost mutată.
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="bg-primary inline-flex items-center justify-center rounded-sm px-8 py-[14px] text-sm font-semibold text-white"
            >
              Mergi la pagina principală
            </Link>
          </div>
        </CommonCard>
      </div>
    </section>
  );
}
