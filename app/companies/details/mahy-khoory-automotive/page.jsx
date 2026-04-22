import CompaniesSectors from "@/components/CompaniesSectors"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function MahyKhooryAutomotivePage() {
    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="MAHY Khoory Automotive"
                texts={[
                    "MAHY Khoory Automotive represents the MAHY Khoory Group’s strategic expansion into the automotive sector introducing modern, valuedriven and technology-forward mobility solutions to the UAE. As the Group’s curated entry into the automotive sector, the division has forged a strong partnership with Dongfeng Motor Corporation, one of China’s most respected and innovative automotive manufacturers.",
                    "Through Dongfeng, MAHY Khoory Automotive introduces a new generation of vehicles engineered for modern lifestyles - combining futuristic design, intelligent technology, and reliable performance. The wide range of model line-up from sub compact crossovers, off-road capable pickup trucks to electric vehicles, reflects the division’s commitment to accessible, highquality mobility."
                ]}
            />
            <ValuesSection
                title="Our Mission"
                description="To offer intelligent and reliable mobility solutions that enhance everyday life through engineering excellence, professional service, and a deeply customercentric approach."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Our Mission"
                ctaHref={false}
                width="max-w-7xl mx-auto"
                imagePosition="right"
            />
            <ValuesSection
                title="Our Vision"
                description="To become a market-leading automotive provider in the UAE, championing advanced mobility technologies while building a network and portfolio that exceed the standards of modern motoring and client experience."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Our Vision"
                width="max-w-7xl mx-auto"
                ctaHref={false}
                imagePosition="left"
            />
            <TrustedAdvisorSection
                heading="Our Story"
                texts={[
                    "Building on the MAHY Khoory Group’s 96 years of legacy as a distributor of global brands, including established American automotive marques, the Automotive division was launched as part of the Group’s diversification strategy. The decision to partner with Dongfeng reflects a forward-looking approach, recognizing the rising global competitiveness and technological maturity of Chinese automotive manufacturers.",
                    "The brand’s debut was marked by the opening of a flagship showroom and service facility in Dubai, followed by showrooms in Abu Dhabi and ongoing expansion plans, establishing a strong foundation for national expansion."
                ]}
            />
            <SolarPanelImageGrid
                subHeading={"Products and Services"}
                text={"MAHY Khoory Automotive delivers a fully integrated automotive offering, covering sales, after-sales, and customer support:"}
                items={[
                    { title: "Vehicle Sales", text: "Our exclusive Dongfeng range features modern sedans and SUVs designed with advanced safety features, intuitive connectivity, and contemporary styling that aligns with the needs of today’s UAE customers." },
                    { title: "After-Sales Service", text: "State-of-the-art service centers in Dubai and Abu Dhabi staffed by certified technicians provides scheduled maintenance, diagnostics, repairs, and warranty services using genuine parts." },
                    { title: "Customer Support Solutions", text: "From warranty services and roadside assistance to finance solutions, we provide comprehensive support designed to ensure confidence and convenience throughout the ownership experience." },
                ]}
            />
            <CompanyTextOnBackground
                heading="Operations and Network Development"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="The division’s key operational milestone is the establishment of a flagship Dubai showroom and service workshop along with similar facilities in Abu Dhabi, designed as modern, customer-focused automotive experience centers. In line with its growth strategy, MAHY Khoory Automotive is preparing to launch additional showrooms and after sales facilities across the country, expanding its national footprint."
                endText={"These facilities form the backbone of an integrated sales-and-service network, ensuring accessibility, consistency, and high service standards across the UAE."}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Innovation and Future Outlook"}
                    texts={[
                        'Innovation is central to MAHY Khoory Automotive’s strategy. The division embraces digital showroom experiences, online engagement platforms, and customer-centric technologies to enhance the buying and ownership journey. Future plans include the introduction of additional Dongfeng models, including electric vehicles and smart mobility solutions, as these technologies become available in the region.',
                        "Through a proactive and technology-driven approach, MAHY Khoory Automotive aims to establish itself as a trusted automotive brand partner and a key contributor to the Group’s long-term growth."
                    ]}
                />
            </section>
        </main>
    )
}

export default MahyKhooryAutomotivePage