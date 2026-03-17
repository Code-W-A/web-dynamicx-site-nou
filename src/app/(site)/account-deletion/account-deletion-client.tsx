"use client";

import { FormEvent, useMemo, useState } from "react";

type Language = "ro" | "en";

type FormState = {
  app: "my-butterfly" | "do-it-now";
  email: string;
  name: string;
  reason: string;
  confirmOwnership: boolean;
};

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "mobitoolsro@gmail.com";

const content = {
  ro: {
    langRo: "RO",
    langEn: "EN",
    pageTitle: "Ștergerea contului (Account deletion)",
    pageDescription:
      "Dacă dorești ștergerea contului, poți folosi opțiunea din aplicație sau formularul de mai jos.",
    inAppTitle: "Varianta 1: Ștergere din aplicație",
    inAppText:
      "În aplicațiile My Butterfly sau DO IT NOW: Settings/Setări → Account/Cont → Delete account / Șterge contul",
    webTitle: "Varianta 2: Cerere pe web",
    webDescription:
      "Dacă nu mai ai acces la aplicație, trimite cererea de ștergere folosind formularul.",
    appLabel: "Aplicație",
    emailLabel: "Email",
    nameLabel: "Nume (opțional)",
    reasonLabel: "Motiv (opțional)",
    confirmLabel: "Confirm că sunt titularul contului",
    submit: "Trimite cererea",
    submitting: "Se trimite...",
    success:
      "Cererea ta a fost trimisă cu succes. Te vom contacta pe email pentru confirmare, dacă este necesar.",
    policyTitle: "Politică de procesare",
    policyText:
      "Cererea se procesează în max. 10 zile lucrătoare. Ștergem datele asociate contului, cu excepția celor pe care suntem obligați să le păstrăm conform legii (dacă este cazul).",
    altContactTitle: "Contact alternativ",
    altContactText: "Dacă preferi, ne poți scrie direct la:",
    errors: {
      emailRequired: "Adresa de email este obligatorie.",
      confirmRequired: "Trebuie să confirmi că ești titularul contului.",
      generic: "A apărut o eroare. Încearcă din nou.",
    },
  },
  en: {
    langRo: "RO",
    langEn: "EN",
    pageTitle: "Account deletion",
    pageDescription:
      "If you want to delete your account, you can use the in-app option or the web request form below.",
    inAppTitle: "Option 1: Delete from the app",
    inAppText: "In My Butterfly or DO IT NOW: Settings → Account → Delete account",
    webTitle: "Option 2: Web request",
    webDescription:
      "If you no longer have access to the app, send an account deletion request using the form.",
    appLabel: "Application",
    emailLabel: "Email",
    nameLabel: "Name (optional)",
    reasonLabel: "Reason (optional)",
    confirmLabel: "I confirm that I am the account owner",
    submit: "Submit request",
    submitting: "Sending...",
    success:
      "Your request was submitted successfully. We will contact you by email for confirmation if needed.",
    policyTitle: "Processing policy",
    policyText:
      "The request is processed in up to 10 business days. We delete account-related data, except data we are legally required to retain (if applicable).",
    altContactTitle: "Alternative contact",
    altContactText: "If you prefer, you can email us directly at:",
    errors: {
      emailRequired: "Email is required.",
      confirmRequired: "You must confirm that you are the account owner.",
      generic: "Something went wrong. Please try again.",
    },
  },
} as const;

const initialForm: FormState = {
  app: "my-butterfly",
  email: "",
  name: "",
  reason: "",
  confirmOwnership: false,
};

export default function AccountDeletionClient() {
  const [language, setLanguage] = useState<Language>("ro");
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const t = useMemo(() => content[language], [language]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.email.trim()) {
      setErrorMessage(t.errors.emailRequired);
      return;
    }

    if (!form.confirmOwnership) {
      setErrorMessage(t.errors.confirmRequired);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app: form.app,
          email: form.email.trim(),
          name: form.name.trim(),
          reason: form.reason.trim(),
          confirmOwnership: form.confirmOwnership,
          language,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.error || t.errors.generic);
      }

      setSuccessMessage(t.success);
      setForm(initialForm);
    } catch (error: any) {
      setErrorMessage(error?.message || t.errors.generic);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white pb-20 pt-[140px]">
      <div className="container">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-8 inline-flex rounded-sm border border-stroke p-1">
            <button
              type="button"
              onClick={() => setLanguage("ro")}
              className={`rounded-xs px-4 py-2 text-sm font-semibold transition ${
                language === "ro"
                  ? "bg-primary text-white"
                  : "text-body-color hover:text-black"
              }`}
              aria-pressed={language === "ro"}
            >
              {t.langRo}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-xs px-4 py-2 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-primary text-white"
                  : "text-body-color hover:text-black"
              }`}
              aria-pressed={language === "en"}
            >
              {t.langEn}
            </button>
          </div>

          <h1 className="mb-3 text-3xl font-bold text-black sm:text-4xl">
            {t.pageTitle}
          </h1>
          <p className="mb-8 text-base leading-relaxed text-body-color">
            {t.pageDescription}
          </p>

          <div className="mb-8 rounded-xs border border-stroke bg-[#fafbff] p-6">
            <h2 className="mb-3 text-xl font-semibold text-black">
              {t.inAppTitle}
            </h2>
            <p className="text-base leading-relaxed text-body-color">
              {t.inAppText}
            </p>
          </div>

          <div className="rounded-xs border border-stroke p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-semibold text-black">{t.webTitle}</h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              {t.webDescription}
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label
                  htmlFor="app"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  {t.appLabel}
                </label>
                <select
                  id="app"
                  name="app"
                  className="input-field"
                  value={form.app}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      app: event.target.value as FormState["app"],
                    })
                  }
                  required
                >
                  <option value="my-butterfly">My Butterfly</option>
                  <option value="do-it-now">DO IT NOW</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  {t.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input-field"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="input-field"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  {t.reasonLabel}
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  className="input-field resize-none"
                  value={form.reason}
                  onChange={(event) =>
                    setForm({ ...form, reason: event.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <input
                    id="confirmOwnership"
                    type="checkbox"
                    checked={form.confirmOwnership}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        confirmOwnership: event.target.checked,
                      })
                    }
                    className="mt-1 h-4 w-4 accent-primary"
                    required
                  />
                  <label
                    htmlFor="confirmOwnership"
                    className="text-sm font-medium text-body-color"
                  >
                    {t.confirmLabel}
                  </label>
                </div>
              </div>

              {errorMessage ? (
                <p role="alert" className="mb-4 text-sm font-medium text-red-600">
                  {errorMessage}
                </p>
              ) : null}

              {successMessage ? (
                <p
                  role="status"
                  className="mb-4 text-sm font-medium text-green-700"
                >
                  {successMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:shadow-signUp inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-white transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </form>
          </div>

          <div className="mt-8 rounded-xs border border-stroke bg-[#fafbff] p-6">
            <h2 className="mb-3 text-xl font-semibold text-black">{t.policyTitle}</h2>
            <p className="text-base leading-relaxed text-body-color">{t.policyText}</p>
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold text-black">
              {t.altContactTitle}
            </h2>
            <p className="text-base text-body-color">
              {t.altContactText}{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
