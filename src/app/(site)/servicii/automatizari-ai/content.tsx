import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Mail,
  FileText,
  GitBranch,
  Database,
  UserCheck,
  Send,
  Check,
  CalendarDays,
  Headphones,
  BarChart3,
  Settings2,
  Layers3,
  Sparkles,
  Plus,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import Breadcrumbs, {
  type BreadcrumbItem,
} from "@/components/Common/Breadcrumbs";
import { softwarePortfolio } from "@/static-data/portfolio-additions";
import Calculator from "./calculator";
import ContactForm from "./contact-form";
import MobileCta from "./mobile-cta";
import { aiFaqs } from "./data";
import styles from "./page.module.css";

const problems = [
  [
    "Copiere manuală de date",
    "Date mutate între email, Excel, CRM sau alte aplicații.",
  ],
  [
    "Lead-uri urmărite manual",
    "Solicitări care trebuie citite, calificate, repartizate și urmărite de fiecare dată.",
  ],
  [
    "Aceleași răspunsuri iar și iar",
    "Întrebări, solicitări sau documente similare procesate manual.",
  ],
  [
    "Rapoarte construite manual",
    "Date colectate periodic din mai multe surse și centralizate de o persoană.",
  ],
];
const capabilities = [
  {
    icon: GitBranch,
    title: "Lead-uri & vânzări",
    text: "Preluare lead, calificare, completare CRM, notificarea echipei și follow-up.",
    flow: "Formular → calificare → CRM → răspuns → follow-up",
  },
  {
    icon: FileText,
    title: "Email & documente",
    text: "Clasificarea emailurilor, extragerea datelor din documente și trimiterea lor către procesul potrivit.",
    flow: "Email → AI → date structurate → responsabil",
  },
  {
    icon: Headphones,
    title: "Customer support",
    text: "Răspunsuri bazate pe informațiile companiei și escaladarea către un operator atunci când este necesar.",
    flow: "Întrebare → bază de cunoștințe → răspuns / operator",
  },
  {
    icon: CalendarDays,
    title: "Programări & remindere",
    text: "Colectarea datelor, programare, confirmări, notificări și reprogramări.",
    flow: "Solicitare → disponibilitate → programare → reminder",
  },
  {
    icon: BarChart3,
    title: "Rapoarte & date",
    text: "Colectarea automată a informațiilor din mai multe sisteme și generarea rapoartelor recurente.",
    flow: "Surse multiple → procesare → dashboard / raport",
  },
  {
    icon: Settings2,
    title: "Operațiuni interne",
    text: "Sincronizări între aplicații, task-uri, aprobări, alerte și fluxuri administrative.",
    flow: "Trigger → reguli → acțiune → verificare",
  },
];
const industries = [
  [
    "Auto / Service / ITP",
    [
      "Programări",
      "Remindere pentru clienți",
      "Solicitări",
      "Documente",
      "Follow-up",
      "Actualizarea datelor",
    ],
  ],
  [
    "Parcări",
    [
      "Solicitări și rezervări",
      "Confirmări",
      "Date despre perioada rezervării",
      "Notificarea personalului",
      "Comunicarea cu clientul",
    ],
  ],
  [
    "Transport & logistică",
    [
      "Documente",
      "Solicitări",
      "Alocări",
      "Raportări",
      "Statusuri",
      "Notificări interne",
    ],
  ],
  [
    "E-commerce",
    [
      "Întrebări clienți",
      "Comenzi",
      "Status",
      "Retururi",
      "Lead recovery",
      "Rapoarte",
    ],
  ],
  [
    "Servicii & programări",
    ["Calificarea solicitării", "Calendar", "Remindere", "Follow-up", "CRM"],
  ],
  [
    "B2B / Operațiuni",
    ["Inbox", "Documente", "CRM", "Rapoarte", "Aprobări", "Task-uri recurente"],
  ],
] as const;
const steps = [
  { icon: FileText, title: "Lead nou", text: "Formular website" },
  {
    icon: Sparkles,
    title: "Date analizate",
    text: "AI identifică serviciul și informațiile relevante",
  },
  {
    icon: GitBranch,
    title: "Lead calificat",
    text: "Se aplică reguli definite împreună cu firma",
  },
  {
    icon: Database,
    title: "CRM actualizat",
    text: "Datele sunt înregistrate automat",
  },
  {
    icon: Mail,
    title: "Răspuns pregătit",
    text: "Este generat draftul potrivit",
  },
  {
    icon: UserCheck,
    title: "Aprobare",
    text: "Un om verifică unde procesul o cere",
  },
  {
    icon: Send,
    title: "Follow-up",
    text: "Dacă lead-ul nu răspunde, fluxul continuă automat",
  },
];
const process = [
  [
    "Analiză",
    "Înțelegem procesul actual, aplicațiile folosite și unde se pierde timpul.",
  ],
  [
    "Proiectare",
    "Stabilim ce automatizăm, unde folosim AI și unde trebuie păstrată aprobarea umană.",
  ],
  [
    "Implementare",
    "Conectăm sistemele, construim workflow-ul și îl testăm pe scenarii reale.",
  ],
  [
    "Monitorizare & optimizare",
    "Urmărim funcționarea sistemului și îl ajustăm pe măsură ce procesul evoluează.",
  ],
];
const integrations = [
  "Gmail",
  "Google Sheets",
  "Google Drive",
  "Microsoft 365",
  "CRM",
  "WhatsApp Business",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "API-uri custom",
  "Make",
  "n8n",
  "Baze de date",
  "Aplicații interne",
];

function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
function HeroWorkflow() {
  const nodes = [
    {
      icon: Mail,
      label: "Solicitare nouă",
      text: "Email / Formular / WhatsApp",
    },
    { icon: Sparkles, label: "AI", text: "Analizează și structurează" },
    { icon: Database, label: "CRM", text: "Actualizare automată" },
    { icon: FileText, label: "Răspuns", text: "Draft pregătit" },
    {
      icon: UserCheck,
      label: "Aprobare umană",
      text: "Control înainte de continuare",
    },
    { icon: Send, label: "Follow-up", text: "Următorul pas în proces" },
  ];
  return (
    <div className={styles.system}>
      <div className={styles.systemBar}>
        <span>
          <i /> WORKFLOW / 01
        </span>
        <span>Exemplu de flux posibil</span>
      </div>
      <ol className={styles.nodes}>
        {nodes.map(({ icon: Icon, label, text }, i) => (
          <li key={label} className={i === 4 ? styles.humanNode : ""}>
            <span className={styles.nodeIcon}>
              <Icon size={20} aria-hidden="true" />
            </span>
            <div>
              <strong>{label}</strong>
              <span>{text}</span>
            </div>
            {i === 4 ? (
              <span className={styles.review}>Verificare</span>
            ) : (
              <Check
                size={16}
                className={styles.nodeCheck}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
      <div className={styles.systemFooter}>
        <Layers3 size={14} aria-hidden="true" /> Sisteme conectate. Pași
        vizibili. Control uman.
      </div>
    </div>
  );
}

export default function AiAutomationContent({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbItem[];
}) {
  const projects = softwarePortfolio.filter((p) => p.slug === "itp-white-label");
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <Breadcrumbs items={breadcrumbs} compact />
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>
                AI & AUTOMATIZĂRI PENTRU COMPANII
              </p>
              <h1>
                Automatizăm munca repetitivă.
                <br />
                <span>Echipa ta rămâne concentrată pe ce produce valoare.</span>
              </h1>
              <p className={styles.heroText}>
                Construim automatizări personalizate care conectează AI-ul cu
                instrumentele pe care compania ta le folosește deja — email,
                CRM, website, documente, programări, rapoarte și operațiuni
                interne.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#ai-contact">
                  Spune-ne ce vrei să automatizezi{" "}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className={styles.secondary} href="#ai-exemple">
                  Vezi exemple de automatizări{" "}
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <p className={styles.note}>
                Discuție inițială • analizăm procesul • primești o direcție
                clară
              </p>
              <div className={styles.badges}>
                {["Lead-uri", "Email & documente", "Operațiuni"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <HeroWorkflow />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="UNDE SE PIERDE TIMPUL?"
            title="Dacă echipa repetă același proces în fiecare zi, probabil poate fi automatizat."
          >
            Automatizarea nu începe cu AI-ul. Începe cu identificarea sarcinilor
            repetitive care consumă timp și pot fi transformate într-un flux
            predictibil.
          </Heading>
          <div className={styles.grid4}>
            {problems.map(([title, text], i) => (
              <article key={title} className={styles.problem}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-exemple" className={`${styles.section} ${styles.soft}`}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="AUTOMATIZĂRI PERSONALIZATE"
            title="Ce poate prelua un sistem automat pentru compania ta"
          />
          <div className={styles.grid3}>
            {capabilities.map(({ icon: Icon, title, text, flow }) => (
              <article className={styles.card} key={title}>
                <span className={styles.icon}>
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.flowText}>{flow}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="CUM ARATĂ ÎN PRACTICĂ"
            title="De la solicitare la acțiune, fără pașii manuali dintre ele"
          />
          <div className={styles.demoHeader}>
            <span className={styles.demoBadge}>Exemplu de flux posibil</span>
            <p>Un client completează un formular.</p>
          </div>
          <ol className={styles.workflow}>
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <span className={styles.stepIndex}>0{i + 1}</span>
                <Icon size={23} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.demoNote}>
            <UserCheck size={18} aria-hidden="true" /> Regulile și punctele de
            aprobare se stabilesc pentru procesul companiei tale.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="ADAPTAT BUSINESS-ULUI"
            title="Aceeași tehnologie. Procese diferite pentru fiecare companie."
          >
            Exemple de utilizare, adaptate după analiza procesului și a
            sistemelor disponibile.
          </Heading>
          <div className={styles.grid3}>
            {industries.map(([title, items], i) => (
              <article className={styles.industry} key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={14} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="O IMAGINE MAI CLARĂ A PROCESULUI"
            title="Cât timp consumă procesul manual?"
          />
          <Calculator />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="DE LA PROCES LA AUTOMATIZARE"
            title="Începem cu problema, nu cu instrumentul"
          />
          <div className={styles.grid4}>
            {process.map(([title, text], i) => (
              <article className={styles.process} key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="LUCRĂM CU SISTEMELE EXISTENTE"
            title="Nu trebuie să înlocuiești tot software-ul firmei"
          >
            În multe situații putem conecta automatizarea la instrumentele deja
            folosite de companie prin API-uri, webhook-uri sau integrări
            dedicate.
          </Heading>
          <ul className={styles.integrations}>
            {integrations.map((name) => (
              <li key={name}>
                <Layers3 size={19} aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Heading title="AI acolo unde ajută. Reguli clare acolo unde contează." />
          <div className={styles.grid3}>
            {[
              {
                icon: GitBranch,
                title: "Automatizare",
                text: "Pașii previzibili pot fi executați prin reguli, API-uri și workflow-uri.",
              },
              {
                icon: Sparkles,
                title: "AI",
                text: "AI-ul poate analiza limbaj, emailuri, documente sau informații care nu vin într-un format fix.",
              },
              {
                icon: UserCheck,
                title: "Control uman",
                text: "Pentru acțiunile importante pot exista puncte de aprobare înainte ca sistemul să continue.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.card}>
                <span className={styles.icon}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className={styles.controlFlow}>
            Automat <ArrowRight aria-hidden="true" size={16} /> verificare
            necesară <ArrowRight aria-hidden="true" size={16} /> om{" "}
            <ArrowRight aria-hidden="true" size={16} /> continuă
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={styles.wrap}>
          <Heading
            eyebrow="EXPERIENȚĂ WEBDYNAMICX"
            title="Automatizarea este software. Iar software-ul trebuie construit să funcționeze în business-ul real."
          >
            WebDynamicX dezvoltă website-uri, aplicații mobile, backend-uri și
            produse digitale personalizate. Automatizările AI extind această
            experiență prin conectarea proceselor și sistemelor pe care
            companiile le folosesc deja.
          </Heading>
          <h3 className={styles.portfolioTitle}>
            Experiență în dezvoltare de produse digitale
          </h3>
          <div className={styles.grid2}>
            {projects.map((project) => (
              <article className={styles.project} key={project.slug}>
                <Image
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  width={900}
                  height={600}
                  sizes="(max-width: 719px) 100vw, 720px"
                />
                <div>
                  <span className={styles.projectStatus}>{project.status}</span>
                  <h3>
                    <Link href={`/portofoliu-software/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.sortDescription}</p>
                  <p className={styles.caption}>
                    {project.gallery?.[0]?.caption}
                  </p>
                  <Link
                    className={styles.textLink}
                    href={`/portofoliu-software/${project.slug}`}
                  >
                    Vezi studiul de caz{" "}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link className={styles.secondary} href="/portofoliu-software">
            Explorează portofoliul software{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.narrow}>
          <Heading
            eyebrow="CLARITATE ÎNAINTE DE IMPLEMENTARE"
            title="Întrebări frecvente despre automatizările AI"
          />
          <div className={styles.faq}>
            {aiFaqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ai-contact"
        className={`${styles.section} ${styles.contact}`}
      >
        <div className={`${styles.wrap} ${styles.contactGrid}`}>
          <div>
            <Heading
              eyebrow="AI & AUTOMATIZĂRI WEBDYNAMICX"
              title="Spune-ne ce proces îți consumă timpul. Vedem dacă merită automatizat."
            >
              Nu trebuie să știi ce tehnologie este necesară. Descrie-ne simplu
              ce face echipa manual, iar noi analizăm cum ar putea arăta fluxul
              automatizat.
            </Heading>
            <div className={styles.direct}>
              <a href="tel:+40774550758">
                <Phone size={20} aria-hidden="true" />
                0774 550 758
              </a>
              <a href="mailto:webdynamicx@gmail.com">
                <Mail size={20} aria-hidden="true" />
                webdynamicx@gmail.com
              </a>
            </div>
          </div>
          <div id="ai-contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
      <MobileCta />
    </div>
  );
}
