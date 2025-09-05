import PageTitle from "@/components/Common/PageTitle";

export const metadata = {
  title: "Politica de confidentialitate – prelucrare date | Web Dynamicx",
  description: "Politica de confidentialitate si prelucrare date pentru www.webdynamicx.ro. Afla cum colectam, folosim si protejam informatiile tale.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageTitle
        pageTitle="Politica de confidențialitate"
        pageDescription="Cum colectăm, folosim și protejăm datele tale."
      />

      <section className="bg-white pb-16 pt-[90px]">
        <div className="container prose max-w-none prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4">
          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">1. Colectarea de informații</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Website-ul www.webdynamicx.ro colectează informații atunci când se completează formularul de contact. Informațiile colectate includ numele, adresa de e-mail, numărul de telefon și mesajul transmis. În plus, primim automat informații precum adresa IP, software/hardware și pagina solicitată.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">2. Utilizarea de informații</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Informațiile pot fi folosite pentru personalizarea experienței, îmbunătățirea site-ului, asistență clienți, contact prin e-mail, administrarea de promoții/sondaje.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">3. Protejarea confidențialității</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Suntem singurii proprietari ai informațiilor colectate pe acest site. Datele tale nu vor fi vândute sau transferate fără consimțământ, cu excepția situațiilor necesare pentru îndeplinirea unei cereri sau tranzacții.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">4. Dezvăluirea părților terțe</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Nu vindem sau transferăm informații personale către terți, cu excepția partenerilor de încredere care ne asistă în operarea site-ului, sub obligații de confidențialitate, sau când este necesar legal.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">5. Protejarea informațiilor</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Respectăm legislația aplicabilă și aplicăm măsuri de securitate pentru protejarea datelor. Accesul este permis doar personalului autorizat. Serverele sunt păstrate într-un mediu sigur. Folosim cookie-uri pentru a îmbunătăți experiența, fără a lega date personale direct.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">6. Google Analytics</span>
          </h2>
          <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Acest site poate utiliza opțiuni Google Analytics Advertising. Nu combinăm date personale cu cele colectate prin Google Advertising. Vizitatorii pot opta pentru excludere prin setările Ads sau alte mijloace disponibile.
          </p>

          <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            <span className="text-primary">7. Consimțământul</span>
          </h2>
          <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
            Prin utilizarea site-ului, ești de acord cu această politică de confidențialitate.
          </p>
        </div>
      </section>
    </>
  );
}


