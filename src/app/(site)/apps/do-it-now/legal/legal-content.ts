export const LAST_UPDATED = "2026-03-03";
export const CONTACT_EMAIL = "webdynamicx@gmail.com";

export type Language = "ro" | "en";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type TocItem = {
  id: string;
  label: string;
};

type LanguageContent = {
  pageTitle: string;
  pageSubtitle: string;
  tabRo: string;
  tabEn: string;
  lastUpdatedLabel: string;
  tocTitle: string;
  tocItems: TocItem[];
  privacyTitle: string;
  termsTitle: string;
  privacySections: LegalSection[];
  termsSections: LegalSection[];
};

export const legalContentByLang: Record<Language, LanguageContent> = {
  ro: {
    pageTitle: "DO IT NOW — Politică de confidențialitate & Termeni",
    pageSubtitle:
      "Această pagină conține documentele legale ale aplicației mobile DO IT NOW: Politica de confidențialitate și Termenii și condițiile de utilizare.",
    tabRo: "RO",
    tabEn: "EN",
    lastUpdatedLabel: "Ultima actualizare",
    tocTitle: "Cuprins",
    tocItems: [
      { id: "privacy-policy", label: "Politica de confidențialitate" },
      { id: "terms-and-conditions", label: "Termeni și condiții" },
    ],
    privacyTitle: "Politica de confidențialitate",
    termsTitle: "Termeni și condiții",
    privacySections: [
      {
        id: "privacy-1-introducere",
        title: "1. Introducere",
        paragraphs: [
          "Prezenta Politică de confidențialitate explică modul în care aplicația mobilă DO IT NOW prelucrează datele personale ale utilizatorilor.",
          "Folosind aplicația, confirmi că ai citit și ai înțeles acest document.",
        ],
      },
      {
        id: "privacy-2-cine-suntem",
        title: "2. Cine suntem (operator de date)",
        paragraphs: [
          "Operator de date: [Denumire legală firmă/PFA].",
          "Adresă sediu social: [Adresă sediu social].",
          `Pentru orice solicitare legată de protecția datelor ne poți contacta la ${CONTACT_EMAIL}.`,
        ],
      },
      {
        id: "privacy-3-date-colectate",
        title: "3. Ce date colectăm",
        paragraphs: [
          "Date colectate: Email, Nume și prenume.",
          "Date pe care NU le colectăm: număr de telefon, adresă poștală, locație GPS, contacte, acces la cameră.",
          "Aplicația nu folosește analytics/tracking, nu afișează reclame, nu face remarketing și nu include email marketing/opt-in.",
        ],
      },
      {
        id: "privacy-4-cum-colectam",
        title: "4. Cum colectăm datele",
        paragraphs: [
          "Colectăm datele direct de la tine atunci când îți creezi contul.",
          "Datele pot fi asociate contului atunci când completezi chestionarul pentru recomandări.",
          `Putem primi date și când ne contactezi pe email la ${CONTACT_EMAIL}.`,
        ],
      },
      {
        id: "privacy-5-scopuri-temeiuri",
        title: "5. De ce folosim datele (scopuri) și temeiuri GDPR",
        paragraphs: [
          "Folosim datele pentru furnizarea funcționalităților aplicației (cont, chestionar, recomandări) și pentru suport utilizator.",
          "Temeiuri GDPR: executarea contractului (furnizarea serviciului), interes legitim (securitate și administrare), consimțământ unde este aplicabil.",
          "Nu folosim datele pentru profilare de marketing, tracking comportamental sau publicitate.",
        ],
      },
      {
        id: "privacy-6-stocare",
        title: "6. Stocare și perioadă",
        paragraphs: [
          "Datele sunt păstrate cât timp contul este activ sau până la solicitarea de ștergere, în limita obligațiilor legale.",
          "Aplicăm principiul minimizării și păstrăm doar datele necesare pentru funcționarea aplicației.",
        ],
      },
      {
        id: "privacy-7-divulgare",
        title: "7. Cui divulgăm datele",
        paragraphs: [
          "Nu vindem datele tale personale.",
          "Datele pot fi accesate doar de furnizori tehnici necesari operării aplicației (ex. infrastructură/hosting), în condiții de confidențialitate și securitate.",
        ],
      },
      {
        id: "privacy-8-linkuri-terte",
        title: "8. Linkuri către site-uri terțe",
        paragraphs: [
          "Aplicația include chestionar și recomandări. Dacă dorești achiziție, poți fi redirecționat către un site extern.",
          "Aplicația DO IT NOW nu vinde produse și nu procesează plăți în aplicație.",
          "Site-urile externe au propriile politici de confidențialitate și termeni, care se aplică separat.",
        ],
      },
      {
        id: "privacy-9-drepturi",
        title: "9. Drepturile tale",
        paragraphs: [
          "Ai dreptul de acces, rectificare, ștergere, portabilitate, opoziție și restricționare a prelucrării datelor, conform GDPR.",
          `Pentru exercitarea drepturilor, trimite o solicitare la ${CONTACT_EMAIL}.`,
          "Ai dreptul să depui plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).",
        ],
      },
      {
        id: "privacy-10-securitate",
        title: "10. Securitate",
        paragraphs: [
          "Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor împotriva accesului neautorizat, pierderii sau utilizării abuzive.",
        ],
      },
      {
        id: "privacy-11-minori",
        title: "11. Minori",
        paragraphs: [
          "Aplicația nu este destinată persoanelor cu vârsta sub 13 ani și nu urmărim colectarea intenționată de date de la minori sub această vârstă.",
        ],
      },
      {
        id: "privacy-12-modificari",
        title: "12. Modificări",
        paragraphs: [
          "Putem actualiza această Politică de confidențialitate periodic. Versiunea curentă va fi publicată pe această pagină, cu data ultimei actualizări.",
        ],
      },
      {
        id: "privacy-13-contact",
        title: "13. Contact",
        paragraphs: [
          `Pentru întrebări privind protecția datelor sau această politică, contactează-ne la: ${CONTACT_EMAIL}.`,
        ],
      },
    ],
    termsSections: [
      {
        id: "terms-1-introducere",
        title: "1. Introducere",
        paragraphs: [
          "Acești Termeni și condiții reglementează utilizarea aplicației mobile DO IT NOW.",
          "Prin folosirea aplicației, accepți acești termeni.",
        ],
      },
      {
        id: "terms-2-descriere-serviciu",
        title: "2. Descrierea serviciului",
        paragraphs: [
          "DO IT NOW oferă un chestionar și recomandări orientative pentru echipament de tenis de masă.",
        ],
      },
      {
        id: "terms-3-cont-responsabilitati",
        title: "3. Cont și responsabilități utilizator",
        paragraphs: [
          "Ești responsabil pentru corectitudinea datelor furnizate și pentru păstrarea confidențialității contului tău.",
          "Te obligi să utilizezi aplicația legal și cu bună-credință.",
        ],
      },
      {
        id: "terms-4-recomandari",
        title: "4. Recomandări",
        paragraphs: [
          "Recomandările din aplicație sunt orientative și au rol informativ.",
          "Decizia finală de achiziție și utilizare a produselor aparține exclusiv utilizatorului.",
        ],
      },
      {
        id: "terms-5-link-extern-achizitii",
        title: "5. Link către site extern pentru achiziții",
        paragraphs: [
          "Aplicația nu comercializează produse direct.",
          "Pentru achiziții, utilizatorul poate fi redirecționat către site-uri externe.",
          "DO IT NOW nu procesează plăți în aplicație.",
        ],
      },
      {
        id: "terms-6-proprietate-intelectuala",
        title: "6. Proprietate intelectuală",
        paragraphs: [
          "Conținutul aplicației (texte, structură, elemente vizuale) este protejat de legislația privind proprietatea intelectuală.",
          "Este interzisă copierea sau reutilizarea fără acordul titularului drepturilor.",
        ],
      },
      {
        id: "terms-7-limitarea-raspunderii",
        title: "7. Limitarea răspunderii",
        paragraphs: [
          "Aplicația este furnizată „ca atare”. Nu garantăm funcționarea fără întreruperi sau erori în orice moment.",
          "În limita permisă de lege, nu răspundem pentru prejudicii indirecte rezultate din utilizarea aplicației.",
        ],
      },
      {
        id: "terms-8-modificari-incetare",
        title: "8. Modificări / încetare",
        paragraphs: [
          "Putem modifica termenii sau întrerupe disponibilitatea aplicației, total sau parțial, cu publicarea versiunii actualizate pe această pagină.",
        ],
      },
      {
        id: "terms-9-lege-jurisdictie",
        title: "9. Legea aplicabilă și jurisdicția",
        paragraphs: [
          "Acești termeni sunt guvernați de legea română.",
          "Eventualele litigii se soluționează de instanțele competente din România.",
        ],
      },
      {
        id: "terms-10-contact",
        title: "10. Contact",
        paragraphs: [
          `Pentru întrebări privind acești termeni, ne poți scrie la ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  en: {
    pageTitle: "DO IT NOW — Privacy Policy & Terms",
    pageSubtitle:
      "This page contains the legal documents for the DO IT NOW mobile app: Privacy Policy and Terms & Conditions.",
    tabRo: "RO",
    tabEn: "EN",
    lastUpdatedLabel: "Last updated",
    tocTitle: "Table of contents",
    tocItems: [
      { id: "privacy-policy", label: "Privacy Policy" },
      { id: "terms-and-conditions", label: "Terms & Conditions" },
    ],
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms & Conditions",
    privacySections: [
      {
        id: "privacy-1-introduction",
        title: "1. Introduction",
        paragraphs: [
          "This Privacy Policy explains how the DO IT NOW mobile app processes users' personal data.",
          "By using the app, you confirm that you have read and understood this document.",
        ],
      },
      {
        id: "privacy-2-who-we-are",
        title: "2. Who we are (data controller)",
        paragraphs: [
          "Data controller: [Legal company/Sole Trader name].",
          "Registered address: [Registered office address].",
          `For any data protection request, contact us at ${CONTACT_EMAIL}.`,
        ],
      },
      {
        id: "privacy-3-what-data",
        title: "3. What data we collect",
        paragraphs: [
          "Data collected: Email, First and last name.",
          "Data we do NOT collect: phone number, postal address, GPS location, contacts, camera access.",
          "The app does not use analytics/tracking, does not display ads, does not run remarketing, and does not use email marketing/opt-in.",
        ],
      },
      {
        id: "privacy-4-how-we-collect",
        title: "4. How we collect data",
        paragraphs: [
          "We collect data directly from you when you create an account.",
          "Data may be associated with your account when you complete the questionnaire for recommendations.",
          `We may also receive data when you contact us by email at ${CONTACT_EMAIL}.`,
        ],
      },
      {
        id: "privacy-5-purposes-legal-bases",
        title: "5. Why we use data (purposes) and GDPR legal bases",
        paragraphs: [
          "We use data to provide app features (account, questionnaire, recommendations) and user support.",
          "GDPR legal bases: performance of a contract (service delivery), legitimate interest (security and administration), consent where applicable.",
          "We do not use data for marketing profiling, behavioral tracking, or advertising.",
        ],
      },
      {
        id: "privacy-6-storage-retention",
        title: "6. Storage and retention period",
        paragraphs: [
          "Data is stored while your account is active or until deletion is requested, subject to legal obligations.",
          "We apply data minimization and keep only data necessary for app operation.",
        ],
      },
      {
        id: "privacy-7-disclosure",
        title: "7. Who we share data with",
        paragraphs: [
          "We do not sell your personal data.",
          "Data may only be accessed by technical providers needed to operate the app (e.g., infrastructure/hosting), under confidentiality and security obligations.",
        ],
      },
      {
        id: "privacy-8-third-party-links",
        title: "8. Links to third-party websites",
        paragraphs: [
          "The app includes a questionnaire and recommendations. If you want to purchase products, you may be redirected to an external website.",
          "The DO IT NOW app does not sell products and does not process in-app payments.",
          "External websites have their own privacy policies and terms, which apply separately.",
        ],
      },
      {
        id: "privacy-9-rights",
        title: "9. Your rights",
        paragraphs: [
          "Under GDPR, you have the right of access, rectification, erasure, portability, objection, and restriction of processing.",
          `To exercise your rights, send a request to ${CONTACT_EMAIL}.`,
          "You also have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP).",
        ],
      },
      {
        id: "privacy-10-security",
        title: "10. Security",
        paragraphs: [
          "We implement reasonable technical and organizational measures to protect data against unauthorized access, loss, or misuse.",
        ],
      },
      {
        id: "privacy-11-children",
        title: "11. Children",
        paragraphs: [
          "The app is not intended for children under 13, and we do not intentionally collect data from children under this age.",
        ],
      },
      {
        id: "privacy-12-changes",
        title: "12. Changes",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The current version will be published on this page together with its last update date.",
        ],
      },
      {
        id: "privacy-13-contact",
        title: "13. Contact",
        paragraphs: [
          `For questions about data protection or this policy, contact us at: ${CONTACT_EMAIL}.`,
        ],
      },
    ],
    termsSections: [
      {
        id: "terms-1-introduction",
        title: "1. Introduction",
        paragraphs: [
          "These Terms & Conditions govern the use of the DO IT NOW mobile app.",
          "By using the app, you accept these terms.",
        ],
      },
      {
        id: "terms-2-service-description",
        title: "2. Service description",
        paragraphs: [
          "DO IT NOW provides a questionnaire and informative recommendations for table tennis equipment.",
        ],
      },
      {
        id: "terms-3-account-user-responsibilities",
        title: "3. Account and user responsibilities",
        paragraphs: [
          "You are responsible for the accuracy of the data you provide and for keeping your account credentials confidential.",
          "You agree to use the app lawfully and in good faith.",
        ],
      },
      {
        id: "terms-4-recommendations",
        title: "4. Recommendations",
        paragraphs: [
          "Recommendations in the app are for guidance only and are provided for informational purposes.",
          "The final decision regarding purchases and product use belongs solely to the user.",
        ],
      },
      {
        id: "terms-5-external-purchase-link",
        title: "5. External website link for purchases",
        paragraphs: [
          "The app does not sell products directly.",
          "For purchases, users may be redirected to external websites.",
          "DO IT NOW does not process payments in the app.",
        ],
      },
      {
        id: "terms-6-intellectual-property",
        title: "6. Intellectual property",
        paragraphs: [
          "App content (texts, structure, visual elements) is protected by intellectual property laws.",
          "Copying or reuse is prohibited without the rights holder's permission.",
        ],
      },
      {
        id: "terms-7-limitation-of-liability",
        title: "7. Limitation of liability",
        paragraphs: [
          "The app is provided on an “as is” basis. We do not guarantee uninterrupted or error-free operation at all times.",
          "To the extent permitted by law, we are not liable for indirect damages arising from use of the app.",
        ],
      },
      {
        id: "terms-8-changes-termination",
        title: "8. Changes / termination",
        paragraphs: [
          "We may modify these terms or discontinue app availability, in whole or in part, by publishing the updated version on this page.",
        ],
      },
      {
        id: "terms-9-governing-law-jurisdiction",
        title: "9. Governing law and jurisdiction",
        paragraphs: [
          "These terms are governed by Romanian law.",
          "Any disputes will be settled by the competent courts in Romania.",
        ],
      },
      {
        id: "terms-10-contact",
        title: "10. Contact",
        paragraphs: [
          `For questions regarding these terms, contact us at ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
};
