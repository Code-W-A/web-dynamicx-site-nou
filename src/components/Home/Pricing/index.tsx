import Link from "next/link";
import { pricingData } from "../../../../stripe/pricingData";
import SinglePricing from "./SinglePricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-8 pt-20 lg:pt-[90px]"
    >
      <span id="preturi" />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[760px] text-center lg:mb-20">
            
              <span className="mb-2 block text-lg font-semibold text-primary">
                PREȚURI
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Cât costă un site de prezentare?
              </h2>
              <p className="text-base text-body-color">
                Alege pachetul potrivit pentru creare site, web design și SEO.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData &&
            pricingData.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white transition-all duration-300 rounded-xl px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            <svg className="h-6 w-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Solicită o ofertă realizare site web
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
