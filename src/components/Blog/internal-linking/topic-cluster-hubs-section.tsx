import Link from "next/link";

type TopicClusterHubCard = {
  id: string;
  title: string;
  intro: string;
  hubHref: string;
  serviceHref: string;
  serviceCtaLabel: string;
  postCount: number;
};

type TopicClusterHubsSectionProps = {
  items: TopicClusterHubCard[];
};

export default function TopicClusterHubsSection({ items }: TopicClusterHubsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="container bg-white pt-14 sm:pt-16">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.04)] sm:p-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Clustere SEO</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Explorează articolele pe teme strategice
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Am grupat articolele în hub-uri tematice care completează direct paginile de servicii și te ajută să
            găsești mai repede ghidurile relevante pentru web, SEO și produse digitale.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.postCount} articole publicate
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">{item.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={item.hubHref}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Vezi hub-ul
                </Link>
                <Link
                  href={item.serviceHref}
                  className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
                >
                  {item.serviceCtaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
