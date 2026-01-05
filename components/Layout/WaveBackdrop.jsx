"use client";

import React, { forwardRef } from "react";

export default function WaveBackdrop({
  accent,
  pathRef,
  progress = 0,
  className = "",
}) {
  return (
    <div className={`pointer-events-none absolute left-0 right-0 ${className}`}>
      <svg
        className="w-full h-[420px] lg:h-[460px]"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{
          transform: `translateY(${Math.sin(progress * Math.PI) * 26}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* soft glow */}
        <path
          d="M-80,420
             C 240,560 440,520 640,380
             C 860,230 1010,110 1240,165
             C 1460,210 1540,350 1700,295"
          fill="none"
          stroke={accent}
          strokeOpacity="0.15"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* main line (drawn) */}
        <path
          ref={pathRef}
          d="M-80,420
             C 240,560 440,520 640,380
             C 860,230 1010,110 1240,165
             C 1460,210 1540,350 1700,295"
          fill="none"
          stroke={accent}
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
          }}
        />
      </svg>
    </div>
  );
}
