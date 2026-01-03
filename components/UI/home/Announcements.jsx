"use client"

import { ChevronRight, X } from 'lucide-react'
import Image from 'next/image';
import { useState } from 'react'
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function Announcements() {
    const items = [
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-1.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-2.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-3.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-4.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-5.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
            img: "/gallery/gallery-1.jpg"
        },
        {
            heading: "Announcement",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis quisquam",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quae iure, dolore omnis, aut voluptatem corrupti dolores quaerat ratione earum quia, sit tenetur qui nisi corporis odit esse aspernatur?",
        }
    ];
    return (
        <section className='max-w-7xl mx-auto'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-nowrap overflow-x-scroll hide-scrollbar lg:overflow-visible lg:grid grid-cols-4 gap-6 px-5 lg:px-0'>
                {items.map((item, i) => (
                    <Card key={i} item={item} />
                ))}
            </motion.div>
        </section>
    );
};

const Card = ({ item }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='flex-none lg:h-110 w-[70vw] lg:w-full relative b-base text-white group hover:scale-[103%] transition-transform duration-500 ease-in-out cursor-pointer overflow-hidden'>
            <div className='flex flex-col justify-between py-8 px-6 relative z-10 lg:h-110'>
                <div className={`absolute right-5 top-6 lg:hidden transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                    <X stroke='white' size={25} />
                </div>
                <h3 className='uppercase font-semibold'>{item.heading}</h3>
                <p className='font-medium lg:text-lg mt-3'>{item.title}</p>
                <p className={`font-light mt-3 ${show ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}
                    group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-500`}>
                    {item.text}
                </p>
                <div className={`flex justify-end mt-5 ${show ? "translate-y-0 opacity-100" : "translate-y-15 opacity-0"}
                    group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500`}>
                    <div className='flex gap-2 items-center group/btn overflow-hidden'>
                        <div>
                            <p className='text-sm'>Explore</p>
                            <div className={`w-full h-px bg-white mt-1 ${show ? "translate-x-0" : "-translate-x-15"}
                                group-hover/btn:translate-x-0 transition-all ease-in-out duration-500`}></div>
                        </div>
                        <ChevronRight stroke='white' size={16} />
                    </div>
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
            <button className='absolute inset-0 lg:hidden z-20' onClick={() => setShow(!show)} />
        </div>
    )
}

export default Announcements