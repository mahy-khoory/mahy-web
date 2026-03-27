"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function PageHeading({ title, description, image }) {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            titleRef.current,
            { y: 60, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 }
        )
            .fromTo(
                descRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 0.85, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                lineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 1 },
                "-=0.4"
            );

    }, []);

    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            imageContainerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        )
            .fromTo(
                imageRef.current,
                { scale: 1.15, y: 40 },
                { scale: 1.05, y: 0, duration: 1.6 },
                "-=0.8"
            );
    }, []);

    return (
        <div className="lg:grid lg:grid-cols-5 relative z-40">
            <div className="col-span-2 overflow-hidden">
                <div ref={containerRef} className="h-[50vh] lg:h-[65vh] relative overflow-hidden">
                    <div ref={imageRef} className="absolute inset-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            priority
                            className="object-cover will-change-transform"
                        />
                    </div>
                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>
            <div className="col-span-3 px-10 py-20 lg:px-16 flex flex-col justify-end bg-slate-950 relative">
                <div ref={containerRef} className="relative">
                    {/* Title */}
                    <h1 ref={titleRef}
                        className="text-white text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] bg-linear-to-r from-white via-white/90 to-white/70 bg-clip-text ">
                        {title}
                    </h1>

                    {/* Description */}
                    <p ref={descRef} className="text-gray-400 mt-3 leading-relaxed max-w-2xl">
                        {description}
                    </p>

                    {/* Elegant line */}
                    <div className="mt-7 relative overflow-hidden">
                        <div ref={lineRef}
                            className="origin-left h-px w-full bg-linear-to-r from-white/60 via-white/20 to-transparent"
                        />
                        <div className="absolute inset-0 h-px bg-white/20 blur-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeading;
