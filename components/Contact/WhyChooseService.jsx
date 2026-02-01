"use client";

import {
  Settings,
  Wrench,
  Check,
  Headphones,
} from "lucide-react";

const items = [
  {
    title: "Genuine Parts",
    description:
      "Our MAHY-trained and certified technicians provide accurate diagnostics and repairs using only genuine OEM parts.",
    icon: Settings,
  },
  {
    title: "Trusted Technicians",
    description:
      "Using advanced diagnostic equipment, our technicians work efficiently to minimize downtime and optimize performance.",
    icon: Wrench,
  },
  {
    title: "Convenience",
    description:
      "We make scheduling service easy with online booking available 24/7, so appointments fit even the busiest schedules.",
    icon: Check,
  },
  {
    title: "Customer Service",
    description:
      "MAHY proudly offers dedicated customer service focused on long-term support and enhancing your experience.",
    icon: Headphones,
  },
];

export default function WhyChooseService() {
  return (
    <section className="bg-[var(--background)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-4">
            Why choose MAHY Service
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            For decades, MAHY Khoory has supported customers with reliable
            solutions. Our service network delivers dependable, efficient, and
            certified appliance repair with complete peace of mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                relative
                bg-[#f5f5f5]
                rounded-2xl
                px-10
                pt-16
                pb-10
                text-center
              "
            >
              {/* Icon */}
              <div
                className="
                  absolute
                  -top-8
                  left-1/2
                  -translate-x-1/2
                  w-16
                  h-16
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  border
                  border-slate-200
                "
              >
                <item.icon
                  size={26}
                  className="text-[var(--accent-dark)]"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
