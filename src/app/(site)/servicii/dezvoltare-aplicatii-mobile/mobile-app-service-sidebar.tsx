import Link from "next/link";
import { serviceData } from "@/static-data/service";

export default function MobileAppServiceSidebar() {
  const relatedServices = serviceData.filter((service) =>
    ["web-design", "creare-site-web", "creare-magazin-online", "optimizare-seo"].includes(service.slug),
  );

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-6">
      <div className="flex flex-wrap gap-3">
        {relatedServices.map((service) => (
          <Link
            key={service.id}
            href={`/servicii/${service.slug}`}
            className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-primary/25 hover:text-primary"
          >
            {service.title}
          </Link>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        Dacă proiectul include și UX/UI, un website de prezentare, un magazin online sau suport SEO pentru lansare,
        putem conecta și aceste servicii într-un plan coerent, fără să încărcăm inutil prima etapă a aplicației.
      </p>
    </div>
  );
}
