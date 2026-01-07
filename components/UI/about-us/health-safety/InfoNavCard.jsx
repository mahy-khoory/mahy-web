"use client";

import Link from "next/link";
import AnimatedLink from "./AnimatedLink";

export default function InfoNavCard({ title, description, href, icon: Icon }) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col">
        <div className="mb-10">
          <Icon size={40} strokeWidth={1.2} className="text-neutral-400" />
        </div>
        <h3 className="mb-4 text-[22px] font-medium text-[#0A58FF]">{title}</h3>

        <p className="flex-grow text-[15px] leading-[1.75] text-neutral-700">
          {description}
        </p>

        <div className="mt-12">
          <AnimatedLink />
        </div>
      </article>
    </Link>
  );
}
