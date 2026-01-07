"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import { GOVERNANCE_TABS } from "./governanceData";

export default function GovernanceTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "overview";

  const onTabClick = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      className="
        sticky top-[72px] z-40
        bg-white
        border-b border-gray-200
      "
    >
      <div className="mx-auto max-w-7xl px-0 lg:px-6">
        {/* 
          MOBILE: swipeable
          DESKTOP: centered
        */}
        <div className="flex lg:justify-center">
          <div
            className="
              flex gap-10
              whitespace-nowrap

              overflow-x-auto lg:overflow-hidden
              scrollbar-hide

              px-6 lg:px-0
            "
          >
            {GOVERNANCE_TABS.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => onTabClick(tab.key)}
                  className={clsx(
                    "relative py-4 text-[15px] font-medium transition-colors",
                    isActive
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  )}
                >
                  {tab.label}

                  {isActive && (
                    <motion.span
                      layoutId="governance-underline"
                      className="
                        absolute left-0 right-0 -bottom-px
                        h-[2px] bg-red-600
                      "
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
