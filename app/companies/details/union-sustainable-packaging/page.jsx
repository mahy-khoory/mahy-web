import CompaniesSectors from "@/components/CompaniesSectors"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function UnionSustainablePackagingPage() {
    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="MAHY Khoory Motors"
                texts={[
                    "Company Overview: Union Sustainable Packaging Solutions (USPS) is the MAHY Khoory Group’s dedicated wooden packaging arm, based in Dubai. It evolved from Union Wood Works, a long-standing MAHY subsidiary, and specializes in wooden packaging.",
                    "USPS operates PalletBiz, which is an international network specializing in the production of wood and metal packaging materials, with strategically placed production units and distribution depots."
                ]}
            />
            <TrustedAdvisorSection
                heading="Products and Solutions"
                texts={[
                    "USPS offers a comprehensive wooden packaging portfolio tailored for industrial needs. Its product range includes new and refurbished wooden pallets (Euro-format, block pallets, A/B/C grade reused pallets) and pallet collars; crates, boxes and timber containers; as well as packaging accessories and dunnage—all designed for durability and reuse. The company also provides pallet repair, pooling, buy-back and rental services, extending pallet life and reducing waste.",
                    "A signature offering is the compressed pallet block, made by Union Wood Works – this is a dense wood block made from waste wood – which replaces traditional solid blocks. These blocks (100% recycled wood) are economical, uniform in size, free of bark or fissures, and exhibit superior nail-holding strength. All products comply with international quality and phytosanitary (ISPM-15) standards, ensuring they can be used for global exports."
                ]}
            />
            <CompanyTextOnBackground
                heading="Market Focus and Industry Applications"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="USPS serves a broad spectrum of industries that depend on safe, efficient wooden packaging. Its pallets and crates are used across manufacturing, automotive, electronics, retail/consumer goods, FMCG/e-commerce, agriculture and pharmaceuticals. The company’s solutions are well-suited to warehousing and logistics as well as heavy-industry transport, providing reliable handling for everything from machinery parts to consumer products."
                endText={"In healthcare and food sectors, the chemical-free, insect-free compressed blocks meet stringent safety requirements. By fitting into PalletBiz’s global network, USPS can also tap into adjacent markets (oil & gas, construction, etc.) where durable, reusable packaging helps customers reduce costs and environmental impact."}
            />
            <ValuesSection
                title="Technology, Design, and Manufacturing Capabilities"
                description="USPS operates cutting-edge manufacturing with high automation and precision. A dedicated in-house engineering team designs custom packaging to exact specifications, optimizing dimensions, load ratings and material treatments. The UAE facility ensures consistent product quality and fast production cycles. By combining M.A.H.Y. Khoory’s design expertise with PalletBiz’s best practices, USPS can rapidly scale production of bespoke wooden packaging to meet client specifications anywhere in the world."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
                imageAlt="Technology, Design, and Manufacturing Capabilities"
                ctaHref={false}
                width="max-w-7xl mx-auto"
                imagePosition="left"
            />
            <ValuesSection
                title="Sustainability Commitment"
                description="Sustainability is integral to USPS’s operations. All compressed blocks and repair programs use 100% recycled wood, diverting millions of kilograms of used lumber from waste. Their facility repairs or reuses old pallets and recycles offcuts into new blocks (through Union Wood Works), embodying a “repair-reuse-recycle” approach. The compressed blocks require no chemicals or heat treatment (reducing emissions and contamination risk) and are naturally pest-free. These practices align with UAE and Middle East green initiatives (UAE Green Agenda 2030) and PalletBiz’s circular-economy goals. By providing reusable pallets and promoting pallet pooling, USPS helps customers lower their carbon footprint and total packaging cost."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Sustainability Commitment"
                width="max-w-7xl mx-auto"
                ctaHref={false}
                imagePosition="right"
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Strategic Alignment within the Group"}
                    texts={[
                        "PalletBiz (USPS) reinforces MAHY Khoory Group’s reputation as a leader in industrial innovation and environmental solutions.",
                        "It complements the group’s manufacturing and recycling divisions (such as paper mills and waste management) by closing the loop on wood usage."
                    ]}
                    items={[
                        "Strategically, USPS leverages MAHY’s local presence and resources while gaining global reach through PalletBiz.",
                        "This synergy allows the group to offer integrated supply-chain solutions: from sourcing reclaimed wood to producing green packaging to distributing it worldwide."
                    ]}
                    text2="In summary, Union Sustainable Packaging Solutions exemplifies MAHY’s commitment to technology, quality and sustainability – serving both local Gulf markets and international partners with eco-friendly wooden packaging."
                />
            </section>
        </main>
    )
}

export default UnionSustainablePackagingPage