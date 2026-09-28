"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ArrowUpRight } from "lucide-react";
import type { LeadSource } from "./types";
import { emitLeadEvent } from "./events";

const SelectionContext = createContext<{
  selectedPackage: string;
  selectPackage: (name: string) => void;
}>({ selectedPackage: "", selectPackage: () => {} });

export function LeadSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, selectPackage] = useState("");
  return (
    <SelectionContext.Provider value={{ selectedPackage, selectPackage }}>
      {children}
    </SelectionContext.Provider>
  );
}

export const useLeadSelection = () => useContext(SelectionContext);

export function ProjectLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="https://www.studiobycristian.com/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        emitLeadEvent("lead-web-site", "project_click", {
          project_slug: "studio-by-cristian-design",
        })
      }
    >
      {children}
    </a>
  );
}

export function LeadCta({
  source,
  placement,
  packageName,
  children,
  className = "",
  secondary = false,
}: {
  source: LeadSource;
  placement: string;
  packageName?: string;
  children: ReactNode;
  className?: string;
  secondary?: boolean;
}) {
  const { selectPackage } = useLeadSelection();
  return (
    <a
      href="#formular-lead"
      className={`${secondary ? "lead-button-secondary" : "lead-button"} ${className}`}
      onClick={() => {
        if (packageName) selectPackage(packageName);
        emitLeadEvent(source, "cta_click", {
          placement,
          ...(packageName ? { package_name: packageName } : {}),
        });
        document
          .getElementById("formular-lead")
          ?.focus({ preventScroll: true });
      }}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function ContactLink({
  source,
  kind,
  href,
  children,
  className = "",
}: {
  source: LeadSource;
  kind: "phone" | "whatsapp" | "email";
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      {...(kind === "whatsapp"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={() =>
        emitLeadEvent(source, "contact_click", { lead_type: kind })
      }
    >
      {children}
    </a>
  );
}

export function StickyLeadCta({
  source,
  price,
  children,
}: {
  source: LeadSource;
  price: string;
  children: ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById("formular-lead");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  return visible ? (
    <div className="lead-sticky" data-lead-sticky>
      <span>
        De la <strong>{price}</strong>
      </span>
      <LeadCta source={source} placement="sticky">
        {children}
      </LeadCta>
    </div>
  ) : null;
}
