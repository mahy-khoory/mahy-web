"use client";

import React, { forwardRef, useMemo } from "react";
import TimelineCard from "./TimelineCard";

const TimelineTrack = forwardRef(function TimelineTrack(
  { items, accent, progress },
  ref
) {
  const offsets = useMemo(
    () => ["mt-20", "mt-28", "mt-16", "mt-24", "mt-18"],
    []
  );

  return (
    <div className="relative mt-10 lg:mt-8 overflow-hidden">
      <div
        ref={ref}
        className="
          flex w-max gap-16 lg:gap-20
          pl-[4vw] pr-[55vw]
          will-change-transform
        "
      >
        {items.map((item, idx) => (
          <div key={idx} className={offsets[idx % offsets.length]}>
            <TimelineCard item={item} accent={accent} progress={progress} index={idx} total={items.length} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default TimelineTrack;
