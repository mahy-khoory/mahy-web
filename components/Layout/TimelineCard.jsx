"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TimelineCard({ item, progress, accent }) {
  const pathClearance = 80;
  const visible = progress >= item.curveAt - 0.08;

  // STRICT rows (reference)
  const rowY = item.side === "above"
    ? -(pathClearance / 2 + 100)
    : (pathClearance / 2 + 120);

  return (
    <motion.article
      initial={{ opacity: 0, y: rowY + 24 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? rowY : rowY + 24,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-[360px] lg:w-[420px]"
    >
      {/* marker */}
      <div className="mb-1 flex items-center gap-1">
        <span className="relative flex items-center h-5 w-5">
          <span
            className="absolute h-[12px] w-[12px] rotate-45 rounded-[3px]"
            style={{ background: accent }}
          />
          <span
            className="absolute h-[12px] w-[12px] rounded-[3px]"
            style={{ background: accent, opacity: 0.85 }}
          />
        </span>
        <span className="text-sm text-black/55">{item.year}</span>
      </div>

      <h3 className="font-semibold text-black">
        {item.title}
      </h3>

      <div className="mt-2 text-xs leading-5 text-black/55 max-w-[45ch]">
        {item.description.map((d, i) => (
          <p key={i} className={i ? "mt-1" : ""}>{d}</p>
        ))}
      </div>
    </motion.article>
  );
}


// "use client";

// import React, { useMemo } from "react";
// import { motion } from "framer-motion";

// function getPointOnPath(path, t) {
//   if (!path) return { x: 0, y: 0 };
//   const len = path.getTotalLength();
//   return path.getPointAtLength(len * t);
// }

// export default function TimelineCard({ item, accent, progress, wavePathRef }) {
//   const point = useMemo(() => {
//     return getPointOnPath(wavePathRef.current, item.curveAt);
//   }, [wavePathRef, item.curveAt]);

//   //   const offsetY = item.side === "above" ? -110 : 110;
//   const visible = progress >= item.curveAt - 0.08;
//   const baseY = point.y; // wave Y at this progress
//   const offsetY = item.side === "above" ? -90 : 90;

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 22 }}
//       animate={{
//         opacity: visible ? 1 : 0,
//         y: visible ? baseY + offsetY : baseY + offsetY + 22,
//       }}
//       transition={{ duration: 0.45, ease: "easeOut" }}
//       className="w-[360px] lg:w-[420px]"
//     >
//       <div className="mb-4 flex items-center gap-3">
//         <span className="relative inline-flex h-5 w-5">
//           <span
//             className="absolute h-[12px] w-[12px] rotate-45 rounded-[3px]"
//             style={{ background: accent }}
//           />
//           <span
//             className="absolute h-[12px] w-[12px] rounded-[3px]"
//             style={{ background: accent, opacity: 0.85 }}
//           />
//         </span>

//         <div className="text-[14px] tracking-wide text-black/55">
//           {item.year}
//         </div>
//       </div>

//       <h3 className="text-[22px] lg:text-[24px] font-semibold text-black">
//         {item.title}
//       </h3>

//       <div className="mt-4 text-[15px] leading-7 text-black/55">
//         {item.description.map((line, i) => (
//           <p key={i} className={i ? "mt-2" : ""}>
//             {line}
//           </p>
//         ))}
//       </div>
//     </motion.article>
//   );
// }
