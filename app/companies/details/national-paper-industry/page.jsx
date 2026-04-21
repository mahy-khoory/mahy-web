import CompaniesSectors from "@/components/CompaniesSectors"
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"

function NationalPaperIndustryPage() {
    const items = [
        {
            title: "Strategic Integration and Partnerships",
            subtitle: "NPI benefits from close integration with Union Paper Mills, another MAHY Khoory Group company that supplies 100% recycled test liner and fluting medium and semi kraft. This vertical integration ensures consistent raw material quality while supporting the Group’s circular manufacturing model.",
            endText: "The company also partners with leading international machinery and technology providers (e.g., BHS, EMBA, BOBST) ensuring access to modern corrugation and converting solutions and continuous enhancement of production capabilities. Recent capacity expansions have positioned NPI to meet growing demand across multiple sectors.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg",
        },
        {
            title: "Sustainability and Environmental Responsibility",
            subtitle: "Sustainability is embedded in NPI’s operating model. By utilizing recycled paper as its primary raw material, the company significantly reduces reliance on virgin fiber and contributes to landfill diversion. Manufacturing processes are designed to minimize waste, with paper trim and scrap recycled back into production wherever possible.",
            endText: "NPI’s operations comply with environmental standards and ISO-certified management systems, supported by modern, energy-efficient equipment that minimizes emissions and resource consumption. Through sustainable packaging solutions, NPI also helps customers reduce product damage and packaging waste across supply chains.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592573/engineering-services-single_skilled_technician.jpg_roa7p4.jpg",
        },
        {
            title: "Leadership and Workforce",
            subtitle: "NPI is managed by an experienced leadership team overseeing production, quality, sales, and operations. The plant is supported by a dedicated workforce of engineers, technicians, machine operators, and logistics personnel, enabling continuous and reliable production.",
            endText: "Strong emphasis is placed on operational discipline, safety, and workforce training to maintain consistent performance and customer satisfaction.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592457/engineering-page_single_professional_technic.jpg_mvffeg.jpg",
        },
    ];

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="National Paper Industry (S.P.S – L.L.C)"
                texts={[
                    "National Paper Industry (S.P.S – L.L.C)   (NPI) is a leading manufacturer of corrugated cartons and packaging solutions in the United Arab Emirates. Headquartered in Ajman, NPI operates as part of the MAHY Khoory Group’s manufacturing division, serving a broad customer base across the UAE and selected regional markets.",
                    "The company operates a state-of-the-art manufacturing facility spanning approximately 180,000 square feet and employs more than 157 skilled professionals. Over the years, NPI has established a strong reputation for reliability, technical capability, and innovation in the design and production of high-quality corrugated packaging."
                ]}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Products and Services"}
                    texts={[
                        "NPI specializes in the design, manufacture, and supply of customized corrugated packaging solutions tailored to diverse industry requirements. Its product range includes:"
                    ]}
                    items={[
                        "Single-wall and double-wall corrugated cartons",
                        "Custom-designed boxes and die-cut packaging",
                        "Heavy-duty and specialty packaging configurations",
                        "Printed corrugated solutions"
                    ]}
                    text2={"The company offers end-to-end packaging services, supporting customers from initial design and prototyping through large-scale production and delivery. This integrated approach ensures consistency in quality, performance, and lead times."}
                />
            </section>
            <TrustedAdvisorSection
                heading="Market Focus and Client Sectors"
                texts={["NPI serves a wide range of industries across domestic and regional markets. Key client sectors include:"]}
                bullets={[
                    "Fast-moving consumer goods (food and beverages)",
                    "Consumer electronics and appliances",
                    "Industrial products, including ceramics and lubricants",
                    "Agriculture and fresh produce packaging"
                ]}
                lastText={"By customizing carton strength, dimensions, and print quality, NPI supports both large industrial clients and small-to-medium enterprises seeking durable, branded, and cost-effective packaging solutions."}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Manufacturing Capabilities and Technology"}
                    texts={[
                        "NPI’s facility is equipped with advanced corrugation, printing, and converting machinery, enabling high-speed and high-precision production. Core capabilities include:"
                    ]}
                    items={[
                        "Automated corrugators and flexographic printing lines",
                        "Computerized flat-bed and rotary die-cutters",
                        "Finishing equipment",
                        "Automated stacking and material-handling systems"
                    ]}
                    text2={"The company operates in-house quality control laboratories to test paper strength, compression resistance, and print durability, ensuring products meet client specifications and industry standards. Continuous investment in automation and production-planning systems supports efficiency, accuracy, and waste reduction."}
                />
            </section>
            <EnterprisePinnedSection sections={items} />
        </main>
    )
}

export default NationalPaperIndustryPage