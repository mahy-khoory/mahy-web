"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SplitScrollShowcase() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const activeIndexRef = useRef(0);
  const lastProgressRef = useRef(0);
  const [active, setActive] = useState(0);

  const items = [
    {
      title: "Custom Machinery Design",
      desc:
        "Innovative design and development of custom machinery, tailored to meet unique manufacturing needs.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Equipment Modernization",
      desc:
        "Upgrading existing equipment for improved performance, reliability, and compatibility with emerging technologies.",
      image: "/gallery/gallery-2.jpg",
    },
    {
      title: "System Integration",
      desc:
        "Connecting disparate systems for streamlined operations, enhanced collaboration, and improved productivity.",
      image: "/gallery/gallery-3.jpg",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${items.length * window.innerHeight}`,
        pin: true,
        scrub: true,
        snap: 1 / (items.length - 1),

        onUpdate: (self) => {
          const progress = self.progress;
          const direction = progress > lastProgressRef.current ? 1 : -1;
          lastProgressRef.current = progress;

          const index = Math.round(
            progress * (items.length - 1)
          );

          if (index !== activeIndexRef.current) {
            animateSwap(direction, index);
            activeIndexRef.current = index;
            setActive(index);
          }
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const animateSwap = (direction, nextIndex) => {
    const outYText = direction === 1 ? -40 : 40;
    const inYText = direction === 1 ? 40 : -40;

    const outYImage = direction === 1 ? 40 : -40;
    const inYImage = direction === 1 ? -40 : 40;

    gsap.timeline()
      .to(textRef.current, {
        y: outYText,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      })
      .set(textRef.current, { y: inYText })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });

    gsap.timeline()
      .to(imageRef.current, {
        y: outYImage,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      })
      .set(imageRef.current, { y: inYImage })
      .to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
      });
  };

  const item = items[active];

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#F6F8FA] mt-2.5 mb-3"
    >
      <div className="grid h-screen grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center px-16">
          <div ref={textRef} className="max-w-md will-change-transform">
            <div className="mb-6 h-10 w-10 rounded bg-violet-200" />
            <h2 className="text-[38px] font-semibold leading-tight">
              {item.title}
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-gray-600">
              {item.desc}
            </p>
            <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1A103D] px-6 py-3 text-sm text-white">
              Learn More
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#93b9eb]">
          <div
            ref={imageRef}
            className="relative h-[420px] w-[520px] overflow-hidden rounded-2xl will-change-transform"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
