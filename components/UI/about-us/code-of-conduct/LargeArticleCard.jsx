"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LargeArticleCard({
  title,
  description,
  image,
  cta,
  href,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group"
    >
      {/* Image */}
      <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 600px, 100vw"
          priority
        />
      </div>

      {/* Content */}
      <h3 className="mb-4 text-[28px] font-semibold leading-snug text-black">
        {title}
      </h3>

      <p className="mb-6 max-w-xl text-[16px] leading-[1.7] text-neutral-700">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#0A58FF]"
      >
        <span className="relative">
          {cta}
          <span className="absolute -bottom-1 left-0 h-[1px] w-full scale-x-0 bg-[#0A58FF] transition-transform duration-300 group-hover:scale-x-100 origin-left" />
        </span>

        <span className="relative h-4 w-4 overflow-hidden">
          <span className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:opacity-0">
            <ArrowRight size={16} />
          </span>
          <span className="absolute inset-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight size={16} />
          </span>
        </span>
      </Link>
    </motion.article>
  );
}
