import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectLink } from "@/components/Leads/interactions";

const views = [
  {
    src: "/images/leads/studio-design.webp",
    alt: "Website Studio by Cristian: pagina Design, cu navigare și descrierea serviciului",
    caption: "Servicii prezentate clar.",
    detail: "Pagina dedicată serviciului de design interior.",
    width: 1440,
    height: 1000,
  },
  {
    src: "/images/leads/studio-satkara.webp",
    alt: "Website Studio by Cristian: pagina proiectului Satkara Restaurant din Amsterdam",
    caption: "Lucrări puse în valoare.",
    detail: "O pagină proprie pentru proiectul Satkara Restaurant.",
    width: 1440,
    height: 1000,
  },
  {
    src: "/images/leads/studio-design-mobile.webp",
    alt: "Pagina Design a website-ului Studio by Cristian, afișată la lățimea mobilă de 390 pixeli",
    caption: "Experiență adaptată pe mobil.",
    detail: "Aceeași pagină Design, cu meniu și text adaptate ecranului mobil.",
    width: 390,
    height: 844,
  },
];

export default function StudioSiteExample() {
  return (
    <section id="proiecte" className="lead-section lead-projects">
      <div className="lead-wrap">
        <div className="lead-section-heading">
          <div>
            <p className="lead-eyebrow">Proiect selectat</p>
            <h2>
              Studio by Cristian: servicii și proiecte într-o prezentare
              coerentă.
            </h2>
          </div>
          <p>
            Un website pentru design interior și mobilier, cu pagini dedicate
            serviciilor, prezentarea lucrărilor și acces la contact.
          </p>
        </div>
        <div className="lead-studio-views">
          {views.map((view) => (
            <figure key={view.src}>
              <div className="lead-studio-screen">
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={view.width}
                  height={view.height}
                  sizes={
                    view.width === 390
                      ? "(max-width: 719px) 240px, 200px"
                      : "(max-width: 719px) 90vw, (max-width: 959px) 45vw, 440px"
                  }
                />
              </div>
              <figcaption>
                <strong>{view.caption}</strong>
                <span>{view.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="lead-studio-note">
          <ProjectLink>
            Vezi site-ul realizat <ArrowUpRight size={16} aria-hidden="true" />
          </ProjectLink>
          <p>
            Proiectul prezentat are cerințe proprii. Oferta pentru afacerea ta
            se stabilește în funcție de paginile și funcționalitățile necesare.
          </p>
        </div>
      </div>
    </section>
  );
}
