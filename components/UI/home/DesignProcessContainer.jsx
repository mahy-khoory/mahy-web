import { getTranslations } from "next-intl/server";
import DesignProcess from "./DesignProcess";
import AnimatedLines from "../AnimatedLines";

async function DesignProcessContainer() {
    const translations = await getTranslations('HomePage.Process');
    const processes = [
        {
            id: 1,
            title: translations('Step1Title'),
            description: translations('Step1Description'),
            icon: "/processes/planning.png",
            leftShift: "left-0",
            rightShift: "right-0"
        },
        {
            id: 2,
            title: translations('Step2Title'),
            description: translations('Step2Description'),
            icon: "/processes/design.png",
            leftShift: "left-15",
            rightShift: "right-15"
        },
        {
            id: 3,
            title: translations('Step3Title'),
            description: translations('Step3Description'),
            icon: "/processes/development.png",
            leftShift: "left-17",
            rightShift: "right-17"
        },
        {
            id: 4,
            title: translations('Step4Title'),
            description: translations('Step4Description'),
            icon: "/processes/deployment.png",
            leftShift: "left-4",
            rightShift: "right-4"
        }];

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center font-bold text-4xl my-20 md:mt-20 md:mb-0 mx-5">
                <AnimatedLines />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{translations("Heading")}</h2>
            </div>
            <DesignProcess processes={processes} />
        </div>
    )
}

export default DesignProcessContainer