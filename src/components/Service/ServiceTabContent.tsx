import { Service } from "@/types/service";
import Image from "next/image";

export default function ServiceTabContent({ service }: { service: Service }) {
  return (
    <div>
      {/* Prevent the hero image block from underlapping the floated left sidebar on desktop */}
      <div className="relative mb-8 flow-root aspect-34/20 rounded-xs bg-stone-100">
        {service?.image ? (
          <Image
            src={service?.image}
            alt={service?.title || "Serviciu"}
            fill
            className="w-full object-cover object-center"
          />
        ) : (
          "no image found"
        )}
      </div>
      <h2 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
        {service?.title}
      </h2>

      {service?.details}

      {service?.faqs && service.faqs.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-5 text-xl font-bold text-black sm:text-2xl">Întrebări frecvente</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xs border border-stone-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-black">{faq.question}</h3>
                <p className="text-base text-body-color">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Studii de caz eliminate conform cerinței */}
    </div>
  );
}
