"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function CompaniesCard({ id, category, title, logo, locale }) {
    const arrowClasses = "transition-transform duration-300 group-hover:animate-[arrow-loop_0.5s_ease-in-out]";

    return (
        <div
            className="group relative w-full rounded-3xl border border-[#E7E3DA] bg-white hover:shadow-lg px-8 pt-8 pb-7 
            overflow-hidden transition-colors duration-500">
            <Link className="" href={`/companies/${id}`}>
                <div className="flex flex-col justify-between gap-6 h-full">
                    <div>
                        <div className="text-[12px] font-semibold uppercase tracking-[0.28em] t-base">
                            {category}
                        </div>
                        <div className="mt-5">
                            <div className="relative h-40 w-full">
                                <Image
                                    src={logo}
                                    alt={title}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    priority
                                />
                            </div>
                        </div>
                        <h3 className="mt-5 text-[28px] font-medium leading-[1.12] text-[#0B0F14]">
                            {title}
                        </h3>
                        <motion.div
                            className="mt-4 relative origin-left opacity-0 scale-x-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-x-100">
                            <div className="h-px w-full b-base to-transparent" />
                            <div className="absolute inset-0 h-px b-base-hover blur-sm" />
                        </motion.div>
                    </div>
                    <div>
                        <div className="">
                            <button
                                className="group relative inline-flex items-center justify-center h-8 w-20 overflow-hidden rounded-full border-base text-[#0B0F14]
                    transition-colors duration-300 group-hover:bg-[#2c3f6e] group-hover:text-white" aria-label="Open company">
                                {locale === "ar"
                                    ? (
                                        <FiArrowLeft size={19} className={arrowClasses} />
                                    ) : (
                                        <FiArrowRight size={19} className={arrowClasses} />
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}