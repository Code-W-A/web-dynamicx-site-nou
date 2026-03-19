import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, Language, legalContentByLang } from "./legal-content";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

function resolveLanguage(rawLang: string | string[] | undefined): Language {
  if (Array.isArray(rawLang)) {
    return rawLang[0] === "en" ? "en" : "ro";
  }
  return rawLang === "en" ? "en" : "ro";
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.searchParams;
  const lang = resolveLanguage(params?.lang);
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const title =
    lang === "en"
      ? "Cristina Zurba Tarot&Astrology — Privacy Policy & Terms"
      : "Cristina Zurba Tarot&Astrology — Politică de confidențialitate & Termeni";
  const description =
    lang === "en"
      ? "Legal page for the Cristina Zurba Tarot&Astrology mobile app: Privacy Policy and Terms & Conditions."
      : "Pagină legală pentru aplicația mobilă Cristina Zurba Tarot&Astrology: Politică de confidențialitate și Termeni și condiții.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteURL}/apps/cristina-zurba-tarot-astrology/legal`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CristinaZurbaTarotLegalPage(props: PageProps) {
  const params = await props.searchParams;
  const lang = resolveLanguage(params?.lang);
  const content = legalContentByLang[lang];
  const basePath = "/apps/cristina-zurba-tarot-astrology/legal";

  return (
    <section className="bg-white pb-20 pt-[140px]">
      <div className="container">
        <div className="mx-auto max-w-[860px]">
          <header className="mb-8">
            <h1 className="mb-3 text-3xl font-bold text-black sm:text-4xl">{content.pageTitle}</h1>
            <p className="mb-4 text-base leading-relaxed text-body-color">{content.pageSubtitle}</p>
            <p className="text-sm font-medium text-body-color">
              {content.lastUpdatedLabel}: {LAST_UPDATED}
            </p>
          </header>

          <div className="sticky top-20 z-20 mb-8 border-b border-stroke bg-white py-3">
            <div className="inline-flex rounded-sm border border-stroke p-1">
              <Link
                href={`${basePath}?lang=ro`}
                className={`rounded-xs px-4 py-2 text-sm font-semibold transition ${
                  lang === "ro" ? "bg-primary text-white" : "text-body-color hover:text-black"
                }`}
                aria-current={lang === "ro" ? "page" : undefined}
              >
                {content.tabRo}
              </Link>
              <Link
                href={`${basePath}?lang=en`}
                className={`rounded-xs px-4 py-2 text-sm font-semibold transition ${
                  lang === "en" ? "bg-primary text-white" : "text-body-color hover:text-black"
                }`}
                aria-current={lang === "en" ? "page" : undefined}
              >
                {content.tabEn}
              </Link>
            </div>
          </div>

          <nav className="mb-10 rounded-xs border border-stroke bg-[#fafbff] p-5" aria-label={content.tocTitle}>
            <h2 className="mb-3 text-lg font-semibold text-black">{content.tocTitle}</h2>
            <ul className="space-y-2">
              {content.tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`${basePath}?lang=${lang}#${item.id}`} className="text-base text-primary underline-offset-2 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article id="privacy-policy" className="scroll-mt-32 border-b border-stroke pb-10">
            <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">{content.privacyTitle}</h2>
            <div className="space-y-7">
              {content.privacySections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h3 className="mb-3 text-xl font-semibold text-black">{section.title}</h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.id}-${index}`} className="text-base leading-relaxed text-body-color">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <article id="terms-and-conditions" className="scroll-mt-32 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">{content.termsTitle}</h2>
            <div className="space-y-7">
              {content.termsSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h3 className="mb-3 text-xl font-semibold text-black">{section.title}</h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.id}-${index}`} className="text-base leading-relaxed text-body-color">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
