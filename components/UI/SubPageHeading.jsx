"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function SubPageHeading({
  title,
  description,
  fullHeight = false,
  description2,
  image,
  align = "center",
  // height = "pt-22 pb-12 lg:py-0 lg:h-[80vh]",
}) {
  const height = fullHeight
    ? "h-screen pt-22"
    : "pt-22 pb-12 lg:py-0 lg:h-[80vh]";
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className={clsx("relative w-full overflow-hidden z-40", height)}>
      <Image src={image} alt={title} fill priority className="object-cover" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/60
          via-black/45
          to-black/60
        "
      />
      <div
        className="
          absolute inset-0
          bg-[url('/gallery/gallery-3.jpg')]
          opacity-[0.04]
          pointer-events-none
        "
      />
      <div
        className="
          relative z-10
          flex h-full min-h-[60vh] items-center
        "
      >
        <div
          className={clsx(
            "mx-auto max-w-4xl px-6",
            align === "center" && "text-center",
            align === "left" && "text-left",
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              text-white
              text-[34px]
              md:text-[48px]
              font-semibold
              tracking-tight
            "
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="
                mt-6
                text-white/85
                text-[16px]
                md:text-[18px]
                leading-relaxed
              "
            >
              {description}
            </motion.p>
          )}

          {description2 && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="
                mt-4
                text-white/85
                text-[16px]
                md:text-[18px]
                leading-relaxed
              "
            >
              {description2}
            </motion.p>
          )}
        </div>
      </div>
{fullHeight && (
  <motion.div
    onClick={handleScrollDown}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      z-20
      cursor-pointer
      flex
      flex-col
      items-center
      gap-3
      group
    "
  >
    {/* Scroll Text */}
    <span className="text-white/60 text-[10px] tracking-[0.25em] uppercase">
      Scroll
    </span>

    {/* Line Container */}
    <div className="relative w-[1px] h-10 bg-white/20 overflow-hidden">
      
      {/* Animated dot */}
      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[6px] rounded-full bg-white"
      />
    </div>
  </motion.div>
)}
    </section>
  );
}
