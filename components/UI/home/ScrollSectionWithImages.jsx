"use client"

import Image from "next/image";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const container1 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }, delay: 0.9 },
};
const container2 = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }
    }),
};

function ScrollSectionWithImages({ data }) {
    const items = [
        {
            title1: data[0].title1,
            title2: data[0].title2,
            text: data[0].text,
            cta: data[0].cta,
            image: "/gallery/gallery-1.jpg"
        },
        {
            title1: data[1].title1,
            title2: data[1].title2,
            text: data[1].text,
            cta: data[1].cta,
            image: "/gallery/gallery-2.jpg"
        },
        {
            title1: data[2].title1,
            title2: data[2].title2,
            text: data[2].text,
            cta: data[2].cta,
            image: "/gallery/gallery-3.jpg"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const sectionRefs = useRef([]);
    const lastIndexRef = useRef(0);

    useLayoutEffect(() => {
        if (!containerRef.current || !trackRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (prefersReducedMotion.matches) return;

            const totalSlides = items.length;
            if (totalSlides <= 1) return;

            const ctx = gsap.context(() => {
                gsap.set(trackRef.current, { y: 0 });

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
                        start: "top 10%",
                        end: () => "+=" + getScrollDistance(),
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            const nextIndex = Math.min(
                                totalSlides - 1,
                                Math.round(self.progress * (totalSlides - 1))
                            );
                            if (lastIndexRef.current !== nextIndex) {
                                lastIndexRef.current = nextIndex;
                                setCurrentIndex(nextIndex);
                            }
                        },
                    },
                });

                timeline.to(trackRef.current, {
                    y: () => -getScrollDistance(),
                });
            }, containerRef);

            setCurrentIndex(0);
            lastIndexRef.current = 0;

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, [items.length]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(min-width: 1024px)");
        let observer;

        const handleObserver = () => {
            observer?.disconnect();
            if (mq.matches) return;

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = Number(entry.target.dataset.index);
                            setCurrentIndex(index);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
        };

        handleObserver();
        mq.addEventListener("change", handleObserver);

        return () => {
            observer?.disconnect();
            mq.removeEventListener("change", handleObserver);
        };
    }, [items.length]);

    return (
        <section className="max-w-7xl mx-auto py-30">
            <div ref={containerRef} className='md:grid grid-cols-5 md:h-[80vh]'>
                <motion.div
                    variants={container1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="col-span-3 lg:overflow-hidden">
                    <div ref={trackRef} className="flex flex-col gap-10 lg:gap-0 lg:hide-scrollbar">
                        {items.map((item, i) => (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                                viewport={{ once: false }}
                                className="flex items-center lg:min-h-screen"
                                key={i}
                                ref={el => sectionRefs.current[i] = el}
                                data-index={i}>
                                <div className="w-full">
                                    <div className="px-5 md:px-0 pt-20 md:pt-0">
                                        <p className="text-3xl md:text-5xl font-bold">{item.title1}</p>
                                        <p className="text-3xl md:text-5xl font-bold t-base mt-1 md:mt-3">{item.title2}</p>
                                        <p className="mt-8 md:mt-15">{item.text}</p>
                                        <PrimaryButton label={item.cta} className={"mt-8 md:mt-10"} />
                                    </div>
                                    <div className="relative h-80 w-full md:hidden mt-15">
                                        <Image src={item.image} alt={item.title1} fill style={{ objectFit: "cover" }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={container2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='col-span-2 hidden md:block'>
                    <div className='flex flex-col gap-4 h-full'>
                        {items.map((item, i) => (
                            <div key={i} className={`${i === currentIndex ? "h-8/10 z-10" : "h-1/10"} 
                                relative w-full bg-blue-100 rounded-2xl overflow-hidden transition-all duration-800`}>
                                {i === currentIndex && (
                                    <Image src={item.image} alt={item.title1} fill style={{ objectFit: "cover" }} />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ScrollSectionWithImages;
