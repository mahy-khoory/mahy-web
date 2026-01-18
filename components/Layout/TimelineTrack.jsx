"use client";

import React, { forwardRef } from "react";
import TimelineCard from "./TimelineCard";

const TimelineTrack = forwardRef(function TimelineTrack(
  { items, accent, progress, wavePathRef, waveSvgRef },
  ref
) {
  return (
    // The reference has a stable vertical band where cards live.
    <div className="relative mt-10 lg:mt-14 overflow-visible">
      {/* Band baseline: wave runs through the middle of this zone */}
      <div
        ref={ref}
        className="
    relative flex w-max gap-56
    pl-[6vw] pr-[55vw]
    min-h-[420px]
    items-center
  "
      >
        {items.map((item, idx) => (
          <TimelineCard
            key={idx}
            idx={idx}
            item={item}
            accent={accent}
            progress={progress}
            wavePathRef={wavePathRef}
            waveSvgRef={waveSvgRef}
          />
        ))}
      </div>
    </div>
  );
});

export default TimelineTrack;

// "use client";

// import React, { forwardRef } from "react";
// import TimelineCard from "./TimelineCard";

// const TimelineTrack = forwardRef(function TimelineTrack(
//   { items, accent, progress, wavePathRef },
//   ref
// ) {
//   return (
//     <div className="relative mt-12 overflow-visible">
//       <div
//         ref={ref}
//         className="
//           relative flex w-max gap-24
//           pl-[4vw] pr-[55vw]
//           will-change-transform
//         "
//       >
//         {items.map((item, idx) => (
//           <TimelineCard
//             key={idx}
//             item={item}
//             accent={accent}
//             progress={progress}
//             wavePathRef={wavePathRef}
//           />
//         ))}
//       </div>
//     </div>
//   );
// });

// export default TimelineTrack;
