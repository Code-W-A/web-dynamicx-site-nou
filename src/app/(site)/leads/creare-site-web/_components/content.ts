import type { LeadPageConfig } from "@/components/Leads/types";

export const leadPath = "/leads/creare-site-web";
export const contactData = {
  phoneDisplay: "0774 550 758",
  phoneHref: "tel:+40774550758",
  whatsappHref:
    "https://wa.me/40774550758?text=Salut!%20Vreau%20o%20oferta%20pentru%20creare%20site%20web.",
  email: "webdynamicx@gmail.com",
  emailHref: "mailto:webdynamicx@gmail.com",
};

export const leadConfig: LeadPageConfig = {
  source: "lead-web-site",
  path: leadPath,
  thankYouPath: "/multumim-site-web",
  formName: "lead_web_site_form",
  submitEvent: "lead_web_site_form_submit",
  label: "Creare site web",
  title: "Creare site web pentru firme, de la 1.800 lei",
  description:
    "Prezintă-ți serviciile profesionist și fă-le clienților mai ușor să te contacteze. Realizăm site-uri adaptate afacerii tale, pe mobil și desktop.",
  cta: "Cere ofertă pentru site",
  startingPrice: "1.800 lei",
  heroProject: "studio-by-cristian-design",
  heroImage: "/images/leads/studio-by-cristian.webp",
  heroCaption: "Studio by Cristian — website realizat de WebDynamicX",
  projects: [
    {
      slug: "studio-by-cristian-design",
      description:
        "Pentru un studio de design, încrederea începe cu ceea ce vezi. Am pus serviciile și proiectele în centrul experienței, cu un traseu clar către contact.",
      features: [
        "Servicii ușor de explorat",
        "Proiecte prezentate vizual",
        "Contact la îndemână",
      ],
    },
  ],
  included: [
    "Găzduire inclusă 12 luni.",
    "Formular de contact.",
    "Administrarea conținutului.",
  ],
  packages: [
    {
      name: "Start Up Pro",
      price: "1.800 lei",
      audience: "Site de prezentare esențial",
      delivery: "1–2 săptămâni",
      items: [
        "Maximum 4 pagini",
        "Design personalizat și conținut",
        "Formular de contact",
        "Găzduire inclusă 12 luni",
        "Suport inițial: 2 săptămâni",
      ],
    },
    {
      name: "Business Pro",
      price: "3.300 lei",
      audience: "Mai multe servicii și pagini",
      delivery: "2–4 săptămâni",
      items: [
        "Maximum 8 pagini",
        "Design personalizat și elemente de branding",
        "Blog și integrare newsletter",
        "Găzduire inclusă 12 luni",
        "Suport inițial: 1 lună",
      ],
    },
    {
      name: "Enterprise Pro",
      price: "5.500 lei",
      audience: "Funcționalități avansate",
      delivery: "4–8 săptămâni",
      items: [
        "Maximum 16 pagini",
        "Layouturi și secțiuni avansate",
        "Cont client și sistem de comandă",
        "Găzduire inclusă 12 luni",
        "Suport inițial: 3 luni",
      ],
    },
  ],
  projectTypes: [
    "Site de prezentare",
    "Refacere site existent",
    "Landing page",
    "Platformă custom",
    "Site la abonament",
  ],
  messageHint:
    "Cu ce se ocupă afacerea ta și ce ai nevoie să prezinte site-ul?",
  faqs: [
    {
      question: "Cât durează realizarea site-ului?",
      answer:
        "Orientativ: 1–2 săptămâni pentru Start Up Pro, 2–4 pentru Business Pro și 4–8 pentru Enterprise Pro. Stabilim calendarul după ce clarificăm paginile, funcțiile și materialele disponibile.",
    },
    {
      question: "Ce trebuie să pregătesc?",
      answer:
        "O descriere a afacerii, serviciile, datele de contact și materialele pe care le ai: logo, fotografii sau exemple de site-uri. Clarificăm împreună ce mai lipsește înainte de implementare.",
    },
    {
      question: "Pot modifica singur conținutul?",
      answer:
        "Da, pachetele includ administrarea conținutului. Stabilim de la început ce vei putea actualiza și îți explicăm cum se folosește la predare.",
    },
    {
      question: "Ce se întâmplă după lansare?",
      answer:
        "Ai suportul inițial indicat în pachet. Mentenanța recurentă și costul găzduirii după primele 12 luni se stabilesc separat, în ofertă.",
    },
    {
      question: "Există și o variantă la abonament?",
      answer:
        "Da, pentru site-uri de prezentare există și opțiunea unui abonament. Alege «Site la abonament» în detaliile opționale ale formularului și îți explicăm costul lunar, ce include și condițiile.",
    },
  ],
};
