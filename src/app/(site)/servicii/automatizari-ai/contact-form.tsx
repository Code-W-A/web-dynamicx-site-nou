"use client";
import { useRef, useState, type FormEvent } from "react";
import {
  aiAutomationPath,
  aiAutomationRequest,
  aiAutomationSource,
  splitAiContact,
} from "@/app/libs/aiAutomationContact";
import { trackLead } from "@/components/Analytics/GTMLeadEvents";
import styles from "./page.module.css";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    contact: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const lock = useRef(false);
  const form = useRef<HTMLFormElement>(null);
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (lock.current) return;
    const parsed = aiAutomationRequest.safeParse({
      name: values.name,
      company: values.company,
      message: values.message,
      consent: values.consent,
      ...splitAiContact(values.contact),
      source: aiAutomationSource,
      page: aiAutomationPath,
    });
    const next: Record<string, string> = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = ["email", "phone"].includes(String(issue.path[0]))
          ? "contact"
          : String(issue.path[0]);
        next[field] =
          field === "name"
            ? "Scrie numele tău (2–100 caractere)."
            : field === "message"
              ? "Descrie procesul în 10–5.000 de caractere."
              : field === "consent"
                ? "Confirmă acordul pentru prelucrarea datelor."
                : field === "company"
                  ? "Folosește maximum 200 de caractere."
                  : "Introdu un telefon sau un email valid.";
      }
      setErrors(next);
      form.current
        ?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return;
    }
    setErrors({});
    lock.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("request_failed");
      setStatus("sent");
      trackLead("contact_form", {
        form_name: "AiAutomationContact",
        source: aiAutomationSource,
      });
    } catch {
      lock.current = false;
      setStatus("error");
    }
  }
  return (
    <form
      ref={form}
      className={styles.form}
      onSubmit={submit}
      noValidate
      aria-label="Discută o automatizare"
      aria-busy={status === "sending"}
    >
      {(["name", "company", "contact", "message"] as const).map((key) => {
        const labels = {
          name: "Nume",
          company: "Companie (opțional)",
          contact: "Telefon sau email",
          message: "Ce ai vrea să automatizezi?",
        };
        const props = {
          id: `ai-field-${key}`,
          name: key,
          value: values[key],
          required: key !== "company",
          maxLength: key === "message" ? 5000 : key === "name" ? 100 : 200,
          "aria-invalid": Boolean(errors[key]),
          "aria-describedby": errors[key] ? `ai-error-${key}` : undefined,
          onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => {
            setValues((previous) => ({ ...previous, [key]: e.target.value }));
            setErrors((previous) => ({ ...previous, [key]: "" }));
          },
        };
        return (
          <label key={key} htmlFor={props.id}>
            {labels[key]}
            {key !== "company" ? " *" : ""}
            {key === "message" ? (
              <textarea {...props} rows={4} />
            ) : (
              <input
                {...props}
                type="text"
                autoComplete={
                  key === "name"
                    ? "name"
                    : key === "company"
                      ? "organization"
                      : "off"
                }
              />
            )}
            {errors[key] ? (
              <span className={styles.error} id={`ai-error-${key}`}>
                {errors[key]}
              </span>
            ) : null}
          </label>
        );
      })}
      <label className={styles.consent} htmlFor="ai-consent">
        <input
          id="ai-consent"
          name="consent"
          type="checkbox"
          required
          checked={values.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "ai-error-consent" : undefined}
          onChange={(e) =>
            setValues((previous) => ({
              ...previous,
              consent: e.target.checked,
            }))
          }
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
      {errors.consent ? (
        <p className={styles.error} id="ai-error-consent">
          {errors.consent}
        </p>
      ) : null}
      <button
        className={styles.primary}
        disabled={status === "sending" || status === "sent"}
      >
        {status === "sending"
          ? "Se trimite…"
          : status === "sent"
            ? "Cerere trimisă"
            : "Vreau să discutăm procesul"}
      </button>
      {status === "sent" ? (
        <p role="status">
          Cererea a fost trimisă. Îți mulțumim! Revenim pentru a discuta
          procesul.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className={styles.error}>
          Cererea nu a putut fi trimisă. Datele au rămas în formular. Încearcă
          din nou sau sună la 0774 550 758.
        </p>
      ) : null}
      <p className={styles.muted}>
        Analizăm contextul și revenim cu o direcție tehnică realistă.
      </p>
    </form>
  );
}
