"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowActionButton from "../about-us/ArrowActionButton";
import { useRouter } from "next/navigation";

export default function NewsCard(
  {
    id,
    image,
    date,
    title,
    excerpt,
    href = "#",
    priority = false,
    cta
  }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${id}`);
  };
  return (
    <article className="w-full group flex flex-col">
      {" "}
      <Link href={href} className="block">
        <div
          className="
            relative
            w-full
            aspect-4/3
            overflow-hidden
            bg-slate-100
          "
        >
          <div
            className="
              pointer-events-none
              absolute inset-0 z-10
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              bg-linear-to-tr
              from-white/10
              via-white/5
              to-transparent
            "
          />

          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.05]
            "
          />
        </div>
      </Link>
      <div
        className="
          mt-5
          flex
          flex-col
          flex-1
          transition-colors
          duration-500
        "
      >
        <span className="text-ui text-xs text-slate-500 mb-2">
          {date}
        </span>

        <h3
          className="
            text-heading
            text-xl
            sm:text-2xl
            leading-snug
            text-black
            line-clamp-3
            min-h-18
            transition-colors
            duration-500
            group-hover:text-[#2d3fa5]
          "
        >
          <Link href={href}>{title}</Link>
        </h3>

        <p
          className="
            mt-3
            text-body
            text-slate-600
            leading-relaxed
            line-clamp-3
            min-h-18
            transition-colors
            duration-500
            group-hover:text-slate-800
          "
        >
          {excerpt}
        </p>

        <div className="mt-auto pt-6 flex items-center gap-3">
          <span
            className="
              text-sm
              font-medium
              text-slate-900
              transition-colors
              duration-500
              group-hover:text-black
            "
          >
            {cta}
          </span>
          <ArrowActionButton onClick={handleClick} />
        </div>
      </div>
    </article>
  );
}
