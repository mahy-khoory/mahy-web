"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedLines({ bg = "bg-gray-500" }) {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current.children,
            { scaleY: 0, opacity: 0 },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.08,
                transformOrigin: "bottom",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="mx-auto mb-3 flex justify-center gap-1">
            {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className={`h-2.5 w-0.5 rounded-full ${bg}`} />
            ))}
        </div>
    );
}

export default AnimatedLines;