"use client"

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image';
import { useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function Announcements({ items, cta, locale }) {
    return (
        <section className='max-w-7xl mx-auto py-20'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-nowrap overflow-x-scroll hide-scrollbar lg:overflow-visible lg:grid grid-cols-3 gap-6 px-5 lg:px-0'>
                {items.map((item, i) => (
                    <Card key={i} item={item} cta={cta} locale={locale} />
                ))}
            </motion.div>
        </section>
    );
};

const Card = ({ item, cta, locale }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex-none lg:h-125 w-[70vw] lg:w-full relative b-base text-white group hover:scale-[103%] transition-transform duration-500 ease-in-out overflow-hidden select-none'>
            <div className=' py-8 px-6 relative z-10 lg:h-125'>
                <button onClick={() => setShow(false)} className={`absolute right-5 top-6 lg:hidden transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                    <X stroke='white' size={25} />
                </button>
                <div>
                    <h3 className='uppercase font-semibold'>{item.heading}</h3>
                    <p className='text-sm mt-2'>{item.text1}</p>
                    {item.points && (
                        <div className={`font-light ${show ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}
                                group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-500 text-sm`} >
                            <p className='mt-4 text-sm'>{item.points.text}</p>
                            <ul className='mt-2 list-disc list-inside space-y-2'>
                                {item.points.items.map((point, i) => (
                                    <li key={i} >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p className={`font-light mt-4 ${show ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}
                    group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-500 text-sm`}>
                        {item.text2}
                    </p>
                </div>
                <div className={`absolute right-6 bottom-6 flex justify-end mt-8 lg:mt-2 ${show ? "translate-y-0 opacity-100" : "translate-y-15 opacity-0"}
                    group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500`}>
                    <Link href={"/"} className='flex gap-2 items-center group/btn overflow-hidden relative z-30'>
                        <div>
                            <p className='text-sm'>{cta}</p>
                            <div className={`w-full h-px bg-white mt-1 ${show ? "translate-x-0" : "-translate-x-25"}
                                group-hover/btn:translate-x-0 transition-all ease-in-out duration-500`}></div>
                        </div>
                        {locale === "ar"
                            ? (
                                <ChevronLeft className='mb-1' stroke='white' size={16} />
                            ) : (
                                <ChevronRight className='mb-1' stroke='white' size={16} />
                            )}
                    </Link>
                </div>
            </div>
            {item.img && (
                <div className={`absolute inset-0 origin-top-left transition-all duration-700 ease-out
                    ${show ? "scale-[1.3] -translate-x-10 -translate-y-10 blur-sm" : ""}
                    group-hover:scale-[1.3] group-hover:-translate-x-10 group-hover:-translate-y-10 group-hover:blur-sm`}>
                    <Image
                        src={item.img}
                        alt={item.heading}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            )}
            {!show && (
                <button className='absolute inset-0 lg:hidden z-20' onClick={() => setShow(true)} />
            )}
        </div>
    )
}

export default Announcements