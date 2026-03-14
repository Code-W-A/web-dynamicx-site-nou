"use client";

import { serviceData } from "@/static-data/service";
import CallToActionCard from "./CallToActionCard";
import ServiceTabButtons from "./ServiceTabButtons";

export default function ServiceSidebar() {
  return (
    <div className="space-y-10">
      <ServiceTabButtons serviceData={serviceData} />
      <CallToActionCard />
    </div>
  );
}
