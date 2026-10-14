"use client";

import { useRef, useState, type PointerEvent } from "react";
import type { Signature, Contract } from "@/lib/contracts/model";
import { renderContract } from "@/lib/contracts/model";

export async function api<T>(
  path: string,
  data?: unknown,
  method = data === undefined ? "GET" : "POST",
): Promise<T> {
  const response = await fetch(`/api/contracte/${path}`, {
    method,
    credentials: "same-origin",
    cache: "no-store",
    ...(data === undefined
      ? {}
      : {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
  }).catch(() => {
    throw new Error(
      "Conexiunea a fost întreruptă. Datele din formular au fost păstrate. Reîncearcă.",
    );
  });
  const result = await response.json().catch(() => {
    throw new Error(
      "Serverul nu a răspuns corect. Datele din formular au fost păstrate. Reîncearcă.",
    );
  });
  if (!response.ok)
    throw new Error(result.error || "Operația nu a reușit. Încearcă din nou.");
  return result;
}
export function SignatureView({ value }: { value: Signature }) {
  return (
    <svg
      viewBox="0 0 600 180"
      role="img"
      aria-label="Semnătură"
      className="signature-view"
    >
      {value.map((stroke, i) => (
        <polyline
          key={i}
          points={stroke.map((p) => `${p.x * 600},${p.y * 180}`).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
export function SignaturePad({
  value,
  onChange,
  disabled = false,
  label = "Semnătură",
}: {
  value: Signature;
  onChange: (value: Signature) => void;
  disabled?: boolean;
  label?: string;
}) {
  const current = useRef<Signature[number] | null>(null);
  const activePointer = useRef<number | null>(null);
  const [drawing, setDrawing] = useState<Signature[number]>([]);
  function point(e: PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: Number(
        Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)).toFixed(
          4,
        ),
      ),
      y: Number(
        Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)).toFixed(
          4,
        ),
      ),
    };
  }
  function end(e: PointerEvent<SVGSVGElement>) {
    if (activePointer.current !== e.pointerId) return;
    if (current.current && current.current.length > 1)
      onChange([...value, current.current]);
    current.current = null;
    activePointer.current = null;
    setDrawing([]);
  }
  return (
    <fieldset className="signature-pad" disabled={disabled}>
      <legend>{label}</legend>
      <p className="muted">Desenează cu degetul sau mouse-ul în chenar.</p>
      <svg
        viewBox="0 0 600 180"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Zonă pentru ${label.toLowerCase()}`}
        style={{ touchAction: "none" }}
        onPointerDown={(e) => {
          if (disabled || activePointer.current !== null || value.length >= 100)
            return;
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          activePointer.current = e.pointerId;
          current.current = [point(e)];
          setDrawing([...current.current]);
        }}
        onPointerMove={(e) => {
          if (
            disabled ||
            activePointer.current !== e.pointerId ||
            !current.current
          )
            return;
          if (
            current.current.length >= 1000 ||
            value.reduce((n, s) => n + s.length, 0) + current.current.length >=
              2000
          )
            return;
          current.current.push(point(e));
          setDrawing([...current.current]);
        }}
        onPointerUp={end}
        onPointerCancel={end}
      >
        {[...value, drawing].map((stroke, i) => (
          <polyline
            key={i}
            points={stroke.map((p) => `${p.x * 600},${p.y * 180}`).join(" ")}
            fill="none"
            stroke="#182c50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <button
        type="button"
        className="secondary"
        onClick={() => {
          current.current = null;
          activePointer.current = null;
          setDrawing([]);
          onChange([]);
        }}
      >
        Șterge semnătura
      </button>
    </fieldset>
  );
}
export function ContractDocument({ contract }: { contract: Contract }) {
  return (
    <article className="document">
      <h2>Contract {contract.terms.number}</h2>
      <div className="contract-text">
        {contract.finalText ||
          renderContract(
            contract.template.body,
            contract.provider,
            contract.terms,
            contract.client,
          )}
      </div>
      <div className="two signatures grid">
        <div>
          <h3>Prestator: {contract.provider.name}</h3>
          {contract.providerSignature ? (
            <SignatureView value={contract.providerSignature} />
          ) : (
            <p className="muted">Nesemnat</p>
          )}
        </div>
        <div>
          <h3>Client: {contract.client?.name || "De completat"}</h3>
          {contract.clientSignature ? (
            <SignatureView value={contract.clientSignature} />
          ) : (
            <p className="muted">Nesemnat</p>
          )}
        </div>
      </div>
      {contract.signedAt ? (
        <p className="muted">
          Semnat la{" "}
          {new Date(contract.signedAt).toLocaleString("ro-RO", {
            timeZone: "Europe/Bucharest",
          })}
        </p>
      ) : null}
      {contract.contentHash ? (
        <p className="fingerprint">SHA-256: {contract.contentHash}</p>
      ) : null}
    </article>
  );
}
