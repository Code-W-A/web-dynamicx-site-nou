"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Graphic from "../Home/Newsletter/Graphic";

export default function PhoneLeadCTA() {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || phone === "") {
      toast.error("Te rugăm să introduci numărul de telefon.");
      return;
    }
    try {
      await axios.post("/api/phone-lead", { phone });
      toast.success("Mulțumim! Te contactăm în curând.");
      setPhone("");
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "A apărut o eroare.");
    }
  };

  return (
    <section className="mt-[-160px] bg-white">
      <div className="container">
        <div className="bg-primary relative z-10 overflow-hidden rounded-md py-[70px] text-center">
          <div className="relative z-10 mx-auto max-w-[770px] px-6">
            <h2 className="mb-10 text-2xl leading-tight font-bold text-white md:text-[40px]">
              Începe proiectul tău acum
            </h2>
            <form onSubmit={handleSubmit} className="relative mx-auto max-w-[480px]">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Introdu numărul tău de telefon"
                className="mb-5 w-full rounded-full border border-white/[13%] bg-white/[15%] px-8 py-4 text-center text-white placeholder-white/70 outline-hidden transition focus:border-white focus-visible:shadow-none sm:mb-0 sm:text-left"
              />
              <button className="text-primary top-2 right-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold sm:absolute sm:w-auto sm:py-[10px]">
                Trimite
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://wa.me/40774550758"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded-full border border-white/[13%] bg-white/[15%] px-6 py-3 text-base outline-hidden transition hover:bg-white/20"
              >
                WhatsApp
              </a>
              <a
                href="tel:+40774550758"
                className="text-white rounded-full border border-white/[13%] bg-white/[15%] px-6 py-3 text-base outline-hidden transition hover:bg-white/20"
              >
                Sună
              </a>
            </div>
          </div>
          <Graphic />
        </div>
      </div>
    </section>
  );
}


