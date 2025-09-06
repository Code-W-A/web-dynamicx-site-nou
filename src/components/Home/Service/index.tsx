import SectionTitle from "@/components/Common/SectionTitle";
import { serviceData } from "@/static-data/service";
import Link from "next/link";
import SingleService from "./SingleService";

export default function Service() {
  return (
    <section
      id="services"
      className="bg-black pt-20 pb-12 lg:pt-[90px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
          <div className="w-full px-4 lg:w-8/12">
            <SectionTitle
              mainTitle="CE FACEM"
              title="Creare site de prezentare, creare magazin online, SEO & mentenanță de site"
              color="white"
              className="max-w-[625px] mb-[50px]"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-[50px] flex lg:justify-end">
              <Link
                href="/servicii"
                className="hover:text-primary text-lg font-medium text-white underline"
              >
                VEZI SERVICIILE
              </Link>
            </div>
          </div>
        </div>
        <div className="container grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]">
          {serviceData.map((service) => (
            <SingleService key={service?.id} service={service} />
          ))}
        </div>
    
      </div>
    </section>
  );
}
