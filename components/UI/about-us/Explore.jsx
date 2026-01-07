"use client"

import Image from 'next/image'
import { motion } from "framer-motion";

function Explore({ heading, text, data }) {
    return (
        <div className='pt-20 pb-25 max-w-7xl mx-auto'>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: "easeOut" }}>
                <h2 className='text-3xl lg:text-5xl font-black text-center px-5'>
                    {heading}
                </h2>
                <p className='mt-4 lg:mt-6 mb-15 lg:text-xl text-gray-800 text-center px-5'>{text}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}>
                <div className='grid md:grid-cols-3 w-full md:h-[70vh] md:rounded-3xl overflow-hidden'>
                    {data.map((item, i) => (
                        <div key={i} className={`relative group h-80 md:h-full`}>
                            <button className="absolute inset-0 z-10" aria-label="open" />
                            <Image src={item.image} alt={item.label} fill style={{ objectFit: "cover" }} />
                            <div className="absolute bottom-6 md:-bottom-4 left-5 right-5 z-20 transition-all duration-300 group-hover:bottom-5 group-focus-within:bottom-5">
                                <p className="text-white md:absolute bottom-9 font-semibold text-lg group-hover:static group-focus-within:static">
                                    {item.label}
                                </p>
                                <div className="md:opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                    <p className="text-gray-100 font-medium mt-1">{item.heading}</p>
                                    <p className="text-gray-200 text-sm mt-2">{item.text}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div >
    )
};

export default Explore