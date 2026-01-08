import NextAdvantagesSection from "@/components/NextAdvantagesSection"
import Explore from "@/components/UI/about-us/Explore";
import SubPageHeading from "@/components/UI/SubPageHeading"
import { getTranslations } from "next-intl/server";

async function CapabilitiesPage() {
    const t = await getTranslations("AboutUsPage.Explore");
    const data = [
        {
            label: t("Label1"),
            heading: t("Heading1"),
            text: t("Text1"),
            image: "/gallery/gallery-1.jpg"
        },
        {
            label: t("Label2"),
            heading: t("Heading2"),
            text: t("Text2"),
            image: "/gallery/gallery-2.jpg"
        },
        {
            label: t("Label3"),
            heading: t("Heading3"),
            text: t("Text3"),
            image: "/gallery/gallery-3.jpg"
        },
        {
            label: t("Label4"),
            heading: t("Heading4"),
            text: t("Text5"),
            image: "/gallery/gallery-4.jpg"
        },
        {
            label: t("Label5"),
            heading: t("Heading5"),
            text: t("Text5"),
            image: "/gallery/gallery-5.jpg"
        },
        {
            label: t("Label1"),
            heading: t("Heading1"),
            text: t("Text1"),
            image: "/gallery/gallery-6.jpg"
        },
    ];
    return (
        <main>
            <SubPageHeading
                title={"Our Key Capabilities & Expertise"}
                description={"Our key capabilities and expertise span strategic planning, advanced technology integration, and operational excellence. We deliver tailored solutions through deep industry knowledge, innovation-driven processes, and skilled teams. This enables us to consistently achieve high-quality outcomes and long-term value for our partners."}
                image={"/gallery/gallery-1.jpg"}
            />
            <Explore
                heading={t("Heading")}
                text={t("Text")}
                data={data}
            />
            <NextAdvantagesSection
                heading={t("Heading")}
                text={t("Text")}
                data={data}
            />
        </main>
    )
}

export default CapabilitiesPage