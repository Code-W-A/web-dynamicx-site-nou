"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { trackLead } from "@/components/Analytics/GTMLeadEvents";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return toast.error("Completează nume, email și mesaj.");
    }
    
    setLoading(true);
    try {
      await axios.post("/api/contact", form, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Mesaj trimis cu succes. Îți mulțumim!");
      try { trackLead("contact_form", { form_name: "ContactModal" }); } catch {}
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      onClose();
    } catch (err: any) {
      toast.error(
        err?.response?.data?.error || "A apărut o eroare. Încearcă din nou.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Contactează-ne</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Numele tău *"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Companie (opțional)"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email *"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Telefon"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Mesajul tău *"
              rows={4}
              className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-gray-700 hover:bg-gray-50"
              disabled={loading}
            >
              Anulează
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 flex-1 rounded-md px-4 py-3 font-semibold text-white disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Se trimite..." : "Trimite mesaj"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
