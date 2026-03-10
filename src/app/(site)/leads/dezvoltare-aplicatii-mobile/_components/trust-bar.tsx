import { Clock3, Cog, ShieldCheck, Workflow } from "lucide-react";
import { trustBarItems } from "./content";

const icons = [ShieldCheck, Workflow, Cog, Clock3];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-6">
      <div className="container">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {trustBarItems.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-3">
                <Icon size={18} className="text-primary" />
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
