import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDashed,
  Layers3,
  Rocket,
  Smartphone,
  Store,
} from "lucide-react";
import FeaturedPortfolioSection from "@/app/(site)/portofoliu-aplicatii-mobile/_components/featured-portfolio-section";
import { getServicePageFeaturedPortfolioStudies } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/Common/Breadcrumbs";
import Timeline from "@/components/Common/Timeline";
import MobileAppServiceFaq from "./mobile-app-service-faq";
import MobileAppArticlesSection from "./mobile-app-articles-section";
import { mobileAppsServicePageData } from "./mobile-app-service-data";
import MobileAppServiceSidebar from "./mobile-app-service-sidebar";
import MobileAppServiceTestimonials from "./mobile-app-service-testimonials";

const valuePropIcons = [Rocket, Smartphone, Layers3, BadgeCheck, CircleDashed, Store] as const;
const reasonIcons = [BadgeCheck, Rocket, Layers3, Smartphone, CircleDashed, Store] as const;

type Props = {
  breadcrumbs?: BreadcrumbItem[];
};

export default function MobileAppServicePageContent({ breadcrumbs }: Props) {
  const {
    hero,
    valueProps,
    audience,
    appTypes,
    technology,
    process,
    deliverables,
    pricing,
    reasons,
    finalCta,
    sidebarSection,
  } = mobileAppsServicePageData;

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.12),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_72%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container relative px-5 pb-14 pt-[132px] sm:pb-16 sm:pt-[148px] lg:pb-20">
          {breadcrumbs ? (
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbs} compact />
            </div>
          ) : null}

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.98fr)] lg:gap-14">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {hero.eyebrow}
              </span>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[42rem] text-base leading-8 text-slate-600 sm:text-[1.15rem]">{hero.subtitle}</p>

              <p className="mt-5 hidden max-w-[42rem] flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-slate-600 sm:flex sm:text-base">
                <span className="inline-flex items-center gap-2 font-medium text-slate-700">
                  <BadgeCheck size={16} className="text-primary" />
                  {hero.trustLine}
                </span>
                <Link href={hero.trustLinkHref} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {hero.trustLinkLabel}
                </Link>
              </p>

              <ul className="mt-6 space-y-3">
                {hero.bullets.map((item, index) => (
                  <li
                    key={item}
                    className={`gap-3 text-sm leading-7 text-slate-700 sm:flex sm:text-base ${index === hero.bullets.length - 1 ? "hidden" : "flex"}`}
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div id="contact-rapid" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={hero.ctaPrimary.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(74,108,247,0.28)] transition hover:bg-primary/90 sm:w-auto"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight size={18} />
                </a>
                <a
                  href={hero.ctaSecondary.href}
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:border-primary/30 hover:text-primary sm:w-auto"
                >
                  {hero.ctaSecondary.label}
                </a>
              </div>

              <p className="mt-3 max-w-[42rem] text-sm leading-7 text-slate-500 sm:text-base">{hero.ctaMicrocopy}</p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-6 hidden h-28 w-28 rounded-full bg-primary/15 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-2 hidden h-36 w-36 rounded-full bg-sky-200/60 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={mobileAppsServicePageData.image}
                      alt={mobileAppsServicePageData.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-transparent to-primary/20" />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/50">Platforme</div>
                    <div className="mt-2 text-sm font-semibold">iOS + Android</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/50">Livrare</div>
                    <div className="mt-2 text-sm font-semibold">MVP și aplicații scalabile</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/50">Store-uri</div>
                    <div className="mt-2 text-sm font-semibold">App Store și Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <div className="container px-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Context rapid</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{hero.contextTitle}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{hero.contextIntro}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{hero.proofTitle}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {hero.proofItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                  <Link
                    href={hero.proofLinkHref}
                    className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
                  >
                    {hero.proofLinkLabel}
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {hero.contextCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Avantaje clare</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Dezvoltare aplicații mobile pentru firme care vor claritate, viteză și structură bună de produs
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {valueProps.map((item, index) => {
              const Icon = valuePropIcons[index];
              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex rounded-2xl bg-primary p-3 text-white shadow-[0_12px_28px_rgba(74,108,247,0.18)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950 sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container px-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="max-w-[42rem]">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Pentru cine este</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{audience.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{audience.intro}</p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Dacă vrei și exemple concrete de execuție, poți vedea și{" "}
                <Link href="/portofoliu-aplicatii-mobile" className="font-semibold text-primary underline-offset-4 hover:underline">
                  studiile de caz cu aplicații mobile publicate
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {audience.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-2 text-primary">
                    <Check size={18} />
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:text-base">
            {audience.outro}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Tipuri de aplicații</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{appTypes.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{appTypes.intro}</p>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Pentru exemple publicate și fluxuri deja livrate, poți vedea și{" "}
              <Link href="/portofoliu-aplicatii-mobile" className="font-semibold text-primary underline-offset-4 hover:underline">
                portofoliul de aplicații mobile
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {appTypes.featured.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-center bg-slate-100/80 p-5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={2400}
                    height={1400}
                    sizes="(max-width: 1280px) 100vw, 31vw"
                    className="h-auto max-h-[210px] w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Tip de aplicație
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {appTypes.additional.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
        <div className="container px-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Decizie tehnică</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{technology.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{technology.intro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {technology.options.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-2 text-primary">
                    <Smartphone size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{technology.outro}</p>
          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Dacă aplicația mobilă completează și un flux de vânzare online, putem construi sau extinde și partea de{" "}
            <Link
              href="/servicii/creare-magazin-online"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              magazin online
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Proces clar</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{process.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{process.intro}</p>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-7">
            <Timeline
              ariaLabel="Etape dezvoltare aplicații mobile"
              items={process.steps.map((step) => ({
                id: step.id,
                title: step.title,
                subtitle: step.subtitle,
                description: step.description,
                duration: step.duration,
                tags: [...step.tags],
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container px-5">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Livrabile</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{deliverables.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{deliverables.intro}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {deliverables.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{deliverables.outro}</p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_340px]">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Buget</span>
                <h2 className="mt-4 text-2xl font-bold text-slate-950">{pricing.budgetTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{pricing.budgetText}</p>
                <div className="mt-5 rounded-3xl bg-primary/8 px-5 py-4 text-base font-semibold text-primary">
                  {pricing.budgetHighlight}
                </div>
                <ul className="mt-5 space-y-3">
                  {pricing.budgetFactors.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                        <Check size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Durată</span>
                <h2 className="mt-4 text-2xl font-bold">{pricing.durationTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">{pricing.durationText}</p>
                <div className="mt-5 rounded-3xl border border-white/10 bg-white/6 px-5 py-4 text-base font-semibold text-white">
                  8-10 săptămâni pentru multe proiecte de tip primă versiune (MVP)
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">{pricing.durationNote}</p>
              </article>
            </div>

            <aside className="rounded-[1.75rem] border border-primary/15 bg-[linear-gradient(180deg,_rgba(74,108,247,0.08),_rgba(255,255,255,1))] p-6 shadow-[0_20px_60px_rgba(74,108,247,0.12)]">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Estimare rapidă</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{pricing.cta.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{pricing.cta.text}</p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={pricing.cta.primaryHref}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(74,108,247,0.28)] transition hover:bg-primary/90"
                >
                  {pricing.cta.primaryLabel}
                </a>
                <a
                  href={pricing.cta.secondaryHref}
                  className="inline-flex w-full items-center justify-center rounded-full border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary/30 hover:text-primary/80"
                >
                  {pricing.cta.secondaryLabel}
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pricing.cta.microcopy}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Dacă preferi să trimiți brief-ul complet, poți folosi și{" "}
                <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                  formularul de contact
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_rgba(248,250,252,1),_rgba(255,255,255,1))] py-14 sm:py-16">
        <div className="container px-5">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">De ce noi</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{reasons.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{reasons.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.items.map((item, index) => {
              const Icon = reasonIcons[index];
              return (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{item}</p>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-slate-600 sm:text-lg">{reasons.outro}</p>
        </div>
      </section>

      <MobileAppServiceTestimonials />

      <FeaturedPortfolioSection studies={getServicePageFeaturedPortfolioStudies()} embeddedOnServicePage />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container px-5">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Întrebări frecvente</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              FAQ despre dezvoltarea aplicațiilor mobile
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Răspunsuri clare la întrebările pe care le primim frecvent despre aplicații mobile iOS și Android, backend,
              publicare în store-uri și suport după lansare.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <MobileAppServiceFaq />
          </div>
        </div>
      </section>

      <MobileAppArticlesSection />

      <section className="py-12 sm:py-14">
        <div className="container px-5">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">{sidebarSection.eyebrow}</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{sidebarSection.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{sidebarSection.description}</p>
          </div>
          <div className="mt-6">
            <MobileAppServiceSidebar />
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 sm:pb-20">
        <div className="container px-5">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_40%,_#4A6CF7_140%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Contact</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{finalCta.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">{finalCta.text}</p>
                <p className="mt-4 text-base leading-8 text-white/72 sm:text-lg">{finalCta.supporting}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={finalCta.primaryHref}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
                >
                  {finalCta.primaryLabel}
                </a>
                <a
                  href={finalCta.secondaryHref}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  {finalCta.secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
