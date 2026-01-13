"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealImage({ images = ["/gallery/gallery-1.jpg", "/gallery/gallery-2.jpg", "/gallery/gallery-3.jpg"] }) {
    const sectionRef = useRef(null);
    const imageRefs = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hide all images except first
            imageRefs.current.forEach((img, i) => {
                gsap.set(img, { opacity: i === 0 ? 1 : 0, position: "absolute", inset: 0 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: true,
                    pin: true,
                },
            });

            // Slide + scale first image
            tl.fromTo(
                imageRefs.current[0],
                { y: 600, scale: 0.4 },
                { y: 0, scale: 1, ease: "power3.out" }
            );

            // Change images with fade
            const changePoints = [0.4, 0.8]; // 40% and 80%
            changePoints.forEach((point, i) => {
                tl.to(
                    imageRefs.current[i], // current
                    { opacity: 0, duration: 0.5 },
                    point
                );
                tl.to(
                    imageRefs.current[i + 1], // next
                    { opacity: 1, duration: 0.5 },
                    point
                );
            });

            // Text appears at 80%
            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                0.8
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [images]);

    return (
        <section ref={sectionRef} className="h-screen w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-[30vh] md:w-[70vw] md:h-[70vh]">
                {images.map((img, i) => (
                    <img
                        key={i}
                        ref={(el) => (imageRefs.current[i] = el)}
                        src={img}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ))}
                <div ref={textRef} className="absolute inset-0 bg-black/30 opacity-0">
                    <div className="absolute z-10 bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white text-2xl md:text-6xl font-medium md:leading-18">
                        Launch Your Growth with Confidence
                    </div>
                </div>
            </div>
        </section>
    );
}