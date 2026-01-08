import Announcements from "@/components/UI/home/Announcements"
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getLocale, getTranslations } from "next-intl/server";

async function StrategicPartnershipsPage() {
    const t = await getTranslations("HomePage");
    const locale = await getLocale();

    const announcements = [
        {
            heading: t("Announcements.Heading1"),
            title: t("Announcements.Title1"),
            text: t("Announcements.Text1"),
        },
        {
            heading: t("Announcements.Heading2"),
            title: t("Announcements.Title2"),
            text: t("Announcements.Text2"),
            img: "/gallery/gallery-7.webp"
        },
        {
            heading: t("Announcements.Heading3"),
            title: t("Announcements.Title3"),
            text: t("Announcements.Text3"),
            img: "/gallery/gallery-8.jpeg"
        },
        {
            heading: t("Announcements.Heading4"),
            title: t("Announcements.Title4"),
            text: t("Announcements.Text4"),
            img: "/gallery/gallery-9.jpeg"
        },
        {
            heading: t("Announcements.Heading5"),
            title: t("Announcements.Title5"),
            text: t("Announcements.Text5"),
            img: "/gallery/gallery-4.jpg"
        },
        {
            heading: t("Announcements.Heading6"),
            title: t("Announcements.Title6"),
            text: t("Announcements.Text6"),
            img: "/gallery/gallery-5.jpg"
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Strategic Partnerships"}
                description={"Building Strong Alliances for Mutual Growth and Success."}
                image={"/gallery/gallery-3.jpg"}
            />
            <Announcements items={announcements} cta={t("Announcements.Button")} locale={locale} />
        </main>
    )
}

export default StrategicPartnershipsPage