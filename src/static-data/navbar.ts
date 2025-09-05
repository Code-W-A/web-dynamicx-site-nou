import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Acasă",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "Servicii",
    href: "/servicii",
    external: false,
  },
  {
    id: uuid(),
    title: "Portofoliu",
    href: "/portofoliu",
    external: false,
  },
  {
    id: uuid(),
    title: "Despre noi",
    href: "/despre",
    external: false,
  },
  {
    id: uuid(),
    title: "Blog",
    href: "/blog",
    external: false,
  },
];
