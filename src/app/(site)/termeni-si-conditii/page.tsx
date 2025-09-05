import PageTitle from "@/components/Common/PageTitle";
import { Metadata } from "next";

const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Termeni si conditii – utilizare site | ${siteName}`,
  description:
    "Termeni si conditii pentru utilizarea site-ului Web Dynamicx: informatii despre drepturi, responsabilitati si limitari. Te rugam sa citesti cu atentie.",
  alternates: { canonical: `${siteURL}/termeni-si-conditii` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageTitle
        pageTitle="Termeni si conditii"
        pageDescription="Conditii de utilizare a site-ului Web Dynamicx."
      />

      <section className="bg-white pb-16 pt-[90px]">
        <div className="container prose max-w-none prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4">
          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">1. Acceptarea termenilor</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Prin accesarea si utilizarea site-ului {siteName}, confirmi ca ai citit, ai inteles si esti de acord cu
            acesti termeni si conditii. Daca nu esti de acord, te rugam sa nu folosesti site-ul.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">2. Drepturi de proprietate intelectuala</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Continutul site-ului (texte, imagini, elemente grafice) este proprietatea {siteName} sau a partenerilor
            si este protejat de legislatia aplicabila. Utilizarea neautorizata este interzisa.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">3. Utilizare permisa</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Site-ul poate fi folosit doar in scopuri legale si personale. Este interzisa incarcarea sau transmiterea
            de materiale abuzive, ilegale sau care incalca drepturile tertilor.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">4. Limitarea raspunderii</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Informatiile sunt furnizate &quot;ca atare&quot;. Nu garantam lipsa erorilor sau disponibilitatea continua a
            serviciilor. {siteName} nu raspunde pentru pierderi rezultate din utilizarea site-ului.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">5. Link-uri externe</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Site-ul poate contine link-uri catre site-uri externe. Nu avem control asupra continutului sau politicilor
            acestora si nu ne asumam responsabilitatea pentru ele.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">6. Modificari</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Ne rezervam dreptul de a modifica termenii si continutul site-ului fara notificare prealabila. Versiunea
            actualizata va fi disponibila pe aceasta pagina.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">7. Contact</span>
          </h2>
          <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Pentru intrebari legate de termeni si conditii, ne poti contacta la adresa: webdynamicx@gmail.com.
          </p>
        </div>
      </section>
    </>
  );
}


