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
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="relative h-full w-full"
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

    <div className="absolute inset-0 z-10 p-3">

   
    <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="
            absolute
            top-[20%]
        "
    >
        <div className="bg-black/60 backdrop-blur-md md:px-10 py-4 md:py-6">
            <h1 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
                {heading}
            </h1>
        </div>
    </motion.div>


    <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
        }}
        className="
            absolute
            top-[42%]
            max-w-2xl
            
        "
    >
        <div className="bg-black/60 backdrop-blur-md p-12 md:p-15 space-y-5">
            {texts.map((text, i) => (
                <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                    }}
                    className="text-white/90 leading-relaxed text-[15px] md:text-[16px]"
                >
                    {text}
                </motion.p>
            ))}
        </div>
    </motion.div>

</div>
      {showScroll && (
        <motion.div
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="
                        absolute bottom-10 left-1/2 -translate-x-1/2 z-30
                        cursor-pointer flex flex-col items-center gap-4 group
                    "
        >
          <span
            className="
                        text-white text-[13px] tracking-[0.3em] uppercase
                        opacity-90 group-hover:opacity-100 transition
                    "
          >
            {scrollText}
          </span>

          {/* Scroll line */}
          <div className="relative w-[2px] h-16 bg-white/40 overflow-hidden rounded-full">
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

          {/* Bottom line */}
          <div className="w-8 h-[2px] bg-white/60 group-hover:bg-white transition" />
        </motion.div>
      )}
    </section>
  );
}

export default CompanyOverview;
