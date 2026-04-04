import type { BlogRelatedPostCard, BlogRelatedServiceItem } from "@/types/blog";
import type { MobileCaseStudy } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import DeviceScreenshotFrame from "@/app/(site)/portofoliu-aplicatii-mobile/_components/device-screenshot-frame";
import RelatedPostsSection from "@/components/Blog/internal-linking/related-posts-section";
import Link from "next/link";

type CalloutLink = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type ArticleNextStepsSectionProps = {
  currentSlug?: string;
  service: CalloutLink | null;
  portfolio: CalloutLink | null;
  clusterHub: CalloutLink | null;
  relatedPosts: BlogRelatedPostCard[];
  caseStudies: MobileCaseStudy[];
  manualLinks?: BlogRelatedServiceItem[];
};

type ContinueReadingSectionProps = {
  currentSlug?: string;
  clusterHub: CalloutLink | null;
  relatedPosts: BlogRelatedPostCard[];
};

function normalizeHref(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
      <h2
        id={titleId}
        className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function AuxiliaryLinks({
  links,
  dark = false,
}: {
  links: BlogRelatedServiceItem[];
  dark?: boolean;
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 border-t border-white/10 pt-6">
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/50" : "text-slate-500"}`}>
        Și alte resurse utile
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {links.map((item) => (
          <Link
            key={`${item.href}-${item.title}`}
            href={item.href}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
              dark
                ? "border border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10 hover:text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-primary/25 hover:text-primary"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PrimaryServiceSection({
  service,
  manualLinks,
}: {
  service: CalloutLink | null;
  manualLinks: BlogRelatedServiceItem[];
}) {
  if (!service) {
    return null;
  }

  return (
    <section
      className="rounded-[2.25rem] bg-slate-950 px-6 py-8 text-white shadow-[0_28px_70px_rgba(15,23,42,0.28)] sm:px-8 sm:py-10"
      aria-labelledby="article-next-steps-service-heading"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Pasul următor</p>
        <h2
          id="article-next-steps-service-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem] sm:leading-tight"
        >
          Vrei să transformi ideea într-un proiect digital real?
        </h2>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-primary/80">
          {service.title}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {service.description}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href={service.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90 sm:text-base"
        >
          {service.ctaLabel}
        </Link>
        <p className="text-sm leading-relaxed text-white/55">
          Pagina de serviciu este locul principal în care vezi cum lucrăm, ce livrăm și cum arată următorii pași.
        </p>
      </div>

      <AuxiliaryLinks links={manualLinks} dark />
    </section>
  );
}

function PortfolioProofSection({ portfolio }: { portfolio: CalloutLink | null }) {
  if (!portfolio) {
    return null;
  }

  return (
    <section aria-labelledby="article-next-steps-portfolio-heading">
      <SectionIntro
        eyebrow="Portofoliu relevant"
        title="Vezi proiecte reale înainte să iei o decizie"
        description="Portofoliul funcționează ca dovadă: îți arată ce tip de proiecte au fost deja livrate și cum arată aplicarea practică."
        titleId="article-next-steps-portfolio-heading"
      />

      <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              {portfolio.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {portfolio.description}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={portfolio.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-primary/30 hover:text-primary"
            >
              {portfolio.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection({ caseStudies }: { caseStudies: MobileCaseStudy[] }) {
  if (caseStudies.length === 0) {
    return null;
  }

  const isSingleStudy = caseStudies.length === 1;

  return (
    <section aria-labelledby="article-next-steps-case-studies-heading">
      <SectionIntro
        eyebrow="Studii de caz relevante"
        title="Aplicații reale care arată rezultatul"
        description="Aici nu vezi doar un mockup, ci tipul de problemă rezolvată, pentru cine a fost construit produsul și ce beneficii concrete oferă."
        titleId="article-next-steps-case-studies-heading"
      />

      <ul className={`mt-6 grid gap-5 ${isSingleStudy ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        {caseStudies.map((study) => {
          const href = `/portofoliu-aplicatii-mobile/${study.slug}`;
          const lead = study.hubSpotlightParagraph?.trim() || study.shortDescription;
          const bullets = study.cardBullets.slice(0, 2);

          return (
            <li key={study.slug}>
              <article
                className={`group h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition hover:border-primary/20 hover:shadow-[0_24px_56px_rgba(15,23,42,0.08)] ${
                  isSingleStudy
                    ? "md:grid md:grid-cols-[220px_minmax(0,1fr)] md:items-center"
                    : "flex flex-col"
                }`}
              >
                <div className="border-b border-slate-100 bg-[linear-gradient(180deg,_rgba(241,245,249,0.9)_0%,_rgba(255,255,255,0.98)_100%)] md:border-r md:border-b-0">
                  <DeviceScreenshotFrame
                    src={study.image}
                    alt={study.imageAlt}
                    variant="card"
                    sizes={isSingleStudy ? "(max-width: 768px) 50vw, 220px" : "(max-width: 768px) 55vw, 180px"}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                    {study.goodForLabel ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        Pentru: {study.goodForLabel}
                      </span>
                    ) : null}
                    {study.problemSolved ? (
                      <span className="rounded-full bg-primary/8 px-3 py-1 text-primary">
                        Rezolvă: {study.problemSolved}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    <Link href={href} className="transition hover:text-primary">
                      {study.cardTitle}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {lead}
                  </p>

                  {bullets.length > 0 ? (
                    <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-slate-600">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-auto pt-6">
                    <Link
                      href={href}
                      className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Vezi studiul de caz
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ContinueReadingSection({
  currentSlug,
  clusterHub,
  relatedPosts,
}: ContinueReadingSectionProps) {
  const hasRelatedPosts = relatedPosts.some((post) => {
    const slug =
      typeof post.slug === "object" && typeof post.slug?.current === "string"
        ? post.slug.current
        : typeof post.slug === "string"
          ? post.slug
          : "";

    return Boolean(slug) && slug !== currentSlug;
  });

  if (!clusterHub && !hasRelatedPosts) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-12" aria-labelledby="article-next-steps-reading-heading">
      <SectionIntro
        eyebrow="Continuă lectura"
        title="Articole și resurse din același topic"
        description="După partea de decizie, poți continua cu resurse care aprofundează subiectul și te ajută să înțelegi contextul mai larg."
        titleId="article-next-steps-reading-heading"
      />

      {clusterHub ? (
        <div className="mt-6 rounded-[1.5rem] border border-primary/12 bg-primary/[0.035] p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                {clusterHub.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {clusterHub.description}
              </p>
            </div>
            <Link
              href={clusterHub.href}
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/5"
            >
              {clusterHub.ctaLabel}
            </Link>
          </div>
        </div>
      ) : null}

      {hasRelatedPosts ? (
        <div className="mt-6">
          <RelatedPostsSection posts={relatedPosts} currentSlug={currentSlug} variant="embedded" showHeader={false} />
        </div>
      ) : null}
    </section>
  );
}

function AuxiliaryLinksSection({ links }: { links: BlogRelatedServiceItem[] }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="article-next-steps-auxiliary-heading">
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
        <p
          id="article-next-steps-auxiliary-heading"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
        >
          Și alte resurse utile
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {links.map((item) => (
            <Link
              key={`${item.href}-${item.title}`}
              href={item.href}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary/25 hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ArticleNextStepsSection({
  currentSlug,
  service,
  portfolio,
  clusterHub,
  relatedPosts,
  caseStudies,
  manualLinks = [],
}: ArticleNextStepsSectionProps) {
  const blockedHrefs = new Set(
    [service?.href, portfolio?.href, clusterHub?.href]
      .map((item) => normalizeHref(item))
      .filter(Boolean),
  );

  const filteredManualLinks = manualLinks.filter((item) => {
    const href = normalizeHref(item.href);
    return Boolean(href) && !blockedHrefs.has(href);
  });

  const hasRelatedPosts = relatedPosts.some((post) => {
    const slug =
      typeof post.slug === "object" && typeof post.slug?.current === "string"
        ? post.slug.current
        : typeof post.slug === "string"
          ? post.slug
          : "";

    return Boolean(slug) && slug !== currentSlug;
  });

  const hasAnyContent = Boolean(
    service || portfolio || clusterHub || caseStudies.length > 0 || filteredManualLinks.length > 0 || hasRelatedPosts,
  );

  if (!hasAnyContent) {
    return null;
  }

  return (
    <section className="space-y-12" aria-label="Resurse relevante după articol">
      <PrimaryServiceSection service={service} manualLinks={filteredManualLinks} />
      {!service ? <AuxiliaryLinksSection links={filteredManualLinks} /> : null}
      <PortfolioProofSection portfolio={portfolio} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ContinueReadingSection currentSlug={currentSlug} clusterHub={clusterHub} relatedPosts={relatedPosts} />
    </section>
  );
}
