"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { contactData } from "./content";

type PortfolioProject = {
  title: string;
  category: string;
  intro: string;
  challenge: string;
  solution: string;
  features: string[];
  idealFor: string[];
  impact: string;
  techNote: string;
  previewBlocks: string[];
};

type ProjectDetailsDialogProps = {
  open: boolean;
  project: PortfolioProject | null;
  onClose: () => void;
  onPrimaryCta: (projectName: string) => void;
};

export default function ProjectDetailsDialog({
  open,
  project,
  onClose,
  onPrimaryCta,
}: ProjectDetailsDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  const handleCta = () => {
    onPrimaryCta(project.title);
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        aria-label="Închide detaliile proiectului"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-hidden rounded-t-3xl border border-white/20 bg-white shadow-2xl md:inset-auto md:top-1/2 md:left-1/2 md:max-h-[85vh] md:w-[92vw] md:max-w-5xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl">
        <div className="flex items-start justify-between border-b border-gray-100 px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Studiu de caz</p>
            <h3 className="mt-1 text-2xl font-bold text-black">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{project.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:text-gray-700"
            aria-label="Închide"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(88vh-78px)] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6 md:max-h-[calc(85vh-78px)]">
          <p className="text-sm leading-relaxed text-gray-700">{project.intro}</p>

          <div className="mt-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white sm:p-5">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Preview extins</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.previewBlocks.map((block) => (
                <div key={block} className="rounded-xl bg-white/12 px-3 py-3 text-sm">
                  {block}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Provocarea</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{project.challenge}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Soluția livrată</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{project.solution}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Funcționalități cheie</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <span key={feature} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Ideal pentru</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {project.idealFor.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Notă implementare</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{project.techNote}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-green-700 uppercase">Impact business</p>
            <p className="mt-2 text-sm leading-relaxed text-green-900">{project.impact}</p>
          </div>

          <div className="sticky bottom-0 mt-6 border-t border-gray-200 bg-white/95 pt-4 pb-2 backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleCta}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Vreau o aplicatie similara
              </button>
              <button
                type="button"
                onClick={handleCta}
                className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Solicita oferta
              </button>
              <Link
                href={contactData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary/30 hover:text-primary"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
