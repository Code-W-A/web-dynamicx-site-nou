"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Client, Contract, Signature } from "@/lib/contracts/model";
import { api, ContractDocument, SignaturePad } from "./shared";

const emptyClient: Client = {
  type: "company",
  name: "",
  taxId: "",
  representative: "",
  address: "",
  email: "",
  phone: "",
};
export default function ClientContract({ token }: { token: string }) {
  const [contract, setContract] = useState<Contract | null>(null);
  const [client, setClient] = useState<Client>(emptyClient);
  const [preview, setPreview] = useState<{ text: string; hash: string } | null>(
    null,
  );
  const [signature, setSignature] = useState<Signature>([]);
  const [accepted, setAccepted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadFailed, setLoadFailed] = useState(false);
  const root = `public/${encodeURIComponent(token)}`;
  async function load() {
    setLoading(true);
    setError("");
    try {
      setContract(await api<Contract>(root));
      setLoadFailed(false);
    } catch (e) {
      setError((e as Error).message);
      setLoadFailed(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    let active = true;
    api<Contract>(root)
      .then((c) => {
        if (active) setContract(c);
      })
      .catch((e) => {
        if (active) {
          setError(e.message);
          setLoadFailed(true);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [root]);
  function update(key: keyof Client, value: string) {
    setClient((c) => ({
      ...c,
      [key]: value,
      ...(key === "type" && value === "person"
        ? { taxId: "", representative: "" }
        : {}),
    }));
    setPreview(null);
    setAccepted(false);
    setSignature([]);
  }
  async function prepare(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      setPreview(await api(`${root}/preview`, { client }));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function sign() {
    if (!preview) return;
    setBusy(true);
    setError("");
    try {
      const result = await api<{ signedAt: string; contentHash: string }>(
        `${root}/sign`,
        { client, signature, accepted, previewHash: preview.hash },
      );
      setContract((c) =>
        c
          ? {
              ...c,
              status: "signed",
              client,
              clientSignature: signature,
              finalText: preview.text,
              ...result,
            }
          : null,
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <h1>
        {contract?.status === "signed"
          ? "Contract semnat"
          : "Completează și semnează contractul"}
      </h1>
      {loading ? <p role="status">Se încarcă documentul…</p> : null}
      {error ? (
        <p role="alert" className="error">
          {error}
        </p>
      ) : null}
      {loadFailed ? (
        <button type="button" onClick={load}>
          Reîncearcă încărcarea
        </button>
      ) : null}
      {contract?.status === "signed" ? (
        <>
          <p className="success" role="status">
            Contractul a fost semnat și salvat. Îl poți consulta mai jos.
          </p>
          <ContractDocument contract={contract} />
        </>
      ) : contract ? (
        <>
          <p className="muted">
            Contract {contract.terms.number} · {contract.provider.name}.
            Completează datele, verifică documentul, apoi semnează.
          </p>
          <section className="card">
            <h2>1. Datele tale</h2>
            <form onSubmit={prepare} className="stack">
              <label>
                Tip client
                <select
                  value={client.type}
                  disabled={busy}
                  onChange={(e) => update("type", e.target.value)}
                >
                  <option value="company">Firmă</option>
                  <option value="person">Persoană fizică</option>
                </select>
              </label>
              <div className="two grid">
                <label>
                  {client.type === "company"
                    ? "Denumirea firmei"
                    : "Nume și prenume"}
                  <input
                    required
                    maxLength={500}
                    autoComplete={
                      client.type === "company" ? "organization" : "name"
                    }
                    disabled={busy}
                    value={client.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    maxLength={320}
                    autoComplete="email"
                    disabled={busy}
                    value={client.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </label>
                {client.type === "company" ? (
                  <>
                    <label>
                      CUI
                      <input
                        required
                        maxLength={100}
                        disabled={busy}
                        value={client.taxId}
                        onChange={(e) => update("taxId", e.target.value)}
                      />
                    </label>
                    <label>
                      Reprezentant legal
                      <input
                        required
                        maxLength={500}
                        autoComplete="name"
                        disabled={busy}
                        value={client.representative}
                        onChange={(e) =>
                          update("representative", e.target.value)
                        }
                      />
                    </label>
                  </>
                ) : null}
                <label>
                  {client.type === "company" ? "Adresa sediului" : "Adresă"}
                  <input
                    required
                    maxLength={1000}
                    autoComplete="street-address"
                    disabled={busy}
                    value={client.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                </label>
                <label>
                  Telefon
                  <input
                    type="tel"
                    required
                    maxLength={40}
                    autoComplete="tel"
                    disabled={busy}
                    value={client.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>
              </div>
              <p className="muted">
                Datele și semnătura sunt folosite pentru încheierea și păstrarea
                acestui contract.
              </p>
              <button disabled={busy} type="submit">
                {busy ? "Se procesează…" : "Verifică documentul complet"}
              </button>
            </form>
          </section>
          <h2>
            2.{" "}
            {preview
              ? "Verifică documentul complet"
              : "Contractul pregătit pentru tine"}
          </h2>
          {!preview ? (
            <p className="notice">
              Câmpurile dintre ⟦ ⟧ vor fi completate cu datele tale după
              verificarea formularului.
            </p>
          ) : null}
          <ContractDocument
            contract={{
              ...contract,
              ...(preview ? { client, finalText: preview.text } : {}),
            }}
          />
          {preview ? (
            <section className="card">
              <h2>3. Semnează contractul</h2>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={accepted}
                  disabled={busy}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                Am citit contractul și sunt de acord cu conținutul acestuia.
              </label>
              <SignaturePad
                value={signature}
                onChange={setSignature}
                disabled={busy}
                label="Semnătura clientului"
              />
              <div className="actions">
                <button
                  disabled={busy || !accepted || !signature.length}
                  onClick={sign}
                >
                  {busy ? "Se salvează…" : "Semnează și finalizează"}
                </button>
              </div>
              <p className="muted">
                După semnare, contractul nu mai poate fi modificat. Semnătura
                desenată nu este o semnătură electronică calificată.
              </p>
            </section>
          ) : null}
        </>
      ) : null}
    </>
  );
}
