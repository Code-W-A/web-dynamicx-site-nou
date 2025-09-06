import { ArrowRight, BarChart3, Bot, Brush, Code2, Globe, HeartHandshake, Layers, Megaphone, Milestone, PenTool, Rocket, Server, ShoppingCart, Smartphone, Target, Search, Palette, Zap, Settings, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Home/Hero";
import Contact from "@/components/Contact";

const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
    title: "Despre noi — Web Dynamicx | Agenție web design & SEO",
    description: "Află cine suntem și cum livrăm proiecte: web design, creare site de prezentare și magazine online, optimizare SEO și mentenanță de site. Proces, echipă, rezultate.",
    alternates: { canonical: `${siteURL}/despre` },
    openGraph: {
      title: `Despre noi — Web Dynamicx | Agenție web design & SEO | ${siteName}`,
      description: "Află cine suntem și cum livrăm proiecte: web design, creare site de prezentare și magazine online, optimizare SEO și mentenanță de site. Proces, echipă, rezultate.",
      url: `${siteURL}/despre`,
      siteName: siteName,
      locale: "ro_RO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `Despre noi — Web Dynamicx | Agenție web design & SEO | ${siteName}`,
      description: "Află cine suntem și cum livrăm proiecte: web design, creare site de prezentare și magazine online, optimizare SEO și mentenanță de site. Proces, echipă, rezultate.",
    },
};

const aboutHeadline = (
  <>
    Despre <span style={{ color: '#496cf6' }}>Web Dynamicx</span> — agenție de web design, dezvoltare web și SEO
  </>
);

const aboutDescription =
  "Construim site-uri de prezentare și magazine online rapide, optimizate pentru Google, cu optimizare SEO și mentenanță de site incluse.";

const services = [
    {
        icon: <Globe size={32} className="text-white" />,
        title: "Creare Site Web",
        description: "Dezvoltăm site-uri web performante, de la pagini de prezentare la platforme complexe, optimizate pentru conversie.",
        keyword: "creare site web",
        href: "/servicii/creare-site-web",
    },
    {
        icon: <ShoppingCart size={32} className="text-white" />,
        title: "Creare Magazin Online",
        description: "Soluții e-commerce complete pentru magazine online de succes, cu integrări de plată și management de stoc.",
        keyword: "creare magazin online",
        href: "/servicii/creare-magazin-online",
    },
    {
        icon: <Smartphone size={32} className="text-white" />,
        title: "Dezvoltare Aplicații Mobile",
        description: "Construim aplicații mobile native și hibride pentru iOS și Android, oferind o experiență de utilizare excepțională.",
        keyword: "dezvoltare aplicatii mobile",
        href: "/servicii/dezvoltare-aplicatii-mobile",
    },
    {
        icon: <PenTool size={32} className="text-white" />,
        title: "Creare Logo și Branding",
        description: "Definim identitatea vizuală a brandului tău printr-un logo memorabil și un branding coerent.",
        keyword: "creare logo",
        href: "/servicii/creare-logo-branding",
    },
    {
        icon: <Rocket size={32} className="text-white" />,
        title: "Promovare Site (SEO)",
        description: "Creștem vizibilitatea afacerii tale în Google prin strategii SEO avansate și optimizare tehnică.",
        keyword: "promovare site",
        href: "/servicii/optimizare-seo",
    },
    {
        icon: <Layers size={32} className="text-white" />,
        title: "Servicii Creare Site",
        description: "Oferim servicii complete de creare site, de la consultanță și design, la dezvoltare și mentenanță.",
        keyword: "servicii creare site",
        href: "/servicii/web-design",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section - Reusing from Homepage */}
            <Hero
              headline={aboutHeadline}
              description={aboutDescription}
              primaryCtaHref="/portofoliu"
              primaryCtaLabel="Vezi portofoliu"
            />
          
            {/* 2. Secțiunea „Cine suntem” */}
            <section className="bg-gray-50 py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            O agenție construită pe <span style={{ color: '#496cf6' }}>pasiune</span> și <span style={{ color: '#496cf6' }}>expertiză</span>.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            La Web Dynamicx, combinăm creativitatea cu tehnologia pentru a oferi <strong>servicii webdesign</strong> și marketing de excepție. Fie că ai nevoie de un site de prezentare sau de o strategie de <strong>promovare site</strong>, suntem aici să te ajutăm.
                        </p>
                    </div>
                    <div className="mt-12">
                        <div
                            className="mx-auto max-w-3xl rounded-2xl p-8 shadow-md"
                            style={{ backgroundColor: '#496cf6', color: '#ffffff' }}
                        >
                            <p className="text-center text-xl font-medium leading-9">
                                „Misiunea noastră este să transformăm viziunile clienților noștri în realități digitale performante. Credem într-un parteneriat transparent, bazat pe rezultate și comunicare constantă.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

      

            {/* 3. Secțiunea „Serviciile noastre” */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Serviciile noastre
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Acoperim toate nevoile afacerii tale în online — de la strategie și design, la dezvoltare, SEO și suport continuu.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link key={service.title} href={service.href || "#"} className="rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 block">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                                    style={{ backgroundColor: '#496cf6' }}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900 underline">{service.title}</h3>
                                <p className="mt-4 text-base text-gray-600">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Secțiunea „De ce să ne alegi” */}
            <section className="bg-gray-50 py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                De ce Web Dynamicx
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Web Dynamicx este o agenție de <strong>web design</strong>, <strong>creare site</strong> și
                                <strong> SEO</strong> care livrează proiecte rapide, sigure și orientate pe conversie.
                                Combinăm arhitectură de informații clară cu design modern și implementare tehnică
                                solidă, astfel încât website‑ul tău să fie ușor de găsit în Google și simplu de folosit.
                                Lucrăm transparent, pe obiective măsurabile, cu rapoarte periodice și suport dedicat.
                            </p>
                            <ul className="mt-8 space-y-4 text-base text-gray-600">
                                <li className="flex items-center gap-3">
                                    <HeartHandshake className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span>Parteneriat pe termen lung și suport dedicat.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Target className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span>Strategii personalizate, aliniate obiectivelor tale.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Milestone className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span>Transparență în proces și raportare periodică.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BarChart3 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span>Focus pe viteză, UX și Core Web Vitals.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                             <Image
                                src="/images/portofoliu/Studio-by-Cristian-Design&Furniture-portofoliu.webp"
                                alt="Studiu de caz: Studio by Cristian – proiect web design Web Dynamicx"
                                width={600}
                                height={600}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


                  {/* 4.1 Secțiune SEO – imagine stânga, text dreapta */}
                  <section className="bg-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        {/* Imagine stânga */}
                        <div className="order-1">
                            <Image
                                src="/images/portofoliu/FirstTech-Echipamente-Industriale-portofoliu.webp"
                                alt="Exemplu proiect: FirstTech — web design performant și optimizat SEO"
                                width={600}
                                height={600}
                                className="rounded-2xl shadow"
                            />
                        </div>

                        {/* Text dreapta */}
                        <div className="order-2">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Conținut orientat pe SEO, scris pentru oameni
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lucrăm transparent și măsurăm rezultatele prin obiective clare (KPI), rapoarte periodice și iterare bazată pe date. Fiecare proiect de <strong>web design</strong> și <strong>creare site</strong> pornește cu o arhitectură gândită pentru <strong>SEO</strong> și conversie: structură de pagini, ierarhie de <strong>headings</strong>, conținut optimizat și timp de încărcare excelent. Monitorizăm <strong>Core Web Vitals</strong>, comportamentul utilizatorilor și rankingurile din Google pentru a îmbunătăți constant rezultatele — de la trafic organic, la formularul de <strong>contact</strong> și cereri de ofertă.
                            </p>
                            <ul className="mt-8 space-y-4 text-base text-gray-600">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span><strong>Potrivire cu intenția de căutare</strong>: conținutul răspunde clar la întrebări
                                    informaționale, comerciale sau tranzacționale.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span><strong>Cuvinte-cheie secundare (LSI)</strong>: folosim termeni înrudiți pentru a clarifica
                                    contextul și a crește relevanța.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span><strong>Structură de headings</strong> și interlinking inteligent pentru o navigare ușoară
                                    și distribuție corectă a semnalelor SEO.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span><strong>Viteză și Core Web Vitals</strong>: prioritizăm performanța pe mobil și claritatea vizuală
                                    pentru engagement mai bun.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6" style={{ color: '#496cf6' }} />
                                    <span><strong>Măsurare și iterație</strong>: urmărim KPI‑uri și optimizăm continuu pe baza datelor reale.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procesul nostru de lucru */}
            <section className="py-20 md:py-28">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                      Procesul nostru de lucru
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      De la prima discuție până la lansare și mentenanță, urmăm un proces structurat care garantează succesul proiectului tău.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            1
                          </div>
                          <Search className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Analiză & obiective
                        </h3>
                        <p className="text-gray-600">
                          Înțelegem modelul tău de business și publicul țintă pentru a construi o strategie eficientă.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            2
                          </div>
                          <Layers className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Arhitectură & conținut
                        </h3>
                        <p className="text-gray-600">
                          Definim structura de pagini, mesajele cheie și cuvintele-cheie pentru SEO.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            3
                          </div>
                          <Palette className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Design & prototip
                        </h3>
                        <p className="text-gray-600">
                          Creăm un design UX/UI modern, orientat spre conversie și experiența utilizatorului.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            4
                          </div>
                          <Code2 className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Dezvoltare & integrare
                        </h3>
                        <p className="text-gray-600">
                          Implementăm funcționalitățile, integrăm plățile, tracking-ul și respectăm GDPR.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            5
                          </div>
                          <Zap className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          SEO & performanță
                        </h3>
                        <p className="text-gray-600">
                          Aplicăm optimizări tehnice, interlinking și îmbunătățim viteza de încărcare.
                        </p>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="flex items-center mb-6">
                          <div 
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                            style={{ backgroundColor: '#496cf6' }}
                          >
                            6
                          </div>
                          <CheckCircle2 className="h-8 w-8" style={{ color: '#496cf6' }} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Lansare & mentenanță
                        </h3>
                        <p className="text-gray-600">
                          Monitorizăm performanța, oferim update-uri și îmbunătățiri continue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Process Timeline Visual */}
                  <div className="mt-16 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>
                    <div className="text-center">
                      <div 
                        className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium"
                        style={{ backgroundColor: '#496cf6' }}
                      >
                        <Rocket className="h-5 w-5 mr-2" />
                        Proiectul tău este gata să înceapă!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Final CTA - Contact Form */}
            <Contact />
        </div>
    );
}
