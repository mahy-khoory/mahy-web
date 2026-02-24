import SustainabilitySection from "@/components/UI/about-us/sustainability/Sustainability";
import FeaturedDepartments from "@/components/UI/careers/FeaturedDepartments"
import SubPageHeading from "@/components/UI/SubPageHeading"

function TransferPumpsPage() {
    const features = [
        { title: "Heavy-Duty Construction", description: "Available in robust cast iron, stainless steel, and composite materials, providing excellent strength and corrosion resistance for various water qualities and operating conditions.", image: "/gallery/gallery-1.jpg" },
        { title: "Potable & Non-Potable Water Compatibility", description: "Designed to safely handle drinking water, process water, chilled water, hot water, and treated secondary water.", image: "/gallery/gallery-2.jpg" },
        { title: "High Hydraulic Efficiency", description: "Optimized impeller geometry and hydraulic design ensure maximum flow output, reduced power consumption, and enhanced system performance.", image: "/gallery/gallery-3.jpg" },
        { title: "Wide Operating Range", description: "Offered in multiple sizes and configurations with broad flow and head capabilities, making them adaptable to diverse transfer and circulation requirements.", image: "/gallery/gallery-4.jpg" },
        { title: "User-Friendly Installation & Maintenance", description: "Equipped with back-pull-out design (for selected models), accessible components, and standardized connections, enabling quick servicing and reduced downtime.", image: "/gallery/gallery-5.jpg" },
        { title: "Reliable Motor Performance", description: "Fitted with TEFC motors, thermal protection, and high-quality bearings for long service life and dependable operation.", image: "/gallery/gallery-6.jpg" }
    ];

    const applications = [
        {
            title: "Water Transfer & Circulation Systems",
            text: "Ideal for domestic and commercial water movement, utility networks, and continuous recirculation loops.",
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Building Services & Mechanical Rooms",
            text: "Used widely in HVAC systems, plumbing networks, and facility service rooms for fluid distribution.",
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "District Cooling & Chilled Water Plants",
            text: "Suited for chilled water circulation, condenser water loops, and primary/secondary pumping arrangements.",
            image: "/gallery/gallery-6.jpg"
        },
        {
            title: "Industrial Process Water",
            text: "Supports manufacturing processes, cooling systems, washdown operations, and utility water distribution.",
            image: "/gallery/gallery-8.jpeg"
        },
        {
            title: "Chilled & Hot Water Distribution",
            text: "Suitable for hydronic heating, cooling pipelines, AHU/FCU supply lines, and closed-loop systems.",
            image: "/gallery/gallery-4.jpg"
        }
    ]

    return (
        <main>
            <SubPageHeading
                title={"Transfer Pumps"}
                description={"Transfer pumps are designed for efficient and dependable movement of water and various liquids within residential, commercial, and industrial systems. Engineered for durability and continuous-duty operation, these pumps support circulation, distribution, and fluid transfer tasks across HVAC, utility, and process environments. Their versatile performance and broad operating range make them ideal for both general-purpose and specialized applications."}
                image={"/gallery/gallery-1.jpg"}
            />
            <FeaturedDepartments
                title={"Product-Oriented Key Features"}
                departments={features}
            />
            <SustainabilitySection
                heading="Applications"
            />
        </main>
    )
}

export default TransferPumpsPage