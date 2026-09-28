"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { LeadPageConfig } from "./types";
import { emitLeadEvent } from "./events";
import { useLeadSelection } from "./interactions";
import {
  markWebSiteSubmission,
  webSiteSuccessMessage,
} from "./web-site-confirmation";

const initialForm = {
  name: "",
  contact: "",
  message: "",
  company: "",
  budget: "",
  projectType: "",
  consent: false,
};
type Field = keyof typeof initialForm;
type Errors = Partial<Record<Field, string>>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isPhone = (value: string) =>
  /^\+?[\d\s().-]+$/.test(value) &&
  value.replace(/\D/g, "").length >= 9 &&
  value.replace(/\D/g, "").length <= 15;

type FormConfig = Pick<
  LeadPageConfig,
  | "source"
  | "path"
  | "thankYouPath"
  | "formName"
  | "submitEvent"
  | "cta"
  | "packages"
  | "projectTypes"
  | "messageHint"
>;

export default function LeadForm({ config }: { config: FormConfig }) {
  const router = useRouter();
  const isWebSite = config.source === "lead-web-site";
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [requestError, setRequestError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const { selectedPackage, selectPackage } = useLeadSelection();
  const formRef = useRef<HTMLFormElement>(null);
  const requestLock = useRef(false);
  const started = useRef(false);

  useEffect(() => {
    setSelectedProject(
      new URLSearchParams(window.location.search)
        .get("selectedProject")
        ?.slice(0, 200) || "",
    );
  }, []);

  function update<K extends Field>(key: K, value: (typeof initialForm)[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }

  function start() {
    if (started.current) return;
    started.current = true;
    emitLeadEvent(config.source, "lead_form_start", {
      form_name: config.formName,
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (requestLock.current) return;
    start();
    const next: Errors = {};
    const contact = form.contact.trim();
    const email = emailPattern.test(contact);
    const phone = isPhone(contact);
    if (form.name.trim().length < 2)
      next.name = "Scrie numele tău (minimum 2 caractere).";
    if (!email && !phone)
      next.contact = "Introdu un e-mail valid sau un telefon de 9–15 cifre.";
    if (form.message.trim().length < 10)
      next.message = "Spune-ne puțin despre proiect (minimum 10 caractere).";
    if (!form.consent)
      next.consent = "Confirmă acordul pentru a putea trimite cererea.";
    setErrors(next);
    setRequestError("");
    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      emitLeadEvent(config.source, "lead_form_error", {
        form_name: config.formName,
        error_type: "validation",
      });
      return;
    }
    requestLock.current = true;
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: email ? contact : "",
          phone: phone ? contact : "",
          company: form.company.trim(),
          projectType: form.projectType,
          budget: form.budget.trim(),
          ...(isWebSite ? { description: form.message.trim() } : {}),
          source: config.source,
          page: config.path,
          message: [
            `Proiect selectat: ${selectedProject || "Nespecificat"}`,
            `Pachet selectat: ${selectedPackage || "Vreau o recomandare"}`,
            form.projectType ? `Tip proiect: ${form.projectType}` : "",
            form.budget.trim() ? `Buget estimativ: ${form.budget.trim()}` : "",
            "",
            "Mesaj client:",
            form.message.trim(),
          ]
            .filter((line) => line !== "")
            .join("\n"),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("request_failed");
      if (isWebSite) {
        markWebSiteSubmission();
      } else {
        emitLeadEvent(config.source, "generate_lead", {
          lead_type: "contact_form",
          form_name: config.formName,
        });
        emitLeadEvent(config.source, config.submitEvent, {
          form_name: config.formName,
        });
      }
      setSent(true);
      router.replace(config.thankYouPath);
    } catch {
      requestLock.current = false;
      setLoading(false);
      setRequestError(
        "Cererea nu a putut fi trimisă. Datele tale au rămas în formular. Încearcă din nou sau contactează-ne telefonic.",
      );
      emitLeadEvent(config.source, "lead_form_error", {
        form_name: config.formName,
        error_type: "request",
      });
      requestAnimationFrame(() =>
        document.getElementById("lead-request-error")?.focus(),
      );
    }
  }

  function fieldError(field: Field) {
    return errors[field] ? (
      <span className="lead-field-error" id={`error-${field}`} role="alert">
        {errors[field]}
      </span>
    ) : null;
  }
  function accessibility(field: Field) {
    return {
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": errors[field] ? `error-${field}` : undefined,
    };
  }

  return (
    <form
      id="formular-lead"
      tabIndex={-1}
      ref={formRef}
      onSubmit={submit}
      onChange={start}
      noValidate
      className="lead-form"
      aria-label="Cerere de ofertă"
      aria-busy={loading}
    >
      <h3>
        {isWebSite
          ? "Spune-ne despre afacerea ta."
          : "Hai să vorbim despre proiect."}
      </h3>
      <p className="lead-form-intro">
        {isWebSite
          ? "Descrie pe scurt ce ai nevoie. Revenim pentru a clarifica proiectul și a pregăti oferta."
          : "Completează câteva detalii. Revenim pentru a clarifica cerințele și a pregăti oferta."}
      </p>
      {selectedProject ? (
        <p className="lead-selection">
          Proiect selectat: <strong>{selectedProject}</strong>
        </p>
      ) : null}
      {selectedPackage ? (
        <p className="lead-selection" aria-live="polite">
          Pachet selectat: <strong>{selectedPackage}</strong>
          <button type="button" onClick={() => selectPackage("")}>
            Renunță la selecție
          </button>
        </p>
      ) : null}
      <div className="lead-form-row">
        <label htmlFor="lead-name">
          Nume <span aria-hidden="true">*</span>
          <input
            id="lead-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            {...accessibility("name")}
          />
          {fieldError("name")}
        </label>
        <label htmlFor="lead-contact">
          Telefon sau e-mail <span aria-hidden="true">*</span>
          <input
            id="lead-contact"
            name="contact"
            type="text"
            autoComplete="on"
            autoCapitalize="none"
            spellCheck={false}
            required
            maxLength={200}
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            {...accessibility("contact")}
          />
          {fieldError("contact")}
        </label>
      </div>
      <label htmlFor="lead-message">
        {isWebSite ? config.messageHint : "Ce ai vrea să construim?"}{" "}
        <span aria-hidden="true">*</span>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          required
          maxLength={5000}
          placeholder={isWebSite ? undefined : config.messageHint}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          {...accessibility("message")}
        />
        {fieldError("message")}
      </label>
      {isWebSite ? (
        <label htmlFor="lead-package">
          Pachet
          <select
            id="lead-package"
            name="package"
            value={selectedPackage}
            onChange={(e) => selectPackage(e.target.value)}
          >
            <option value="">Vreau o recomandare</option>
            {config.packages.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
      ) : null}
      <details className="lead-optional">
        <summary>Adaugă detalii opționale</summary>
        <div className="lead-form-row">
          <label htmlFor="lead-project-type">
            Tip proiect
            <select
              id="lead-project-type"
              name="projectType"
              value={form.projectType}
              onChange={(e) => update("projectType", e.target.value)}
            >
              <option value="">Vreau o recomandare</option>
              {config.projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          {!isWebSite ? (
            <label htmlFor="lead-package">
              Pachet
              <select
                id="lead-package"
                name="package"
                value={selectedPackage}
                onChange={(e) => selectPackage(e.target.value)}
              >
                <option value="">Vreau o recomandare</option>
                {config.packages.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
          ) : null}
          <label htmlFor="lead-company">
            Firmă
            <input
              id="lead-company"
              name="company"
              autoComplete="organization"
              maxLength={200}
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </label>
          <label htmlFor="lead-budget">
            Buget estimativ
            <input
              id="lead-budget"
              name="budget"
              placeholder="Ex.: 5.000 lei"
              maxLength={100}
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
            />
          </label>
        </div>
      </details>
      <label className="lead-consent" htmlFor="lead-consent">
        <input
          id="lead-consent"
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          {...accessibility("consent")}
        />
        <span>
          Sunt de acord cu prelucrarea datelor conform{" "}
          <a
            href="/politica-de-confidentialitate"
            target="_blank"
            rel="noopener noreferrer"
          >
            politicii de confidențialitate
          </a>
          . *
        </span>
      </label>
      {fieldError("consent")}
      {requestError ? (
        <p
          id="lead-request-error"
          className="lead-field-error"
          role="alert"
          tabIndex={-1}
        >
          {requestError}
        </p>
      ) : null}
      {sent ? (
        <p role="status">
          {isWebSite
            ? webSiteSuccessMessage
            : "Cererea a fost trimisă. Deschidem confirmarea…"}
        </p>
      ) : null}
      <button
        type="submit"
        className="lead-button lead-submit"
        disabled={loading}
      >
        {loading ? (sent ? "Cerere trimisă" : "Se trimite…") : config.cta}
      </button>
      <p className="lead-form-note">
        Câmpurile marcate cu * sunt obligatorii. Cererea nu implică un
        angajament de cumpărare.
      </p>
    </form>
  );
}
