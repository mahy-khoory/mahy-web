"use client";

import * as Accordion from "@radix-ui/react-accordion";
import AwardsItem from "./AwardsItem";

export default function AwardsAccordion({ items }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-3 md:space-y-4"
    >
      {items.map((item) => (
        <AwardsItem key={item.id} item={item} />
      ))}
    </Accordion.Root>
  );
}
