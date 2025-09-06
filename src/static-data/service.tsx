import { Service } from "@/types/service";
import { v4 as uuid } from "uuid";
import Link from "next/link";



export const detailsCreareSiteWeb = (
  <div>
    {/* Intro (≈100–120 cuvinte) */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Livrăm servicii de <strong>creare site web</strong> orientate pe rezultate: pagini care se încarcă rapid,
      explică clar oferta și transformă vizitatorii în clienți. Proiectăm arhitectura de informații astfel încât
      utilizatorii să găsească imediat ce caută, apoi construim interfețe moderne și ușor de folosit. Folosim
      tehnologii actuale (Next.js) pentru performanță, securitate și scalabilitate, iar optimizarea SEO on-page
      și integrarea cu instrumentele de marketing vin standard. Fie că pornești de la zero sau ai nevoie de
      un redesign, obiectivul nostru este simplu: un website care arată bine, se mișcă rapid și generează
      lead-uri într-un mod previzibil.
    </p>

    {/* De ce noi / USP */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">De ce să alegi Web Dynamicx pentru creare site</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Focus pe conversii:</strong> texte clare, CTA vizibile, formulare scurte, dovezi sociale și mesaje adaptate publicului.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Performanță reală:</strong> optimizăm Core Web Vitals (LCP, CLS, INP), imagini moderne, caching și livrare eficientă.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>SEO on-page corect:</strong> meta-uri, heading-uri, linkuri interne, schema și sitemap/robots aliniate cu intenția de căutare.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Scalabilitate:</strong> sistem de componente reutilizabile și design system care mențin consistența pe termen lung.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Livrabile transparente:</strong> de la wireframe la training, știi exact ce primești și când.
      </li>
    </ul>

    {/* Arhitectură de informații */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Arhitectură de informații</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Începem cu obiectivele de business și publicul țintă, apoi cartografiem paginile și traseele cheie
      (Acasă, Servicii, Despre, Portofoliu, Blog, Contact). Fiecare pagină are un scop clar, iar navigația,
      breadcrumbs și linkurile interne ghidează utilizatorul fără fricțiune. Introducem micro-pagini pentru
      servicii specifice (de ex. „Creare site de prezentare”, „Web design”, „Optimizare SEO”) pentru a acoperi
      corect intențiile diferite de căutare și pentru a evita canibalizarea.
    </p>

    {/* UX/UI */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Design UX/UI</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Wireframe pentru paginile esențiale (Acasă, Servicii, Contact, Despre).</li>
      <li className="mb-2 text-base text-body-color">UI modern, paletă cromatică și tipografie aliniate brandului.</li>
      <li className="mb-2 text-base text-body-color">Design system și componente reutilizabile pentru consistență și viteză de livrare.</li>
      <li className="mb-2 text-base text-body-color">Accesibilitate: contrast adecvat, dimensiuni lizibile, focus vizibil, navigare cu tastatura.</li>
      <li className="mb-2 text-base text-body-color">Secțiuni „hero” cu promisiune clară și CTA, plus dovezi sociale (recenzii, logo-uri clienți).</li>
    </ul>

    {/* Implementare & performanță */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Implementare & performanță</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Next.js pentru SSR/SSG, rute clare și optimizări out-of-the-box.</li>
      <li className="mb-2 text-base text-body-color">Imagini în formate moderne (WebP/AVIF), lazy-loading și pre-încărcare resurse critice.</li>
      <li className="mb-2 text-base text-body-color">Optimizări Core Web Vitals și caching (headers corecte, revalidare, edge).</li>
      <li className="mb-2 text-base text-body-color">Formulare securizate, validare, protecție spam și integrare cu email/CRM.</li>
      <li className="mb-2 text-base text-body-color">Configurări de securitate (HTTPS, headers recomandate, politici pentru fișiere media).</li>
    </ul>

    {/* SEO on-page & schema */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">SEO on-page & schema</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Setăm titluri și descrieri unice, heading-uri logice și conținut care răspunde intenției de căutare pentru
      <strong> creare site web</strong>. Adăugăm schema potrivită (Organization, WebSite, Service, FAQ), generăm sitemap și robots
      și legăm paginile prin interlinking. Ne asigurăm că meta-urile, canonical-ul și <em>Open Graph</em> sunt corelate cu
      domeniul canonic din hosting.
    </p>

    {/* Integrare & tracking */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Integrare & tracking</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Google Analytics 4 și Google Tag Manager pentru evenimente și funnel-uri.</li>
      <li className="mb-2 text-base text-body-color">Google Search Console pentru indexare și monitorizare căutări.</li>
      <li className="mb-2 text-base text-body-color">Integrare CRM (captură lead-uri, notificări, follow-up automat).</li>
      <li className="mb-2 text-base text-body-color">Pixel Meta/LinkedIn/TikTok după nevoie, pentru campanii și remarketing.</li>
    </ul>

    {/* Ce primești concret */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primești concret la final</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Website complet (pagini standard + pagini de servicii), design responsiv și accesibil.</li>
      <li className="mb-2 text-base text-body-color">Sistem de componente, grid și stiluri documentate (mini design system).</li>
      <li className="mb-2 text-base text-body-color">Optimizări de viteză (imagini, code-splitting, cache) și scoruri bune la CWV.</li>
      <li className="mb-2 text-base text-body-color">SEO on-page corect, schema, sitemap și robots configurate.</li>
      <li className="mb-2 text-base text-body-color">Formulare și tracking setate, plus instrucțiuni de administrare (video/ghid).</li>
    </ul>

    {/* Procesul nostru */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Procesul nostru</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color">
        <strong>Analiză:</strong> obiective, public, competiție, structură pagini și mesaje.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Wireframe & conținut:</strong> stabilim secțiunile, CTA-urile și ordinea informațiilor.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>UI design:</strong> interfețe moderne, componente reutilizabile, sistem vizual coerent.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Implementare:</strong> Next.js, optimizări de viteză, testare pe dispozitive reale.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>SEO & lansare:</strong> meta-uri, schema, sitemap/robots, conectare GSC/GA4, training de administrare.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Mentenață:</strong> actualizări periodice, optimizări și mici evoluții pe baza datelor.
      </li>
    </ul>

    {/* Prețuri & pachete (orientativ) */}
    <h2 id="preturi" className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Prețuri & pachete (orientativ)</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Costul pentru <strong>servicii creare site</strong> depinde de numărul de pagini, nivelul de design și funcțiile necesare.
      Pentru un site de prezentare standard, proiectele pornesc de la <strong>~600 EUR</strong>, crescând în funcție de
      complexitate, integrări și deadline. Oferim pachete flexibile și îți recomandăm varianta potrivită în funcție
      de obiective și buget.
    </p>

    {/* Interlinking (ajută SEO și UX) */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      După lansare, recomandăm să continui cu optimizarea și promovarea:
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>,
      {" "}
      <Link href="/servicii/web-design" className="text-primary underline">Web design</Link> și
      {" "}
      <Link href="/servicii/creare-site-prezentare" className="text-primary underline">Creare site de prezentare</Link>.
      Dacă plănuiești să vinzi online, vezi și
      {" "}
      <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>.
    </p>

    {/* Studiu de caz scurt (generic, fără cifre nerealiste) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru un business local de servicii, am reorganizat paginile pe intenții (serviciu principal, servicii
      secundare, întrebări frecvente), am clarificat mesajul „above the fold” și am optimizat formularele.
      În primele săptămâni, ratele de contact au crescut vizibil datorită combinației dintre viteză mai bună,
      CTA-uri clare și conținut adaptat limbajului clienților.
    </p>

    {/* CTA final */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai să începem</span>
    </h2>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne obiectivele tale și construim împreună un plan. Îți trimitem propunerea cu structura paginilor,
      timeline și costuri transparente. <strong>Cere o ofertă pentru creare site web</strong> și primești rapid
      un răspuns cu pașii următori.
    </p>
  </div>
);

export const detailsCreareMagazinOnline = (
  <div>
    {/* Intro (≈120 cuvinte) */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Livrăm <strong>magazine online</strong> care vând: arhitectură clară, experiență fluidă pe mobil și
      performanță tehnică excelentă. Alegem platforma potrivită obiectivelor tale (Shopify pentru
      time-to-market și simplitate, WooCommerce pentru flexibilitate în ecosistemul WordPress, sau
      soluții custom când ai cerințe complexe), apoi implementăm un storefront optimizat pentru SEO și
      conversii. Structura de categorii, filtrele rapide, paginile de produs persuasive și un checkout cât
      mai scurt lucrează împreună pentru a crește rata de finalizare a comenzilor. În paralel, configurăm
      evenimente de analytics pe întreg funnel-ul (vizite → adăugări în coș → inițiere checkout → tranzacții),
      astfel încât deciziile de optimizare să fie bazate pe date reale.
    </p>

    {/* De ce noi / USP */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">De ce sa alegi Web Dynamicx pentru creare magazin online</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Conversie in focus:</strong> layout clar, CTA vizibile, mesaje de incredere (recenzii, retur, garantie),
        upsell/cross-sell si checkout friction-less.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Performanta reala:</strong> Core Web Vitals excelente (tinta: LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200 ms),
        imagini moderne si caching corect.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>SEO e-commerce corect:</strong> categorie/PLP, PDP, paginare, sortari si filtre tratate pentru a evita
        duplicatele si a pastra semnalul canonic.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Integrare end-to-end:</strong> plati, curieri, facturare, ERP/CRM, marketing automation si feed-uri
        pentru Google Merchant Center.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Date & testare:</strong> GA4 + Tag Manager, evenimente e-commerce si A/B testing pe elementele cheie.
      </li>
    </ul>

    {/* Arhitectura catalogului */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Arhitectura catalogului si navigatie</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Construim ierarhii <em>categorie → subcategorie → produs</em> usor de inteles, cu filtre rapide (pret, marime,
      culoare, brand etc.) si sortari utile (relevanta, pret, noutati). Paginile de listare (PLP) includ elementele
      care influenteaza decizia (preturi clare, disponibilitate, badge-uri pentru promotii si stoc limitat), iar
      breadcrumbs-urile ajuta orientarea si SEO. Evitam rutele „oarbe” si paginile orfane; orice produs se atinge
      in max. 3 click-uri din homepage.
    </p>

    {/* Platforme & cand le alegi */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Platforme: Shopify, WooCommerce sau Custom?</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Shopify:</strong> ideal pentru lansare rapida si ecosistem de aplicatii; recomandat cand vrei simplitate,
        abonamente previzibile si scalare fara griji de infrastructura.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>WooCommerce:</strong> flexibilitate mare, control pe cod si costuri initiale reduse; potrivit cand ai
        nevoie de personalizari specifice si integrare stransa cu WordPress.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Custom (Next.js + headless):</strong> pentru cerinte avansate (catalog mare, reguli complexe de pret,
        omnichannel), performanta maxima si integrare cu sisteme enterprise.
      </li>
    </ul>

    {/* Pagina produs & checkout */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Paginile de produs si checkout</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>PDP persuasiv:</strong> titlu clar, imaginile corecte (zoom, galerie), variatii/atribute vizibile,
        bullet-uri cu beneficii, politica de retur/garantie si recomandari relevante.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Mesaje de incredere:</strong> stoc, livrare estimata, costuri transparente, review-uri si Q&amp;A.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Checkout scurt:</strong> 1–2 pasi, metode de plata uzuale in RO, autocomplet adresa, salvare cos si
        recuperare abandon (email/SMS).
      </li>
    </ul>

    {/* Functionalitati cheie */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Functionalitati cheie</span>
    </h2>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Catalog cu variatii, atribute, stocuri; import/export CSV.</li>
      <li className="mb-2 text-base text-body-color">Checkout optimizat (1 pas sau 2 pasi), plati populare (RO).</li>
      <li className="mb-2 text-base text-body-color">Integrare curieri (AWB, tracking), ERP/CRM, email marketing.</li>
      <li className="mb-2 text-base text-body-color">PWA, lazy-loading, imagini AVIF/WebP, caching corect.</li>
      <li className="mb-2 text-base text-body-color">Schema: Product, Offer, AggregateRating, Breadcrumb, Organization, FAQ.</li>
      <li className="mb-2 text-base text-body-color">Recomandari produse, cross-sell/upsell, bundle-uri si cupoane.</li>
      <li className="mb-2 text-base text-body-color">Wishlist, comparatie produse si notificari stoc/pret.</li>
      <li className="mb-2 text-base text-body-color">Feed-uri produse pentru Google Merchant si marketplace-uri.</li>
    </ul>

    {/* SEO tehnic & migrare */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">SEO tehnic & migrare fara pierderi</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Implementam bune practici SEO de la structura URL si canonicale pana la paginare, parametri de filtrare si
      controlul indexarii (noindex pe variante fara valoare, canonizare catre lista corecta). Pentru migrari,
      planificam maparea URL-urilor, setam <strong>redirecturi 301</strong>, pastram semnalele de relevanta si refacem
      interlinking-ul pentru a evita pierderile de trafic. Generam sitemap, robots si conectam Search Console pentru
      monitorizarea post-lansare.
    </p>

    {/* Performanta & PWA */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Performanta & experienta pe mobil</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Optimizam timpii de incarcare, stabilitatea layout-ului si interactivitatea pentru a atinge tinte CWV.
      Implementam PWA (add-to-home, caching offline pentru resurse statice) acolo unde aduce valoare. Imaginile
      sunt servite in formate moderne cu <em>responsive images</em> si <em>lazy-loading</em>, iar componentizarea reduce
      JavaScript-ul inutil.
    </p>

    {/* Tracking & A/B testing */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Tracking, date si A/B testing</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">GA4 e-commerce (view_item_list, view_item, add_to_cart, begin_checkout, purchase).</li>
      <li className="mb-2 text-base text-body-color">Tag Manager pentru guvernarea tag-urilor si evenimentelor custom.</li>
      <li className="mb-2 text-base text-body-color">A/B testing pe CTA, layout de PLP/PDP si variante de copy.</li>
      <li className="mb-2 text-base text-body-color">Dashboard cu KPI (CR, AOV, RPV, ROAS) si alerte pentru anomalii.</li>
    </ul>

    {/* Ce primesti concret */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primesti concret la final</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Storefront performant, design responsiv si accesibil.</li>
      <li className="mb-2 text-base text-body-color">Configurare catalog, reguli de pret, taxe si livrare.</li>
      <li className="mb-2 text-base text-body-color">Integrare plati, curieri, facturare si automatizari marketing.</li>
      <li className="mb-2 text-base text-body-color">SEO on-page corect, schema, sitemap si robots configurate.</li>
      <li className="mb-2 text-base text-body-color">Tracking GA4/Tag Manager si instructiuni de administrare.</li>
    </ul>

    {/* Proces & livrabile */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Proces & livrabile</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color">Analiza obiective, platforma si arhitectura de informatii.</li>
      <li className="mb-2 text-base text-body-color">UX/UI pentru categorie, listare si pagini de produs.</li>
      <li className="mb-2 text-base text-body-color">Dezvoltare, integrari, testare plati/fulfillment.</li>
      <li className="mb-2 text-base text-body-color">SEO tehnic, migrare, redirecturi, setare analytics.</li>
      <li className="mb-2 text-base text-body-color">Lansare, monitorizare, optimizari post-lansare.</li>
    </ul>

    {/* Preturi & pachete (orientativ) */}
    <h2 id="preturi" className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Preturi & pachete (orientativ)</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Costul pentru <strong>creare magazin online</strong> depinde de platforma, numarul de produse, integrari si termen.
      Implementarile standard pornesc de la <strong>~1200 EUR</strong> si cresc in functie de complexitate (feed-uri,
      ERP/CRM, reguli dinamice de pret, marketplace-uri). Oferim recomandarea potrivita dupa o scurta sesiune de
      clarificare a obiectivelor.
    </p>

    {/* Interlinking (ajuta SEO si UX) */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru crestere sustinuta, continua cu
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>,
      {" "}
      <Link href="/servicii/web-design" className="text-primary underline">Web design</Link> si
      {" "}
      <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>.
      Daca ai nevoie de identitate vizuala, vezi
      {" "}
      <Link href="/servicii/creare-logo-branding" className="text-primary underline">Creare logo & branding</Link>.
    </p>

    {/* Studiu de caz scurt (generic) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru un magazin cu catalog mediu, am optimizat PLP/PDP, am scurtat checkout-ul si am introdus badge-uri de
      urgenta pe promotii. Dupa lansare, rata de adaugare in cos si conversia pe mobil au crescut datorita timpilor
      mai buni de incarcare si mesajelor mai clare in paginile critice.
    </p>

    {/* CTA final */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai sa incepem</span>
    </h3>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne ce vinzi si ce obiective ai, iar noi iti recomandam platforma, structura si integrările potrivite.
      Iti trimitem un plan cu timeline si costuri transparente. <strong>Cere o oferta pentru creare magazin online</strong>
      si iti raspundem rapid cu pasii urmatori.
    </p>
  </div>
);

export const detailsOptimizareSeo = (
  <div>
    {/* Intro (≈120 cuvinte) */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Oferim <strong>servicii SEO profesionale</strong>, <strong>servicii optimizare SEO</strong> și <strong>optimizare SEO site</strong> cap-coadă: audit tehnic, on-page, conținut și autoritate (link building),
      cu obiectiv clar – mai mult trafic organic calificat și conversii. Începem cu o radiografie completă a site-ului,
      prioritizăm problemele cu impact mare și implementăm rapid câștigurile „low-hanging fruit”. Apoi, construim un plan
      editorial și o structură internă care să răspundă intențiilor de căutare și să consolideze relevanța semantică.
      Totul este măsurat: urmărim impresiile, pozițiile, CTR-ul, traficul organic și conversiile, astfel încât fiecare
      iterație să fie ghidată de date, nu de presupuneri.
    </p>

    {/* Ce înseamnă SEO (pe scurt) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce inseamna optimizare SEO site (pe scurt)</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color"><strong>Tehnic:</strong> accesare, indexare, performanță, structura URL, redirecționări.</li>
      <li className="mb-2 text-base text-body-color"><strong>On-page:</strong> meta-uri corecte, heading-uri, conținut relevant, interlinking.</li>
      <li className="mb-2 text-base text-body-color"><strong>Conținut:</strong> topic clusters, pagini de serviciu, ghiduri și articole utile.</li>
      <li className="mb-2 text-base text-body-color"><strong>Autoritate:</strong> mențiuni și backlink-uri etice, PR și link reclamation.</li>
      <li className="mb-2 text-base text-body-color"><strong>Local SEO:</strong> Google Business Profile, NAP, pagini locale.</li>
      <li className="mb-2 text-base text-body-color"><strong>Măsurare:</strong> GA4, Search Console, dashboard KPI și experimente.</li>
    </ul>

    {/* Audit tehnic */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Audit tehnic & sanatate de site</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color"><strong>Indexabilitate:</strong> noindex/robots.txt, canonicale corecte, sitemap valid.</li>
      <li className="mb-2 text-base text-body-color"><strong>Performanta/CWV:</strong> LCP, CLS, INP; imagini moderne, caching, code-splitting.</li>
      <li className="mb-2 text-base text-body-color"><strong>Routare & redirecturi:</strong> evităm lanțuri, corectăm 404/410, uniformizăm http→https, www/non-www.</li>
      <li className="mb-2 text-base text-body-color"><strong>JS rendering:</strong> verificăm conținutul randat, hidratare și fallback-uri.</li>
      <li className="mb-2 text-base text-body-color"><strong>Structura URL:</strong> curată, ierarhică, fără parametri inutili în paginile indexabile.</li>
      <li className="mb-2 text-base text-body-color"><strong>Multilingv/hreflang (dacă e cazul):</strong> etichete corecte și consistente.</li>
      <li className="mb-2 text-base text-body-color"><strong>Loguri & crawl budget:</strong> descoperim blocaje și pagini orfane.</li>
    </ul>

    {/* On-page & semantică */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">On-page & relevanta semantica</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Mapăm intențiile de căutare și aliniem fiecare pagină la un subiect principal. Scriem titluri (50–60c) și descrieri
      (140–160c) care cresc CTR-ul, folosim <em>H1/H2</em> logice și inserăm <strong>interlinking</strong> contextual cu anchor-uri
      descriptive. Implementăm <em>schema</em> potrivită (Organization, WebSite, Service, Article, FAQ, Breadcrumb) și structurăm
      conținutul pentru scanare rapidă (paragrafe scurte, liste, evidențieri). Punem accent pe E-E-A-T: autor/brand clar,
      date de contact, portofoliu și dovezi reale.
    </p>

    {/* Strategie de conținut */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Strategie de continut: topic clusters</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color"><strong>Hub & cluster:</strong> pagini pilon pentru serviciile cheie + articole suport.</li>
      <li className="mb-2 text-base text-body-color"><strong>Briefuri clare:</strong> intentie, intrebari ale utilizatorilor, structura H2/H3.</li>
      <li className="mb-2 text-base text-body-color"><strong>Optimizare continut existent:</strong> actualizam, consolidam, evitam duplicatele.</li>
      <li className="mb-2 text-base text-body-color"><strong>Studii de caz & portofoliu:</strong> metrici si procese reale, nu generalitati.</li>
    </ul>

    {/* Autoritate & mențiuni */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Autoritate & mentiuni (link building etic)</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Parteneriate locale, asociatii profesionale, presă de specialitate.</li>
      <li className="mb-2 text-base text-body-color">Guest posts cu valoare, ghiduri utile și citări în resurse relevante.</li>
      <li className="mb-2 text-base text-body-color">Link reclamation: mențiuni fără link, fix broken links, actualizări către URL-uri canonice.</li>
      <li className="mb-2 text-base text-body-color">Evităm schemele riscante: ferme de linkuri, directoare slabe, PBN-uri.</li>
    </ul>

    {/* Local SEO */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Local SEO (daca tintesti oras/judet)</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Google Business Profile: setare corecta, categorii, produse/servicii, postari.</li>
      <li className="mb-2 text-base text-body-color">NAP consistent pe site si in citari, schema LocalBusiness.</li>
      <li className="mb-2 text-base text-body-color">Pagini locale unice (continut diferentiat, cazuri si testimoniale locale).</li>
      <li className="mb-2 text-base text-body-color">Recenzii reale si raspunsuri prompte, politica de review management.</li>
    </ul>

    {/* Tracking & raportare */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Tracking, KPI si raportare</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">GA4 + Tag Manager (evenimente si conversii), Search Console (cuvinte-cheie, indexare).</li>
      <li className="mb-2 text-base text-body-color">Dashboard KPI: impresii, pozitii, CTR, trafic organic, conversii, revenue share.</li>
      <li className="mb-2 text-base text-body-color">A/B testing pe titluri, descrieri, CTA, layout de pagini cheie.</li>
    </ul>

    {/* Proces & livrabile */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Proces & livrabile</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color"><strong>Audit complet:</strong> tehnic, on-page, continut, autoritate, local.</li>
      <li className="mb-2 text-base text-body-color"><strong>Plan de actiune:</strong> backlog prioritar (impact × efort), timeline si responsabilitati.</li>
      <li className="mb-2 text-base text-body-color"><strong>Implementare rapida:</strong> corectii critice, viteza, canonicale, interlinking.</li>
      <li className="mb-2 text-base text-body-color"><strong>Content & optimizari:</strong> pagini de serviciu, articole, actualizari si consolidari.</li>
      <li className="mb-2 text-base text-body-color"><strong>Autoritate:</strong> mențiuni si backlink-uri etice, link reclamation.</li>
      <li className="mb-2 text-base text-body-color"><strong>Raportare & iteratie:</strong> masuram si ajustam lunar pe baza KPI-urilor.</li>
    </ul>

    {/* Ce primești concret */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primesti concret</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Raport de audit + checklist implementare (tehnic, on-page, continut, local, autoritate).</li>
      <li className="mb-2 text-base text-body-color">Corectii tehnice si imbunatatiri de performanta (CWV).</li>
      <li className="mb-2 text-base text-body-color">Plan editorial (3–6 luni) + briefuri H2/H3 pentru autori.</li>
      <li className="mb-2 text-base text-body-color">Schema (Service/FAQ/Article/Breadcrumb) si sitemap/robots corecte.</li>
      <li className="mb-2 text-base text-body-color">Dashboard KPI si raport lunar cu ce s-a facut & next steps.</li>
    </ul>

    {/* Rezultate & timeline */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">La ce rezultate sa te astepti</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Primele semne apar, in general, <strong>in 6–8 saptamani</strong> (crestere de impresii/pozitii si CTR mai bun).
      Rezultatele solide se vad in <strong>3–6 luni</strong>, iar pe piete foarte competitive pot necesita <strong>6–12 luni</strong>.
      Ritmul depinde de istoricul site-ului, concurenta si viteza de implementare. Tinem asteptarile realiste si
      prioritizam task-urile cu cel mai bun raport impact/efort.
    </p>

    {/* Interlinking (ajută SEO și UX) */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru rezultate complete, combina <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>,
      {" "} <Link href="/servicii/web-design" className="text-primary underline">Web design</Link> si
      {" "} <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>.
      Daca ai nevoie de identitate vizuala, vezi si
      {" "} <Link href="/servicii/creare-logo-branding" className="text-primary underline">Creare logo & branding</Link>.
    </p>

    {/* Exemplu de rezultat */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Dupa implementarea auditului tehnic (viteza, canonicale, interlinking) si optimizarea paginilor de servicii
      (titluri/descrieri, H2/H3 si schema), un site B2B a inregistrat crestere a traficului organic pe expresiile „short-tail”
      si „long-tail”. Conver­siile au crescut datorita mesajelor mai clare si imbunatatirii timpilor de incarcare pe mobil.
    </p>

    {/* CTA final */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai sa incepem</span>
    </h3>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Cere un audit gratuit si iti trimitem lista de prioritati cu impact imediat. Stabilim obiective clare, implementam
      rapid imbunatatirile si optimizam lunar pe baza datelor. <strong>Solicita o oferta pentru optimizare SEO site</strong>
      si primesti pe email planul de actiune si timeline-ul propus.
    </p>
  </div>
);



export const detailsCreareSitePrezentare = (
  <div>
    {/* Intro optimizată SEO cu focus pe search intent */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Oferim <strong>servicii creare site de prezentare</strong> profesionale, orientate pe conversii și rezultate măsurabile.
      Specializarea noastră în <strong>creare site prezentare</strong> combină design modern cu tehnologii avansate pentru
      site-uri care se încarcă rapid, comunică clar valoarea afacerii tale și transformă vizitatorii în clienți.
      Fiecare proiect de <strong>creare site de prezentare</strong> începe cu analiza obiectivelor de business și
      a publicului țintă, apoi dezvoltăm arhitectura optimă de informații și implementăm funcționalități care
      maximizează rata de conversie. Folosim Next.js pentru performanță superioară și SEO on-page avansat.
    </p>

    {/* Ce este si cand alegi - optimizat pentru cuvinte cheie */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">De ce să alegi serviciile noastre de creare site de prezentare</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Experiență în creare site prezentare:</strong> peste 50 de proiecte livrate cu rata medie de conversie de 3.2%.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Optimizare pentru rezultate:</strong> fiecare element de design și conținut este testat pentru maximizarea conversiilor.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>SEO integrat în proces:</strong> serviciile noastre de <strong>creare site de prezentare</strong> includ optimizare completă pentru Google.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Tehnologii moderne:</strong> Next.js, Core Web Vitals optimizate și performanță superioară pe toate dispozitivele.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Suport continuu:</strong> mentenanță, actualizări de securitate și optimizări post-lansare incluse.
      </li>
    </ul>

    {/* Ce include serviciul */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce include serviciul de creare site de prezentare</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Serviciile noastre de <strong>creare site prezentare</strong> acoperă toate etapele: de la analiza cerințelor până la lansare și mentenanță.
      Un website compact (5–12 pagini) care prezintă brandul, serviciile, portofoliul și modalitățile de contact.
      Dacă obiectivul tău principal este <em>generarea de lead-uri</em> (cereri de ofertă, programări, apeluri),
      serviciile noastre de <strong>creare site de prezentare</strong> sunt soluția potrivită. Pentru vânzări online, vezi
      {" "}
      <Link href="/servicii/creare-magazin-online" className="text-primary underline">servicii creare magazin online</Link>.
    </p>

    {/* Structura pentru conversie */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Structura orientata pe conversie</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Hero clar:</strong> promisiune + sub-beneficii + CTA vizibil („Cere oferta”, „Programeaza o discutie”).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Servicii pe scurt:</strong> 3–6 carduri cu beneficii, link spre paginile dedicate fiecărui serviciu.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Dovada sociala:</strong> testimoniale reale, logo-uri clienti, certificari, note din studii de caz.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Despre noi:</strong> cine livreaza, procese, valori; pune fata brandului, creste increderea.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Portofoliu scurt:</strong> 3–6 proiecte reprezentative; link spre pagina „Toate proiectele” (opțional).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Contact simplu:</strong> formular scurt, telefon clicabil, WhatsApp, harta (daca e relevant local).
      </li>
    </ul>

    {/* UX/UI si accesibilitate */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">UX/UI: claritate, ritm si accesibilitate</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Grid si ierarhie vizuala coerenta, componente reutilizabile si design system.</li>
      <li className="mb-2 text-base text-body-color">Contrast si dimensiuni lizibile, focus vizibil, navigare cu tastatura.</li>
      <li className="mb-2 text-base text-body-color">CTA-uri consecvente in aceleasi locuri pe toate paginile.</li>
      <li className="mb-2 text-base text-body-color">Imagistica relevanta si usoara (optimizata), micro-interactii discrete.</li>
    </ul>

    {/* Performanta & CWV */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Performanta si Core Web Vitals</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Tinta noastra este o experienta rapida pe mobil: LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms. Folosim Next.js pentru SSR/SSG,
      servim imagini in formate moderne (WebP/AVIF) cu <em>responsive images</em>, lazy-loading si caching corect. Eliminam
      scripturile nefolosite si incarcam deferrred ceea ce nu este critic pentru prima interactiune.
    </p>

    {/* SEO on-page pentru site de prezentare */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">SEO on-page: fundatia corecta</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Fiecare pagina are <strong>un singur cuvant-cheie principal</strong>, meta title (~50–60c) si meta description (~140–160c)
      orientate spre CTR. Structuram <em>H1/H2/H3</em> logic, folosim <strong>interlinking</strong> contextual si setam canonical
      corect (conform domeniului canonic din hosting). Adaugam <em>schema</em> potrivita (Organization, WebSite, Service, FAQ,
      Breadcrumb), generam sitemap si robots si conectam Search Console pentru monitorizare.
    </p>

    {/* Blueprint de continut pentru pagini frecvente */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Blueprint de continut (pagini esentiale)</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Acasa:</strong> promisiune + beneficii + servicii + dovezi sociale + CTA + scurt „Despre”.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Servicii:</strong> lista cu 4–8 servicii, fiecare cu beneficiu, icon si link catre pagina dedicata.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Despre:</strong> cine suntem, proces, valori, echipa; cresterea increderii si a diferentei fata de competitie.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Portofoliu:</strong> proiecte reprezentative, scurt context, rezultate/metrici (cand se pot comunica).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Contact:</strong> formular scurt, alternative de contact, program, harta (daca e relevant).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>FAQ:</strong> raspunsuri concise la obiectii (pret, timp, mentenanta, SEO, continut).
      </li>
    </ul>

    {/* Formular & tracking */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Formular, evenimente si tracking</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Formular cu 3–5 campuri esentiale, validare si protectie anti-spam.</li>
      <li className="mb-2 text-base text-body-color">GA4 + Tag Manager: evenimente pentru click pe telefon/email, submit formular.</li>
      <li className="mb-2 text-base text-body-color">Thank-you page pentru masurarea corecta a conversiilor.</li>
    </ul>

    {/* Ce primesti concret */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primesti concret</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Site de prezentare complet, responsiv si accesibil.</li>
      <li className="mb-2 text-base text-body-color">Sistem de componente si stiluri (mini design system).</li>
      <li className="mb-2 text-base text-body-color">SEO on-page corect, schema, sitemap si robots configurate.</li>
      <li className="mb-2 text-base text-body-color">Formulare si tracking setate; instructiuni de administrare.</li>
      <li className="mb-2 text-base text-body-color">Plan de continut scurt (ce pagini/articole sa adaugi in primele luni).</li>
    </ul>

    {/* Proces & timeline */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Proces & timeline</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color"><strong>Analiza:</strong> obiective, public, diferentiatori, sitemap.</li>
      <li className="mb-2 text-base text-body-color"><strong>Wireframe & continut:</strong> sectiuni, mesaje, CTA-uri.</li>
      <li className="mb-2 text-base text-body-color"><strong>UI design:</strong> componente reutilizabile, ritm vizual.</li>
      <li className="mb-2 text-base text-body-color"><strong>Implementare:</strong> Next.js, optimizari de viteza, testare.</li>
      <li className="mb-2 text-base text-body-color"><strong>SEO & lansare:</strong> meta-uri, schema, sitemap/robots, GSC/GA4.</li>
      <li className="mb-2 text-base text-body-color"><strong>Mentenanta:</strong> actualizari, optimizari si mici evolutii.</li>
    </ul>

    {/* Preturi (orientativ) */}
    <h2 id="preturi" className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Preturi (orientativ)</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Costul pentru <strong>creare site de prezentare</strong> depinde de numarul de pagini, nivelul de design si integrari.
      Proiectele standard pornesc de la <strong>~600 EUR</strong> si cresc in functie de complexitate si deadline. Iti recomandam
      pachetul potrivit dupa o scurta sesiune de clarificare a obiectivelor.
    </p>

    {/* Interlinking */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru o prezenta completa, combina
      {" "}
      <Link href="/servicii/web-design" className="text-primary underline">Web design</Link>,
      {" "}
      <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link> si
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>.
      Daca ai nevoie de identitate vizuala, vezi si
      {" "}
      <Link href="/servicii/creare-logo-branding" className="text-primary underline">Creare logo & branding</Link>.
    </p>

    {/* Exemplu de rezultat */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru un furnizor local de servicii, am clarificat promisiunea in zona „above the fold”, am re-ordonat sectiunile
      dupa intrebarile clientilor si am introdus un CTA persistent pe mobil. Dupa lansare, cererile din formular au crescut
      datorita mesajelor mai clare si imbunatatirii timpilor de incarcare.
    </p>

    {/* CTA final */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai sa incepem</span>
    </h3>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne obiectivele si construim o structura care sa le atinga. Iti trimitem un plan cu timeline si costuri
      transparente. <strong>Cere o oferta pentru creare site de prezentare</strong> si primesti rapid pasii urmatori.
    </p>
  </div>
);


export const detailsWebDesign = (
  <div>
    {/* Intro (≈110–130 cuvinte) */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Facem <strong>web design</strong> cu un obiectiv clar: interfețe frumoase care funcționează impecabil și
      transformă vizitatorii în clienți. Începem cu înțelegerea publicului și a obiectivelor, apoi construim
      un sistem vizual coerent (design system) care asigură consistență, viteză de implementare și ușurință
      în extindere. Respectăm accesibilitatea (AA/AAA), optimizăm pentru mobil mai întâi și avem grijă ca
      fiecare detaliu — de la contrast și tipografie până la micro-interacțiuni — să îmbunătățească experiența.
      Rezultatul: pagini care arată profesionist, se încarcă rapid și ghidează natural către acțiune. Pentru
      implementare cap‑coadă, vezi
      {" "}
      <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>,
      {" "}
      <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>
      {" "}și
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>.
    </p>

    {/* Principii & rezultate */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Principii de web design orientat pe rezultate</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color"><strong>Claritate & ierarhie:</strong> informația importantă se vede și se înțelege imediat.</li>
      <li className="mb-2 text-base text-body-color"><strong>Mobil-first:</strong> layout fluid, componente responsive, interacțiuni prietenoase pe touch.</li>
      <li className="mb-2 text-base text-body-color"><strong>Accesibilitate:</strong> contrast, dimensiuni lizibile, focus vizibil, navigare cu tastatura.</li>
      <li className="mb-2 text-base text-body-color"><strong>Viteză & simplitate:</strong> imagini optimizate, UI curat, fără elemente care obosesc utilizatorul.</li>
      <li className="mb-2 text-base text-body-color"><strong>Consistență:</strong> sistem de culori, grid, spacing, iconografie și componente reutilizabile.</li>
      <li className="mb-2 text-base text-body-color"><strong>SEO-friendly:</strong> un design bun ușurează <em>Core Web Vitals</em>, reduce bounce-ul și crește CTR-ul.</li>
    </ul>

    {/* Procesul de design */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Procesul nostru de web design</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color">
        <strong>Descoperire:</strong> obiective, public, competitorii, audit UX al site-ului existent (dacă e cazul).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Structură & conținut:</strong> sitemap, user flows și wireframe-uri cu accent pe mesaj și CTA.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>UI design:</strong> moodboard, paletă cromatică, tipografie, componente; design de pagini cheie (Home, Servicii, PDP/PLP dacă e e-commerce).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Prototip & validare:</strong> prototip interactiv, testări rapide de uzabilitate și ajustări iterative.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Handoff:</strong> kit UI, tokens, specificații și suport pentru implementare fără fricțiuni.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Iterație:</strong> după lansare, prioritizăm îmbunătățiri pe baza datelor (heatmaps, GA4, feedback).
      </li>
    </ul>

    {/* UX: pagini esențiale */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">UX pentru paginile esențiale</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Acasă:</strong> promisiune clară, beneficii, dovezi sociale, overview servicii, CTA vizibil.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Servicii:</strong> carduri cu beneficii + link către pagini dedicate (evităm suprapunerea conținutului).
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Despre:</strong> cine livrează, proces, valori; fotografie, nume reale, elemente care cresc încrederea.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Contact:</strong> formular scurt, alternative (telefon, email, WhatsApp), hartă dacă e relevant local.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>E-commerce:</strong> PLP cu filtre utile, PDP convingător, checkout scurt (1–2 pași).
      </li>
    </ul>

    {/* Design system & handoff */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Design system & handoff fara frictiuni</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Construim un <strong>design system</strong> cu tokens (culori, spacing, radii, umbre), grid responsiv și set
      de componente (buttons, inputs, cards, nav, modals). Livrăm un UI Kit coerent, documentat și gata de extins.
      Handoff-ul către development include specificații, stări (hover/focus/disabled), guideline de accesibilitate
      și asset-uri optimizate. Astfel, implementarea este rapidă și fidelă designului.
    </p>

    {/* Performanță, accesibilitate, SEO sinergic */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Performanta, accesibilitate si SEO</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Un web design bun ușurează atingerea țintelor <em>Core Web Vitals</em> (LCP, CLS, INP) și reduce cogniția necesară
      pentru a înțelege oferta. Folosim imagini optimizate (WebP/AVIF), ierarhie vizuală clară, componente re-utilizabile,
      și gândim layout-uri care lucrează cu SEO: conținut ușor de scanat, heading-uri logice, secțiuni care răspund
      întrebărilor utilizatorilor și poziționează CTA-urile acolo unde sunt așteptate.
    </p>

    {/* Elemente UI care fac diferența */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Elemente UI care convertesc</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Header clar, navigație simplă, căutare vizibilă (dacă volumul de conținut o cere).</li>
      <li className="mb-2 text-base text-body-color">Hero cu promisiune + sub-beneficii + CTA; „secondary CTA” pentru informare.</li>
      <li className="mb-2 text-base text-body-color">Secțiuni de beneficii în bullets, dovezi sociale, logo-uri clienți.</li>
      <li className="mb-2 text-base text-body-color">Formulare scurte, validare clară, feedback de succes și prevenție spam.</li>
      <li className="mb-2 text-base text-body-color">Footer cu linkuri utile, date companie, politici și micro-navigație.</li>
    </ul>

    {/* Ce primești concret */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primesti concret</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Wireframe-uri pentru paginile cheie (Home, Servicii, Contact, etc.).</li>
      <li className="mb-2 text-base text-body-color">UI design high-fidelity pentru paginile principale și șabloane.</li>
      <li className="mb-2 text-base text-body-color">Design system (tokens, componente, guideline de accesibilitate).</li>
      <li className="mb-2 text-base text-body-color">Prototip interactiv și asset-uri optimizate pentru implementare.</li>
      <li className="mb-2 text-base text-body-color">Handoff documentat + suport în implementare.</li>
    </ul>

    {/* Testare & masurare */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Testare, date si imbunatatire continua</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Testări rapide de uzabilitate (task-uri critice, first-click, claritatea mesajelor).</li>
      <li className="mb-2 text-base text-body-color">Integrare GA4 și evenimente utile (scroll, click pe CTA, trimitere formular).</li>
      <li className="mb-2 text-base text-body-color">A/B testing pentru titluri, poziția CTA-urilor și variații de layout.</li>
    </ul>

    {/* Preturi (orientativ) */}
    <h2 id="preturi" className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Preturi (orientativ)</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Bugetul pentru <strong>servicii webdesign</strong> depinde de numărul de pagini, nivelul de personalizare și livrabilele
      necesare (wireframe, UI, design system, prototip). Proiectele standard pornesc de la un pachet de bază și cresc
      în funcție de complexitate. După o discuție scurtă, propunem varianta optimă pentru obiectivele tale.
    </p>

    {/* Interlinking (ajută SEO și UX) */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Designul bun strălucește alături de implementare și SEO:
      {" "}
      <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>,
      {" "}
      <Link href="/servicii/creare-site-prezentare" className="text-primary underline">Creare site de prezentare</Link>,
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link> și
      {" "}
      <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>.
      Pentru identitate vizuală completă:
      {" "}
      <Link href="/servicii/creare-logo-branding" className="text-primary underline">Creare logo & branding</Link>.
    </p>

    {/* Exemplu de rezultat */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      După redesenarea structurii și introducerea unui design system coerent, un site de servicii a redus timpul
      până la primul click util și a crescut cererile din formular. Contribuția principală: claritatea mesajelor,
      poziționarea consecventă a CTA-urilor și performanța mai bună pe mobil.
    </p>

    {/* CTA final */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai sa incepem</span>
    </h3>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne obiectivele și publicul, iar noi propunem arhitectura, stilul vizual și componentizarea potrivite.
      <strong> Cere o ofertă pentru servicii webdesign</strong> și primești un plan clar de pagini, timeline și livrabile.
    </p>
  </div>
);
export const detailsMentenantaWebsite = (
  <div>
    {/* Intro */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Asigurăm <strong>mentenanță website</strong> pentru site-uri rapide, sigure și mereu actualizate. Ne ocupăm de update-uri,
      backup-uri, monitorizare, securitate și mici îmbunătățiri lunare, astfel încât să eviți riscurile și să păstrezi
      performanța SEO. Intervenim rapid pe probleme critice și propunem optimizări pe baza datelor (GA4, Search Console).
    </p>

    {/* Ce include */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce include mentenanța website</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Actualizări platformă/module, verificări compatibilitate și rollback sigur.</li>
      <li className="mb-2 text-base text-body-color">Backup automat și restaurare la nevoie (policy zilnic/săptămânal).</li>
      <li className="mb-2 text-base text-body-color">Monitorizare uptime și alerte, verificări securitate și patch-uri.</li>
      <li className="mb-2 text-base text-body-color">Optimizări de viteză: imagini, cache, CWV (LCP, CLS, INP).</li>
      <li className="mb-2 text-base text-body-color">Mică evoluție: conținut, secțiuni, bugfix-uri și suport editorial.</li>
    </ul>

    {/* SLA & timp de răspuns */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Timp de răspuns și SLA</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Tichete prioritizate pe severitate, cu timp de răspuns rapid pentru incidente critice. Comunicare clară și jurnal de
      schimbări la fiecare intervenție. Raport lunar cu status, task-uri și recomandări.
    </p>

    {/* Interlinking */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Împreună cu mentenanța, recomandăm
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>,
      {" "}
      <Link href="/servicii/creare-site-prezentare" className="text-primary underline">Creare site de prezentare</Link>
      {" "}și
      {" "}
      <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>.
    </p>

    {/* CTA final */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai să începem</span>
    </h2>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne ce ai nevoie și îți propunem un plan de <strong>mentenanță website</strong> potrivit. Asigurăm continuitate,
      securitate și performanță, cu costuri previzibile și raportare clară.
    </p>
  </div>
);


export const detailsDezvoltareAplicatiiMobile = (
  <div>
    {/* Intro (≈120–140 cuvinte) */}
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Construim <strong>aplicatii mobile</strong> performante pentru iOS si Android, gandite sa livreze valoare rapid
      (MVP) si sa scaleze ulterior in siguranta. Pornim de la obiectivele tale, definim fluxurile esentiale si
      validam ipotezele printr-un prototip testabil. Alegem tehnologia potrivita (nativ sau cross-platform) in
      functie de cerinte, buget si timeline, iar infrastructura (backend/API) este proiectata pentru stabilitate,
      securitate si extensibilitate. Integrarile cu plati, autentificare, analytics si push notifications vin standard,
      iar pipeline-urile de CI/CD ne permit sa livram frecvent, cu calitate constanta.
    </p>

    {/* Cand alegi nativ vs cross-platform */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Tehnologie: nativ sau cross-platform?</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">
        <strong>Nativ (Swift/Kotlin):</strong> performanta maxima, acces la capabilitati avansate (camera, BLE, AR),
        fluiditate UI si control fin asupra resurselor. Recomandat pentru aplicatii cu cerinte high-performance
        sau integrare hardware complexa.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Cross-platform (React Native/Flutter):</strong> time-to-market excelent si cost mai mic de mentenanta
        prin baza de cod comuna. Ideal pentru MVP-uri si produse care nu depind critic de functii native complexe.
      </li>
      <li className="mb-2 text-base text-body-color">
        <strong>Hibrid:</strong> ecran/feature nativ in interiorul unei aplicatii cross sau invers, cand doar anumite
        module necesita performanta de top.
      </li>
    </ul>

    {/* Product discovery & MVP */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Product discovery si MVP</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Clarificam <em>cine</em> foloseste aplicatia, <em>ce problema</em> rezolva si <em>care sunt riscurile</em>. Definim
      un <strong>MVP</strong> cu minimul de functionalitati capabile sa livreze valoare si sa valideze ipotezele.
      Mapam user flows (onboarding, autentificare, taskuri cheie), sketch-uri si prototip interactiv pentru feedback
      timpuriu. Astfel, evitam supradezvoltarea si directionam bugetul catre ceea ce conteaza.
    </p>

    {/* UX/UI mobile-first */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">UX/UI: claritate, viteza, familiaritate</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Patrundere rapida in valoare (time-to-value scurt) prin onboarding minim si tutorial context-aware.</li>
      <li className="mb-2 text-base text-body-color">Navigatie familiara (tab bar/drawer), gesturi consistente, feedback vizual si haptic acolo unde ajuta.</li>
      <li className="mb-2 text-base text-body-color">Componente accesibile: zone de atingere, contrast, texte scalabile, mod intunecat (optional).</li>
      <li className="mb-2 text-base text-body-color">Design system mobil: stiluri, componente, stari, guidelines pentru consistenta si viteza in iteratii.</li>
    </ul>

    {/* Arhitectura & backend/API */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Arhitectura, backend si API</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Propunem o arhitectura modulara, cu separarea responsabilitatilor (UI, business logic, data). Backend-ul poate fi
      <em> serverless</em> (API-uri pe edge) sau clasic (Node/Go/Python), cu baze de date relationale sau NoSQL, in functie
      de tipul datelor. Implementam autentificare (email/telefon/OAuth), autorizare pe roluri, rate limiting si logare
      centralizata a evenimentelor pentru observabilitate. API-urile sunt documentate (OpenAPI) si testate automat.
    </p>

    {/* Securitate & protectia datelor */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Securitate si protectia datelor</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Stocare securizata (Keychain/Keystore), criptare in tranzit (TLS) si la repaus (unde e cazul).</li>
      <li className="mb-2 text-base text-body-color">Masuri anti-tampering si ofuscarea codului in build-urile publice.</li>
      <li className="mb-2 text-base text-body-color">Conformitate GDPR: minimizarea datelor, consimtamant clar, stergere/anonymizare la cerere.</li>
      <li className="mb-2 text-base text-body-color">Politici JWT/refresh tokens, expirare sesiuni, parole hash-uite, 2FA optional.</li>
    </ul>

    {/* Functionalitati esentiale & integrari */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Functionalitati esentiale & integrari</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color"><strong>Autentificare:</strong> email/telefon, Apple/Google login, reset parola, management cont.</li>
      <li className="mb-2 text-base text-body-color"><strong>Plati:</strong> Stripe/Netopia/PayU, abonamente, achizitii in-app (IAP) unde se preteaza.</li>
      <li className="mb-2 text-base text-body-color"><strong>Push notifications:</strong> segmentare, programare, deep-links si canale separate pentru tranzactionale vs marketing.</li>
      <li className="mb-2 text-base text-body-color"><strong>Offline & sincronizare:</strong> cache local, cozi de request-uri, rezolvare conflicte.</li>
      <li className="mb-2 text-base text-body-color"><strong>Analytics & crash reporting:</strong> GA4/Firebase/Segment + Sentry/Crashlytics.</li>
      <li className="mb-2 text-base text-body-color"><strong>Media & device APIs:</strong> camera, locatie, fisiere, senzori (cand e relevant).</li>
    </ul>

    {/* Performanta si calitate (profilare) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Performanta, stabilitate si calitate</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Vizam pornire rapida a aplicatiei, tranzitii fluide si consum minim de resurse. Folosim profilare (FPS, memorie,
      CPU), lazy-loading pentru ecrane grele, caching si optimizari pe liste si imagini. Telemetria (crash-uri, erori,
      freeze) alimenteaza un ciclu continuu de imbunatatire. In paralel, masuram <em>retentie, DAU/MAU, funnel-uri</em> si
      imbunatatim pe baza datelor.
    </p>

    {/* Testare & QA */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Testare si asigurarea calitatii</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Unit tests pe logica si integrare pentru fluxuri critice.</li>
      <li className="mb-2 text-base text-body-color">E2E pe scenarii cheie (login, plati, onboarding) si testare pe device-uri reale.</li>
      <li className="mb-2 text-base text-body-color">Test Flight/Closed testing (Android) pentru feedback rapid si beta-testing targetat.</li>
    </ul>

    {/* CI/CD & livrare frecventa */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">CI/CD: livrari rapide si sigure</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Automatizam build-urile si semnarea, ruleaza testele si distribuim versiunile catre testeri si store-uri.
      <strong> Feature flags</strong> ne permit sa activam/oprim functionalitati fara release complet, iar <em>app config</em>
      separa mediile (dev/staging/prod). Versionarea si changelog-ul sunt clare pentru echipe si stakeholderi.
    </p>

    {/* Publicare & ASO */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Publicare in store-uri & ASO</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Pregatim listarea: nume, descriere, cuvinte-cheie, categorii si politici.</li>
      <li className="mb-2 text-base text-body-color">Set complet de asset-uri: icon, splash, screenshots si video preview.</li>
      <li className="mb-2 text-base text-body-color">ASO de baza: titlu, subtitlu, descriere si iteratii pe baza conversiilor din store.</li>
    </ul>

    {/* Mentenanta & suport */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Mentenanta, suport si crestere</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Dupa lansare, asiguram actualizari periodice, corectii rapide, monitorizare si optimizari pe baza datelor.
      Putem extinde produsul cu functii noi si optimiza funnel-urile de activare si retentie (onboarding, notificari,
      programe de recomandare, promotii sezoniere).
    </p>

    {/* Ce primesti concret (deliverables) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Ce primesti concret</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Aplicatie iOS si/sau Android (nativ sau cross-platform) gata de publicat.</li>
      <li className="mb-2 text-base text-body-color">Backend/API si baza de date, documentatie si access control.</li>
      <li className="mb-2 text-base text-body-color">Design system mobil, prototip si asset-uri (icon, screenshots, video).</li>
      <li className="mb-2 text-base text-body-color">Pipeline CI/CD, scheme de build si instructiuni de release.</li>
      <li className="mb-2 text-base text-body-color">Setari analytics, crash reporting si dashboard KPIs.</li>
    </ul>

    {/* Proces & timeline (etape) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Proces & timeline</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color"><strong>Discovery:</strong> obiective, utilizatori, MVP, roadmap.</li>
      <li className="mb-2 text-base text-body-color"><strong>UX/UI:</strong> flow-uri, wireframe, prototip, design system.</li>
      <li className="mb-2 text-base text-body-color"><strong>Dezvoltare:</strong> app + backend/API, integrari, notificari, payments.</li>
      <li className="mb-2 text-base text-body-color"><strong>QA & beta:</strong> testare pe device-uri reale, optimizari performanta si stabilitate.</li>
      <li className="mb-2 text-base text-body-color"><strong>Publicare:</strong> listare in App Store/Google Play, ASO de baza.</li>
      <li className="mb-2 text-base text-body-color"><strong>Mententa & crestere:</strong> monitorizare, iteratii si noi functionalitati.</li>
    </ul>

    {/* Preturi (orientativ) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Preturi (orientativ)</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Bugetul depinde de complexitate, integrari si platforme vizate. Proiectele tipice pornesc de la
      <strong> ~4000 EUR</strong> pentru un MVP, crescand pentru functionalitati avansate (offline complex, IAP, integrare
      enterprise). Dupa o discutie scurta, iti propunem varianta optima pentru obiective si timeline.
    </p>

    {/* Interlinking (ecosistem complet) */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Servicii conexe recomandate</span>
    </h3>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Pentru o lansare completa, adauga
      {" "}
      <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>
      {" "} (landing pages, admin),
      {" "}
      <Link href="/servicii/web-design" className="text-primary underline">Web design</Link>
      {" "} (identitate vizuala & UI),
      {" "}
      <Link href="/servicii/creare-logo-branding" className="text-primary underline">Creare logo & branding</Link>
      {" "} (icon & materiale de promovare) si
      {" "}
      <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>
      {" "} pentru prezenta web care sustine cresterea aplicatiei.
    </p>

    {/* Exemplu de rezultat (generic) */}
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Exemplu de rezultat</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Intr-un MVP livrat in etape saptamanale, am validat fluxul principal cu un grup restrans de utilizatori,
      apoi am iterat pe baza feedback-ului: onboarding mai scurt, mesajele clarificate si optimizari de performanta.
      Dupa listare, rata de activare a crescut datorita imbunatatirilor ghidate de date (analytics si crash reporting).
    </p>

    {/* CTA final */}
    <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Hai sa incepem</span>
    </h3>
    <p className="mb-0 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Spune-ne obiectivele si publicul tinta, iar noi propunem arhitectura, tehnologia si planul de livrare potrivit.
      <strong> Cere o oferta pentru dezvoltare aplicatii mobile</strong> si primesti rapid un roadmap clar cu timeline si costuri.
    </p>
  </div>
);


const detailsBranding = (
  <div>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Brandul este promisiunea ta către clienți. O identitate vizuală coerentă face mesajul ușor de recunoscut și de
      reținut. Construim un sistem vizual complet, de la logo și paletă cromatică la tipografie, iconografie și reguli
      clare de utilizare, astfel încât comunicarea ta să fie consecventă pe toate canalele.
    </p>
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Descoperire & poziționare</span>
    </h2>
    <p className="mb-5 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Înțelegem industria, competitorii și publicul țintă. Definim personalitatea brandului, atributele diferențiatoare și
      mesajele cheie. Rezultatul este o direcție clară pentru identitatea vizuală și tonul vocii.
    </p>
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Identitate vizuală</span>
    </h2>
    <ul className="list mb-6 list-inside list-disc">
      <li className="mb-2 text-base text-body-color">Logo în variante principale și secundare, monocrom și invers</li>
      <li className="mb-2 text-base text-body-color">Paletă cromatică echilibrată și scalabilă</li>
      <li className="mb-2 text-base text-body-color">Tipografie pentru titluri, paragrafe și accent</li>
      <li className="mb-2 text-base text-body-color">Set de pictograme și pattern‑uri vizuale</li>
    </ul>
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Manual de brand & aplicații</span>
    </h2>
    <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Livrăm un ghid practic cu reguli de folosire, exemple corecte și incorecte, griduri și spațieri, astfel încât echipele
      interne și partenerii să poată aplica identitatea în mod uniform. Oferim template‑uri pentru social media, documente
      și materiale de prezentare pentru un start rapid.
    </p>
    <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">Proces & livrabile</span>
    </h2>
    <ul className="list mb-7 list-inside list-decimal">
      <li className="mb-2 text-base text-body-color">Research, poziționare, moodboards</li>
      <li className="mb-2 text-base text-body-color">Explorare direcții vizuale, iterații</li>
      <li className="mb-2 text-base text-body-color">Finalizare logo, paletă, tipografie, iconografie</li>
      <li className="mb-2 text-base text-body-color">Manual de brand și kit de aplicații</li>
    </ul>
  </div>
);

export const serviceData: Service[] = [
  {
    id: uuid(),
    title: "Web design",
    description:
      "Web design profesional: UX/UI modern, viteză excelentă și conversii mai bune.",
    metaTitle: "Web design – servicii profesionale | Web Dynamicx",
    metaDescription:
      "Servicii de web design orientate pe rezultate: UX/UI modern, design system și interfețe rapide care cresc conversiile.",
    slug: "web-design",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsWebDesign,
    faqs: [
      { question: "Ce includ serviciile webdesign?", answer: "Serviciile noastre webdesign includ: UX/UI modern, arhitectură de pagini, componente și web design servicii orientate pe conversie și viteză de încărcare." },
      { question: "Ce livrabile primesc cu web design servicii?", answer: "Cu serviciile webdesign primești: wireframe-uri, prototip interactiv, componente UI și guideline complete pentru implementare." },
      { question: "Serviciile webdesign includ redesign site-uri existente?", answer: "Da, web design servicii noastre includ redesign complet și optimizări pe zonele critice pentru performanță și conversie." },
      { question: "Web design servicii afectează performanța site-ului?", answer: "Serviciile noastre webdesign sunt gândite pentru accesibilitate și Core Web Vitals excelente (LCP/CLS/INP) prin web design servicii optimizate." },
    ],
  },
  {
    id: uuid(),
    title: "Creare logo & branding",
    description:
      "Identitate vizuală, creare logo și materiale grafice care construiesc încredere.",
    metaTitle: "Creare logo & branding – identitate vizuală | Web Dynamicx",
    metaDescription:
      "Logo, paletă, tipografie și manual de brand. Identitate coerentă, aplicabilă pe toate canalele.",
    slug: "creare-logo-branding",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsBranding,
    faqs: [
      { question: "Ce livrabile primesc?", answer: "Logo în formate multiple, paletă cromatică, tipografie, guideline-uri și fișiere sursă." },
      { question: "Câte revizii sunt incluse?", answer: "În mod standard 2–3 runde, extensibile în funcție de pachet." },
      { question: "Care este durata proiectului?", answer: "1–3 săptămâni, în funcție de complexitate și numărul de runde de feedback." },
      { question: "Drepturile de utilizare?", answer: "La final, drepturile de utilizare sunt transferate clientului." },
    ],
  },
  {
    id: uuid(),
    title: "Dezvoltare aplicații mobile",
    description:
      "Aplicații mobile performante pentru iOS și Android, gândite pentru conversie.",
    metaTitle: "Dezvoltare aplicații mobile – iOS & Android | Web Dynamicx",
    metaDescription:
      "MVP, UX, backend/API, plăți și analytics. Nativ sau cross-platform, CI/CD și publicare în store-uri.",
    slug: "dezvoltare-aplicatii-mobile",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsDezvoltareAplicatiiMobile,
    faqs: [
      { question: "Dezvoltați nativ sau cross-platform?", answer: "Recomandăm soluția potrivită: nativ pentru performanță, cross pentru time-to-market." },
      { question: "Cu ce costuri să mă aștept?", answer: "Depinde de funcționalități. Proiectele tipice pornesc de la 4000 EUR." },
      { question: "Asigurați backend și API?", answer: "Da, putem livra backend, API, autentificare, plăți și analytics." },
      { question: "Publicare în store-uri?", answer: "Da, ne ocupăm de listing, screen-shots, descrieri și configurări." },
    ],
  },
  {
    id: uuid(),
    title: "Creare magazin online",
    description:
      "Servicii creare magazin online și realizare magazin online profesionale: e-commerce optimizat pentru conversii și SEO.",
    metaTitle: "Creare magazin online profesional | Realizare magazin online | Web Dynamicx",
    metaDescription:
      "Servicii creare magazin online și realizare magazin online cu Shopify, WooCommerce. E-commerce optimizat pentru conversii și SEO. Consultație gratuită!",
    slug: "creare-magazin-online",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsCreareMagazinOnline,
    faqs: [
      { question: "Cât costă serviciile de creare magazin online?", answer: "Serviciile noastre de creare magazin online pornesc de la 1200 EUR pentru implementări standard. Prețul pentru realizare magazin online variază după catalog și integrări." },
      { question: "Ce platformă alegeți pentru creare magazin online?", answer: "Pentru servicii creare magazin online recomandăm: Shopify pentru lansare rapidă, WooCommerce pentru flexibilitate, sau soluții custom pentru cerințe complexe de realizare magazin online." },
      { question: "În cât timp finalizați serviciile de creare magazin online?", answer: "Serviciile noastre de creare magazin online se finalizează în 4-6 săptămâni în medie, în funcție de complexitatea proiectului de realizare magazin online și feedback." },
      { question: "Serviciile de creare magazin online includ SEO?", answer: "Da, toate serviciile noastre de creare magazin online includ optimizare SEO completă: meta tags pentru produse, viteză încărcare și schema de date e-commerce." },
    ],
  },
  {
    id: uuid(),
    title: "Servicii SEO profesionale",
    description:
      "Servicii SEO profesionale și servicii optimizare SEO: optimizare SEO site completă pentru creștere în Google.",
    metaTitle: "Servicii SEO profesionale | Optimizare SEO site | Web Dynamicx",
    metaDescription:
      "Servicii optimizare SEO și optimizare SEO site profesionale: audit tehnic, on-page, conținut. Servicii SEO profesionale cu rezultate măsurabile!",
    slug: "optimizare-seo",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsOptimizareSeo,
    faqs: [
      { question: "Ce includ serviciile SEO profesionale?", answer: "Serviciile noastre SEO profesionale includ: audit tehnic complet, optimizare SEO site on-page, crearea de conținut optimizat și servicii optimizare SEO pentru autoritate de domeniu." },
      { question: "Când văd rezultate cu serviciile optimizare SEO?", answer: "Serviciile noastre SEO profesionale oferă primele semne de îmbunătățire în 6-8 săptămâni, iar creșteri solide în pozițiile Google în 3-6 luni cu optimizare SEO site constantă." },
      { question: "Serviciile SEO profesionale includ optimizare locală?", answer: "Da, serviciile noastre optimizare SEO includ și SEO local: optimizăm profile Google Business și pagini specifice pentru căutări locale cu servicii optimizare SEO dedicate." },
      { question: "Serviciile optimizare SEO necesită abonament lunar?", answer: "Serviciile noastre SEO profesionale sunt recomandate lunar pentru creștere constantă și protecție competitivă prin optimizare SEO site continuă." },
    ],
  },
  {
    id: uuid(),
    title: "Creare site de prezentare",
    description:
      "Servicii creare site de prezentare profesionale: design modern, optimizare SEO și conversii măsurabile.",
    metaTitle: "Servicii creare site de prezentare profesionale | Web Dynamicx",
    metaDescription:
      "Servicii creare site prezentare cu design modern, optimizare SEO și conversii măsurabile. Tehnologii avansate, livrare rapidă. Cere ofertă gratuită!",
    slug: "creare-site-prezentare",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsCreareSitePrezentare,
    faqs: [
      { question: "Ce includ serviciile de creare site de prezentare?", answer: "Serviciile noastre de creare site prezentare includ: design personalizat, implementare responsive, optimizare SEO completă, formulare de contact, analytics și mentenanță 3 luni gratuită." },
      { question: "Cât costă serviciile de creare site de prezentare?", answer: "Prețurile pentru servicii creare site prezentare pornesc de la 800 EUR, în funcție de complexitate și funcționalități. Oferim consultație gratuită pentru evaluarea precisă." },
      { question: "În cât timp sunt gata serviciile de creare site de prezentare?", answer: "Serviciile noastre de creare site de prezentare se finalizează în 2-4 săptămâni, în funcție de numărul de pagini și viteza de feedback." },
      { question: "Serviciile de creare site prezentare includ optimizare SEO?", answer: "Da, toate serviciile noastre de creare site de prezentare includ optimizare SEO completă: meta tags, structură optimizată, viteză încărcare și schema markup." },
    ],
  },
  {
    id: uuid(),
    title: "Mentenanță website",
    description:
      "Mentenanta website și servicii optimizare site: update-uri, securitate, monitorizare și optimizări de viteză.",
    metaTitle: "Mentenanta website | Servicii optimizare site | Web Dynamicx",
    metaDescription:
      "Mentenanta website profesională: servicii optimizare site cu update-uri, backup, securitate și monitorizare uptime. Optimizări Core Web Vitals!",
    slug: "mentenanta-website",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsMentenantaWebsite,
    faqs: [
      { question: "Ce include mentenanta website?", answer: "Serviciile noastre de mentenanta website includ: update-uri regulate, backup automat, securitate avansată, monitorizare uptime și servicii optimizare site pentru viteză." },
      { question: "Care este timpul de răspuns pentru mentenanta website?", answer: "Pentru serviciile de mentenanta website, incidentele critice sunt tratate prioritar cu SLA definit per pachet de servicii optimizare site." },
      { question: "Mentenanta website necesită abonament obligatoriu?", answer: "Nu, dar serviciile lunare de mentenanta website asigură stabilitate și prevenție continuă prin servicii optimizare site regulate." },
      { question: "Serviciile de mentenanta website includ modificări de conținut?", answer: "Da, pachetele noastre de mentenanta website includ și evoluții minore de conținut, plus servicii optimizare site la cerere." },
    ],
  },
  {
    id: uuid(),
    title: "Creare site web",
    description:
      "Oferta realizare site web și creare site prezentare: website-uri personalizate, rapide și optimizate SEO.",
    metaTitle: "Creare site web personalizat | Oferta realizare site web | Web Dynamicx",
    metaDescription:
      "Oferta realizare site web cu Next.js: website personalizat, SEO on-page corect și Core Web Vitals optimizate. Consultație gratuită!",
    slug: "creare-site-web",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: detailsCreareSiteWeb,
    faqs: [
      { question: "Cât costă oferta realizare site web?", answer: "Oferta noastră de realizare site web pornește de la 600 EUR pentru creare site prezentare, în funcție de pagini, funcționalități și design." },
      { question: "În cât timp finalizați oferta realizare site web?", answer: "Oferta realizare site web se finalizează în 2-4 săptămâni pentru creare site prezentare, în funcție de complexitate și feedback." },
      { question: "Oferta realizare site web include SEO?", answer: "Da, oferta noastră de realizare site web include SEO complet: titles, descriptions, headings, sitemap și optimizare viteză pentru creare site prezentare." },
      { question: "Oferiți mentenanță după realizare site web?", answer: "Da, după realizare site web oferim planuri lunare de mentenanță pentru update-uri, monitorizare și îmbunătățiri continue." },
    ],
  },
  {
    id: uuid(),
    title: "Promovare site",
    description:
      "Promovare site și servicii optimizare site: creștere organică în Google prin SEO și marketing digital.",
    metaTitle: "Promovare site profesională | Servicii optimizare site | Web Dynamicx",
    metaDescription:
      "Promovare site prin SEO, Google Ads și marketing digital. Servicii optimizare site pentru creștere organică și trafic calificat. Rezultate măsurabile!",
    slug: "promovare-site",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    details: (
      <div>
        <p className="mb-6 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
          Serviciile noastre de <strong>promovare site</strong> combină SEO avansat cu marketing digital strategic pentru 
          creștere organică și sustenabilă în Google. Specializarea noastră în <strong>servicii optimizare site</strong> 
          include audit tehnic complet, optimizare on-page, crearea de conținut optimizat și campanii de link building. 
          Fiecare strategie de <strong>promovare site</strong> este personalizată în funcție de nișa ta și competiția locală, 
          cu focus pe cuvinte cheie cu intenție de cumpărare și rezultate măsurabile. Dacă pornești de la zero, vezi
          {" "}
          <Link href="/servicii/creare-site-web" className="text-primary underline">Creare site web</Link>;
          pentru e‑commerce, vezi
          {" "}
          <Link href="/servicii/creare-magazin-online" className="text-primary underline">Creare magazin online</Link>;
          iar pentru baza tehnică și conținut, vezi
          {" "}
          <Link href="/servicii/optimizare-seo" className="text-primary underline">Servicii SEO profesionale</Link>.
        </p>
        
        <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          <span className="text-primary">De ce să alegi serviciile noastre de promovare site</span>
        </h2>
        <ul className="list mb-6 list-inside list-disc">
          <li className="mb-2 text-base text-body-color">
            <strong>Experiență în promovare site:</strong> peste 100 de proiecte cu creștere medie de 150% în trafic organic în 6 luni.
          </li>
          <li className="mb-2 text-base text-body-color">
            <strong>Servicii optimizare site complete:</strong> de la audit tehnic la link building și monitorizare competiție.
          </li>
          <li className="mb-2 text-base text-body-color">
            <strong>Strategii personalizate de promovare site:</strong> analizăm nișa ta și construim planuri specifice pentru rezultate rapide.
          </li>
          <li className="mb-2 text-base text-body-color">
            <strong>Raportare transparentă:</strong> dashboard lunar cu progresul în Google și servicii optimizare site implementate.
          </li>
        </ul>
      </div>
    ),
    faqs: [
      { question: "Ce includ serviciile de promovare site?", answer: "Serviciile noastre de promovare site includ: audit SEO complet, optimizare tehnică, crearea de conținut, link building și servicii optimizare site pentru Google My Business." },
      { question: "Cât costă promovarea site-ului?", answer: "Serviciile de promovare site pornesc de la 400 EUR/lună, în funcție de competitivitatea nișei și servicii optimizare site necesare." },
      { question: "Când văd rezultate cu promovarea site-ului?", answer: "Serviciile noastre de promovare site oferă primele îmbunătățiri în 4-6 săptămâni, iar creșteri semnificative în 3-4 luni prin servicii optimizare site constante." },
      { question: "Promovarea site-ului include Google Ads?", answer: "Da, serviciile noastre de promovare site pot include și Google Ads pentru rezultate rapide, complementar cu servicii optimizare site organice pe termen lung." },
    ],
  },
];

