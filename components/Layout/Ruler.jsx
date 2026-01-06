"use client";

import React, { useCallback, useRef, useState } from "react";

export default function Ruler({ accent, progress, years, onChangeProgress }) {
  const railRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  const setFromClientX = useCallback(
    (clientX) => {
      const rail = railRef.current;
      if (!rail) return;
      const r = rail.getBoundingClientRect();
      const p = (clientX - r.left) / r.width;
      onChangeProgress(clamp01(p));
    },
    [onChangeProgress]
  );

  const onPointerDown = (e) => {
    setDragging(true);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(x);

    const onMove = (ev) => {
      const mx = ev.touches ? ev.touches[0].clientX : ev.clientX;
      setFromClientX(mx);
    };

    const onUp = () => {
      setDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        className="
          relative h-[64px]
          select-none
        "
        onMouseDown={onPointerDown}
        onTouchStart={onPointerDown}
      >
        {/* ticks */}
        <div className="absolute left-0 right-0 top-8 flex items-end gap-[5px] opacity-80">
          {Array.from({ length: 210 }).map((_, i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full bg-black/15"
              style={{
                height: i % 10 === 0 ? 24 : i % 5 === 0 ? 18 : 12,
              }}
            />
          ))}
        </div>

        {/* scrubber pill */}
        <div
          className="absolute top-7 -translate-x-1/2"
          style={{ left: `${progress * 100}%` }}
        >
          <div
            className="
              flex h-10 w-14 items-center justify-center
              rounded-full
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
              ring-1 ring-black/5
            "
            style={{
              background: accent,
              transform: dragging ? "scale(1.03)" : "scale(1)",
              transition: "transform 160ms ease",
            }}
          >
            <span className="text-white text-lg leading-none">← →</span>
          </div>
        </div>
      </div>

      {/* year labels */}
      <div className="mt-4 flex items-center justify-between text-[14px] text-black/55">
        {years.map((y, i) => (
          <span key={i} className="tracking-wide">
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}
