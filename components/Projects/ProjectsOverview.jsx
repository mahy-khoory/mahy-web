"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsOverview() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    const items = [
        "/gallery/gallery-1.jpg",
        "/gallery/gallery-2.jpg",
        "/gallery/gallery-3.jpg",
        "/gallery/gallery-4.jpg",
        "/gallery/gallery-5.jpg",
        "/gallery/gallery-6.jpg",
        "/gallery/gallery-8.jpeg",
        "/gallery/gallery-9.jpeg",
        "/gallery/gallery-5.jpg",
        "/gallery/gallery-6.jpg",
        "/gallery/gallery-8.jpeg",
        "/gallery/gallery-9.jpeg",
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = trackRef.current.scrollWidth;
            const viewportWidth = containerRef.current.offsetWidth;

            gsap.to(trackRef.current, {
                x: -(totalWidth - viewportWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalWidth}`,
                    scrub: true,
                    pin: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-black overflow-hidden"
        >
            {/* Horizontal Grid Track */}
            <div
                ref={trackRef}
                className="grid grid-rows-2 grid-flow-col auto-cols-[75vw] lg:auto-cols-[25vw] gap-4 h-full p-8"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative w-75vw lg:w-[25vw] h-full rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={item}
                            alt="Project"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Center Circle */}
            <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
                <div className="h-40 w-40 lg:h-56 lg:w-56 bg-white rounded-full flex justify-center items-center text-xl lg:text-3xl font-bold uppercase">
                    Projects
                </div>
            </div>
        </section>
    );
}

export default ProjectsOverview;