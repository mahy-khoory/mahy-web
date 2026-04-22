import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function AlDhafraWasteCollectionPage() {
    const overview = [
        {
            heading: "Operations and Scale",
            text: "Operating from Abu Dhabi, the company’s collection network covers residential, commercial, and industrial zones across the emirate. Its operations are closely coordinated with the Group’s Dubai-based recycling division to optimize material flows and balance feedstock supply for the paper mills.",
            lastText: "Collectively, the Group’s recycling operations handle up to 1,300 metric tonnes of recovered material per day, significantly reducing landfill dependency and supporting continuous manufacturing operations.",
        },
        {
            heading: "Geographic Coverage",
            text: "Al Dhafra Waste Collection serves Abu Dhabi and surrounding regions, complementing the Group’s Dubai-based recycling operations to provide coverage across the UAE’s major population and industrial centers.",
        },
        {
            heading: "Strategic Role within the Group",
            text: "The Abu Dhabi waste collection operation is a strategic component of the MAHY Khoory Group’s recycling and manufacturing ecosystem. By securing locally collected recyclable materials, the company enhances feedstock security for the Group’s paper mills, reduces transportation costs, and strengthens supply chain resilience.",
            lastText: "Its operations also demonstrate the Group’s commitment to balanced national coverage, ensuring that sustainability initiatives extend beyond a single emirate.",
        },
        {
            heading: "Leadership and Management",
            text: "Al Dhafra Waste Collection is managed by experienced recycling and logistics professionals operating under the MAHY Khoory Group’s environmental services leadership. Local operational teams, including collection crews and logistics coordinators, ensure consistent service delivery and adherence to customer and regulatory requirements.",
        },
        {
            heading: "Quality, Safety, and Regulatory Compliance",
            text: "The company operates in full compliance with Abu Dhabi Municipality regulations governing waste handling and transportation. Approved vehicles, standardized equipment, and documented processes ensure safe, clean, and traceable operations.",
            lastText: "All collected materials are logged and reported in line with regulatory requirements, supporting transparency and compliance across the recycling value chain.",
        },
    ];

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Al Dhafra Waste Collection LLC"
                texts={[
                    "Al Dhafra Waste Collection LLC is the MAHY Khoory Group’s dedicated waste collection and recycling services company operating in the Emirate of Abu Dhabi. Established as part of the Group’s strategic expansion into Abu Dhabi’s environmental services sector, the company plays a critical role in supplying recyclable materials to the Group’s containerboard manufacturing operations.",
                    "Operating in close coordination with the Group’s recycling and paper manufacturing entities, Al Dhafra Waste Collection ensures that recovered materials from Abu Dhabi are efficiently collected, processed, and directed into the Group’s circular manufacturing value chain. Its operations are aligned with the Group’s long-term objective of sustainable waste diversion and resource recovery."
                ]}
            />
            <ValuesSection
                title="Our Mission"
                description="The mission of Al Dhafra Waste Collection is to deliver reliable, efficient, and environmentally responsible recyclable waste collection services across Abu Dhabi, supporting the Group’s broader sustainability vision."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Our Mission"
                ctaHref={false}
                imagePosition="right"
            />
            <ValuesSection
                title="Our Vision"
                description="Its vision is to maximize recycling rates and resource recovery within the emirate, contributing to national waste reduction goals and supporting Abu Dhabi’s transition toward a more circular and sustainable economy."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Our Vision"
                ctaHref={false}
                imagePosition="left"
            />
            <TrustedAdvisorSection
                heading="Background and Development"
                texts={[
                    "Al Dhafra Waste Collection was established to replicate and extend the Group’s successful recycling model implemented in Dubai. The company was formed to serve Abu Dhabi’s growing demand for organized, large-scale recyclable waste collection while strengthening local supply chains for recycled paper manufacturing.",
                    "By working closely with Al Dhafra Paper Manufacturing and Union Paper Mills, the company helps close the material loop locally, reducing reliance on long-distance transport and ensuring a stable flow of recovered raw materials into the Group’s recycling operations."
                ]}
            />
            <SolarPanelImageGrid
                subHeading={"Services and Capabilities"}
                text={"Al Dhafra Waste Collection provides a range of recyclable waste management services, including:"}
                items={[
                    { title: "Paper and Cardboard Collection", text: "Scheduled collection services for commercial, residential, and industrial clients, ensuring consistent feedstock supply for recycling." },
                    { title: "Recyclable Segregation and Handling", text: "On-site sorting support, provision of baling equipment, and customized solutions for high-volume waste generators." },
                    { title: "Multi-Material Recycling Services", text: "In addition to paper and cardboard, the company manages plastics, metals, and other recyclable materials, supporting clients with comprehensive recycling solutions." },
                ]}
                endText="These services are designed to meet the needs of businesses, institutions, and communities seeking compliant and efficient recycling partners."
            />
            <FeaturesEngineeringSection
                heading="Al Dhafra Waste Collection LLC Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
            <CompanyTextOnBackground
                heading="Environmental Impact and Sustainability Contribution"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="Environmental responsibility is central to Al Dhafra Waste Collection’s purpose. By diverting recyclable materials from landfill and channeling them into productive use, the company contributes to significant reductions in landfill volumes, energy consumption, and carbon emissions."
                endText={"Its activities directly support UAE national objectives related to waste reduction, recycling, and circular economy development, while enabling customers to meet their own sustainability targets."}
            />
            <ValuesSection
                width="max-w-7xl mx-auto"
                title="Infrastructure and Fleet"
                description="The company operates a modern fleet of compactor trucks, flatbed vehicles, and baling trailers, supported by standardized recycling containers deployed across Abu Dhabi. Mobile balers and container exchange systems are used to service high-volume clients efficiently."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Infrastructure and Fleet"
                ctaHref={false}
                imagePosition="left"
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Innovation and Continuous Improvement"}
                    texts={[
                        "Al Dhafra Waste Collection continuously enhances operational efficiency through route-planning and logistics optimization software, reducing fuel consumption and emissions. The company has also introduced customer feedback and service monitoring tools to improve responsiveness and service quality.",
                        "These initiatives ensure that Al Dhafra Waste Collection remains a reliable and forward-looking waste management partner within the Abu Dhabi region."
                    ]}
                />
            </section>
        </main>
    )
}

export default AlDhafraWasteCollectionPage