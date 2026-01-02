import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";
import CallToActionCard from "./CallToActionCard";
import ServiceTabButtons from "./ServiceTabButtons";
import ServiceTabContent from "./ServiceTabContent";

export default function ServiceLayout({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-gray-50 pt-[90px] pb-20">
        <div className="container">
          <div className="-mx-5 lg:clearfix">
            <div className="w-full px-5 lg:float-left lg:w-4/12">
              <div className="space-y-10">
                <ServiceTabButtons serviceData={serviceData} />
                <CallToActionCard />
              </div>
            </div>

            <div className="w-full px-5 lg:w-auto lg:pl-10">
              <ServiceTabContent service={service as Service} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
