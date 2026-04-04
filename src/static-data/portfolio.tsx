import type { Portfolio, PortfolioSupportedService } from "@/types/portfolio";

export const portfolioHubPath = "/portofoliu" as const;

const portfolioServiceCatalog = {
  "creare-site-web": { href: "/servicii/creare-site-web", label: "creare site web" },
  "creare-site-prezentare": { href: "/servicii/creare-site-prezentare", label: "creare site de prezentare" },
  "creare-magazin-online": { href: "/servicii/creare-magazin-online", label: "creare magazin online" },
  "creare-magazin-online-shopify": {
    href: "/servicii/creare-magazin-online-shopify",
    label: "magazin online Shopify",
  },
  "web-design": { href: "/servicii/web-design", label: "web design" },
  "optimizare-seo": { href: "/servicii/optimizare-seo", label: "servicii SEO" },
  "promovare-site": { href: "/servicii/promovare-site", label: "promovare site" },
  "mentenanta-website": { href: "/servicii/mentenanta-website", label: "mentenanta website" },
} as const;

export type PortfolioServiceSlug = keyof typeof portfolioServiceCatalog;

export type PortfolioServiceMatch = {
  portfolio: Portfolio;
  support: PortfolioSupportedService;
};

export const portfolioData: Portfolio[] = [
  {
    id: "auto-detailing-parts",
    title: "Auto Detailing Parts - Magazin Online Piese Auto",
    slug: "auto-detailing-parts",
    sortDescription:
      "Magazin online complet pentru piese și accesorii auto, cu structură clară pe categorii și bază bună pentru conversii și SEO e-commerce.",
    image: "/images/portofoliu/auto-datiling-parts.webp",
    imageAlt: "Magazin online Auto Detailing Parts cu pagini de categorii pentru piese auto",
    liveUrl: "https://auto-detailing-parts.ro/",
    tags: ["web design", "e-commerce", "automotive"],
    categories: ["magazin online"],
    clientLabel: "E-commerce auto",
    headline: "Magazin online pentru piese auto, gândit pentru catalog mare și decizii rapide de cumpărare",
    metaTitle: "Auto Detailing Parts - magazin online piese auto | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz web pentru un magazin online de piese auto: structură de categorii, experiență de cumpărare și bază SEO pentru un catalog extins.",
    context:
      "Proiectul a pornit din nevoia de a organiza un catalog mare de piese și accesorii auto într-un mod care să fie ușor de parcurs pe desktop și mobil. Obiectivul nu era doar un site care arată bine, ci o structură care ajută utilizatorul să găsească rapid produsele potrivite și să ajungă mai ușor la comandă.",
    challenge:
      "La un magazin online cu multe categorii și produse similare, principala problemă este claritatea. Dacă navigarea, ierarhia și paginile de produs nu sunt bine gândite, utilizatorul se pierde rapid, iar magazinul pierde atât comenzi, cât și potențial SEO pe categorii și subcategorii.",
    solution:
      "Am construit un storefront clar, cu accent pe categorii ușor de urmărit, listări curate și pagini care susțin atât descoperirea produselor, cât și conversia. Designul și structura au fost gândite astfel încât magazinul să fie pregătit pentru optimizare ulterioară, campanii și extinderea catalogului.",
    outcome: [
      "Experiență mai clară pentru utilizatorii care caută produse dintr-un catalog extins.",
      "Bază mai solidă pentru SEO de categorie și pagini comerciale.",
      "Flux mai potrivit pentru magazine online care vor să susțină vânzarea și promovarea în paralel.",
    ],
    supportedServices: [
      {
        slug: "creare-magazin-online",
        reason: "arată cum structurăm un magazin online cu multe categorii și cu focus pe conversie",
      },
      {
        slug: "creare-site-web",
        reason: "demonstrează livrare custom pentru un proiect web complex, nu doar un template simplu",
      },
      {
        slug: "mentenanta-website",
        reason: "un catalog mare are nevoie de evoluție, optimizare și administrare constantă după lansare",
      },
    ],
    relatedSlugs: ["d-toate-magazin-online", "firsttech-echipamente-industriale", "promovare-digitala"],
  },
  {
    id: "studio-by-cristian-design",
    title: "Studio by Cristian - Design & Furniture",
    slug: "studio-by-cristian-design",
    sortDescription:
      "Site premium pentru studio de design interior și mobilier personalizat, construit pentru poziționare vizuală și prezentare elegantă a serviciilor.",
    image: "/images/portofoliu/Studio-by-Cristian-Design&Furniture-portofoliu.webp",
    imageAlt: "Website Studio by Cristian cu prezentare premium pentru design interior si mobilier",
    liveUrl: "https://www.studiobycristian.com/",
    tags: ["web design", "premium"],
    categories: ["design studio"],
    clientLabel: "Studio de design interior",
    headline: "Website premium pentru design interior și mobilier personalizat, cu accent pe imagine și încredere",
    metaTitle: "Studio by Cristian - site premium design interior | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz web pentru un studio de design interior: prezentare premium, structură clară a serviciilor și experiență vizuală coerentă.",
    context:
      "Pentru un studio de design și mobilier personalizat, site-ul trebuie să inspire încredere încă din primele secunde. Publicul are nevoie să perceapă calitatea proiectelor, nivelul estetic și atenția la detalii, fără ca interfața să devină încărcată sau greu de parcurs.",
    challenge:
      "Provocarea principală a fost echilibrul dintre imagine și claritate. Un site premium poate pierde rapid eficiența dacă pune tot accentul pe vizual și prea puțin pe structură, mesaj și traseul prin care utilizatorul ajunge la contact sau cerere de ofertă.",
    solution:
      "Am construit o experiență orientată pe imagine, dar susținută de o ierarhie clară a secțiunilor și de un ritm vizual controlat. Proiectul a fost gândit pentru a poziționa business-ul mai sus, cu un design rafinat și cu zone de conținut care sprijină credibilitatea serviciilor oferite.",
    outcome: [
      "Poziționare mai premium pentru un business bazat pe estetică și încredere.",
      "Prezentare mai coerentă a serviciilor și a tipului de proiecte realizate.",
      "Un exemplu clar de web design orientat pe brand și percepție de calitate.",
    ],
    supportedServices: [
      {
        slug: "web-design",
        reason: "este un exemplu clar de proiect în care designul și direcția vizuală susțin direct poziționarea brandului",
      },
      {
        slug: "creare-site-prezentare",
        reason: "arată cum poate arăta un site de prezentare care vinde prin imagine și claritate, nu doar prin text",
      },
      {
        slug: "creare-site-web",
        reason: "demonstrează implementare custom pentru un website de business cu standard vizual ridicat",
      },
    ],
    relatedSlugs: ["firsttech-echipamente-industriale", "cristina-zurba", "juridic-broker-asigurari"],
  },
  {
    id: "firsttech-echipamente-industriale",
    title: "FirstTech - Echipamente Industriale",
    slug: "firsttech-echipamente-industriale",
    sortDescription:
      "Platformă B2B pentru echipamente industriale, gândită pentru prezentare clară de soluții tehnice și cereri comerciale mai bine structurate.",
    image: "/images/portofoliu/FirstTech-Echipamente-Industriale-portofoliu.webp",
    imageAlt: "Website FirstTech pentru echipamente industriale si solutii B2B",
    liveUrl: "https://www.firsttech.ro/",
    tags: ["web design", "B2B", "industrial"],
    categories: ["corporate"],
    clientLabel: "Business B2B industrial",
    headline: "Platformă web B2B pentru echipamente industriale, cu structură orientată pe soluții și lead-uri",
    metaTitle: "FirstTech - platforma web B2B industriala | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un website B2B industrial: structură pe soluții, prezentare tehnică clară și suport pentru lead-uri comerciale.",
    context:
      "În zona B2B industrială, website-ul are rolul de a filtra informația tehnică și de a susține încrederea. Utilizatorii caută soluții, aplicații și produse pentru nevoi specifice, iar modul în care organizezi informația influențează direct calitatea lead-urilor generate.",
    challenge:
      "Un proiect industrial riscă ușor să devină greu de parcurs dacă pune prea mult accent pe jargon sau pe liste lungi de produse, fără o arhitectură de informații clară. Problema nu este doar designul, ci modul în care un client potențial ajunge de la interes la cerere concretă.",
    solution:
      "Am tratat site-ul ca pe un instrument comercial și de poziționare. Structura paginilor, modul de prezentare a soluțiilor și ierarhia conținutului au fost gândite pentru public B2B, cu accent pe claritate, credibilitate și pași simpli către contact.",
    outcome: [
      "Website mai potrivit pentru un proces de vânzare B2B și lead-uri mai bine filtrate.",
      "Prezentare tehnică mai clară pentru game diverse de soluții.",
      "Exemplu bun de site corporate unde designul și arhitectura susțin mesajul comercial.",
    ],
    supportedServices: [
      {
        slug: "creare-site-web",
        reason: "arată cum construim proiecte web mai complexe, cu structură clară pentru conținut B2B",
      },
      {
        slug: "web-design",
        reason: "este un exemplu de interfață curată într-un context tehnic și corporativ",
      },
      {
        slug: "mentenanta-website",
        reason: "site-urile cu multe pagini și informații tehnice au nevoie de actualizări și optimizare continuă",
      },
    ],
    relatedSlugs: ["studio-by-cristian-design", "juridic-broker-asigurari", "promovare-digitala"],
  },
  {
    id: "alex-relax-hotel",
    title: "Alex Relax Hotel",
    slug: "alex-relax-hotel",
    sortDescription:
      "Website de prezentare pentru hotel, cu focus pe camere, facilități și traseu clar spre rezervare și contact.",
    image: "/images/portofoliu/Alex-Relax-Hotel-portofoliu.webp",
    imageAlt: "Website Alex Relax Hotel cu prezentare camere si facilitati",
    liveUrl: "https://alex-relax-hotel.vercel.app/",
    tags: ["web design", "hospitality"],
    categories: ["hotel"],
    clientLabel: "Hotel și HoReCa",
    headline: "Site de prezentare pentru hotel, orientat pe claritate, încredere și cereri de rezervare",
    metaTitle: "Alex Relax Hotel - site hotel si rezervari | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un website hotelier: structură de prezentare, conținut clar pentru camere și facilități și bază bună pentru trafic local.",
    context:
      "Pentru un hotel, site-ul trebuie să răspundă rapid la întrebările de bază: ce camere există, ce facilități oferă locația și cum poate fi făcută o rezervare sau o solicitare. În lipsa unei structuri clare, utilizatorul abandonează repede și revine pe platforme terțe.",
    challenge:
      "Principala provocare a fost să păstrăm prezentarea suficient de atractivă vizual, dar fără a sacrifica accesul rapid la informații concrete. În HoReCa, site-ul trebuie să susțină atât brandingul, cât și acțiunea imediată.",
    solution:
      "Am construit o pagină de prezentare orientată pe camere, beneficii și pași simpli de contact. Proiectul a fost gândit pentru mobil, cu accent pe lizibilitate, imagini bine integrate și secțiuni care răspund rapid la întrebările frecvente ale unui potențial client.",
    outcome: [
      "Experiență mai clară pentru utilizatorii care caută rapid informații despre locație.",
      "Structură potrivită pentru un site de prezentare local, cu obiectiv comercial clar.",
      "Bază bună pentru extindere ulterioară spre SEO local și promovare.",
    ],
    supportedServices: [
      {
        slug: "creare-site-prezentare",
        reason: "arată cum poate arăta un site de prezentare orientat pe informație clară și contact rapid",
      },
      {
        slug: "web-design",
        reason: "demonstrează cum poate fi folosit designul pentru a susține încrederea într-un business din HoReCa",
      },
      {
        slug: "optimizare-seo",
        reason: "site-urile locale din hospitality au nevoie de o structură bună pentru căutări informaționale și comerciale",
      },
    ],
    relatedSlugs: ["juridic-broker-asigurari", "studio-by-cristian-design", "promovare-digitala"],
  },
  {
    id: "juridic-broker-asigurari",
    title: "Juridic Broker — Asigurări",
    slug: "juridic-broker-asigurari",
    sortDescription:
      "Site de servicii pentru agenție de asigurări, construit pentru prezentare clară, lead generation și conținut de încredere.",
    image: "/images/portofoliu/Juridic-Broker-Asigurari-portofoliu.webp",
    imageAlt: "Website Juridic Broker pentru servicii de asigurari si lead generation",
    liveUrl: "https://juridic-broker.vercel.app/",
    tags: ["web design", "asigurari"],
    categories: ["servicii"],
    clientLabel: "Servicii financiare și asigurări",
    headline: "Site de servicii pentru asigurări, gândit pentru claritate, încredere și lead-uri",
    metaTitle: "Juridic Broker - site servicii asigurari | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un website de servicii în zona asigurărilor: structură clară a ofertei, lead generation și bază bună pentru SEO.",
    context:
      "Într-o zonă bazată pe încredere, cum este cea a asigurărilor, site-ul trebuie să transmită rapid profesionalism și claritate. Utilizatorul vrea să înțeleagă ce servicii primește, cui se adresează și cum poate cere sprijin fără fricțiune.",
    challenge:
      "Provocarea a fost să organizăm serviciile și mesajul astfel încât site-ul să nu pară nici prea tehnic, nici prea vag. Pentru astfel de business-uri, diferența o face modul în care explici simplu oferta și reduci ezitarea înainte de contact.",
    solution:
      "Am construit o structură de site care pune în centru serviciile, scenariile de utilizare și pașii simpli de contact. Pagina a fost gândită ca un instrument de lead generation, susținut de un design curat și de o prezentare mai clară a valorii oferite.",
    outcome: [
      "Mesaj comercial mai clar pentru un business bazat pe consultanță și încredere.",
      "Cadru bun pentru pagini de servicii și conținut de suport care pot susține SEO.",
      "Exemplu bun de site de prezentare orientat pe lead-uri, nu doar pe design.",
    ],
    supportedServices: [
      {
        slug: "creare-site-prezentare",
        reason: "demonstrează cum poate fi construit un site de servicii orientat pe lead generation și claritate",
      },
      {
        slug: "promovare-site",
        reason: "arată un tip de business unde traficul și promovarea au sens doar dacă site-ul convertește clar",
      },
      {
        slug: "optimizare-seo",
        reason: "site-urile de servicii au nevoie de pagini bine structurate pentru intenții comerciale și informaționale",
      },
    ],
    relatedSlugs: ["alex-relax-hotel", "firsttech-echipamente-industriale", "promovare-digitala"],
  },
  {
    id: "promovare-digitala",
    title: "Promovare Digitală — Marketing",
    slug: "promovare-digitala",
    sortDescription:
      "Site de agenție de marketing, cu structură de servicii, studii de caz și blog, gândit pentru vizibilitate și conversii.",
    image: "/images/portofoliu/Promovare-Digitala-Marketing-Portofoliu.webp",
    imageAlt: "Website agentie marketing Promovare Digitala cu servicii si studii de caz",
    liveUrl: "https://www.promovare-digitala.ro/",
    tags: ["web design", "marketing"],
    categories: ["agenție"],
    clientLabel: "Agenție marketing",
    headline: "Website de agenție marketing, construit pentru servicii, conținut și dovadă de expertiză",
    metaTitle: "Promovare Digitala - site agentie marketing | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un site de agenție marketing: structură de servicii, resurse și studii de caz care susțin vizibilitatea și conversia.",
    context:
      "Un website de agenție nu trebuie să prezinte doar servicii, ci să susțină și autoritatea brandului. Asta înseamnă o combinație între pagini comerciale, conținut de suport și elemente de dovadă care explică de ce echipa respectivă merită luată în calcul.",
    challenge:
      "Principala dificultate a fost să legăm într-o singură arhitectură roluri diferite: pagini de servicii, pagini de suport și spații pentru conținut care să atragă trafic informațional. Fără această separare, un site de agenție riscă să canibalizeze propriile intenții de căutare.",
    solution:
      "Am gândit proiectul ca un sistem, nu doar ca un website de prezentare. Structura de servicii, portofoliul, secțiunile de conținut și CTA-urile au fost construite pentru a lucra împreună și pentru a susține atât vizibilitatea, cât și conversia.",
    outcome: [
      "Exemplu bun de site în care paginile comerciale și conținutul pot lucra în aceeași arhitectură.",
      "Bază solidă pentru SEO, promovare și dovadă de expertiză într-un singur ecosistem.",
      "Model util pentru business-uri care au nevoie de servicii, resurse și portofoliu în același site.",
    ],
    supportedServices: [
      {
        slug: "optimizare-seo",
        reason: "este un exemplu clar de site în care structura și conținutul susțin strategia SEO pe termen lung",
      },
      {
        slug: "promovare-site",
        reason: "arată cum trebuie să arate baza tehnică și de mesaj înainte să investești în promovare",
      },
      {
        slug: "creare-site-web",
        reason: "demonstrează cum construim un site complex, cu servicii, resurse și secțiuni de dovadă",
      },
    ],
    relatedSlugs: ["juridic-broker-asigurari", "cristina-zurba", "firsttech-echipamente-industriale"],
  },
  {
    id: "cristina-zurba",
    title: "Cristina Zurba — Îndrumare spirituală",
    slug: "cristina-zurba",
    sortDescription:
      "Platformă de conținut și servicii, construită pentru a susține articole, servicii și un ecosistem digital mai amplu.",
    image: "/images/portofoliu/cristina-zurba-portofoliu.webp",
    imageAlt: "Website Cristina Zurba cu continut editorial si servicii",
    liveUrl: "https://www.cristinazurba.com/",
    tags: ["web design", "content"],
    categories: ["personal"],
    clientLabel: "Brand personal și conținut",
    headline: "Platformă de conținut și servicii pentru un brand personal, cu structură pregătită pentru creștere",
    metaTitle: "Cristina Zurba - platforma de continut si servicii | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un website de brand personal: conținut, servicii și experiență web coerentă într-un singur ecosistem digital.",
    context:
      "Acest tip de proiect are nevoie de mai mult decât o simplă pagină de prezentare. Când un brand personal publică articole, oferă servicii și construiește o relație constantă cu publicul, website-ul devine o platformă de conținut și conversie în același timp.",
    challenge:
      "Dificultatea nu este doar vizuală, ci structurală: cum separi conținutul editorial de paginile comerciale, fără să fragmentezi experiența și fără să creezi confuzie pentru utilizator sau pentru motoarele de căutare.",
    solution:
      "Am gândit platforma ca un ecosistem cu roluri clare pentru fiecare tip de pagină. Conținutul, serviciile și semnalele de autoritate sunt integrate într-o structură coerentă, cu accent pe experiență fluidă și pe posibilitatea de a scala conținutul în timp.",
    outcome: [
      "Exemplu relevant de proiect unde conținutul și serviciile coexistă fără să se anuleze între ele.",
      "Bază bună pentru SEO, branding și extindere editorială.",
      "Structură utilă pentru branduri personale care au nevoie de claritate între trafic informațional și conversie.",
    ],
    supportedServices: [
      {
        slug: "creare-site-web",
        reason: "arată cum construim platforme web mai mari, cu roluri diferite pentru servicii, blog și conținut",
      },
      {
        slug: "web-design",
        reason: "demonstrează un proiect în care identitatea vizuală trebuie să rămână coerentă pe mai multe tipuri de pagini",
      },
      {
        slug: "optimizare-seo",
        reason: "site-urile de conținut au nevoie de o arhitectură bună pentru a susține articolele și paginile comerciale în același timp",
      },
    ],
    relatedSlugs: ["studio-by-cristian-design", "promovare-digitala", "juridic-broker-asigurari"],
  },
  {
    id: "d-toate-magazin-online",
    title: "D-Toate — Magazin online",
    slug: "d-toate-magazin-online",
    sortDescription:
      "Magazin online cu structură clară și UX orientat pe conversie, construit pentru parcurs rapid de la categorie la comandă.",
    image: "/images/portofoliu/d-toate.webp",
    imageAlt: "Magazin online D-Toate cu categorii si pagini de produs orientate pe conversie",
    liveUrl: "https://d-toate.ro/",
    tags: ["web design", "e-commerce"],
    categories: ["magazin online"],
    clientLabel: "E-commerce generalist",
    headline: "Magazin online pentru produse diverse, cu accent pe claritate și experiență de cumpărare",
    metaTitle: "D-Toate - magazin online cu focus pe conversie | Portofoliu Web Dynamicx",
    metaDescription:
      "Studiu de caz pentru un magazin online generalist: structură de categorii, UX pentru conversie și bază bună pentru optimizare continuă.",
    context:
      "Într-un magazin online generalist, provocarea este să păstrezi experiența clară chiar și atunci când gamele de produse diferă mult. Utilizatorul trebuie să poată înțelege rapid unde se află, ce cumpără și ce pași urmează până la finalizarea comenzii.",
    challenge:
      "Fără o structură bine gândită, un astfel de magazin devine rapid greu de parcurs. În plus, o platformă e-commerce are nevoie și de o bază bună pentru optimizări SEO și comerciale care apar după lansare.",
    solution:
      "Am construit un layout orientat pe categorie, pagini mai clare pentru produse și un traseu de cumpărare mai ușor de urmărit. Proiectul a fost tratat ca o bază de lucru pentru conversii și pentru dezvoltarea ulterioară a magazinului.",
    outcome: [
      "Experiență mai clară de cumpărare pe un catalog variat.",
      "Cadru bun pentru optimizare comercială și SEO după lansare.",
      "Exemplu relevant pentru magazine care au nevoie de structură și evoluție, nu doar de design.",
    ],
    supportedServices: [
      {
        slug: "creare-magazin-online",
        reason: "arată cum abordăm magazine online unde structura și fluxul de cumpărare sunt esențiale",
      },
      {
        slug: "optimizare-seo",
        reason: "magazinele online au nevoie de categorii și pagini comerciale pregătite pentru creștere organică",
      },
      {
        slug: "mentenanta-website",
        reason: "un e-commerce real are nevoie de ajustări, actualizări și optimizări după lansare",
      },
    ],
    relatedSlugs: ["auto-detailing-parts", "firsttech-echipamente-industriale", "promovare-digitala"],
  },
];

export function getPortfolioCaseStudyHref(slug: string) {
  return `${portfolioHubPath}/${slug}`;
}

export function getPortfolioBySlug(slug: string) {
  return portfolioData.find((portfolio) => portfolio.slug === slug);
}

export function getRelatedPortfolioItems(slugs: string[]) {
  return slugs
    .map((slug) => getPortfolioBySlug(slug))
    .filter((portfolio): portfolio is Portfolio => Boolean(portfolio));
}

export function getPortfolioServiceMeta(serviceSlug: string) {
  return portfolioServiceCatalog[serviceSlug as PortfolioServiceSlug];
}

export function getPrimaryPortfolioService(portfolio: Portfolio) {
  const primarySupport = portfolio.supportedServices[0];
  if (!primarySupport) {
    return null;
  }

  const serviceMeta = getPortfolioServiceMeta(primarySupport.slug);
  if (!serviceMeta) {
    return null;
  }

  return {
    ...primarySupport,
    ...serviceMeta,
  };
}

export function getPortfolioItemsForService(serviceSlug: string, limit = 3): PortfolioServiceMatch[] {
  return portfolioData
    .flatMap((portfolio, originalIndex) => {
      const matchIndex = portfolio.supportedServices.findIndex((item) => item.slug === serviceSlug);
      if (matchIndex === -1) {
        return [];
      }

      return [
        {
          portfolio,
          support: portfolio.supportedServices[matchIndex],
          matchIndex,
          originalIndex,
        },
      ];
    })
    .sort((left, right) => left.matchIndex - right.matchIndex || left.originalIndex - right.originalIndex)
    .slice(0, limit)
    .map(({ portfolio, support }) => ({ portfolio, support }));
}
