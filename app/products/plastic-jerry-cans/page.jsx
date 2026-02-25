import ScrollRevealImage from "@/components/Products/PlasticJerryCans"
import CompanyVisionPurpose from "@/components/UI/companies/detail/CompanyVisionPurpose"
import ServicesGlobally from "@/components/UI/companies/detail/ServicesGlobally"
import SubPageHeading from "@/components/UI/SubPageHeading"

function PlasticJerryCansPage() {
    const features = [
        {
            label: "Product-Oriented Features",
            image: "/gallery/gallery-1.jpg",
            items: [
                {
                    title: "High-Strength Material Construction",
                    text: "Made from HDPE and food-grade plastics, providing superior impact resistance, structural stability, and long-term reliability.",
                },
                {
                    title: "Leak-Proof & Chemically Resistant",
                    text: "Engineered with thick walls and precision-molded threads that ensure leak-free performance and compatibility with oils, fuels, solvents, detergents, and food products.",
                },
                {
                    title: "Wide Size & Shape Options",
                    text: "Available from small household sizes (0.5L–5L) to industrial bulk sizes (15L–25L), with multiple ergonomic designs for ease of use and optimized storage.",
                },
                {
                    image: "/gallery/gallery-3.jpg",
                    title: "Industry-Specific Variants",
                    items: [
                        "Lubricant - grade jerry cans for engine oils, hydraulic oils, and greases",
                        "Petroleum - compatible designs for fuel and related products",
                        "Chemical - resistant containers for industrial liquids and detergents",
                        "Food - grade certified containers for ketchup, sauces, and condiments, manufactured under strict hygiene standards"
                    ]
                },
                {
                    image: "/gallery/gallery-3.jpg",
                    title: "Flexible Cap & Closure Options",
                    text: "Choose from:",
                    items: [
                        "Standard screw caps",
                        "Tamper-evident caps for product security",
                        "Chemical-resistant caps for aggressive liquids",
                        "Sealing caps for extended shelf-life"
                    ],
                    lastText: "Custom cap colors and embossing options are also available."
                },
            ]
        },
        {
            label: "Branding & Customization Services",
            image: "/gallery/gallery-2.jpg",
            items: [
                {
                    title: "Labelling Service",
                    text: "Adhesive labels applied directly to the jerry cans, showcasing your brand identity, product specifications, barcodes, and regulatory information."
                },
                {
                    title: "Direct Printing Service",
                    text: "High-quality screen or digital printing applied directly to the plastic surface for long-lasting, professional branding that resists fading and abrasion."
                },
                {
                    title: "Customization Options",
                    items: [
                        "Customized colors",
                        "Embossed company logos",
                        "Unique shapes or grips",
                        "Tailored cap designs"
                    ]
                }
            ]
        },
        {
            label: "Performance Advantages",
            image: "/gallery/gallery-3.jpg",
            items: [
                {
                    title: "Performance Advantages",
                    items: [
                        "Stackable Designs for optimized logistics and warehouse storage",
                        "High Chemical Resistance compatible with oils, fuels, and cleaning agents",
                        "Leak-Proof Engineering with precision molding and quality control",
                        "Dimensional Accuracy ensuring uniformity across large batches",
                        "Ergonomic Handling with comfortable grips and balanced weight distribution"
                    ]
                }
            ]
        },
        {
            label: "Applications",
            image: "/gallery/gallery-4.jpg",
            items: [
                {
                    title: "Applications",
                    items: [
                        "Lubricants & engine oils",
                        "Fuel & petroleum products",
                        "Household and industrial cleaning chemicals",
                        "Food and condiment packaging (food-grade models)",
                        "Agriculture and water storage",
                        "Chemical distribution and transportation"
                    ]
                }
            ]
        }
    ];
    return (
        <main>
            <SubPageHeading
                title={"Plastic Jerry Cans"}
                image={"/gallery/gallery-8.jpeg"}
            />
            <ServicesGlobally
                heading="Overview"
                text="Our comprehensive range of plastic jerry cans is available in multiple capacities — 0.5L, 1L, 3L, 4L, 5L, 15L, 20L, and 25L — designed to meet the versatile packaging requirements of lubricant manufacturers, petroleum distributors, chemical suppliers, cleaning product producers, and food-processing industries across the UAE. Each jerry can is manufactured using premium-grade, high-density raw materials, ensuring durability, leak resistance, dimensional stability, and safe handling in harsh operational environments."
            />
            <CompanyVisionPurpose
                heading="Features"
                items={features}
                tabs={features.map((feature) => feature.label)}
                defaultTab="productOriented"
            />
            {/* <ScrollRevealImage /> */}
        </main>
    )
};

export default PlasticJerryCansPage