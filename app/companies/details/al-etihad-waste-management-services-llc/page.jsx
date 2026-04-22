import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function AlEtihadWasteManagementPage() {

    const overview = [
        {
            heading: "Operations and Coverage",
            text: "Al Etihad Waste Management operates a multi-branch network across Oman, with facilities in Muscat (head office), Sohar, Salalah, and Al Buraimi. Each branch is supported by dedicated fleets and trained personnel, enabling efficient service delivery across diverse geographic and industrial environments.",
            lastText: "The company serves government institutions, industrial operators, commercial establishments, hospitality facilities, and private developments, providing nationwide coverage through its distributed operational model.",
        },
        {
            heading: "Geographic Reach",
            text: "With four strategically located branches, Al Etihad Waste Management offers country-wide coverage across the Sultanate of Oman.",
            lastText: "This extensive footprint enables the company to work with clients across oil & gas, infrastructure, manufacturing, hospitality, and retail sectors.",
        },
        {
            heading: "Strategic Importance to the MAHY Khoory Group",
            text: "Al Etihad Waste Management represents one of the Group’s most significant international ventures, extending recycling and environmental services expertise beyond the UAE.",
            lastText: "It strengthens regional presence, diversifies revenue streams, and reinforces the Group’s position as a leader in circular economy solutions aligned with Oman’s sustainability priorities.",
        },
        {
            heading: "Leadership and Governance",
            text: "The company is overseen by a board and management team comprising MAHY Khoory executives and experienced local professionals.",
            lastText: "This structure combines international expertise with local market knowledge, emphasizing compliance, engagement, and operational discipline.",
        },
        {
            heading: "Quality, Safety, and Regulatory Compliance",
            text: "Operations comply fully with Omani environmental regulations and international waste management standards, using modern approved equipment and documented processes.",
            lastText: "These controls ensure reliability, traceability, and strict adherence to regulatory requirements across all activities.",
        },
    ];

    return (
        <main>

            {/* OVERVIEW */}
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Al Etihad Waste Management Services LLC"
                texts={[
                    "Al Etihad Waste Management Services LLC is the MAHY Khoory Group’s recyclable waste management subsidiary in the Sultanate of Oman. Established in 2013 through a joint venture with local partners and now fully owned by the Group, the company has grown to become one of Oman’s largest recyclable waste management operators.",
                    "Operating under the MAHY Khoory brand, Al Etihad Waste Management delivers modern, structured, and scalable recycling solutions across the Sultanate, supporting both public and private sector clients in achieving responsible waste management and sustainability objectives."
                ]}
            />

            {/* MISSION */}
            <ValuesSection
                title="Our Mission"
                description="Al Etihad Waste Management’s mission is to advance sustainable waste practices in Oman by providing reliable, efficient, and world-class recycling and waste management services."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Mission"
                ctaHref={false}
                imagePosition="right"
            />

            {/* VISION */}
            <ValuesSection
                title="Our Vision"
                description="Its vision reflects the MAHY Khoory Group’s broader strategy of geographic expansion and environmental stewardship, positioning the company as a long-term partner in Oman’s transition toward a circular and resource-efficient economy."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Vision"
                ctaHref={false}
                imagePosition="left"
            />

            {/* BACKGROUND */}
            <TrustedAdvisorSection
                heading="Establishment and Growth"
                texts={[
                    "Launched in 2013 in Muscat, Al Etihad Waste Management was established as a strategic partnership between the MAHY Khoory Group and a prominent local firm, enabling immediate market access and regulatory alignment.",
                    "Over the past decade, the company has expanded rapidly in scale, coverage, and operational capability through continuous investment in infrastructure, fleet, and workforce development."
                ]}
            />

            {/* SERVICES */}
            <SolarPanelImageGrid
                subHeading={"Services and Capabilities"}
                text={"Al Etihad Waste Management focuses on recyclable waste collection, processing, and awareness, offering:"}
                items={[
                    {
                        title: "Collection and Recycling Services",
                        text: "Collection of paper, plastics, metals, and other recyclable materials from residential, commercial, and institutional clients."
                    },
                    {
                        title: "Waste Containers and Segregation Solutions",
                        text: "Deployment of bins, skips, and segregation systems to promote effective waste separation at source."
                    },
                    {
                        title: "On-Site Industrial Services",
                        text: "Provision of balers, compactors, and customized collection schedules for industrial and high-volume waste generators."
                    },
                    {
                        title: "Awareness and Engagement Programs",
                        text: "Community outreach and education initiatives to increase recycling participation and promote best practices."
                    },
                ]}
                endText="Collected materials are sorted and baled at company facilities before being directed to approved recycling processors or export markets."
            />

            {/* OVERVIEW */}
            <FeaturesEngineeringSection
                heading="Al Etihad Waste Management Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />

            {/* SUSTAINABILITY */}
            <CompanyTextOnBackground
                heading="Environmental Impact and Sustainability Contribution"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="The company’s core objective is to convert waste into valuable resources, reducing landfill dependency and supporting Oman’s circular economy ambitions."
                endText="Through systematic recycling operations and partnerships with processors, it contributes to environmental protection, resource conservation, and emissions reduction."
            />

            {/* INFRASTRUCTURE */}
            <ValuesSection
                width="max-w-7xl mx-auto"
                title="Infrastructure and Fleet"
                description="Al Etihad Waste Management operates a modern fleet of compactor trucks, collection vehicles, and material handling equipment designed for Oman’s geographic needs. Each branch includes sorting lines, baling equipment, and storage yards to ensure efficient processing and timely collections."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Infrastructure"
                ctaHref={false}
                imagePosition="left"
            />

            {/* INNOVATION */}
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Innovation and Continuous Development"}
                    texts={[
                        "The company introduces advanced recycling techniques including mechanized baling, data-driven route planning, and performance monitoring systems.",
                        "Through continuous investment in employee training, community engagement, and partnerships with schools and institutions, Al Etihad Waste Management promotes recycling awareness and strengthens its position as a future-focused industry leader."
                    ]}
                />
            </section>

        </main>
    )
}

export default AlEtihadWasteManagementPage