"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveBackdrop from "./WaveBackdrop";
import TimelineTrack from "./TimelineTrack";
import Ruler from "./Ruler";
import MobileTimeline from "./MobileTimeline";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline({
  title = "Milestones of OPPO AI",
  items = [],
  accent = "#2c3f6e",
}) {
  const sectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const trackRef = useRef(null);
  const wavePathRef = useRef(null);
  const waveSvgRef = useRef(null);
  const triggerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const years = useMemo(() => {
    const y = items.map((i) => i.rulerLabel ?? i.year).filter(Boolean);
    return y.length ? y : ["2025", "2024", "2023", "2020", "2020", "2002", "1990"];
  }, [items]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const pinWrap = pinWrapRef.current;
      const track = trackRef.current;
      const wavePath = wavePathRef.current;

      if (!section || !pinWrap || !track || !wavePath) return;

      const prefersReduced = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      )?.matches;

      const getTravel = () => {
        const trackWidth = track.scrollWidth;
        const viewport = window.innerWidth;
        const extra = Math.min(viewport * 0.38, 520);
        return Math.max(0, trackWidth - viewport + extra);
      };

      wavePath.style.strokeDasharray = "1";
      wavePath.style.strokeDashoffset = "1";

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTravel()}`,
          scrub: prefersReduced ? false : 1,
          pin: pinWrap,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      tl.to(
        track,
        {
          x: () => -getTravel(),
        },
        0
      );

      // Reference looks like wave reveals progressively (your current behavior is fine)
      tl.to(
        wavePath,
        {
          strokeDashoffset: 0,
        },
        0
      );

      triggerRef.current = tl.scrollTrigger;

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, sectionRef);

    return () => {
      triggerRef.current = null;
      ctx.revert();
    };
  }, [isMobile]);

  const setProgressExternal = (p01) => {
    const st = triggerRef.current;
    if (!st) return;
    const p = Math.max(0, Math.min(1, p01));
    const targetY = st.start + (st.end - st.start) * p;

    window.scrollTo({
      top: targetY,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <div ref={pinWrapRef} className="relative min-h-screen overflow-hidden">
        <div className="mx-auto max-w-225 px-6 lg:px-10 pt-16 lg:pt-24">
          <h2 className="text-[30px] leading-[1.05] lg:text-5xl font-semibold tracking-tight text-black">
            {title}
          </h2>
        </div>

        {!isMobile && (
          <WaveBackdrop
            ref={waveSvgRef} // ✅ NEW
            accent={accent}
            pathRef={wavePathRef}
            className="top-[210px] lg:top-[230px]"
          />
        )}

        {isMobile ? (
          <MobileTimeline items={items} accent={accent} />
        ) : (
          <div className="relative">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
              <TimelineTrack
                ref={trackRef}
                items={items}
                accent={accent}
                progress={progress}
                wavePathRef={wavePathRef}
                waveSvgRef={waveSvgRef} // ✅ NEW
              />
            </div>

            <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-10 pb-14">
              <Ruler
                accent={accent}
                progress={progress}
                years={years}
                onChangeProgress={setProgressExternal}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


// "use client";

// import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import WaveBackdrop from "./WaveBackdrop";
// import TimelineTrack from "./TimelineTrack";
// import Ruler from "./Ruler";
// import MobileTimeline from "./MobileTimeline";

// gsap.registerPlugin(ScrollTrigger);

// export default function HistoryTimeline({
//   title = "Milestones of OPPO AI",
//   items = [],
//   accent = "#F59E0B", // warm orange like reference
// }) {
//   const sectionRef = useRef(null);
//   const pinWrapRef = useRef(null);
//   const trackRef = useRef(null);
//   const wavePathRef = useRef(null);
//   const triggerRef = useRef(null);

//   const [progress, setProgress] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const years = useMemo(() => {
//     // reference shows labels like 2025, 2024, 2023, 2020, Before 2020
//     // You can pass these directly too, but this keeps it easy:
//     const y = items.map((i) => i.rulerLabel ?? i.year).filter(Boolean);
//     return y.length ? y : ["2025", "2024", "2023", "2020", "Before 2020"];
//   }, [items]);

//   useLayoutEffect(() => {
//     const mq = window.matchMedia("(max-width: 1024px)");
//     const apply = () => setIsMobile(mq.matches);
//     apply();
//     mq.addEventListener?.("change", apply);
//     return () => mq.removeEventListener?.("change", apply);
//   }, []);

//   useLayoutEffect(() => {
//     if (isMobile) return;

//     const ctx = gsap.context(() => {
//       const section = sectionRef.current;
//       const pinWrap = pinWrapRef.current;
//       const track = trackRef.current;
//       const wavePath = wavePathRef.current;

//       if (!section || !pinWrap || !track || !wavePath) return;

//       const prefersReduced = window.matchMedia?.(
//         "(prefers-reduced-motion: reduce)"
//       )?.matches;

//       // Helper to compute travel distance for the track
//       const getTravel = () => {
//         const trackWidth = track.scrollWidth;
//         const viewport = window.innerWidth;
//         // extra padding so last card breathes like reference
//         const extra = Math.min(viewport * 0.38, 520);
//         return Math.max(0, trackWidth - viewport + extra);
//       };

//       // Make wave path drawable
//       wavePath.style.strokeDasharray = "1";
//       wavePath.style.strokeDashoffset = "1";

//       const tl = gsap.timeline({
//         defaults: { ease: "none" },
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: () => `+=${getTravel()}`,
//           scrub: prefersReduced ? false : 1,
//           pin: pinWrap,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => setProgress(self.progress),
//         },
//       });

//       // Track horizontal movement
//       tl.to(
//         track,
//         {
//           x: () => -getTravel(),
//         },
//         0
//       );

//       // Wave draw
//       tl.to(
//         wavePath,
//         {
//           strokeDashoffset: 0,
//         },
//         0
//       );

//       triggerRef.current = tl.scrollTrigger;

//       const onResize = () => ScrollTrigger.refresh();
//       window.addEventListener("resize", onResize);
//       return () => window.removeEventListener("resize", onResize);
//     }, sectionRef);

//     return () => {
//       triggerRef.current = null;
//       ctx.revert();
//     };
//   }, [isMobile]);

//   const setProgressExternal = (p01) => {
//     const st = triggerRef.current;
//     if (!st) return;

//     const p = Math.max(0, Math.min(1, p01));
//     const targetY = st.start + (st.end - st.start) * p;

//     window.scrollTo({
//       top: targetY,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section ref={sectionRef} className="relative w-full bg-white">
//       {/* PIN WRAP (the pinned region) */}
//       <div ref={pinWrapRef} className="relative min-h-screen overflow-hidden">
//         {/* Title area (reference has big title, left aligned, lots of air) */}
//         <div className="mx-auto max-w-[900px] px-6 lg:px-10 pt-15 lg:pt-24">
//           <h2 className="text-[30px] leading-[1.05] lg:text-[56px] font-semibold tracking-tight text-black">
//             {title}
//           </h2>
//         </div>

//         {/* Wave behind cards */}
//         {!isMobile && (
//           <WaveBackdrop
//             accent={accent}
//             pathRef={wavePathRef}
//             // position tuned to match screenshot band height
//             className="top-[210px] lg:top-[230px]"
//           />
//         )}

//         {/* Cards + track */}
//         {isMobile ? (
//           <MobileTimeline items={items} accent={accent} />
//         ) : (
//           <div className="relative">
//             <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
//               <TimelineTrack
//                 ref={trackRef}
//                 items={items}
//                 accent={accent}
//                 progress={progress}
//                 wavePathRef={wavePathRef}
//               />
//             </div>

//             <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-10 pb-14">
//               <Ruler
//                 accent={accent}
//                 progress={progress}
//                 years={years}
//                 onChangeProgress={setProgressExternal}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
