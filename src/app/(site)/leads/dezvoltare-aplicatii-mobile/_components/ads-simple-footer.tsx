import Link from "next/link";

const legalLinks = [
  {
    label: "Politica de confidențialitate",
    href: "/politica-de-confidentialitate",
  },
  { label: "Termeni și condiții", href: "/termeni-si-conditii" },
  { label: "Politica de cookies", href: "/politica-cookies" },
];

export default function AdsSimpleFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-white">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
              Web Dynamicx
            </p>
            <p className="mt-3 text-sm leading-7 text-white/78 sm:text-base">
              Landing page dedicată campaniilor Google Ads pentru dezvoltare
              aplicații mobile, cu focus pe cereri de ofertă și clarificarea
              rapidă a MVP-ului sau a produsului tău.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/78 md:items-end">
            <a href="tel:+40774550758" className="transition hover:text-white">
              0774 550 758
            </a>
            <a
              href="mailto:webdynamicx@gmail.com"
              className="transition hover:text-white"
            >
              webdynamicx@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/72">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/55">
          Web Dynamicx — Agenție web, SEO și aplicații mobile ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
