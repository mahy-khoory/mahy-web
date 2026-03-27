"use client";

import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

export default function ArrowActionButton({
  width = "w-20",
  height = "h-8",
  iconSize = 19,
  className = "",
  ariaLabel = "Open",
  onClick,
  href,
}) {
  const baseClasses = clsx(
    `
    group
    relative
    inline-flex
    items-center
    justify-center
    ${width}
    ${height}
    overflow-hidden
    rounded-full
    border-base
    t-base
    transition-colors
    duration-300
    hover:text-white
    group-hover:bg-[#2c3f6e]
    b-base-hover
  `,
    className
  );

  const Content = (
    <>
      <FiArrowRight
        size={iconSize}
        className="
          text-[var(--accent-color)]
          transition-transform
          duration-300
          group-hover:text-white
          group-hover:animate-[arrow-loop_0.5s_ease-in-out]
"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {Content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={baseClasses}
    >
      {Content}
    </button>
  );
}
