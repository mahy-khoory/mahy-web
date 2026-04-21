"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function CompanyOverview({
  heading = "M.A.H.Y. Khoory Trading",
  texts = [],
  image = "/gallery/gallery-2.jpg",
  showScroll = true,
  scrollText = "Read More About Us",
}) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 z-10 px-4 sm:px-6 md:px-0">
        <div className="pt-28 sm:pt-32 md:pt-0">
          <div className="md:absolute md:left-10 lg:left-16 md:top-[20%] md:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-black/60 backdrop-blur-md px-5 sm:px-6 md:px-10 py-4 md:py-6 inline-block max-w-full md:max-w-[690px]">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold text-white leading-tight">
                  {heading}
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-5 sm:mt-6 md:mt-8"
            >
              <div className="bg-black/60 backdrop-blur-md p-5 sm:p-6 md:p-10 space-y-4 md:space-y-5 max-w-full md:max-w-xl">
                {texts.map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                    }}
                    className="text-white/90 leading-relaxed text-sm sm:text-[15px] md:text-base"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {showScroll && (
        <motion.div
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="
            absolute 
            bottom-6 sm:bottom-8 md:bottom-10
            left-1/2 -translate-x-1/2 z-20
            cursor-pointer flex flex-col items-center gap-3 sm:gap-4 group
          "
        >
          <span className="text-white text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.25em] md:tracking-[0.3em] uppercase opacity-90">
            {scrollText}
          </span>

          <div className="relative w-[2px] h-12 sm:h-14 md:h-16 bg-white/40 overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-40%", "140%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[10px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            />
          </div>

          <div className="w-6 sm:w-8 h-[2px] bg-white/60 group-hover:bg-white transition" />
        </motion.div>
      )}
    </section>
  );
}

export default CompanyOverview;
