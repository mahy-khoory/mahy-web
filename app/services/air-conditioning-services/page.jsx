import AirConditioningServicesItems from "@/components/Services/AirConditioningServicesItems"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import TrustedBusinessAdvisor from "@/components/Services/TrustedAdvisorTabs"
import WasteCollectionGrid from "@/components/Services/WasteCollection/WasteCollectionGrid";
import SustainabilitySection from "@/components/UI/about-us/sustainability/Sustainability";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import SubPageHeading from "@/components/UI/SubPageHeading"
import { HiLightBulb } from "react-icons/hi";

function AirConditioningServicesPage() {
    const installation = [
        "Installation of new AC units as per approved drawings and technical specifications",
        "Mounting, piping, insulation, ducting connections, and condensate management",
        "Electrical integration with panels, isolators, and safety devices",
        "Full system testing, air balancing, and performance verification",
        "Measurement of cooling capacity, airflow distribution, and temperature accuracy",
        "Ensuring compliance with safety, ventilation, and environmental standards"
    ];
    const repairs = [
        {
            label: "OEM Warranty Support",
            text: "Full coordination with AC brands and OEMs for warranty validation and approvals",
            image: "/gallery/gallery-1.jpg",
        },
        {
            label: "Genuine Spare Parts",
            text: "Use of genuine spare parts to maintain system integrity and durability",
            image: "/gallery/gallery-3.jpg",
        },
        {
            label: "Service Documentation",
            text: "Comprehensive service documentation for record-keeping and future reference",
            image: "/gallery/gallery-3.jpg",
        },
        {
            label: "Minimal Disruption",
            text: "Repairs carried out with minimal disruption to residents, tenants, or operations",
            image: "/gallery/gallery-3.jpg",
        }
    ];
    const processes = [
        {
            id: 1,
            title: "Rapid Emergency Response",
            description: "Rapid response to breakdowns, cooling issues, leaks, and customer complaints",
            icon: "/processes/planning.png",
            leftShift: "-left-8",
            rightShift: "-right-8"
        },
        {
            id: 2,
            title: "Advanced Diagnostics",
            description: "Detailed diagnostic reports identifying the exact cause of failure",
            icon: "/processes/design.png",
            leftShift: "left-12",
            rightShift: "right-12"
        },
        {
            id: 3,
            title: "Transparent Costing",
            description: "Transparent repair cost estimates with no hidden charges",
            icon: "/processes/development.png",
            leftShift: "left-17",
            rightShift: "right-17"
        },
        {
            id: 4,
            title: "Root-Cause Repairs",
            description: "Corrective repairs focused on solving root causes, not temporary patchwork",
            icon: "/processes/deployment.png",
            leftShift: "left-12",
            rightShift: "right-12"
        },
        {
            id: 5,
            title: "Component Replacement",
            description: "Replacement of faulty compressors, motors, blowers, sensors, contactors, PCB boards, and refrigerant components",
            icon: "/processes/planning.png",
            leftShift: "left-0",
            rightShift: "right-0"
        }
    ];
    const services = [
        {
            title: "Preventive Maintenance Contracts",
            text: "Preventive maintenance contracts (filter cleaning, coil washing, gas top-up, electrical checks)",
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Duct Cleaning & IAQ Services",
            text: "Duct cleaning & IAQ (Indoor Air Quality) improvement services",
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "Thermostat Calibration & Optimization",
            text: "Thermostat calibration & control optimization",
            image: "/gallery/gallery-6.jpg"
        },
        {
            title: "Refrigerant Leak Testing",
            text: "Refrigerant leak testing and system recharging",
            image: "/gallery/gallery-8.jpeg"
        },
        {
            title: "Ventilation & Exhaust Servicing",
            text: "Ventilation system inspection & exhaust system servicing",
            image: "/gallery/gallery-4.jpg"
        }
    ];
    const whyChooseUs = [
        { query: "Certified HVAC technicians & engineers" },
        { query: "Manufacturer-approved installation and repair practices" },
        { query: "Fast turnaround with reliable workmanship" },
        { query: "Genuine parts and long-term service solutions" },
        { query: "Suitable for villas, apartments, towers, offices, warehouses, and commercial buildings" },
    ];

    return (
        <main>
            <SubPageHeading
                title={"Air Conditioning Services - Installation, Commissioning & Ongoing Support"}
                description={"We provide a comprehensive range of air conditioning and ventilation services designed to ensure year-round comfort, high system reliability, and long-term energy efficiency. From new installations to corrective repairs and lifecycle maintenance, every service is delivered with engineering accuracy and a strong commitment to customer satisfaction."}
                image={"/gallery/gallery-2.jpg"}
            />
            <div className="pt-10">
                <SolarPanelQuoteGrid
                    heading="Expert Installation & Commissioning"
                    text="Our installation and commissioning services follow strict engineering guidelines and manufacturer specifications to ensure optimal performance from day one:"
                    items={installation}
                    quoteText="These commissioning procedures guarantee stable cooling, quiet operation, and efficient energy consumption."
                />
            </div>
            <TrustedBusinessAdvisor
                heading="Stress-Free Warranty Repairs"
                text={"We manage all warranty-related issues directly with equipment manufacturers to ensure fast and reliable resolution:"}
                items={repairs}
                endText={"Our streamlined warranty process helps reduce downtime and maintain consistent cooling performance."}
            />
            <DesignProcessContainer
                heading={"Dependable Non-Warranty Repairs"}
                processes={processes}
                text1={"Our swift and accurate repair services ensure your AC systems return to peak performance quickly and efficiently:"}
                text3={"We aim to restore system efficiency while extending equipment lifespan."}
            />
            <SustainabilitySection
                heading="Additional Support Services"
                items={services}
            />
            <WasteCollectionGrid
                heading="Why Choose Our Air Conditioning Services?"
                items={whyChooseUs}
                icon={<HiLightBulb size={25} />}
            />
            <AirConditioningServicesItems />
        </main>
    )
}

export default AirConditioningServicesPage