import { useEffect, useRef, useState } from "react";
import NarrativeCard from "./NarrativeCard";

export default function ScrollNarrativePane({
  sections,
  trackRef,
  onActiveChange,
}) {
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!onActiveChange || typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 1024px)");
    let observer;

    const handleVisibility = () => {
      observer?.disconnect();
      if (mq.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.dataset.index);
              onActiveChange(index);
            }
          });
        },
        { threshold: 0.6 }
      );

      sectionRefs.current.forEach((el) => el && observer.observe(el));
    };

    handleVisibility();
    mq.addEventListener("change", handleVisibility);

    return () => {
      observer?.disconnect();
      mq.removeEventListener("change", handleVisibility);
    };
  }, [onActiveChange, sections.length]);

  return (
    <div
      className="
        relative
        lg:h-screen
        lg:overflow-hidden
      "
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => setCursor((c) => ({ ...c, active: false }))}
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-6 lg:gap-0 snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <section
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            className="
              min-h-[auto]
              lg:min-h-screen
              flex
              items-center
              snap-start
              px-6
              md:px-12
              lg:px-20
              py-20
              lg:py-0
              border-b border-white/10
            "
          >
            <NarrativeCard {...section} cursor={cursor} />
          </section>
        ))}
      </div>
    </div>
  );
}
