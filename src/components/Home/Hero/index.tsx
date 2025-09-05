import Link from "next/link";
import HeroClients from "./HeroClients";
import HeroImage from "./HeroImage";

type HeroProps = {
  headline?: React.ReactNode;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
};

export default function Hero({
  headline,
  description,
  primaryCtaHref = "/portofoliu",
  primaryCtaLabel = "Vezi portofoliu",
}: HeroProps) {
  const defaultHeadline = (
    <>
     <span style={{ color: '#496cf6' }}>Web Dynamicx</span> — Servicii web design și dezvoltare web — site-uri rapide, optimizate SEO
    </>
  );

  const defaultDescription =
    "Realizăm site-uri de prezentare și magazine online cu optimizare SEO, ca să fii ușor de găsit în Google și să convertești mai bine. Asigurăm mentenanță de site și promovare online.";

  return (
    <div
      id="home"
      className="relative bg-white pt-[90px] pb-20 lg:pt-[150px] lg:pb-[110px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="hero-content">
              <h1 className="text-dark mb-3 text-4xl leading-snug font-bold sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                {headline ?? defaultHeadline}
              </h1>
              <p className="text-body-color mb-8 max-w-[480px] text-base">
                {description ?? defaultDescription}
              </p>
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <Link
                    href={primaryCtaHref}
                    className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-10 py-4 text-center text-base font-normal text-white lg:px-8 xl:px-10"
                  >
                    Vezi portofoliu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicii/creare-site-prezentare"
                    className="text-primary hover:text-primary/80 inline-flex items-center justify-center rounded-lg px-2 py-1 text-center text-base font-medium underline"
                  >
                    Creare site de prezentare
                  </Link>
                </li>
                {/* <li className="leading-none">
                  <Link
                    href="#"
                    className="text-body-color hover:text-primary inline-flex items-center justify-center py-1 text-center text-base font-normal"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Descarcă broșură
                  </Link>
                </li> */}
              </ul>

              {/* <HeroClients /> */}
            </div>
          </div>
          <div className="hidden px-4 xl:block xl:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex w-full max-lg:mt-10 lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
