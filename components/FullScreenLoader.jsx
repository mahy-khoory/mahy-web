"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

      {/* place if needed for the image */}
      <div className="w-full max-w-md h-3.5 bg-white/15 rounded-full relative mb-6 overflow-visible">
        <div className="absolute inset-0 rounded-full border border-white/10" />

        <div
          className="h-full relative rounded-full transition-all duration-100 ease-linear overflow-visible"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
            borderRadius: "9999px",
          }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "100%",
              height: "14px",
              filter: "blur(12px)",
              opacity: 0.7,
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
            }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.5)",
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


    // <div className="mb-0 flex justify-center items-center">
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{
    //         duration: 1.6,
    //         ease: [0.16, 1, 0.3, 1], // smoother entry
    //       }}
    //       className="relative w-64 h-64 md:w-72 md:h-72"
    //     >
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 0.58 }}
    //         transition={{ duration: 2.2, delay: 0.4 }}
    //         className="absolute inset-0 blur-3xl"
    //         style={{
    //           background:
    //             "radial-gradient(circle, rgba(59,130,246,0.15), transparent 90%)",
    //         }}
    //       />

  
    //       <motion.div
    //         initial={{ y: "0%" }}
    //         animate={{ y: "-100%" }}
    //         transition={{
    //           duration: 2.2,
    //           ease: [0.16, 1, 0.3, 1],
    //           delay: 0.5,
    //         }}
    //         className="absolute inset-0 bg-black z-30"
    //       />

    //       <motion.div
    //         initial={{ scale: 1.08 }}
    //         animate={{ scale: 1 }}
    //         transition={{
    //           duration: 2.2,
    //           ease: [0.16, 1, 0.3, 1],
    //           delay: 0.5,
    //         }}
    //         className="relative w-full h-full"
    //       >
    //         <motion.div
    //           animate={{ scale: [1, 1.35, 1] }}
    //           transition={{
    //             duration: 6,
    //             repeat: Infinity,
    //             ease: "easeInOut",
    //             delay: 2.6,
    //           }}
    //           className="relative w-full h-full"
    //         >
    //           <Image
    //             src="/MAHY.png"
    //             alt="Company Logo"
    //             fill
    //             className="object-contain"
    //             priority
    //           />
    //         </motion.div>
    //       </motion.div>
    //     </motion.div>
    //   </div>

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
