"use client";

import { FormEvent, useMemo, useState } from "react";

type Language = "ro" | "en";
export type AccountDeletionApp =
  | "my-butterfly"
  | "do-it-now"
  | "cristina-zurba-tarot-astrology";

type FormState = {
  app: AccountDeletionApp;
  email: string;
  name: string;
  reason: string;
  confirmOwnership: boolean;
};

type AccountDeletionClientProps = {
  forcedApp?: AccountDeletionApp;
  showAppSelector?: boolean;
};

type AppContent = {
  appName: string;
  developerName: string;
  packageName: string;
  roInAppPath: string;
  enInAppPath: string;
};

const appContent: Record<AccountDeletionApp, AppContent> = {
  "my-butterfly": {
    appName: "My Butterfly",
    developerName: "Mobi Tools ROU",
    packageName: "com.prosoft.mybutterfly",
    roInAppPath: "Settings/Setări → Account/Cont → Delete account / Șterge contul",
    enInAppPath: "Settings → Account → Delete account",
  },
  "do-it-now": {
    appName: "DO IT NOW",
    developerName: "Mobi Tools ROU",
    packageName: "com.doitnow.zurba",
    roInAppPath: "Settings/Setări → Account/Cont → Delete account / Șterge contul",
    enInAppPath: "Settings → Account → Delete account",
  },
  "cristina-zurba-tarot-astrology": {
    appName: "Cristina Zurba Tarot&Astrology",
    developerName: "Mobi Tools ROU",
    packageName: "com.cristina.zurba.tarot",
    roInAppPath: "Settings/Setări → Account/Cont → Delete account / Șterge contul",
    enInAppPath: "Settings → Account → Delete account",
  },
};

function createInitialForm(app: AccountDeletionApp): FormState {
  return {
    app,
    email: "",
    name: "",
    reason: "",
    confirmOwnership: false,
  };
}

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "mobitoolsro@gmail.com";

const content = {
  ro: {
    langRo: "RO",
    langEn: "EN",
    officialLine1:
      "Aceasta este pagina oficială de ștergere cont pentru {app}, publicată pe Google Play de {developer}.",
    officialLine2:
      "Această pagină este găzduită de Web Dynamicx ca website de suport tehnic pentru {developer} și {app}.",
    officialLine3:
      "Din această pagină, utilizatorii pot solicita ștergerea contului {app} și a datelor asociate.",
    howToDeleteTitle: "Cum îți ștergi contul",
    inAppStepLabel: "1. În aplicație:",
    onPageStepLabel: "2. Pe această pagină:",
    onPageStepText: "trimite formularul de ștergere cont de mai jos.",
    formTitle: "Formular ștergere cont",
    appLabel: "Aplicație",
    emailLabel: "Email",
    nameLabel: "Nume (opțional)",
    reasonLabel: "Motiv (opțional)",
    confirmLabel: "Confirm că sunt titularul contului",
    submit: "Trimite cererea",
    submitting: "Se trimite...",
    success:
      "Cererea ta a fost trimisă cu succes. Te vom contacta pe email pentru confirmare, dacă este necesar.",
    whatDeletedTitle: "Ce se va șterge",
    whatDeletedText:
      "Când cererea este procesată, vom șterge contul {app} și datele asociate acelui cont.",
    retainedDataTitle: "Date care pot fi păstrate",
    retainedDataText:
      "Anumite date pot fi păstrate acolo unde este necesar pentru obligații legale, securitate, prevenirea fraudei, soluționarea disputelor sau conformitate de reglementare.",
    processingTimeTitle: "Timp de procesare",
    processingTimeText:
      "Procesăm cererile de ștergere cont în maximum 10 zile lucrătoare.",
    supportContactTitle: "Contact suport",
    supportContactText: "Dacă preferi, ne poți contacta și la:",
    developerTitle: "Developer",
    packageNameTitle: "Package name",
    errors: {
      emailRequired: "Adresa de email este obligatorie.",
      confirmRequired: "Trebuie să confirmi că ești titularul contului.",
      generic: "A apărut o eroare. Încearcă din nou.",
    },
  },
  en: {
    langRo: "RO",
    langEn: "EN",
    officialLine1:
      "This is the official account deletion page for {app}, published on Google Play by {developer}.",
    officialLine2:
      "This page is hosted by Web Dynamicx as the technical support website for {developer} and {app}.",
    officialLine3:
      "From this page, users can request deletion of their {app} account and associated data.",
    howToDeleteTitle: "How to delete your account",
    inAppStepLabel: "1. In the app:",
    onPageStepLabel: "2. On this page:",
    onPageStepText: "submit the account deletion form below.",
    formTitle: "Account deletion form",
    appLabel: "Application",
    emailLabel: "Email",
    nameLabel: "Name (optional)",
    reasonLabel: "Reason (optional)",
    confirmLabel: "I confirm that I am the account owner",
    submit: "Submit request",
    submitting: "Sending...",
    success:
      "Your request was submitted successfully. We will contact you by email for confirmation if needed.",
    whatDeletedTitle: "What will be deleted",
    whatDeletedText:
      "When your request is processed, we will delete your {app} account and the data associated with that account.",
    retainedDataTitle: "Data that may be retained",
    retainedDataText:
      "Certain data may be retained where required for legal obligations, security, fraud prevention, dispute resolution, or regulatory compliance.",
    processingTimeTitle: "Processing time",
    processingTimeText:
      "We process account deletion requests within 10 business days.",
    supportContactTitle: "Support contact",
    supportContactText: "If you prefer, you can also contact us at:",
    developerTitle: "Developer",
    packageNameTitle: "Package name",
    errors: {
      emailRequired: "Email is required.",
      confirmRequired: "You must confirm that you are the account owner.",
      generic: "Something went wrong. Please try again.",
    },
  },
} as const;

function replaceVars(
  value: string,
  vars: { app: string; developer: string },
): string {
  return value
    .replace("{app}", vars.app)
    .replace("{developer}", vars.developer);
}

export default function AccountDeletionClient({
  forcedApp,
  showAppSelector = true,
}: AccountDeletionClientProps) {
  const [language, setLanguage] = useState<Language>("ro");
  const [form, setForm] = useState<FormState>(
    createInitialForm(forcedApp || "my-butterfly"),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const t = useMemo(() => content[language], [language]);
  const selectedApp = forcedApp || form.app;
  const selectedAppConfig = appContent[selectedApp];

  const replaceData = {
    app: selectedAppConfig.appName,
    developer: selectedAppConfig.developerName,
  };

  const inAppPath =
    language === "ro"
      ? selectedAppConfig.roInAppPath
      : selectedAppConfig.enInAppPath;

  const officialLine1 = replaceVars(t.officialLine1, replaceData);
  const officialLine2 = replaceVars(t.officialLine2, replaceData);
  const officialLine3 = replaceVars(t.officialLine3, replaceData);
  const whatDeletedText = replaceVars(t.whatDeletedText, replaceData);

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
      setForm(createInitialForm(forcedApp || selectedApp));
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
            {selectedAppConfig.appName} – Account Deletion
          </h1>
          <p className="mb-2 text-xl font-semibold text-primary">
            {t.developerTitle}: {selectedAppConfig.developerName}
          </p>

          <div className="mb-8 space-y-3 text-base leading-relaxed text-body-color">
            <p>{officialLine1}</p>
            <p>{officialLine2}</p>
            <p>{officialLine3}</p>
          </div>

          <div className="mb-8 rounded-xs border border-stroke bg-[#fafbff] p-6">
            <h2 className="mb-3 text-xl font-semibold text-black">
              {t.howToDeleteTitle}
            </h2>
            <ol className="space-y-3 text-base leading-relaxed text-body-color">
              <li>
                <span className="font-semibold text-black">{t.inAppStepLabel}</span>{" "}
                {inAppPath}
              </li>
              <li>
                <span className="font-semibold text-black">{t.onPageStepLabel}</span>{" "}
                {t.onPageStepText}
              </li>
            </ol>
          </div>

          <div className="rounded-xs border border-stroke p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-semibold text-black">{t.formTitle}</h2>

            <form onSubmit={handleSubmit} noValidate>
              {showAppSelector ? (
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
                    <option value="cristina-zurba-tarot-astrology">
                      Cristina Zurba Tarot&Astrology
                    </option>
                  </select>
                </div>
              ) : (
                <input type="hidden" name="app" value={selectedApp} />
              )}

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
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
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
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
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
                  onChange={(event) => setForm({ ...form, reason: event.target.value })}
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
                <p role="status" className="mb-4 text-sm font-medium text-green-700">
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

          <div className="mt-8 space-y-6">
            <div className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-3 text-xl font-semibold text-black">
                {t.whatDeletedTitle}
              </h2>
              <p className="text-base leading-relaxed text-body-color">
                {whatDeletedText}
              </p>
            </div>

            <div className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-3 text-xl font-semibold text-black">
                {t.retainedDataTitle}
              </h2>
              <p className="text-base leading-relaxed text-body-color">
                {t.retainedDataText}
              </p>
            </div>

            <div className="rounded-xs border border-stroke bg-[#fafbff] p-6">
              <h2 className="mb-3 text-xl font-semibold text-black">
                {t.processingTimeTitle}
              </h2>
              <p className="text-base leading-relaxed text-body-color">
                {t.processingTimeText}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold text-black">
              {t.supportContactTitle}
            </h2>
            <p className="text-base text-body-color">
              {t.supportContactText}{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {supportEmail}
              </a>
            </p>
          </div>

          <div className="mt-6 rounded-xs border border-stroke p-6">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-body-color">
                {t.developerTitle}
              </p>
              <p className="text-lg font-semibold text-black">
                {selectedAppConfig.developerName}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-body-color">
                {t.packageNameTitle}
              </p>
              <p className="text-lg font-semibold text-black">
                {selectedAppConfig.packageName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
