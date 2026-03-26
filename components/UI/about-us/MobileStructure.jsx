import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion } from "framer-motion";

function MobileStructure({ items, itemVariants, bg = "bg-white", collape = true }) {
    return (
        <div className='lg:hidden px-4 mt-6'>
            <div className='space-y-2'>
                {items.map((item, i) => (
                    <Card key={i}
                        i={i} bg={bg}
                        item={item}
                        itemVariants={itemVariants}
                        collape={collape}
                    />
                ))}
            </div>
        </div>
    )
};

const Card = ({ item, itemVariants, i, bg, collape }) => {
    const [show, setShow] = useState(false);
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}>
            <button onClick={() => collape && setShow(!show)} className={`${bg} w-full rounded-2xl text-start`}>
                <div className="flex justify-between items-center gap-2 px-6 py-6">
                    <div className="flex items-center gap-3">
                        <p className={`text-sm font-semibold ${collape ? "w-20" : "w-30"} text-center`}>{item.title}</p>
                        <p className="text-gray-700 text-xs">{item.subTitle}</p>
                    </div>
                    {collape && (
                        <div className={`transition-transform duration-300 ${show ? "rotate-180" : ""}`}>
                            <ChevronDown />
                        </div>
                    )}
                </div>
                <div className={`overflow-hidden transition-all duration-700 ease-out ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} >
                    <p className="px-6 py-6 border-t border-t-gray-300 text-sm text-gray-600">{item.text}</p>
                </div>
            </button>
        </motion.div>
    );
};

export default MobileStructure