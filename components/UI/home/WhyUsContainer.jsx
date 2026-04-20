import { getTranslations } from "next-intl/server";
import WhyUs from "./WhyUs"

async function WhyUsContainer() {
    const translations = await getTranslations('HomePage.WhyUs');
    const items = {
        heading: "Why you should choose us?",
        description: "We combine innovation, sustainability, and trusted partnerships to deliver solutions that are efficient, reliable, and built for long-term value.",
        data: [
            { title: "Sustainable & Smart Solutions", content: "From water pumping to recycling, our products are designed to protect the environment while delivering unmatched performance and efficiency." },
            { title: "Global Partnerships, Local Expertise", content: "We collaborate with world-class brands like Grundfos to bring cutting-edge technology tailored to regional needs." },
            { title: "Seamless Service & Support", content: "Our dedicated after-sales team ensures smooth installation" },
        ]
    };
    return (
        <WhyUs items={items} />
    )
}

export default WhyUsContainer