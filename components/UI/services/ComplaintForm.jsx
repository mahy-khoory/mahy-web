"use client"

import ComplaintFormPane from "@/components/Contact/ComplaintFormPane";
import { motion } from "framer-motion";

function ComplaintForm({ contactUs }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <ComplaintFormPane
                data={contactUs.form2}
                upload={contactUs.upload}
                submit={contactUs.submit[1]}
            />
        </motion.div>
    )
}

export default ComplaintForm