import { getTranslations } from "next-intl/server";
import WhyUs from "./WhyUs"

async function WhyUsContainer() {
    const translations = await getTranslations('HomePage.WhyUs');
    const items = {
        heading: translations("Heading"),
        description: translations("Description"),
        data: [
            { title: translations("Item1Title"), content: translations("Item1Content") },
            { title: translations("Item2Title"), content: translations("Item2Content") },
            { title: translations("Item3Title"), content: translations("Item3Content") },
        ]
    };
    return (
        <WhyUs items={items} />
    )
}

export default WhyUsContainer