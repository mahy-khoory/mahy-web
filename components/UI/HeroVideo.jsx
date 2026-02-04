"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";

function HeroVideo({ slides }) {
    const [index, setIndex] = useState(0);
    const currentSlide = slides[index];

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(id);
    }, [slides.length]);



    return (
        <section className="relative h-screen">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source type="video/mp4"
                    src="https://res.cloudinary.com/dpn6mdpxd/video/upload/v1769077056/Main_Video_MAHY_flc1el.mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-20 left-6 right-6 md:left-20 md:right-20 z-30 max-w-xl`}
                >
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-100 leading-tight drop-shadow-lg">
                        {currentSlide.title}
                    </h1>
                    {currentSlide.subtitle && (
                        <p className="mt-4 text-gray-200 font-light">{currentSlide.subtitle}</p>
                    )}
                    <div className="flex flex-wrap gap-3">
                        {currentSlide.cta && (
                            <Link href={currentSlide.cta.href} className="mt-6">
                                <Button onClick={currentSlide.cta.onClick || (() => { })}>
                                    {currentSlide.cta.label}
                                </Button>
                            </Link>
                        )}
                        {currentSlide.otherCta && (
                            <div className="mt-6">
                                <Link href={currentSlide.otherCta.href}>
                                    <SecondaryButton className="text-white bg-transparent" onClick={currentSlide.otherCta.onClick || (() => { })}>
                                        {currentSlide.otherCta.label}
                                    </SecondaryButton>
                                </Link>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    )
}

export default HeroVideo