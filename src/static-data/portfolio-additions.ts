import type { Portfolio } from "@/types/portfolio";

const asset = (name: string) => `/images/portofoliu/studii/${name}.webp`;
const webServices = [
  {
    slug: "creare-site-web",
    reason: "structură și implementare pentru un website adaptat produsului",
  },
  {
    slug: "web-design",
    reason: "ierarhie vizuală și trasee clare către acțiunea principală",
  },
];

export const additionalWebPortfolio: Portfolio[] = [
  {
    id: "ainevoie-website",
    slug: "ainevoie-website",
    title: "AInevoie — website pentru marketplace de servicii",
    headline:
      "AInevoie — un website pentru două publicuri: clienți și prestatori",
    sortDescription:
      "Prezentarea unui marketplace de servicii locale, cu trasee distincte pentru cei care caută ajutor și cei care oferă servicii.",
    image: asset("ainevoie"),
    imageAlt: "Pagina publică AInevoie în limba română",
    liveUrl: "https://www.ai-nevoie.ro/",
    status: "Website public · aplicație Android publicată",
    tags: ["Marketplace", "Servicii locale", "Website de produs"],
    clientLabel: "Platformă de servicii locale",
    metaTitle: "AInevoie — website marketplace de servicii | Web Dynamicx",
    metaDescription:
      "Studiu de caz AInevoie: website de produs, explicarea marketplace-ului și parcursuri pentru clienți și prestatori de servicii locale.",
    context:
      "Un marketplace trebuie să explice de ce merită folosit de ambele părți. Clientul caută un serviciu, iar prestatorul vrea să înțeleagă cum primește și gestionează solicitările. Website-ul AInevoie face legătura dintre aceste nevoi și produsul mobil.",
    challenge:
      "Aceeași pagină trebuie să răspundă unor întrebări diferite: cum găsesc ajutor și cum îmi prezint serviciile? Mesajul și acțiunile trebuie să rămână ușor de urmărit pe telefon.",
    solution:
      "Prezentarea separă beneficiile pentru clienți de cele pentru prestatori, explică parcursul în trei pași și arată capturi din aplicație. Întrebările frecvente și contactul completează informațiile necesare înainte de înscriere. Studiul web acoperă prezentarea produsului; aplicația are propriul studiu de caz.",
    outcome: [
      "Două trasee explicite: caut servicii și devin prestator.",
      "Explicarea cererii, programării și evaluării într-o pagină publică.",
      "Capturi și răspunsuri la întrebări înainte de înscriere.",
    ],
    gallery: [
      {
        src: asset("ainevoie-detail"),
        alt: "AInevoie: prezentarea funcțiilor marketplace-ului",
        caption:
          "Website-ul explică funcțiile produsului prin secțiuni scurte, înainte de înscriere.",
      },
    ],
    supportedServices: webServices,
    relatedSlugs: ["coffeebuzz-website", "operio-website"],
    relatedProjects: [
      {
        href: "/portofoliu-aplicatii-mobile/ainevoie-market-servicii-curatenie",
        label: "AInevoie — aplicația mobilă",
      },
    ],
    ctaLabel: "Vreau un website pentru produsul meu",
  },
  {
    id: "coffeebuzz-website",
    slug: "coffeebuzz-website",
    title: "CoffeeBuzz — website pentru aplicație HoReCa",
    headline:
      "CoffeeBuzz — de la prezentarea meniului la descoperirea aplicației",
    sortDescription:
      "Website de produs pentru o aplicație de cafea, băuturi și gustări, cu meniu, funcții și informații de contact.",
    image: asset("coffeebuzz"),
    imageAlt: "Website CoffeeBuzz cu mesajul Cafeaua ta, la un tap distanță",
    liveUrl: "https://coffebuz-website.vercel.app/",
    status: "Website public · fluxuri de comandă demonstrative",
    tags: ["HoReCa", "Website de produs", "Mobil"],
    clientLabel: "Aplicație pentru cafenele",
    metaTitle: "CoffeeBuzz — website de prezentare HoReCa | Web Dynamicx",
    metaDescription:
      "Website CoffeeBuzz: prezentarea unei aplicații HoReCa, meniul, fluxul de comandă și informațiile necesare înainte de instalare.",
    context:
      "O aplicație are nevoie de un loc public unde utilizatorul înțelege ce poate face înainte de instalare. Pentru CoffeeBuzz, această prezentare pornește de la produsele familiare unei cafenele și ajunge la parcursul de comandă din aplicație.",
    challenge:
      "Funcțiile mobile trebuie explicate pe scurt, fără ca website-ul să sugereze existența unui serviciu de livrare sau de încasare verificat. În produs există componente demonstrative, iar prezentarea trebuie să le delimiteze.",
    solution:
      "Website-ul grupează funcțiile în jurul meniului, personalizării produselor și opțiunilor de comandă. Secțiunea în trei pași arată traseul de la profil la finalizare. Contactul și paginile de confidențialitate sunt accesibile din aceeași prezentare.",
    outcome: [
      "Prezentare publică a aplicației în limba română.",
      "Meniu organizat pe categorii și explicații pentru opțiunile de comandă.",
      "Delimitarea plăților demonstrative și acces la informațiile de suport.",
    ],
    gallery: [
      {
        src: asset("coffeebuzz-detail"),
        alt: "CoffeeBuzz: funcțiile și meniul aplicației",
        caption:
          "Funcțiile sunt explicate lângă meniul de produse; plata este identificată ca flux demonstrativ.",
      },
    ],
    supportedServices: webServices,
    relatedSlugs: ["ainevoie-website", "alex-relax-hotel"],
    relatedProjects: [
      {
        href: "/portofoliu-aplicatii-mobile/coffee-buzz-cafenea-fidelizare-comenzi",
        label: "CoffeeBuzz — aplicația Android",
      },
    ],
    ctaLabel: "Vreau un website pentru aplicația mea",
  },
  {
    id: "pntmm-cluj",
    slug: "pntmm-cluj",
    title: "PNȚMM Cluj — website și comunicare publică",
    headline:
      "PNȚMM Cluj — știri, evenimente și formulare într-un website administrabil",
    sortDescription:
      "Platformă de comunicare pentru o organizație, cu pagini editoriale, calendar și trasee distincte pentru mesaje și implicare.",
    image: asset("pntmm"),
    imageAlt: "Pagina principală a website-ului PNȚMM Cluj",
    liveUrl: "https://pntmm-web.vercel.app/",
    status: "Website public",
    tags: ["Organizații", "Conținut", "Administrare"],
    clientLabel: "Organizație politică locală",
    metaTitle: "PNȚMM Cluj — website cu știri și evenimente | Web Dynamicx",
    metaDescription:
      "Studiu de caz PNȚMM Cluj: website de organizație, știri, evenimente, formulare de contact și administrarea conținutului.",
    context:
      "Website-ul unei organizații reunește informații de identitate, actualitate și moduri de contact. Proiectul PNȚMM Cluj organizează aceste zone astfel încât un vizitator să poată citi o știre, consulta un eveniment sau trimite un mesaj.",
    challenge:
      "Conținutul editorial și formularele au scopuri diferite. Am urmărit separarea lor în navigare și o structură care permite publicarea de informații noi fără refacerea paginii principale.",
    solution:
      "Implementarea include pagini pentru știri și evenimente, contact, sesizări, propuneri și interes pentru implicare. Zona de administrare separă conținutul public de gestionarea formularelor. Prezentarea din portofoliu privește arhitectura și experiența digitală realizate.",
    outcome: [
      "Pagini individuale pentru știri și evenimente.",
      "Formulare distincte pentru contact, sesizări și propuneri.",
      "Administrarea conținutului și a solicitărilor dintr-o zonă dedicată.",
    ],
    gallery: [
      {
        src: asset("pntmm-detail"),
        alt: "PNȚMM Cluj: secțiunile editoriale de prezentare",
        caption:
          "Ierarhia editorială grupează informațiile organizației în secțiuni ușor de parcurs.",
      },
    ],
    supportedServices: webServices,
    relatedSlugs: ["firsttech-echipamente-industriale", "ainevoie-website"],
    ctaLabel: "Vreau un website pentru organizația mea",
  },
  {
    id: "operio-website",
    slug: "operio-website",
    title: "Operio — website pentru software de servicii în teren",
    headline:
      "Operio — explicarea unui produs software, de la funcții la alegerea unui plan",
    sortDescription:
      "Website SaaS cu prezentarea fluxului de lucru, aplicației pentru tehnicieni, personalizării și planurilor de abonament.",
    image: asset("operio"),
    imageAlt: "Operio: website de prezentare pentru servicii în teren",
    liveUrl: "https://operioapp.ro/",
    status: "Website public · produs SaaS",
    tags: ["SaaS", "B2B", "Website de produs"],
    clientLabel: "Software pentru echipe de intervenție",
    metaTitle: "Operio — website SaaS pentru servicii în teren | Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru website-ul Operio: prezentarea funcțiilor, aplicației mobile, personalizării și abonamentelor unui produs B2B.",
    context:
      "Operio se adresează firmelor care coordonează tehnicieni și intervenții. Website-ul trebuie să explice produsul atât administratorului care alege sistemul, cât și echipei care îl va folosi în teren.",
    challenge:
      "Un produs cu programări, documente, plăți și aplicație mobilă poate deveni greu de prezentat. Vizitatorul are nevoie de o imagine de ansamblu și de pași clari către evaluarea ofertei.",
    solution:
      "Pagina urmărește traseul unei lucrări, apoi prezintă funcțiile, aplicația mobilă și opțiunile de personalizare. Planurile, întrebările frecvente și contactul susțin decizia de înscriere. Capturile de pe landing ilustrează produsul folosind exemple demonstrative.",
    outcome: [
      "Explicarea relației dintre birou și tehnician într-un singur parcurs.",
      "Secțiuni dedicate aplicației mobile și personalizării.",
      "Acces direct la planuri, perioada de probă și contact.",
    ],
    gallery: [
      {
        src: asset("operio-detail"),
        alt: "Operio: prezentarea traseului unei intervenții",
        caption:
          "Website-ul explică traseul unei lucrări și rolul aplicației tehnicianului, cu exemple demonstrative.",
      },
    ],
    supportedServices: webServices,
    relatedSlugs: ["astroai", "ainevoie-website"],
    relatedProjects: [
      {
        href: "/portofoliu-software/operio",
        label: "Operio — platforma software",
      },
      {
        href: "/portofoliu-aplicatii-mobile/operio-tehnicieni",
        label: "Operio — aplicația tehnicianului",
      },
    ],
    ctaLabel: "Vreau un website pentru un produs SaaS",
  },
  {
    id: "astroai",
    slug: "astroai",
    title: "AstroAI 24/7 — website și produs AI",
    headline:
      "AstroAI — de la prezentarea agenților AI la un produs cu conturi și abonamente",
    sortDescription:
      "Produs web de astrologie asistată de AI, cu prezentarea agenților, onboarding, conversații și planuri de acces.",
    image: asset("astroai"),
    imageAlt: "AstroAI 24/7: pagina publică în limba română",
    liveUrl: "https://www.astro-ai.ro/ro",
    status: "Website public · produs AI",
    tags: ["Inteligență artificială", "Abonamente", "Produs web"],
    clientLabel: "Produs digital de conținut",
    metaTitle: "AstroAI — website și produs AI cu abonamente | Web Dynamicx",
    metaDescription:
      "Studiu de caz AstroAI: prezentarea agenților AI, onboarding, interfață de conversație și integrarea abonamentelor într-un produs web.",
    context:
      "AstroAI organizează experiențe conversaționale de astrologie în jurul unor agenți cu roluri distincte. Website-ul prezintă produsul, iar aplicația web gestionează profilul, conversațiile și accesul în funcție de plan.",
    challenge:
      "Vizitatorul trebuie să înțeleagă ce experiență primește înainte să creeze un cont. În produs, onboardingul, alegerea agentului și abonamentul trebuie să formeze un traseu coerent.",
    solution:
      "Prezentarea publică explică profilul, agenții și planurile de acces în română și engleză. Implementarea produsului include conturi, conversații, istoric și gestionarea abonamentelor prin Stripe. Studiul documentează experiența digitală și integrarea AI, fără a atribui interpretărilor valoare de predicție verificată.",
    outcome: [
      "Website de produs cu prezentarea agenților și a planurilor.",
      "Onboarding și interfață de conversație legate de contul utilizatorului.",
      "Integrare pentru abonamente și gestionarea accesului la produs.",
    ],
    gallery: [
      {
        src: asset("astroai-detail"),
        alt: "AstroAI: pașii de utilizare și prezentarea agenților",
        caption:
          "Produsul este explicat în trei pași: profil, alegerea agentului și conversație.",
      },
    ],
    supportedServices: webServices,
    relatedSlugs: ["operio-website", "cristina-zurba"],
    ctaLabel: "Vreau să discutăm despre un produs AI",
  },
];

export const softwarePortfolioHubPath = "/portofoliu-software";
export const softwarePortfolio: Portfolio[] = [
  {
    id: "itp-white-label",
    slug: "itp-white-label",
    title: "ITP White Label — administrare auto",
    headline:
      "ITP White Label — programări, vehicule și scadențe într-un singur panou",
    sortDescription:
      "Platformă demonstrativă pentru stații ITP și service-uri: agenda echipei, fișele vehiculelor și activitatea mai multor locații.",
    image: "/images/portofoliu/studii/itp-web-dashboard.webp",
    imageAlt:
      "ITP White Label: dashboard cu agenda zilei și activitatea locațiilor",
    tags: ["Next.js", "Administrare auto", "White label"],
    clientLabel: "Stații ITP și service-uri",
    status: "Produs demonstrativ · date fictive · persistență locală",
    liveUrl: "https://next-js-phi-gules.vercel.app/",
    liveLabel: "Testează aplicația demo",
    metaTitle:
      "ITP White Label — platformă de administrare auto | Web Dynamicx",
    metaDescription:
      "Studiu de caz Next.js pentru stații ITP: programări, clienți și flote, întreținere și scadențe. Capturi reale și prezentare PDF descărcabilă.",
    context:
      "O stație ITP sau un service lucrează zilnic cu programări, termene și istoricul vehiculelor. Pentru firmele cu mai multe puncte de lucru, echipa are nevoie atât de o privire de ansamblu, cât și de acces rapid la datele fiecărei locații.",
    challenge:
      "Să reunim agenda, clienții individuali, flotele și termenele auto într-o interfață ușor de urmărit. Fișa vehiculului trebuie să păstreze împreună kilometrajul, scadența ITP, planul de întreținere și istoricul service, fără ca utilizatorul să caute în liste separate.",
    solution:
      "Am realizat un panou Next.js în limba română, cu dashboard, programări, clienți și flote, vehicule, scadențe ITP, întreținere, tahografe, locații și personal. Disponibilitatea ține cont de serviciu, program, capacitate și suprapuneri. Regulile de întreținere urmăresc kilometrajul sau perioada, la primul prag atins. Prototipul folosește date fictive salvate local. Aplicația web și cea mobilă pornesc de la același scenariu, dar persistă independent; conectarea prin backend și livrarea notificărilor externe reprezintă pași ulteriori.",
    outcome: [
      "O agendă filtrabilă pe locație și perioadă, cu export CSV.",
      "Fișe de client și vehicul, inclusiv evidența flotelor și istoricul întreținerii.",
      "Scadențe ITP și întreținere prezentate în contextul fiecărui vehicul.",
      "Un flux demonstrativ pentru roluri și locații, pregătit ca punct de pornire pentru personalizarea unei firme.",
    ],
    gallery: [
      {
        src: "/images/portofoliu/studii/itp-web-appointments.webp",
        alt: "Agenda programărilor în administrarea ITP White Label",
        caption:
          "Programările reunesc clientul, vehiculul, serviciul, locația și starea vizitei.",
      },
      {
        src: "/images/portofoliu/studii/itp-web-clients.webp",
        alt: "Clienți de tip flotă și companie în ITP White Label",
        caption:
          "Companiile și flotele au un traseu dedicat în evidența clienților.",
      },
      {
        src: "/images/portofoliu/studii/itp-web-vehicle.webp",
        alt: "Fișa Volkswagen Passat cu kilometraj și plan de întreținere",
        caption:
          "Fișa vehiculului aduce laolaltă scadența ITP și pragurile de întreținere.",
      },
      {
        src: "/images/portofoliu/studii/itp-web-itp.webp",
        alt: "Lista scadențelor ITP și stările de contactare",
        caption:
          "Termenele sunt calculate pe baza datelor demonstrative introduse în aplicație.",
      },
    ],
    supportedServices: [
      {
        slug: "dezvoltare-aplicatii-mobile",
        reason: "o aplicație dedicată clienților, alături de panoul echipei",
      },
    ],
    relatedSlugs: ["fom", "operio"],
    relatedProjects: [
      {
        href: "/portofoliu-aplicatii-mobile/itp-white-label",
        label: "ITP White Label — aplicația clientului",
      },
    ],
    ctaLabel: "Vreau o platformă pentru stația mea",
    downloads: [
      {
        href: "/downloads/itp-white-label-concept.pdf",
        label: "Descarcă prezentarea conceptului — PDF",
      },
    ],
  },
  {
    id: "operio",
    slug: "operio",
    title: "Operio — managementul serviciilor în teren",
    headline:
      "Operio — biroul și echipa din teren lucrează pe aceeași intervenție",
    sortDescription:
      "Platformă SaaS pentru programarea lucrărilor, coordonarea tehnicienilor și păstrarea documentelor intervenției.",
    image: asset("operio"),
    imageAlt: "Operio: prezentarea publică a platformei de intervenții",
    liveUrl: "https://operioapp.ro/",
    liveLabel: "Vezi prezentarea Operio",
    status: "Platformă SaaS · aplicație Android publicată",
    tags: ["SaaS", "Intervenții", "Web + mobil"],
    clientLabel: "Firme de servicii în teren",
    metaTitle: "Operio — platformă pentru echipe în teren | Web Dynamicx",
    metaDescription:
      "Studiu de caz software Operio: coordonarea lucrărilor, aplicație pentru tehnicieni, fotografii și semnături legate de intervenție.",
    context:
      "Într-o firmă de intervenții, biroul programează și urmărește lucrările, iar tehnicianul are nevoie de informațiile potrivite la adresă. Operio conectează aceste două roluri într-un produs web și mobil.",
    challenge:
      "Programarea, execuția și documentarea unei lucrări trebuie să rămână legate. Fotografiile și semnătura clientului sunt utile când pot fi regăsite în contextul intervenției, nu în conversații separate.",
    solution:
      "Platforma web gestionează activitatea firmei, iar aplicația Flutter oferă acces la lucrările alocate, navigare, check-in, fotografii și semnătură. Produsul include module pentru oferte, facturare și contracte recurente. Studiul pune accent pe fluxul dintre roluri și pe adaptarea experienței la lucrul în teren.",
    outcome: [
      "Separarea rolurilor de birou și tehnician într-un produs comun.",
      "Dovezi de intervenție asociate lucrării: fotografii, localizare și semnătură.",
      "Platformă web conectată la aplicația mobilă prin API.",
    ],
    gallery: [
      {
        src: asset("operio-detail"),
        alt: "Operio: prezentare publică a fluxului operațional",
        caption:
          "Captură din prezentarea publică a fluxului, cu exemple demonstrative; nu conține date de clienți.",
      },
    ],
    supportedServices: [],
    relatedSlugs: ["otp-parking", "fom"],
    relatedProjects: [
      {
        href: "/portofoliu/operio-website",
        label: "Operio — website-ul de produs",
      },
      {
        href: "/portofoliu-aplicatii-mobile/operio-tehnicieni",
        label: "Operio — aplicația pentru tehnicieni",
      },
    ],
    ctaLabel: "Vreau software pentru echipa mea",
  },
  {
    id: "otp-parking",
    slug: "otp-parking",
    title: "OTP Parking — platformă de rezervări și administrare",
    headline: "OTP Parking — rezervarea conectată la operațiunile parcării",
    sortDescription:
      "Sistem web și mobil pentru rezervări, opțiuni de plată și administrare, cu integrări pentru facturare și accesul în parcare.",
    image: asset("parking-demo-dashboard"),
    imageAlt:
      "Panoul demonstrativ derivat din OTP Parking: dashboard și ocuparea parcării",
    liveUrl: "https://exemplu-parcare.vercel.app",
    liveLabel: "Testează demo-ul",
    status: "Proiect web și mobil · capturi din demo cu date fictive",
    tags: ["Rezervări", "Plăți", "Integrări"],
    clientLabel: "Parcare privată la aeroport",
    metaTitle:
      "OTP Parking — software de rezervări și integrări | Web Dynamicx",
    metaDescription:
      "Studiu de caz OTP Parking: rezervări web și mobile, administrare, integrarea plăților, facturării și recunoașterii numerelor auto.",
    context:
      "O rezervare de parcare trebuie urmărită din momentul alegerii perioadei până la sosire și plecare. Proiectul reunește interfața clientului și instrumentele administrative necesare echipei.",
    challenge:
      "Datele, tarifele, plata și accesul fizic trebuie corelate cu rezervarea corectă. O modificare de perioadă sau de vehicul afectează mai multe părți ale sistemului.",
    solution:
      "Implementarea include fluxul public de rezervare și panoul de administrare, conectate cu aplicația mobilă. Integrarea cu Stripe acoperă plata online, Oblio este folosit pentru facturare, iar modulele LPR și MultiPark leagă evenimentele de acces de evidența rezervărilor. Pentru prezentarea panoului am pregătit o copie demonstrativă white label, fără Firebase, cu date fictive salvate în browser. Capturile de mai jos și butonul de testare aparțin acestei copii: plățile, facturile și conexiunile externe sunt simulate. Demo-ul nu se conectează la sistemele operaționale OTP Parking.",
    outcome: [
      "Rezervări gestionate din interfețe web și mobile.",
      "Module pentru tarife, modificări de rezervare și evidența ocupării.",
      "Integrări implementate pentru plăți, facturare și evenimente de acces auto.",
    ],
    gallery: [
      {
        src: asset("parking-demo-bookings"),
        alt: "Panoul demonstrativ OTP Parking: lista rezervărilor fictive și filtrele",
        caption:
          "Copia white label prezintă rezervările, vehiculele, stările și valorile de test. Datele sunt fictive și persistă numai în browserul testerului.",
      },
      {
        src: asset("parking-demo-entries-exits"),
        alt: "Panoul demonstrativ OTP Parking: intrările planificate pentru o zi",
        caption:
          "Intrări și ieșiri urmărite pe zi, cu numere auto și contacte fictive. În demo, evenimentele de acces sunt simulate.",
      },
      {
        src: asset("parking-demo-prices"),
        alt: "Panoul demonstrativ OTP Parking: tarife pe durata parcării și reduceri",
        caption:
          "Administrarea tarifelor și reducerilor în copia demonstrativă, fără modificarea prețurilor din parcare.",
      },
    ],
    supportedServices: [],
    relatedSlugs: ["operio", "fom"],
    relatedProjects: [
      {
        href: "/portofoliu-software/parcare-white-label",
        label: "Parcare White Label — panoul demonstrativ",
      },
      {
        href: "https://www.otp-parking.ro/",
        label: "OTP Parking — site-ul pentru clienți",
      },
      {
        href: "/portofoliu-aplicatii-mobile/otp-parking-rezervari",
        label: "OTP Parking — aplicația mobilă",
      },
    ],
    ctaLabel: "Vreau un sistem de rezervări pentru afacerea mea",
  },
  {
    id: "parcare-white-label",
    slug: "parcare-white-label",
    title: "Parcare White Label — panou de administrare",
    headline:
      "Parcare White Label — rezervări, tarife și ocupare într-un singur panou",
    sortDescription:
      "Demo interactiv pentru administrarea unei parcări: rezervări, intrări și ieșiri, tarife, statistici și echipă, cu date fictive salvate în browser.",
    image: asset("parking-demo-bookings"),
    imageAlt:
      "Parcare White Label: lista rezervărilor și statisticile cu date fictive",
    liveUrl: "https://exemplu-parcare.vercel.app",
    liveLabel: "Testează demo-ul",
    status:
      "Produs demonstrativ · date fictive · persistență locală · integrări simulate",
    tags: ["Next.js", "Administrare parcare", "White label"],
    clientLabel: "Demo pentru operatori de parcări",
    metaTitle: "Parcare White Label — demo administrare parcare | Web Dynamicx",
    metaDescription:
      "Testează panoul demonstrativ pentru parcări: rezervări, intrări și ieșiri, ocupare, tarife și statistici. Date fictive, salvare în browser și integrări simulate.",
    context:
      "Echipa unei parcări are nevoie să regăsească rapid o rezervare, să urmărească sosirile și plecările și să știe câte locuri sunt disponibile. Acest demo pornește din panoul proiectului OTP Parking și permite explorarea administrării fără acces la datele sau serviciile clientului.",
    challenge:
      "Să păstrăm fluxurile de administrare într-o demonstrație coerentă: o rezervare creată sau modificată trebuie să se regăsească în liste, statistici și evidența ocupării. Testerul trebuie să poată încerca operațiile și să revină ușor la setul inițial de date.",
    solution:
      "Am pregătit un panou Next.js care se deschide direct cu o identitate fictivă de administrator. Include 100 de rezervări de test, vehicule și contacte fictive, istoric, anulări, rezervări viitoare și erori recuperabile. Crearea, editarea, anularea, ștergerea, recuperarea și marcarea intrărilor sau ieșirilor actualizează aceeași stare locală. Tarifele, whitelistul, angajații și configurațiile se pot administra în demo. Modificările persistă în browser și se sincronizează între taburile lui, iar resetarea regenerează datele raportate la ziua curentă. Fiecare browser sau dispozitiv are propria copie. Dacă stocarea nu este disponibilă, aplicația funcționează în memorie. Emailurile, plățile, facturile, parcarea și testele API sunt simulate; nu există conexiuni Firebase sau acces la sistemele OTP Parking.",
    outcome: [
      "Rezervări filtrabile după client, vehicul, perioadă și stare, cu operații demonstrative de creare și modificare.",
      "Intrări, ieșiri și ocupare calculate din aceleași date folosite de dashboard și statistici.",
      "Tarife și reduceri, numere whitelist, angajați și cereri de modificare administrate local.",
      "Modificări păstrate după reîncărcare în același browser și resetare pentru reluarea demonstrației.",
    ],
    gallery: [
      {
        src: asset("parking-demo-dashboard"),
        alt: "Parcare White Label: dashboardul cu ocuparea și configurarea rezervărilor",
        caption:
          "Dashboardul afișează capacitatea și ocuparea calculate din datele demonstrative. Marca white label și indicatorul Mediu de test rămân vizibile.",
      },
      {
        src: asset("parking-demo-entries-exits"),
        alt: "Parcare White Label: intrările zilei cu vehicule și contacte fictive",
        caption:
          "Evidența zilnică a intrărilor și ieșirilor folosește același set de rezervări. Evenimentele parcării sunt simulate.",
      },
      {
        src: asset("parking-demo-prices"),
        alt: "Parcare White Label: lista tarifelor, reducerilor și prețurilor finale",
        caption:
          "Tarife pe număr de zile, reduceri și prețuri finale disponibile pentru testarea administrării locale.",
      },
    ],
    supportedServices: [],
    relatedSlugs: ["otp-parking", "itp-white-label"],
    relatedProjects: [
      {
        href: "/portofoliu-software/otp-parking",
        label: "OTP Parking — proiectul din care pornește demo-ul",
      },
      {
        href: "/portofoliu-aplicatii-mobile/otp-parking-rezervari",
        label: "OTP Parking — aplicația mobilă",
      },
    ],
    ctaLabel: "Vreau un panou pentru parcarea mea",
  },
  {
    id: "fom",
    slug: "fom",
    title: "FOM — Field Operational Manager",
    headline:
      "FOM — lucrări, echipamente și documente în contextul aceleiași intervenții",
    sortDescription:
      "Platformă operațională pentru echipe tehnice: clienți, contracte, echipamente, lucrări, oferte și rapoarte.",
    image: asset("fom"),
    imageAlt: "FOM: interfața platformei în mediul local de test",
    status: "Software pentru operațiuni · capturi cu date de test",
    tags: ["Operațiuni", "Echipamente", "Documente"],
    clientLabel: "Echipe tehnice și mentenanță",
    metaTitle: "FOM — software de intervenții și echipamente | Web Dynamicx",
    metaDescription:
      "Studiu de caz FOM: lucrări, clienți, contracte, echipamente, oferte PDF și rapoarte într-o platformă pentru echipe tehnice.",
    context:
      "Echipele care întrețin echipamente trebuie să păstreze contextul fiecărei intervenții: clientul, locația, contractul și istoricul lucrărilor. FOM organizează aceste informații într-o platformă operațională.",
    challenge:
      "O intervenție nu este doar o înregistrare în calendar. Ea poate necesita ofertă, documente, alocarea tehnicienilor și identificarea echipamentelor acoperite de contract. Aceste legături trebuie păstrate în timp.",
    solution:
      "Platforma include module pentru lucrări, clienți, contracte și echipamente, împreună cu oferte și rapoarte PDF. Interfețele pe roluri și portalul clientului susțin accesul la informațiile relevante. Capturile sunt realizate local în modul de test al aplicației și nu prezintă operațiuni reale ale clienților.",
    outcome: [
      "Context comun pentru client, locație, echipament și lucrare.",
      "Documente și oferte generate din datele operaționale.",
      "Module pentru echipă, pontaj și urmărirea activității.",
    ],
    gallery: [
      {
        src: asset("fom"),
        alt: "FOM: panou în modul de test cu date demonstrative",
        caption:
          "Interfață reală a aplicației, rulată local cu date de test. Valorile nu reprezintă rezultate comerciale.",
      },
    ],
    supportedServices: [],
    relatedSlugs: ["operio", "otp-parking"],
    ctaLabel: "Vreau să digitalizez activitatea echipei mele",
  },
];
