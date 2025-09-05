import { footerNewsData, footerQuickLinks } from "@/static-data/footer";
import { serviceData } from "@/static-data/service";
import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterLinkItem from "./FooterLinkItem";
import Graphic from "./Graphic";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black pb-12 pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <FooterContact />
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-10">
              <h3 className="mb-9 text-xl font-semibold text-white">Servicii</h3>
              <ul className="space-y-3">
                {/* Servicii principale */}
                <FooterLinkItem
                  linkItem={{ id: "creare-site-prezentare", title: "Creare site de prezentare", href: "/servicii/creare-site-prezentare", external: false }}
                />
                <FooterLinkItem
                  linkItem={{ id: "creare-magazin-online", title: "Creare magazin online", href: "/servicii/creare-magazin-online", external: false }}
                />
                <FooterLinkItem
                  linkItem={{ id: "optimizare-seo", title: "Servicii SEO profesionale", href: "/servicii/optimizare-seo", external: false }}
                />
                <FooterLinkItem
                  linkItem={{ id: "mentenanta-website", title: "Mentenanță website", href: "/servicii/mentenanta-website", external: false }}
                />
                {/* Toate serviciile */}
                {serviceData.map((svc) => (
                  <FooterLinkItem
                    key={svc?.slug}
                    linkItem={{ id: svc.slug, title: svc.title, href: `/servicii/${svc.slug}`, external: false }}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-2/12">
            <div className="mb-10">
              <h3 className="mb-9 text-xl font-semibold text-white">Pagini</h3>
              <ul className="space-y-3">
                {footerNewsData.map((linkItem) => (
                  <FooterLinkItem key={linkItem?.id} linkItem={linkItem} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-10">
              <h3 className="mb-9 text-xl font-semibold text-white">Legal</h3>
              <ul className="space-y-3">
                {footerQuickLinks.map((linkItem) => (
                  <FooterLinkItem key={linkItem?.id} linkItem={linkItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>

      <Graphic />
    </footer>
  );
}
