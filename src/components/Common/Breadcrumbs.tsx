import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6">
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.current ? (
              <span className="text-base font-medium text-primary">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href || "#"}
                className="pr-1 text-base font-medium text-body-color hover:text-primary"
              >
                {item.name}
              </Link>
            )}
            {index < items.length - 1 && (
              <span className="mx-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
