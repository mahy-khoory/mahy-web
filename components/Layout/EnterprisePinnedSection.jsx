"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyMediaPane from "../UI/StickySection/StickyMediaPane";
import ScrollNarrativePane from "../UI/StickySection/ScrollNarrativePane";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnterprisePinnedSection({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lastIndexRef = useRef(0);

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      if (prefersReducedMotion.matches) return;

      const totalSlides = sections.length;
      if (totalSlides <= 1) return;

      const ctx = gsap.context(() => {
        gsap.set(trackRef.current, { y: 0 });

        const handleUpdate = (self) => {
          const progress = self.progress * (totalSlides - 1);
          const nextIndex = Math.min(
            totalSlides - 1,
            Math.round(progress)
          );
          if (lastIndexRef.current !== nextIndex) {
            lastIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        };

        const getScrollDistance = () => {
          if (!trackRef.current || !containerRef.current) return 0;
          const distance =
            trackRef.current.scrollHeight - containerRef.current.offsetHeight;
          return Math.max(distance, 0);
        };

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + getScrollDistance(),
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: handleUpdate,
          },
        });

        timeline.to(trackRef.current, {
          y: () => -getScrollDistance(),
        });

        return () => {
          timeline.kill();
        };
      }, containerRef);

      setActiveIndex(0);
      lastIndexRef.current = 0;

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [sections]);

  const activeImage = sections[activeIndex]?.image || sections[0]?.image;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-950 overflow-hidden"
    >
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
          <StickyMediaPane image={activeImage} />
          <ScrollNarrativePane
            sections={sections}
            trackRef={trackRef}
            onActiveChange={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
