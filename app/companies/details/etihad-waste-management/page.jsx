import CompaniesSectors from "@/components/CompaniesSectors"
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function AlEtihadWasteManagementServicesPage() {
    const items = [
        {
            title: "Operations and Coverage",
            subtitle: "Al Etihad Waste Management operates a multi-branch network across Oman, with facilities in Muscat (head office), Sohar, Salalah, and Al Buraimi. Each branch is supported by dedicated fleets and trained personnel, enabling efficient service delivery across diverse geographic and industrial environments.",
            endText: "The company serves government institutions, industrial operators, commercial establishments, hospitality facilities, and private developments, providing nationwide coverage through its distributed operational model.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg",
        },
        {
            title: "Geographic Reach",
            subtitle: "With four strategically located branches, Al Etihad Waste Management offers country-wide coverage across the Sultanate of Oman. This extensive footprint has enabled the company to work with clients across multiple sectors, including oil & gas, infrastructure, manufacturing, hospitality, and retail.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592573/engineering-services-single_skilled_technician.jpg_roa7p4.jpg",
        },
        {
            title: "Strategic Importance to the MAHY Khoory Group",
            subtitle: "Al Etihad Waste Management represents one of the MAHY Khoory Group’s most significant international ventures, extending the Group’s recycling and environmental services expertise beyond the UAE.",
            endText: "The company strengthens the Group’s regional footprint, diversifies revenue streams, and reinforces its position as a regional leader in recycling and circular economy solutions. Its operations align closely with Oman’s national sustainability priorities and environmental regulations.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592457/engineering-page_single_professional_technic.jpg_mvffeg.jpg",
        },
        {
            title: "Leadership and Governance",
            subtitle: "The company is overseen by a board and management team comprising MAHY Khoory Group executives and experienced local professionals. This governance structure combines international operational expertise with deep local market knowledge.",
            endText: "Leadership places strong emphasis on regulatory compliance, community engagement, and operational discipline, contributing to the company’s solid reputation within Oman’s waste management sector.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762085/renewable-energy_nkj0in.jpg",
        },
        {
            title: "Quality, Safety, and Regulatory Compliance",
            subtitle: "Al Etihad Waste Management operates in full compliance with Omani environmental regulations and applicable international waste management standards. The company uses modern, authority-approved equipment and maintains documented processes across collection, sorting, and dispatch activities.",
            endText: "These controls ensure service reliability, traceability of materials, and consistent adherence to regulatory requirements.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg",
        },
        {
            title: "Environmental Impact and Sustainability Contribution",
            subtitle: "The company’s core objective is to convert waste into valuable resources, reducing landfill dependency and supporting Oman’s circular economy ambitions. Through systematic recycling operations, Al Etihad Waste Management contributes positively to environmental protection, resource conservation, and emissions reduction.",
            endText: "Partnerships with recycling processors enable the recovery of raw materials and energy, reinforcing the sustainability impact of its operations.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg",
        },
    ];

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Al Etihad Waste Management Services LLC"
                texts={[
                    "Al Etihad Waste Management Services LLC is the MAHY Khoory Group’s recyclable waste management subsidiary in the Sultanate of Oman. Established in 2013 through a joint venture with local partners and now fully owned by the Group, the company has grown to become one of Oman’s largest recyclable waste management operators.",
                    "Operating under the MAHY Khoory brand, Al Etihad Waste Management delivers modern, structured, and scalable recycling solutions across the Sultanate, supporting both public and private sector clients in achieving responsible waste management and sustainability objectives."
                ]}
            />
            <ValuesSection
                title="Our Mission"
                description="Al Etihad Waste Management’s mission is to advance sustainable waste practices in Oman by providing reliable, efficient, and world-class recycling and waste management services."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Our Mission"
                ctaHref={false}
                imagePosition="right"
            />
            <ValuesSection
                title="Our Vision"
                description="Its vision reflects the MAHY Khoory Group’s broader strategy of geographic expansion and environmental stewardship, positioning the company as a long-term partner in Oman’s transition toward a circular and resource-efficient economy."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Our Vision"
                ctaHref={false}
                imagePosition="left"
            />
            <TrustedAdvisorSection
                heading="Establishment and Growth"
                texts={[
                    "Launched in 2013 in Muscat, Al Etihad Waste Management was established as a strategic partnership between the MAHY Khoory Group and a prominent local firm, enabling immediate market access and regulatory alignment. Over the past decade, the company has expanded rapidly in scale, coverage, and operational capability.",
                    "Through continuous investment in infrastructure, fleet, and workforce development, Al Etihad Waste Management has evolved into a nationally recognized recycling operator, supporting Oman’s growing environmental and sustainability agenda."
                ]}
            />
            <SolarPanelImageGrid
                subHeading={"Services and Capabilities"}
                text={"Al Etihad Waste Management focuses on recyclable waste collection, processing, and awareness, offering a comprehensive range of services, including:"}
                items={[
                    { title: "Collection and Recycling Services", text: "Collection of paper, plastics, metals, and other recyclable materials from residential, commercial, and institutional clients." },
                    { title: "Waste Containers and Segregation Solutions", text: "Deployment of bins, skips, and segregation systems across businesses and communities to promote effective waste separation at source." },
                    { title: "On-Site Industrial Services", text: "Provision of balers, compactors, and customized collection schedules for industrial and high-volume waste generators." },
                    { title: "Awareness and Engagement Programs", text: "Community outreach and education initiatives aimed at increasing recycling participation and promoting best practices." },
                    { title: "Collected Materials", text: "Collected materials are sorted and baled at the company’s facilities before being directed to approved recycling processors or export markets." },
                ]}
            />
            <EnterprisePinnedSection sections={items} />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Infrastructure and Fleet"}
                    texts={[
                        "Al Etihad Waste Management operates a modern fleet of compactor trucks, collection vehicles, and material handling equipment designed to meet the logistical demands of Oman’s geography.",
                        "Each branch is equipped with sorting lines, baling equipment, and storage yards, enabling efficient processing and timely collections while minimizing transport distances and emissions."
                    ]}
                />
            </section>
            <CompanyTextOnBackground
                heading="Innovation and Continuous Development"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="The company continues to introduce advanced recycling techniques, including mechanized baling, data-driven route planning, and performance monitoring systems. Ongoing investment in employee training and community engagement strengthens service quality and environmental awareness."
                endText={"Through partnerships with schools, businesses, and public institutions, Al Etihad Waste Management actively promotes recycling initiatives, positioning itself as a future-focused leader in Oman’s waste management industry."}
            />
        </main>
    )
}

export default AlEtihadWasteManagementServicesPage