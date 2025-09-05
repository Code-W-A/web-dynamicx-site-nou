import Link from "next/link";
import Graphic from "./Graphic";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-white pb-[120px] pt-20 lg:pt-[145px]"
    >
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12">
            <span className="mb-3 text-lg font-bold text-primary md:text-xl">
              DESPRE NOI
            </span>
            <h2 className="mb-5 max-w-[400px] text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-[45px] md:leading-tight">
              Design mai bun, experiență mai bună
            </h2>
            <p className="max-w-[570px] text-base font-medium text-body-color">
              <strong>Web Dynamicx</strong> — agenție de <strong>web design</strong>, <strong>dezvoltare web</strong>, <strong>SEO</strong> și aplicații mobile. Construim site-uri moderne, rapide și orientate spre conversie.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <h3 className="mb-6 text-2xl font-semibold text-black md:text-3xl">
              Conectează-te cu noi
            </h3>
            
            {/* CTA Section */}
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 border border-blue-100 shadow-sm">
              <p className="text-gray-700 mb-6 text-base font-medium leading-relaxed">
                Suntem axați pe servicii <span className="text-primary font-semibold">web design</span>, 
                <span className="text-primary font-semibold"> creare site web</span> și 
                <span className="text-primary font-semibold"> promovare online</span>. 
                <br className="hidden sm:block" />
                <span className="text-gray-800 font-semibold">Hai să discutăm despre proiectul tău.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <svg className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Să discutăm proiectul
                </Link>
                
                <Link
                  href="tel:+40720123456"
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-primary transition-all duration-300 inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  <svg className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Sună direct
                </Link>
              </div>
              
             
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
