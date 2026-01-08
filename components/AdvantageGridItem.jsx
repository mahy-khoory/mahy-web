"use client";

import { motion } from "framer-motion";

export default function AdvantageGridItem({
  image,
  title,
  text1,
  text2,
  variant = "small",
}) {
  const isLarge = variant === "large";
  const hasDetails = !!(text1 || text2);

  return (
    <motion.div
      className="group relative h-full w-full overflow-hidden bg-black"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.055 },
        }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-10"
        variants={{
          rest: {
            height: isLarge ? "58%" : "0%",
            opacity: isLarge ? 1 : 1,
          },
          hover: {
            height: hasDetails ? (isLarge ? "68%" : "60%") : "28%",
            opacity: 1,
          },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black/80 via-black/55 to-transparent" />
      </motion.div>
      {hasDetails && (
        <motion.div
          //       className="
          //   absolute inset-0 z-20
          //   flex flex-col justify-end
          //   px-5 sm:px-7 lg:px-8
          //   pb-5 sm:pb-10
          // "

          className={`
    absolute inset-0 z-20
    flex flex-col
    ${isLarge ? "justify-end pb-5 sm:pb-10" : "justify-center text-center"}
    px-5 sm:px-7 lg:px-8
  `}
          variants={{
            rest: {
              opacity: isLarge ? 1 : 0,
              y: isLarge ? 0 : 12,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.12,
          }}
        >
          <div
            className={`${isLarge ? "max-w-[420px]" : "max-w-[320px] mx-auto"
              } overflow-hidden`}
          >
            {!isLarge && (
              <div className="text-[16px] sm:text-[18px] font-semibold text-white pt-6">
                {title}
              </div>
            )}

            {text1 && (
              <div
                className="
            mt-2 sm:mt-3
            text-sm
            font-light leading-snug text-white
            line-clamp-2 sm:line-clamp-none
            mb-1.5
          "
              >
                {text1}
              </div>
            )}

            {text2 && (
              <div
                className="
            mt-2 sm:mt-4
            max-w-[340px]
            text-sm
            font-light leading-relaxed text-white/85
            line-clamp-3 sm:line-clamp-none
            mb-6
          "
              >
                {text2}
              </div>
            )}
          </div>
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 z-30 text-[16px] sm:text-[18px] font-semibold text-white"
        variants={{
          rest: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: 0 },
        }}
      >
        {title}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.12 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,.35) 35%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
