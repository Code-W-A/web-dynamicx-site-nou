import Link from "next/link";
import { buildArchivePageHref, getArchivePaginationPages } from "@/lib/blog-archive-pagination";

type ArchivePaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export default function ArchivePagination({ basePath, currentPage, totalPages }: ArchivePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getArchivePaginationPages(currentPage, totalPages);

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Paginare articole"
    >
      {currentPage > 1 ? (
        <Link
          href={buildArchivePageHref(basePath, currentPage - 1)}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
        >
          Pagina anterioară
        </Link>
      ) : null}

      {visiblePages.map((page, index) => {
        const previousPage = visiblePages[index - 1];
        const showGap = typeof previousPage === "number" && page - previousPage > 1;

        return (
          <span key={page} className="contents">
            {showGap ? <span className="px-1 text-sm text-slate-400">…</span> : null}
            {page === currentPage ? (
              <span
                aria-current="page"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
              >
                {page}
              </span>
            ) : (
              <Link
                href={buildArchivePageHref(basePath, page)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
              >
                {page}
              </Link>
            )}
          </span>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          href={buildArchivePageHref(basePath, currentPage + 1)}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
        >
          Pagina următoare
        </Link>
      ) : null}
    </nav>
  );
}
