"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.8 } },
};

function Gallery({ galleryItems, cta }) {
    const items = [
        {
            title: galleryItems[0],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822187/gallery-1_exhyck.jpg"
        },

        {
            title: galleryItems[1],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822184/gallery-2_qwc2me.jpg"
        },
        {
            title: galleryItems[2],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg"
        },
        {
            title: galleryItems[3],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822205/gallery-4_oxzrpw.jpg"
        },
        {
            title: galleryItems[4],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822215/gallery-5_wcndsr.jpg"
        },
    ]

    const [index, setIndex] = useState(0);
    const currentItem = items[index];
    return (
        <div className="relative w-screen h-[80vh] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentItem.image}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 text-white grid lg:grid-cols-5 bg-black/10">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden border flex flex-col uppercase justify-between items-center group hover:bg-black/20 transition-all duration-500"
                        onMouseEnter={() => setIndex(idx)}
                    >
                        <div className="absolute group-hover:bg-black/20 top-0 h-30 w-full
                        -translate-y-15 transition-all duration-600 ease-out group-hover:opacity-100 group-hover:-translate-y-1
                        "></div>
                        <span className="block relative z-10 text-xl pt-12  font-bold">{item.title}</span>
                        <Link href="/"
                            className="absolute bottom-10 text-sm font-semibold opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-1"
                        >
                            {cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery