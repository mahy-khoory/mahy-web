"use client"

import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

export default function ScrollResetOnRoute() {
    const pathname = usePathname();

    useEffect(() => {
        // kill any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // reset scroll
        window.scrollTo({ top: 0, behavior: "smooth" });

        // optional: re-initialize GSAP triggers if needed
    }, [pathname]);
}