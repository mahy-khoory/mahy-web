"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BoosterPumpRevealSection() {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            tl.fromTo(
                boxRef.current,
                {
                    clipPath: "inset(50% 0% 50% 0%)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "none",
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
            <div className="flex h-full items-center justify-center">
                <h2 className="text-2xl md:text-5xl font-semibold md:leading-15 tracking-tighter max-w-2xl text-center px-5">We believe in pushing boundaries, into stunning digital masterpieces.</h2>
            </div>
            <div ref={boxRef} className="absolute inset-0 flex items-center justify-center">
                <Image src={"/gallery/gallery-2.jpg"} alt="Booster Pump Reveal Image" fill style={{ objectFit: "cover" }} />
            </div>
        </section>
    );
}