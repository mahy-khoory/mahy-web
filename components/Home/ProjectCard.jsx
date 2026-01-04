"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ title, image, href }) {
  const router = useRouter();

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => router.push(href)}
      className="
        group
        relative
        h-[420px]
        overflow-hidden
        cursor-pointer
        bg-black
      "
      role="link"
      aria-label={`Open ${title}`}
    >
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        variants={{
          rest: { opacity: 0.25 },
          hover: { opacity: 0.45 },
        }}
        className="absolute inset-0 bg-black"
      />

      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-white font-semibold tracking-wide">
          {title}
        </h3>
      </div>

      <motion.div
        variants={{
          rest: {
            opacity: 0,
            x: 14,
            scale: 0.85,
          },
          hover: {
            opacity: 1,
            x: 0,
            scale: 1,
          },
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          z-20
        "
        onClick={(e) => {
          e.stopPropagation();
          router.push(href);
        }}
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#79C4E7]
            text-white
            shadow-lg
          "
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <FiArrowRight size={22} />
          </motion.span>
        </div>
      </motion.div>
    </motion.article>
  );
}
