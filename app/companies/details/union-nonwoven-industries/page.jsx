import CompaniesSectors from "@/components/CompaniesSectors"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function UnionNonWovenIndustriesPage() {
    return (
        <main className="pb-12">
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Union Nonwoven Industries"
                texts={[
                    "Union Nonwoven Industries is a MAHY Khoory Group–affiliated manufacturer specializing in advanced nonwoven textile solutions for industrial, healthcare, hygiene, filtration, and construction applications. Building on the Group’s long-standing expertise in recycling and industrial manufacturing, Union Nonwoven produces high-performance polypropylene and polyester nonwoven fabrics engineered to meet demanding functional and regulatory requirements.",
                    "Operating from a modern manufacturing facility in Abu Dhabi, the company combines automated production technologies with stringent quality-control systems to deliver consistent, custom-engineered nonwoven rolls. Union Nonwoven reflects the Group’s commitment to innovation, transforming technical textile requirements into scalable, market-ready solutions."
                ]}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Products and Capabilities"}
                    texts={[
                        "Union Nonwoven manufactures a comprehensive range of technical nonwoven materials, including:",
                    ]}
                    items={[
                        "Spunbond and meltblown nonwoven fabrics",
                        "Composite and laminated nonwoven sheets",
                        "Geotextile felts and industrial textile layers"
                    ]}
                    text2={"These products are designed for diverse end uses such as medical gowns, hygiene wipes, filtration media, insulation pads, agricultural fabrics, and geotechnical applications. The company provides technical advisory services, supporting clients with product selection, material customization, fiber blends, GSM specifications, and surface treatments (hydrophobic and hydrophilic finishes)."}
                    endText={"Post-production services include cutting, packaging, and just-in-time delivery, enabling customers to integrate Union Nonwoven materials seamlessly into their own manufacturing processes."}
                />
            </section>
            <CompanyTextOnBackground
                heading="Markets and Applications"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg"
                align="left"
                text="Union Nonwoven serves regional and international markets across the GCC and wider MENA region. Its customer base includes:"
                items={[
                    "Hygiene and medical product manufacturers",
                    "Water treatment and filtration operators",
                    "Construction and infrastructure contractors",
                    "Automotive and industrial component suppliers"
                ]}
                endText={"The company also supports landscaping and civil-engineering projects through geotextile solutions used in erosion control, soil stabilization, and drainage systems. Clients range from government and public-sector entities to private industrial and commercial organizations seeking locally manufactured, high-quality technical textiles."}
            />
            <TrustedAdvisorSection
                heading="Technology, Innovation, and R&D"
                texts={[
                    "Manufacturing operations are supported by advanced spunbond, meltblown, and needle-punch technologies, enabling the production of both single-layer and composite nonwoven structures. Union Nonwoven continuously invests in research and process optimization to enhance fabric strength, absorbency, filtration efficiency, and cost performance.",
                    "The company collaborates with global equipment suppliers and technology licensors and explores the integration of recycled polymer feedstocks in line with MAHY Khoory Group’s sustainability legacy. In-house laboratories conduct mechanical, durability, and filtration testing to ensure compliance with international performance standards."
                ]}
            />
            <CompanyTextOnBackground
                heading="Sustainability and Environmental Responsibility"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
                align="left"
                text="Sustainability is embedded in Union Nonwoven’s operations. Production waste is minimized through material recovery and reprocessing, while environmentally responsible bonding and finishing methods are prioritized. The company operates in line with international environmental management standards, supporting green construction, hygiene safety, and reduced lifecycle environmental impact."
                endText={"By manufacturing locally, Union Nonwoven also reduces the carbon footprint associated with imported technical textiles, supporting national sustainability objectives."}
            />
            <ValuesSection
                width="max-w-7xl mx-auto"
                title="Leadership and Operations"
                description="Union Nonwoven is led by experienced textile engineers and manufacturing specialists with international exposure in nonwoven technologies. Leadership benefits from cross-functional expertise drawn from MAHY Khoory Group’s broader manufacturing portfolio, ensuring disciplined execution, operational safety, and continuous improvement."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Leadership and Operations"
                ctaHref={false}
                imagePosition="left"
            />
        </main>
    )
}

export default UnionNonWovenIndustriesPage