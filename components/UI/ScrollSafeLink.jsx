"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function ScrollSafeLink({ href, children, className, scrollBehavior = "smooth" }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e) => {
        e.preventDefault();

        // Kill all ScrollTriggers to release scroll lock
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        // Navigate to new route
        router.push(href);

        // Scroll to top after route change
        window.scrollTo({ top: 0, behavior: scrollBehavior });
    };

    // Optional: scroll to top on route change (back/forward)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
    }, [pathname, scrollBehavior]);

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}