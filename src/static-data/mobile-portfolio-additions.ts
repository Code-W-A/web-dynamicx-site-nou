import type { MobileCaseStudy } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";

export const additionalMobileStudies: MobileCaseStudy[] = [
  {
    slug: "operio-tehnicieni",
    cardTitle: "Operio — aplicația tehnicianului",
    h1: "Operio — lucrările zilei, fotografii și semnătură direct din teren",
    shortDescription:
      "Aplicație pentru tehnicieni, conectată la platforma firmei: lucrări alocate, navigare, check-in și documentarea intervenției.",
    metaTitle: "Operio — aplicație mobilă pentru tehnicieni | Web Dynamicx",
    metaDescription:
      "Studiu de caz Operio Android: lucrări alocate, navigare, check-in GPS, fotografii și semnătura clientului în aplicația tehnicianului.",
    tags: ["Echipe în teren", "GPS", "Documentarea lucrării"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=ro.operio.tech",
    image: "/images/portofoliu/studii/operio-mobile-1.webp",
    imageAlt: "Operio: captură publicată în Google Play",
    gallery: [
      {
        src: "/images/portofoliu/studii/operio-mobile-2.webp",
        alt: "Operio: ecran al aplicației pentru tehnicieni, din Google Play",
      },
      {
        src: "/images/portofoliu/studii/operio-mobile-3.webp",
        alt: "Operio: detalii din experiența mobilă publicată",
      },
    ],
    gallerySectionLead:
      "Capturi din listarea publică Google Play. Ecranele ilustrează aplicația, nu rezultate sau volume de activitate ale unui client.",
    context:
      "Tehnicianul are nevoie de adresă, detaliile lucrării și pașii de executat când se află în teren. Operio oferă o interfață mobilă dedicată, în timp ce biroul coordonează activitatea din platforma web.",
    objectives: [
      "Acces la lucrările alocate fără folosirea panoului de administrare web.",
      "Navigare și înregistrarea sosirii la locație.",
      "Păstrarea fotografiilor și a semnăturii în contextul lucrării.",
    ],
    solution:
      "Aplicația Flutter se conectează la platforma Operio prin API. Tehnicianul intră cu un cont creat de firmă și consultă lucrările zilei, viitoare sau finalizate. Fluxul de intervenție include navigare, check-in/check-out, fotografii și semnătura clientului. Astfel, interfața de teren rămâne concentrată pe execuție și documentare.",
    features: [
      "Liste de lucrări: astăzi, viitoare și finalizate",
      "Hartă și navigare către adresă",
      "Check-in și check-out cu localizare",
      "Fotografii asociate intervenției",
      "Semnătura clientului la finalizarea lucrării",
    ],
    technologies: [
      "Flutter pentru aplicația mobilă",
      "API conectat la platforma Laravel",
      "Autentificare cu un cont de tehnician creat de firmă",
      "Aplicație Android publicată în Google Play",
    ],
    impact: [
      "Interfață mobilă dedicată activității tehnicianului.",
      "Date de execuție și documente asociate aceleiași lucrări.",
      "Produs Android publicat, cu legătură directă la platforma firmei.",
    ],
    cardBullets: [
      "Lucrările alocate pe telefon",
      "Navigare și check-in GPS",
      "Fotografii și semnătură pe lucrare",
    ],
    relatedSlugs: [
      "otp-parking-rezervari",
      "ainevoie-market-servicii-curatenie",
    ],
    relatedProjects: [
      {
        href: "/portofoliu-software/operio",
        label: "Operio — platforma software",
      },
      {
        href: "/portofoliu/operio-website",
        label: "Operio — website-ul de produs",
      },
    ],
    ctaLabel: "Vreau o aplicație pentru echipa mea",
    status: "Publicată în Google Play",
    serviceLinkPhrase: "aplicații mobile pentru echipe în teren",
  },
  {
    slug: "otp-parking-rezervari",
    cardTitle: "OTP Parking — rezervări pe mobil",
    h1: "OTP Parking — rezervarea locului de parcare, direct de pe telefon",
    shortDescription:
      "Aplicație pentru clienții parcării: alegerea perioadei, estimarea tarifului, opțiuni de plată și acces la rezervările proprii.",
    metaTitle: "OTP Parking — aplicație mobilă de rezervări | Web Dynamicx",
    metaDescription:
      "Studiu de caz OTP Parking Android: rezervare parcare, perioadă și tarif, opțiuni de plată, vehicule și istoricul rezervărilor.",
    tags: ["Rezervări", "Parcare", "Plăți"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=ro.otpparking.mobile",
    image: "/images/portofoliu/studii/parking-mobile-1.webp",
    imageAlt: "OTP Parking: captură din aplicația publicată în Google Play",
    gallery: [
      {
        src: "/images/portofoliu/studii/parking-mobile-2.webp",
        alt: "OTP Parking: interfața mobilă din listarea Google Play",
      },
      {
        src: "/images/portofoliu/studii/parking-mobile-3.webp",
        alt: "OTP Parking: ecran din parcursul clientului pe telefon",
      },
    ],
    gallerySectionLead:
      "Capturi publicate în Google Play, care prezintă experiența mobilă a clientului.",
    context:
      "Clientul unei parcări de aeroport vrea să stabilească perioada, să înțeleagă tariful și să regăsească rezervarea înainte de plecare. Aplicația OTP Parking aduce aceste acțiuni într-un canal mobil dedicat.",
    objectives: [
      "Rezervare pornind de la data și ora intrării și ieșirii.",
      "Prezentarea tarifului și a opțiunilor de plată înainte de finalizare.",
      "Acces la rezervări, vehicule și date de facturare din cont.",
    ],
    solution:
      "Aplicația React Native conectează fluxul de rezervare la sistemul parcării. Utilizatorul alege intervalul, vede tariful estimat și continuă cu opțiunea de plată disponibilă. Contul păstrează accesul la rezervările viitoare și istoricul lor, împreună cu datele de contact, vehiculele și informațiile de facturare.",
    features: [
      "Alegerea datei și orei de intrare și ieșire",
      "Estimarea tarifului pentru perioada aleasă",
      "Plată online sau la parcare, conform opțiunilor disponibile",
      "Rezervări viitoare și istoric",
      "Gestionarea vehiculelor și a datelor de facturare",
    ],
    technologies: [
      "React Native și Expo",
      "Integrare cu sistemul de rezervări și conturi",
      "Flux de plată conectat la serviciile platformei",
      "Aplicație Android publicată în Google Play",
    ],
    impact: [
      "Rezervarea parcării disponibilă într-o aplicație dedicată.",
      "Informațiile de rezervare și cont accesibile de pe telefon.",
      "Același sistem operațional susține canalul web și canalul mobil.",
    ],
    cardBullets: [
      "Perioadă și tarif înainte de rezervare",
      "Opțiuni de plată și date de facturare",
      "Rezervări viitoare și istoric",
    ],
    relatedSlugs: ["operio-tehnicieni", "styleconnect-rezervari-saloane"],
    relatedProjects: [
      {
        href: "/portofoliu-software/otp-parking",
        label: "OTP Parking — platforma și integrările",
      },
    ],
    ctaLabel: "Vreau o aplicație de rezervări",
    status: "Publicată în Google Play",
    serviceLinkPhrase: "aplicații mobile pentru rezervări și servicii",
  },
];
