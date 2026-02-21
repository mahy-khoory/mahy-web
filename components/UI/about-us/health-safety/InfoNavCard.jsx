"use client";

import AnimatedLink from "./AnimatedLink";
import ScrollToTop from "../../ScrollToTop";

export default function InfoNavCard({ title, description, href, icon: Icon }) {
  return (
    <ScrollToTop href={href} className="group block h-full">
      <article className="flex h-full flex-col items-start">
        <div className="mb-10">
          <Icon size={40} strokeWidth={1.2} className="text-neutral-400" />
        </div>
        <h3 className="mb-4 text-[22px] font-medium text-[#0A58FF] text-start">{title}</h3>

        <p className="grow text-[15px] leading-[1.75] text-neutral-700 text-start">
          {description}
        </p>

        <div className="mt-12">
          <AnimatedLink />
        </div>
      </article>
    </ScrollToTop>
  );
}
