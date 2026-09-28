import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  HeartPulse,
  Utensils,
  GraduationCap,
  BriefcaseBusiness,
  Car,
  Sparkles,
  CalendarDays,
  Users,
  Store,
  Rocket,
} from "lucide-react";

const appTypes = [
  {
    title: "Aplicații eCommerce",
    icon: ShoppingCart,
    description:
      "Catalog de produse, comenzi și plăți online, stocuri sincronizate și notificări push. Poți adăuga promoții și programe de fidelizare pentru clienții care revin.",
  },
  {
    title: "Aplicații Healthcare",
    icon: HeartPulse,
    description:
      "Programări la medic, consultații la distanță și jurnale de sănătate. Fluxuri pentru pacienți și specialiști, cu acces la informații în funcție de rol.",
  },
  {
    title: "Aplicații Restaurant & HoReCa",
    icon: Utensils,
    description:
      "Meniu digital, comenzi de mâncare, rezervări de mese și plăți din aplicație. Statusul livrării și ofertele de fidelizare pot completa experiența clienților.",
  },
  {
    title: "Aplicații educaționale",
    icon: GraduationCap,
    description:
      "Cursuri video, lecții interactive, teste și urmărirea progresului. Acces gratuit sau pe bază de abonament, cu instrumente de administrare pentru profesori și creatori.",
  },
  {
    title: "Aplicații Business & Enterprise",
    icon: BriefcaseBusiness,
    description:
      "CRM mobil, pontaj, rapoarte și aprobări interne. Organizăm activitatea echipelor din teren, intervențiile și stocurile în fluxuri conectate la sistemele companiei.",
  },
  {
    title: "Aplicații Taxi & Logistică",
    icon: Car,
    description:
      "Solicitări de curse, alocarea șoferilor și urmărire GPS. Pentru transport și livrări, putem include rute, statusuri în timp real, plăți și administrarea flotei.",
  },
  {
    title: "Aplicații cu AI & Machine Learning",
    icon: Sparkles,
    description:
      "Asistenți conversaționali, recomandări personalizate și procesarea imaginilor sau a vocii. Alegem funcțiile AI în funcție de utilitatea lor și de datele disponibile.",
  },
  {
    title: "Aplicații de programări & rezervări",
    icon: CalendarDays,
    description:
      "Calendare și intervale disponibile pentru saloane, clinici, hoteluri și servicii locale. Conturi de client, confirmări, notificări de reamintire și plăți în avans.",
  },
  {
    title: "Aplicații Social & Community",
    icon: Users,
    description:
      "Comunități, rețele de nișă și aplicații de dating, cu profiluri și mesagerie. Pot include grupuri, conținut pentru membri, abonamente și instrumente de moderare.",
  },
  {
    title: "Aplicații Marketplace & servicii",
    icon: Store,
    description:
      "Conectează clienții cu furnizorii într-o singură aplicație: listări, căutare, cereri și recenzii. Conturi cu roluri distincte, plăți și administrarea tranzacțiilor.",
  },
  {
    title: "MVP pentru startup-uri",
    icon: Rocket,
    description:
      "O primă versiune concentrată pe funcțiile esențiale ale ideii tale. Stabilim fluxul principal, pregătim lansarea și construim baza pentru dezvoltările următoare.",
  },
];

type Props = {
  ctaHref: string;
};

export default function MobileAppTypesSection({ ctaHref }: Props) {
  return (
    <section
      aria-labelledby="tipuri-aplicatii-mobile"
      className="bg-slate-50 py-14 sm:py-16"
    >
      <div className="container px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold tracking-[0.22em] uppercase">
            Ce construim
          </span>
          <h2
            id="tipuri-aplicatii-mobile"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Ce tipuri de aplicații mobile dezvoltăm
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            De la aplicații pentru clienți la instrumente pentru echipa ta,
            pornim de la ce are nevoie afacerea ta. Iată câteva direcții și
            funcționalități pe care le putem include.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {appTypes.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary inline-flex shrink-0 rounded-xl p-3">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-base leading-6 font-semibold text-slate-950">
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-600">
            În funcție de proiect, integrăm Firebase, Stripe, CRM, ERP și
            API-uri externe pentru a conecta aplicația cu instrumentele pe care
            le folosești deja.
          </p>
          <p className="mt-5 text-base font-medium text-slate-900">
            Ideea ta combină mai multe categorii? Spune-ne ce vrei să poată face
            utilizatorii.
          </p>
          <Link
            href={ctaHref}
            className="bg-primary hover:bg-primary/90 focus-visible:outline-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto sm:text-base"
          >
            Cere estimare pentru aplicația ta
            <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
