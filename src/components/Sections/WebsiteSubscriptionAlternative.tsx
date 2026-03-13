import Link from "next/link";

type Variant = "default" | "compact" | "service";

export type SubscriptionPlan = {
  slugLabel: string;
  price: string;
  periodLabel: string;
  features: string[];
  description: string;
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
};

type Props = {
  title: string;
  subtitle: string;
  monthlyLabel?: string;
  plans?: SubscriptionPlan[];
  features?: string[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  variant?: Variant;
  className?: string;
};

const defaultPlanContent = [
  {
    slugLabel: "➜ /start",
    price: "€19",
    periodLabel: "/ luna",
    features: [
      "3 Pagini",
      "Conținut",
      "SEO",
      "Modificări lunare",
      "Mail",
      "Hosting",
    ],
    description: "Pentru cei care vor să apară online fără complicații.",
    ctaText: "Începe gratuit",
    isPopular: false,
  },
  {
    slugLabel: "➜ /pro",
    price: "€29",
    periodLabel: "/ luna",
    features: [
      "5 Pagini",
      "Conținut",
      "SEO",
      "Modificări lunare",
      "Formular de contact",
      "Mail",
      "Hosting",
      "Support",
    ],
    description: "Pentru afaceri care vor mai mult.",
    ctaText: "Începe gratuit",
    isPopular: true,
  },
  {
    slugLabel: "➜ /business",
    price: "€49",
    periodLabel: "/ luna",
    features: [
      "Pagini multiple",
      "Conținut",
      "SEO",
      "Modificări lunare",
      "Formular de contact",
      "Mail",
      "Hosting",
      "Support rapid",
    ],
    description: "Pentru cei care vor un site care evoluează constant.",
    ctaText: "Începe gratuit",
    isPopular: false,
  },
];

export default function WebsiteSubscriptionAlternative({
  title,
  subtitle,
  monthlyLabel,
  plans,
  primaryCtaHref = "/contact",
  primaryCtaText = "Începe gratuit",
  variant = "default",
  className,
}: Props) {
  const resolvedPlans: SubscriptionPlan[] =
    plans && plans.length > 0
      ? plans
      : defaultPlanContent.map((plan) => ({
          ...plan,
          ctaHref: primaryCtaHref,
          ctaText: primaryCtaText,
        }));

  const spacing =
    variant === "compact"
      ? "py-12"
      : variant === "service"
        ? "py-14"
        : "py-16 lg:py-20";

  const containerWidth =
    variant === "service" ? "max-w-[1100px]" : "max-w-[1200px]";

  return (
    <section
      className={`bg-[#f4f4f5] ${spacing} ${className || ""}`}
      aria-labelledby="subscription-alternative-title"
    >
      <div className={`container ${containerWidth}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1 text-sm font-semibold text-black">
            Alternativă flexibilă
          </span>
          <h2
            id="subscription-alternative-title"
            className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
          >
            {title}
          </h2>
          <p className="text-base text-body-color sm:text-lg">{subtitle}</p>
          {monthlyLabel && (
            <p className="mt-3 text-sm font-medium text-black/70">{monthlyLabel}</p>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resolvedPlans.map((plan) => (
            <div
              key={plan.slugLabel}
              className="flex h-full flex-col rounded-[28px] border border-black/10 bg-white p-8"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-3xl font-bold leading-none tracking-tight text-black">
                  {plan.slugLabel}
                </p>
                {plan.isPopular ? (
                  <span className="rounded-lg bg-[#f6c900] px-3 py-1 text-xs font-semibold text-black">
                    {"// cel_mai_popular"}
                  </span>
                ) : null}
              </div>

              <div className="mb-7 flex items-end gap-2">
                <span className="text-5xl leading-none font-bold tracking-tight text-black">
                  {plan.price}
                </span>
                <span className="text-2xl font-medium text-black/80">
                  {plan.periodLabel}
                </span>
              </div>

              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-base text-black/95">
                    <span aria-hidden="true">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-2xl leading-relaxed text-black/90">
                {plan.description}
              </p>

              <Link
                href={plan.ctaHref}
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-base font-medium transition ${
                  plan.isPopular
                    ? "bg-[#f6c900] text-black hover:bg-[#dfb700]"
                    : "bg-black text-white hover:bg-black/90"
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
