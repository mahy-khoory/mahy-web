"use client";

import { useEffect, useState } from "react";

export default function FullScreenLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const messages = [
    "Where industries converge.",
    "Many sectors. One vision.",
    "Engineering a multi-sector future.",
    "Innovation across industries.",
    "Powering diverse industries.",
    "One ecosystem. Many sectors.",
  ];

  useEffect(() => {
    const duration = 10000;
    const intervalTime = 100;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    const secondInterval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    const timeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, duration);

    return () => {
      clearInterval(interval);
      clearInterval(secondInterval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 px-6">
      <div className="relative w-full max-w-md mb-6">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: `${progress}%`,
            height: "180%",
            borderRadius: "9999px",
            background: `
      linear-gradient(
        90deg,
        rgba(59,130,246,0) 0%,
        rgba(59,130,246,0.12) 25%,
        rgba(96,165,250,0.28) 55%,
        rgba(147,197,253,0.7) 85%,
        rgba(147,197,253,0.9) 100%
      )
    `,
            filter: "blur(10px)",
            transform: "translateY(-50%) scaleY(0.7)",
            zIndex: 1,
          }}
        />
        <div className="relative h-3.5 w-full rounded-full bg-white/10 border border-white/10 overflow-hidden z-10">
          <div
            className="h-full rounded-full transition-all duration-100 ease-linear relative"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #3b82f6 0%, #60a5fa 55%, #93c5fd 100%)",
              boxShadow:
                "0 0 8px rgba(59,130,246,0.6), 0 0 18px rgba(96,165,250,0.35)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.25), transparent)",
              }}
            />

            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="shine-bar" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm opacity-80 text-center">
        {messages[seconds % messages.length]}
      </p>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";

// export default function FullScreenLoader({ onFinish }) {
//   const [progress, setProgress] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const messages = [
//     "Where industries converge.",
//     "Many sectors. One vision.",
//     "Engineering a multi-sector future.",
//     "Innovation across industries.",
//     "Powering diverse industries.",
//     "One ecosystem. Many sectors.",
//   ];

//   useEffect(() => {
//     const duration = 10000;
//     const intervalTime = 100;
//     const step = 100 / (duration / intervalTime);

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + step;
//         return next >= 100 ? 100 : next;
//       });
//     }, intervalTime);

//     const secondInterval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     const timeout = setTimeout(() => {
//       if (onFinish) onFinish();
//     }, duration);

//     return () => {
//       clearInterval(interval);
//       clearInterval(secondInterval);
//       clearTimeout(timeout);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 px-6">
//       <div className="w-full max-w-md h-3.5 bg-white/15 rounded-full relative mb-6 overflow-visible">
//         <div className="absolute inset-0 rounded-full border border-white/10" />

//         <div
//           className="h-full relative rounded-full transition-all duration-100 ease-linear overflow-visible"
//           style={{
//             width: `${progress}%`,
//             background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
//             borderRadius: "9999px",
//           }}
//         >
//           <div className="absolute inset-0 pointer-events-none flex items-center">
//             <div
//               className="h-10 blur-2xl opacity-80"
//               style={{
//                 width: `${progress}%`,
//                 background: `
//         radial-gradient(circle at 95% 50%, rgba(147,197,253,0.9), transparent 70%),
//         linear-gradient(90deg, rgba(59,130,246,0.4), rgba(147,197,253,0.2), transparent)
//       `,
//                 borderRadius: "9999px",
//               }}
//             />
//           </div>

//           <div
//             className="absolute inset-0 rounded-full"
//             style={{
//               boxShadow:
//                 "0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.5)",
//             }}
//           />
//           <div className="absolute inset-0 overflow-hidden rounded-full">
//             <div className="shine-bar" />
//           </div>
//         </div>
//       </div>

//       <p className="text-sm opacity-80 text-center">
//         {messages[seconds % messages.length]}
//       </p>
//     </div>
//   );
// }

// <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-60 px-6">

//     {/* Progress Bar Container */}
//     <div className="w-full max-w-md h-2 bg-white/20 rounded-full overflow-hidden mb-6">
//         <div
//             className="h-full bg-white transition-all duration-100 ease-linear"
//             style={{ width: `${progress}%` }}
//         />
//     </div>

//     {/* Changing text */}
//     <p className="text-sm opacity-80 text-center">
//         {messages[seconds % messages.length]}
//     </p>
// </div>
