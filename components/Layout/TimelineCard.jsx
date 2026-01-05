"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TimelineCard({ item, accent, progress, index, total }) {
  const revealAt = index / Math.max(1, total - 1);
  const visible = progress >= revealAt - 0.12;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-[360px] lg:w-[420px]"
    >
      <div className="mb-5 flex items-center gap-3">
        {/* small sparkle marker like screenshot */}
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <span
            className="absolute h-[12px] w-[12px] rotate-45 rounded-[3px]"
            style={{ background: accent }}
          />
          <span
            className="absolute h-[12px] w-[12px] rounded-[3px]"
            style={{ background: accent, opacity: 0.85 }}
          />
        </span>

        <div className="text-[14px] tracking-wide text-black/55">
          {item.year}
        </div>
      </div>

      <h3 className="text-[22px] lg:text-[24px] font-semibold text-black leading-snug">
        {item.title}
      </h3>

      {item.subtitle ? (
        <div className="mt-2 text-[15px] text-black/55">
          {item.subtitle}
        </div>
      ) : null}

      <div className="mt-5 text-[15px] leading-7 text-black/55 max-w-[52ch]">
        {Array.isArray(item.description)
          ? item.description.map((line, i) => (
              <p key={i} className={i ? "mt-2" : ""}>
                {line}
              </p>
            ))
          : item.description}
      </div>
    </motion.article>
  );
}
