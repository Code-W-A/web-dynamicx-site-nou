import PageTitle from "@/components/Common/PageTitle";
import { Metadata } from "next";

const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Politica de cookies – utilizare module cookie | ${siteName}`,
  description:
    "Politica de cookies pentru Web Dynamicx: ce sunt cookie-urile, ce folosim, cum le controlezi si preferintele tale de confidențialitate.",
  alternates: { canonical: `${siteURL}/politica-cookies` },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <PageTitle
        pageTitle="Politica de cookies"
        pageDescription="Informatii despre modulele cookie folosite pe site."
      />

      <section className="bg-white pb-16 pt-[90px]">
        <div className="container prose max-w-none prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4">
          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">1. Ce sunt cookie-urile?</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Cookie-urile sunt fisiere mici stocate pe dispozitivul tau de catre browser pentru a ajuta site-ul sa
            functioneze corect, sa retina preferinte si sa imbunatateasca experienta.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">2. Tipuri de cookie-uri folosite</span>
          </h2>
          <ul className="list mb-6 list-inside list-disc">
            <li className="mb-2 text-base text-body-color">Necesare: pentru functionalitati de baza (ex. securitate, sesiune).</li>
            <li className="mb-2 text-base text-body-color">Preferinte: pentru a memora setarile tale (ex. tema, limba).</li>
            <li className="mb-2 text-base text-body-color">Statistici: pentru a masura traficul si a imbunatati continutul.</li>
            <li className="mb-2 text-base text-body-color">Marketing: pentru afisarea de continut relevant (doar cu consimtamant, daca este cazul).</li>
          </ul>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">3. Gestionarea cookie-urilor</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Poti gestiona si sterge cookie-urile din setarile browserului. Unele functionalitati pot fi afectate daca
            dezactivezi cookie-urile necesare. Daca folosim bannere de consimtamant, iti poti actualiza optiunile in orice moment.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">4. Temei legal si durata</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Cookie-urile necesare se bazeaza pe interes legitim (functionalitatea site-ului). Cookie-urile de statistici sau
            marketing se plaseaza doar cu consimtamant. Durata variaza in functie de tip (sesiune sau persistente).
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">5. Actualizari</span>
          </h2>
          <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Putem actualiza aceasta politica periodic. Orice modificari vor fi publicate pe aceasta pagina.
          </p>
        </div>
      </section>
    </>
  );
}


