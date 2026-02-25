import KitchenImageScaledGrid from "@/components/Services/Kitchen/KitchenImageScaledGrid"
import SolarPanelInstallationsGrid from "@/components/Services/SolarPanel/SolarPanelInstallationsGrid"
import TrustedBusinessAdvisor from "@/components/Services/TrustedAdvisorTabs"
import WasteCollectionGrid from "@/components/Services/WasteCollection/WasteCollectionGrid"
import WasteCollectionItems from "@/components/Services/WasteCollection/WasteCollectionItems"
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu"
import WasteCollectionScrollMovingCards from "@/components/Services/WasteCollection/WasteCollectionScrollMovingCards"
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline"
import WhyUs from "@/components/UI/home/WhyUs"
import SubPageHeading from "@/components/UI/SubPageHeading"

function WasteCollectionServicesPage() {
    const services = [
        {
            title: "Dedicated Fleet Operations",
            text: "With a fleet of over 120 modern, fully equipped waste collection trucks, we ensure punctual, uninterrupted service with the ability to manage high daily waste volumes across multiple locations."
        },
        {
            title: "Advanced Route & Schedule Management",
            text: "Optimized route planning, automated scheduling, and real-time fleet monitoring enable consistent, efficient collection for both routine and high-demand environments."
        },
        {
            title: "Skilled & Certified Workforce",
            text: "Our trained operations team adheres to strict safety, hygiene, and environmental protocols, ensuring professional service delivery for all property categories."
        },
        {
            title: "End-to-End Service Coverage",
            list: [
                "Residential towers & communities",
                "Commercial buildings & office complexes",
                "Retail malls & hospitality facilities",
                "Industrial plants & warehouses",
                "Free zone developments & large master communities"
            ]
        }
    ];
    const recovery = [
        {
            title: "Wide Range of Recyclables Collected",
            text: "We collect and process:",
            bullets: [
                "Paper & cardboard",
                "Corrugated packaging",
                "Mixed plastics",
                "Metal cans",
                "Reusable industrial materials"
            ],
            icon: "/kitchen/kitchenGrid-1.svg"
        },
        {
            title: "Sustainable Processing Channels",
            text: "All recyclables are routed through approved recycling partners and environmentally responsible facilities, supporting UAE’s sustainability goals and waste diversion targets.",
            icon: "/kitchen/kitchenGrid-2.svg"
        },
        {
            title: "Supporting Circular Economy Initiatives",
            text: "Our recycling programs help reduce landfill dependency, promote material recovery, and support national strategies for a greener, more sustainable future.",
            icon: "/kitchen/kitchenGrid-1.svg"
        }
    ];
    const advantages = [
        {
            label: "Reliable Daily Coverage",
            text: "Ensures your property remains clean, compliant, and well-maintained at all times.",
            image: "/gallery/gallery-1.jpg",
        },
        {
            label: "Transparent Reporting & Documentation",
            text: "Optional reporting includes waste volumes, recycling rates, and environmental impact summaries for corporate sustainability audits.",
            image: "/gallery/gallery-3.jpg",
        },
        {
            label: "Custom-Tailored Solutions",
            text: "Waste collection schedules, container sizes, and recycling programs can be designed according to the specific needs of each facility.",
            image: "/gallery/gallery-3.jpg",
        },
        {
            label: "Safety & Environmental Compliance",
            text: "All operations follow UAE municipal standards, environmental regulations, and international best practices in waste handling.",
            image: "/gallery/gallery-3.jpg",
        }
    ];
    const trust = {
        heading: "Trusted Across the UAE",
        description: "Our professionally managed waste collection and recycling solutions are relied upon by:",
        bullets: [
            "Residential towers and gated communities",
            "Commercial buildings and business parks",
            "Retail hubs and shopping malls",
            "Logistics centres and warehouses",
            "Schools, hospitals, and hospitality facilities",
            "Major developers and government entities"
        ]
    };

    return (
        <main>
            <SubPageHeading
                title={"Waste Collection & Recycling Services"}
                image={"/gallery/gallery-8.jpeg"}
            />
            <SolarPanelInstallationsGrid
                heading="Overview"
                text={"We provide professional, reliable, and fully managed waste collection and recycling services for residential communities, commercial complexes, industrial facilities, and large-scale developments across the UAE. Our service model is built around efficiency, safety, and environmental responsibility—offering tailored waste management solutions for every property type while maintaining compliance with UAE municipal and environmental regulations."}
                itemsTitle="Comprehensive Waste Collection Services"
                items={services}
            />
            <KitchenImageScaledGrid
                heading="Recycling & Material Recovery"
                items={recovery}
            />
            <TrustedBusinessAdvisor
                heading="Service Advantages & Value Proposition"
                items={advantages}
            />
            <WhyUs
                items={trust}
                reverse={true}
            />
            <WasteCollectionTimeline />
            <WasteCollectionMenu />
            <WasteCollectionItems />
            <WasteCollectionScrollMovingCards />
            <WasteCollectionGrid />
        </main>
    )
}

export default WasteCollectionServicesPage