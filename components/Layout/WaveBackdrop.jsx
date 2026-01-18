"use client";

import React, { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WaveBackdrop = forwardRef(function WaveBackdrop(
  { accent, pathRef, className = "" },
  svgRef
) {
  const { scrollYProgress } = useScroll();

  // Move left as page scrolls down
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <motion.div
      className={`pointer-events-none absolute -translate-y-16 inset-x-0 ${className}`}
      style={{ x }}
    >
      <svg
        ref={svgRef}
        className="w-full h-140"
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="35%" stopColor={accent} stopOpacity="0.45" />
            <stop offset="65%" stopColor={accent} stopOpacity="0.45" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d="M -80 320
               C 100 280, 200 100, 400 80
               C 600 60, 700 120, 800 200
               C 900 280, 1000 340, 1200 300
               C 1400 260, 1500 180, 1680 120"
          fill="none"
          stroke="url(#waveFade)"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
          }}
        />
      </svg>
    </motion.div>
  );
});

export default WaveBackdrop;




// "use client";

// import React from "react";

// export default function WaveBackdrop({ accent, pathRef, className = "" }) {
//   return (
//     <div className={`pointer-events-none absolute left-0 right-0 ${className}`}>
//       <svg
//         className="w-full h-[420px] lg:h-[460px]"
//         viewBox="0 0 1600 600"
//         preserveAspectRatio="none"
//       >
//         <path
//           ref={pathRef}
//           d="M-40,420
//              C 240,560 440,520 640,380
//              C 860,230 1010,110 1240,165
//              C 1460,210 1540,350 1700,295"
//           fill="none"
//           stroke={accent}
//           strokeWidth="3"
//           strokeLinecap="round"
//           pathLength="1"
//           style={{
//             strokeDasharray: 1,
//             strokeDashoffset: 1,
//           }}
//         />
//       </svg>
//     </div>
//   );
// }



// "use client";

// import React, { forwardRef } from "react";

// export default function WaveBackdrop({
//   accent,
//   pathRef,
//   progress = 0,
//   className = "",
// }) {
//   return (
//     <div className={`pointer-events-none absolute left-0 right-0 ${className}`}>
//       <svg
//         className="w-full h-[420px] lg:h-[460px]"
//         viewBox="0 0 1600 600"
//         preserveAspectRatio="none"
//         style={{
//           transform: `translateY(${Math.sin(progress * Math.PI) * 26}px)`,
//           transition: "transform 0.1s linear",
//         }}
//       >
//         {/* soft glow */}
//         <path
//           d="M-80,420
//              C 240,560 440,520 640,380
//              C 860,230 1010,110 1240,165
//              C 1460,210 1540,350 1700,295"
//           fill="none"
//           stroke={accent}
//           strokeOpacity="0.15"
//           strokeWidth="10"
//           strokeLinecap="round"
//         />

//         {/* main line (drawn) */}
//         <path
//           ref={pathRef}
//           d="M-80,420
//              C 240,560 440,520 640,380
//              C 860,230 1010,110 1240,165
//              C 1460,210 1540,350 1700,295"
//           fill="none"
//           stroke={accent}
//           strokeOpacity="0.35"
//           strokeWidth="3"
//           strokeLinecap="round"
//           pathLength="1"
//           style={{
//             strokeDasharray: 1,
//             strokeDashoffset: 1,
//           }}
//         />
//       </svg>
//     </div>
//   );
// }
