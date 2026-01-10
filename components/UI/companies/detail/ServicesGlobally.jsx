"use client"

import AnimatedLines from '../../AnimatedLines'
import Image from 'next/image'
import { motion } from "framer-motion"
import PrimaryButton from '../../PrimaryButton'

function ServicesGlobally() {
    return (
        <section className='max-w-7xl mx-auto py-12 md:py-20 px-5'>
            <AnimatedLines />
            <h2 className='pt-2 text-4xl md:text-5xl font-semibold text-center leading-12'>Financial Services Glbally</h2>
            <motion.div
                className="mt-10 md:mt-14 p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-blue-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}>
                <div className='md:py-4'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?</p>
                    <PrimaryButton className={"w-fit mt-5 md:mt-6"} label='Learn More' />
                </div>
                <div className='rounded-3xl overflow-hidden relative h-60 md:h-full'>
                    <Image src={"/gallery/gallery-3.jpg"} alt='Services' fill style={{ objectFit: "cover" }} />
                </div>
            </motion.div>
        </section>
    )
}

export default ServicesGlobally