"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import validateEmail from "@/app/libs/validate";
import { trackLead, trackCustomLeadEvent } from "@/components/Analytics/GTMLeadEvents";
import { contactData, leadPath } from "./content";
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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const project = new URLSearchParams(window.location.search).get("selectedProject");
    setSelectedProject(project);
  }, []);

  const validatePhone = (phone: string) => {
    const numeric = phone.replace(/\D/g, "");
    return numeric.length >= 9 && numeric.length <= 15;
  };

  const isEmailContact = useMemo(() => Boolean(validateEmail(form.contact.trim())), [form.contact]);
  const isPhoneContact = useMemo(() => validatePhone(form.contact), [form.contact]);
  const hasValidContact = isEmailContact || isPhoneContact;

  const canSubmit = useMemo(
    () => Boolean(form.name.trim() && hasValidContact && form.message.trim().length >= 10 && form.consent),
    [form, hasValidContact],
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) nextErrors.name = "Introdu un nume valid.";
    if (!hasValidContact) nextErrors.contact = "Introdu un email valid sau un numar de telefon valid.";
    if (!form.message.trim() || form.message.trim().length < 10) nextErrors.message = "Mesajul trebuie sa fie mai clar.";
    if (!form.consent) nextErrors.consent = "Acordul GDPR este obligatoriu.";
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

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
          source: "lead-web-site",
          page: leadPath,
          message: [
            "Sursa lead: Lead Page Creare Site Web",
            selectedProject ? `Proiect selectat: ${selectedProject}` : "Proiect selectat: Nespecificat",
            form.projectType ? `Tip proiect: ${form.projectType}` : "Tip proiect: Nespecificat",
            form.budget ? `Buget estimativ: ${form.budget}` : "Buget estimativ: Nespecificat",
            "",
            "Mesaj client:",
            form.message.trim(),
          ].join("\n"),
        },
        { headers: { "Content-Type": "application/json" } },
      );
      try {
        trackLead("contact_form", { source: "lead-web-site", form_name: "lead_web_site_form" });
        trackCustomLeadEvent("lead_web_site_form_submit", { source: "lead-web-site" });
      } catch {}
      setSubmitted(true);
      setForm(initialState);
      setFieldErrors({});
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
    <section id="formular-lead" className="scroll-mt-28 bg-white py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Solicita oferta pentru creare site web"
              description="Completeaza formularul scurt si revenim rapid cu directie si estimare pentru website."
            />
            <div className="space-y-3">
              <a href={contactData.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800">
                <MessageCircle size={16} />
                WhatsApp rapid
              </a>
              <a href={contactData.phoneHref} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800">
                <PhoneCall size={16} />
                {contactData.phoneDisplay}
              </a>
              <a href={contactData.emailHref} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800">
                <Mail size={16} />
                {contactData.email}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-service sm:p-8">
            {selectedProject ? (
              <div className="mb-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
                Proiect selectat: <span className="font-semibold">{selectedProject}</span>
              </div>
            ) : null}
            <div className="mb-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Raspundem in maxim 2 ore in timpul programului.
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-700">
                Nume *
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${fieldErrors.name ? "border-red-400" : "border-gray-200"}`}
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Tip proiect (optional)
                <select
                  value={form.projectType}
                  onChange={(e) => setForm((p) => ({ ...p, projectType: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary"
                >
                  <option value="">Selecteaza</option>
                  <option value="site-prezentare">Site de prezentare</option>
                  <option value="landing-page">Landing page</option>
                  <option value="platforma-custom">Platforma custom</option>
                </select>
              </label>
              <label className="text-sm font-medium text-gray-700 sm:col-span-2">
                Telefon sau Email *
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${fieldErrors.contact ? "border-red-400" : "border-gray-200"}`}
                  placeholder="07xx xxx xxx sau nume@companie.ro"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-gray-700">
              Mesaj scurt *
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary ${fieldErrors.message ? "border-red-400" : "border-gray-200"}`}
                placeholder="Descrie ce ai nevoie si obiectivul principal al proiectului."
              />
            </label>

            <button type="button" onClick={() => setShowOptional((v) => !v)} className="mt-3 text-sm font-semibold text-primary">
              {showOptional ? "Ascunde detalii optionale" : "Adauga detalii optionale"}
            </button>

            {showOptional ? (
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Companie (optional)
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Buget estimativ (optional)
                  <select
                    value={form.budget}
                    onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  >
                    <option value="">Selecteaza intervalul</option>
                    <option value="1200-2800">1.200 - 2.800 EUR</option>
                    <option value="2800-6000">2.800 - 6.000 EUR</option>
                    <option value="6000+">Peste 6.000 EUR</option>
                  </select>
                </label>
              </div>
            ) : null}

            <label className="mt-4 flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              Sunt de acord cu prelucrarea datelor conform politicii GDPR.
            </label>

            {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}
            {submitted ? <p className="mt-3 text-sm font-medium text-green-700">Mesaj trimis cu succes. Revenim rapid.</p> : null}

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
