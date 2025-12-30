"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function MahyraAvatar({ visible, locale }) {
  const animRef = useRef(null);
  const lottieInstance = useRef(null);

  useEffect(() => {
    if (!animRef.current || lottieInstance.current) return;

    lottieInstance.current = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/t5d42NEZJZ.json",
    });

    return () => {
      lottieInstance.current?.destroy();
      lottieInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lottieInstance.current) return;
    if (visible) {
      lottieInstance.current.play();
    } else {
      lottieInstance.current.pause();
    }
  }, [visible]);

  return (
    <div
      className={`absolute ${locale === "ar" ? "-left-4 sm:-left-6 lg:-left-6" : "-right-4 sm:-right-6 lg:-right-8"} -top-10  sm:-top-12  lg:-top-14 
        w-30 h-30 sm:w-24 sm:h-24 lg:w-38 lg:h-38 z-10 pointer-events-none transition duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
    >
      <div
        ref={animRef}
        className="
          h-full
          w-full
          drop-shadow-[0_12px_32px_rgba(15,23,42,0.22)]
          animate-avatar-bob
        "
      />
    </div>
  );
}
