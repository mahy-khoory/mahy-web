"use client"

import PrimaryButton from '@/components/UI/PrimaryButton';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image"

function WasteCollectionMenu() {
    const tabs = ["Innovation", "Client Approach", "Integrity"];
    const items = [
        "Innovation is woven into the fabric of our strategy. We recognize the dynamic nature of the financial landscape and are committed to staying at the forefront of industry trends. Our strategy involves embracing technological advancements, exploring innovative solutions.",
        "At the core of our strategy is a commitment to putting our clients first. We prioritize understanding your unique needs, challenges, and aspirations. By adopting a client-centric approach, we tailor our services to deliver personalized solutions that align with your goals.",
        "Trust is paramount in financial consultancy, and our strategy is built on a foundation of integrity and transparency. We uphold the highest ethical standards in our interactions, ensuring that our clients have complete confidence in our recommendations and actions."
    ]

    return (
        <section className="bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-90 md:h-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Waste Collection Menu" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="pt-8 pb-12 md:py-20 px-5 max-w-2xl mx-auto">
                    <h2 className="uppercase t-base font-semibold">Our Vision</h2>
                    <p className="text-3xl md:text-4xl font-semibold mt-3">Building a legacy of excellence</p>
                    <p className="text-sm text-gray-600 mt-5">We are more than just financial consultants; we are a dedicated team of experts driven by a shared vision of transforming challenges into opportunities.</p>
                    <TabGroup>
                        <TabList className={"flex items-center mt-7"}>
                            {tabs.map((tab, i) => (
                                <Tab key={i}
                                    className={"text-sm md:text-md border-b-4 py-3 px-5 border-transparent focus:outline-0 text-gray-400 data-selected:border-[#79c4e7] data-selected:text-[#79c4e7] transition-all duration-300"}>
                                    {tab}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels className="mt-6 md:mt-6">
                            <AnimatePresence mode="wait">
                                {items.map((item, i) => (
                                    <TabPanel key={i} as={motion.div}
                                        initial={{ x: -10, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: false, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}>
                                        <p className='text-gray-700 text-sm h-30 md:h-20'>{item}</p>
                                    </TabPanel>
                                ))}
                            </AnimatePresence>
                        </TabPanels>
                    </TabGroup>
                    <PrimaryButton className={"mt-6 md:mt-8"} />
                </div>
            </div>
        </section>
    )
}

export default WasteCollectionMenu