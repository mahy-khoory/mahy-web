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
      <div className="w-full max-w-md h-3.5 bg-white/15 rounded-full relative mb-6 overflow-visible">
       
        <div className="absolute inset-0 rounded-full border border-white/10" />

        {/* Progress Fill */}
        <div
          className="h-full relative rounded-full transition-all duration-100 ease-linear overflow-visible"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none flex items-center">
            <div
              className="w-full h-8 blur-2xl opacity-80"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
              }}
            />
          </div>

          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "0 0 12px rgba(59,130,246,0.7), 0 0 25px rgba(59,130,246,1.2)",
            }}
          />

         
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="shine-bar" />
          </div>
        </div>
      </div>
      <p className="text-sm opacity-80 text-center">
        {messages[seconds % messages.length]}
      </p>
    </div>
  );
}

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
