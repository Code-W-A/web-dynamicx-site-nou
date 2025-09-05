import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    review:
      "Colaborarea cu Web Dynamicx a fost impecabilă. Site-ul nostru se încarcă rapid, designul este modern și am observat o creștere clară a cererilor din contact.",
    companyLogo: "/images/brands/studiobycristian.svg",
    companyName: "Studio by Cristian",
    name: "Studio by Cristian",
    image: "lucide:person",
    designation: "Design & Furniture",
    href: "/portofoliu",
  },
  {
    id: uuid(),
    review:
      "Conținut clar, structură foarte bună și rezultate în Google. Am primit consultanță pe tot parcursul și recomand cu încredere pentru optimizare SEO site.",
    companyLogo: "/images/brands/cristinazurba.svg",
    companyName: "Cristina Zurba",
    name: "Cristina Zurba",
    image: "lucide:person",
    designation: "Îndrumare spirituală",
    href: "/portofoliu",
  },
  {
    id: uuid(),
    review:
      "Platformă stabilă, prezentare tehnică coerentă și viteză excelentă. Web Dynamicx a livrat la timp și a implementat cerințe complexe fără probleme.",
    companyLogo: "/images/brands/firsttech.svg",
    companyName: "FirstTech",
    name: "FirstTech",
    image: "lucide:person",
    designation: "Echipamente Industriale",
    href: "/portofoliu",
  },
];
