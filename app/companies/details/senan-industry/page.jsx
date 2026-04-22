import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function SenanIndustryPage() {

    const overview = [
        {
            heading: "Manufacturing Technology and Capabilities",
            text: "The Ras Al Khor facility is equipped with state-of-the-art blow molding lines capable of producing high volumes with tight dimensional tolerances.",
            lastText: "Complementary injection molding machines enable in-house production of caps, spouts, and closures. Advanced CAD/CAM systems and automated inspection ensure precision, consistency, and compliance with client and regulatory requirements.",
        },
        {
            heading: "Strategic Integration and Partnerships",
            text: "Senan Industry benefits from synergies within the MAHY Khoory Group’s industrial and environmental ecosystem, including opportunities to integrate recycled plastic materials.",
            lastText: "The company supports large-scale and time-sensitive supply requirements and continues to expand export capabilities and regional partnerships.",
        },
        {
            heading: "Sustainability and Environmental Responsibility",
            text: "Senan Industry supports sustainability through responsible manufacturing practices, including designing containers for reuse and recyclability.",
            lastText: "It recycles production scrap, complies with environmental regulations, and reduces transportation-related emissions through localized manufacturing.",
        },
        {
            heading: "Leadership and Workforce",
            text: "Senan Industry is managed by an experienced leadership team overseeing production, operations, and quality.",
            lastText: "The workforce includes plastic technologists, engineers, supervisors, machine operators, and quality-control technicians focused on safety, discipline, and continuous improvement.",
        },
        {
            heading: "Location and Contact Details",
            text: "Senan Industry LLC operates from Ras Al Khor Industrial Area 2, Dubai, providing efficient access to logistics and distribution networks.",
            lastText: "P.O. Box: 114520 | Telephone: +971 4 333 4447 | Email: info@senan.ae | Factory: Street 11, Shed No. 44. The facility operates on a continuous production schedule.",
        },
    ];

    return (
        <main>

            {/* Company Overview */}
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Senan Industry LLC"
                texts={[
                    "Senan Industry LLC is a specialized manufacturer of rigid plastic packaging solutions, operating as part of the MAHY Khoory Group’s manufacturing portfolio.",
                    "The company focuses on the production of blow-molded plastic containers, including jerrycans, bottles, and industrial drums designed for liquid applications. Based in Ras Al Khor Industrial Area, Dubai, the facility uses advanced machinery from Germany, Switzerland, and Japan, combined with in-house cap and closure manufacturing for full quality control and cost efficiency."
                ]}
            />

            {/* Products and Services */}
            <SolarPanelImageGrid
            heading="Our Productions"
                subHeading={"Products and Services"}
                text={"Senan Industry delivers a comprehensive range of rigid plastic packaging products, including:"}
                items={[
                    {
                        title: "Plastic Jerrycans",
                        text: "Used for automotive oils, lubricants, and coolants."
                    },
                    {
                        title: "Industrial Containers and Drums",
                        text: "Designed for chemicals and agrochemicals."
                    },
                    {
                        title: "Bottles and Containers",
                        text: "Used for food and beverage applications."
                    },
                    {
                        title: "Custom Packaging Solutions",
                        text: "Tailored plastic packaging for private-label brands."
                    },
                ]}
                endText="The company provides complete solutions including custom design, mold fabrication, blow molding, injection molding, and high-volume production with full quality assurance."
            />

            {/* Market Focus */}
            <TrustedAdvisorSection
                heading="Market Focus and Client Sectors"
                texts={[
                    "Senan Industry serves industries including automotive and lubricants, food and beverage packaging, chemical and industrial products, and agriculture.",
                    "The company supports both large manufacturers and private-label producers requiring durable, compliant, and customized packaging solutions."
                ]}
            />

            {/* Detailed Sections */}
            <FeaturesEngineeringSection
                heading="Senan Industry LLC Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776592263/mahy-location-page.jpg_jdopju.jpg"
            />

        </main>
    )
}

export default SenanIndustryPage