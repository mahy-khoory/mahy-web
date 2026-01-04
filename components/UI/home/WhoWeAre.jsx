"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { motion } from "framer-motion";

const container1 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }, delay: 0.9 },
};
const container2 = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } },
};

function WhoWeAre() {
    return (
        <section className='max-w-7xl mx-auto pt-15 md:pt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-18 md:h-[80vh]'>
                <motion.div variants={container1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className='w-full px-5 md:w-120 md:px-0 flex flex-col justify-center'>
                    <h2 className='t-base text-lg font-semibold tracking-tighter'>Who We Are</h2>
                    <p className='font-semibold text-4xl md:text-5xl mt-3 leading-12 md:leading-15'>Pioneering Transformation</p>
                    <p className='mt-5 md:mt-8 font-light text-gray-700'>The M.A.H.Y. Khoory Group is one of the UAE's most trusted business groups, delivering world-class technological solutions across diverse industries. Headquartered in Dubai, the group employs over 3,100 professionals from 30 nationalities, operates 17 offices across the UAE, and serves clients in more than 29 countries across the Middle East, the Levant, and Africa.</p>
                    <Link href={"/about-us"}>
                        <PrimaryButton className={"w-fit mt-8 md:mt-10"} label='Learn more about us' />
                    </Link>
                </motion.div>
                <motion.div variants={container2} initial="hidden" whileInView="visible" viewport={{ once: true }} className='relative h-100 md:h-full'>
                    <Image src={"/gallery/gallery-9.jpeg"} alt='About Us' fill style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </section>
    )
}

export default WhoWeAre