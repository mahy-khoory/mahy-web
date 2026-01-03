"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import CompaniesCard from './CompaniesCard';

function List({ companies, locale }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {companies.map((company, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <CompaniesCard category={company.sector} title={company.name} logo={company.image} locale={locale}
                        onClick={() => { console.log('clicked'); }} />
                </motion.div>
            ))}
        </div>
    )
}

export default List