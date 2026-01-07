"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function PageHeading({ title, description, image }) {
    return (
        <div className="lg:grid lg:grid-cols-5 relative z-40">
            <div className="col-span-2 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-[50vh] lg:h-[65vh] relative"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </div>
            <div className="col-span-3 px-10 py-20 lg:px-16 flex flex-col justify-end bg-slate-950 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-white text-6xl font-bold">
                        {title}
                    </h1>

                    <p className="text-gray-300 mt-6 max-w-2xl">
                        {description}
                    </p>

                    <motion.div
                        className="mt-10 relative origin-left"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{
                            delay: 0.45,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <div
                            className="
                                h-px
                                w-full
                                bg-gradient-to-r
                                from-white/50
                                via-white/20
                                to-transparent
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                h-px
                                bg-gradient-to-r
                                from-white/30
                                to-transparent
                                blur-sm
                            "
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default PageHeading;
