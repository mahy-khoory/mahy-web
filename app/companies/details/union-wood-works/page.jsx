import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function UnionWoodWorksPage() {
    const overview = [
        {
            heading: "Operations and Market Reach",
            text: "Union Wood Works supplies large daily volumes of compressed wood blocks to customers across the UAE, GCC, and select international markets. Its products are used in major construction projects, industrial manufacturing operations, and packaging facilities that require reliable, sustainable wood substitutes.",
            lastText: "The company's scale and consistency make it a trusted partner for high-volume contracts and long-term supply agreements.",
        },
        {
            heading: "Industry Focus and Clients",
            text: "Union Wood Works serves a broad range of sectors, including:",
            bullets: [
                "Construction and infrastructure contractors",
                "Industrial manufacturers",
                "Packaging and logistics companies",
                "Furniture and woodworking producers"
            ],
            lastText: "By offering recycled alternatives without compromising performance, the company enables these industries to meet sustainability targets while maintaining cost and operational efficiency.",
        },
        {
            heading: "Role within the MAHY Khoory Group",
            text: "As part of the Group’s Manufacturing Division, Union Wood Works is a core contributor to MAHY Khoory’s circular economy model. It converts wood waste often generated within the Group’s own operations and partner networks into market-ready engineered products.",
            lastText: "This vertical integration strengthens the Group’s sustainability credentials, reduces waste disposal dependency, and expands its portfolio of environmentally responsible industrial products.",
        },
        {
            heading: "Quality, Safety, and Compliance",
            text: "Union Wood Works operates under strict quality and environmental controls. The facility is accredited to high standards of technical and environmental safety and maintains ISO 9001 certification. Quality assurance measures include:",
            bullets: [
                "Continuous monitoring of block density and moisture content",
                "Bonding strength and durability testing",
                "Regular process audits and compliance reviews"
            ],
            lastText: "These controls ensure predictable performance, safe handling, and reliable use across applications.",
        },
        {
            heading: "Sustainability and Environmental Impact",
            text: "Sustainability is central to Union Wood Works’ business model. By converting 100% reclaimed wood into reusable industrial materials, the company:",
            bullets: [
                "Significantly reduces landfill waste",
                "Preserves natural timber resources",
                "Lowers the carbon footprint associated with virgin wood production"
            ],
            lastText: "The manufacturing facility is equipped with advanced dust-collection and pollution-control systems, ensuring minimal environmental impact during production. The resulting eco-wood blocks are biodegradable and fully aligned with green building principles.",
        },
    ];

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Union Wood Works"
                texts={[
                    "Union Wood Works is the dedicated wood recycling and engineered wood manufacturing subsidiary of the MAHY Khoory Group. The company is a regional leader in the production of compressed wood blocks manufactured entirely from 100% recycled wood fibers, supplying sustainable alternatives to virgin timber for industrial, construction, packaging, and furniture applications.",
                    "By transforming wood waste into high-performance engineered products, Union Wood Works plays a vital role in advancing circular manufacturing practices and reducing dependence on natural forest resources.",
                ]}
            />
            <ValuesSection
                title="Our Mission"
                description="Union Wood Works is committed to converting discarded wood into durable, high-quality engineered materials that meet industrial performance requirements while preserving the environment."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Our Mission"
                ctaHref={false}
                imagePosition="right"
            />
            <ValuesSection
                title="Our Vision"
                description="Its vision is to become the preferred eco-wood supplier across the GCC, driven by advanced processing technology, operational excellence, and strict environmental compliance."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Our Vision"
                ctaHref={false}
                imagePosition="left"
            />
            <TrustedAdvisorSection
                heading="Background and Development"
                texts={[
                    "Established as part of MAHY Khoory Group’s manufacturing expansion, Union Wood Works was created to address two parallel challenges: the growing volume of wood waste and increasing market demand for cost-effective, sustainable alternatives to solid timber.",
                    "Since its inception, the company has evolved into one of the region’s most advanced recycled-wood facilities, supporting both domestic demand and export markets."
                ]}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Products and Manufacturing Capabilities"}
                    texts={[
                        "Union Wood Works specializes in the production of compressed wood blocks (eco-wood blocks). These blocks are manufactured by processing reclaimed wood waste such as sawdust, shavings, and scrap timber combined with bonding agents and compressed under high pressure to achieve consistent density and strength.",
                        "Key product characteristics include:"
                    ]}
                    items={[
                        "Uniform structure and dimensional stability",
                        "High load-bearing capacity",
                        "Customizable sizes, densities, and specifications",
                        "Suitable replacement for solid wood in non-structural and semi-structural applications"
                    ]}
                    text2={
                        "The blocks are widely used in:"
                    }
                    items2={[
                        "Construction formwork and foundations",
                        "Packaging and pallet manufacturing",
                        "Furniture and joinery components",
                        "Industrial support and spacer applications"
                    ]}
                    endText={"The production process is highly automated, ensuring repeatable quality and large-volume output."}
                />
            </section>
            <FeaturesEngineeringSection
                heading="Union Wood Works Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
            <SolarPanelQuoteGrid
                heading="Infrastructure and Technology"
                text="Union Wood Works operates a state-of-the-art automated facility, incorporating:"
                items={[
                    "Industrial shredders and material preparation systems",
                    "Drying kilns and controlled mixing units",
                    "High-capacity hydraulic pressing machines",
                    "Automated cutting and finishing lines"
                ]}
                quoteText="This infrastructure allows the plant to produce thousands of blocks per day with high consistency, short lead times, and minimal manual intervention."
            />
            <div className="mt-8 md:mt-10">
                <CompanyTextOnBackground
                    heading="Innovation and Strategic Direction"
                    image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
                    align="left"
                    text="The company continuously invests in process optimization and product innovation. Recent initiatives include:"
                    items={[
                        "Upgraded hydraulic press systems for higher output efficiency",
                        "Improved resin and binder formulations for enhanced performance",
                        "Exploration of new engineered wood products such as composite panels and structural eco-wood components"
                    ]}
                    endText="Union Wood Works also collaborates with technical partners and research bodies to develop greener binders and next-generation wood composites, ensuring long-term competitiveness and environmental leadership."
                />
            </div>
        </main>
    )
}

export default UnionWoodWorksPage