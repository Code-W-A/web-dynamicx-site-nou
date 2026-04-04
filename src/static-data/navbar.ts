import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";
import { serviceData } from "./service";

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
    submenu: serviceData.map((service) => ({
      id: uuid(),
      title: service.title,
      href: `/servicii/${service.slug}`,
      external: false,
    })),
  },
  {
    id: uuid(),
    title: "Portofoliu",
    href: "/portofoliu",
    external: false,
    submenu: [
      { id: uuid(), title: "Site-uri", href: "/portofoliu", external: false },
      { id: uuid(), title: "Magazine online", href: "/portofoliu", external: false },
      {
        id: uuid(),
        title: "Aplicații mobile",
        href: "/portofoliu-aplicatii-mobile",
        external: false,
      },
    ],
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
