import { teamData } from "@/static-data/team";
import SingleTeam from "./SingleTeam";

export default function Team() {
  return (
    <section className="bg-white pt-20 lg:pt-[90px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                ECHIPĂ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Echipa noastră
              </h2>
              <p className="text-base text-body-color">
                Specialiști în web design, creare site și dezvoltare aplicații mobile.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
