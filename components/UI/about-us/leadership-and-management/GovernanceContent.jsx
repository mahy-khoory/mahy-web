"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { GOVERNANCE_CONTENT } from "./governanceData";

export default function GovernanceContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  const content = GOVERNANCE_CONTENT[tab];
  if (!content) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={tab}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          pt-20
          mt-10
          pb-28
        "
      >
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h1
            className="
              text-[34px]
              font-semibold
              tracking-tight
              text-gray-900
            "
          >
            {content.title}
          </h1>

          <div
            className="
              mt-10
              space-y-8
              text-[17px]
              leading-[1.75]
              text-gray-600
            "
          >
            {content.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
