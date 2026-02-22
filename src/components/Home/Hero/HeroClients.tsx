import { heroClientsData } from "@/static-data/brands";

export default function HeroClients() {
  return (
    <div className="clients pt-16">
      <p className="mb-2 flex items-center text-xs font-normal text-body-color">
        Proiecte recente
        <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {heroClientsData.map((client) => (
          <a
            key={client?.id}
            href={client?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-3 py-1 text-xs text-body-color hover:border-black hover:text-black"
          >
            {client?.name}
          </a>
        ))}
      </div>
    </div>
  );
}
