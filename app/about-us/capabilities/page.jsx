import NextAdvantagesSection from "@/components/NextAdvantagesSection"
import Explore from "@/components/UI/about-us/Explore";
import SubPageHeading from "@/components/UI/SubPageHeading"
import { getTranslations } from "next-intl/server";

async function CapabilitiesPage() {
    const t = await getTranslations("AboutUsPage.Explore");
    const data = [
        {
            title: "Diversified Industry Expertise",
            text1: "The Group operates across multiple industries including trading and distribution, engineering and technical services, manufacturing, packaging, recycling, environmental services, logistics, energy solutions, automotive, hospitality, and food services. This diversification enables us to understand complex industry requirements and respond effectively to the needs of a wide range of customers and markets.",
            text2: "Our long-standing presence across these sectors has resulted in strong institutional knowledge and the ability to manage both standalone businesses and vertically integrated operations.",
            image: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Manufacturing & Industrial Capabilities",
            text1: "The Group operates manufacturing facilities across the UAE, including paper and corrugated products manufacturing, packaging products, and industrial support materials. Our factories are supported by structured production processes, quality controls, safety systems, and experienced technical teams.",
            text2: "These capabilities allow us to manage production efficiently, maintain consistency, and support customers with reliable supply across industrial and commercial applications.",
            image: "https://images.unsplash.com/photo-1653158861306-e5b3804f6115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Engineering, Technical & Operational Expertise",
            text1: "Our in-house engineering and technical teams provide assembly, installation, customization, and ongoing support for mechanical and industrial systems. This expertise allows the Group to support customers beyond product supply, delivering practical solutions aligned with operational and project requirements.",
            text2: "Close coordination between engineering, trading, manufacturing, and logistics functions ensures effective execution and long-term system reliability.",
            image: "https://plus.unsplash.com/premium_photo-1664304869167-130629c66932?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Integrated Supply Chain & Logistics",
            text1: "With a strong presence across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and Ajman, the Group benefits from an integrated supply chain supported by warehousing, transportation, and logistics capabilities. This infrastructure enables efficient material movement, timely deliveries, and operational continuity across all businesses.",
            text2: "Our logistics expertise supports both internal operations and customer requirements across industrial, environmental, and commercial sectors.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Environmental & Sustainability Expertise",
            text1: "Through recycling, waste collection, resource recovery, and clean energy solutions, the Group has developed strong capabilities in environmental management and sustainability-driven operations. These activities support regulatory compliance, environmental protection, and circular economy initiatives, particularly across manufacturing and industrial sectors.",
            text2: "Environmental responsibility is integrated into operational planning, investment decisions, and continuous improvement programs.",
            image: "https://images.unsplash.com/photo-1634402149804-67614eb48331?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Governance, Compliance & Risk Management",
            text1: "Strong governance and disciplined management practices underpin all Group operations. Clear frameworks for decision-making, risk management, compliance, and performance monitoring are applied consistently across all companies.",
            text2: "The Group operates in regulated environments and maintains structured internal controls, audit processes, and compliance systems to ensure transparency, accountability, and long-term stability",
            image: "/gallery/gallery-6.jpg"
        },
    ];
    return (
        <main>
            <SubPageHeading
                title={"Key Capabilities & Expertise"}
                description={"MAHY Khoory Group brings together decades of experience, deep sector knowledge, and strong operational capabilities across a diversified portfolio of businesses. Our expertise has been built over time through disciplined growth, long-term partnerships, and consistent execution across industrial, commercial, environmental, and service sectors."}
                description2={"The Group's capabilities are anchored in physical assets, skilled teams, and integrated operations that allow us to deliver reliable solutions at scale, while maintaining high standards of governance, safety, and performance."}
                image={"/gallery/gallery-1.jpg"}
            />
            <NextAdvantagesSection data={data} />
        </main>
    )
}

export default CapabilitiesPage