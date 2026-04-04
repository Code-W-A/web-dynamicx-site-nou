import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDashed,
  Layers3,
  LineChart,
  Megaphone,
  Rocket,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/Common/Breadcrumbs";
import Timeline from "@/components/Common/Timeline";
import type { ServiceLandingCard, ServiceLandingData } from "./service-landing-types";

const valuePropIcons = [Rocket, Layers3, BadgeCheck, LineChart, ShieldCheck, Settings2] as const;
const reasonIcons = [BadgeCheck, Rocket, Layers3, ShieldCheck, CircleDashed, Megaphone] as const;
const comparisonIcons = [Settings2, ShieldCheck, LineChart, Megaphone] as const;

type Props = {
  data: ServiceLandingData;
  breadcrumbs?: BreadcrumbItem[];
  clusterArticlesSection?: ReactNode;
  portfolioSection?: ReactNode;
};

function SectionHeader({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">{eyebrow || "Context"}</span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{intro}</p>
    </div>
  );
}

function OptionalImageCard({ item, badgeLabel }: { item: ServiceLandingCard; badgeLabel?: string }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      {item.image ? (
        <div className="flex items-center justify-center bg-slate-100/80 p-5">
          <Image
            src={item.image}
            alt={item.alt || item.title}
            width={1800}
            height={1200}
            sizes="(max-width: 1280px) 100vw, 31vw"
            className="h-auto max-h-[210px] w-full object-contain"
          />
        </div>
      ) : null}
      <div className="p-6">
        {badgeLabel ? (
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {badgeLabel}
          </span>
        ) : null}
        <h3 className={`text-xl font-bold text-slate-950 ${badgeLabel ? "mt-4" : ""}`}>{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
      </div>
    </article>
  );
}

export default function ServiceLandingTemplate({ data, breadcrumbs, clusterArticlesSection, portfolioSection }: Props) {
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
                {data.hero.eyebrow}
              </span>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                {data.hero.title}
              </h1>
              <p className="mt-5 max-w-[42rem] text-base leading-8 text-slate-600 sm:text-[1.15rem]">{data.hero.subtitle}</p>

              {data.hero.trustLine && data.hero.trustLinkHref && data.hero.trustLinkLabel ? (
                <p className="mt-5 hidden max-w-[42rem] flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-slate-600 sm:flex sm:text-base">
                  <span className="inline-flex items-center gap-2 font-medium text-slate-700">
                    <BadgeCheck size={16} className="text-primary" />
                    {data.hero.trustLine}
                  </span>
                  <Link
                    href={data.hero.trustLinkHref}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {data.hero.trustLinkLabel}
                  </Link>
                </p>
              ) : null}

              <ul className="mt-6 space-y-3">
                {data.hero.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div id="contact-rapid" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={data.hero.ctaPrimary.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(74,108,247,0.28)] transition hover:bg-primary/90 sm:w-auto"
                >
                  {data.hero.ctaPrimary.label}
                  <ArrowRight size={18} />
                </a>
                <a
                  href={data.hero.ctaSecondary.href}
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:border-primary/30 hover:text-primary sm:w-auto"
                >
                  {data.hero.ctaSecondary.label}
                </a>
              </div>

              <p className="mt-3 max-w-[42rem] text-sm leading-7 text-slate-500 sm:text-base">{data.hero.ctaMicrocopy}</p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-6 hidden h-28 w-28 rounded-full bg-primary/15 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-2 hidden h-36 w-36 rounded-full bg-sky-200/60 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={data.image}
                      alt={data.ogAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-transparent to-primary/20" />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {data.hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                      <div className="text-xs uppercase tracking-[0.24em] text-white/50">{stat.label}</div>
                      <div className="mt-2 text-sm font-semibold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <div className="container px-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeader eyebrow={data.context.eyebrow} title={data.context.title} intro={data.context.intro} />

            <div className="grid gap-4 sm:grid-cols-2">
              {data.context.cards.map((card) => (
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

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{data.context.proofTitle}</p>
            {data.context.proofItems.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
            {data.context.proofLink ? (
              <Link
                href={data.context.proofLink.href}
                className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
              >
                {data.context.proofLink.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader
            eyebrow={data.valueProps.eyebrow}
            title={data.valueProps.title}
            intro={data.valueProps.intro}
            centered
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.valueProps.items.map((item, index) => {
              const Icon = valuePropIcons[index % valuePropIcons.length];
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
              <SectionHeader eyebrow={data.audience.eyebrow} title={data.audience.title} intro={data.audience.intro} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {data.audience.items.map((item) => (
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
            {data.audience.outro}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader eyebrow={data.useCases.eyebrow} title={data.useCases.title} intro={data.useCases.intro} />
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {data.useCases.featured.map((item) => (
              <OptionalImageCard key={item.title} item={item} badgeLabel="Use case" />
            ))}
          </div>

          {data.useCases.additional && data.useCases.additional.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {data.useCases.additional.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          ) : null}

          {data.useCases.outro ? (
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              {data.useCases.outro}{" "}
              {data.useCases.outroLink ? (
                <Link href={data.useCases.outroLink.href} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {data.useCases.outroLink.label}
                </Link>
              ) : null}
            </p>
          ) : null}
        </div>
      </section>

      {data.comparison ? (
        <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
          <div className="container px-5">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="max-w-xl">
                <SectionHeader eyebrow={data.comparison.eyebrow} title={data.comparison.title} intro={data.comparison.intro} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {data.comparison.items.map((item, index) => {
                  const Icon = comparisonIcons[index % comparisonIcons.length];
                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                    >
                      <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-2 text-primary">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            {data.comparison.outro ? (
              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {data.comparison.outro}{" "}
                {data.comparison.outroLink ? (
                  <Link
                    href={data.comparison.outroLink.href}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {data.comparison.outroLink.label}
                  </Link>
                ) : null}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader eyebrow={data.process.eyebrow} title={data.process.title} intro={data.process.intro} />
          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-7">
            <Timeline ariaLabel={`Etape ${data.title}`} items={data.process.steps} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader
            eyebrow={data.deliverables.eyebrow}
            title={data.deliverables.title}
            intro={data.deliverables.intro}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.deliverables.groups.map((group) => (
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
          {data.deliverables.outro ? (
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{data.deliverables.outro}</p>
          ) : null}
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container px-5">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_340px]">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {data.pricing.eyebrow || "Buget"}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-slate-950">{data.pricing.budgetTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{data.pricing.budgetText}</p>
                <div className="mt-5 rounded-3xl bg-primary/8 px-5 py-4 text-base font-semibold text-primary">
                  {data.pricing.budgetHighlight}
                </div>
                <ul className="mt-5 space-y-3">
                  {data.pricing.budgetFactors.map((item) => (
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
                <h2 className="mt-4 text-2xl font-bold">{data.pricing.durationTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">{data.pricing.durationText}</p>
                <div className="mt-5 rounded-3xl border border-white/10 bg-white/6 px-5 py-4 text-base font-semibold text-white">
                  {data.pricing.durationHighlight}
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">{data.pricing.durationNote}</p>
              </article>
            </div>

            <aside className="rounded-[1.75rem] border border-primary/15 bg-[linear-gradient(180deg,_rgba(74,108,247,0.08),_rgba(255,255,255,1))] p-6 shadow-[0_20px_60px_rgba(74,108,247,0.12)]">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Estimare rapidă</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{data.pricing.cta.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{data.pricing.cta.text}</p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={data.pricing.cta.primary.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(74,108,247,0.28)] transition hover:bg-primary/90"
                >
                  {data.pricing.cta.primary.label}
                </a>
                {data.pricing.cta.secondary ? (
                  <a
                    href={data.pricing.cta.secondary.href}
                    className="inline-flex w-full items-center justify-center rounded-full border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary/30 hover:text-primary/80"
                  >
                    {data.pricing.cta.secondary.label}
                  </a>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{data.pricing.cta.microcopy}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_rgba(248,250,252,1),_rgba(255,255,255,1))] py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader eyebrow={data.reasons.eyebrow} title={data.reasons.title} intro={data.reasons.intro} centered />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.reasons.items.map((item, index) => {
              const Icon = reasonIcons[index % reasonIcons.length];
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
          {data.reasons.outro ? (
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-slate-600 sm:text-lg">{data.reasons.outro}</p>
          ) : null}
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container px-5">
          <SectionHeader eyebrow={data.faq.eyebrow} title={data.faq.title} intro={data.faq.intro} centered />
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {data.faq.items.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.resources ? (
        <section className="py-14 sm:py-16">
          <div className="container px-5">
            <SectionHeader eyebrow={data.resources.eyebrow} title={data.resources.title} intro={data.resources.intro} />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {data.resources.items.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50/75 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {item.ctaLabel}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {portfolioSection}

      {clusterArticlesSection}

      <section className="py-12 sm:py-14">
        <div className="container px-5">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              {data.relatedServices.eyebrow || "Servicii conexe"}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{data.relatedServices.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{data.relatedServices.description}</p>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-6">
            <div className="flex flex-wrap gap-3">
              {data.relatedServices.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-primary/25 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 sm:pb-20">
        <div className="container px-5">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_40%,_#4A6CF7_140%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {data.finalCta.eyebrow || "Contact"}
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{data.finalCta.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">{data.finalCta.text}</p>
                <p className="mt-4 text-base leading-8 text-white/72 sm:text-lg">{data.finalCta.supporting}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={data.finalCta.primary.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
                >
                  {data.finalCta.primary.label}
                </a>
                {data.finalCta.secondary ? (
                  <a
                    href={data.finalCta.secondary.href}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                  >
                    {data.finalCta.secondary.label}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
