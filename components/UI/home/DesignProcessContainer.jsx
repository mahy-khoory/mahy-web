import { getTranslations } from "next-intl/server";
import DesignProcess from "./DesignProcess";
import AnimatedLines from "../AnimatedLines";

async function DesignProcessContainer({ heading, text1, text2, text3, processes, space }) {
    const translations = await getTranslations('HomePage.Process');

    if (!heading) {
        heading = translations("Heading");
    };

    if (!processes) {
        processes = [
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
            }
        ];
    }

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center font-bold text-4xl mt-20 mx-5">
                <AnimatedLines />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{heading}</h2>
            </div>
            <div className="mx-5">
                {text1 && <p className="md:text-lg mt-6 lg:mt-10 text-slate-700">{text1}</p>}
                {text2 && <p className="md:text-lg mt-5 mb-14 lg:mb-10 text-slate-700">{text2}</p>}
            </div>
            <DesignProcess processes={processes} space={space} />
            {text3 && <p className="md:text-lg mt-8 lg:mt-13 text-slate-700 mx-5">{text3}</p>}
        </div>
    )
}

export default DesignProcessContainer