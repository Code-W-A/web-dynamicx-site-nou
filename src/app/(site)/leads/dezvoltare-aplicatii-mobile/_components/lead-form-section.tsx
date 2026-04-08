"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { MessageCircle, PhoneCall } from "lucide-react";
import validateEmail from "@/app/libs/validate";
import {
  trackCustomLeadEvent,
  trackLead,
} from "@/components/Analytics/GTMLeadEvents";
import { contactData, leadNextSteps, leadPromptItems } from "./content";

const MESSAGE_MIN_LEN = 10;

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  consent: false,
};

export default function LeadFormSection() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [messageFocused, setMessageFocused] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const project = new URLSearchParams(window.location.search).get(
      "selectedProject",
    );
    setSelectedProject(project);

    const handleSelectedProject = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setSelectedProject(customEvent.detail || null);
    };

    window.addEventListener(
      "lead:selected-project",
      handleSelectedProject as EventListener,
    );

    return () => {
      window.removeEventListener(
        "lead:selected-project",
        handleSelectedProject as EventListener,
      );
    };
  }, []);

  const validatePhone = (phone: string) => {
    const numeric = phone.replace(/\D/g, "");
    return numeric.length >= 9 && numeric.length <= 15;
  };

  const emailTrim = form.email.trim();
  const phoneTrim = form.phone.trim();

  const hasValidEmail = useMemo(
    () => Boolean(emailTrim && validateEmail(emailTrim)),
    [emailTrim],
  );
  const hasValidPhone = useMemo(
    () => Boolean(phoneTrim && validatePhone(form.phone)),
    [phoneTrim, form.phone],
  );
  const hasValidContact = hasValidEmail || hasValidPhone;

  const messageTrim = form.message.trim();
  const messageLen = messageTrim.length;
  const messageSufficient = messageLen >= MESSAGE_MIN_LEN;

  const showMessageHint =
    messageFocused || messageLen > 0 || Boolean(fieldErrors.message);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = "Introdu un nume valid.";
    }
    if (!emailTrim && !phoneTrim) {
      nextErrors.email = "Completează email sau telefon (minim unul).";
      nextErrors.phone = "Completează telefon sau email (minim unul).";
    } else if (!hasValidContact) {
      if (emailTrim && !validateEmail(emailTrim)) {
        nextErrors.email = "Introdu o adresă de email validă.";
      }
      if (phoneTrim && !validatePhone(form.phone)) {
        nextErrors.phone = "Introdu un număr de telefon valid.";
      }
    }
    if (!messageTrim || messageLen < MESSAGE_MIN_LEN) {
      nextErrors.message = `Descrierea trebuie să aibă cel puțin ${MESSAGE_MIN_LEN} caractere (fără spații la început/sfârșit).`;
    }
    if (!form.consent) {
      nextErrors.consent = "Este necesar acordul pentru a te putea contacta.";
    }

    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setError("Verifică câmpurile marcate și încearcă din nou.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "/api/contact",
        {
          name: form.name.trim(),
          company: "",
          email: hasValidEmail ? emailTrim : "",
          phone: hasValidPhone ? phoneTrim : "",
          projectType: form.projectType,
          budget: "",
          source: "lead-mobile-apps",
          page: "/leads/dezvoltare-aplicatii-mobile",
          message: [
            "Sursă lead: Landing Page Google Ads - Dezvoltare Aplicații Mobile",
            selectedProject
              ? `Proiect selectat: ${selectedProject}`
              : "Proiect selectat: Nespecificat",
            form.projectType
              ? `Tip proiect: ${form.projectType}`
              : "Tip proiect: Nespecificat",
            "",
            "Brief client:",
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
        });
        trackCustomLeadEvent("lead_mobile_apps_form_submit", {
          source: "lead-mobile-apps",
          project_type: form.projectType || "unspecified",
        });
      } catch {}

      router.replace("/multumim-aplicatie-mobile");
    } catch (err: any) {
      const apiError =
        err?.response?.data?.error || "A apărut o eroare. Încearcă din nou.";
      setError(apiError);
      toast.error(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="formular-lead"
      className="scroll-mt-24 bg-white py-14 sm:py-16"
    >
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-primary/80 text-sm font-semibold tracking-[0.22em] uppercase">
              Cerere de ofertă
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Trimite proiectul și revenim cu o direcție clară
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Completează pe scurt cererea, iar noi revenim cu o variantă
              realistă de pornire pentru proiectul tău.
            </p>

            <div className="mt-6 space-y-3">
              {leadNextSteps.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Ne ajută să știm pe scurt:
              </p>
              <ul className="mt-3 space-y-2">
                {leadPromptItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                  >
                    <span className="bg-primary mt-2 inline-block h-2 w-2 shrink-0 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={contactData.phoneHref}
                className="hover:border-primary/30 hover:text-primary flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition"
              >
                <PhoneCall size={16} />
                {contactData.phoneDisplay}
              </a>
              <a
                href={contactData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary/30 hover:text-primary flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition"
              >
                <MessageCircle size={16} />
                WhatsApp rapid
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Îți răspundem în cel mai scurt timp posibil, cu o direcție clară
              și pași concreți.
            </div>

            {selectedProject ? (
              <div className="border-primary/20 bg-primary/5 text-primary mt-4 rounded-2xl border px-4 py-3 text-sm">
                Ai ales un proiect similar cu:{" "}
                <span className="font-semibold">{selectedProject}</span>
              </div>
            ) : null}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Nume *
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, name: e.target.value }));
                    if (fieldErrors.name)
                      setFieldErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={`focus:border-primary mt-2 w-full rounded-xl border px-4 py-3 text-sm transition outline-none ${
                    fieldErrors.name ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="Numele tău"
                />
                {fieldErrors.name ? (
                  <span className="mt-1 block text-xs text-red-600">
                    {fieldErrors.name}
                  </span>
                ) : null}
              </label>

              <label className="text-sm font-medium text-slate-700">
                Tip proiect
                <select
                  value={form.projectType}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      projectType: e.target.value,
                    }))
                  }
                  className="focus:border-primary mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition outline-none"
                >
                  <option value="">Selectează</option>
                  <option value="client-app">Aplicație pentru clienți</option>
                  <option value="internal-app">
                    Aplicație internă pentru companie
                  </option>
                  <option value="orders-bookings">
                    Aplicație pentru comenzi sau programări
                  </option>
                  <option value="other-app">Alt tip de aplicație</option>
                  <option value="not-sure">Încă nu sunt sigur</option>
                </select>
              </label>

              <p className="text-xs leading-5 text-slate-500 sm:col-span-2">
                Contact obligatoriu: completează corect cel puțin email sau
                telefon.
              </p>

              <label className="text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, email: e.target.value }));
                    if (fieldErrors.email)
                      setFieldErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className={`focus:border-primary mt-2 w-full rounded-xl border px-4 py-3 text-sm transition outline-none ${
                    fieldErrors.email ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="nume@companie.ro"
                />
                {fieldErrors.email ? (
                  <span className="mt-1 block text-xs text-red-600">
                    {fieldErrors.email}
                  </span>
                ) : null}
              </label>

              <label className="text-sm font-medium text-slate-700">
                Telefon
                <input
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, phone: e.target.value }));
                    if (fieldErrors.phone)
                      setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  className={`focus:border-primary mt-2 w-full rounded-xl border px-4 py-3 text-sm transition outline-none ${
                    fieldErrors.phone ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="07xx xxx xxx"
                />
                {fieldErrors.phone ? (
                  <span className="mt-1 block text-xs text-red-600">
                    {fieldErrors.phone}
                  </span>
                ) : null}
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-700">
              Ce vrei să construiești? *
              <textarea
                rows={5}
                value={form.message}
                onFocus={() => setMessageFocused(true)}
                onBlur={() => setMessageFocused(false)}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, message: e.target.value }));
                  if (fieldErrors.message)
                    setFieldErrors((prev) => ({ ...prev, message: undefined }));
                }}
                aria-invalid={!messageSufficient && messageLen > 0}
                className={`focus:border-primary mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm transition outline-none ${
                  fieldErrors.message || (!messageSufficient && messageLen > 0)
                    ? "border-red-400"
                    : messageSufficient && messageLen > 0
                      ? "border-emerald-500/70"
                      : "border-slate-200"
                }`}
                placeholder="Pe scurt: ce vrei să facă aplicația și pentru cine va fi folosită?"
              />
              {showMessageHint ? (
                <div className="mt-2 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span
                      className={
                        messageSufficient
                          ? "font-medium text-emerald-700"
                          : "text-slate-600"
                      }
                    >
                      Minim {MESSAGE_MIN_LEN} caractere (textul trimis, fără
                      spații la capete)
                    </span>
                    <span
                      className={
                        messageSufficient
                          ? "font-semibold text-emerald-700"
                          : "tabular-nums text-slate-500"
                      }
                    >
                      {messageLen}/{MESSAGE_MIN_LEN}
                      {messageSufficient ? " ✓" : ""}
                    </span>
                  </div>
                  {!messageSufficient && messageLen > 0 ? (
                    <p className="text-xs font-medium text-red-600">
                      Mai ai {MESSAGE_MIN_LEN - messageLen} caractere până la
                      minim — altfel nu putem trimite cererea.
                    </p>
                  ) : null}
                  {fieldErrors.message ? (
                    <span className="block text-xs text-red-600">
                      {fieldErrors.message}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </label>

            <label className="mt-5 flex items-start gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, consent: e.target.checked }));
                  if (fieldErrors.consent)
                    setFieldErrors((prev) => ({ ...prev, consent: undefined }));
                }}
                className="text-primary focus:ring-primary mt-0.5 h-4 w-4 rounded border-slate-300"
              />
              Sunt de acord să fiu contactat pentru a primi o estimare și
              informații despre proiectul meu.
            </label>
            {fieldErrors.consent ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.consent}</p>
            ) : null}

            {error ? (
              <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
            ) : null}
            {submitted ? (
              <p className="mt-3 text-sm font-medium text-green-700">
                Îți răspundem în cel mai scurt timp posibil, cu o direcție clară
                și pași concreți.
              </p>
            ) : null}

            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 mt-6 w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Se trimite..." : "Cere estimare pentru proiect"}
            </button>

            <p className="mt-3 text-center text-xs leading-6 text-slate-500">
              Nu trebuie să ai toate detaliile stabilite. Este suficient să ne
              spui ce vrei să construiești și ce obiectiv ai.
            </p>
            <p className="mt-2 text-center text-xs leading-6 text-slate-500">
              Îți răspundem în cel mai scurt timp posibil, cu o direcție clară
              și pași concreți.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
