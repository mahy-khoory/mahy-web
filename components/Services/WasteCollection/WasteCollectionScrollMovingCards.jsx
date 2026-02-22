"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const defaultItems = [
    { person: "John Smith", company: "Harrison & Co,", text: "Their expertise and innovative solutions have been a game-changer for our business. We've been able to streamline our operations, improve efficiency, and achieve significant cost savings. Their team is responsive, knowledgeable, and a pleasure to work with." },
    { person: "Emily Chen", company: "Everett Industries", text: "We were impressed by their ability to understand our unique challenges and develop customized solutions that met our needs. Their approach is collaborative, flexible, and focused on delivering results. We've seen significant improvements in our operations and are confident in our partnership." },
    { person: "David Lee", company: "Baxter Enterprises", text: "They have helped us stay ahead of the competition with their cutting-edge technology and innovative approach. Their expertise in AI, robotics, and data analytics has been invaluable, enabling us to make data-driven decisions and drive business growth." },
    { person: "Mark Daunt", company: "Greenwood", text: "We've seen significant improvements in our operations since partnering with them. Their expertise has helped us optimize our processes, reduce costs, and improve customer satisfaction. Their team is proactive, responsive, and dedicated to delivering exceptional results." }
];

function WasteCollectionScrollMovingCards({
    heading = "A Few Words From Our Trusted Partners",
    items = defaultItems
}) {

    return (
        <section>
            <Mobile heading={heading} items={items} />
            <Desktop heading={heading} items={items} />
        </section>
    )
};

const Mobile = ({ heading, items }) => (
    <div className="px-5 pt-14 pb-8 md:py-20 relative lg:hidden">
        <h2 className="max-w-2xl mx-auto text-center text-3xl md:text-5xl font-semibold">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {items.map((item, i) => (
                <MobileCard key={i} item={item} i={i} />
            ))}
        </div>
    </div>
);

const MobileCard = ({ item, i }) => (
    <div className={`${i % 2 === 0 ? "bg-[#97dbfa]" : "bg-[#46b7ec]"} p-5 h-110 rounded-2xl`}>
        <div className="flex flex-col justify-between h-full">
            <div className="relative size-15">
                <Image src={"/waste/logo.svg"} alt={`Logo ${i + 1}`} fill style={{ objectFit: "contain" }} />
            </div>
            <div>
                {item.title && <h3 className="font-medium mb-1">{item.title}</h3>}
                <p>{item.text}</p>
            </div>
            <div>
                <p className="font-medium">{item.person}</p>
                <span className="text-sm text-gray-900">{item.company}</span>
            </div>
        </div>
    </div >
);

const Desktop = ({ heading, items }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    return (
        <div ref={ref} className="px-5 pt-40 pb-40 relative hidden lg:block">
            <motion.div style={{ rotate }} className="absolute top-20 -left-30 size-60">
                <Image src="/waste/waste-bg2.svg" alt="" fill />
            </motion.div>
            <motion.div style={{ rotate }} className="absolute top-20 -right-30 size-60" >
                <Image src="/waste/waste-bg3.svg" alt="" fill />
            </motion.div>
            <h2 className="max-w-2xl mx-auto text-center text-5xl font-semibold">{heading}</h2>
            <div className="grid grid-cols-4 gap-5 mt-50">
                {items.map((item, i) => (
                    <DesktopCard key={i} item={item} i={i} scrollYProgress={scrollYProgress} />
                ))}
            </div>
        </div>
    );
}

const DesktopCard = ({ item, i, scrollYProgress }) => {
    const direction = i % 2 === 0 ? -1 : 1;
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 80 * direction]
    );
    return (
        <motion.div style={{ y }} className={`${i % 2 === 0 ? "bg-[#97dbfa]" : "bg-[#46b7ec]"} p-5 h-110 rounded-2xl`}>
            <div className="flex flex-col justify-between h-full">
                <div className="relative size-15">
                    <Image src="/waste/logo.svg" alt="" fill />
                </div>
                <div>
                    {item.title && <h3 className="font-medium mb-1">{item.title}</h3>}
                    <p>{item.text}</p>
                </div>
                <div>
                    <p className="font-medium">{item.person}</p>
                    <span className="text-sm text-gray-900">{item.company}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default WasteCollectionScrollMovingCards