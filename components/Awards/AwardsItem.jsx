"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

export default function AwardsItem({ item }) {
  return (
    <Accordion.Item
      value={item.id}
      className={clsx(
        "rounded-[14px]",
        "border border-[#D6E4EC]",
        "bg-white",
        "transition-shadow duration-300",
        "data-[state=open]:shadow-[0_14px_40px_rgba(0,0,0,0.05)]"
      )}
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={clsx(
            "group w-full",
            "grid grid-cols-[1fr_auto] items-center gap-4",
            "px-5 py-4 md:px-6",
            "text-left text-[14.5px] md:text-[15px]",
            "font-medium text-[#55656F]",
            "transition-colors duration-200",
            "hover:bg-[#F7FBFD]",
            "focus:outline-none"
          )}
        >
          <span className="leading-snug">{item.title}</span>

          <span
            className={clsx(
              "flex h-9 w-9 shrink-0 items-center justify-center",
              "rounded-full border border-[#D6E4EC]",
              "text-[#5A6B75]",
              "transition-transform duration-300",
              "group-data-[state=open]:rotate-180"
            )}
          >
            <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
            <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={clsx(
          "overflow-hidden",
          "data-[state=open]:animate-accordion-down",
          "data-[state=closed]:animate-accordion-up"
        )}
      >
        <div
          className={clsx(
            "grid gap-6",
            "px-5 pb-6 pt-2 md:px-6",
            "md:grid-cols-[1fr_240px]"
          )}
        >
          <div className="space-y-3 text-[13.5px] leading-relaxed text-[#6B7C86]">
            {item.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={item.image}
              alt={item.title}
              className={clsx(
                "w-[170px] md:w-[210px]",
                "rounded-md",
                "border border-[#E3EDF3]",
                "bg-white shadow-sm"
              )}
            />
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
