import BoosterPumpSlideRevealSection from "@/components/Products/BoosterPumpSlideRevealSection";
import ServicesSection from "@/components/Services/ServicesSection";
import SolarPanelInstallationsGrid from "@/components/Services/SolarPanel/SolarPanelInstallationsGrid"
import SubPageHeading from "@/components/UI/SubPageHeading"

function CorrugatedBoxesPage() {
    const features = [
        {
            title: "Wide Range of Board Grades",
            text: "Available in 2-ply, 3-ply, 5-ply, and 7-ply configurations, offering tailored performance for lightweight, medium-duty, and heavy-duty packaging applications."
        },
        {
            title: "High Structural Strength",
            text: "Engineered to deliver:",
            list: [
                "Excellent compression strength",
                "High burst resistance",
                "Strong edge crush (ECT/RCT) values",
                "Superior stacking stability"
            ],
            endText: "These features ensure reliable protection during handling, transport, and storage."
        },
        {
            title: "Multiple Flute Types",
            text: "Customizable flute profiles including A, B, C, E, and F flutes, as well as double-wall combinations, to meet performance and cushioning requirements."
        },
        {
            title: "Precision Die-Cutting & Box Forming",
            text: "Advanced die-cutting technology enables accurate shapes, slots, and folds for special designs, promotional packaging, and retail-ready formats."
        },
        {
            title: "Premium Printing Options",
            text: "High-quality flexographic and digital printing available for logos, product details, barcodes, and branding elements—ensuring sharp, durable, and aesthetically strong print finishes."
        },
        {
            title: "Custom Design Services",
            text: "Cartons can be fully customized for:",
            list: [
                "Dimensions",
                "Handle cut-outs",
                "Perforations",
                "Window openings",
                "Internal partitions",
                "Special inserts or dividers"
            ]
        },
        {
            title: "Eco-Friendly Manufacturing",
            text: "Produced using recyclable paper, optimized energy processes, and sustainable sourcing practices, supporting UAE eco-compliance requirements."
        }
    ];
    const applications = [
        {
            key: "strategy",
            title: "Logistics & E-Commerce",
            desc: "Reliable packaging for shipping, warehousing, and courier operations.",
        },
        {
            key: "sustainability",
            title: "FMCG & Retail Products",
            desc: "Suitable for packaged foods, beverages, personal care, household items, and consumer goods.",
        },
        {
            key: "operations",
            title: "Electronics & Technology",
            desc: "Provides cushioning and durability for fragile and high-value items.",
        },
        {
            key: "marketing",
            title: "Food & Agriculture",
            desc: "Ideal for fresh produce, dry foods, bakery products, and export packaging.",
        },
        {
            key: "hr",
            title: "Industrial & Manufacturing",
            desc: "Heavy-duty boxes for machinery parts, tools, chemicals, and industrial goods.",
        },
        {
            key: "finance",
            title: "Textiles & Apparel",
            desc: "Perfect for clothing shipments, fabric rolls, and retail packaging.",
        },
    ];
    const whyUs = [
        {
            title: "Durability",
            text: "Durable and strong construction",
            width: "md:w-full"
        },
        {
            title: "Customization",
            text: "Customizable shapes, sizes, and flute types",
            width: "md:w-[95%]"
        },
        {
            title: "Branding",
            text: "High-quality printing for branding",
            width: "md:w-[90%]"
        },
        {
            title: "Sustainability",
            text: "Cost-efficient and sustainable",
            width: "md:w-[85%]"
        },
        {
            title: "Reliability",
            text: "Consistent performance under varying load and handling conditions",
            width: "md:w-[80%]"
        }
    ];
    return (
        <main>
            <SubPageHeading
                title={"Corrugated Boxes"}
                image={"/gallery/gallery-2.jpg"}
            />
            <SolarPanelInstallationsGrid
                heading="Overview"
                text="Our high-quality corrugated boxes are available in a comprehensive range of sizes, flute profiles, board grades, and customization options, designed to meet the diverse packaging needs of industrial, commercial, and retail sectors across the UAE. Manufactured using premium kraft liners, high-strength fluting paper, and environmentally responsible raw materials, these cartons offer excellent durability, crush resistance, and printability—ensuring superior product protection and brand presentation."
                items={features}
            />
            <ServicesSection
                title="Applications"
                items={applications}
            />
            <BoosterPumpSlideRevealSection
                heading="Advantages"
                subHeading="Why Choose Our Corrugated Boxes?"
                text1="Stronger packaging engineered for real-world performance."
                text2="Our corrugated boxes are built to deliver durability, protection, and efficiency at every stage."
                items={whyUs}
            />
        </main>
    )
}

export default CorrugatedBoxesPage