import Image from "next/image";
import Timeline from "@/components/Common/Timeline";
import CallToActionCard from "@/components/Service/CallToActionCard";
import ServiceTabButtons from "@/components/Service/ServiceTabButtons";
import { serviceData } from "@/static-data/service";
import { mobileAppsServicePageData } from "./mobile-app-service-data";

export default function MobileAppServicePageContent() {
  return (
    <section className="bg-gray-50 pt-[90px] pb-20">
      <div className="container">
        <div className="-mx-5 lg:clearfix">
          <div className="w-full px-5 lg:float-left lg:w-4/12">
            <div className="space-y-10">
              <ServiceTabButtons serviceData={serviceData} />
              <CallToActionCard />
            </div>
          </div>

          <div className="w-full px-5 lg:w-auto lg:pl-10">
            <div>
              <div className="relative mb-8 flow-root aspect-34/20 rounded-xs bg-stone-100">
                <Image
                  src={mobileAppsServicePageData.image}
                  alt={mobileAppsServicePageData.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="w-full object-cover object-center"
                />
              </div>
              <h2 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
                {mobileAppsServicePageData.title}
              </h2>

              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Construim <strong>aplicatii mobile</strong> personalizate pentru companii, startup-uri si antreprenori care vor
                sa lanseze un produs digital util, stabil si usor de folosit. Dezvoltam aplicatii pentru iOS si Android,
                pornind de la obiectivele reale ale afacerii tale: validarea rapida a unei idei, automatizarea unor procese,
                cresterea vanzarilor sau imbunatatirea relatiei cu clientii.
              </p>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Un proiect de dezvoltare aplicatii mobile nu inseamna doar design atractiv sau cod bine scris. O aplicatie buna
                trebuie sa rezolve o nevoie clara, sa ofere o experienta simpla pentru utilizator si sa poata fi extinsa in
                siguranta pe masura ce produsul creste. De aceea, abordam fiecare proiect strategic: analizam cerintele,
                definim functionalitatile esentiale, alegem tehnologia potrivita si livram o solutie scalabila, pregatita pentru
                lansare si evolutie ulterioara.
              </p>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Fie ca ai nevoie de un MVP lansat rapid sau de o aplicatie mobila complexa, cu backend, administrare,
                notificari si integrari, iti oferim un proces clar si o solutie adaptata bugetului si obiectivelor tale.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Servicii de dezvoltare aplicatii mobile pentru firme si startup-uri</span>
              </h2>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Oferim servicii complete de dezvoltare aplicatii mobile, de la etapa de analiza si definire a produsului pana la
                publicarea in App Store si Google Play. Ne adresam companiilor care vor sa lanseze o aplicatie de la zero, dar
                si firmelor care au deja o idee, un prototip sau un sistem intern si vor sa il transforme intr-un produs mobil
                performant.
              </p>
              <ul className="list mb-6 list-inside list-disc">
                <li className="mb-2 text-base text-body-color">startup-uri care vor sa valideze rapid o idee printr-un MVP;</li>
                <li className="mb-2 text-base text-body-color">companii care au nevoie de digitalizarea proceselor interne;</li>
                <li className="mb-2 text-base text-body-color">afaceri care vor o aplicatie pentru clienti, comenzi, rezervari sau plati;</li>
                <li className="mb-2 text-base text-body-color">branduri care vor sa isi extinda prezenta digitala prin iOS si Android;</li>
                <li className="mb-2 text-base text-body-color">firme care au nevoie de integrare intre aplicatie, backend, panou de administrare si alte sisteme externe.</li>
              </ul>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Punem accent pe claritate, functionalitate si rezultate concrete. Nu incarcam produsul inutil din prima etapa, ci
                definim ce este cu adevarat necesar pentru lansare, astfel incat investitia sa fie eficienta.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Ce tipuri de aplicatii mobile dezvoltam</span>
              </h2>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Putem construi aplicatii mobile personalizate pentru o gama larga de industrii si modele de business. In functie
                de nevoile proiectului, dezvoltam:
              </p>
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Aplicatii de booking si programari</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru saloane, clinici, specialisti, servicii locale sau business-uri bazate pe rezervari. Pot include calendar,
                sloturi disponibile, cont client, notificari si plati online.
              </p>
              <Image
                src="/images/services/aplicatie-mobila-booking.webp"
                alt="Aplicatie mobila de booking si programari"
                width={2400}
                height={1400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="mb-6 h-auto w-full rounded-lg"
              />
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Aplicatii de e-commerce</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru magazine online care vor o experienta mobila mai rapida si mai eficienta. Se pot integra cu produse,
                checkout, cont utilizator, promotii, notificari push si campanii de retentie.
              </p>
              <Image
                src="/images/services/aplicatie-mobila-ecommerce.webp"
                alt="Aplicatie mobila de e-commerce"
                width={2400}
                height={1400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="mb-6 h-auto w-full rounded-lg"
              />
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Aplicatii pentru food ordering</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru restaurante, cafenele sau business-uri de livrare. Pot include meniu digital, comanda rapida, plata
                online, status comanda si sistem de fidelizare.
              </p>
              <Image
                src="/images/services/aplicatie-food-ordering.webp"
                alt="Aplicatie pentru food ordering"
                width={2400}
                height={1400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="mb-6 h-auto w-full rounded-lg"
              />
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Aplicatii interne pentru companii</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru gestionarea echipelor, taskurilor, locatiilor, interventiilor, rapoartelor sau altor procese
                operationale. Sunt utile mai ales pentru firme care vor eficienta, centralizare si control mai bun al
                activitatii.
              </p>
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Aplicatii de marketplace sau servicii</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru platforme in care utilizatorii interactioneaza intre ei, rezerva servicii, comunica, platesc sau primesc
                notificari automate.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Dezvoltare nativa sau cross-platform?</span>
              </h2>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Alegerea tehnologiei este importanta, dar nu o tratam ca pe o decizie standard. Inainte sa incepem dezvoltarea,
                analizam cerintele aplicatiei, complexitatea functionalitatilor, bugetul, termenul de lansare si modul in care
                produsul trebuie sa evolueze.
              </p>
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Dezvoltare nativa</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Aplicatiile native sunt construite separat pentru iOS si Android si sunt recomandate atunci cand proiectul are
                nevoie de performanta foarte buna, integrare avansata cu functii ale telefonului sau control tehnic mai detaliat.
              </p>
              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Dezvoltare cross-platform</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru multe proiecte, dezvoltarea cross-platform este varianta optima. Permite lansarea mai rapida pe ambele
                platforme si reduce costurile de dezvoltare si mentenanta. Este o alegere foarte buna pentru MVP-uri si pentru
                aplicatii mobile comerciale care trebuie lansate eficient.
              </p>
              <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Recomandarea noastra se bazeaza pe obiectivele proiectului tau, nu pe o preferinta rigida de tehnologie.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Cum decurge procesul de dezvoltare a aplicatiei mobile</span>
              </h2>
              <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Un proiect bun are nevoie de structura clara. De aceea, lucram etapizat, astfel incat sa ai vizibilitate asupra
                fiecarei faze si sa putem lua decizii bune fara risipa de timp sau buget.
              </p>
              <Timeline
                ariaLabel="Etape Dezvoltare Aplicații Mobile"
                items={[
                  {
                    id: "discovery",
                    title: "Discovery si definirea MVP-ului",
                    subtitle: "Business, public tinta, fluxuri, functionalitati esentiale.",
                    description:
                      "Incepem prin intelegerea afacerii, a publicului tinta si a scopului aplicatiei. Definim fluxurile principale, functionalitatile esentiale si ceea ce trebuie sa existe in prima versiune pentru a livra valoare reala.",
                    duration: "Etapa 1",
                    tags: ["Discovery", "MVP", "Prioritizare"],
                  },
                  {
                    id: "ux-ui",
                    title: "UX/UI Design",
                    subtitle: "Structura ecrane, navigare, interfata intuitiva.",
                    description:
                      "Construim structura ecranelor, logica de navigare si interfata aplicatiei. Punem accent pe claritate, viteza de utilizare si o experienta intuitiva pentru utilizator.",
                    duration: "Etapa 2",
                    tags: ["UX", "UI", "Prototype"],
                  },
                  {
                    id: "dezvoltare",
                    title: "Dezvoltare aplicatie + backend",
                    subtitle: "Aplicatie mobila, backend, baza de date, integrari.",
                    description:
                      "Implementam aplicatia mobila si, daca este nevoie, backend-ul, baza de date, autentificarea, panoul de administrare si integrarile externe.",
                    duration: "Etapa 3",
                    tags: ["Mobile App", "Backend", "Integrari"],
                  },
                  {
                    id: "testare",
                    title: "Testare si optimizare",
                    subtitle: "Compatibilitate, stabilitate, performanta.",
                    description:
                      "Verificam fluxurile critice, compatibilitatea pe dispozitive, stabilitatea si performanta. Corectam problemele inainte de lansare si pregatim versiunea finala.",
                    duration: "Etapa 4",
                    tags: ["QA", "Optimizare", "Stabilitate"],
                  },
                  {
                    id: "publicare",
                    title: "Publicare in store-uri",
                    subtitle: "Pregatire App Store si Google Play.",
                    description:
                      "Pregatim toate materialele necesare pentru App Store si Google Play si gestionam procesul de listare.",
                    duration: "Etapa 5",
                    tags: ["App Store", "Google Play", "Publishing"],
                  },
                  {
                    id: "mentenanta",
                    title: "Mentenanta si dezvoltare ulterioara",
                    subtitle: "Monitorizare, imbunatatiri, extinderi.",
                    description:
                      "Dupa lansare, aplicatia poate fi monitorizata, imbunatatita si extinsa cu functionalitati noi, in functie de feedback si rezultate.",
                    duration: "Etapa 6",
                    tags: ["Mentenanta", "Iteratii", "Scalare"],
                  },
                ]}
              />

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Ce include un proiect complet de dezvoltare aplicatii mobile</span>
              </h2>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                In functie de nevoile proiectului, o colaborare poate include:
              </p>
              <ul className="list mb-6 list-inside list-disc">
                <li className="mb-2 text-base text-body-color">analiza de produs si definire MVP;</li>
                <li className="mb-2 text-base text-body-color">structura functionala si user flows;</li>
                <li className="mb-2 text-base text-body-color">design UX/UI pentru mobil;</li>
                <li className="mb-2 text-base text-body-color">dezvoltare aplicatie iOS si Android;</li>
                <li className="mb-2 text-base text-body-color">backend si API;</li>
                <li className="mb-2 text-base text-body-color">autentificare si conturi de utilizator;</li>
                <li className="mb-2 text-base text-body-color">plati online si abonamente;</li>
                <li className="mb-2 text-base text-body-color">notificari push;</li>
                <li className="mb-2 text-base text-body-color">integrare cu servicii externe;</li>
                <li className="mb-2 text-base text-body-color">panou de administrare;</li>
                <li className="mb-2 text-base text-body-color">analytics si crash reporting;</li>
                <li className="mb-2 text-base text-body-color">testare si optimizare;</li>
                <li className="mb-2 text-base text-body-color">publicare in store-uri;</li>
                <li className="mb-2 text-base text-body-color">suport si mentenanta dupa lansare.</li>
              </ul>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Astfel, nu primesti doar o aplicatie, ci un produs digital complet, pregatit pentru utilizare reala.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Cat costa dezvoltarea unei aplicatii mobile?</span>
              </h2>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Costul pentru dezvoltare aplicatii mobile difera in functie de complexitate, functionalitati, numarul de
                platforme si nivelul de integrare necesar. O aplicatie simpla, de tip MVP, are un cost diferit fata de o
                aplicatie care include plati, notificari, roluri multiple, administrare, integrare cu sisteme externe si logica
                complexa in backend.
              </p>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Ca reper orientativ, proiectele de tip MVP pot porni de la aproximativ <strong>4.000 EUR</strong>, iar bugetul
                creste in functie de cerinte, complexitate si ritmul de dezvoltare dorit.
              </p>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Pentru a estima corect costul, este important sa definim:
              </p>
              <ul className="list mb-6 list-inside list-disc">
                <li className="mb-2 text-base text-body-color">ce functionalitati sunt esentiale pentru lansare;</li>
                <li className="mb-2 text-base text-body-color">daca aplicatia va fi nativa sau cross-platform;</li>
                <li className="mb-2 text-base text-body-color">daca este necesar backend personalizat;</li>
                <li className="mb-2 text-base text-body-color">daca exista panou de administrare;</li>
                <li className="mb-2 text-base text-body-color">ce integrari externe sunt necesare;</li>
                <li className="mb-2 text-base text-body-color">ce nivel de mentenanta este dorit dupa lansare.</li>
              </ul>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Dupa o discutie scurta, iti putem propune o varianta realista de implementare, adaptata obiectivelor si bugetului tau.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Cat dureaza dezvoltarea unei aplicatii mobile?</span>
              </h2>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Durata unui proiect depinde de complexitate, insa pentru multe aplicatii de tip MVP, un interval realist este de
                aproximativ 8-10 saptamani pentru primele etape importante: analiza, design, dezvoltare, testare si publicare.
              </p>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Un proiect mai complex, cu functionalitati avansate, roluri multiple, backend extins sau integrari speciale,
                poate necesita mai mult timp. Important este ca planificam proiectul etapizat si prioritizam functionalitatile
                esentiale, astfel incat produsul sa poata fi lansat eficient.
              </p>

              <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">De ce sa alegi serviciile noastre de dezvoltare aplicatii mobile</span>
              </h2>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Lucram cu focus pe claritate, eficienta si scalare. Nu tratam aplicatia ca pe un simplu exercitiu de design sau
                programare, ci ca pe un produs digital care trebuie sa sustina o nevoie reala de business.
              </p>
              <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Colaborarea cu noi inseamna:
              </p>
              <ul className="list mb-6 list-inside list-disc">
                <li className="mb-2 text-base text-body-color">comunicare clara pe parcursul proiectului;</li>
                <li className="mb-2 text-base text-body-color">accent pe MVP si lansare eficienta;</li>
                <li className="mb-2 text-base text-body-color">solutii tehnice alese in functie de obiective, nu din rutina;</li>
                <li className="mb-2 text-base text-body-color">atentie la experienta utilizatorului;</li>
                <li className="mb-2 text-base text-body-color">structura gandita pentru crestere ulterioara;</li>
                <li className="mb-2 text-base text-body-color">suport pentru publicare, optimizare si dezvoltari viitoare.</li>
              </ul>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Ne concentram pe aplicatii care trebuie sa fie utile, stabile si pregatite pentru utilizare reala.
              </p>

              <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <span className="text-primary">Hai sa discutam despre aplicatia ta</span>
              </h3>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Daca vrei sa lansezi un MVP, sa digitalizezi un proces intern sau sa construiesti un produs mobil complet pentru
                clientii tai, te putem ajuta cu o solutie clara si realista.
              </p>
              <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                Spune-ne ce vrei sa obtii, care este publicul tinta si ce functionalitati ai in minte, iar noi iti propunem
                directia potrivita pentru proiect: tehnologia recomandata, structura de lansare, etapele de lucru si o estimare
                orientativa de cost.
              </p>
              <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
                <strong>Cere o oferta pentru dezvoltare aplicatii mobile</strong> si hai sa construim o aplicatie care nu doar
                arata bine, ci functioneaza bine pentru afacerea ta.
              </p>

              <div className="mt-10">
                <h2 className="mb-5 text-xl font-bold text-black sm:text-2xl">Întrebări frecvente</h2>
                <div className="space-y-4">
                  {mobileAppsServicePageData.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xs border border-stone-200 p-5">
                      <h3 className="mb-2 text-lg font-semibold text-black">{faq.question}</h3>
                      <p className="text-base text-body-color">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
