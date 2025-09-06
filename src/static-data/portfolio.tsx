import { Portfolio } from "@/types/portfolio";
import { v4 as uuid } from "uuid";

const portfolioDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Proiecte realizate pentru clienți din diverse industrii: site-uri,
      magazine online și aplicații cu impact real în business.
    </p>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Ne concentrăm pe calitate, viteză și SEO. Experiență de utilizare
      impecabilă, conținut clar și design modern.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Soluții de marketing
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          SEO tehnic și conținut pentru creșterea vizibilității.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color"> UX/UI orientat pe conversie. </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Magazine online rapide și scalabile.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Integrare cu plăți și servicii terțe.
        </span>
      </li>
    </ul>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Web Dynamicx — rezultate reale prin performanță și strategie.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Soluții de branding
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Identitate vizuală coerentă și comunicare clară pentru un brand memorabil.
    </p>
  </div>
);

export const portfolioData: Portfolio[] = [
  {
    id: uuid(),
    title: "Studio by Cristian - Design & Furniture",
    slug: "studio-by-cristian-design",
    sortDescription:
      "Site premium pentru studio de design interior și mobilier personalizat. Design elegant și prezentare profesională.",
    image: "/images/portofoliu/Studio-by-Cristian-Design&Furniture-portofoliu.webp",
    liveUrl: "https://www.studiobycristian.com/",
    tags: ["web design", "premium"],
    categories: ["design studio"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "FirstTech - Echipamente Industriale",
    slug: "firsttech-echipamente-industriale",
    sortDescription:
      "Platformă B2B pentru echipamente de testare HV/MV/LV și sisteme de monitorizare industrială. Soluții tehnice complete.",
    image: "/images/portofoliu/FirstTech-Echipamente-Industriale-portofoliu.webp",
    liveUrl: "https://www.firsttech.ro/",
    tags: ["web design", "B2B", "industrial"],
    categories: ["corporate"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Alex Relax Hotel",
    slug: "alex-relax-hotel",
    sortDescription:
      "Website de prezentare pentru hotel: camere, facilități și rezervări online.",
    image: "/images/portofoliu/Alex-Relax-Hotel-portofoliu.webp",
    liveUrl: "https://alex-relax-hotel.vercel.app/",
    tags: ["web design", "hospitality"],
    categories: ["hotel"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Juridic Broker — Asigurări",
    slug: "juridic-broker-asigurari",
    sortDescription:
      "Agenție de asigurări: prezentare servicii, lead‑gen și conținut educațional.",
    image: "/images/portofoliu/Juridic-Broker-Asigurari-portofoliu.webp",
    liveUrl: "https://juridic-broker.vercel.app/",
    tags: ["web design", "asigurari"],
    categories: ["servicii"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Promovare Digitală — Marketing",
    slug: "promovare-digitala",
    sortDescription:
      "Site de agenție marketing: servicii, studii de caz, blog și contact rapid.",
    image: "/images/portofoliu/Promovare-Digitala-Marketing-Portofoliu.webp",
    liveUrl: "https://www.promovare-digitala.ro/",
    tags: ["web design", "marketing"],
    categories: ["agenție"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Cristina Zurba — Îndrumare spirituală",
    slug: "cristina-zurba",
    sortDescription:
      "Platformă de conținut: articole, servicii, consultanță și aplicație mobilă.",
    image: "/images/portofoliu/cristina-zurba-portofoliu.webp",
    liveUrl: "https://www.cristinazurba.com/",
    tags: ["web design", "content"],
    categories: ["personal"],
    details: portfolioDetails,
  },
];
