"use client";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { trackLead } from "@/components/Analytics/GTMLeadEvents";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return toast.error("Completează nume, email și mesaj.");
    }
    try {
      await axios.post("/api/contact", form, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Mesaj trimis cu succes. Îți mulțumim!");
      try { trackLead("contact_form", { form_name: "ContactSection" }); } catch {}
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      toast.error(
        err?.response?.data?.error || "A apărut o eroare. Încearcă din nou.",
      );
    }
  };
  return (
    <section id="contact" className="bg-white py-[120px]">
      <div className="container">
        <SectionTitle
          mainTitle="CONTACT"
          title="Ai un proiect în minte?"
          paragraph="Spune-ne pe scurt ce ai nevoie și revenim cu o ofertă."
          center
        />
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 lg:w-9/12">
            <form onSubmit={submit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Introdu numele tău"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Companie (opțional)"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Introdu adresa de email"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Număr de telefon"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Povestește-ne despre proiectul tău"
                      className="input-field resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <button className="bg-primary hover:shadow-signUp mx-auto inline-flex items-center justify-center rounded-full px-9 py-4 font-semibold text-white transition duration-300 ease-in-out">
                      Trimite mesaj
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
