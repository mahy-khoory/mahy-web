"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const Pagination = ({ currentPage = 1, totalPages = 1, lightBg = true }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const safeTotalPages = Math.max(1, Number(totalPages) || 1);
  const safeCurrentPage = Math.min(
    Math.max(1, Number(currentPage) || 1),
    safeTotalPages,
  );

  const handlePageChange = (newPage) => {
    if (
      newPage < 1 ||
      newPage > safeTotalPages ||
      newPage === safeCurrentPage
    ) {
      return;
    }

    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.set("page", String(newPage));

    router.push(`${pathname}?${nextSearchParams.toString()}`, {
      scroll: true,
    });
  };

  const getVisiblePages = () => {
    if (safeTotalPages <= 5) {
      return Array.from({ length: safeTotalPages }, (_, index) => index + 1);
    }

    const pages = [];

    const pushPage = (value) => {
      if (typeof value === "number" && (value < 1 || value > safeTotalPages)) {
        return;
      }

      if (pages[pages.length - 1] !== value) {
        pages.push(value);
      }
    };

    pushPage(1);

    if (safeCurrentPage <= 3) {
      pushPage(2);
      pushPage(3);
      pushPage(4);
      pushPage("ellipsis");
      pushPage(safeTotalPages);
      return pages;
    }

    if (safeCurrentPage >= safeTotalPages - 2) {
      pushPage("ellipsis");
      pushPage(safeTotalPages - 3);
      pushPage(safeTotalPages - 2);
      pushPage(safeTotalPages - 1);
      pushPage(safeTotalPages);
      return pages;
    }

    pushPage("ellipsis");
    pushPage(safeCurrentPage - 1);
    pushPage(safeCurrentPage);
    pushPage(safeCurrentPage + 1);
    pushPage("ellipsis");
    pushPage(safeTotalPages);

    return pages;
  };

  if (safeTotalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages();

  return (
    <nav className="mt-8 flex justify-center">
      <div
        className={`inline-flex items-center justify-center gap-1 rounded-2xl border p-1.5 ${
          lightBg
            ? "border-gray-200 bg-white"
            : "border-white/8 bg-[#0c1525] shadow-[0_14px_45px_rgba(1,9,20,0.6)]"
        }`}
      >
        <button
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
            lightBg ? "hover:text-gray-800" : "hover:text-gray-100",
            safeCurrentPage === 1
              ? "cursor-not-allowed text-gray-600"
              : lightBg
                ? "text-gray-600"
                : "text-gray-200 hover:text-gray-100",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center">
          {visiblePages.map((page, index) => {
            if (page === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className={`flex h-10 w-10 items-center justify-center ${
                    lightBg ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  ...
                </span>
              );
            }

            const isCurrentPage = page === safeCurrentPage;
            const isEndPage = page === safeTotalPages && safeTotalPages > 3;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center border border-transparent text-sm font-medium transition-all",
                  isCurrentPage &&
                    `rounded-full border-gray-400 font-semibold ${
                      lightBg ? "bg-background" : "bg-gray-800"
                    }`,
                  isEndPage && !isCurrentPage && "rounded-full border-gray-300",
                  !isCurrentPage &&
                    (lightBg
                      ? "text-gray-600 hover:text-gray-800"
                      : "text-gray-200 hover:text-gray-100"),
                )}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === safeTotalPages}
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
            lightBg ? "hover:text-gray-800" : "hover:text-gray-100",
            safeCurrentPage === safeTotalPages
              ? `cursor-not-allowed ${lightBg ? "text-gray-500" : "text-gray-600"}`
              : lightBg
                ? "text-gray-800"
                : "text-gray-200",
          )}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
