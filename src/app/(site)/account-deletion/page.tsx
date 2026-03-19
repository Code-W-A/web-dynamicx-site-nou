import type { Metadata } from "next";
import Link from "next/link";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Account Deletion | ${siteName}`,
  description:
    "Alege aplicația pentru care vrei să trimiți cererea de ștergere a contului.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountDeletionPage() {
  return (
    <section className="bg-white pb-20 pt-[140px]">
      <div className="container">
        <div className="mx-auto max-w-[860px]">
          <h1 className="mb-3 text-3xl font-bold text-black sm:text-4xl">
            Account Deletion
          </h1>
          <p className="mb-8 text-base leading-relaxed text-body-color">
            Selectează aplicația pentru a deschide pagina dedicată de ștergere a
            contului.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-2 text-2xl font-bold text-black">
                My Butterfly
              </h2>
              <p className="mb-5 text-base font-medium text-primary">
                Developer: Mobi Tools ROU
              </p>
              <Link
                href="/account-deletion/my-butterfly"
                className="bg-primary hover:shadow-signUp inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-white transition duration-300 ease-in-out"
              >
                Open My Butterfly page
              </Link>
            </article>

            <article className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-2 text-2xl font-bold text-black">DO IT NOW</h2>
              <p className="mb-5 text-base font-medium text-primary">
                Developer: Mobi Tools ROU
              </p>
              <Link
                href="/account-deletion/do-it-now"
                className="bg-primary hover:shadow-signUp inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-white transition duration-300 ease-in-out"
              >
                Open DO IT NOW page
              </Link>
            </article>

            <article className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-2 text-2xl font-bold text-black">
                Cristina Zurba Tarot&Astrology
              </h2>
              <p className="mb-5 text-base font-medium text-primary">
                Developer: Mobi Tools ROU
              </p>
              <Link
                href="/account-deletion/cristina-zurba-tarot-astrology"
                className="bg-primary hover:shadow-signUp inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-white transition duration-300 ease-in-out"
              >
                Open Cristina Zurba Tarot&Astrology page
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
