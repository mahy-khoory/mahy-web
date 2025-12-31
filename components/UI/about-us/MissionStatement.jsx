"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import AnimatedLines from "../AnimatedLines";

function MissionStatement({ missionStatement }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className='py-18 px-10 lg:py-16 border-b border-gray-300'>
                <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                    <AnimatedLines />
                    <h2 className='uppercase font-bold'>{missionStatement.heading}</h2>
                    <p className="font-bold uppercase mt-2 lg:mt-6 text-3xl sm:text-4xl lg:text-5xl">
                        {missionStatement.subHeading}
                    </p>
                    <p className='mt-7 lg:mt-10 sm:text-lg leading-relaxed font-light text-gray-800'>{missionStatement.text}</p>
                    <Link className="mt-10" href={"/"}>
                        <PrimaryButton
                            label={missionStatement.button}
                            size="md"
                            radius="rounded-full"
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default MissionStatement