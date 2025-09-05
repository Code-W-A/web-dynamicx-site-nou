import { Team } from "@/types/team";
import { v4 as uuid } from "uuid";

export const teamData: Team[] = [
  {
    id: uuid(),
    name: "Corina Ionescu",
    designation: "Dezvoltator Web",
    image: "/images/team/image-01.jpg",
  },
  {
    id: uuid(),
    name: "Cristian Pop",
    designation: "Dezvoltator Aplicații Mobile",
    image: "/images/team/image-02.jpg",
  },
  {
    id: uuid(),
    name: "Ioana Sandu",
    designation: "UI/UX Designer",
    image: "/images/team/image-03.jpg",
  },
  {
    id: uuid(),
    name: "Nicolae Bratu",
    designation: "Manager Vânzări",
    image: "/images/team/image-04.jpg",
  },
];
