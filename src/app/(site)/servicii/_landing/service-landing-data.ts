import type {
  NonMobileServiceSlug,
  ServiceLandingData,
  ServiceLandingLink,
} from "./service-landing-types";

const phoneHref = "tel:+40774550758";

const contactLink = (label: string): ServiceLandingLink => ({ label, href: "/contact" });
const phoneLink = (label: string): ServiceLandingLink => ({ label, href: phoneHref });
const quickEstimateLink = (label: string): ServiceLandingLink => ({ label, href: "#contact-rapid" });
const serviceLink = (href: string, label: string): ServiceLandingLink => ({ href, label });
const portfolioLink = (label: string): ServiceLandingLink => ({ href: "/portofoliu", label });

const serviceLandingPagesBySlug = {
  "web-design": {
    slug: "web-design",
    title: "Web design profesional pentru site-uri mai clare și mai convingătoare",
    description: "Servicii de web design orientate pe UX, conversie și consistență vizuală pentru website-uri moderne.",
    metaTitle: "Web design profesional pentru website-uri orientate pe conversie | Web Dynamicx",
    metaDescription:
      "Servicii de web design cu audit UX, wireframe, design system și ecrane pregătite pentru implementare. Design clar, rapid și orientat pe conversii.",
    image: "/images/services/agentie-web-design.webp",
    ogImage: "/images/services/agentie-web-design.webp",
    ogAlt: "Web design profesional pentru website-uri și landing pages",
    hero: {
      eyebrow: "Web design orientat pe UX și conversie",
      title: "Web design pentru business-uri care vor pagini mai clare, mai rapide și mai convingătoare",
      subtitle:
        "Construim interfețe web care explică rapid valoarea ofertei, reduc fricțiunea și pregătesc implementarea într-un mod curat, coerent și ușor de scalat.",
      bullets: [
        "Clarificăm mesajul și ierarhia informației înainte de design",
        "Definim ecrane, componente și pattern-uri reutilizabile",
        "Predăm un sistem vizual ușor de implementat și extins",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru web design"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Poți veni cu un site existent, cu wireframe sau doar cu obiectivele de business. Îți spunem rapid dacă e nevoie de redesign parțial sau de o abordare completă.",
      trustLine: "Potrivit pentru redesign, landing pages, prezentare servicii și sisteme vizuale coerente.",
      trustLinkLabel: "Vezi portofoliul general",
      trustLinkHref: "/portofoliu",
      stats: [
        { label: "Focus", value: "UX, claritate, conversie" },
        { label: "Livrare", value: "Wireframe + UI + handoff" },
        { label: "Potrivit pentru", value: "Redesign și lansări noi" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce primești dintr-un proiect bun de web design",
      intro:
        "Nu lucrăm doar la partea vizuală. Un proiect bun de web design înseamnă structură, mesaj, prioritizare și un sistem de componente care poate fi implementat fără ambiguitate.",
      cards: [
        {
          title: "Audit UX și logică de pagină",
          description: "Vedem unde se rupe fluxul actual și ce trebuie reorganizat ca utilizatorul să înțeleagă mai repede oferta.",
        },
        {
          title: "Wireframe și direcție vizuală",
          description: "Stabilim structura secțiunilor și apoi construim direcția grafică potrivită pentru brand și tipul de serviciu.",
        },
        {
          title: "Design system de bază",
          description: "Definim pattern-uri, spațiere, CTA-uri, carduri și stiluri recurente pentru consistență și viteză de implementare.",
        },
        {
          title: "Predare clară pentru dezvoltare",
          description: "Ecranele și stările importante sunt gândite astfel încât implementarea să nu depindă de interpretări târzii.",
        },
      ],
      proofTitle: "Zone frecvent optimizate",
      proofItems: ["hero și CTA", "pagini de servicii", "landing pages", "redesign UI"],
      proofLink: portfolioLink("Vezi exemple din portofoliu"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "De ce contează designul atunci când vrei rezultate, nu doar o interfață mai frumoasă",
      intro:
        "Un design bun nu doar arată mai bine, ci organizează mai bine informația, susține mesajul de vânzare și scurtează timpul până la decizie.",
      items: [
        {
          title: "Mesaj mai ușor de parcurs",
          description: "Punem informația în ordinea potrivită pentru ca oferta să fie înțeleasă rapid pe desktop și mobil.",
        },
        {
          title: "CTA-uri mai vizibile și mai credibile",
          description: "Gândim zonele de acțiune astfel încât utilizatorul să știe ce pas urmează și de ce merită să îl facă.",
        },
        {
          title: "Consistență între pagini",
          description: "Componentele recurente elimină diferențele inutile dintre pagini și păstrează un ritm vizual coerent.",
        },
        {
          title: "Design pregătit pentru implementare",
          description: "Reducem fricțiunea dintre design și development prin ecrane clare, stări importante și reguli de compoziție.",
        },
        {
          title: "Experiență mai bună pe mobil",
          description: "Structurăm conținutul și spațierea pentru utilizatori care vin din trafic mobil, reclame sau social.",
        },
        {
          title: "Bază mai bună pentru optimizare",
          description: "Un UI bine organizat face mai simple și testele ulterioare pe CTA, secțiuni și mesaje de ofertă.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens să investești într-un serviciu dedicat de web design",
      intro:
        "Serviciul este potrivit pentru companii care au nevoie fie de o interfață nouă, fie de claritate mai bună în paginile care deja atrag trafic, dar nu convertesc suficient.",
      items: [
        "business-uri care au site, dar designul actual nu susține suficient oferta sau CTA-urile",
        "echipe care vor redesign înainte de rebuild tehnic sau înainte de campanii noi",
        "servicii B2B și B2C care au nevoie de pagini mai clare și mai persuasive",
        "produse digitale care au nevoie de UI coerent, nu doar de ecrane izolate",
      ],
      outro:
        "Dacă traficul există, dar experiența nu susține suficient decizia, web designul bun devine o investiție direct legată de performanța paginii.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte de web design pe care le abordăm frecvent",
      intro:
        "Putem intra atât în redesign-uri punctuale, cât și în proiecte noi în care trebuie definită întreaga direcție de interfață.",
      featured: [
        {
          title: "Redesign pentru site-uri de servicii",
          description: "Pentru pagini în care oferta nu este clară, iar utilizatorul nu vede suficient de repede de ce să ia legătura cu tine.",
        },
        {
          title: "Landing pages pentru campanii",
          description: "Pentru campanii plătite, lansări sau validare de ofertă unde mesajul și CTA-ul trebuie să fie foarte bine prioritizate.",
        },
        {
          title: "Sisteme UI pentru website-uri în creștere",
          description: "Pentru proiecte care au nevoie de componente recurente și consistență între pagini, fără a redesena totul de la zero la fiecare extindere.",
        },
      ],
      additional: [
        {
          title: "Interfețe pentru pagini de pricing și ofertare",
          description: "Structurăm pachetele și comparațiile astfel încât utilizatorul să poată evalua rapid opțiunile.",
        },
        {
          title: "Design pentru pagini cu volum mare de conținut",
          description: "Organizăm informația în layout-uri ușor de scanat, cu ierarhie clară și ritm bun de lectură.",
        },
      ],
      outro: "Dacă proiectul cere și implementare completă, putem continua firesc cu",
      outroLink: serviceLink("/servicii/creare-site-web", "serviciul de creare site web"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce înseamnă web design bun, dincolo de un mockup frumos",
      intro:
        "Diferența reală apare atunci când designul rezolvă probleme de claritate, nu doar schimbă culori și fonturi.",
      items: [
        {
          title: "Structură înainte de decor",
          description: "Pornim de la obiectiv, mesaj și secvența informației, nu de la efecte vizuale puse prea devreme în pagină.",
        },
        {
          title: "Componente, nu ecrane izolate",
          description: "Gândim un sistem reutilizabil care ajută atât consistența site-ului, cât și viteza de lucru în faza de implementare.",
        },
        {
          title: "UI care ține cont de mobil și performanță",
          description: "Evităm deciziile vizuale care complică inutil experiența sau încarcă implementarea fără beneficii reale.",
        },
        {
          title: "Predare utilă pentru development",
          description: "Definim stări, spacing și pattern-uri astfel încât să existe mai puține interpretări între design și cod.",
        },
      ],
      outro:
        "Dacă ai nevoie și de identitate vizuală înainte de designul paginilor, poți continua cu",
      outroLink: serviceLink("/servicii/creare-logo-branding", "serviciul de branding"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum decurge un proiect de web design",
      intro:
        "Procesul este structurat astfel încât să obținem claritate devreme și să evităm iterații inutile în fazele târzii.",
      steps: [
        {
          id: "audit-web-design",
          title: "Audit și obiective",
          subtitle: "Clarificăm ce trebuie îmbunătățit și de ce.",
          description: "Analizăm paginile actuale, publicul și obiectivele de conversie pentru a vedea unde merită intervenit.",
          tags: ["Audit UX", "Mesaj", "Prioritizare"],
          duration: "Etapa 1",
        },
        {
          id: "wireframe-web-design",
          title: "Wireframe și structură",
          subtitle: "Punem în ordine secțiunile și fluxul de lectură.",
          description: "Stabilim ierarhia informației, ordinea secțiunilor și zonele cheie de conversie înainte de direcția vizuală finală.",
          tags: ["Wireframe", "Structură", "CTA"],
          duration: "Etapa 2",
        },
        {
          id: "ui-web-design",
          title: "Direcție vizuală și componente",
          subtitle: "Transformăm structura într-un sistem coerent.",
          description: "Definim stilul vizual, componentele și layout-urile necesare pentru paginile prioritare ale proiectului.",
          tags: ["UI", "Design system", "Responsive"],
          duration: "Etapa 3",
        },
        {
          id: "handoff-web-design",
          title: "Revizii și handoff",
          subtitle: "Închidem deciziile importante înainte de implementare.",
          description: "Rafinăm variantele, clarificăm stările importante și pregătim materialele de predare pentru development.",
          tags: ["Revizii", "Handoff", "Specificații"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce include, de regulă, un proiect de web design",
      intro: "În funcție de amploarea proiectului, pachetul poate acoperi atât strategia de pagină, cât și designul complet.",
      groups: [
        {
          title: "Strategie și structură",
          items: ["audit UX și observații prioritare", "wireframe pentru pagini cheie", "ierarhie clară de conținut și CTA"],
        },
        {
          title: "UI și componente",
          items: ["direcție vizuală aliniată brandului", "componente reutilizabile pentru pagini", "design responsive pentru desktop și mobil"],
        },
        {
          title: "Predare",
          items: ["fișiere pregătite pentru development", "stări importante și note de implementare", "suport de clarificare în etapa de handoff"],
        },
      ],
      outro: "Scopul este să primești un design ușor de implementat și ușor de extins, nu doar câteva ecrane frumoase fără logică de sistem.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru un proiect de web design?",
      budgetText:
        "Bugetul depinde de numărul de pagini, nivelul de redesign, câte componente trebuie definite și cât de multă clarificare strategică intră în proiect.",
      budgetHighlight: "Proiectele de web design bine definite pot porni de la aproximativ 500 EUR.",
      budgetFactors: [
        "câte pagini trebuie desenate cap-coadă",
        "dacă există deja brand și structură sau pornim mai de la zero",
        "nivelul de detaliu necesar în componentizare și handoff",
        "cât de amplu este redesign-ul față de site-ul actual",
      ],
      durationTitle: "Cât durează, realist, un proiect de web design?",
      durationText:
        "Pentru pagini prioritare sau redesign-uri bine delimitate, proiectele se pot închide în 1-3 săptămâni. Dacă intrăm într-un sistem mai amplu de pagini și componente, durata crește.",
      durationHighlight: "1-3 săptămâni pentru multe proiecte de redesign și pagini cheie",
      durationNote:
        "Ținem durata legată de numărul de pagini și de claritatea brief-ului. Dacă proiectul cere și branding sau implementare, planificarea se face separat pe etape.",
      cta: {
        title: "Vrei să vezi dacă ai nevoie de redesign complet sau doar de optimizare pe paginile cheie?",
        text: "Îți spunem rapid unde merită intervenit, ce pagini ar trebui prioritizate și ce nivel de design are sens pentru etapa actuală a business-ului.",
        primary: quickEstimateLink("Cere o estimare rapidă"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Ne poți trimite și site-ul actual. Dacă există probleme clare de UX sau structură, le punctăm de la început.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg companiile să lucreze cu noi pentru web design",
      intro:
        "Punctul nostru forte nu este doar zona vizuală, ci felul în care legăm structura, mesajul și designul de obiective concrete de conversie.",
      items: [
        "Punem ordinea informației înaintea ornamentelor vizuale",
        "Gândim paginile în logica reală a unui website, nu ca imagini izolate",
        "Predăm design util pentru implementare, nu doar pentru prezentare",
        "Păstrăm consistența între pagini și creăm bază bună pentru extindere",
      ],
      outro: "Un design bun reduce confuzia, susține oferta și îți face website-ul mai ușor de crescut în timp.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre serviciile de web design",
      intro:
        "Răspunsuri scurte la întrebările pe care le primim cel mai des despre redesign, livrabile și colaborarea dintre design și development.",
      items: [
        {
          question: "Serviciul de web design include și wireframe, nu doar designul final?",
          answer: "Da. În majoritatea proiectelor începem cu structură și wireframe, tocmai ca să validăm fluxul de informații înainte de direcția vizuală finală.",
        },
        {
          question: "Puteți intra și doar pe redesign-ul unor pagini existente?",
          answer: "Da. Putem lucra punctual pe homepage, pagini de servicii, pagini de ofertă sau landing pages care au nevoie de claritate mai bună și CTA-uri mai convingătoare.",
        },
        {
          question: "Primesc și handoff pentru implementare?",
          answer: "Da. Pregătim fișierele și clarificările necesare astfel încât implementarea să poată continua fără blocaje inutile.",
        },
        {
          question: "Puteți continua și cu dezvoltarea website-ului după design?",
          answer: "Da. Dacă vrei, putem continua cu implementarea completă a designului în cadrul serviciului nostru de creare site web.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Pași următori după un proiect de web design",
      intro: "Dacă designul este doar o parte din proiectul tău, poți continua cu serviciile relevante de mai jos.",
      items: [
        {
          title: "Creare site web",
          description: "Dacă după design urmează și implementarea completă a paginilor și componentelor.",
          href: "/servicii/creare-site-web",
          ctaLabel: "Vezi serviciul de implementare",
        },
        {
          title: "Branding",
          description: "Dacă vrei să clarifici identitatea vizuală înainte să intri în designul website-ului.",
          href: "/servicii/creare-logo-branding",
          ctaLabel: "Vezi serviciul de branding",
        },
        {
          title: "Formular de contact",
          description: "Dacă ai deja brief-ul sau site-ul actual și vrei să ne trimiți contextul complet.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care completează natural un proiect de web design",
      description: "Poți continua cu aceste servicii dacă proiectul cere și implementare, identitate vizuală sau optimizare mai amplă după design.",
      items: [
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/creare-site-prezentare", "Creare site de prezentare"),
        serviceLink("/servicii/creare-logo-branding", "Creare logo & branding"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce pagini vrei să îmbunătățești și îți propunem o direcție clară de web design",
      text: "Fie că vrei redesign complet, optimizare pe pagini cheie sau un UI nou pentru o ofertă nouă, putem structura proiectul într-un mod clar și ușor de implementat.",
      supporting:
        "Ne poți trimite site-ul actual, câteva exemple de referință sau doar obiectivul comercial. Îți răspundem cu o recomandare realistă pentru următoarea etapă.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "creare-logo-branding": {
    slug: "creare-logo-branding",
    title: "Creare logo și branding pentru business-uri care vor o imagine coerentă",
    description: "Servicii de branding, creare logo și identitate vizuală pentru companii care vor consistență și încredere.",
    metaTitle: "Creare logo și branding pentru identitate vizuală coerentă | Web Dynamicx",
    metaDescription:
      "Servicii de branding și creare logo cu paletă, tipografie, direcție vizuală și materiale de bază pentru o identitate coerentă.",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    ogAlt: "Servicii de branding și creare logo pentru companii",
    hero: {
      eyebrow: "Branding și identitate vizuală",
      title: "Creare logo și branding pentru companii care vor să arate coerent pe toate punctele de contact",
      subtitle:
        "Te ajutăm să definești o identitate vizuală clară, aplicabilă și ușor de folosit în website, social media, materiale comerciale și campanii.",
      bullets: [
        "Clarificăm poziționarea vizuală și direcția de brand",
        "Construim logo, paletă, tipografie și reguli de utilizare",
        "Predăm un sistem ușor de aplicat în materiale și în mediul digital",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru branding"),
      ctaSecondary: phoneLink("Discută cu echipa"),
      ctaMicrocopy:
        "Dacă pornești de la zero sau dacă actualul brand nu mai susține direcția business-ului, putem structura proiectul de la nivel de concept până la kitul vizual final.",
      trustLine: "Potrivit pentru business-uri noi, rebranding și branduri care au nevoie de consistență în digital.",
      trustLinkLabel: "Vezi serviciile conexe",
      trustLinkHref: "/servicii/web-design",
      stats: [
        { label: "Livrabile", value: "Logo + paletă + guideline" },
        { label: "Potrivit pentru", value: "Lansare sau rebranding" },
        { label: "Aplicare", value: "Website, social, materiale" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce rezolvă un proiect bun de branding",
      intro:
        "Un brand coerent te ajută să fii recunoscut mai ușor, să inspiri mai multă încredere și să păstrezi consistență între website, reclame și materiale comerciale.",
      cards: [
        {
          title: "Poziționare vizuală mai clară",
          description: "Stabilim direcția de brand astfel încât identitatea să reflecte mai bine tipul de business și publicul vizat.",
        },
        {
          title: "Decizii vizuale mai simple",
          description: "Paleta, tipografia și regulile de aplicare reduc improvizațiile și diferențele dintre materiale.",
        },
        {
          title: "Bază bună pentru website și campanii",
          description: "Brandingul clar face mai ușoară continuarea proiectului în web design, pagini de ofertă sau campanii.",
        },
        {
          title: "Imagine mai coerentă în timp",
          description: "Scopul este să ai un sistem vizual aplicabil, nu doar un logo izolat fără reguli de utilizare.",
        },
      ],
      proofTitle: "Proiecte pentru care are sens",
      proofItems: ["lansări noi", "rebranding", "website nou", "materiale de vânzare"],
      proofLink: serviceLink("/servicii/creare-site-prezentare", "Vezi și serviciul de creare site de prezentare"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Cum te ajută brandingul să ai o imagine mai solidă și mai ușor de aplicat",
      intro:
        "Un branding bun îți dă claritate, consistență și un cadru de lucru mai simplu pentru toate materialele viitoare.",
      items: [
        {
          title: "Logo cu logică, nu doar aspect",
          description: "Construim semnul și direcția de brand astfel încât să se lege de poziționarea business-ului și de mediile în care va fi folosit.",
        },
        {
          title: "Paletă și tipografie coerente",
          description: "Definim sistemul vizual de bază pentru ca website-ul și materialele de comunicare să arate unitar.",
        },
        {
          title: "Guideline ușor de folosit",
          description: "Predăm reguli clare care ajută echipa să aplice identitatea fără improvizații constante.",
        },
        {
          title: "Mai multă încredere în punctele de contact",
          description: "Imaginea coerentă ridică percepția de profesionalism și face mesajele mai credibile.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când merită să lucrezi la logo și branding",
      intro:
        "Serviciul este potrivit atât pentru companii noi, cât și pentru branduri care simt că imaginea actuală nu mai susține direcția de business sau nu mai este suficient de coerentă.",
      items: [
        "business-uri noi care au nevoie de o identitate vizuală clară pentru lansare",
        "companii care intră într-o etapă nouă și vor un refresh de imagine",
        "echipe care au website, social media și materiale comerciale fără consistență între ele",
        "branduri personale sau firme de servicii care vor să inspire mai multă încredere vizuală",
      ],
      outro:
        "Dacă brandingul este încă neclar, aproape toate deciziile vizuale ulterioare devin mai grele. De aceea are sens să construiești mai întâi fundația.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte de branding pe care le putem acoperi",
      intro:
        "Putem lucra de la logo și identitate de bază până la pachete mai complete pentru aplicare digitală și comercială.",
      featured: [
        {
          title: "Branding pentru business nou",
          description: "Potrivit când vrei să lansezi cu o imagine clară, nu să aduni vizualuri disparate în timp.",
        },
        {
          title: "Refresh de identitate",
          description: "Pentru situațiile în care brandul actual pare învechit, inconsistent sau nu mai susține direcția actuală a business-ului.",
        },
        {
          title: "Kit vizual pentru online",
          description: "Pentru companii care vor să folosească identitatea coerent pe website, social media și materiale de ofertare.",
        },
      ],
      additional: [
        {
          title: "Logo și guideline pentru brand personal",
          description: "Pentru consultanți, specialiști și fondatori care vor o imagine mai profesională în digital.",
        },
        {
          title: "Identitate de bază pentru website nou",
          description: "Potrivim brandingul cu următoarea etapă de design și implementare a website-ului.",
        },
      ],
      outro: "Dacă vrei să aplici identitatea imediat într-un website nou, poți continua cu",
      outroLink: serviceLink("/servicii/creare-site-prezentare", "crearea unui site de prezentare"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Diferența dintre un logo izolat și un branding care chiar poate fi folosit",
      intro:
        "În practică, brandul util nu se oprește la semn. Are nevoie de reguli și de o logică de aplicare care funcționează și în digital, și în materiale comerciale.",
      items: [
        {
          title: "Direcție, nu doar simbol",
          description: "Logo-ul trebuie să facă parte dintr-o direcție vizuală mai largă, nu să rămână singurul element definit.",
        },
        {
          title: "Aplicabilitate în contexte reale",
          description: "Ne uităm la website, social media, documente și materiale comerciale încă din faza de construcție a identității.",
        },
        {
          title: "Sistem ușor de continuat",
          description: "Paleta, tipografia și regulile de utilizare simplifică munca ulterioară pentru orice designer sau marketer.",
        },
        {
          title: "Coerență pe termen lung",
          description: "Scopul este să reduci variațiile inutile și să creezi un standard vizual care ține în timp.",
        },
      ],
      outro: "Dacă după branding urmează și designul paginilor, poți continua cu",
      outroLink: serviceLink("/servicii/web-design", "serviciul de web design"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum lucrăm pe un proiect de branding",
      intro:
        "Procesul este organizat ca să clarificăm direcția vizuală devreme și să ajungem la un sistem aplicabil, nu doar la idei interesante de concept.",
      steps: [
        {
          id: "discovery-branding",
          title: "Discovery și poziționare",
          subtitle: "Înțelegem contextul și direcția de brand.",
          description: "Clarificăm publicul, tonul și tipul de imagine care trebuie construită sau ajustată.",
          tags: ["Context", "Public", "Direcție"],
          duration: "Etapa 1",
        },
        {
          id: "concept-branding",
          title: "Concept și direcție vizuală",
          subtitle: "Definim baza identității.",
          description: "Propunem direcția de logo și sistemul vizual care susține cel mai bine poziționarea brandului.",
          tags: ["Concept", "Logo", "Identitate"],
          duration: "Etapa 2",
        },
        {
          id: "system-branding",
          title: "Sistem și aplicații",
          subtitle: "Punem brandingul într-o formă ușor de folosit.",
          description: "Stabilim culori, tipografie, exemple de aplicare și regulile de bază pentru utilizare coerentă.",
          tags: ["Paletă", "Tipografie", "Aplicare"],
          duration: "Etapa 3",
        },
        {
          id: "handoff-branding",
          title: "Predare și guideline",
          subtitle: "Închidem proiectul într-o formă practică.",
          description: "Predăm fișierele și guideline-ul necesar pentru utilizarea corectă a identității în etapele următoare.",
          tags: ["Fișiere", "Guideline", "Predare"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un proiect de creare logo și branding",
      intro:
        "Pachetul exact depinde de etapă și de cât de extins trebuie să fie sistemul vizual, însă proiectele bune acoperă cel puțin fundația identității.",
      groups: [
        {
          title: "Identitate de bază",
          items: ["logo principal și variante utile", "paletă cromatică", "tipografie de brand"],
        },
        {
          title: "Reguli de utilizare",
          items: ["ghid de aplicare", "exemple de compoziție", "direcție pentru materiale digitale"],
        },
        {
          title: "Fișiere finale",
          items: ["formate pregătite pentru utilizare", "materiale sursă pentru echipă", "clarificări pentru pasul următor"],
        },
      ],
      outro: "Rezultatul trebuie să fie ușor de folosit atât de echipa ta, cât și de orice colaborator care va continua proiectul.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru branding și creare logo?",
      budgetText:
        "Bugetul depinde de cât de amplă este identitatea, dacă este nevoie doar de baza de brand sau și de aplicații suplimentare pentru website și materiale comerciale.",
      budgetHighlight: "Pachetele de branding bine delimitate pot porni de la aproximativ 400 EUR.",
      budgetFactors: [
        "dacă proiectul este branding nou sau rebranding",
        "numărul de livrabile și aplicații vizuale necesare",
        "nivelul de guideline și claritate cerut pentru utilizare ulterioară",
        "cât de repede trebuie finalizat proiectul",
      ],
      durationTitle: "Cât durează, în mod realist, un proiect de branding?",
      durationText:
        "Pentru multe proiecte de identitate de bază, durata este de 1-3 săptămâni. Dacă brandul are nevoie de mai multe aplicații sau de o etapă mai amplă de clarificare, durata crește.",
      durationHighlight: "1-3 săptămâni pentru multe proiecte de branding de bază",
      durationNote:
        "Preferăm să închidem bine direcția de brand înainte să accelerăm livrarea. Consistența contează mai mult decât viteza aparentă din primele zile.",
      cta: {
        title: "Vrei să vezi dacă ai nevoie de branding complet sau doar de clarificarea identității vizuale?",
        text: "Îți spunem ce nivel de intervenție are sens acum și cum se poate lega proiectul de website, materiale comerciale sau campanii.",
        primary: quickEstimateLink("Cere o estimare pentru branding"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja un brand, putem porni de la ce funcționează și de la ce trebuie ajustat, fără să reconstruim inutil totul.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg firmele să lucreze cu noi pentru branding",
      intro:
        "Abordăm brandingul pragmatic: direcție clară, aplicabilitate reală și legătură bună cu etapele care urmează în website și comunicare.",
      items: [
        "Construim o identitate care poate fi folosită imediat, nu doar prezentată",
        "Legăm brandingul de aplicarea lui în website și materiale digitale",
        "Păstrăm sistemul suficient de clar încât să poată fi continuat de echipa ta",
        "Evităm complicațiile inutile și livrăm o bază vizuală coerentă",
      ],
      outro: "Brandingul bun simplifică deciziile viitoare și ridică nivelul de coerență în toate punctele de contact.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre creare logo și branding",
      intro: "Răspunsuri rapide despre livrabile, revizii și felul în care brandingul se leagă de website și materiale digitale.",
      items: [
        {
          question: "Primesc doar logo-ul sau și restul identității?",
          answer: "În funcție de pachet, putem livra nu doar logo-ul, ci și paleta, tipografia, guideline-ul și exemplele de aplicare necesare pentru utilizare coerentă.",
        },
        {
          question: "Pot folosi brandingul ulterior într-un website nou?",
          answer: "Da. Brandingul este gândit tocmai pentru a putea continua natural în web design, site de prezentare sau alte materiale de comunicare.",
        },
        {
          question: "Puteți face și refresh, nu doar branding de la zero?",
          answer: "Da. Putem păstra ce funcționează și ajusta direcția existentă acolo unde imaginea actuală nu mai susține suficient business-ul.",
        },
        {
          question: "Predați și fișierele pentru utilizare ulterioară?",
          answer: "Da. Predăm fișierele și materialele necesare astfel încât identitatea să poată fi folosită și extinsă fără blocaje.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Cum poți continua după ce clarifici brandingul",
      intro: "După branding, următorii pași naturali sunt designul paginilor și aplicarea identității în website și materiale comerciale.",
      items: [
        {
          title: "Web design",
          description: "Dacă vrei să aplici identitatea nouă în pagini de servicii, landing pages sau redesign de website.",
          href: "/servicii/web-design",
          ctaLabel: "Vezi serviciul de web design",
        },
        {
          title: "Creare site de prezentare",
          description: "Dacă urmează lansarea unui website nou pe baza identității vizuale definite acum.",
          href: "/servicii/creare-site-prezentare",
          ctaLabel: "Vezi serviciul de creare site",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți contextul complet și să vezi ce combinație de servicii are sens pentru etapa ta.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care completează un proiect de branding",
      description: "Poți continua cu aceste servicii dacă vrei să aplici identitatea în pagini, website sau promovare.",
      items: [
        serviceLink("/servicii/web-design", "Web design"),
        serviceLink("/servicii/creare-site-prezentare", "Creare site de prezentare"),
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/promovare-site", "Promovare site"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce etapă de branding ai acum și îți propunem direcția potrivită",
      text: "Fie că pornești de la zero, fie că vrei un refresh de identitate, putem transforma nevoia de claritate vizuală într-un sistem coerent și ușor de folosit.",
      supporting:
        "Ne poți spune ce materiale ai deja, ce urmează să lansezi și unde simți acum lipsa de consistență. Îți răspundem cu o abordare clară și realistă.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "creare-magazin-online": {
    slug: "creare-magazin-online",
    title: "Creare magazin online pentru business-uri care vor structură bună și conversii mai bune",
    description: "Servicii de creare magazin online cu platformă potrivită, UX clar, integrări și bază SEO bună pentru e-commerce.",
    metaTitle: "Creare magazin online profesional cu structură SEO și conversie | Web Dynamicx",
    metaDescription:
      "Servicii de creare magazin online cu Shopify, WooCommerce sau soluții custom, optimizate pentru UX, conversii, SEO și integrări e-commerce.",
    image: "/images/services/creare-magazin-online.webp",
    ogImage: "/images/services/creare-magazin-online.webp",
    ogAlt: "Servicii de creare magazin online pentru e-commerce",
    hero: {
      eyebrow: "Creare magazin online orientat pe vânzări",
      title: "Creare magazin online pentru branduri care vor să vândă mai clar, mai rapid și mai predictibil",
      subtitle:
        "Construim magazine online cu structură de catalog bună, pagini de produs convingătoare, checkout mai fluid și bază tehnică pregătită pentru SEO, campanii și integrări.",
      bullets: [
        "Alegem platforma potrivită pentru modelul tău de business",
        "Structurăm catalogul și paginile de produs pentru conversie",
        "Conectăm plăți, livrare, tracking și procesele importante de operare",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru magazinul tău"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Putem porni de la zero, de la un magazin care trebuie refăcut sau de la o platformă care trebuie migrată într-o variantă mai potrivită.",
      trustLine: "Potrivit pentru magazine noi, relansări, migrare și optimizare de structură e-commerce.",
      trustLinkLabel: "Vezi și serviciul Shopify",
      trustLinkHref: "/servicii/creare-magazin-online-shopify",
      stats: [
        { label: "Platforme", value: "Shopify, WooCommerce, custom" },
        { label: "Focus", value: "Catalog, checkout, conversie" },
        { label: "Integrare", value: "Plăți, livrare, tracking" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce primești dintr-un proiect bun de creare magazin online",
      intro:
        "Un magazin online bun nu înseamnă doar un template publicat. Contează structura catalogului, claritatea paginilor de produs, traseul până la checkout și modul în care magazinul se leagă de operațiunile zilnice.",
      cards: [
        {
          title: "Platformă aleasă corect",
          description: "Recomandăm platforma în funcție de catalog, fluxuri, echipă și ritmul în care vrei să crești, nu după modă.",
        },
        {
          title: "Structură bună pentru vânzare",
          description: "Organizăm categorii, filtre și pagini de produs astfel încât navigarea și decizia să fie mai simple.",
        },
        {
          title: "Bazele SEO pentru e-commerce",
          description: "Punem ordine în URL-uri, structura paginilor, meta-date și elemente tehnice importante pentru indexare corectă.",
        },
        {
          title: "Integrare cu operațiunile",
          description: "Plăți, curieri, facturare, tracking și alte fluxuri importante sunt gândite din start, nu lăsate la final.",
        },
      ],
      proofTitle: "Zone cheie într-un magazin online",
      proofItems: ["catalog și filtre", "pagină de produs", "checkout", "tracking e-commerce"],
      proofLink: serviceLink("/servicii/optimizare-seo", "Vezi și serviciul de SEO"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Ce face diferența între un magazin online publicat și unul pregătit să vândă",
      intro:
        "Performanța în e-commerce vine dintr-o combinație între structură bună, UX clar, integrare corectă și o bază solidă pentru optimizare ulterioară.",
      items: [
        {
          title: "Structură de catalog logică",
          description: "Categorii, subcategorii și filtre organizate astfel încât produsele să fie găsite rapid și să nu creeze confuzie.",
        },
        {
          title: "Pagină de produs mai convingătoare",
          description: "Punem accent pe informații utile, diferențiatori, încredere și CTA clar, nu doar pe listarea tehnică a produsului.",
        },
        {
          title: "Checkout cu fricțiune mai mică",
          description: "Reducem pașii inutili și facem fluxul de comandă mai ușor de parcurs pe mobil și desktop.",
        },
        {
          title: "Bazele SEO și tracking",
          description: "Setăm structura tehnică și măsurarea evenimentelor astfel încât optimizarea ulterioară să poată porni pe date reale.",
        },
        {
          title: "Integrare cu procesele esențiale",
          description: "Conectăm plățile, livrarea și instrumentele operaționale relevante pentru modelul tău de business.",
        },
        {
          title: "Bază bună pentru campanii și creștere",
          description: "Magazinul este gândit astfel încât să poată susține trafic din SEO, Ads, social și campanii de retenție.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens un proiect complet de creare magazin online",
      intro:
        "Serviciul este potrivit pentru branduri care pornesc în e-commerce, pentru magazine care trebuie relansate și pentru proiecte care au nevoie de o structură mai bună înainte de a scala traficul și bugetele de marketing.",
      items: [
        "business-uri care vor primul magazin online și au nevoie de platformă, structură și execuție cap-coadă",
        "magazine existente care au UX slab, structură de catalog confuză sau rată mică de conversie",
        "branduri care au nevoie de integrare cu plăți, curieri, CRM, ERP sau instrumente de marketing",
        "echipe care vor un storefront pregătit pentru SEO și campanii, nu doar o vitrină online",
      ],
      outro:
        "Ținta nu este doar să lansăm un magazin, ci să livrăm o bază comercială și tehnică sănătoasă pentru următoarea etapă de creștere.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte e-commerce pe care le putem livra",
      intro:
        "Putem construi magazine online pentru catalog mic sau mediu, pentru lansări rapide sau pentru structuri comerciale mai ample, cu integrări relevante.",
      featured: [
        {
          title: "Magazin online nou pentru brand lansat recent",
          description: "Potrivit când vrei să intri repede în piață, cu structură clară și o experiență bună pentru primul val de trafic și comenzi.",
        },
        {
          title: "Relansare sau refacere de magazin online",
          description: "Pentru magazine care au probleme de structură, de viteză, de UX sau de integrare și au nevoie de o bază mai bună.",
        },
        {
          title: "Magazin cu nevoi de integrare și operare",
          description: "Pentru business-uri care au nevoie de plăți, livrare, facturare, sincronizare și procese operaționale mai bine legate între ele.",
        },
      ],
      additional: [
        {
          title: "E-commerce cu focus pe mobil",
          description: "Construim fluxuri și pagini esențiale pentru utilizatori care vin preponderent din mobil și campanii.",
        },
        {
          title: "Storefront pregătit pentru SEO și promovare",
          description: "Gândim structura tehnică și comercială astfel încât magazinul să poată susține trafic calificat și optimizare ulterioară.",
        },
      ],
      outro: "Dacă știi deja că Shopify este platforma potrivită, vezi și",
      outroLink: serviceLink("/servicii/creare-magazin-online-shopify", "serviciul dedicat de Shopify"),
    },
    comparison: {
      eyebrow: "Decizie tehnică",
      title: "Cum alegem platforma potrivită pentru magazinul online",
      intro:
        "Platforma bună depinde de catalog, echipă, flexibilitatea necesară și cât de repede vrei să lansezi și să operezi magazinul în condiții bune.",
      items: [
        {
          title: "Shopify pentru lansare rapidă și operare simplă",
          description: "Este o alegere bună când vrei time-to-market mai scurt, ecosistem matur și administrare clară.",
        },
        {
          title: "WooCommerce pentru flexibilitate",
          description: "Poate avea sens când ai nevoie de un ecosistem WordPress sau de un anumit nivel de control în implementare.",
        },
        {
          title: "Custom pentru cerințe mai complexe",
          description: "Pentru proiecte în care regulile comerciale, structura sau integrarea depășesc bine scenariile standard de e-commerce.",
        },
        {
          title: "Decizia se ia după modelul de business",
          description: "Recomandarea noastră pornește de la operațiuni, buget și ritm de creștere, nu de la o preferință rigidă de tehnologie.",
        },
      ],
      outro: "Dacă magazinul trebuie susținut și prin optimizare continuă în Google, poți continua cu",
      outroLink: serviceLink("/servicii/optimizare-seo", "serviciul SEO"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum decurge un proiect de creare magazin online",
      intro:
        "Procesul este etapizat astfel încât să închidem deciziile importante despre platformă, structură și integrare înainte de lansare.",
      steps: [
        {
          id: "discovery-store",
          title: "Analiză și alegerea platformei",
          subtitle: "Stabilim baza tehnică și comercială.",
          description: "Clarificăm catalogul, fluxurile operaționale, integrațiile și platforma potrivită pentru lansare.",
          tags: ["Platformă", "Catalog", "Fluxuri"],
          duration: "Etapa 1",
        },
        {
          id: "structure-store",
          title: "Structură și UX de magazin",
          subtitle: "Organizăm categoriile și paginile importante.",
          description: "Definim navigarea, paginile de produs, filtrarea și traseul până la checkout pentru experiență mai bună de cumpărare.",
          tags: ["UX", "PLP", "PDP"],
          duration: "Etapa 2",
        },
        {
          id: "build-store",
          title: "Implementare și integrare",
          subtitle: "Construim magazinul și conectăm serviciile necesare.",
          description: "Implementăm storefront-ul, configurăm plăți, curieri, tracking și celelalte procese cheie din e-commerce.",
          tags: ["Implementare", "Plăți", "Integrări"],
          duration: "Etapa 3",
        },
        {
          id: "launch-store",
          title: "Testare și lansare",
          subtitle: "Verificăm fluxurile importante înainte de publicare.",
          description: "Testăm comenzile, checkout-ul, zonele comerciale critice și pregătim lansarea tehnică și operațională.",
          tags: ["QA", "Checkout", "Lansare"],
          duration: "Etapa 4",
        },
        {
          id: "growth-store",
          title: "Optimizare după lansare",
          subtitle: "Pregătim magazinul pentru creștere și ajustări ulterioare.",
          description: "După lansare, putem continua cu optimizări pe conversie, structură SEO și îmbunătățiri comerciale pe baza datelor reale.",
          tags: ["Growth", "CRO", "SEO"],
          duration: "Etapa 5",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un proiect complet de creare magazin online",
      intro:
        "În funcție de proiect, livrabilele pot acoperi atât partea comercială și vizuală, cât și infrastructura și integrarea necesare după lansare.",
      groups: [
        {
          title: "Structură și experiență",
          items: ["arhitectură de catalog și navigare", "design pentru pagini cheie", "checkout și flux de comandă optimizate"],
        },
        {
          title: "Implementare și integrare",
          items: ["configurare platformă și storefront", "plăți, livrare și facturare", "tracking și evenimente e-commerce"],
        },
        {
          title: "Lansare și bază SEO",
          items: ["setări tehnice pentru indexare", "meta-uri și structură on-page", "testare și suport pentru lansare"],
        },
      ],
      outro: "Magazinul trebuie să fie pregătit atât pentru lansare, cât și pentru operare și optimizare după primele comenzi.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru creare magazin online?",
      budgetText:
        "Costul depinde de platformă, numărul de produse, nivelul de personalizare, integrații și cât de multă complexitate comercială intră încă din prima etapă.",
      budgetHighlight: "Magazinele online standard bine definite pot porni de la aproximativ 1.200 EUR.",
      budgetFactors: [
        "platforma aleasă și nivelul de personalizare",
        "structura catalogului și numărul de produse",
        "checkout, reguli comerciale și promoții",
        "integrări cu plăți, curieri, facturare, CRM sau ERP",
        "nevoi SEO și suport după lansare",
      ],
      durationTitle: "Cât durează un magazin online bine delimitat?",
      durationText:
        "Pentru multe proiecte standard, intervalul realist este de aproximativ 4-6 săptămâni, incluzând structură, implementare, integrare și verificarea fluxurilor importante.",
      durationHighlight: "4-6 săptămâni pentru multe proiecte e-commerce standard",
      durationNote:
        "Dacă proiectul implică migrare, integrare mai complexă, reguli comerciale avansate sau multă configurare operațională, durata crește. Preferăm planificare realistă, nu promisiuni grăbite.",
      cta: {
        title: "Vrei să vezi ce platformă și ce structură au sens pentru magazinul tău?",
        text: "După o discuție scurtă, îți spunem ce merită lansat întâi, ce poate rămâne pentru o etapă următoare și ce interval de buget este realist.",
        primary: quickEstimateLink("Cere estimare orientativă"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja produse, platformă existentă sau idei de integrare, le putem evalua încă din prima discuție.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg brandurile să lucreze cu noi pentru creare magazin online",
      intro:
        "Diferența nu stă doar în implementare, ci în felul în care structurăm partea comercială, tehnică și operațională a unui proiect e-commerce.",
      items: [
        "Alegem platforma în funcție de modelul de business, nu după trenduri",
        "Gândim experiența de cumpărare și structura de catalog din perspectiva conversiei",
        "Legăm magazinul de plăți, livrare, tracking și fluxurile care contează după lansare",
        "Păstrăm o bază bună pentru SEO, campanii și optimizare ulterioară",
      ],
      outro: "Un magazin online bun trebuie să funcționeze bine pentru client și pentru echipa care îl operează zi de zi.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre creare magazin online",
      intro: "Răspunsuri scurte despre platformă, costuri, integrare și optimizare ulterioară pentru proiectele e-commerce.",
      items: [
        {
          question: "Ce platformă recomandați pentru magazin online?",
          answer: "Recomandarea depinde de catalog, nevoile de operare, buget și ritmul de lansare. În unele cazuri Shopify este mai potrivit, în altele WooCommerce sau o soluție custom.",
        },
        {
          question: "Serviciul include și integrarea cu plăți și curieri?",
          answer: "Da. Putem configura plățile, livrarea și alte integrări esențiale pentru operarea magazinului în funcție de proiect.",
        },
        {
          question: "Puteți ajuta și cu SEO pentru magazinul online?",
          answer: "Da. Punem baza SEO încă din implementare și putem continua ulterior cu servicii dedicate de optimizare SEO pentru creșterea vizibilității organice.",
        },
        {
          question: "Puteți face și migrarea de pe altă platformă?",
          answer: "Da. Dacă proiectul cere migrare, planificăm transferul structurii și al datelor astfel încât să reducem riscurile și blocajele în lansare.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Ce merită să ai în vedere după lansarea magazinului",
      intro: "După build, cele mai utile direcții sunt optimizarea continuă, SEO și promovarea structurată a magazinului.",
      items: [
        {
          title: "Creare magazin online Shopify",
          description: "Dacă știi deja că Shopify este soluția potrivită și vrei o abordare dedicată acestei platforme.",
          href: "/servicii/creare-magazin-online-shopify",
          ctaLabel: "Vezi serviciul Shopify",
        },
        {
          title: "Servicii SEO profesionale",
          description: "Dacă după lansare vrei să crești vizibilitatea organică și să optimizezi structura e-commerce pentru Google.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Formular de contact",
          description: "Dacă ai deja catalogul, integrațiile sau întrebările tehnice și vrei să ne trimiți brief-ul complet.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care susțin creșterea unui magazin online",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de optimizare SEO, branding sau campanii de promovare.",
      items: [
        serviceLink("/servicii/creare-magazin-online-shopify", "Creare magazin online Shopify"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
        serviceLink("/servicii/promovare-site", "Promovare site"),
        serviceLink("/servicii/web-design", "Web design"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce vrei să vinzi și îți propunem structura potrivită pentru magazinul tău online",
      text: "Fie că pornești cu primul magazin, fie că vrei să refaci o implementare existentă, putem transforma proiectul într-o variantă clară și realistă pentru lansare.",
      supporting:
        "Ne poți trimite catalogul, platforma dorită, integrațiile necesare sau doar contextul comercial. Îți răspundem cu o direcție potrivită și un interval orientativ de buget.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "creare-magazin-online-shopify": {
    slug: "creare-magazin-online-shopify",
    title: "Creare magazin online Shopify pentru branduri care vor lansare rapidă și operare clară",
    description: "Serviciu dedicat de creare magazin online Shopify pentru branduri care vor un storefront clar, rapid și ușor de administrat.",
    metaTitle: "Creare magazin online Shopify cu structură clară și conversie bună | Web Dynamicx",
    metaDescription:
      "Creare magazin online Shopify pentru branduri care vor lansare rapidă, UX bun, structură SEO corectă și un storefront ușor de administrat.",
    image: "/images/services/creare-magazin-online.webp",
    ogImage: "/images/services/creare-magazin-online.webp",
    ogAlt: "Servicii de creare magazin online Shopify",
    hero: {
      eyebrow: "Shopify pentru lansare și scalare",
      title: "Creare magazin online Shopify pentru business-uri care vor să intre repede în piață fără haos tehnic",
      subtitle:
        "Construim magazine Shopify pentru branduri care vor un storefront clar, ușor de administrat și pregătit pentru campanii, retenție și creștere comercială.",
      bullets: [
        "Structurăm catalogul și paginile esențiale pentru conversie",
        "Configurăm tema, checkout-ul și aplicațiile relevante",
        "Pregătim magazinul pentru operare, tracking și lansare",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru Shopify"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Dacă ai deja produse, branding și direcție comercială, Shopify poate fi o soluție foarte bună pentru a lansa rapid și a administra mai simplu.",
      trustLine: "Potrivit pentru lansări rapide, migrare în Shopify și storefront-uri pregătite pentru campanii.",
      trustLinkLabel: "Vezi și serviciul e-commerce general",
      trustLinkHref: "/servicii/creare-magazin-online",
      stats: [
        { label: "Platformă", value: "Shopify" },
        { label: "Focus", value: "Lansare rapidă și operare" },
        { label: "Potrivit pentru", value: "Branduri și DTC" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce primești dintr-un proiect dedicat de Shopify",
      intro:
        "Shopify este o alegere bună când ai nevoie de lansare rapidă, administrare simplă și un ecosistem matur pentru plăți, aplicații și growth. Valoarea apare când storefront-ul este structurat corect din prima etapă.",
      cards: [
        {
          title: "Storefront clar și rapid",
          description: "Construim paginile importante astfel încât magazinul să fie ușor de parcurs și pregătit pentru campanii și trafic mobil.",
        },
        {
          title: "Configurare Shopify fără complicații inutile",
          description: "Setăm tema, colecțiile, produsele și aplicațiile relevante într-o structură ușor de administrat după lansare.",
        },
        {
          title: "Bază bună pentru retenție și campanii",
          description: "Pregătim magazinul pentru colectare lead-uri, promoții, tracking și alte fluxuri importante pentru creștere.",
        },
        {
          title: "Administrare mai simplă pentru echipă",
          description: "Procesul este gândit astfel încât operarea zilnică a magazinului să rămână clară și predictibilă după lansare.",
        },
      ],
      proofTitle: "Tipuri de proiecte Shopify",
      proofItems: ["branduri noi", "migrare în Shopify", "relansări de storefront", "campanii DTC"],
      proofLink: portfolioLink("Vezi portofoliul general"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "De ce Shopify are sens pentru multe proiecte e-commerce",
      intro:
        "Shopify devine foarte eficient atunci când lansarea, administrarea și creșterea au nevoie de o platformă clară, stabilă și ușor de lucrat pentru echipa internă.",
      items: [
        {
          title: "Lansare mai rapidă",
          description: "Poți intra în piață mai repede cu un storefront bine structurat și cu procese comerciale configurate corect încă din prima etapă.",
        },
        {
          title: "Administrare simplificată",
          description: "Produse, colecții, promoții și aplicații sunt organizate într-un mod mai ușor de gestionat pentru echipa care operează magazinul.",
        },
        {
          title: "Ecosistem matur de aplicații",
          description: "Shopify oferă o bază bună pentru plăți, retenție, recenzii, email marketing și alte nevoi comerciale frecvente.",
        },
        {
          title: "Bază bună pentru campanii și optimizare",
          description: "Storefront-ul poate fi structurat astfel încât să susțină atât campanii plătite, cât și îmbunătățiri ulterioare pe conversie.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când Shopify este o alegere potrivită pentru magazinul tău",
      intro:
        "Serviciul este potrivit pentru business-uri care vor lansare rapidă, administrare clară și o platformă stabilă pentru rularea activității comerciale și a campaniilor.",
      items: [
        "branduri care lansează primul magazin și vor să intre repede în piață",
        "business-uri care migrează dintr-o soluție mai rigidă sau mai greu de administrat",
        "magazine care au nevoie de storefront mai clar pentru campanii și trafic mobil",
        "echipe care vor un ecosistem e-commerce matur fără proiecte tehnice prea grele pentru operare",
      ],
      outro:
        "Dacă modelul tău de business se potrivește bine cu Shopify, merită să construiești încă de la început un storefront ordonat și ușor de crescut.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte Shopify pe care le putem livra",
      intro:
        "Putem intra atât în lansări noi, cât și în reorganizări de storefront sau migrări din platforme care nu mai susțin bine ritmul de business.",
      featured: [
        {
          title: "Lansare rapidă pentru brand nou",
          description: "Pentru proiecte care au nevoie de time-to-market bun și de o platformă simplă pentru operare și campanii.",
        },
        {
          title: "Migrare către Shopify",
          description: "Pentru magazine care vor să simplifice administrarea sau să intre într-un ecosistem mai potrivit pentru creștere comercială.",
        },
        {
          title: "Relansare de storefront Shopify",
          description: "Pentru magazine deja pe Shopify care au nevoie de structură mai bună, experiență mai clară și pagini comerciale mai convingătoare.",
        },
      ],
      additional: [
        {
          title: "Storefront pregătit pentru campanii",
          description: "Gândim paginile și oferta astfel încât magazinul să poată susține trafic din Meta Ads, Google Ads sau colaborări.",
        },
        {
          title: "Fluxuri simple de retenție",
          description: "Pregătim baza pentru aplicații și mecanisme utile de retenție, recurență și comunicare comercială.",
        },
      ],
      outro: "Dacă încă analizezi platforma și vrei o recomandare mai largă, vezi și",
      outroLink: serviceLink("/servicii/creare-magazin-online", "serviciul general de creare magazin online"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce urmărește un proiect Shopify făcut bine",
      intro:
        "Nu urmărim doar instalarea unei teme. Obiectivul este să ai un magazin clar, ușor de administrat și pregătit pentru vânzări și campanii.",
      items: [
        {
          title: "Theme setup cu logică comercială",
          description: "Configurăm secțiunile și paginile astfel încât storefront-ul să susțină clar oferta, colecțiile și produsele importante.",
        },
        {
          title: "Colecții și produse organizate",
          description: "Punem ordine în structură pentru ca administrarea și navigarea să fie simple atât pentru echipă, cât și pentru clienți.",
        },
        {
          title: "Aplicații relevante, nu exces",
          description: "Alegem doar aplicațiile care aduc valoare reală pentru checkout, retenție, review-uri sau alte nevoi comerciale.",
        },
        {
          title: "Bază bună pentru creștere",
          description: "Magazinul este pregătit pentru tracking, campanii și ajustări ulterioare fără să complice inutil prima versiune.",
        },
      ],
      outro: "Dacă după lansare vrei să crești și partea organică, poți continua cu",
      outroLink: serviceLink("/servicii/optimizare-seo", "serviciul SEO"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum decurge un proiect de creare magazin online Shopify",
      intro:
        "Procesul este structurat ca să închidem repede platforma, storefront-ul și aplicațiile importante fără să lăsăm decizii grele pentru ultimul moment.",
      steps: [
        {
          id: "discovery-shopify",
          title: "Analiză și structură comercială",
          subtitle: "Clarificăm catalogul și nevoile de lansare.",
          description: "Stabilim colecțiile, produsele, aplicațiile esențiale și scopul primei versiuni Shopify.",
          tags: ["Catalog", "Colecții", "Setup"],
          duration: "Etapa 1",
        },
        {
          id: "ui-shopify",
          title: "Storefront și pagini cheie",
          subtitle: "Construim experiența principală de cumpărare.",
          description: "Configurăm homepage-ul, colecțiile, paginile de produs și zonele de ofertă astfel încât magazinul să fie clar și convingător.",
          tags: ["Storefront", "UX", "PDP"],
          duration: "Etapa 2",
        },
        {
          id: "apps-shopify",
          title: "Configurații și aplicații",
          subtitle: "Legăm Shopify de procesele importante.",
          description: "Setăm plăți, livrare, aplicații utile, tracking și alte elemente esențiale pentru funcționarea magazinului.",
          tags: ["Plăți", "Apps", "Tracking"],
          duration: "Etapa 3",
        },
        {
          id: "qa-shopify",
          title: "Testare și lansare",
          subtitle: "Verificăm fluxurile critice înainte de publicare.",
          description: "Testăm experiența de comandă, paginile cheie și pregătim magazinul pentru lansare fără surprize operaționale.",
          tags: ["QA", "Checkout", "Launch"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un proiect Shopify",
      intro:
        "Livrabilele se stabilesc în funcție de proiect, însă un storefront Shopify bun acoperă atât partea vizuală, cât și setup-ul operațional de bază.",
      groups: [
        {
          title: "Storefront",
          items: ["homepage și colecții", "pagini de produs clare", "zone de ofertă și conținut comercial"],
        },
        {
          title: "Configurare Shopify",
          items: ["produse, colecții și navigare", "plăți și livrare", "aplicații relevante și setup tehnic"],
        },
        {
          title: "Lansare",
          items: ["tracking de bază", "testare fluxuri critice", "suport pentru publicare și verificare finală"],
        },
      ],
      outro: "Rezultatul trebuie să fie un magazin Shopify ușor de administrat și suficient de bun pentru a susține lansarea și primele etape de creștere.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru un proiect Shopify?",
      budgetText:
        "Bugetul depinde de cât de personalizat trebuie să fie storefront-ul, câte produse sau colecții sunt implicate și ce aplicații sau integrări trebuie configurate.",
      budgetHighlight: "Magazinele Shopify bine definite pot porni de la aproximativ 900 EUR.",
      budgetFactors: [
        "nivelul de personalizare al storefront-ului",
        "numărul de produse și organizarea colecțiilor",
        "checkout, promoții și aplicații comerciale necesare",
        "tracking, retenție și alte fluxuri de marketing",
      ],
      durationTitle: "Cât durează lansarea unui magazin Shopify?",
      durationText:
        "Pentru multe proiecte bine delimitate, un interval realist este de 3-5 săptămâni, incluzând structură, configurare, pagini cheie și testare înainte de lansare.",
      durationHighlight: "3-5 săptămâni pentru multe proiecte Shopify bine delimitate",
      durationNote:
        "Dacă proiectul implică migrare de date, catalog amplu sau multe aplicații și reguli comerciale, durata crește. Preferăm să dimensionăm proiectul corect încă de la început.",
      cta: {
        title: "Vrei să vezi dacă Shopify este alegerea potrivită pentru proiectul tău?",
        text: "Îți spunem rapid dacă Shopify are sens pentru modelul tău comercial și cum ar trebui structurat storefront-ul pentru prima lansare.",
        primary: quickEstimateLink("Cere estimare Shopify"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja un magazin sau o platformă în lucru, putem evalua și scenariul de migrare sau relansare.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg brandurile să lucreze cu noi pentru Shopify",
      intro:
        "Nu tratăm Shopify ca pe un simplu setup tehnic. Îl abordăm ca pe o platformă comercială care trebuie să funcționeze bine și pentru client, și pentru operare.",
      items: [
        "Structurăm storefront-ul cu focus pe claritate și conversie",
        "Configurăm Shopify pentru administrare mai simplă după lansare",
        "Alegem aplicațiile și setup-ul în funcție de nevoi reale, nu prin încărcare inutilă",
        "Lăsăm o bază bună pentru campanii, retenție și optimizare ulterioară",
      ],
      outro: "Un magazin Shopify reușit este ușor de operat, ușor de vândut și suficient de clar încât să poată fi optimizat după date reale.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre creare magazin online Shopify",
      intro: "Răspunsuri rapide despre lansare, configurare și scenariile în care Shopify are sens pentru proiectul tău.",
      items: [
        {
          question: "Shopify este potrivit și pentru business-uri la început?",
          answer: "Da. În multe cazuri este chiar o alegere bună pentru lansare rapidă și administrare simplificată, dacă modelul comercial se potrivește ecosistemului Shopify.",
        },
        {
          question: "Puteți configura și aplicațiile importante pentru Shopify?",
          answer: "Da. Putem selecta și configura aplicațiile necesare pentru plăți, review-uri, retenție, tracking sau alte nevoi comerciale relevante.",
        },
        {
          question: "Puteți migra un magazin existent în Shopify?",
          answer: "Da. Dacă proiectul cere migrare, planificăm transferul și reorganizarea structurii astfel încât noul storefront să pornească mai bine.",
        },
        {
          question: "Puteți continua și cu SEO sau promovarea magazinului după lansare?",
          answer: "Da. Putem continua cu servicii SEO sau cu promovare, în funcție de etapa în care vrei să duci magazinul după lansare.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Ce direcții merită după lansarea unui magazin Shopify",
      intro: "După build, următorii pași naturali sunt creșterea traficului, optimizarea organica și consolidarea experienței comerciale.",
      items: [
        {
          title: "Creare magazin online",
          description: "Dacă încă evaluezi platforma și vrei context mai larg între Shopify, WooCommerce și alte opțiuni.",
          href: "/servicii/creare-magazin-online",
          ctaLabel: "Vezi serviciul general",
        },
        {
          title: "Servicii SEO profesionale",
          description: "Dacă vrei să lucrezi și la partea organică după ce magazinul Shopify este lansat.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți catalogul, exemplele de referință sau contextul complet al proiectului.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care completează un proiect Shopify",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de trafic organic, promovare sau structură comercială mai amplă.",
      items: [
        serviceLink("/servicii/creare-magazin-online", "Creare magazin online"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
        serviceLink("/servicii/promovare-site", "Promovare site"),
        serviceLink("/servicii/web-design", "Web design"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce vrei să lansezi în Shopify și îți propunem cea mai bună variantă pentru prima etapă",
      text: "Fie că vrei magazin nou, migrare sau relansare de storefront, putem transforma proiectul într-un plan clar și ușor de executat.",
      supporting:
        "Ne poți trimite produsele, platforma actuală sau obiectivele comerciale. Îți răspundem cu o recomandare realistă pentru lansare, structură și buget.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "optimizare-seo": {
    slug: "optimizare-seo",
    title: "Servicii SEO profesionale pentru site-uri care vor trafic calificat și creștere reală",
    description: "Servicii SEO profesionale cu audit tehnic, optimizare on-page, conținut și structură de interlinking.",
    metaTitle: "Servicii SEO profesionale pentru trafic calificat și creștere organică | Web Dynamicx",
    metaDescription:
      "Servicii SEO profesionale cu audit tehnic, optimizare on-page, strategie de conținut, interlinking și raportare orientată pe rezultate.",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    ogAlt: "Servicii SEO profesionale pentru creștere organică",
    hero: {
      eyebrow: "SEO orientat pe structură și rezultate",
      title: "Servicii SEO profesionale pentru business-uri care vor mai mult trafic util, nu doar impresii",
      subtitle:
        "Optimizăm partea tehnică, structura paginilor și conținutul astfel încât site-ul să răspundă mai bine intenției de căutare și să transforme traficul organic în lead-uri sau vânzări.",
      bullets: [
        "Începem cu auditul și prioritățile tehnice care au impact real",
        "Punem ordine în pagini, interlinking și topic-uri importante",
        "Măsurăm rezultatele și iterăm pe baza datelor, nu a presupunerilor",
      ],
      ctaPrimary: quickEstimateLink("Cere un audit SEO inițial"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Putem intra atât pe site-uri care au deja trafic și trebuie optimizate mai bine, cât și pe proiecte care au nevoie de fundație SEO încă din faza de build.",
      trustLine: "Potrivit pentru site-uri de servicii, magazine online și proiecte care vor structură mai bună în Google.",
      trustLinkLabel: "Vezi și serviciul de creare site web",
      trustLinkHref: "/servicii/creare-site-web",
      stats: [
        { label: "Acoperire", value: "Tehnic, on-page, conținut" },
        { label: "Focus", value: "Trafic calificat și conversii" },
        { label: "Potrivit pentru", value: "B2B, servicii, e-commerce" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce rezolvă un proiect SEO bine construit",
      intro:
        "SEO bun nu înseamnă doar meta-uri. Înseamnă structură tehnică sănătoasă, pagini aliniate cu intenția de căutare, interlinking coerent și un plan de creștere măsurabil în timp.",
      cards: [
        {
          title: "Audit tehnic și claritate",
          description: "Identificăm blocajele care afectează indexarea, performanța și organizarea actuală a site-ului.",
        },
        {
          title: "Mapare pe intenții de căutare",
          description: "Aliniem paginile și topic-urile importante cu căutările relevante pentru serviciile sau produsele tale.",
        },
        {
          title: "Interlinking și topic clusters",
          description: "Conectăm paginile importante între ele pentru relevanță semantică și trasee mai clare de explorare.",
        },
        {
          title: "Raportare și optimizare continuă",
          description: "Măsurăm ce se schimbă și folosim datele pentru a prioritiza următoarele intervenții cu impact.",
        },
      ],
      proofTitle: "Zone SEO frecvent optimizate",
      proofItems: ["audit tehnic", "pagini de servicii", "conținut și clusterizare", "CTR și indexare"],
      proofLink: serviceLink("/servicii/promovare-site", "Vezi și serviciul de promovare"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Cum arată SEO făcut într-un mod util pentru business",
      intro:
        "Câștigul real vine atunci când SEO este conectat cu structura site-ului, cu mesajul comercial și cu măsurarea conversiilor, nu tratat izolat.",
      items: [
        {
          title: "Prioritizare tehnică bună",
          description: "Începem cu zonele care pot debloca indexare, performanță sau structură, fără să risipim timp pe lucruri cu impact mic.",
        },
        {
          title: "Pagini mai bine aliniate cu intenția de căutare",
          description: "Rescriem sau restructurăm paginile care trebuie să răspundă mai bine la ce caută efectiv utilizatorii.",
        },
        {
          title: "Conținut și topic-uri mai bine organizate",
          description: "Evităm haosul de subiecte și construim o relație clară între paginile pilon și resursele suport.",
        },
        {
          title: "Interlinking care susține relevanța",
          description: "Legăm paginile între ele cu sens comercial și semantic, nu cu linkuri puse la întâmplare.",
        },
        {
          title: "Măsurare orientată pe rezultate",
          description: "Urmărim nu doar impresiile și pozițiile, ci și traficul calificat, lead-urile sau semnalele comerciale relevante.",
        },
        {
          title: "Bază bună pentru optimizare ulterioară",
          description: "După fundația inițială, site-ul poate evolua mai coerent pe conținut, structură și pagini noi.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens să lucrezi cu o agenție pe optimizare SEO",
      intro:
        "Serviciul este potrivit pentru business-uri care au deja site și vor mai multă claritate, vizibilitate și relevanță în Google, dar și pentru proiecte noi care vor să pornească mai sănătos din punct de vedere tehnic și semantic.",
      items: [
        "site-uri care au trafic slab sau pagini care nu performează pe căutările importante",
        "business-uri care vor să curețe structura tehnică și semantică înainte de a scala conținutul",
        "magazine online care au nevoie de bază SEO mai bună pentru categorii și produse",
        "companii care vor un plan SEO continuu, nu doar o listă generică de recomandări",
      ],
      outro:
        "Dacă site-ul trebuie să producă lead-uri sau vânzări din Google, SEO trebuie tratat ca infrastructură de creștere, nu ca o bifă tehnică de final.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte SEO pe care le putem aborda",
      intro:
        "Putem intra atât în audit și remediere tehnică, cât și în proiecte continue de creștere prin conținut, interlinking și optimizare de pagini cheie.",
      featured: [
        {
          title: "SEO pentru site-uri de servicii",
          description: "Pentru companii care au nevoie de pagini de servicii mai clare, mai bine grupate și mai relevante în căutări cu intenție comercială.",
        },
        {
          title: "SEO pentru magazine online",
          description: "Pentru e-commerce care are nevoie de structură sănătoasă pe categorii, produse și interlinking intern.",
        },
        {
          title: "SEO pentru proiecte noi sau relansate",
          description: "Pentru build-uri noi care vor să evite problemele tehnice și de structură încă din faza de lansare.",
        },
      ],
      additional: [
        {
          title: "Curățare de topic-uri și canibalizare",
          description: "Organizăm mai bine paginile și articolele care se suprapun sau concurează inutil între ele.",
        },
        {
          title: "Optimizare pentru CTR și snippet",
          description: "Lucrăm la titles, descriptions și structură on-page acolo unde Google afișează, dar utilizatorii nu aleg suficient pagina.",
        },
      ],
      outro: "Dacă SEO trebuie completat și cu promovare plătită sau mix de canale, vezi și",
      outroLink: serviceLink("/servicii/promovare-site", "serviciul de promovare site"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce include un serviciu SEO profesionist, dincolo de recomandări generale",
      intro:
        "SEO util pentru business combină partea tehnică, structura paginilor și planul de conținut într-o ordine clară și măsurabilă.",
      items: [
        {
          title: "Audit tehnic cu priorități reale",
          description: "Separăm problemele critice de lucrurile secundare și închidem mai întâi ce blochează sau limitează performanța site-ului.",
        },
        {
          title: "On-page legat de intenția de căutare",
          description: "Optimizăm titluri, structură, headings și mesajele paginilor în funcție de căutările care merită urmărite.",
        },
        {
          title: "Conținut și clusterizare",
          description: "Construim sau reorganizăm pagini pilon și resurse suport astfel încât site-ul să acopere logic subiectele relevante.",
        },
        {
          title: "Măsurare și iterare",
          description: "SEO bun înseamnă să măsori, să înveți și să ajustezi. De aceea tratăm optimizarea ca proces, nu ca task singular.",
        },
      ],
      outro: "Dacă site-ul trebuie mai întâi construit sau refăcut tehnic, poți continua cu",
      outroLink: serviceLink("/servicii/creare-site-web", "serviciul de creare site web"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum lucrăm într-un proiect de optimizare SEO",
      intro:
        "Începem cu ce trebuie clarificat și reparat, apoi trecem la structură, conținut și îmbunătățire continuă pe baza semnalelor reale din piață și din site.",
      steps: [
        {
          id: "audit-seo",
          title: "Audit și prioritizare",
          subtitle: "Vedem ce ține site-ul pe loc și unde merită intervenit întâi.",
          description: "Analizăm indexarea, structura tehnică, on-page-ul și raportăm problemele în ordinea impactului real.",
          tags: ["Audit", "Indexare", "Prioritizare"],
          duration: "Etapa 1",
        },
        {
          id: "technical-seo",
          title: "Remediere tehnică și structură",
          subtitle: "Punem ordine în baza site-ului.",
          description: "Corectăm problemele importante, clarificăm structura paginilor și pregătim baza pentru relevanță mai bună în căutare.",
          tags: ["Tehnic", "Structură", "CWV"],
          duration: "Etapa 2",
        },
        {
          id: "content-seo",
          title: "Optimizare on-page și conținut",
          subtitle: "Aliniem paginile cu intenția și cu mesajul comercial.",
          description: "Lucrăm pe paginile de servicii, categorii sau topic-uri relevante și construim sau reorganizăm resursele suport necesare.",
          tags: ["On-page", "Conținut", "Interlinking"],
          duration: "Etapa 3",
        },
        {
          id: "iteration-seo",
          title: "Raportare și iterație",
          subtitle: "Măsurăm și optimizăm continuu.",
          description: "Urmărim evoluția principalilor indicatori și ajustăm direcția în funcție de poziționare, trafic și conversii.",
          tags: ["Raportare", "CTR", "Iterații"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un proiect SEO profesionist",
      intro:
        "Livrabilele se stabilesc în funcție de tipul proiectului și de nivelul de maturitate al site-ului, dar un serviciu bun acoperă atât claritatea, cât și execuția priorităților.",
      groups: [
        {
          title: "Audit și structură",
          items: ["audit tehnic și de indexare", "listă de priorități", "observații despre arhitectura paginilor"],
        },
        {
          title: "Optimizare și conținut",
          items: ["revizuire on-page pentru pagini cheie", "recomandări sau briefuri de conținut", "interlinking și clusterizare"],
        },
        {
          title: "Măsurare",
          items: ["monitorizare pentru căutări relevante", "raportare pe evoluție", "direcții clare pentru etapa următoare"],
        },
      ],
      outro: "Scopul nu este doar să identificăm probleme, ci să lăsăm un plan clar și o fundație mai sănătoasă pentru creștere organică.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Cum estimăm costul unui serviciu SEO profesionist?",
      budgetText:
        "Costul depinde de starea actuală a site-ului, nivelul de competiție, numărul de pagini importante și dacă intervenția este punctuală sau continuă.",
      budgetHighlight: "Proiectele SEO pot începe de la audit și setup inițial, apoi continua lunar în funcție de obiective.",
      budgetFactors: [
        "dimensiunea și complexitatea site-ului",
        "starea actuală a părții tehnice și a structurii on-page",
        "numărul de pagini și topic-uri prioritare",
        "nevoia de conținut nou, interlinking și iterație lunară",
      ],
      durationTitle: "Când apar primele semnale într-un proiect SEO?",
      durationText:
        "Primele schimbări pot apărea în câteva săptămâni la nivel de indexare, CTR și structură, dar rezultatele mai consistente se construiesc în timp, mai ales în nișe competitive.",
      durationHighlight: "Primele semnale pot apărea în 6-8 săptămâni, iar creșterea solidă se construiește pe termen mai lung",
      durationNote:
        "Preferăm să setăm așteptări realiste. SEO este un canal de acumulare și optimizare continuă, nu un rezultat instant.",
      cta: {
        title: "Vrei să vezi unde se află site-ul tău acum și ce merită făcut întâi?",
        text: "Putem porni cu un audit inițial și îți spunem clar ce blocaje există, ce merită prioritizat și ce tip de intervenție are sens pentru etapa ta.",
        primary: quickEstimateLink("Cere auditul inițial"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă proiectul este nou sau relansat, îți putem spune și ce ar trebui construit corect încă din faza de implementare.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce lucrează companiile cu noi pe optimizare SEO",
      intro:
        "Abordăm SEO ca sistem: tehnic, semantic, comercial și măsurabil. Asta ajută mai mult decât o listă generică de recomandări fără priorități.",
      items: [
        "Începem cu problemele care au impact real, nu cu task-uri cosmetice",
        "Legăm structura SEO de paginile și ofertele importante ale business-ului",
        "Construim topic-uri și interlinking care susțin relevanța pe termen lung",
        "Măsurăm evoluția și ajustăm direcția în funcție de date reale",
      ],
      outro: "SEO bun înseamnă claritate, structură și răbdarea de a construi ceva sustenabil, nu doar salturi ocazionale în trafic.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre serviciile SEO profesionale",
      intro: "Răspunsuri rapide despre audit, timp de rezultat, structură și modul în care abordăm optimizarea SEO.",
      items: [
        {
          question: "Serviciul începe întotdeauna cu audit?",
          answer: "În cele mai multe cazuri, da. Auditul inițial ne ajută să stabilim clar prioritățile și să evităm intervențiile făcute la întâmplare.",
        },
        {
          question: "SEO înseamnă doar conținut și articole?",
          answer: "Nu. SEO include și partea tehnică, structura paginilor, interlinking, indexare și relevanță semantică, nu doar conținut nou.",
        },
        {
          question: "Puteți lucra și pe site-uri existente, nu doar pe proiecte noi?",
          answer: "Da. O mare parte din proiectele SEO sunt tocmai pe site-uri existente care au nevoie de ordine tehnică și semantică mai bună.",
        },
        {
          question: "Puteți continua și cu partea de build sau redesign dacă site-ul are probleme mai profunde?",
          answer: "Da. Dacă auditul arată că problema este structurală sau tehnică la nivel de website, putem continua și cu servicii de creare site web sau redesign.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Direcții care completează un proiect SEO",
      intro: "În multe cazuri, SEO performează mai bine când este susținut și de un site bine construit sau de o strategie mai largă de promovare.",
      items: [
        {
          title: "Creare site web",
          description: "Dacă site-ul are nevoie de reconstrucție sau de o structură tehnică mai sănătoasă pentru a susține SEO-ul corect.",
          href: "/servicii/creare-site-web",
          ctaLabel: "Vezi serviciul de creare site",
        },
        {
          title: "Promovare site",
          description: "Dacă vrei să combini partea organică și cu alte canale de creștere și generare de trafic.",
          href: "/servicii/promovare-site",
          ctaLabel: "Vezi serviciul de promovare",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți domeniul, contextul actual și obiectivele comerciale pe care le urmărești prin SEO.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care susțin rezultatele unui proiect SEO",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de build nou, promovare sau structură e-commerce mai bună.",
      items: [
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/creare-magazin-online", "Creare magazin online"),
        serviceLink("/servicii/promovare-site", "Promovare site"),
        serviceLink("/servicii/web-design", "Web design"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce vrei să crească în Google și îți propunem o direcție SEO realistă",
      text: "Fie că vrei audit, optimizare on-page sau structură mai bună pentru creștere organică, putem transforma site-ul într-o bază mai sănătoasă pentru trafic și conversii.",
      supporting:
        "Ne poți trimite domeniul, paginile importante și obiectivele comerciale. Îți răspundem cu priorități clare și o propunere potrivită pentru etapa actuală.",
      primary: contactLink("Trimite brief-ul și cere auditul"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "creare-site-prezentare": {
    slug: "creare-site-prezentare",
    title: "Creare site de prezentare pentru business-uri care vor un website clar și credibil",
    description: "Servicii de creare site de prezentare cu structură bună, mesaj clar, bază SEO și design orientat pe conversie.",
    metaTitle: "Creare site de prezentare profesional, clar și optimizat SEO | Web Dynamicx",
    metaDescription:
      "Servicii de creare site de prezentare cu design modern, structură clară, optimizare SEO și setup tehnic pregătit pentru lead-uri și încredere.",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    ogAlt: "Creare site de prezentare pentru companii și servicii",
    hero: {
      eyebrow: "Site de prezentare clar și orientat pe lead-uri",
      title: "Creare site de prezentare pentru firme care vor să arate profesionist și să explice rapid ce oferă",
      subtitle:
        "Construim website-uri de prezentare pentru companii care au nevoie de pagini clare, mesaje bine ordonate, încredere vizuală și bază tehnică bună pentru SEO și contacte.",
      bullets: [
        "Clarificăm structura paginilor și mesajul ofertei",
        "Construim un site de prezentare curat, rapid și ușor de administrat",
        "Pregătim website-ul pentru contacte, SEO și extinderi ulterioare",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru site-ul tău"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Serviciul este potrivit pentru business-uri locale, firme de servicii, branduri mici și companii care vor o prezență online profesionistă fără complexitatea unui build foarte mare.",
      trustLine: "Potrivit pentru site-uri de prezentare, servicii locale, branduri mici și afaceri care au nevoie de credibilitate online.",
      trustLinkLabel: "Vezi și serviciul de branding",
      trustLinkHref: "/servicii/creare-logo-branding",
      stats: [
        { label: "Focus", value: "Claritate și credibilitate" },
        { label: "Livrare", value: "Pagină de prezentare completă" },
        { label: "Potrivit pentru", value: "Firme și servicii locale" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce trebuie să facă bine un site de prezentare",
      intro:
        "Un site de prezentare bun trebuie să explice rapid ce oferi, de ce merită să lucreze cineva cu tine și cum poate lua legătura, fără pagini inutile sau structură confuză.",
      cards: [
        {
          title: "Mesaj clar încă din primele secțiuni",
          description: "Punem în ordine promisiunea, serviciile și motivele de încredere astfel încât oferta să fie înțeleasă rapid.",
        },
        {
          title: "Pagină bună pentru contact și lead-uri",
          description: "Structurăm CTA-urile și formularele astfel încât website-ul să ajute concret procesul de ofertare.",
        },
        {
          title: "Bază SEO și performanță",
          description: "Website-ul este gândit să pornească bine din punct de vedere tehnic și semantic, nu doar vizual.",
        },
        {
          title: "Ușor de extins ulterior",
          description: "Site-ul de prezentare poate deveni mai târziu bază pentru pagini noi, servicii noi sau optimizare SEO continuă.",
        },
      ],
      proofTitle: "Zone esențiale într-un site de prezentare",
      proofItems: ["homepage", "servicii", "despre", "contact"],
      proofLink: serviceLink("/servicii/creare-site-web", "Vezi și varianta de site web custom"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Ce câștigi dintr-un site de prezentare construit corect de la început",
      intro:
        "Un website de prezentare bun este o combinație între claritate, încredere, viteză și structură, astfel încât vizitatorul să înțeleagă rapid oferta și să aibă un pas următor clar.",
      items: [
        {
          title: "Prezență profesională online",
          description: "Website-ul transmite ordine, claritate și încredere, ceea ce influențează direct percepția asupra business-ului.",
        },
        {
          title: "Ofertă mai ușor de înțeles",
          description: "Organizăm serviciile și avantajele astfel încât vizitatorul să parcurgă natural informația importantă.",
        },
        {
          title: "Setup bun pentru SEO de bază",
          description: "Punem fundația tehnică și semantică necesară pentru ca site-ul să poată crește și organic după lansare.",
        },
        {
          title: "Mai multe șanse la contacte",
          description: "CTA-urile, structura paginii și secțiunile de încredere sunt gândite pentru a susține cererile de ofertă și apelurile.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens un site de prezentare bine structurat",
      intro:
        "Serviciul este potrivit pentru business-uri care au nevoie de o prezență online profesionistă și clară, fără cerințe foarte complexe de platformă sau fluxuri avansate de produs.",
      items: [
        "firme de servicii care vor să explice mai clar ce oferă și cui se adresează",
        "business-uri locale care au nevoie de credibilitate online și contact mai ușor",
        "branduri mici sau business-uri la început care vor să pornească bine în online",
        "companii care vor să înlocuiască un site vechi și neclar cu o variantă modernă și mai convingătoare",
      ],
      outro:
        "Ținta este să ai un website suficient de bun pentru încredere, claritate și lead-uri, fără să transformi proiectul într-un build mai mare decât are sens pentru etapa actuală.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de site-uri de prezentare pe care le putem livra",
      intro:
        "Putem construi site-uri de prezentare pentru servicii, companii locale, branduri la început de drum sau proiecte care au nevoie de o prezență online mai credibilă.",
      featured: [
        {
          title: "Site de prezentare pentru firmă de servicii",
          description: "Pentru companii care trebuie să explice clar oferta și să susțină mai bine procesul de cerere de ofertă.",
        },
        {
          title: "Website pentru business local",
          description: "Pentru afaceri care au nevoie de încredere, contact ușor și informații clare despre servicii și locație.",
        },
        {
          title: "Site nou pentru brand la început",
          description: "Pentru proiecte aflate în lansare care au nevoie de fundație bună pentru imagine, SEO și campanii ulterioare.",
        },
      ],
      additional: [
        {
          title: "Refacere de site de prezentare vechi",
          description: "Înlocuim structurile depășite și paginile greu de parcurs cu o variantă clară și actuală.",
        },
        {
          title: "Website de bază pentru validare de ofertă",
          description: "Construim varianta necesară pentru a ieși rapid și credibil în piață, fără complexitate inutilă.",
        },
      ],
      outro: "Dacă proiectul cere și identitate vizuală înainte de website, vezi și",
      outroLink: serviceLink("/servicii/creare-logo-branding", "serviciul de branding"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Diferența dintre un site de prezentare bun și unul doar publicat",
      intro:
        "Un site de prezentare util nu se rezumă la câteva secțiuni. El trebuie să aibă claritate, ritm bun de lectură și un pas următor evident pentru utilizator.",
      items: [
        {
          title: "Mesaj și structură înainte de design",
          description: "Ne uităm întâi la ierarhia informației și la felul în care oferta trebuie înțeleasă, apoi la execuția vizuală.",
        },
        {
          title: "Pagini esențiale bine gândite",
          description: "Homepage-ul, serviciile, despre și contactul sunt tratate ca pagini cu rol clar, nu doar ca secțiuni obligatorii.",
        },
        {
          title: "Bază bună pentru SEO și lead-uri",
          description: "Setăm structura tehnică și on-page astfel încât site-ul să poată susține atât Google, cât și cererile de ofertă.",
        },
        {
          title: "Website ușor de extins",
          description: "Dacă apar servicii sau pagini noi, site-ul poate crește fără să fie reconstruit complet.",
        },
      ],
      outro: "Dacă proiectul tău depășește nivelul unui site de prezentare și cere o arhitectură mai amplă, vezi și",
      outroLink: serviceLink("/servicii/creare-site-web", "serviciul de creare site web"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum decurge un proiect de creare site de prezentare",
      intro:
        "Procesul este gândit pentru claritate și viteză: definim paginile importante, structurăm mesajul și livrăm un website care poate ieși bine în piață încă din prima versiune.",
      steps: [
        {
          id: "discovery-presentation",
          title: "Analiză și structură",
          subtitle: "Clarificăm obiectivul și paginile necesare.",
          description: "Stabilim ce pagini trebuie să existe, ce mesaje contează și cum trebuie să arate traseul către contact.",
          tags: ["Structură", "Mesaj", "CTA"],
          duration: "Etapa 1",
        },
        {
          id: "design-presentation",
          title: "Design și layout",
          subtitle: "Construim interfața și direcția vizuală.",
          description: "Aplicăm structura într-un design clar, modern și ușor de parcurs pe desktop și mobil.",
          tags: ["UI", "Responsive", "Claritate"],
          duration: "Etapa 2",
        },
        {
          id: "build-presentation",
          title: "Implementare și setup",
          subtitle: "Transformăm designul în website funcțional.",
          description: "Construim paginile, formularele și baza tehnică necesară pentru o lansare curată și rapidă.",
          tags: ["Implementare", "Formulare", "Performanță"],
          duration: "Etapa 3",
        },
        {
          id: "launch-presentation",
          title: "Testare și lansare",
          subtitle: "Verificăm experiența și publicăm site-ul.",
          description: "Testăm zonele importante, verificăm datele și pregătim lansarea website-ului într-o formă stabilă și credibilă.",
          tags: ["QA", "Lansare", "SEO de bază"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce include, de regulă, un proiect de creare site de prezentare",
      intro:
        "Pachetul poate varia în funcție de proiect, dar un site de prezentare bun acoperă atât paginația și mesajul, cât și setup-ul tehnic de bază.",
      groups: [
        {
          title: "Structură și conținut",
          items: ["paginile esențiale definite clar", "ierarhie bună de conținut", "CTA-uri și formulare bine poziționate"],
        },
        {
          title: "Design și implementare",
          items: ["layout modern și responsive", "implementare curată și rapidă", "optimizări de bază pentru performanță"],
        },
        {
          title: "Lansare",
          items: ["setup tehnic pentru indexare", "verificare finală a fluxurilor importante", "predare și suport pentru administrare"],
        },
      ],
      outro: "Rezultatul trebuie să fie un website clar, profesionist și suficient de bine construit încât să poată susține creșterea business-ului în online.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru un site de prezentare?",
      budgetText:
        "Bugetul depinde de numărul de pagini, nivelul de design, dacă există deja branding și cât de multă clarificare intră în partea de structură și conținut.",
      budgetHighlight: "Site-urile de prezentare bine delimitate pot porni de la aproximativ 800 EUR.",
      budgetFactors: [
        "numărul de pagini și complexitatea conținutului",
        "dacă există deja branding și materiale",
        "nivelul de personalizare vizuală și de structură",
        "dacă proiectul cere și optimizare SEO suplimentară după lansare",
      ],
      durationTitle: "Cât durează, realist, un site de prezentare?",
      durationText:
        "Pentru multe proiecte bine delimitate, intervalul realist este de 2-4 săptămâni, incluzând structură, design, implementare și verificare înainte de lansare.",
      durationHighlight: "2-4 săptămâni pentru multe proiecte de site de prezentare",
      durationNote:
        "Dacă proiectul cere conținut extins, clarificare mai amplă de ofertă sau servicii conexe precum branding, durata crește. Preferăm să estimăm corect încă de la început.",
      cta: {
        title: "Vrei să vezi ce structură și ce nivel de build au sens pentru site-ul tău de prezentare?",
        text: "Putem evalua rapid proiectul și îți spunem ce pagini trebuie să existe, ce nivel de design are sens și cum ar trebui construit website-ul pentru etapa actuală.",
        primary: quickEstimateLink("Cere estimare orientativă"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja idei, texte sau exemple de referință, le putem integra în discuția inițială pentru a stabili direcția corectă.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg companiile să lucreze cu noi pentru creare site de prezentare",
      intro:
        "Construim site-uri de prezentare cu accent pe claritate, încredere și o bază tehnică sănătoasă, nu doar pe un layout care arată bine într-un screenshot.",
      items: [
        "Punem în ordine mesajul și traseul către contact",
        "Construim pagini clare, moderne și ușor de parcurs pe mobil",
        "Pregătim website-ul pentru SEO de bază și lead-uri",
        "Lăsăm o fundație bună pentru extinderi și optimizare ulterioară",
      ],
      outro: "Un site de prezentare bun te ajută să arăți profesionist, să explici mai clar ce oferi și să fii mai ușor de contactat.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre creare site de prezentare",
      intro: "Răspunsuri rapide despre cost, durată și felul în care structurăm website-urile de prezentare pentru firme și servicii.",
      items: [
        {
          question: "Site-ul de prezentare include și pagini de servicii?",
          answer: "Da. În funcție de proiect, putem include paginile importante de servicii încă din prima etapă, astfel încât oferta să fie mai bine înțeleasă și mai ușor de promovat.",
        },
        {
          question: "Puteți continua și cu SEO după lansare?",
          answer: "Da. Website-ul este construit cu bază SEO bună și putem continua ulterior și cu servicii dedicate de optimizare SEO sau promovare.",
        },
        {
          question: "Serviciul include și formular de contact sau metode de lead?",
          answer: "Da. Formularele și CTA-urile sunt parte din arhitectura proiectului, tocmai pentru ca site-ul să poată genera contacte, nu doar vizite.",
        },
        {
          question: "Pot porni cu un site de prezentare și extinde ulterior proiectul?",
          answer: "Da. Site-ul este gândit astfel încât să poată fi extins cu pagini noi, servicii noi sau optimizări fără să fie reconstruit complet.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Ce servicii completează un site de prezentare",
      intro: "După lansarea site-ului, următoarele etape utile sunt brandingul, SEO-ul și extinderea către un build mai amplu dacă business-ul crește.",
      items: [
        {
          title: "Branding",
          description: "Dacă website-ul are nevoie și de clarificare vizuală sau de o identitate mai coerentă.",
          href: "/servicii/creare-logo-branding",
          ctaLabel: "Vezi serviciul de branding",
        },
        {
          title: "Servicii SEO profesionale",
          description: "Dacă după lansare vrei să lucrezi și la partea organică și la vizibilitatea în Google.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți brief-ul sau să clarifici ce variantă de website are sens pentru proiectul tău.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care completează un site de prezentare",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de branding, SEO sau implementare web mai amplă.",
      items: [
        serviceLink("/servicii/creare-logo-branding", "Creare logo & branding"),
        serviceLink("/servicii/web-design", "Web design"),
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne cum ar trebui să arate prezența ta online și îți propunem structura potrivită",
      text: "Fie că vrei un site nou, o relansare sau claritate mai bună în ofertă, putem transforma proiectul într-un website de prezentare bine calibrat pentru etapa ta.",
      supporting:
        "Ne poți trimite serviciile, publicul vizat și obiectivul principal al site-ului. Îți răspundem cu o recomandare clară de structură, design și buget.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "mentenanta-website": {
    slug: "mentenanta-website",
    title: "Mentenanță website pentru business-uri care vor stabilitate, securitate și evoluție controlată",
    description: "Servicii de mentenanță website cu update-uri, monitorizare, securitate și optimizări continue pentru website-uri active.",
    metaTitle: "Mentenanță website cu update-uri, securitate și optimizare | Web Dynamicx",
    metaDescription:
      "Servicii de mentenanță website cu audit inițial, update-uri, monitorizare uptime, optimizare și suport pentru website-uri care trebuie să rămână stabile.",
    image: "/images/services/mentenanta-site-web.webp",
    ogImage: "/images/services/mentenanta-site-web.webp",
    ogAlt: "Servicii de mentenanță website și optimizare continuă",
    hero: {
      eyebrow: "Mentenanță și suport continuu pentru website",
      title: "Mentenanță website pentru companii care vor un site stabil, sigur și actualizat",
      subtitle:
        "Gestionăm partea de update-uri, monitorizare, securitate și optimizări astfel încât website-ul tău să rămână funcțional și să nu acumuleze probleme care costă mai mult mai târziu.",
      bullets: [
        "Audităm starea actuală și prioritizăm riscurile reale",
        "Gestionăm update-uri, monitorizare și verificări periodice",
        "Continuăm cu îmbunătățiri și intervenții controlate în timp",
      ],
      ctaPrimary: quickEstimateLink("Cere o evaluare pentru mentenanță"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Serviciul este potrivit atât pentru site-uri aflate deja în producție, cât și pentru proiecte care au nevoie de un partener constant după lansare.",
      trustLine: "Potrivit pentru website-uri de prezentare, magazine online și proiecte care trebuie să rămână stabile după lansare.",
      trustLinkLabel: "Vezi și serviciul de creare site web",
      trustLinkHref: "/servicii/creare-site-web",
      stats: [
        { label: "Focus", value: "Stabilitate și prevenție" },
        { label: "Include", value: "Update-uri și monitorizare" },
        { label: "Potrivit pentru", value: "Website-uri active" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce ar trebui să rezolve mentenanța website-ului tău",
      intro:
        "Mentenanța bună nu înseamnă doar intervenție când ceva se strică. Înseamnă prevenție, update-uri controlate, monitorizare și grijă pentru performanță și securitate în timp.",
      cards: [
        {
          title: "Reducerea riscului tehnic",
          description: "Identificăm din timp zonele vulnerabile și intervenim înainte ca problemele să devină blocaje reale.",
        },
        {
          title: "Update-uri și compatibilitate",
          description: "Gestionăm actualizările și verificările necesare astfel încât site-ul să rămână funcțional după schimbări.",
        },
        {
          title: "Monitorizare și reacție",
          description: "Verificăm uptime, erori și semnale importante pentru ca incidentele să fie observate și tratate la timp.",
        },
        {
          title: "Îmbunătățire continuă",
          description: "Pe lângă mentenanță, putem continua cu optimizări mici, ajustări și evoluții necesare pe baza priorităților tale.",
        },
      ],
      proofTitle: "Zone frecvent acoperite",
      proofItems: ["update-uri", "backup și securitate", "uptime", "optimizare continuă"],
      proofLink: serviceLink("/servicii/optimizare-seo", "Vezi și serviciul de SEO"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Cum te ajută mentenanța să eviți costuri și blocaje mai mari",
      intro:
        "Website-urile lăsate fără întreținere acumulează risc tehnic, vulnerabilități și probleme operaționale care ajung să coste mai mult decât o mentenanță bună făcută la timp.",
      items: [
        {
          title: "Mai puține surprize în producție",
          description: "Monitorizarea și update-urile regulate reduc probabilitatea unor căderi sau erori apărute exact când ai nevoie de site.",
        },
        {
          title: "Intervenții planificate, nu pompieristice",
          description: "Preferăm să lucrăm controlat și preventiv, în loc să ajungem la intervenții urgente și costisitoare.",
        },
        {
          title: "Site mai sigur și mai actualizat",
          description: "Ținem cont de update-uri, compatibilitate și bune practici de securitate pentru a reduce riscurile inutile.",
        },
        {
          title: "Spațiu pentru îmbunătățiri continue",
          description: "Mentenanța poate include și modificări punctuale, optimizări sau evoluții mici care țin site-ul actual.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens un serviciu de mentenanță website",
      intro:
        "Serviciul este potrivit pentru companii care au website activ și nu vor să depindă de intervenții ocazionale, lente sau reactive atunci când apar probleme.",
      items: [
        "business-uri care au site în producție și vor suport constant după lansare",
        "echipe care nu au resurse interne pentru update-uri, monitorizare și verificări tehnice",
        "magazine online și website-uri de servicii care trebuie să rămână stabile și accesibile",
        "companii care vor să combine mentenanța cu îmbunătățiri punctuale în timp",
      ],
      outro:
        "Dacă site-ul tău este un activ comercial real, mentenanța nu este opțională. Este modul prin care îl păstrezi funcțional, sigur și relevant în timp.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de situații în care mentenanța website-ului devine importantă",
      intro:
        "Putem intra fie ca partener de suport recurent, fie pentru a stabiliza și pune ordine într-un website care a rămas prea mult timp fără întreținere.",
      featured: [
        {
          title: "Website activ care are nevoie de suport lunar",
          description: "Potrivit pentru companii care vor update-uri, monitorizare și reacție mai rapidă la probleme fără să gestioneze intern partea tehnică.",
        },
        {
          title: "Site cu istoric de probleme sau update-uri amânate",
          description: "Începem cu audit și stabilizare, apoi trecem pe un ritm de mentenanță mai predictibil.",
        },
        {
          title: "Website care trebuie și optimizat în timp",
          description: "Combinăm întreținerea cu mici îmbunătățiri tehnice, de conținut sau de experiență acolo unde are sens.",
        },
      ],
      additional: [
        {
          title: "Mentenanță după proiect nou",
          description: "Preluăm website-ul după lansare și asigurăm continuitate, update-uri și suport pentru următoarea etapă.",
        },
        {
          title: "Monitorizare pentru website-uri comerciale",
          description: "Punem accent pe uptime, stabilitate și tratarea rapidă a semnalelor care pot afecta lead-urile sau vânzările.",
        },
      ],
      outro: "Dacă website-ul are nevoie și de reconstrucție sau extindere, poți continua cu",
      outroLink: serviceLink("/servicii/creare-site-web", "serviciul de creare site web"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce înseamnă mentenanță utilă, nu doar suport la nevoie",
      intro:
        "Mentenanța cu valoare reală combină observația preventivă cu reacția rapidă și cu îmbunătățirile mici care țin website-ul sănătos în timp.",
      items: [
        {
          title: "Audit și punct de plecare clar",
          description: "Înțelegem întâi starea actuală a site-ului și zonele cu risc, înainte de a intra în ritm recurent de suport.",
        },
        {
          title: "Update-uri controlate",
          description: "Nu tratăm actualizările ca taskuri automate fără verificare, ci ca intervenții care trebuie gestionate responsabil.",
        },
        {
          title: "Monitorizare, backup și securitate",
          description: "Urmărim semnalele importante și reducem riscul ca problemele tehnice să apară exact când costă cel mai mult.",
        },
        {
          title: "Spațiu pentru optimizare",
          description: "Mentenanța poate susține și mici îmbunătățiri de performanță, conținut sau experiență, nu doar stingerea incendiilor.",
        },
      ],
      outro: "Dacă ai nevoie și de optimizare continuă pe trafic și structură, poți continua cu",
      outroLink: serviceLink("/servicii/optimizare-seo", "serviciul SEO"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum lucrăm într-un serviciu de mentenanță website",
      intro:
        "Începem cu claritate și audit, apoi intrăm într-un ritm recurent de monitorizare, intervenție și îmbunătățiri în funcție de priorități.",
      steps: [
        {
          id: "audit-maintenance",
          title: "Audit inițial",
          subtitle: "Vedem starea site-ului și principalele riscuri.",
          description: "Analizăm update-urile restante, securitatea, erorile și zonele care pot afecta stabilitatea sau performanța website-ului.",
          tags: ["Audit", "Risc", "Prioritizare"],
          duration: "Etapa 1",
        },
        {
          id: "setup-maintenance",
          title: "Stabilizare și setup",
          subtitle: "Punem baza pentru suport recurent.",
          description: "Configurăm ritmul de mentenanță, verificăm procesele și clarificăm tipul de intervenții necesare în perioada următoare.",
          tags: ["Stabilizare", "Setup", "Plan"],
          duration: "Etapa 2",
        },
        {
          id: "monitor-maintenance",
          title: "Monitorizare și update-uri",
          subtitle: "Ținem website-ul în stare bună de funcționare.",
          description: "Gestionăm update-uri, monitorizare și verificări periodice pentru a menține site-ul stabil și sigur.",
          tags: ["Update-uri", "Monitorizare", "Securitate"],
          duration: "Etapa 3",
        },
        {
          id: "improve-maintenance",
          title: "Optimizări și suport continuu",
          subtitle: "Continuăm cu intervenții utile în timp.",
          description: "Pe lângă mentenanță, putem include și ajustări punctuale, optimizări și recomandări pentru etapa următoare.",
          tags: ["Suport", "Optimizare", "Continuare"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un serviciu de mentenanță website",
      intro:
        "Pachetul exact depinde de site și de ritmul necesar, dar mentenanța bună acoperă atât partea de întreținere, cât și claritatea intervențiilor făcute.",
      groups: [
        {
          title: "Audit și stabilizare",
          items: ["evaluare inițială a riscurilor", "prioritizarea problemelor existente", "clarificare a setup-ului de suport"],
        },
        {
          title: "Întreținere recurentă",
          items: ["update-uri și verificări", "monitorizare și semnale importante", "gestionarea zonelor cu risc operațional"],
        },
        {
          title: "Optimizare și suport",
          items: ["recomandări și ajustări mici", "suport pentru evoluții punctuale", "continuitate după lansare sau după stabilizare"],
        },
      ],
      outro: "Rezultatul urmărit este simplu: un website care rămâne stabil și gestionabil, nu unul care devine tot mai fragil după fiecare lună.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Cum estimăm un serviciu de mentenanță website?",
      budgetText:
        "Costul depinde de platformă, volumul de intervenții, nivelul de risc, frecvența update-urilor și dacă mentenanța include doar întreținere sau și îmbunătățiri punctuale.",
      budgetHighlight: "Planurile de mentenanță pornesc, de regulă, de la niveluri diferite în funcție de complexitatea website-ului și ritmul de suport necesar.",
      budgetFactors: [
        "tipul website-ului și complexitatea tehnică",
        "volumul de update-uri și verificări necesare",
        "cât de sensibil este website-ul din punct de vedere operațional",
        "dacă vrei doar mentenanță sau și modificări și optimizări recurente",
      ],
      durationTitle: "Cum funcționează durata într-un serviciu de mentenanță?",
      durationText:
        "Mentenanța este recurentă. Procesul începe cu audit și stabilizare, apoi continuă lunar sau în ritmul agreat, în funcție de nevoile website-ului.",
      durationHighlight: "Audit inițial + ritm recurent de suport și întreținere",
      durationNote:
        "Nu tratăm mentenanța ca proiect închis într-o singură săptămână. Valoarea reală apare prin continuitate și prevenție în timp.",
      cta: {
        title: "Vrei să vezi dacă website-ul tău are nevoie de mentenanță de bază sau de suport mai amplu?",
        text: "Putem evalua rapid starea actuală a site-ului și îți spunem ce ritm de mentenanță are sens, ce riscuri există și ce se poate preveni din timp.",
        primary: quickEstimateLink("Cere evaluarea inițială"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă site-ul are deja probleme sau update-uri restante, le putem include în analiza inițială și prioritiza corect.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg companiile să lucreze cu noi pentru mentenanță website",
      intro:
        "Privim mentenanța ca pe o combinație între responsabilitate tehnică, reacție controlată și grijă pentru felul în care site-ul susține business-ul zi de zi.",
      items: [
        "Începem cu audit și clarificăm zonele cu risc real",
        "Gestionăm update-uri și monitorizare într-un mod controlat, nu haotic",
        "Putem combina întreținerea cu ajustări și optimizări punctuale",
        "Construim continuitate după lansare, nu doar intervenții izolate",
      ],
      outro: "Website-urile care contează pentru business au nevoie de grijă recurentă, nu doar de reacții întâmplătoare atunci când apar probleme.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre mentenanță website",
      intro: "Răspunsuri rapide despre audit, frecvență, intervenții și modul în care abordăm mentenanța pe termen scurt și lung.",
      items: [
        {
          question: "Serviciul începe cu auditul site-ului?",
          answer: "Da. În cele mai multe cazuri începem cu auditul și înțelegerea stării actuale, ca să știm ce trebuie stabilizat și ce ritm de mentenanță are sens.",
        },
        {
          question: "Mentenanța include doar update-uri?",
          answer: "Nu. Poate include și monitorizare, verificări, recomandări și intervenții punctuale, în funcție de pachetul și ritmul agreat.",
        },
        {
          question: "Puteți prelua mentenanța unui site construit de altă echipă?",
          answer: "Da. Tocmai de aceea auditul inițial este important, ca să înțelegem corect starea proiectului și riscurile existente.",
        },
        {
          question: "Puteți continua și cu optimizări sau dezvoltări mici?",
          answer: "Da. În funcție de setup, mentenanța poate merge împreună cu modificări punctuale, optimizări sau evoluții mici ale site-ului.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Direcții utile care completează mentenanța website-ului",
      intro: "În multe cazuri, după stabilizare, următorii pași firești sunt optimizarea SEO sau extinderea website-ului în zone importante pentru business.",
      items: [
        {
          title: "Creare site web",
          description: "Dacă auditul arată că site-ul actual are limitări structurale și are sens o reconstrucție mai amplă.",
          href: "/servicii/creare-site-web",
          ctaLabel: "Vezi serviciul de creare site",
        },
        {
          title: "Servicii SEO profesionale",
          description: "Dacă după stabilizare vrei să optimizezi și partea organică, structură de pagini și relevanță pentru Google.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți contextul actual, tipul site-ului și principalele probleme pe care le ai acum.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care se leagă natural de mentenanța website-ului",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie de reconstrucție, optimizare SEO sau îmbunătățire de design și experiență.",
      items: [
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
        serviceLink("/servicii/web-design", "Web design"),
        serviceLink("/servicii/promovare-site", "Promovare site"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce se întâmplă acum cu website-ul tău și îți propunem un setup de mentenanță realist",
      text: "Fie că ai nevoie de stabilizare, de suport recurent sau de combinație între întreținere și optimizare, putem structura serviciul în funcție de riscuri și obiective.",
      supporting:
        "Ne poți trimite platforma, problemele actuale și ce fel de ritm de suport ai nevoie. Îți răspundem cu o variantă clară pentru următoarea etapă.",
      primary: contactLink("Trimite brief-ul și cere evaluarea"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "creare-site-web": {
    slug: "creare-site-web",
    title: "Creare site web personalizat pentru companii care vor structură bună și bază SEO serioasă",
    description: "Servicii de creare site web cu arhitectură clară, pagini orientate pe conversie, performanță și extensibilitate.",
    metaTitle: "Creare site web personalizat, rapid și optimizat SEO | Web Dynamicx",
    metaDescription:
      "Servicii de creare site web personalizat cu structură clară, pagini de servicii, optimizare SEO on-page și performanță bună pentru lead-uri și creștere.",
    image: "/images/services/creare-site-web.webp",
    ogImage: "/images/services/creare-site-web.webp",
    ogAlt: "Servicii de creare site web personalizat pentru companii",
    hero: {
      eyebrow: "Site web personalizat pentru creștere",
      title: "Creare site web pentru companii care au nevoie de mai mult decât un site simplu de prezentare",
      subtitle:
        "Construim website-uri personalizate cu structură clară, pagini importante pentru vânzare, bază SEO bună și arhitectură pregătită pentru extindere în timp.",
      bullets: [
        "Clarificăm arhitectura paginilor și rolul fiecărei secțiuni importante",
        "Construim design și implementare într-o logică orientată pe performanță și lead-uri",
        "Lăsăm un website pregătit pentru SEO, conținut și creștere ulterioară",
      ],
      ctaPrimary: quickEstimateLink("Cere o estimare pentru site-ul tău"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Serviciul este potrivit când proiectul depășește nivelul unui site simplu și ai nevoie de structură, flexibilitate și pagini gândite mai strategic.",
      trustLine: "Potrivit pentru website-uri de servicii, proiecte B2B, branduri în creștere și build-uri cu mai multe pagini importante.",
      trustLinkLabel: "Vezi și varianta de site de prezentare",
      trustLinkHref: "/servicii/creare-site-prezentare",
      stats: [
        { label: "Focus", value: "Structură, performanță, SEO" },
        { label: "Potrivit pentru", value: "Build-uri custom" },
        { label: "Livrare", value: "Website pregătit de creștere" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce primești într-un proiect bun de creare site web",
      intro:
        "Un site web personalizat bun nu este doar o sumă de pagini. Este un sistem care trebuie să explice oferta, să susțină conversia, să fie rapid și să poată fi extins fără haos tehnic.",
      cards: [
        {
          title: "Arhitectură bună de pagini",
          description: "Definim rolul fiecărei pagini și relația dintre servicii, resurse, despre, portofoliu și contact.",
        },
        {
          title: "Pagină gândită pentru lead-uri și claritate",
          description: "Prioritizăm mesajul, CTA-urile și secțiunile de încredere pentru a susține procesul comercial, nu doar designul.",
        },
        {
          title: "Bază SEO și performanță",
          description: "Website-ul pornește cu structură semantică, metadata, performanță și setup tehnic gândite corect.",
        },
        {
          title: "Extensibilitate",
          description: "Poți adăuga ulterior servicii, pagini, resurse și optimizări fără să reconstruiești proiectul de la zero.",
        },
      ],
      proofTitle: "Zone frecvent incluse",
      proofItems: ["homepage", "pagină servicii", "despre", "contact și lead flow"],
      proofLink: portfolioLink("Vezi portofoliul Web Dynamicx"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "De ce merită un site web personalizat atunci când proiectul cere mai multă structură",
      intro:
        "Când website-ul trebuie să susțină vânzări, conținut și extindere în timp, o abordare personalizată devine mai eficientă decât o soluție simplificată sau temporară.",
      items: [
        {
          title: "Arhitectură gândită pentru business",
          description: "Website-ul este structurat în funcție de obiectivele comerciale și de tipul de conținut care trebuie susținut pe termen lung.",
        },
        {
          title: "Pagină mai clară pentru conversie",
          description: "Mesajul, CTA-urile și secțiunile importante sunt gândite să susțină lead-uri și încredere, nu doar o prezență vizuală.",
        },
        {
          title: "Bază tehnică mai sănătoasă",
          description: "Punem accent pe performanță, structură semantică și o implementare care nu complică inutil evoluția site-ului.",
        },
        {
          title: "Mai ușor de scalat",
          description: "Dacă apar servicii noi, pagini noi sau necesități SEO mai ample, website-ul poate crește mai coerent.",
        },
        {
          title: "Mai bun pentru SEO și conținut",
          description: "Structura și paginația sunt gândite astfel încât să susțină și dezvoltarea pe termen lung a conținutului relevant.",
        },
        {
          title: "Conectat cu restul ecosistemului digital",
          description: "Website-ul poate integra formulare, analytics, CRM sau alte instrumente necesare fluxului comercial.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens un proiect de creare site web personalizat",
      intro:
        "Serviciul este potrivit pentru proiecte care depășesc nivelul unui site simplu și au nevoie de mai multe pagini importante, structură mai clară și o fundație mai puternică pentru SEO și creștere.",
      items: [
        "companii de servicii care au nevoie de pagini mai clare și mai bine organizate",
        "business-uri care vor arhitectură mai amplă decât un site de prezentare de bază",
        "branduri care au nevoie de fundație bună pentru SEO, conținut și campanii",
        "proiecte care vor website personalizat și extensibil, nu doar o lansare rapidă minimă",
      ],
      outro:
        "Dacă website-ul trebuie să devină un activ comercial real, nu doar un punct de prezență online, proiectul are nevoie de structură mai bună și decizii tehnice mai bine calibrate.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte de creare site web pe care le putem livra",
      intro:
        "Putem construi website-uri pentru companii care au nevoie de mai multă claritate, mai multe pagini importante și o fundație mai bună pentru creștere organică și conversie.",
      featured: [
        {
          title: "Website pentru firmă de servicii",
          description: "Pentru companii care au nevoie de pagini de servicii mai bune, mesaj mai clar și traseu comercial mai bine organizat.",
        },
        {
          title: "Website de companie cu mai multe zone importante",
          description: "Pentru proiecte care trebuie să combine prezentare, servicii, resurse, despre și contact într-o arhitectură coerentă.",
        },
        {
          title: "Build nou pentru proiect care vrea să crească în online",
          description: "Pentru business-uri care au nevoie de fundație bună tehnic și semantic încă din prima versiune a site-ului.",
        },
      ],
      additional: [
        {
          title: "Refacere de website existent",
          description: "Reorganizăm structura și implementarea atunci când site-ul actual nu mai susține suficient oferta sau creșterea.",
        },
        {
          title: "Website pregătit pentru SEO și campanii",
          description: "Construim baza pentru trafic organic și campanii plătite fără compromisuri majore în structură.",
        },
      ],
      outro: "Dacă proiectul tău este mai simplu și vrei o variantă mai compactă, vezi și",
      outroLink: serviceLink("/servicii/creare-site-prezentare", "serviciul de creare site de prezentare"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce diferențiază un site web personalizat de un build mai simplu",
      intro:
        "Diferența reală stă în nivelul de arhitectură, flexibilitate și pregătire pentru creștere, nu doar în numărul de pagini sau în aspectul vizual.",
      items: [
        {
          title: "Arhitectură mai amplă și mai clară",
          description: "Gândim relația dintre pagini și secțiuni astfel încât site-ul să poată susține și evoluție, și SEO, și vânzare.",
        },
        {
          title: "Design și implementare mai bine calibrate",
          description: "Lucrăm la claritate, performanță și structură de pagină într-un mod mai strategic decât într-un build de bază.",
        },
        {
          title: "Mai potrivit pentru extindere",
          description: "Poți adăuga servicii, resurse și direcții noi fără să îți blochezi proiectul în limitările unei structuri prea simple.",
        },
        {
          title: "Mai bun pentru SEO și conținut",
          description: "Website-ul este pregătit să susțină mai bine pagini de servicii, interlinking și topic-uri relevante în timp.",
        },
      ],
      outro: "Dacă proiectul are nevoie și de design dedicat înainte de implementare, poți continua cu",
      outroLink: serviceLink("/servicii/web-design", "serviciul de web design"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum decurge un proiect de creare site web",
      intro:
        "Procesul este construit astfel încât să închidem clar arhitectura, designul și implementarea fără improvizații care costă mai mult în etapele târzii.",
      steps: [
        {
          id: "discovery-site-web",
          title: "Analiză și arhitectură",
          subtitle: "Definim ce trebuie să facă site-ul și cum se organizează.",
          description: "Stabilim paginile importante, obiectivele de conversie și structura care susține cel mai bine business-ul.",
          tags: ["Arhitectură", "Servicii", "Lead flow"],
          duration: "Etapa 1",
        },
        {
          id: "wireframe-site-web",
          title: "Structură și wireframe",
          subtitle: "Punem ordinea informației înainte de build.",
          description: "Definim secțiunile importante și modul în care oferta trebuie parcursă pentru claritate și acțiune.",
          tags: ["Wireframe", "Mesaj", "CTA"],
          duration: "Etapa 2",
        },
        {
          id: "design-site-web",
          title: "Design și componente",
          subtitle: "Construim direcția vizuală și sistemul de pagină.",
          description: "Transformăm structura într-un UI coerent, responsive și pregătit pentru implementare curată.",
          tags: ["UI", "Componente", "Responsive"],
          duration: "Etapa 3",
        },
        {
          id: "build-site-web",
          title: "Implementare și setup",
          subtitle: "Dezvoltăm website-ul și zonele tehnice importante.",
          description: "Construim paginile, formularele, optimizările tehnice și setup-ul de bază pentru SEO și măsurare.",
          tags: ["Implementare", "SEO", "Analytics"],
          duration: "Etapa 4",
        },
        {
          id: "launch-site-web",
          title: "Testare și lansare",
          subtitle: "Verificăm și publicăm site-ul într-o formă sănătoasă.",
          description: "Testăm experiența principală și pregătim lansarea cu o bază bună pentru conținut, lead-uri și extindere ulterioară.",
          tags: ["QA", "Lansare", "Bază de creștere"],
          duration: "Etapa 5",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce include, de regulă, un proiect de creare site web personalizat",
      intro:
        "În funcție de amploarea proiectului, livrabilele acoperă atât zona de structură și design, cât și implementarea și setup-ul tehnic de bază.",
      groups: [
        {
          title: "Structură și design",
          items: ["arhitectură de pagini și mesaje", "wireframe și UI pentru zonele cheie", "componente și layout-uri coerente"],
        },
        {
          title: "Implementare",
          items: ["paginile importante dezvoltate cap-coadă", "formulare și zone comerciale esențiale", "optimizări de performanță și responsive"],
        },
        {
          title: "SEO și lansare",
          items: ["metadata și structură semantică", "setup de bază pentru indexare și analytics", "testare și predare pentru lansare"],
        },
      ],
      outro: "Scopul este să primești un website care poate fi folosit imediat și extins sănătos, nu doar un proiect care arată bine la lansare.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Ce buget are sens pentru un proiect de creare site web?",
      budgetText:
        "Costul depinde de numărul de pagini importante, nivelul de personalizare, complexitatea structurii și cât de multă integrare și clarificare intră în proiect.",
      budgetHighlight: "Proiectele de creare site web personalizat pot porni de la aproximativ 600 EUR pentru build-uri bine delimitate.",
      budgetFactors: [
        "numărul de pagini și rolul lor comercial",
        "nivelul de design și componentizare necesar",
        "complexitatea tehnică și integrarea cu formulare sau alte instrumente",
        "dacă proiectul include și SEO, conținut sau extinderi ulterioare",
      ],
      durationTitle: "Cât durează, realist, un proiect de creare site web?",
      durationText:
        "Pentru multe build-uri bine delimitate, intervalul realist este de 2-4 săptămâni, însă proiectele cu structură mai amplă, mai multe pagini sau cerințe speciale pot dura mai mult.",
      durationHighlight: "2-4 săptămâni pentru multe build-uri bine delimitate, mai mult pentru proiecte extinse",
      durationNote:
        "Preferăm să dimensionăm proiectul corect decât să comprimăm artificial etapele care țin de structură, claritate și testare.",
      cta: {
        title: "Vrei să vezi dacă proiectul tău cere site web custom sau o variantă mai simplă?",
        text: "Îți spunem rapid ce nivel de build are sens pentru etapa actuală, cum ar trebui structurate paginile și ce interval de buget este realist.",
        primary: quickEstimateLink("Cere estimare orientativă"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja site-ul actual, paginile dorite sau câteva referințe, le putem evalua în prima discuție și prioritiza corect.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce aleg companiile să lucreze cu noi pentru creare site web",
      intro:
        "Punem accent pe structură, claritate și bază tehnică sănătoasă, astfel încât website-ul să funcționeze mai bine atât pentru vizitatori, cât și pentru creștere organică și comercială.",
      items: [
        "Construim arhitectura site-ului în funcție de obiective și de paginile care contează",
        "Gândim designul și implementarea în logica lead-urilor și a clarității comerciale",
        "Punem bazele SEO și ale performanței încă din build, nu după lansare",
        "Lăsăm un website ușor de extins și de optimizat în timp",
      ],
      outro: "Website-ul bun este cel care explică, convinge și poate crește odată cu business-ul, nu doar cel care arată bine într-o primă versiune.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre creare site web",
      intro: "Răspunsuri scurte despre structură, durată, SEO și felul în care abordăm proiectele de website custom.",
      items: [
        {
          question: "Care este diferența față de un site de prezentare simplu?",
          answer: "În general, proiectul de creare site web personalizat acoperă o arhitectură mai amplă, mai multe pagini importante și o fundație mai puternică pentru creștere, SEO și extindere.",
        },
        {
          question: "Serviciul include și pagini de servicii optimizate pentru SEO?",
          answer: "Da. Putem include pagini de servicii și structură on-page gândite astfel încât website-ul să pornească bine atât pentru utilizatori, cât și pentru Google.",
        },
        {
          question: "Puteți continua și cu mentenanță sau optimizare după lansare?",
          answer: "Da. După lansare putem continua cu mentenanță, optimizare SEO, ajustări de pagini sau extinderi noi, în funcție de proiect.",
        },
        {
          question: "Puteți prelua și refacerea unui site existent?",
          answer: "Da. Dacă site-ul actual nu mai susține bine oferta sau creșterea, putem intra pe reorganizare și reconstrucție într-o variantă mai sănătoasă.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Ce servicii completează cel mai bine un proiect de site web",
      intro: "În funcție de etapă, website-ul poate fi susținut și de design dedicat, branding sau optimizare SEO continuă.",
      items: [
        {
          title: "Web design",
          description: "Dacă proiectul are nevoie de design dedicat și clarificare mai profundă pe partea de UX și interfață.",
          href: "/servicii/web-design",
          ctaLabel: "Vezi serviciul de web design",
        },
        {
          title: "Servicii SEO profesionale",
          description: "Dacă după build vrei să continui și cu structură organică, interlinking și creștere în Google.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Formular de contact",
          description: "Dacă ai deja lista de pagini sau contextul actual și vrei să ne trimiți brief-ul complet al proiectului.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care se leagă natural de un proiect de site web",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de design dedicat, identitate vizuală sau creștere organică după lansare.",
      items: [
        serviceLink("/servicii/web-design", "Web design"),
        serviceLink("/servicii/creare-logo-branding", "Creare logo & branding"),
        serviceLink("/servicii/creare-site-prezentare", "Creare site de prezentare"),
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce vrei să construiască site-ul tău pentru business și îți propunem o variantă clară de implementare",
      text: "Fie că vrei website nou, refacere completă sau structură mai bună pentru paginile importante, putem transforma proiectul într-un build clar și realist.",
      supporting:
        "Ne poți trimite obiectivele, paginile dorite și contextul actual. Îți răspundem cu arhitectura potrivită, etapa de lucru și un interval orientativ de buget.",
      primary: contactLink("Trimite brief-ul și cere oferta"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
  "promovare-site": {
    slug: "promovare-site",
    title: "Promovare site pentru business-uri care vor mai mult trafic și o direcție de creștere mai clară",
    description: "Servicii de promovare site care combină trafic, ofertă, landing pages și măsurare pentru creștere predictibilă.",
    metaTitle: "Promovare site cu focus pe trafic calificat și conversii | Web Dynamicx",
    metaDescription:
      "Servicii de promovare site pentru business-uri care vor mix mai bun între trafic, landing pages, ofertă și măsurare. Strategie orientată pe rezultate.",
    image: "/images/services/creare-site-prezentare.webp",
    ogImage: "/images/services/creare-site-prezentare.webp",
    ogAlt: "Servicii de promovare site și creștere digitală",
    hero: {
      eyebrow: "Promovare site cu direcție clară",
      title: "Promovare site pentru companii care vor trafic util și pagini pregătite să convertească",
      subtitle:
        "Abordăm promovarea site-ului ca mix între ofertă, trafic, landing pages, SEO și măsurare, astfel încât investiția în online să aibă o bază mai clară și mai predictibilă.",
      bullets: [
        "Clarificăm oferta și paginile care trebuie susținute prin trafic",
        "Aliniem canalele și landing pages la obiective comerciale reale",
        "Măsurăm ce aduce trafic util și ajustăm în funcție de rezultate",
      ],
      ctaPrimary: quickEstimateLink("Cere o evaluare pentru promovare"),
      ctaSecondary: phoneLink("Discută proiectul cu noi"),
      ctaMicrocopy:
        "Serviciul este potrivit pentru business-uri care au nevoie de o direcție mai clară de creștere, nu doar de trafic adus pe pagini care nu sunt încă bine pregătite.",
      trustLine: "Potrivit pentru proiecte care vor să combine claritatea ofertei cu SEO, pagini bune și canale de promovare mai bine calibrate.",
      trustLinkLabel: "Vezi și serviciul SEO",
      trustLinkHref: "/servicii/optimizare-seo",
      stats: [
        { label: "Focus", value: "Trafic util și conversii" },
        { label: "Include", value: "Ofertă, pagini, măsurare" },
        { label: "Potrivit pentru", value: "Servicii și e-commerce" },
      ],
    },
    context: {
      eyebrow: "Context rapid",
      title: "Ce rezolvă un serviciu bun de promovare site",
      intro:
        "Promovarea eficientă nu începe cu bugetele, ci cu claritatea: ce pagini promovăm, ce ofertă susțin, cum măsurăm și ce trebuie îmbunătățit pe parcurs.",
      cards: [
        {
          title: "Ofertă și pagini mai bine aliniate",
          description: "Vedem dacă site-ul și landing pages susțin suficient de bine traficul pe care vrei să îl aduci.",
        },
        {
          title: "Mix mai bun de canale",
          description: "Clarificăm cum se leagă SEO, campaniile și paginile de destinație în funcție de obiectivul proiectului.",
        },
        {
          title: "Tracking și semnale reale",
          description: "Măsurăm contactele, lead-urile și zonele care au impact comercial, nu doar volumele de trafic.",
        },
        {
          title: "Optimizare pe baza datelor",
          description: "Promovarea se ajustează în funcție de rezultate și de ce învățăm despre public, pagini și ofertă.",
        },
      ],
      proofTitle: "Zone frecvent implicate",
      proofItems: ["landing pages", "lead flow", "SEO + canale plătite", "tracking"],
      proofLink: serviceLink("/servicii/web-design", "Vezi și serviciul de web design"),
    },
    valueProps: {
      eyebrow: "Avantaje clare",
      title: "Cum arată promovarea site-ului atunci când este legată de rezultate, nu doar de volum",
      intro:
        "Traficul bun vine atunci când paginile, mesajele și măsurarea sunt gândite împreună. Altfel, bugetele se consumă mai ușor decât se transformă în rezultate.",
      items: [
        {
          title: "Trafic mai bine direcționat",
          description: "Promovăm paginile care au sens comercial și știm de ce le susținem, nu trimitem trafic generic pe site la întâmplare.",
        },
        {
          title: "Landing pages și ofertă mai clare",
          description: "Atunci când paginile nu susțin suficient promovarea, intervenim și pe structură, claritate și CTA-uri.",
        },
        {
          title: "Măsurare orientată pe lead-uri",
          description: "Definim evenimente și semnale relevante pentru obiectiv, nu ne uităm doar la trafic sau clickuri fără context.",
        },
        {
          title: "Mix mai sănătos între canale",
          description: "Promovarea funcționează mai bine când SEO, paginile și celelalte canale nu lucrează izolat unele de altele.",
        },
      ],
    },
    audience: {
      eyebrow: "Pentru cine este",
      title: "Când are sens un serviciu de promovare site",
      intro:
        "Serviciul este potrivit pentru business-uri care vor trafic și rezultate, dar au nevoie de o direcție mai clară privind paginile, canalele și felul în care trebuie măsurată performanța.",
      items: [
        "companii care vor să își promoveze mai bine oferta online și să clarifice ce pagini trebuie susținute",
        "business-uri care au trafic, dar nu văd suficiente lead-uri sau rezultate comerciale",
        "proiecte care trebuie să combine SEO, pagini mai bune și canale de promovare mai bine coordonate",
        "echipe care vor o abordare mai pragmatică și mai măsurabilă a promovării site-ului",
      ],
      outro:
        "Dacă promovarea nu este legată de ofertă, pagină și măsurare, rezultatele tind să rămână neclare. De aceea tratăm promovarea ca sistem, nu ca acțiune izolată.",
    },
    useCases: {
      eyebrow: "Use case-uri",
      title: "Tipuri de proiecte în care are sens promovarea site-ului",
      intro:
        "Putem intra atât în clarificarea setup-ului general de promovare, cât și în proiecte care au nevoie de pagini mai bune și trafic mai bine direcționat.",
      featured: [
        {
          title: "Promovare pentru servicii și lead generation",
          description: "Pentru companii care au nevoie de pagini de ofertă mai clare și de trafic orientat spre contacte sau cereri de ofertă.",
        },
        {
          title: "Promovare pentru website-uri care trebuie repoziționate",
          description: "Pentru proiecte în care oferta, paginile și canalele actuale nu mai sunt suficient de bine aliniate cu obiectivele comerciale.",
        },
        {
          title: "Promovare pentru proiecte care combină SEO și canale plătite",
          description: "Pentru business-uri care vor să nu trateze creșterea organică și traficul plătit ca două direcții complet separate.",
        },
      ],
      additional: [
        {
          title: "Refacere de landing pages pentru promovare",
          description: "Intrăm și pe claritatea paginilor atunci când traficul nu este susținut suficient de bine la nivel de experiență și ofertă.",
        },
        {
          title: "Setup de tracking și măsurare",
          description: "Definim mai clar ce înseamnă rezultat și cum trebuie urmărite semnalele importante ale promovării.",
        },
      ],
      outro: "Dacă problema principală este vizibilitatea organică și structura în Google, vezi și",
      outroLink: serviceLink("/servicii/optimizare-seo", "serviciul SEO"),
    },
    comparison: {
      eyebrow: "Abordare",
      title: "Ce înseamnă promovare site făcută cu logică de business",
      intro:
        "Promovarea utilă înseamnă să legi oferta, paginile, canalele și măsurarea. Altfel, poți avea trafic fără claritate și cost fără rezultat vizibil.",
      items: [
        {
          title: "Începem cu paginile și oferta",
          description: "Ne uităm dacă website-ul susține suficient de bine ceea ce vrei să promovezi și unde trebuie claritate mai bună.",
        },
        {
          title: "Alegem canalele în funcție de obiectiv",
          description: "Direcția de promovare pornește de la tipul de business, marjă, ciclu de decizie și obiectiv, nu doar de la un canal popular.",
        },
        {
          title: "Măsurăm semnale relevante",
          description: "Setăm tracking pentru lead-uri, interacțiuni și rezultate comerciale, nu ne oprim la volume superficiale de trafic.",
        },
        {
          title: "Optimizăm iterativ",
          description: "Ce învățăm din trafic și din pagini devine baza pentru ajustarea mesajelor, landing pages și canalelor în timp.",
        },
      ],
      outro: "Dacă website-ul sau paginile de ofertă trebuie îmbunătățite înainte de promovare, poți continua cu",
      outroLink: serviceLink("/servicii/creare-site-web", "serviciul de creare site web"),
    },
    process: {
      eyebrow: "Proces clar",
      title: "Cum abordăm un proiect de promovare site",
      intro:
        "Pornim de la ce trebuie promovat, cum arată paginile actuale și ce înseamnă rezultat, apoi calibrăm mixul de canale și optimizările necesare.",
      steps: [
        {
          id: "audit-promotion",
          title: "Audit de ofertă și pagini",
          subtitle: "Vedem ce merită promovat și ce trebuie clarificat întâi.",
          description: "Analizăm paginile actuale, traseul către lead și modul în care oferta este înțeleasă în site.",
          tags: ["Audit", "Ofertă", "Landing pages"],
          duration: "Etapa 1",
        },
        {
          id: "setup-promotion",
          title: "Direcție de canale și setup",
          subtitle: "Alegem mixul și obiectivele potrivite.",
          description: "Clarificăm ce canale au sens, cum se leagă de pagini și cum trebuie definit tracking-ul de bază.",
          tags: ["Canale", "Tracking", "Obiective"],
          duration: "Etapa 2",
        },
        {
          id: "optimize-pages-promotion",
          title: "Optimizare pagini și mesaje",
          subtitle: "Pregătim site-ul pentru traficul pe care îl aducem.",
          description: "Ajustăm zonele importante din pagini atunci când oferta, CTA-urile sau structura nu susțin suficient de bine promovarea.",
          tags: ["Mesaj", "UX", "CTA"],
          duration: "Etapa 3",
        },
        {
          id: "iterate-promotion",
          title: "Măsurare și iterare",
          subtitle: "Îmbunătățim pe baza semnalelor reale.",
          description: "Urmărim ce pagini și ce trafic produc rezultate și ajustăm direcția în funcție de performanță și obiective comerciale.",
          tags: ["Lead-uri", "Analiză", "Optimizare"],
          duration: "Etapa 4",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrabile",
      title: "Ce poate include un serviciu de promovare site",
      intro:
        "Livrabilele se stabilesc în funcție de proiect, dar promovarea bună acoperă atât claritatea setup-ului, cât și intervențiile necesare pentru susținerea traficului.",
      groups: [
        {
          title: "Audit și direcție",
          items: ["analiză de pagini și ofertă", "recomandări de canale și priorități", "definirea semnalelor importante de măsurat"],
        },
        {
          title: "Pagini și optimizări",
          items: ["ajustări pe landing pages sau pagini cheie", "clarificări de mesaj și CTA", "suport pentru structură mai bună de ofertă"],
        },
        {
          title: "Măsurare și iterație",
          items: ["tracking și citirea semnalelor importante", "analiză pe rezultate", "direcție pentru etapa următoare de promovare"],
        },
      ],
      outro: "Obiectivul este să transformăm promovarea într-un sistem care știe ce urmărește și pe ce pagini se bazează, nu într-o serie de acțiuni disparate.",
    },
    pricing: {
      eyebrow: "Buget",
      budgetTitle: "Cum estimăm un serviciu de promovare site?",
      budgetText:
        "Costul depinde de claritatea setup-ului actual, de cât de mult trebuie lucrat pe pagini și ofertă și de tipul de mix de canale și suport necesar pe parcurs.",
      budgetHighlight: "Proiectele de promovare pot începe cu audit și setup, apoi continua cu optimizare recurentă în funcție de obiective și volum.",
      budgetFactors: [
        "cât de pregătite sunt paginile actuale pentru trafic",
        "dacă este nevoie și de intervenții pe structură, mesaj sau landing pages",
        "mixul de canale și nivelul de măsurare dorit",
        "ritmul și nivelul de suport necesar după setup-ul inițial",
      ],
      durationTitle: "Cum arată durata într-un proiect de promovare site?",
      durationText:
        "Începem de regulă cu audit și setup, apoi promovarea intră într-un ritm de optimizare și ajustare continuă, în funcție de rezultate și obiective.",
      durationHighlight: "Audit inițial + ritm recurent de optimizare și măsurare",
      durationNote:
        "Promovarea bună nu este un rezultat instant și nici un sprint fără analiză. Valoarea apare când direcția și iterația sunt bine calibrate.",
      cta: {
        title: "Vrei să vezi de unde ar trebui să înceapă promovarea site-ului tău?",
        text: "Putem evalua paginile, oferta și setup-ul actual și îți spunem ce merită clarificat și promovat mai întâi pentru a avea o bază mai sănătoasă.",
        primary: quickEstimateLink("Cere evaluarea inițială"),
        secondary: phoneLink("Vorbește cu echipa"),
        microcopy: "Dacă ai deja trafic, campanii sau landing pages, le putem analiza și integra în recomandarea inițială.",
      },
    },
    reasons: {
      eyebrow: "De ce noi",
      title: "De ce lucrează companiile cu noi pe promovare site",
      intro:
        "Abordăm promovarea din perspectiva paginii, a ofertei și a rezultatelor. Asta ajută mai mult decât a trimite trafic pe un setup care nu este încă suficient de clar.",
      items: [
        "Începem cu claritatea paginilor și a ofertei, nu doar cu bugetele",
        "Legăm promovarea de tracking și de semnale comerciale relevante",
        "Putem interveni și pe structură, UX și mesaj acolo unde traficul nu este susținut suficient",
        "Privim promovarea ca proces iterativ, nu ca acțiune singulară",
      ],
      outro: "Promovarea bună aduce trafic care are sens și îl trimite pe pagini capabile să transforme atenția în interes și contact.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Întrebări frecvente despre promovare site",
      intro: "Răspunsuri rapide despre pagini, trafic, canale și modul în care abordăm promovarea cu logică de business.",
      items: [
        {
          question: "Serviciul include și analiza paginilor, nu doar recomandări de trafic?",
          answer: "Da. În multe proiecte, claritatea paginilor și a ofertei este la fel de importantă ca alegerea canalelor sau volumul de trafic adus în site.",
        },
        {
          question: "Promovarea site-ului este același lucru cu SEO?",
          answer: "Nu. SEO poate face parte din promovare, dar promovarea site-ului poate include și alte canale, pagini dedicate, tracking și optimizare comercială mai largă.",
        },
        {
          question: "Puteți lucra și pe proiecte care au deja trafic sau campanii active?",
          answer: "Da. Putem evalua setup-ul actual și vedea unde se pierde claritatea sau eficiența, atât la nivel de pagini, cât și la nivel de măsurare și direcție.",
        },
        {
          question: "Puteți continua și cu redesign sau rebuild dacă paginile actuale nu susțin promovarea?",
          answer: "Da. Dacă auditul arată că problema este structurală sau de pagină, putem continua și cu servicii de web design sau creare site web.",
        },
      ],
    },
    resources: {
      eyebrow: "Resurse utile",
      title: "Direcții care completează un proiect de promovare site",
      intro: "În multe cazuri, promovarea funcționează mai bine când este susținută și de un site mai clar sau de o bază SEO mai bine construită.",
      items: [
        {
          title: "Servicii SEO profesionale",
          description: "Dacă vrei să consolidezi și partea organică și să pui mai multă ordine în structură și relevanță pentru Google.",
          href: "/servicii/optimizare-seo",
          ctaLabel: "Vezi serviciul SEO",
        },
        {
          title: "Creare site web",
          description: "Dacă paginile actuale au nevoie de structură mai bună sau de reconstrucție pentru a susține promovarea.",
          href: "/servicii/creare-site-web",
          ctaLabel: "Vezi serviciul de creare site",
        },
        {
          title: "Formular de contact",
          description: "Dacă vrei să ne trimiți contextul actual și să vedem de unde ar trebui să înceapă promovarea pentru business-ul tău.",
          href: "/contact",
          ctaLabel: "Trimite brief-ul",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Servicii conexe",
      title: "Servicii care susțin mai bine promovarea site-ului",
      description: "Poți continua cu aceste servicii dacă proiectul are nevoie și de pagini mai bune, SEO sau design mai clar pentru canalele de trafic.",
      items: [
        serviceLink("/servicii/optimizare-seo", "Servicii SEO profesionale"),
        serviceLink("/servicii/creare-site-web", "Creare site web"),
        serviceLink("/servicii/web-design", "Web design"),
        serviceLink("/servicii/creare-magazin-online", "Creare magazin online"),
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Spune-ne ce vrei să crească și îți propunem o direcție de promovare mai clară",
      text: "Fie că vrei mai mult trafic, mai multe lead-uri sau pagini mai bune pentru canalele deja active, putem structura promovarea într-un mod mai clar și mai măsurabil.",
      supporting:
        "Ne poți trimite site-ul actual, paginile importante și obiectivele comerciale. Îți răspundem cu o abordare realistă pentru etapa următoare.",
      primary: contactLink("Trimite brief-ul și cere evaluarea"),
      secondary: phoneLink("Discută cu echipa"),
    },
  },
} satisfies Record<NonMobileServiceSlug, ServiceLandingData>;

export const serviceLandingPages = serviceLandingPagesBySlug;
export const serviceLandingPageSlugs = Object.keys(serviceLandingPagesBySlug) as NonMobileServiceSlug[];

export function getServiceLandingPageData(slug: string): ServiceLandingData | undefined {
  return (serviceLandingPagesBySlug as Record<string, ServiceLandingData | undefined>)[slug];
}
