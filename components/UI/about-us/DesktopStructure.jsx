import { useState } from "react";
import { motion } from "framer-motion";

function DesktopStructure({ items, itemVariants, containerVariants }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="hidden lg:block">
            <div className='flex justify-center mt-1'>
                <div className='h-6 w-px bg-gray-200' />
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className='grid grid-cols-6 text-center'>
                {items.map((item, i) => (
                    <div key={i}>
                        <div className={`flex ${i === 0 && "flex-row-reverse"}`}>
                            <div className={`h-px bg-gray-300 ${(i === 0 || i === items.length - 1) ? "w-1/2" : "w-full"}`} />
                        </div>
                        <div className='flex justify-center'>
                            <div className='h-6 w-px bg-gray-300' />
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className='grid grid-cols-6 gap-4 text-center mt-1'>
                {items.map((item, i) => (
                    <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}>
                        <button onClick={() => setCurrentIndex(i)}
                            className={`${i === currentIndex ? "bg-white" : "bg-gray-100"} py-12 px-4 rounded-2xl transition-all duration-500`}>
                            <p className='text-3xl font-medium t-base'>{item.title}</p>
                            <p className='text-gray-700 font-light text-sm mt-2'>{item.subTitle}</p>
                        </button>
                    </motion.div>
                ))}
            </div>
            <p className="mt-15 text-gray-600 text-justify px-3">{items[currentIndex].text}</p>
        </div>
    )
}

export default DesktopStructure