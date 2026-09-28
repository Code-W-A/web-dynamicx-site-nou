import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { getPortfolioBySlug } from "@/static-data/portfolio";
import type { LeadPageConfig } from "@/components/Leads/types";
import {
  ContactLink,
  LeadCta,
  LeadSelectionProvider,
  StickyLeadCta,
} from "@/components/Leads/interactions";
import LeadForm from "@/components/Leads/form";
import "@/components/Leads/lead-pages.css";

export default function WebCommerceLeadFlow({
  config,
}: {
  config: LeadPageConfig;
}) {
  const hero = getPortfolioBySlug(config.heroProject)!;
  const isShop = config.source === "lead-magazin-online";
  const whatsappHref = `https://wa.me/40774550758?text=${encodeURIComponent(`Salut! Vreau o ofertă pentru ${config.label.toLowerCase()}.`)}`;
  return (
    <LeadSelectionProvider>
      <div className="lead-page" data-kind={isShop ? "shop" : "site"}>
        <section className="lead-hero">
          <div className="lead-wrap lead-hero-grid">
            <div>
              <p className="lead-eyebrow">
                <span />
                Web Dynamicx / {isShop ? "E-commerce" : "Web design"}
              </p>
              <h1>{config.title}</h1>
              <p className="lead-hero-description">{config.description}</p>
              <div className="lead-hero-price">
                De la <strong>{config.startingPrice}</strong>
                <span>Ofertă adaptată proiectului tău</span>
              </div>
              <div className="lead-hero-actions">
                <LeadCta source={config.source} placement="hero">
                  {config.cta}
                </LeadCta>
                <a href="#proiecte" className="lead-text-link">
                  Vezi proiectele <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lead-hero-showcase">
              <div className="lead-browser-bar">
                <span className="lead-browser-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Din portofoliul nostru</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </div>
              <a
                href="#proiecte"
                aria-label={`Descoperă proiectul ${hero.title}`}
              >
                <Image
                  src={config.heroImage || hero.image}
                  alt={hero.imageAlt || hero.title}
                  width={1040}
                  height={780}
                  priority
                  sizes="(max-width: 959px) 100vw, 50vw"
                  className="lead-hero-image"
                />
              </a>
              <div className="lead-hero-caption">
                <strong>{config.heroCaption}</strong>
                <span>Proiect realizat de Web Dynamicx</span>
              </div>
              <div className="lead-showcase-foot">
                <span>01 / {isShop ? "02" : "01"}</span>
                <span>
                  {isShop
                    ? "De la produse la experiența de cumpărare."
                    : "O afacere cu personalitate. Un site pe măsură."}
                </span>
              </div>
            </div>
          </div>
          <div className="lead-wrap">
            <ul className="lead-included-strip">
              {config.included.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proiecte" className="lead-section lead-projects">
          <div className="lead-wrap">
            <div className="lead-section-heading">
              <div>
                <p className="lead-eyebrow">01 / Proiecte reale</p>
                <h2>
                  {isShop
                    ? "Două magazine. Produse diferite. Aceeași atenție la detalii."
                    : "Așa arată o afacere pusă în valoare."}
                </h2>
              </div>
              <p>
                {isShop
                  ? "Vezi cum am abordat un catalog generalist și unul dedicat pieselor auto."
                  : "Studio by Cristian — un exemplu de site în care serviciile și proiectele vorbesc pentru brand."}
              </p>
            </div>
            <div className={isShop ? "lead-project-grid" : ""}>
              {config.projects.map((entry, index) => {
                const project = getPortfolioBySlug(entry.slug)!;
                return (
                  <article
                    className={`lead-project ${!isShop ? "lead-project-featured" : ""}`}
                    key={entry.slug}
                  >
                    <div className="lead-project-image">
                      <Image
                        src={
                          entry.slug === config.heroProject
                            ? config.heroImage || project.image
                            : project.image
                        }
                        alt={project.imageAlt || project.title}
                        width={1040}
                        height={780}
                        sizes={
                          isShop
                            ? "(max-width: 719px) 100vw, 50vw"
                            : "(max-width: 959px) 100vw, 60vw"
                        }
                      />
                    </div>
                    <div className="lead-project-copy">
                      <p className="lead-eyebrow">
                        0{index + 1} / {project.clientLabel}
                      </p>
                      <h3>
                        {isShop
                          ? index === 0
                            ? "D-Toate"
                            : "Auto Detailing Parts"
                          : "Studio by Cristian"}
                      </h3>
                      <p>{entry.description}</p>
                      <ul>
                        {entry.features.map((feature) => (
                          <li key={feature}>
                            <Check size={16} aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="lead-project-links">
                        <a
                          href={`/portofoliu/${entry.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Vezi studiul de caz{" "}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Deschide site-ul{" "}
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="lead-project-cta">
              <p>Ai un proiect în minte? Spune-ne ce vrei să construim.</p>
              <LeadCta source={config.source} placement="portfolio" secondary>
                Discutăm despre proiectul tău
              </LeadCta>
            </div>
          </div>
        </section>

        <section id="preturi" className="lead-section lead-pricing">
          <div className="lead-wrap">
            <div className="lead-section-heading">
              <div>
                <p className="lead-eyebrow">02 / Ce primești și cât costă</p>
                <h2>
                  Un punct de plecare clar.
                  <br />O ofertă pentru ce ai nevoie.
                </h2>
              </div>
              <p>
                Prețurile sunt de pornire. Stabilim costul final după ce
                clarificăm paginile, funcționalitățile și integrările.
              </p>
            </div>
            <div className="lead-price-grid">
              {config.packages.map((item, index) => (
                <article className="lead-price-card" key={item.name}>
                  <span className="lead-package-number">0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p className="lead-package-audience">{item.audience}</p>
                  <p className="lead-package-price">
                    <span>de la</span>
                    {item.price}
                  </p>
                  <LeadCta
                    source={config.source}
                    placement="pricing"
                    packageName={item.name}
                    secondary
                  >
                    Alege {item.name}
                  </LeadCta>
                  <ul>
                    {item.items.map((feature) => (
                      <li key={feature}>
                        <Check size={16} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {item.delivery ? (
                    <p className="lead-delivery">
                      Termen orientativ: <strong>{item.delivery}</strong>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
            <p className="lead-pricing-note">
              {isShop
                ? "Livrare orientativă: 5–10 săptămâni, în funcție de catalog și integrări. Serviciile externe, comisioanele, găzduirea și mentenanța se clarifică în ofertă."
                : "Calendarul depinde de cerințe și de materialele disponibile. Găzduirea după primele 12 luni și mentenanța recurentă se stabilesc separat."}
            </p>
          </div>
        </section>

        <section className="lead-section lead-process">
          <div className="lead-wrap">
            <p className="lead-eyebrow">03 / Cum lucrăm</p>
            <h2>Știi ce urmează, de la prima discuție.</h2>
            <ol>
              <li>
                <span>01</span>
                <h3>Clarificăm proiectul</h3>
                <p>
                  Discutăm despre afacere, obiective și ce ai nevoie. Primești
                  oferta și calendarul propus.
                </p>
              </li>
              <li>
                <span>02</span>
                <h3>Construim împreună</h3>
                <p>
                  Stabilim structura și designul, apoi implementăm. Ai ocazia să
                  oferi feedback pe parcurs.
                </p>
              </li>
              <li>
                <span>03</span>
                <h3>Testăm și lansăm</h3>
                <p>
                  {isShop
                    ? "Verificăm catalogul, comenzile și integrările. Îți arătăm cum administrezi magazinul."
                    : "Verificăm paginile și formularele pe mobil și desktop. Îți arătăm cum actualizezi conținutul."}
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="lead-section lead-contact">
          <div className="lead-wrap lead-contact-grid">
            <div className="lead-contact-copy">
              <p className="lead-eyebrow">04 / Proiectul tău începe aici</p>
              <h2>
                {isShop
                  ? "Ce ai vrea să vinzi online?"
                  : "Hai să dăm afacerii tale un site pe măsură."}
              </h2>
              <p>
                Nu trebuie să ai toate răspunsurile. Spune-ne de unde pornești,
                iar noi te ajutăm să conturezi următorul pas.
              </p>
              <div className="lead-contact-divider" />
              <p className="lead-contact-label">Preferi să discutăm direct?</p>
              <ContactLink
                source={config.source}
                kind="phone"
                href="tel:+40774550758"
                className="lead-contact-phone"
              >
                <Phone size={22} aria-hidden="true" />
                0774 550 758
              </ContactLink>
              <ContactLink
                source={config.source}
                kind="email"
                href="mailto:webdynamicx@gmail.com"
                className="lead-contact-email"
              >
                <Mail size={17} aria-hidden="true" />
                webdynamicx@gmail.com
              </ContactLink>
              <ContactLink
                source={config.source}
                kind="whatsapp"
                href={whatsappHref}
                className="lead-contact-whatsapp"
              >
                Scrie-ne pe WhatsApp{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </ContactLink>
            </div>
            <LeadForm
              config={{
                source: config.source,
                path: config.path,
                thankYouPath: config.thankYouPath,
                formName: config.formName,
                submitEvent: config.submitEvent,
                cta: config.cta,
                packages: config.packages,
                projectTypes: config.projectTypes,
                messageHint: config.messageHint,
              }}
            />
          </div>
        </section>

        <section className="lead-section lead-faq">
          <div className="lead-wrap lead-faq-grid">
            <div>
              <p className="lead-eyebrow">05 / Bine de știut</p>
              <h2>
                Întrebări înainte
                <br />
                de primul pas.
              </h2>
              <LeadCta source={config.source} placement="faq" secondary>
                Discută cu noi
              </LeadCta>
            </div>
            <div>
              {config.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <StickyLeadCta source={config.source} price={config.startingPrice}>
          Cere ofertă
        </StickyLeadCta>
      </div>
    </LeadSelectionProvider>
  );
}
