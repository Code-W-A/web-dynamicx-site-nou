import type { LeadPageConfig } from "@/components/Leads/types";

export const leadPath = "/leads/creare-magazin-online";
export const contactData = {
  phoneDisplay: "0774 550 758",
  phoneHref: "tel:+40774550758",
  whatsappHref:
    "https://wa.me/40774550758?text=Salut!%20Vreau%20o%20oferta%20pentru%20creare%20magazin%20online.",
  email: "webdynamicx@gmail.com",
  emailHref: "mailto:webdynamicx@gmail.com",
};

export const leadConfig: LeadPageConfig = {
  source: "lead-magazin-online",
  path: leadPath,
  thankYouPath: "/multumim-magazin-online",
  formName: "lead_magazin_online_form",
  submitEvent: "lead_magazin_online_form_submit",
  label: "Creare magazin online",
  title: "Creare magazin online, de la catalog la comandă",
  description:
    "Produse ușor de găsit, pași clari pentru comandă și administrare simplă. Construim magazinul în jurul produselor tale și al modului în care vinzi.",
  cta: "Cere ofertă pentru magazin",
  startingPrice: "4.000 lei",
  heroProject: "d-toate-magazin-online",
  heroCaption: "D-Toate · Magazin online cu produse diverse",
  projects: [
    {
      slug: "d-toate-magazin-online",
      description:
        "Un catalog variat, organizat în categorii clare. Pagini de produs și un parcurs de cumpărare care ajută vizitatorul să se orienteze.",
      features: [
        "Categorii de produse",
        "Pagini de produs",
        "Parcurs către comandă",
      ],
    },
    {
      slug: "auto-detailing-parts",
      description:
        "Un magazin de piese și accesorii auto, cu accent pe organizarea catalogului și găsirea produselor potrivite.",
      features: [
        "Catalog de piese auto",
        "Navigare pe categorii",
        "Experiență pe mobil",
      ],
    },
  ],
  included: [
    "Design pentru mobil și desktop",
    "Catalog și pagini de produs",
    "Plăți online și livrare",
    "Administrare produse și comenzi",
  ],
  packages: [
    {
      name: "Magazin de start",
      price: "4.000 lei",
      audience: "Pentru primul tău magazin și un catalog esențial.",
      items: [
        "Catalog de produse",
        "Configurare plăți online",
        "Integrare curieri",
        "Administrare produse și comenzi",
      ],
    },
    {
      name: "Magazin business",
      price: "7.000 lei",
      audience: "Pentru un catalog mai mare și procese conectate.",
      items: [
        "Filtrare avansată",
        "Promoții",
        "Automatizări",
        "Integrare CRM / ERP, conform cerințelor",
      ],
    },
    {
      name: "E-commerce avansat",
      price: "12.000 lei",
      audience: "Pentru cerințe specifice și integrări multiple.",
      items: [
        "Funcționalități personalizate",
        "Integrări API",
        "Automatizări extinse",
        "Plan de dezvoltare după lansare",
      ],
    },
  ],
  projectTypes: [
    "Magazin nou",
    "Refacere magazin existent",
    "Migrare magazin",
    "Integrări și funcții noi",
  ],
  messageHint: "Ce produse vinzi? Ai deja un magazin sau pornești de la zero?",
  faqs: [
    {
      question: "Cât durează lansarea unui magazin?",
      answer:
        "Orientativ, 5–10 săptămâni, în funcție de catalog, materiale și integrări. Calendarul final se stabilește după analiza cerințelor; proiectele complexe pot dura mai mult.",
    },
    {
      question: "Ce plăți și curieri pot folosi?",
      answer:
        "Alegem împreună serviciile potrivite și verificăm integrarea cu platforma magazinului. Abonamentele și comisioanele furnizorilor se clarifică separat de costul implementării.",
    },
    {
      question: "Pot administra singur produsele și comenzile?",
      answer:
        "Da. Magazinul include administrarea produselor și comenzilor, iar la predare îți explicăm pașii uzuali de lucru.",
    },
    {
      question: "Puteți reface sau migra un magazin existent?",
      answer:
        "Da. Verificăm platforma, produsele, datele și adresele existente înainte să stabilim ce se poate transfera și cum organizăm migrarea.",
    },
    {
      question: "Ce include suportul după lansare?",
      answer:
        "Stabilim în ofertă perioada de suport și ce acoperă. Mentenanța recurentă, găzduirea și dezvoltările ulterioare se discută separat.",
    },
  ],
};
