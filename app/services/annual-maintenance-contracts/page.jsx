import AnnualMaintenanceContracts from '@/components/Services/AnnualMaintenanceContracts'
import KitchenItems from '@/components/Services/Kitchen/KitchenItems'
import ServicesSection from '@/components/Services/ServicesSection'
import SolarPanelQuoteGrid from '@/components/Services/SolarPanel/SolarPanelQuoteGrid'
import TrustedAdvisorTabs from '@/components/Services/TrustedAdvisorTabs'
import WasteCollectionGrid from '@/components/Services/WasteCollection/WasteCollectionGrid'
import WasteCollectionTimeline from '@/components/Services/WasteCollection/WasteCollectionTimeline'
import TrustedAdvisorSection from '@/components/TrustedAdvisorSection'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { HiLightBulb } from 'react-icons/hi'

function AnnualMaintenanceContractsPage() {
    const systemsCovered = [
        "Chilled water pumps, booster sets, transfer pumps, sewage pumps, and control panels",
        "Regular descaling, safety checks, and functional inspections",
        "Pumps, filters, dosing systems, and overall water balance checks",
        "Pumps, lighting, filtration, and system controls",
        "Package units, split units, exhaust fans, fresh air systems, and ventilation networks"
    ];
    const benefits = [
        { title: "Scheduled Preventive Maintenance", text: "Regular inspections and servicing based on manufacturer recommendations to detect issues early and avoid unexpected breakdowns." },
        { title: "Priority Service Response", text: "AMC clients receive faster response times and priority scheduling during emergencies or service requests." },
        { title: "Optimized Equipment Performance", text: "Routine cleaning, calibration, alignment, and setting adjustments ensure systems run efficiently reducing electricity consumption and operational strain." },
        { title: "Longer Equipment Lifespan", text: "Continuous care prevents wear and tear, extending pump, motor, and system life." },
        { title: "Predictable Annual Budgeting", text: "Fixed AMC pricing helps avoid unexpected repair costs and enables transparent financial planning." },
        { title: "Reduced Downtime", text: "Early identification of problems prevents system failures, ensuring smooth and uninterrupted operation." },
        { title: "Comprehensive Service Reporting", text: "Detailed maintenance reports provided after each visit, offering complete visibility into system condition and work performed." },
    ];
    const whyChooseUs = [
        { query: "Experienced engineers and certified technicians" },
        { query: "Genuine spare parts and manufacturer-approved practices" },
        { query: "Regular system health checks and performance audits" },
        { query: "Flexible AMC packages (quarterly, bi-annual, or annual)" },
        { query: "Strong track record of maintaining residential towers, hotels, malls, industrial facilities, and commercial complexes" },
    ];
    const timelineItems = [
        {
            title: "Overview",
            text: "We provide a comprehensive range of air conditioning and ventilation services designed to ensure year-round comfort, high system reliability, and long-term energy efficiency. From new installations to corrective repairs and lifecycle maintenance, every service is delivered with engineering accuracy and a strong commitment to customer satisfaction.",
            image: "/gallery/gallery-1.jpg"
        },
        {
            title: "Expert Installation & Commissioning",
            text: "Our installation and commissioning services follow strict engineering guidelines and manufacturer specifications to ensure optimal performance from day one:",
            options: [
                "Installation of new AC units as per approved drawings and technical specifications",
                "Mounting, piping, insulation, ducting connections, and condensate management",
                "Electrical integration with panels, isolators, and safety devices",
                "Full system testing, air balancing, and performance verification",
                "Measurement of cooling capacity, airflow distribution, and temperature accuracy",
                "Ensuring compliance with safety, ventilation, and environmental standards"
            ],
            endText: "These commissioning procedures guarantee stable cooling, quiet operation, and efficient energy consumption.",
            image: "/gallery/gallery-2.jpg"
        },
        {
            title: "Stress-Free Warranty Repairs",
            text: "We manage all warranty-related issues directly with equipment manufacturers to ensure fast and reliable resolution:",
            options: [
                "Full coordination with AC brands and OEMs for warranty validation and approvals",
                "Use of genuine spare parts to maintain system integrity and durability",
                "Comprehensive service documentation for record-keeping and future reference",
                "Repairs carried out with minimal disruption to residents, tenants, or operations"
            ],
            endText: "Our streamlined warranty process helps reduce downtime and maintain consistent cooling performance.",
            image: "/gallery/gallery-3.jpg"
        },
        {
            title: "Dependable Non-Warranty Repairs",
            text: "Our swift and accurate repair services ensure your AC systems return to peak performance quickly and efficiently:",
            options: [
                "Rapid response to breakdowns, cooling issues, leaks, and customer complaints",
                "Detailed diagnostic reports identifying the exact cause of failure",
                "Transparent repair cost estimates with no hidden charges",
                "Corrective repairs focused on solving root causes, not temporary patchwork",
                "Replacement of faulty compressors, motors, blowers, sensors, contactors, PCB boards, and refrigerant components"
            ],
            endText: "We aim to restore system efficiency while extending equipment lifespan.",
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Additional Support Services",
            options: [
                "Preventive maintenance contracts (filter cleaning, coil washing, gas top-up, electrical checks)",
                "Duct cleaning & IAQ (Indoor Air Quality) improvement services",
                "Thermostat calibration & control optimization",
                "Refrigerant leak testing and system recharging",
                "Ventilation system inspection & exhaust system servicing"
            ],
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "Why Choose Our Air Conditioning Services?",
            options: [
                "Certified HVAC technicians & engineers",
                "Manufacturer-approved installation and repair practices",
                "Fast turnaround with reliable workmanship",
                "Genuine parts and long-term service solutions",
                "Suitable for villas, apartments, towers, offices, warehouses, and commercial buildings"
            ],
            image: "/gallery/gallery-6.jpg"
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Annual Maintenance Contracts"}
                description={"Reliable, preventive maintenance solutions designed to keep your essential building systems operating safely, efficiently, and continuously throughout the year."}
                description2={"Our AMC packages are structured to provide year-round technical support, proactive servicing, and long-term protection for residential, commercial, and industrial facilities."}
                image={"/gallery/gallery-2.jpg"}
            />
            <div className="pt-10">
                <SolarPanelQuoteGrid
                    heading='Systems Covered Under AMC'
                    text='Our maintenance contracts cover a wide range of mechanical, electrical, and water-management systems, including:'
                    items={systemsCovered}
                    quoteText='Each AMC plan is tailored to the specific site requirements and equipment configuration.'
                />
            </div>
            <KitchenItems
                title='Key Benefits of Our AMC Services'
                items={benefits}
            />
            <WasteCollectionGrid
                heading="Why Choose Our AMC Services?"
                items={whyChooseUs}
                icon={<HiLightBulb size={25} />}
            />
            <WasteCollectionTimeline
                heading='Assured Performance All Year Round'
                text="Our Annual Maintenance Contracts ensure consistent system performance, reduced downtime, and total peace of mind—allowing property managers, facility teams, and homeowners to focus on daily operations without worrying about equipment failures."
                items={timelineItems}
            />
            <AnnualMaintenanceContracts />
            <TrustedAdvisorSection />
            <ServicesSection />
            <TrustedAdvisorTabs />
        </main>
    )
}

export default AnnualMaintenanceContractsPage