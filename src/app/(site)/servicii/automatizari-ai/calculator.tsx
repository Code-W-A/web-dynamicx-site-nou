"use client";
import { useState } from "react";
import styles from "./page.module.css";

const number = new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 2 });
export default function Calculator() {
  const [values, setValues] = useState(["5", "1", "50"]);
  const [hours, people, cost] = values.map(Number);
  const annual = hours * people * 52;
  const valid =
    values.every((v) => v.trim() !== "" && Number.isFinite(Number(v))) &&
    hours >= 0 &&
    people >= 1 &&
    Number.isInteger(people) &&
    cost >= 0 &&
    Number.isFinite(annual * cost);
  return (
    <div className={styles.calculator}>
      <div>
        <p className={styles.muted}>
          Exemplu editabil · calcul orientativ pentru 52 de săptămâni
        </p>
        <div className={styles.fields}>
          {[
            "Ore consumate / săptămână / persoană",
            "Număr persoane implicate",
            "Cost mediu / oră (lei)",
          ].map((label, i) => (
            <label key={label} htmlFor={`ai-calc-${i}`}>
              {label}
              <input
                id={`ai-calc-${i}`}
                type="number"
                min={i === 1 ? 1 : 0}
                step={i === 1 ? 1 : "any"}
                value={values[i]}
                onChange={(e) =>
                  setValues(
                    values.map((v, n) => (n === i ? e.target.value : v)),
                  )
                }
              />
            </label>
          ))}
        </div>
      </div>
      <div className={styles.result} aria-live="polite" aria-atomic="true">
        <span>Cost estimativ al procesului manual</span>
        <strong>
          {valid ? `${number.format(annual * cost)} lei / an` : "—"}
        </strong>
        <p>
          {valid
            ? `${number.format(annual)} ore de muncă manuală / an`
            : "Completează valori valide în toate câmpurile."}
        </p>
        <small>
          În etapa de analiză stabilim ce parte poate fi automatizată în
          siguranță.
        </small>
      </div>
    </div>
  );
}
