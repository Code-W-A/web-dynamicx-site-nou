const DEFAULT_ARCHIVE_PAGE_SIZE = 9;

type SearchPageParam = string | string[] | undefined;

export type BlogArchivePaginationResult<T> = {
  items: T[];
  currentPage: number;
  requestedPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  startIndex: number;
  isOutOfRange: boolean;
};

export function resolveArchiveRequestedPage(pageParam: SearchPageParam) {
  const rawValue = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const parsed = Number.parseInt((rawValue ?? "").trim(), 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
}

export function paginateArchiveItems<T>(
  items: T[],
  requestedPage: number,
  pageSize = DEFAULT_ARCHIVE_PAGE_SIZE,
): BlogArchivePaginationResult<T> {
  const normalizedItems = Array.isArray(items) ? items : [];
  const totalItems = normalizedItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const isOutOfRange = totalItems > 0 && requestedPage > totalPages;

  return {
    items: normalizedItems.slice(startIndex, startIndex + pageSize),
    currentPage,
    requestedPage,
    totalPages,
    pageSize,
    totalItems,
    startIndex,
    isOutOfRange,
  };
}

export function buildArchivePageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export function getArchivePaginationPages(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  if (currentPage <= 3) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
  }
  if (currentPage >= totalPages - 2) {
    pages.add(totalPages - 1);
    pages.add(totalPages - 2);
    pages.add(totalPages - 3);
  }

  return Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
}
