import { FooterLink } from "@/types/footer";
import Link from "next/link";

export default function FooterLinkItem({ linkItem }: { linkItem: FooterLink }) {
  return (
    <li>
      <Link
        href={linkItem?.href}
        target={linkItem?.external ? "_blank" : "_self"}
        className="inline-block text-base text-[#b4bdd0] hover:text-[#8fa2ff]"
      >
        {linkItem?.title}
      </Link>
    </li>
  );
}
