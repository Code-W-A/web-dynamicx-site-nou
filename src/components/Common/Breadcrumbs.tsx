import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Dreapta (hero PageTitle) sau stânga */
  align?: "start" | "end";
  /** Fără margine inferioară (ex. în PageTitle) */
  compact?: boolean;
  className?: string;
}

export default function Breadcrumbs({
  items,
  align = "start",
  compact = false,
  className = "",
}: BreadcrumbsProps) {
  const isEnd = align === "end";

  const list = (
    <ol
      className={`flex flex-nowrap items-center ${
        isEnd ? "justify-end" : "justify-start"
      } ${isEnd ? "[direction:ltr]" : ""}`}
    >
      {items.map((item, index) => (
        <li key={index} className="flex shrink-0 items-center">
          {item.current ? (
            <span
              className="whitespace-nowrap text-base font-medium text-primary"
              title={item.name}
            >
              {item.name}
            </span>
          ) : (
            <Link
              href={item.href || "#"}
              className="whitespace-nowrap pr-1 text-base font-medium text-body-color hover:text-primary"
              title={item.name}
            >
              {item.name}
            </Link>
          )}
          {index < items.length - 1 && (
            <span
              className="mx-3 block h-2 w-2 shrink-0 rotate-45 border-r-2 border-t-2 border-body-color"
              aria-hidden
            />
          )}
        </li>
      ))}
    </ol>
  );

  return (
    <nav
      className={`${compact ? "" : "mb-6"} ${className}`}
      aria-label="Navigare breadcrumb"
    >
      {isEnd ? (
        <div className="min-w-0 w-full overflow-x-auto overflow-y-hidden pb-1 [direction:rtl] [scrollbar-width:thin]">
          {list}
        </div>
      ) : (
        <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:thin]">
          {list}
        </div>
      )}
    </nav>
  );
}
