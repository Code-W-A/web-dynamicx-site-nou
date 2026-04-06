import { AppWindow, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { trustBarItems } from "./content";

const icons = [ShieldCheck, Workflow, AppWindow, Layers3];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-5">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trustBarItems.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5"
              >
                <Icon size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm leading-6 font-medium text-slate-700">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
