"use client";

import React from "react";

export default function MobileTimeline({ title, items, accent }) {
  return (
    <div className="px-6 pt-10 pb-16">
      <h2 className="text-2xl text-center md:text-5xl font-semibold text-foreground">
        {title}
      </h2>
      <ul className="space-y-14 border-l border-black/15 pl-7 mt-10">
        {items.map((item, idx) => (
          <li key={idx} className="relative pl-6">
            <span
              className="absolute left-[-14px] top-[6px] h-3.5 w-3.5 rounded-full"
              style={{ background: accent }}
            />
            <div className="text-sm font-medium text-black/60">{item.year}</div>
            <h3 className="mt-1 text-xl font-semibold text-black">{item.title}</h3>
            <div className="mt-3 text-[15px] leading-7 text-black/55">
              {Array.isArray(item.description)
                ? item.description.join(" ")
                : item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
