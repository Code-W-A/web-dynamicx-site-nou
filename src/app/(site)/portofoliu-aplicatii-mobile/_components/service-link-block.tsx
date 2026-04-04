import Link from "next/link";
import { mobileAppsServiceHref } from "../mobile-app-portfolio-data";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Link intern variabil spre money page-ul de servicii mobile. */
export default function ServiceLinkBlock({ children, className }: Props) {
  return (
    <Link
      href={mobileAppsServiceHref}
      className={
        className ??
        "font-semibold text-primary underline-offset-4 transition hover:text-primary/90 hover:underline"
      }
    >
      {children}
    </Link>
  );
}
