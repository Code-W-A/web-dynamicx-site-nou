"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  fields,
  renderContract,
  statuses,
  unknownFields,
  type Contract,
  type Provider,
  type Signature,
  type Template,
  type Terms,
} from "@/lib/contracts/model";
import { api, ContractDocument, SignaturePad } from "./shared";

const emptyProvider: Provider = {
  name: "",
  taxId: "",
  address: "",
  representative: "",
  email: "",
};
const emptyTerms = (): Terms => ({
  number: "",
  date: new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Bucharest",
  }).format(new Date()),
  service: "",
  price: "",
  duration: "",
});
type Tab = "contracts" | "templates" | "settings";
export default function AdminContracts() {
  const [session, setSession] = useState<"loading" | "out" | "in">("loading");
  const [tab, setTab] = useState<Tab>("contracts");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [provider, setProvider] = useState<Provider>(emptyProvider);
  const [template, setTemplate] = useState({ id: "", name: "", body: "" });
  const [terms, setTerms] = useState<Terms>(emptyTerms);
  const [templateId, setTemplateId] = useState("");
  const [draftId, setDraftId] = useState("");
  const [creating, setCreating] = useState(false);
  const [selected, setSelected] = useState<Contract | null>(null);
  const [signature, setSignature] = useState<Signature>([]);
  const [link, setLink] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const textarea = useRef<HTMLTextAreaElement>(null);
  async function refresh() {
    const [cs, ts, ps] = await Promise.all([
      api<Contract[]>("contracts"),
      api<Template[]>("templates"),
      api<Provider | null>("settings"),
    ]);
    setContracts(cs);
    setTemplates(ts);
    if (ps) setProvider(ps);
    return cs;
  }
  useEffect(() => {
    let active = true;
    api("session")
      .then(async () => {
        if (!active) return;
        setSession("in");
        try {
          await refresh();
        } catch (e) {
          if (active) setError((e as Error).message);
        }
      })
      .catch(() => {
        if (active) setSession("out");
      });
    return () => {
      active = false;
    };
  }, []);
  async function run(fn: () => Promise<void>) {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await fn();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function firebaseClient() {
    const config = await api<{
      projectId: string;
      apiKey: string;
      authDomain: string;
      emulator: string | null;
    }>("config");
    const [
      { getApps, initializeApp },
      { getAuth, connectAuthEmulator, setPersistence, inMemoryPersistence },
    ] = await Promise.all([import("firebase/app"), import("firebase/auth")]);
    let app = getApps().find((a) => a.name === "contracts-client");
    if (!app) {
      app = initializeApp(config, "contracts-client");
      if (config.emulator)
        connectAuthEmulator(getAuth(app), `http://${config.emulator}`, {
          disableWarnings: true,
        });
    }
    const auth = getAuth(app);
    await setPersistence(auth, inMemoryPersistence);
    return auth;
  }
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await run(async () => {
      const auth = await firebaseClient();
      const { signInWithEmailAndPassword, signOut } =
        await import("firebase/auth");
      let credential;
      try {
        credential = await signInWithEmailAndPassword(
          auth,
          String(form.get("email")),
          String(form.get("password")),
        );
      } catch {
        throw new Error(
          "Autentificarea nu a reușit. Verifică emailul și parola.",
        );
      }
      try {
        await api("session", { idToken: await credential.user.getIdToken() });
      } finally {
        await signOut(auth);
      }
      setSession("in");
      await refresh();
    });
  }
  async function logout() {
    await run(async () => {
      await api("session", undefined, "DELETE");
      setSession("out");
      setContracts([]);
      setTemplates([]);
      setProvider(emptyProvider);
      setSelected(null);
      setLink("");
    });
  }
  async function saveTemplate(e: FormEvent) {
    e.preventDefault();
    await run(async () => {
      const saved = await api<Template>(
        `templates${template.id ? `/${template.id}` : ""}`,
        { name: template.name, body: template.body },
      );
      setTemplate(saved);
      await refresh();
      setNotice(`Șablon salvat, versiunea ${saved.version}.`);
    });
  }
  async function saveDraft(e: FormEvent) {
    e.preventDefault();
    await run(async () => {
      const saved = await api<Contract>(
        `contracts${draftId ? `/${draftId}` : ""}`,
        { templateId, terms },
      );
      setSelected(saved);
      setSignature([]);
      setCreating(false);
      await refresh();
      setNotice(
        "Ciorna a fost salvată. Verifică documentul și semnează înainte de trimitere.",
      );
    });
  }
  async function send() {
    if (!selected) return;
    await run(async () => {
      const result = await api<{ token: string }>(
        `contracts/${selected.id}/send`,
        selected.status === "draft" ? { signature } : {},
      );
      setLink(`${window.location.origin}/contracte/semneaza/${result.token}`);
      const cs = await refresh();
      setSelected(cs.find((c) => c.id === selected.id) || null);
      setSignature([]);
      setNotice(
        "Link generat. Copiază-l și trimite-l clientului. Linkurile anterioare nu mai funcționează.",
      );
    });
  }
  function open(c: Contract) {
    setSelected(c);
    setCreating(false);
    setSignature([]);
    setLink("");
    setError("");
    setNotice("");
  }
  function insertField(field: string) {
    const el = textarea.current;
    const start = el?.selectionStart ?? template.body.length;
    const end = el?.selectionEnd ?? start;
    const insert = `{{${field}}}`;
    setTemplate((t) => ({
      ...t,
      body: t.body.slice(0, start) + insert + t.body.slice(end),
    }));
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(start + insert.length, start + insert.length);
    });
  }
  const visible = contracts.filter(
    (c) =>
      (!status || c.status === status) &&
      [c.terms.number, c.client?.name, c.client?.email, c.terms.service]
        .join(" ")
        .toLocaleLowerCase("ro")
        .includes(search.toLocaleLowerCase("ro")),
  );
  const activeTemplate = templates.find((t) => t.id === templateId);
  return (
    <>
      <h1>Administrare contracte</h1>
      {session === "loading" ? (
        <p role="status">Se verifică sesiunea…</p>
      ) : null}
      {error ? (
        <p role="alert" className="error">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p role="status" className="success">
          {notice}
        </p>
      ) : null}
      {session === "out" ? (
        <section className="card login">
          <h2>Autentificare</h2>
          <p className="muted">Acces rezervat administratorilor autorizați.</p>
          <form className="stack" onSubmit={login}>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="username"
                required
                disabled={busy}
              />
            </label>
            <label>
              Parolă
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={busy}
              />
            </label>
            <button disabled={busy}>
              {busy ? "Se verifică…" : "Intră în administrare"}
            </button>
            <button
              type="button"
              className="secondary"
              disabled={busy}
              onClick={(e) => {
                const email = (
                  e.currentTarget.form?.elements.namedItem(
                    "email",
                  ) as HTMLInputElement
                )?.value;
                void run(async () => {
                  if (!email) throw new Error("Introdu adresa de email.");
                  const auth = await firebaseClient();
                  const { sendPasswordResetEmail } =
                    await import("firebase/auth");
                  await sendPasswordResetEmail(auth, email);
                  setNotice(
                    "Dacă adresa are un cont, vei primi instrucțiuni pentru resetarea parolei.",
                  );
                });
              }}
            >
              Am uitat parola
            </button>
          </form>
        </section>
      ) : null}
      {session === "in" ? (
        <>
          <nav className="tabs" aria-label="Administrare contracte">
            {(
              [
                ["contracts", "Contracte"],
                ["templates", "Șabloane"],
                ["settings", "Date prestator"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                className="secondary"
                aria-pressed={tab === key}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
            <button className="secondary" disabled={busy} onClick={logout}>
              Ieșire
            </button>
          </nav>
          {tab === "settings" ? (
            <section className="card">
              <h2>Date prestator</h2>
              <p className="muted">
                Sunt copiate în fiecare ciornă nouă. Contractele trimise rămân
                neschimbate.
              </p>
              <form
                className="stack"
                onSubmit={(e) => {
                  e.preventDefault();
                  void run(async () => {
                    await api("settings", provider);
                    setNotice("Datele prestatorului au fost salvate.");
                  });
                }}
              >
                <div className="two grid">
                  {(
                    [
                      ["name", "Denumire firmă"],
                      ["taxId", "CUI"],
                      ["address", "Adresă sediu"],
                      ["representative", "Reprezentant legal"],
                      ["email", "Email"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key}>
                      {label}
                      <input
                        type={key === "email" ? "email" : "text"}
                        required
                        maxLength={
                          key === "address" ? 1000 : key === "taxId" ? 100 : 500
                        }
                        value={provider[key]}
                        disabled={busy}
                        onChange={(e) =>
                          setProvider((p) => ({ ...p, [key]: e.target.value }))
                        }
                      />
                    </label>
                  ))}
                </div>
                <button disabled={busy}>Salvează datele</button>
              </form>
            </section>
          ) : null}
          {tab === "templates" ? (
            <section className="card">
              <h2>Șabloane de contract</h2>
              <div className="actions">
                <label>
                  Alege șablonul
                  <select
                    disabled={busy}
                    value={template.id}
                    onChange={(e) => {
                      const t = templates.find((t) => t.id === e.target.value);
                      setTemplate(t || { id: "", name: "", body: "" });
                    }}
                  >
                    <option value="">Șablon nou</option>
                    {templates.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} · v{t.version}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <form className="stack space-top" onSubmit={saveTemplate}>
                <label>
                  Nume șablon
                  <input
                    required
                    maxLength={200}
                    disabled={busy}
                    value={template.name}
                    onChange={(e) =>
                      setTemplate((t) => ({ ...t, name: e.target.value }))
                    }
                  />
                </label>
                <p className="muted">
                  Lipește textul contractului tău. Apasă un câmp pentru a-l
                  introduce la cursor. Câmpurile clientului se completează prin
                  formular.
                </p>
                <div className="field-buttons">
                  {fields.map((f) => (
                    <button
                      type="button"
                      className="secondary"
                      disabled={busy}
                      key={f}
                      onClick={() => insertField(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <label>
                  Textul contractului
                  <textarea
                    ref={textarea}
                    className="template-editor"
                    required
                    maxLength={40000}
                    disabled={busy}
                    value={template.body}
                    onChange={(e) =>
                      setTemplate((t) => ({ ...t, body: e.target.value }))
                    }
                  />
                </label>
                {unknownFields(template.body).length ? (
                  <p className="error">
                    Câmpuri necunoscute:{" "}
                    {unknownFields(template.body).join(", ")}
                  </p>
                ) : null}
                <p className="muted">
                  Câmpuri neincluse în text:{" "}
                  {fields
                    .filter((f) => !template.body.includes(`{{${f}}}`))
                    .join(", ") || "Toate câmpurile sunt incluse."}
                </p>
                <button
                  disabled={busy || unknownFields(template.body).length > 0}
                >
                  Salvează șablonul
                </button>
                <h3>Previzualizare</h3>
                <div className="document contract-text">
                  {renderContract(template.body, provider, {}, {}) ||
                    "Previzualizarea apare după introducerea textului."}
                </div>
              </form>
            </section>
          ) : null}
          {tab === "contracts" ? (
            <>
              <div className="actions">
                <button
                  disabled={busy}
                  onClick={() => {
                    setCreating(true);
                    setSelected(null);
                    setDraftId("");
                    setTerms(emptyTerms());
                    setTemplateId(templates[0]?.id || "");
                    setLink("");
                    setNotice("");
                  }}
                >
                  Contract nou
                </button>
                <a
                  className="button secondary"
                  href="/api/contracte/contracts/export"
                  download
                >
                  Export CSV / Excel
                </a>
                <button
                  className="secondary"
                  disabled={busy}
                  onClick={() =>
                    run(async () => {
                      await refresh();
                      setNotice("Lista a fost actualizată.");
                    })
                  }
                >
                  Actualizează
                </button>
              </div>
              {creating ? (
                <section className="card space-top">
                  <h2>
                    {draftId ? "Editează ciorna" : "Pregătește contractul"}
                  </h2>
                  <p className="muted">
                    Completează mai întâi datele prestatorului și salvează cel
                    puțin un șablon.
                  </p>
                  <form className="stack" onSubmit={saveDraft}>
                    <label>
                      Șablon
                      <select
                        value={templateId}
                        required
                        disabled={busy}
                        onChange={(e) => setTemplateId(e.target.value)}
                      >
                        <option value="">Alege un șablon</option>
                        {templates.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} · v{t.version}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="two grid">
                      {(
                        [
                          ["number", "Număr contract"],
                          ["date", "Data contractului"],
                          ["price", "Preț și condiții de plată"],
                          ["duration", "Durată"],
                        ] as const
                      ).map(([key, label]) => (
                        <label key={key}>
                          {label}
                          <input
                            type={key === "date" ? "date" : "text"}
                            required
                            disabled={busy}
                            maxLength={
                              key === "number"
                                ? 100
                                : key === "duration"
                                  ? 1000
                                  : 500
                            }
                            value={terms[key]}
                            onChange={(e) =>
                              setTerms((t) => ({ ...t, [key]: e.target.value }))
                            }
                          />
                        </label>
                      ))}
                    </div>
                    <label>
                      Servicii
                      <textarea
                        required
                        maxLength={8000}
                        value={terms.service}
                        disabled={busy}
                        onChange={(e) =>
                          setTerms((t) => ({ ...t, service: e.target.value }))
                        }
                      />
                    </label>
                    {activeTemplate ? (
                      <details>
                        <summary>Previzualizare contract</summary>
                        <div className="document contract-text">
                          {renderContract(activeTemplate.body, provider, terms)}
                        </div>
                      </details>
                    ) : null}
                    <div className="actions">
                      <button disabled={busy}>Salvează ciorna</button>
                      <button
                        type="button"
                        className="secondary"
                        disabled={busy}
                        onClick={() => setCreating(false)}
                      >
                        Închide
                      </button>
                    </div>
                  </form>
                </section>
              ) : null}
              {selected ? (
                <section className="space-top">
                  <div className="actions">
                    <h2>
                      Contract {selected.terms.number} ·{" "}
                      {statuses[selected.status]}
                    </h2>
                    <button
                      className="secondary"
                      onClick={() => {
                        setSelected(null);
                        setLink("");
                      }}
                    >
                      Închide documentul
                    </button>
                    <a
                      className="button secondary"
                      href={`/api/contracte/contracts/${selected.id}/export`}
                    >
                      Export JSON complet
                    </a>
                  </div>
                  <ContractDocument contract={selected} />
                  {selected.status === "draft" ? (
                    <div className="card">
                      <p className="notice">
                        Verifică documentul înainte de semnare. Câmpurile
                        clientului vor fi completate de acesta. La trimitere,
                        textul și semnătura ta se blochează.
                      </p>
                      <SignaturePad
                        value={signature}
                        onChange={setSignature}
                        disabled={busy}
                        label="Semnătura prestatorului"
                      />
                      <div className="actions">
                        <button
                          disabled={busy || !signature.length}
                          onClick={send}
                        >
                          Semnează și generează linkul
                        </button>
                        <button
                          disabled={busy}
                          className="secondary"
                          onClick={() => {
                            setTerms(selected.terms);
                            setTemplateId(selected.template.id);
                            setDraftId(selected.id);
                            setCreating(true);
                            setSelected(null);
                          }}
                        >
                          Editează ciorna
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {selected.status === "sent" ? (
                    <div className="card">
                      <p>
                        Linkul{" "}
                        {selected.expiresAt &&
                        selected.expiresAt < new Date().toISOString()
                          ? "a expirat"
                          : "expiră"}{" "}
                        la{" "}
                        {selected.expiresAt
                          ? new Date(selected.expiresAt).toLocaleString(
                              "ro-RO",
                              { timeZone: "Europe/Bucharest" },
                            )
                          : "—"}
                        .
                      </p>
                      <button
                        disabled={busy}
                        onClick={() => {
                          if (
                            window.confirm(
                              "Generezi un link nou? Linkul anterior va fi invalidat.",
                            )
                          )
                            void send();
                        }}
                      >
                        Generează un link nou
                      </button>
                    </div>
                  ) : null}
                  {link ? (
                    <div className="card link-box">
                      <label>
                        Link pentru client
                        <input
                          readOnly
                          value={link}
                          onFocus={(e) => e.currentTarget.select()}
                        />
                      </label>
                      <div className="actions">
                        <button
                          onClick={() =>
                            run(async () => {
                              await navigator.clipboard.writeText(link);
                              setNotice("Link copiat.");
                            })
                          }
                        >
                          Copiază linkul
                        </button>
                        <a href={link} target="_blank" rel="noreferrer">
                          Deschide pagina clientului
                        </a>
                      </div>
                      <p className="muted">
                        Copiază linkul acum. Pentru siguranță, acesta nu este
                        păstrat în forma originală în baza de date.
                      </p>
                    </div>
                  ) : null}
                  {selected.status === "draft" || selected.status === "sent" ? (
                    <button
                      className="danger"
                      disabled={busy}
                      onClick={() => {
                        if (
                          window.confirm(
                            `Anulezi contractul ${selected.terms.number}? Linkul clientului va fi revocat.`,
                          )
                        )
                          void run(async () => {
                            await api(`contracts/${selected.id}/cancel`, {});
                            const cs = await refresh();
                            setSelected(
                              cs.find((c) => c.id === selected.id) || null,
                            );
                            setLink("");
                            setNotice("Contract anulat.");
                          });
                      }}
                    >
                      Anulează contractul
                    </button>
                  ) : null}
                </section>
              ) : null}
              <section className="card space-top">
                <h2>Contractele tale</h2>
                <div className="two grid">
                  <label>
                    Caută
                    <input
                      type="search"
                      value={search}
                      placeholder="Număr, client, email sau serviciu"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </label>
                  <label>
                    Stare
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Toate stările</option>
                      {Object.entries(statuses).map(([key, label]) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Număr</th>
                        <th>Client</th>
                        <th>Stare</th>
                        <th>Preț</th>
                        <th>Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visible.map((c) => (
                        <tr key={c.id}>
                          <td>{c.terms.number}</td>
                          <td>{c.client?.name || "De completat"}</td>
                          <td>
                            <span className="badge">
                              {statuses[c.status]}
                              {c.status === "sent" &&
                              c.expiresAt &&
                              c.expiresAt < new Date().toISOString()
                                ? " · Link expirat"
                                : ""}
                            </span>
                          </td>
                          <td>{c.terms.price}</td>
                          <td>
                            <button
                              className="secondary"
                              onClick={() => open(c)}
                            >
                              Deschide
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {!visible.length ? (
                  <p className="muted">Niciun contract de afișat.</p>
                ) : null}
              </section>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}
