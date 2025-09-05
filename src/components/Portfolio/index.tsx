"use client";

import { portfolioData } from "@/static-data/portfolio";
import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "./SinglePortfolio";

export default function Portfolio() {
  const items = portfolioData;

  return (
    <section id="portfolio" className="bg-[#f8f9ff] pb-[70px] pt-[90px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              mainTitle="Portofoliu web & SEO"
              title="Proiecte recente"
              paragraph="Site-uri de prezentare, magazine online și campanii SEO care aduc trafic calificat și conversii."
              center
            />
            <div className="text-center mt-8 mb-16">
              <a 
                href="/portofoliu" 
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary border-2 border-primary/20 hover:border-primary transition-all duration-300 rounded-xl px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
              >
                <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Vezi studii de caz complete
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>

        <div className="portfolio-container flex justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="grid gap-8 md:grid-cols-2">
              {items.map((portfolio) => (
                <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
