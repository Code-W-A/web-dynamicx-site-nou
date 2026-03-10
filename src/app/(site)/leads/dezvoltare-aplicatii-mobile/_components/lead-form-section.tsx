"use client";

import { type FormEvent, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import validateEmail from "@/app/libs/validate";
import { trackLead, trackCustomLeadEvent } from "@/components/Analytics/GTMLeadEvents";
import { contactData } from "./content";
import SectionHeading from "./section-heading";

type FormState = {
  name: string;
  contact: string;
  projectType: string;
  message: string;
  company: string;
  budget: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  contact: "",
  projectType: "",
  message: "",
  company: "",
  budget: "",
  consent: false,
};

export default function LeadFormSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [showOptional, setShowOptional] = useState(false);

  const validatePhone = (phone: string) => {
    const numeric = phone.replace(/\D/g, "");
    return numeric.length >= 9 && numeric.length <= 15;
  };

  const isEmailContact = useMemo(() => Boolean(validateEmail(form.contact.trim())), [form.contact]);
  const isPhoneContact = useMemo(() => validatePhone(form.contact), [form.contact]);
  const hasValidContact = isEmailContact || isPhoneContact;

  const canSubmit = useMemo(() => {
    return Boolean(form.name.trim() && hasValidContact && form.projectType && form.message.trim().length >= 10 && form.consent);
  }, [form, hasValidContact]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim() || form.name.trim().length < 2) nextErrors.name = "Introdu un nume valid (minim 2 caractere).";
    if (!hasValidContact) nextErrors.contact = "Introdu un email valid sau un numar de telefon valid.";
    if (!form.projectType) nextErrors.projectType = "Selecteaza tipul proiectului.";
    if (!form.message.trim() || form.message.trim().length < 10) nextErrors.message = "Mesajul trebuie sa aiba cel putin 10 caractere.";
    if (!form.consent) nextErrors.consent = "Ai nevoie de acord GDPR pentru a trimite formularul.";

    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setError("Verifica campurile marcate si incearca din nou.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "/api/contact",
        {
          name: form.name.trim(),
          company: form.company.trim(),
          email: isEmailContact ? form.contact.trim() : "",
          phone: isPhoneContact ? form.contact.trim() : "",
          projectType: form.projectType,
          budget: form.budget,
          source: "lead-mobile-apps",
          page: "/leads/dezvoltare-aplicatii-mobile",
          message: [
            "Sursa lead: Lead Page Dezvoltare Aplicatii Mobile",
            form.projectType ? `Tip proiect: ${form.projectType}` : "Tip proiect: Nespecificat",
            form.budget ? `Buget estimativ: ${form.budget}` : "Buget estimativ: Nespecificat",
            "",
            "Mesaj client:",
            form.message.trim(),
          ].join("\n"),
        },
        { headers: { "Content-Type": "application/json" } },
      );

      setSubmitted(true);
      setForm(initialState);
      setFieldErrors({});
      try {
        trackLead("contact_form", {
          form_name: "lead_mobile_apps_form",
          source: "lead-mobile-apps",
          project_type: form.projectType || "unspecified",
          budget: form.budget || "unspecified",
        });
        trackCustomLeadEvent("lead_mobile_apps_form_submit", {
          source: "lead-mobile-apps",
          project_type: form.projectType || "unspecified",
          budget: form.budget || "unspecified",
        });
      } catch {}
      toast.success("Mesaj trimis cu succes. Revenim in cel mai scurt timp.");
    } catch (err: any) {
      const apiError = err?.response?.data?.error || "A aparut o eroare. Incearca din nou.";
      setError(apiError);
      toast.error(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="formular-lead" className="scroll-mt-28 bg-white py-18 sm:py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Solicita oferta pentru aplicatia ta mobila"
              description="Completeaza formularul scurt si revenim rapid cu directie tehnica si estimare initiala."
            />
            <div className="space-y-3">
              <a
                href={contactData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary/30 hover:text-primary"
              >
                <MessageCircle size={16} />
                WhatsApp rapid
              </a>
              <a
                href={contactData.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary/30 hover:text-primary"
              >
                <PhoneCall size={16} />
                {contactData.phoneDisplay}
              </a>
              <a
                href={contactData.emailHref}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary/30 hover:text-primary"
              >
                <Mail size={16} />
                {contactData.email}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-service sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-700">
                Nume *
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, name: e.target.value }));
                    if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${
                    fieldErrors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Numele tau"
                />
                {fieldErrors.name ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.name}</span> : null}
              </label>

              <label className="text-sm font-medium text-gray-700">
                Tip proiect *
                <select
                  value={form.projectType}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, projectType: e.target.value }));
                    if (fieldErrors.projectType) setFieldErrors((prev) => ({ ...prev, projectType: undefined }));
                  }}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${
                    fieldErrors.projectType ? "border-red-400" : "border-gray-200"
                  }`}
                >
                  <option value="">Selecteaza</option>
                  <option value="mvp">MVP / validare idee</option>
                  <option value="business-app">Aplicatie business</option>
                  <option value="advanced-platform">Platforma avansata</option>
                </select>
                {fieldErrors.projectType ? (
                  <span className="mt-1 block text-xs text-red-600">{fieldErrors.projectType}</span>
                ) : null}
              </label>

              <label className="text-sm font-medium text-gray-700 sm:col-span-2">
                Telefon sau Email *
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, contact: e.target.value }));
                    if (fieldErrors.contact) setFieldErrors((prev) => ({ ...prev, contact: undefined }));
                  }}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${
                    fieldErrors.contact ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="07xx xxx xxx sau nume@companie.ro"
                />
                {fieldErrors.contact ? (
                  <span className="mt-1 block text-xs text-red-600">{fieldErrors.contact}</span>
                ) : null}
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-gray-700">
              Mesaj scurt *
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, message: e.target.value }));
                  if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
                }}
                className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${
                  fieldErrors.message ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Ce vrei sa construiesti si care este obiectivul principal?"
              />
              {fieldErrors.message ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.message}</span> : null}
            </label>

            <button
              type="button"
              onClick={() => setShowOptional((prev) => !prev)}
              className="mt-3 text-sm font-semibold text-primary hover:text-primary/80"
            >
              {showOptional ? "Ascunde detalii optionale" : "Adauga detalii optionale"}
            </button>

            {showOptional ? (
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Companie (optional)
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Buget estimativ (optional)
                  <select
                    value={form.budget}
                    onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  >
                    <option value="">Selecteaza intervalul</option>
                    <option value="3500-7500">3.500 - 7.500 EUR</option>
                    <option value="7500-15000">7.500 - 15.000 EUR</option>
                    <option value="15000+">Peste 15.000 EUR</option>
                  </select>
                </label>
              </div>
            ) : null}

            <label className="mt-4 flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, consent: e.target.checked }));
                  if (fieldErrors.consent) setFieldErrors((prev) => ({ ...prev, consent: undefined }));
                }}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              Sunt de acord cu prelucrarea datelor conform politicii GDPR.
            </label>
            {fieldErrors.consent ? <p className="mt-1 text-xs text-red-600">{fieldErrors.consent}</p> : null}

            {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}
            {submitted ? (
              <p className="mt-3 text-sm font-medium text-green-700">
                Multumim! Cererea ta a fost trimisa. Revenim cu o estimare initiala in cel mai scurt timp.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!canSubmit || loading}
            >
              {loading ? "Se trimite..." : "Solicita oferta"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
