"use client"
import { motion } from "framer-motion";
import Values from "./Values";
import AnimatedLines from "../AnimatedLines";

function Purpose({ purpose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className='py-15 lg:py-20 border-b border-gray-300'>
                <div className='flex flex-col justify-center max-w-5xl mx-auto'>
                    <div className="text-center">
                        <AnimatedLines />
                        <h2 className='uppercase font-bold px-10'>{purpose.heading}</h2>
                        <p className="font-bold uppercase mt-2 lg:mt-6 mb-1 text-3xl sm:text-4xl lg:text-5xl px-10">{purpose.subHeading}</p>
                    </div>
                    {/* <AboutVideo /> */}
                    <Values items={purpose.items} />
                    <p className="px-10 mb-2 lg:mt-0 text-base sm:text-lg leading-relaxed font-light text-gray-800">{purpose.text1}</p>
                    <p className="px-10 lg:mt-0 text-base sm:text-lg leading-relaxed font-light text-gray-800">{purpose.text2}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Purpose