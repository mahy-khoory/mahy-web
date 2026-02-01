"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function SubPageHeadingNoOverlayImage({
  title,
  description,
  description2,
  image,
  align = "center",
  height = "h-[100vh]",
}) {
  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden",
        height
      )}
    >
      <Image
        src={image}
        alt={"hi"}
        fill
        priority
        className="object-cover"
      />

      {/* <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/60
          via-black/45
          to-black/60
        "
      /> */}
      {/* <div
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
          flex h-full items-center
        "
      >
        <div
          className={clsx(
            "mx-auto max-w-4xl px-6",
            align === "center" && "text-center",
            align === "left" && "text-left"
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
      </div> */}
    </section>
  );
}
