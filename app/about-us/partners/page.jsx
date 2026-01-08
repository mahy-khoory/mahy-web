import Announcements from "@/components/UI/home/Announcements"
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getLocale, getTranslations } from "next-intl/server";

async function StrategicPartnershipsPage() {
    const t = await getTranslations("HomePage");
    const locale = await getLocale();

    const announcements = [
        {
            heading: "A Long-Term Partnership Approach",
            text1: "MAHY Khoory Group believes in building partnerships for the long term rather than pursuing short-term engagements. We work closely with our partners to understand market requirements, align strategies, and support sustainable growth.",
            text2: "This approach has enabled the Group to establish enduring relationships with reputable global and regional partners.",
            points: {
                text: "Our approach is based on:",
                items: [
                    "Mutual trust and integrity",
                    "Clear roles, responsibilities, and expectations",
                    "Consistent performance and accountability",
                    "Open communication and collaboration",
                    "Respect for partner expertise and market presence"
                ]
            }
        },
        {
            heading: "Global Brands & Local Expertise",
            text1: "Through strategic alliances with internationally recognized manufacturers and suppliers, MAHY Khoory Group brings proven technologies, products, and systems to local and regional markets. These partnerships are strengthened by the Group's deep local market knowledge, operational infrastructure, and technical capabilities.",
            text2: "By combining global expertise with local execution, we ensure that solutions are relevant, compliant, and tailored to customer requirements.",
            img: "/gallery/gallery-7.webp"
        },
        {
            heading: "Value Creation Through Collaboration",
            text1: "Strategic partnerships allow the Group to enhance its offerings across trading, engineering, manufacturing, packaging, environmental services, logistics, energy, automotive, hospitality, and food service operations.",
            text2: "This collaborative model supports consistent service delivery and long-term value creation.",
            points: {
                text: "Working collaboratively with partners enables:",
                items: [
                    "Access to advanced technologies and best practices",
                    "Reliable supply chains and product availability",
                    "Continuous improvement in quality and performance",
                    "Joint development of customized and cost-effective solutions"
                ]
            },
            img: "/gallery/gallery-8.jpeg"
        },
        {
            heading: "Governance & Professional Engagement",
            text1: "All strategic partnerships are governed by structured agreements, clear commercial frameworks, and defined performance standards. The Group applies strong governance, compliance, and risk management practices to ensure transparency, ethical conduct, and alignment with regulatory requirements.",
            text2: "Partners can expect professionalism, consistency, and respect in all engagements with MAHY Khoory Group.",
            img: "/gallery/gallery-9.jpeg"
        },
        {
            heading: "Commitment to Trust & Reliability",
            text1: "Trust is central to every partnership we build. MAHY Khoory Group values reliability, confidentiality, and accountability, and we take pride in honoring our commitments to partners and stakeholders.",
            text2: "Through responsible business practices and long-standing relationships, the Group continues to strengthen its partnership network and support sustainable growth across all sectors in which it operates.",
            img: "/gallery/gallery-4.jpg"
        },
        {
            heading: t("Announcements.Heading6"),
            text1: t("Announcements.Title6"),
            text2: t("Announcements.Text6"),
            img: "/gallery/gallery-5.jpg"
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Strategic Partnerships"}
                description={"Strategic partnerships are a cornerstone of MAHY Khoory Group’s long-term success. Over decades of operation, the Group has built and maintained strong relationships with international manufacturers, suppliers, service providers, and business partners across multiple industries and markets."}
                description2={"These partnerships are founded on mutual trust, transparency, and shared objectives, enabling the Group to deliver reliable products, integrated solutions, and consistent value to customers across the UAE and beyond."}
                image={"/gallery/gallery-3.jpg"}
            />
            <Announcements items={announcements} cta={t("Announcements.Button")} locale={locale} />
        </main>
    )
}

export default StrategicPartnershipsPage