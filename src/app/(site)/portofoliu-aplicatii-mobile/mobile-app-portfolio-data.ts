/** Hub + studii de caz aplicații mobile — conținut SEO (suport pentru /servicii/dezvoltare-aplicatii-mobile). */

export const mobileAppsServiceHref = "/servicii/dezvoltare-aplicatii-mobile" as const;
export const mobilePortfolioHubPath = "/portofoliu-aplicatii-mobile" as const;

export type MobileCaseStudyGalleryItem = { src: string; alt: string };

export type MobileCaseStudy = {
  slug: string;
  cardTitle: string;
  h1: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  playStoreUrl?: string;
  image: string;
  imageAlt: string;
  /** Capturi suplimentare (alt unic fiecare) — afișate în cadru tip telefon pe pagina studiului. */
  gallery?: MobileCaseStudyGalleryItem[];
  /** Text sub titlul „Capturi din aplicație” (implicit: copy generic). */
  gallerySectionLead?: string;
  context: string;
  objectives: string[];
  solution: string;
  /** O propoziție opțională înainte de lista de funcționalități. */
  featuresSectionLead?: string;
  features: string[];
  technologies: string[];
  impact: string[];
  relatedSlugs: string[];
  /** Frază pentru link contextual unic spre servicii (evită același anchor ca pe hub). */
  serviceLinkPhrase: string;
  /** 2–3 puncte scurte pe cardul din hub (problemă / scop, nu marketing gol). */
  cardBullets: string[];
  /** Paragraf pentru cardurile evidențiate pe hub (tip app, pentru cine e, beneficiu). */
  hubSpotlightParagraph?: string;
  /** Linie „Pentru: …” pe cardurile evidențiate (opțional). */
  goodForLabel?: string;
  /** O propoziție scurtă „Rezolvă: …” pe cardurile evidențiate (opțional). */
  problemSolved?: string;
  /** Text buton principal pe card hub (implicit în componentă). */
  cardPrimaryCtaLabel?: string;
  /** Override text înainte de linkul spre serviciu în secțiunea „Următorul pas” (pagina studiului). */
  nextStepIntro?: string;
  /** Override text după linkul spre serviciu în secțiunea „Următorul pas”. */
  nextStepOutro?: string;
  /** Etichetă buton principal spre pagina de serviciu (pagina studiului). */
  primaryServiceCtaLabel?: string;
  /** Intro opțional pentru „Proiecte înrudite” (altfel text generic). */
  relatedSectionIntro?: string;
};

/** Proiecte evidențiate sus pe hub — editează ordinea/slug-urile după nevoie. */
export const featuredMobilePortfolioSlugs = [
  "styleconnect-rezervari-saloane",
  "coffee-buzz-cafenea-fidelizare-comenzi",
  "ydestiny-social-astrology",
] as const;

/** Preview scurt pe pagina de serviciu mobile. */
export const servicePageFeaturedMobilePortfolioSlugs = [
  "styleconnect-rezervari-saloane",
  "coffee-buzz-cafenea-fidelizare-comenzi",
  "doitnow-provocari-zilnice-ai",
] as const;

export const mobilePortfolioHub = {
  pageTitle: "Aplicații mobile dezvoltate pentru business-uri reale",
  pageDescription:
    "Mai jos găsești exemple de aplicații mobile dezvoltate pentru diferite tipuri de business — de la rezervări și marketplace-uri până la aplicații interne sau platforme de conținut.",
  metaTitle: "Portofoliu aplicații mobile — studii de caz | Web Dynamicx",
  metaDescription:
    "Aplicații livrate în producție: programări, HoReCa, comunități, conținut. Studii de caz concrete — exemple reale, nu mockup-uri, înainte să discuți proiectul.",
  /** Hero sub PageTitle: lăsat gol — conținutul principal e în H1 + descriere PageTitle. */
  heroLead: "",
  heroImpactLine: "",
  /** Aceeași ilustrație ca secțiunea „Aplicații de e-commerce” pe pagina de serviciu mobile. */
  heroAsideImage: "/images/services/aplicatie-mobila-ecommerce.webp",
  heroAsideImageAlt: "Capturi de ecran pe telefoane — exemple de interfețe aplicații mobile",
  /** Tranziție între PageTitle și proiecte: fără CTA-uri duplicate. */
  portfolioTransitionTitle: "Exemple reale de aplicații mobile dezvoltate",
  portfolioTransitionBody:
    "Mai jos găsești aplicații create pentru diferite tipuri de business — de la rezervări și marketplace-uri până la produse digitale și aplicații interne.",
  portfolioTransitionImageCaption: "Exemple vizuale din proiecte mobile",
  /** Bandă scurtă sub hero — cifre deja susținute în conținutul site-ului (fără promisiuni neverificabile). */
  statsStrip: {
    items: [
      { figure: "30+", label: "aplicații mobile dezvoltate" },
      { figure: "Google Play", label: "lansări oficiale pentru Android" },
      { figure: "App Store", label: "lansări oficiale pentru iOS" },
      { figure: "De la idee la lansare", label: "inclusiv publicare în Play și App Store" },
    ],
    microLine: "",
  },
  introHeading: "Ce construim",
  introParagraph1:
    "Aici vezi aplicații livrate în producție, nu prezentări generice. Obiectivul fiecărui proiect: un flux clar pentru utilizator și pentru echipa ta.",
  introParagraph2: "",
  introConsultBefore: "Pentru pași, livrabile și ofertă, vezi ",
  introConsultLinkText: "dezvoltare aplicații mobile",
  introConsultAfter: " (pagina de serviciu).",
  featuredHeading: "Proiecte reprezentative",
  featuredIntroBefore: "Trei exemple reprezentative — programări, HoReCa și produs digital cu retenție. Vezi cum arată ",
  featuredServiceLinkAnchor: "creare aplicație mobilă",
  featuredIntroAfter: " pentru utilizatori reali.",
  /** Listă completă pe pagina de servicii mobile (titlu + intro, fără „trei exemple”). */
  servicePagePortfolioHeading: "Câteva proiecte din portofoliul nostru mobil",
  servicePagePortfolioIntro:
    "Un preview scurt cu exemple relevante pentru tipuri diferite de business: programări, comenzi și produse digitale orientate pe retenție. Fiecare card duce la studiul de caz complet, cu capturi și detalii despre obiective și livrare.",
  /** Micro-copy după grid-ul featured, înainte de „Alte proiecte”. */
  afterFeaturedMicroCopy:
    "Proiectele de mai sus sunt exemple reale. Dacă ai o idee similară sau vrei să construiești o aplicație pentru business-ul tău, putem discuta concret cerințele.",
  otherProjectsIntro: "Alte aplicații din portofoliu, cu probleme și industrii diferite.",
  finalCtaTitle: "Vrei să dezvoltăm o aplicație similară pentru business-ul tău?",
  finalCtaText: "Spune-ne ce vrei să construiești și îți propunem o soluție adaptată.",
  finalCtaTrustLine: "Poți începe de la o idee scurtă — o clarificăm împreună în discuție.",
  expertiseHeading: "Tipuri de aplicații pe care le dezvoltăm",
  expertiseIntro: "Mai jos sunt cele mai comune tipuri de aplicații pe care le dezvoltăm.",
  expertiseCategories: [
    "Aplicații de booking și programări",
    "Aplicații marketplace",
    "Aplicații pentru servicii și comenzi",
    "Aplicații interne pentru echipe",
    "Aplicații de conținut și comunități",
    "Aplicații de fidelizare",
  ],
  expertiseClosingLine: "",
};

export const mobileAppCaseStudies: MobileCaseStudy[] = [
  {
    slug: "styleconnect-rezervari-saloane",
    cardTitle: "StyleConnect — programări saloane",
    h1: "Aplicație de programări pentru saloane — mai puține telefoane, mai multe rezervări | studiu de caz",
    shortDescription:
      "O aplicație care permite clienților să rezerve rapid, iar salonului să gestioneze programările mai clar și cu mai puține întreruperi.",
    metaTitle: "StyleConnect — programări saloane | Studiu de caz | Web Dynamicx",
    metaDescription:
      "Rezervări salon fără haos la telefon: clientul alege slotul, echipa vede programul clar. Studiu de caz StyleConnect — exemplu livrat, disponibil în Google Play.",
    tags: ["Programări", "Salon & beauty", "Servicii locale", "Clienți"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.style.connect.saloon&hl=ro",
    image: "/images/portofoliu/aplicatiimobile/styleconnect4.jpeg",
    imageAlt: "StyleConnect salon: recenzii și confirmări programări",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/styleconnect1.png",
        alt: "StyleConnect — ecran programări și calendar salon",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/styleconnect2.png",
        alt: "StyleConnect: vizualizare sloturi și rezervare client",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/styleconnect3.jpeg",
        alt: "Aplicația StyleConnect — fișă client și istoric vizite",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație care arată procesul de rezervare și modul în care clientul interacționează cu salonul.",
    context:
      "În multe saloane, programările sunt gestionate prin telefon sau mesaje. Asta înseamnă întreruperi constante, rezervări pierdute și timp consumat inutil. În același timp, clienții caută soluții rapide. Dacă nu pot face o programare imediat, există șanse mari să aleagă alt salon. Fără un sistem clar, atât experiența clientului, cât și organizarea internă devin greu de controlat. Pentru client, asta înseamnă timp pierdut. Pentru salon, înseamnă întreruperi, rezervări ratate și oportunități lăsate în mâna concurenței.",
    objectives: [
      "Reducerea dependenței de telefon pentru programări.",
      "Experiență rapidă și simplă pentru client.",
      "Organizare eficientă a programului salonului.",
      "Reducerea rezervărilor ratate și a confuziilor.",
      "Crearea unui sistem clar de gestionare a clienților.",
    ],
    solution:
      "Aplicația a fost construită pentru a simplifica complet procesul de programare. Clientul poate vedea serviciile disponibile, își alege intervalul dorit și finalizează rezervarea în câțiva pași.\n\nÎn același timp, salonul are o imagine clară asupra programărilor și poate gestiona eficient fluxul de clienți. Calendarul devine un instrument central, nu o sursă de confuzie.\n\nExperiența este gândită astfel încât atât clientul, cât și salonul să economisească timp și să reducă fricțiunea din proces.",
    featuresSectionLead:
      "Funcționalități construite pentru a face programările rapide și ușor de gestionat.",
    features: [
      "Programator: sloturi vizibile rapid, fără apel la recepție",
      "Rezervare online în pași scurți",
      "Mementouri (app și SMS unde e configurat) pentru neprezentări mai rare",
      "Calendar sincronizat în aplicație",
      "Fișe client și istoric vizite",
      "Recenzii pentru salon și pentru specialiști",
    ],
    technologies: [
      "Aplicație mobilă Android, publicată în Google Play",
      "Date structurate: programări, clienți, recenzii",
      "Notificări și mesaje — conform configurării proiectului",
      "Flux de actualizări și mentenanță în magazin",
    ],
    impact: [
      "Mai puține apeluri și mesaje în timpul programului.",
      "Programări mai rapide și mai simple pentru clienți.",
      "Vizibilitate mai clară asupra intervalelor disponibile.",
      "Reducerea confuziilor și a rezervărilor ratate.",
      "O experiență mai profesionistă pentru salon și client.",
    ],
    cardBullets: [
      "Clientul rezervă singur; salonul vede agenda la zi",
      "Mai puține întreruperi la telefon în timpul programului",
      "Fișe client, istoric și recenzii într-un singur flux",
    ],
    goodForLabel: "saloane și servicii locale",
    problemSolved: "gestionarea programărilor",
    hubSpotlightParagraph:
      "Mai puține telefoane, rezervări clare pe telefon și programul sub control — pentru salon și pentru client.",
    cardPrimaryCtaLabel: "Vezi proiectul",
    relatedSlugs: [
      "cristina-zurba-tarot-lecturi-ai",
      "my-butterfly-recomandari-palete-tenis",
      "coffee-buzz-cafenea-fidelizare-comenzi",
      "ydestiny-social-astrology",
    ],
    relatedSectionIntro:
      "Alte aplicații dezvoltate pentru business-uri care au nevoie de procese mai clare și experiențe mai simple pentru utilizatori.",
    nextStepIntro:
      "Dacă ai un salon și vrei să reduci timpul pierdut cu programările și să oferi clienților o experiență mai simplă, o aplicație mobilă poate face diferența. Poți vedea cum construim ",
    nextStepOutro:
      " sau ne poți scrie direct pentru a discuta o soluție adaptată salonului tău.",
    serviceLinkPhrase: "aplicații mobile pentru business",
  },
  {
    slug: "coffee-buzz-cafenea-fidelizare-comenzi",
    cardTitle: "Coffee Buzz — cafenea",
    h1: "Aplicație mobilă pentru cafenele — comenzi rapide și clienți care revin",
    shortDescription:
      "Un produs construit pentru a reduce aglomerația, a simplifica comenzile și a crea un canal direct cu clientul.",
    metaTitle: "Coffee Buzz — cafenea și comenzi mobile | Studiu de caz | Web Dynamicx",
    metaDescription:
      "Meniu pe telefon, comenzi în avans, reveniri — mai puțină coadă la vârf de oră. Studiu de caz Coffee Buzz (HoReCa): flux documentat, nu prezentare generică.",
    tags: ["HoReCa & cafenea", "Meniu în app", "Comenzi anticipate", "Fidelizare"],
    image: "/images/portofoliu/aplicatiimobile/coffeebuzz5.jpg",
    imageAlt: "Coffee Buzz — istoric comenzi și zona cont utilizator",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/coffeebuzz1.jpg",
        alt: "Coffee Buzz — catalog băuturi și produse în aplicația cafenelei",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/coffeebuzz2.jpg",
        alt: "Coffee Buzz: detaliu produs și opțiuni în meniul mobil",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/coffeebuzz3.jpg",
        alt: "Aplicația Coffee Buzz — coș și sumar comandă",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/coffeebuzz4.jpg",
        alt: "Coffee Buzz: fereastră ridicare comandă (pickup)",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație care ilustrează fluxul complet: de la descoperirea produselor până la finalizarea comenzii.",
    context:
      "Cafenelele funcționează în jurul momentelor de vârf — dimineața, pauza de prânz sau weekendul. În aceste intervale apar cozi, comenzi ratate și presiune pe personal, iar experiența clientului devine greu de controlat. În același timp, majoritatea interacțiunii cu clientul se oprește după achiziție. Fără un canal direct, este dificil să încurajezi revenirea, să comunici oferte sau să construiești loialitate. Aplicația mobilă a fost gândită ca un punct de contact constant cu clientul: un loc în care poate vedea meniul, comanda din timp și reveni ușor, fără fricțiune. Pentru client, asta înseamnă timp pierdut. Pentru business, înseamnă oportunități ratate.",
    objectives: [
      "Canal direct de comandă, fără dependență exclusivă de trafic la tejghea.",
      "Mai puțină aglomerație în orele de vârf prin comenzi plasate în avans.",
      "Alegere și comandă mai simple pentru client, pe telefon.",
      "Revenire ușoară: flux rapid și familiar la a doua vizită.",
      "Bază pentru comunicare și fidelizare pe termen lung.",
    ],
    solution:
      "Aplicația a fost construită în jurul unui flux simplu: descoperire rapidă a produselor, comandă în câțiva pași și posibilitatea de ridicare fără timp de așteptare.\n\nCatalogul este organizat astfel încât utilizatorul să ajungă rapid la ce caută, fără să parcurgă meniuri complicate. Produsele sunt prezentate clar, iar procesul de comandă este optimizat pentru mobil.\n\nÎn același timp, aplicația funcționează ca un canal de retenție. Clienții care au comandat o dată pot reveni ușor, fără să reia procesul, ceea ce contribuie la formarea unui obicei.",
    featuresSectionLead:
      "Funcționalități construite pentru a reduce pașii și a face procesul de comandă cât mai rapid.",
    features: [
      "Catalog pe categorii (băuturi, food, sezonier), parcurs rapid",
      "Fișă produs clară; opțiuni simple doar unde e nevoie",
      "Coș cu sumar și confirmare înainte de trimitere",
      "Interval ales pentru ridicare la locație",
      "Istoric și revenire rapidă la comenzi recente sau favorite",
      "Pregătită pentru oferte și noutăți în meniu",
    ],
    technologies: [
      "Aplicație pentru clienți, pentru uz zilnic pe telefon",
      "Backend: meniu, comenzi, stări (în lucru / gata de ridicat)",
      "Cont utilizator, date sincronizate între sesiuni",
      "Pregătită pentru publicare în magazin la lansare",
    ],
    impact: [
      "Reducerea timpului petrecut la coadă și o experiență mai rapidă pentru clienți.",
      "Posibilitatea de a plasa comenzi în avans și de a evita aglomerația.",
      "Un canal direct prin care clienții pot reveni fără să depindă de trafic spontan.",
      "O bază pentru fidelizare și comunicare constantă.",
      "Control mai bun asupra modului în care este prezentată oferta cafenelei.",
    ],
    cardBullets: [
      "Comenzi pe telefon, nu doar la tejghea",
      "În avans în orele aglomerate",
      "Clienți care revin — bază pentru mesaje țintite",
    ],
    goodForLabel: "cafenele și locații HoReCa",
    problemSolved: "vârfurile de trafic și revenirea clienților",
    hubSpotlightParagraph:
      "Mai puțină coadă, comenzi clare pe telefon și un canal prin care clienții pot reveni fără să o ia de la zero.",
    cardPrimaryCtaLabel: "Vezi proiectul",
    relatedSlugs: ["styleconnect-rezervari-saloane", "my-butterfly-recomandari-palete-tenis"],
    relatedSectionIntro: "Proiecte similare dezvoltate pentru business-uri reale, cu nevoi diferite.",
    nextStepIntro:
      "Dacă ai o cafenea sau un business similar și vrei un mod mai eficient de a prelua comenzi, de a reduce aglomerația și de a încuraja clienții să revină, o aplicație mobilă poate deveni un canal esențial. Poți continua cu ",
    nextStepOutro:
      " și să vezi cum abordăm astfel de produse, sau ne poți scrie direct pentru a discuta o variantă adaptată business-ului tău.",
    serviceLinkPhrase: "aplicații mobile pentru retail, cafenele și HoReCa",
  },
  {
    slug: "my-butterfly-recomandari-palete-tenis",
    cardTitle: "My Butterfly — tenis de masă",
    h1: "Aplicație de recomandări pentru echipament sportiv — alegi mai ușor, fără să pierzi timp | studiu de caz",
    shortDescription:
      "O aplicație care ghidează utilizatorul către echipamentul potrivit, simplificând procesul de alegere și reducând incertitudinea.",
    metaTitle: "My Butterfly — ghid echipament sport | Studiu de caz | Web Dynamicx",
    metaDescription:
      "Întrebări scurte, apoi recomandare de echipament pe profil: mai puțin timp pierdut în catalog. Studiu de caz My Butterfly — tenis de masă, în Google Play.",
    tags: ["Recomandări", "Sport", "Tenis de masă", "Decizie"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.prosoft.mybutterfly&hl=ro",
    image: "/images/portofoliu/aplicatiimobile/Butterfly2.webp",
    imageAlt: "Aplicația My Butterfly — pas intermediar în fluxul de recomandare",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/Butterfly.webp",
        alt: "My Butterfly — ecran start chestionar recomandări palete tenis de masă",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Butterfly1.webp",
        alt: "My Butterfly: întrebări despre stil și nivel de joc",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Butterfly3.webp",
        alt: "My Butterfly: rezultat recomandare echipament tenis de masă",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație care arată cum utilizatorul răspunde la întrebări și primește recomandări adaptate.",
    context:
      "Alegerea echipamentului potrivit poate fi dificilă, mai ales pentru utilizatorii care nu au experiență sau nu știu exact ce li se potrivește. Un catalog simplu nu este suficient. Fără ghidare, utilizatorul petrece mai mult timp căutând și poate lua o decizie greșită sau poate renunța complet. Pentru utilizator, asta înseamnă timp pierdut. Pentru business, înseamnă șanse mai mici ca utilizatorul să finalizeze alegerea.",
    objectives: [
      "Simplificarea procesului de alegere pentru utilizatori.",
      "Recomandări relevante, în funcție de profil.",
      "Reducerea timpului petrecut în căutare.",
      "Experiență ghidată, nu doar navigare prin catalog.",
      "Șanse mai mari ca utilizatorul să ducă alegerea până la capăt.",
    ],
    solution:
      "Aplicația a fost construită pentru a transforma procesul de alegere într-un flux ghidat. Utilizatorul răspunde la câteva întrebări simple, iar aplicația propune echipamente potrivite în funcție de răspunsuri.\n\nSugestiile sunt relevante: mai puțin efort și mai multă încredere în decizie.\n\nÎn loc să navigheze printr-un catalog complex, utilizatorul este ghidat pas cu pas către o alegere potrivită.",
    featuresSectionLead:
      "Funcționalități construite pentru a ghida utilizatorul și a simplifica procesul de alegere.",
    features: [
      "Întrebări scurte despre stil, nivel și preferințe",
      "Recomandări de echipament pe baza răspunsurilor",
      "Rezultat explicat pe înțeles — nu doar un nume de produs",
      "Parcurs scurt, optimizat pentru telefon",
      "Structură pregătită pentru actualizări de reguli sau catalog",
    ],
    technologies: [
      "Aplicație mobilă Android, publicată în Google Play",
      "Logică de recomandare (reguli / scoring), conform arhitecturii alese",
      "Bază pentru extinderi: catalog, favorite sau conținut educativ",
    ],
    impact: [
      "Proces de alegere mai rapid pentru utilizatori.",
      "Recomandări relevante, adaptate profilului.",
      "Reducerea confuziei în alegerea produselor.",
      "Creșterea încrederii în decizia finală.",
      "O experiență mai clară și mai ușoară de parcurs.",
    ],
    cardBullets: [
      "Întrebări puține, apoi recomandare explicată",
      "Mai puțin timp în catalog, mai multă claritate la decizie",
      "Potrivită și pentru un brand care vinde echipament specializat",
    ],
    goodForLabel: "branduri sport și retail de nișă",
    problemSolved: "alegerea echipamentului",
    hubSpotlightParagraph:
      "Ghidare prin întrebări simple și recomandare pe profil — pentru cine nu vrea să ghicească printre zeci de variante.",
    cardPrimaryCtaLabel: "Vezi conceptul",
    relatedSlugs: [
      "styleconnect-rezervari-saloane",
      "doitnow-provocari-zilnice-ai",
      "coffee-buzz-cafenea-fidelizare-comenzi",
      "ydestiny-social-astrology",
    ],
    relatedSectionIntro:
      "Alte aplicații dezvoltate pentru business-uri care implică decizii și experiențe diferite pentru utilizatori.",
    nextStepIntro:
      "Dacă ai un business în care utilizatorii trebuie să aleagă între mai multe opțiuni, o aplicație de acest tip poate simplifica procesul și poate crește conversia. Poți vedea cum construim ",
    nextStepOutro:
      " sau ne poți scrie direct pentru a discuta o soluție adaptată.",
    serviceLinkPhrase: "aplicații mobile pentru business",
  },
  {
    slug: "doitnow-provocari-zilnice-ai",
    cardTitle: "DO IT NOW — provocări zilnice",
    h1: "Aplicație de obiceiuri zilnice — pași mici, progres vizibil, fără presiune | studiu de caz",
    shortDescription:
      "Produs digital pentru obiceiuri: o provocare pe zi, bifată repede, cu direcție clară — ușor de început și de ținut, fără senzația că o zi ratată „ruinează” tot planul.",
    metaTitle: "DO IT NOW — provocări și obiceiuri zilnice | Studiu de caz | Web Dynamicx",
    metaDescription:
      "O provocare pe zi, bifată repede, progres vizibil: retenție fără ecrane încărcate. Studiu de caz DO IT NOW — produs digital, exemplu publicat în Google Play.",
    tags: ["Obiceiuri", "Progres zilnic", "Produse digitale", "Retenție"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.doitnow.zurba&hl=ro",
    image: "/images/portofoliu/aplicatiimobile/doitnow4.webp",
    imageAlt: "DO IT NOW: activitate scurtă de bifat în aceeași zi",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/doitnow1.webp",
        alt: "DO IT NOW — ecran provocare zilnică și progres",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/doitnow2.webp",
        alt: "Aplicația DO IT NOW: profil și personalizare provocări",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/doitnow3.webp",
        alt: "DO IT NOW — niveluri și istoric obiceiuri",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație: provocarea zilei, setarea profilului și progresul pe niveluri.",
    context:
      "Mulți oameni renunță la aplicațiile de obiceiuri pentru că cer prea mult de la început: onboarding lung, zeci de bifări, senzația că orice zi ratată anulează tot progresul. Alte produse rămân atât de goale încât nu oferă niciun sentiment de direcție. DO IT NOW pornește de la o regulă simplă: o singură provocare la un moment dat, realizabilă în aceeași zi, cu progres vizibil fără să umpli ecranul. Pentru utilizator, asta înseamnă un început ușor și mai puțină presiune când nu e „zi perfectă”. Pentru business, înseamnă o poveste clară în magazin, șanse mai mari să revină mâine și o bază bună pentru experimente pe tipuri de provocări.",
    objectives: [
      "Început rapid: profil scurt, fără pași inutili.",
      "Provocări care par realizabile în aceeași zi.",
      "Progres vizibil pe niveluri, fără navigare complicată.",
      "Retenție prin acțiune mică repetată, nu prin agresivitate sau ecrane încărcate.",
    ],
    solution:
      "Produsul se construiește în jurul unei acțiuni principale clare: ce ai de făcut astăzi, în câteva minute. Istoricul și avansarea pe niveluri stau separat de setări, astfel încât utilizatorul știe unde revine pentru următorul pas, nu pentru a pierde timp prin meniuri.\n\nProvocările sunt generate în funcție de contextul declarat în profil (conform logicii alese în proiect), astfel încât utilizatorul nu trebuie să-și planifice manual fiecare săptămână ca să primească ceva relevant.\n\nAm evitat tabloul de bord încărcat: bucla zilnică rămâne scurtă, repetabilă și ușor de explicat — atât pentru cel care o folosește, cât și pentru echipa care o promovează.",
    featuresSectionLead:
      "Funcționalități gândite pentru o acțiune zilnică clară, fără pași în plus.",
    features: [
      "Profil inițial scurt pentru personalizare",
      "Provocări zilnice legate de contextul declarat",
      "Activități scurte, încheiate în același flux în app",
      "Progres pe niveluri, separat de zona de setări",
      "Revenire simplă: deschizi și știi ce urmează azi",
    ],
    technologies: [
      "Aplicație mobilă Android, în Google Play",
      "Servicii pentru generare contextuală a provocărilor (conform stack-ului proiectului)",
      "Conturi utilizator și stări sincronizate",
      "Cicluri de actualizare și mentenanță în magazin",
    ],
    impact: [
      "Mesaj simplu pentru magazin și campanii: „o acțiune pe zi”.",
      "Utilizatorul înțelege rapid ce are de făcut, fără să parcurgă tot produsul.",
      "Bază pentru teste pe tipuri de provocări sau tonul comunicării.",
      "Retenție susținută prin bucle scurte, nu prin ecrane aglomerate.",
    ],
    cardBullets: [
      "O provocare clară pe zi, nu un plan de 20 de pași",
      "Profil scurt; provocări legate de ce ai declarat",
      "Progres pe niveluri, fără tablou de bord încărcat",
    ],
    goodForLabel: "produse digitale și branduri cu retenție zilnică",
    problemSolved: "complexitatea și abandonul în app-uri de obiceiuri",
    hubSpotlightParagraph:
      "Pași mici pe zi, progres vizibil și flux ușor de explicat — fără să transformi utilizatorul în contabil al propriilor bifări.",
    cardPrimaryCtaLabel: "Vezi proiectul",
    relatedSlugs: [
      "cristina-zurba-tarot-lecturi-ai",
      "my-butterfly-recomandari-palete-tenis",
      "coffee-buzz-cafenea-fidelizare-comenzi",
      "ydestiny-social-astrology",
    ],
    relatedSectionIntro:
      "Alte aplicații pentru business-uri cu modele diferite — conținut, comunitate sau fluxuri operaționale.",
    nextStepIntro:
      "Dacă lucrezi la un produs digital unde oamenii trebuie să revină des, fără să simtă că produsul îi pedepsește, merită discutat un parcurs mobil clar. Citește despre ",
    nextStepOutro:
      " — apoi scrie-ne dacă vrei să adaptăm ideea la proiectul tău.",
    serviceLinkPhrase: "dezvoltare aplicații mobile pentru produse digitale",
  },
  {
    slug: "ydestiny-social-astrology",
    cardTitle: "YDestiny — Social Astrology",
    h1: "YDestiny — social pentru adulți: intenții, valori și spațiu sigur | studiu de caz",
    shortDescription:
      "Aplicație socială (17+): profil pe ce cauți cu adevărat, potriviri explicate, comunitate și mesagerie — departe de swipe-ul superficial, cu reguli clare și control pentru utilizator.",
    metaTitle: "YDestiny — social și comunitate (17+) | Studiu de caz | Web Dynamicx",
    metaDescription:
      "Profil pe intenții, potriviri explicate, mesagerie și siguranță — fără swipe superficial. Studiu de caz YDestiny; aplicație live în Google Play.",
    tags: ["Social", "Comunitate", "Intenții", "Siguranță"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobitools.ydestiny&hl=ro",
    image: "/images/portofoliu/aplicatiimobile/Destiny.webp",
    imageAlt: "YDestiny — ecran explorare profiluri și potriviri în aplicația socială",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/Destiny2.webp",
        alt: "YDestiny: profil personal cu valori și intenții",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Destiny3.webp",
        alt: "YDestiny — flux de postări și reflecții în comunitate",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Destiny4.webp",
        alt: "YDestiny: mesagerie privată și setări de confidențialitate",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație: profil și potriviri, comunitate (feed) și mesagerie cu setări de confidențialitate.",
    context:
      "Multe aplicații sociale optimizează pentru volum: swipe rapid, conversații de suprafață, puțin context despre ce caută fiecare. Utilizatorii care vor conexiuni cu sens rămân fără loc unde intenția și valorile contează la fel de mult ca fotografia. În același timp, un produs de acest tip trăiește din încredere: fără reguli clare, moderare și control asupra vizibilității, riscul de abandon sau incidente crește. YDestiny este gândit pentru public adult (17+): profil bogat, potriviri explicate transparent și zone separate pentru descoperire, comunitate și mesaje. Pentru utilizator, asta înseamnă mai multă claritate în cine întâlnește și cum își gestionează datele. Pentru business, înseamnă diferențiere față de „încă o aplicație de swipe” și o bază pe care poți construi comunitate fără să pierzi controlul asupra siguranței.",
    objectives: [
      "Profil care spune cine ești dincolo de fotografie: valori, intenții, direcție.",
      "Potriviri „semi-compatibile” aliniate declarațiilor, explicate fără promisiuni exagerate.",
      "Comunitate (feed) separată de descoperire, fără a aglomera parcursul principal.",
      "Mesagerie privată cu filtre și setări pentru tipul de conexiune dorită.",
      "Siguranță: moderare, instrumente de control și vizibilitate reglabilă.",
    ],
    solution:
      "Am separat în mod explicit descoperirea (profil, potriviri) de comunitate (feed) și de mesagerie. Utilizatorul știe în ce zonă este și ce fel de acțiune are sens acolo — nu amestecăm „găsește pe cineva” cu „citește feed-ul” în același flux confuz.\n\nLogica de semi-compatibilitate este prezentată pe înțeles: de ce vezi anumite sugestii, fără să promitem „potrivire perfectă” sau să ascundem criteriile. Tonul rămâne calm, orientat spre conversații și reflecții, nu spre scroll infinit fără sens.\n\nDesignul și arhitectura susțin încrederea: setări de vizibilitate, moderare și mesagerie tratate ca parte din produs, nu ca adaos după lansare.",
    featuresSectionLead:
      "Funcționalități gândite pentru intenții clare, comunitate și conversații în siguranță.",
    features: [
      "Potriviri semi-compatibile pe baza intențiilor și a ceea ce declari în profil",
      "Profiluri cu valori, interese și context personal",
      "Feed pentru reflecții și conținut de comunitate",
      "Mesagerie privată, cu accent pe confidențialitate",
      "Filtre pentru tipul de conexiune pe care îl cauți",
      "Moderare și instrumente de siguranță pentru conținut și interacțiuni",
    ],
    technologies: [
      "Aplicație Android, publicată în Google Play",
      "Backend pentru conturi, relații și conținut social",
      "Notificări și fluxuri de moderare (conform arhitecturii proiectului)",
      "Actualizări și mentenanță în magazin",
    ],
    impact: [
      "Poziționare clară față de aplicațiile bazate doar pe swipe și volum.",
      "Utilizatorii înțeleg mai bine cine sunt potrivirile și își gestionează vizibilitatea.",
      "Bază extensibilă pentru module noi de comunitate sau reguli de potrivire.",
      "Produs aliniat așteptărilor de confidențialitate și control perceput.",
      "Live în magazin — dovadă concretă pentru investitori sau parteneri.",
    ],
    cardBullets: [
      "Profil pe intenții și valori, nu doar poză",
      "Potriviri explicate; feed și mesaje separate logic",
      "Reguli de siguranță și moderare integrate în produs",
    ],
    goodForLabel: "comunități și produse sociale cu încredere",
    problemSolved: "superficialitatea și lipsa controlului în social",
    hubSpotlightParagraph:
      "Social pentru adulți: cine ești, ce cauți și cum vorbești în privat — cu spațiu pentru comunitate, nu doar pentru swipe.",
    cardPrimaryCtaLabel: "Vezi proiectul",
    relatedSlugs: [
      "cristina-zurba-tarot-lecturi-ai",
      "doitnow-provocari-zilnice-ai",
      "my-butterfly-recomandari-palete-tenis",
    ],
    relatedSectionIntro:
      "Alte aplicații unde utilizatorul ia decizii sau revine des — conținut, obiceiuri sau ghidare la achiziție.",
    nextStepIntro:
      "Dacă construiești un produs cu comunitate, mesagerie sau potriviri între oameni, structura și încrederea trebuie gândite din start. Poți vedea cum abordăm ",
    nextStepOutro:
      " sau ne poți scrie direct pentru a discuta arhitectura și lansarea proiectului tău.",
    serviceLinkPhrase: "aplicații mobile pentru comunități și produse sociale",
  },
  {
    slug: "cristina-zurba-tarot-lecturi-ai",
    cardTitle: "Cristina Zurba Tarot & Astrology",
    h1: "Aplicație de lecturi tarot pentru brand personal — conținut organizat, flux calm | studiu de caz",
    shortDescription:
      "Aplicație pentru o audiență deja formată: lecturi pe zone de viață, istoric și elemente sociale — structurate astfel încât utilizatorul să găsească repede ce caută, fără să fie copleșit la prima deschidere.",
    metaTitle: "Cristina Zurba — lecturi tarot | Studiu de caz | Web Dynamicx",
    metaDescription:
      "Lecturi pe zone de viață, istoric, partajare: brand într-un flux calm, fără copleșire la prima deschidere. Studiu de caz Cristina Zurba — în Google Play.",
    tags: ["Conținut", "Brand personal", "Lecturi", "Comunitate"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cristina.zurba.tarot&hl=ro",
    image: "/images/portofoliu/aplicatiimobile/Cristina%20Zurba2.webp",
    imageAlt: "Aplicația Cristina Zurba: flux de lectură tarot pe categorii de viață",
    gallery: [
      {
        src: "/images/portofoliu/aplicatiimobile/Cristina%20Zurba1.webp",
        alt: "Ecran principal aplicația Cristina Zurba Tarot și Astrology — categorii de lecturi",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Cristina%20Zurba3.webp",
        alt: "Cristina Zurba Tarot — experiență vizuală și detalii lectură",
      },
      {
        src: "/images/portofoliu/aplicatiimobile/Cristina%20Zurba4.webp",
        alt: "Cristina Zurba: istoric și elemente sociale în aplicație",
      },
    ],
    gallerySectionLead:
      "Ecrane din aplicație: categorii de lectură, detaliu sesiune și zonă de istoric / comunitate.",
    context:
      "Când ai deja audiență pe social sau pe web, mobilul poate aduce conținutul mai aproape — dar și riscul de haos: prea multe tipuri de experiențe într-un singur loc, navigare greoaie, utilizatorul care renunță înainte să ajungă la lectura dorită. Provocarea aici a fost să împachetăm categorii, istoric personal și elemente sociale într-un flux liniar, păstrând tonul brandului. Pentru utilizator, asta înseamnă acces rapid la o lectură relevantă, fără să parcurgă tot produsul. Pentru business (brand personal), înseamnă un canal propriu lângă rețelele sociale, retenție mai bună și spațiu pentru conținut nou fără să refaci arhitectura de la zero.",
    objectives: [
      "Lecturi grupate pe zone de viață (relații, carieră, creștere personală etc.).",
      "Istoric accesibil: revenire la lecturi anterioare, fără să blochezi parcursul nou venitului.",
      "Partajare și comunitate la îndemână, fără a complica navigarea principală.",
      "Ton și prezentare aliniate brandului personal al clientului.",
    ],
    solution:
      "Structura pornește de la categorii clare: utilizatorul alege zona care îl interesează, apoi parcurge pașii de lectură fără ambiguități. Nu am făcut din istoric sau din social ecranul principal — sunt accesibile, dar nu obligatorii pentru cine vrea doar o lectură rapidă.\n\nFeedback vizual și claritate în pași sprijină înțelegerea mesajului și revenirea: utilizatorul simte că „a terminat” o sesiune, nu că a rămas suspendat într-un ecran.\n\nArhitectura lasă loc pentru conținut și funcții noi (fără a rescrie totul la fiecare iterație), utilă pentru un brand care evoluează în timp.",
    featuresSectionLead:
      "Funcționalități gândite pentru conținut bogat, fără să pierzi simplitatea la prima utilizare.",
    features: [
      "Lecturi pe categorii de viață, ușor de găsit",
      "Mesaj ajustat în funcție de contextul ales de utilizator",
      "Istoric al sesiunilor pentru revenire și urmărire în timp",
      "Partajare adaptată comunității, fără a bloca fluxul principal",
      "Prezentare vizuală clară pentru fiecare lectură",
    ],
    technologies: [
      "Aplicație mobilă (cross-platform), în Google Play",
      "Conținut și stări sincronizate cu backend",
      "Gestionare conținut și variante pentru producție",
      "Flux de publicare: materiale, politici magazin, testare",
    ],
    impact: [
      "Canal mobil dedicat, lângă prezența existentă online.",
      "Utilizatorul ajunge mai repede la lectura potrivită; mai puțin abandon la prima deschidere.",
      "Bază stabilă pentru extinderi de conținut sau funcții, fără rescriere completă.",
      "Experiență aliniată mesajului brandului pe toate canalele.",
    ],
    cardBullets: [
      "Categorii de viață + pași clari de lectură",
      "Istoric și personalizare fără a bloca pe cel ocazional",
      "Social și partajare integrate, nu în fața fluxului principal",
    ],
    goodForLabel: "creatori, branduri personale și conținut premium",
    problemSolved: "organizarea conținutului și copleșirea utilizatorului",
    hubSpotlightParagraph:
      "Lecturi structurate, istoric la îndemână și flux calm — pentru fani care vor app, nu un labirint de meniuri.",
    cardPrimaryCtaLabel: "Vezi proiectul",
    relatedSlugs: [
      "doitnow-provocari-zilnice-ai",
      "styleconnect-rezervari-saloane",
      "ydestiny-social-astrology",
    ],
    relatedSectionIntro:
      "Alte aplicații pentru business-uri cu nevoi diferite — programări, obiceiuri zilnice sau comunitate.",
    nextStepIntro:
      "Dacă ai un brand cu audiență și vrei să pui conținutul într-o aplicație pe care fanii o deschid fără să se pierdă, merită discutat un flux ca acesta. Citește despre ",
    nextStepOutro:
      " — apoi contactează-ne pentru o variantă adaptată conținutului tău.",
    serviceLinkPhrase: "aplicații mobile pentru conținut și brand personal",
  },
];

export function getCaseStudyBySlug(slug: string): MobileCaseStudy | undefined {
  return mobileAppCaseStudies.find((c) => c.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): MobileCaseStudy[] {
  return slugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((c): c is MobileCaseStudy => Boolean(c));
}

export function getFeaturedPortfolioStudies(): MobileCaseStudy[] {
  const out: MobileCaseStudy[] = [];
  for (const slug of featuredMobilePortfolioSlugs) {
    const c = getCaseStudyBySlug(slug);
    if (c) out.push(c);
  }
  return out;
}

export function getServicePageFeaturedPortfolioStudies(): MobileCaseStudy[] {
  const out: MobileCaseStudy[] = [];
  for (const slug of servicePageFeaturedMobilePortfolioSlugs) {
    const c = getCaseStudyBySlug(slug);
    if (c) out.push(c);
  }
  return out;
}
