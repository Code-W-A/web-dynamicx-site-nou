import { FooterLink, FooterSocial } from "@/types/footer";
import { v4 as uuid } from "uuid";

export const footerLinks: FooterLink[] = [
  {
    id: uuid(),
    title: "Studioul Web",
    href: "#",
    external: false,
  },
  {
    id: uuid(),
    title: "Sponsorizări",
    href: "#",
    external: false,
  },
  {
    id: uuid(),
    title: "Newsletter",
    href: "#",
    external: false,
  },
  {
    id: uuid(),
    title: "Contactează-ne",
    href: "/contact",
    external: false,
  },
];

export const footerNewsData: FooterLink[] = [
  { id: uuid(), title: "Acasă", href: "/", external: false },
  { id: uuid(), title: "Servicii", href: "/servicii", external: false },
  { id: uuid(), title: "Portofoliu", href: "/portofoliu", external: false },
  { id: uuid(), title: "Despre noi", href: "/despre", external: false },
  { id: uuid(), title: "Blog", href: "/blog", external: false },
  { id: uuid(), title: "Contact", href: "/contact", external: false },
];

export const footerQuickLinks: FooterLink[] = [
  {
    id: uuid(),
    title: "Politica de confidențialitate",
    href: "/politica-de-confidentialitate",
    external: false,
  },
  {
    id: uuid(),
    title: "Termeni si conditii",
    href: "/termeni-si-conditii",
    external: false,
  },
  {
    id: uuid(),
    title: "Politica de cookies",
    href: "/politica-cookies",
    external: false,
  },
];

export const footerSocialLinks: FooterSocial[] = [];
