"use client"

import { motion } from "framer-motion";
import ContactFormPane from "../ContactFormPane";

function ContactUsForm({ contactUs }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <ContactFormPane
                data={contactUs.form1}
                agreement={contactUs.agreement}
                submit={contactUs.submit[0]}
            />
        </motion.div>
    )
}

export default ContactUsForm