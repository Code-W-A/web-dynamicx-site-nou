"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function StickyMobileCtaBar() {
  const pathname = usePathname();

  const whatsappHref = useMemo(() => {
    const message = `Salut! Sunt pe pagina ${pathname} si vreau o oferta pentru dezvoltare aplicatie mobila.`;
    return `https://wa.me/40774550758?text=${encodeURIComponent(message)}`;
  }, [pathname]);

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-[45] border-t border-slate-200 bg-white/96 p-2 backdrop-blur sm:hidden"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.5rem)",
      }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href="#formular-lead"
          className="bg-primary inline-flex items-center justify-center rounded-xl px-2 py-3 text-xs font-semibold text-white"
        >
          Cere ofertă
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-2 py-3 text-xs font-semibold text-slate-800"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
