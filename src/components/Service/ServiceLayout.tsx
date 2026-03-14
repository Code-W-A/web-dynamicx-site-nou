import { Service } from "@/types/service";
import { ServiceTabBody, ServiceTabIntro } from "./ServiceTabContent";
import ServiceSidebar from "./ServiceSidebar";

export default function ServiceLayout({ service }: { service: Service }) {
  return (
    <section className="bg-gray-50 pt-[90px] pb-20">
      <div className="container">
        <div className="grid gap-10 px-5 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-10">
          <main className="min-w-0 lg:col-span-8 lg:col-start-5 lg:row-start-1">
            <ServiceTabIntro service={service as Service} />
          </main>

          <aside className="lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-start" aria-label="Servicii și contact">
            <ServiceSidebar />
          </aside>

          <div className="min-w-0 lg:col-span-12 lg:row-start-2">
            <ServiceTabBody service={service as Service} />
          </div>
        </div>
      </div>
    </section>
  );
}
