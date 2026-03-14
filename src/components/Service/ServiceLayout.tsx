import { Service } from "@/types/service";
import ServiceTabContent from "./ServiceTabContent";
import ServiceSidebar from "./ServiceSidebar";

export default function ServiceLayout({ service }: { service: Service }) {
  return (
    <section className="bg-gray-50 pt-[90px] pb-20">
      <div className="container">
        <div className="grid gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-12">
          <main className="min-w-0 lg:order-2">
            <ServiceTabContent service={service as Service} />
          </main>

          <aside className="lg:order-1" aria-label="Servicii și contact">
            <ServiceSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
