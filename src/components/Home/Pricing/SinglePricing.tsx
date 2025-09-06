"use client";
import axios from "axios";
import SingleOffer from "./SingleOffer";
import SinglePricingGraphic from "./SinglePricingGraphic";
import { integrations, messages } from "../../../../integrations.config";
import toast from "react-hot-toast";

export default function SinglePricing({ price }: any) {
  const handleSubscription = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isStripeEnabled) {
      return toast.error(messages?.stripe);
    }

    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative pt-6 pb-4">
        <div className={`relative z-10 mb-10 overflow-hidden rounded-xl border bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:px-10 2xl:p-12 ${price?.nickname === "Business" ? "border-primary/40 shadow-lg" : "border-primary/20"}`}>
        
        <div>
          <span className="mb-4 block text-lg font-semibold text-primary">
            {price?.nickname}
          </span>
          <h3 className="mb-5 text-[42px] font-bold text-dark">
            <span className="text-lg font-medium text-body-color">De la </span>
            €{(price.unit_amount / 100).toLocaleString("ro-RO")}{" "}
            <span className="text-base font-medium text-body-color"> / pachet </span>
          </h3>
          
          {/* Include text */}
          {price?.nickname === "Business" && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                <span className="text-primary">✓</span> Include tot ce este în <strong>Start</strong> + UI personalizat, schemă, viteză, blog
              </p>
            </div>
          )}
          {price?.nickname === "Premium" && (
            <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-sm text-purple-800 font-medium">
                <span className="text-primary">✓</span> Include tot ce este în <strong>Business</strong> + CRM, automatizări, SEO tehnic
              </p>
            </div>
          )}
          
          <p className="mb-6 border-b border-[#F2F2F2] pb-6 text-base text-body-color">{price?.subtitle}</p>
          
          {/* Info Chips */}
          <div className="mb-6 space-y-2">
            {price?.nickname === "Start" && (
              <>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    Ideal pentru: freelanceri, afaceri mici
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-body-color">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Livrare: 1–2 săpt.
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Revizii: 1
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Suport: 2 săpt.
                  </span>
                </div>
              </>
            )}
            {price?.nickname === "Business" && (
              <>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    Ideal pentru: afaceri în creștere
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-body-color">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Livrare: 2–4 săpt.
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Revizii: 2
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Suport: 1 lună
                  </span>
                </div>
              </>
            )}
            {price?.nickname === "Premium" && (
              <>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    Ideal pentru: companii și proiecte complexe
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-body-color">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Livrare: 4–8 săpt.
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Revizii: 3
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Suport: 3 luni
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mb-7 space-y-1">
          {price?.nickname === "Start" && (
            <>
              <SingleOffer text="1–5 pagini (Acasă, Servicii, Despre, Contact)" />
              <SingleOffer text="Design responsive + implementare Next.js" />
              <SingleOffer text="SEO on‑page de bază (titles, meta, headings)" />
              <SingleOffer text="Formular de contact + Google Analytics" />
              <SingleOffer text="1 rundă de revizii" />
            </>
          )}
          {price?.nickname === "Business" && (
            <>
              <SingleOffer text="6–12 pagini + șabloane reutilizabile" />
              <SingleOffer text="UI personalizat, componente dedicate" />
              <SingleOffer text="Schema (Organization, FAQ), optimizări viteză" />
              <SingleOffer text="Blog/Articole + pagini de listare" />
              <SingleOffer text="2 runde de revizii" />
            </>
          )}
          {price?.nickname === "Premium" && (
            <>
              <SingleOffer text="Pagini nelimitate, layout‑uri avansate" />
              <SingleOffer text="Conținut structurat + topic clusters" />
              <SingleOffer text="SEO tehnic, audit & plan lunar" />
              <SingleOffer text="Integrare CRM, automatizări, tracking avansat" />
              <SingleOffer text="3 runde de revizii + suport 3 luni" />
            </>
          )}
        </div>

        <SinglePricingGraphic />
        </div>
      </div>
    </div>
  );
}
