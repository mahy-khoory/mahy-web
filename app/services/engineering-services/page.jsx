import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection"
import SubPageHeading from "@/components/UI/SubPageHeading"

function EngineeringServicesPage() {
    const capabilities = [
        {
            title: "Advanced System Design",
            subtitle: "All solutions are engineered using CAD-based design software, enabling precise system layouts, accurate hydraulic calculations, and optimized performance outcomes. Our engineering services include:",
            bullets: [
                "Pump selection & hydraulic calculations",
                "Schematic and GA drawings",
                "Control philosophy and automation design",
                "Flow, head, and energy analysis",
                "Custom system integration for site-specific requirements"
            ],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg",
        },
        {
            title: "Fabrication & Metal-Work Expertise",
            subtitle: "We offer complete in-house fabrication capabilities, ensuring durable, precision-engineered components such as:",
            bullets: [
                "TIG, MIG & MAG welding",
                "Riser pipes & stainless-steel manifolds",
                "Custom pipe fittings & adaptors",
                "Brackets, skids & mounting frames",
                "Precision-machined metal components"
            ],
            endText: "Our manufacturing processes comply with industry standards to ensure long-lasting reliability.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592573/engineering-services-single_skilled_technician.jpg_roa7p4.jpg",
        },
        {
            title: "Installation & Commissioning Services",
            subtitle: "Our team executes the complete installation of pumping systems including:",
            bullets: [
                "Booster pump sets",
                "Transfer & circulation pumps",
                "Firefighting pumps & jockey pumps",
                "Submersible and surface-mounted pumps",
                "Irrigation and landscape water transfer systems",
                "Decorative water features & fountain pumps"
            ],
            endText: "All installations follow strict safety, electrical, and mechanical guidelines—ensuring optimal functionality from day one.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592457/engineering-page_single_professional_technic.jpg_mvffeg.jpg",
        },
        {
            title: "Maintenance, Repair & After-Sales Support",
            subtitle: "We provide full lifecycle support through planned maintenance, emergency servicing, and technical troubleshooting. Services include:",
            bullets: [
                "Pump overhauling & refurbishment",
                "Motor rewinding & bearing replacement",
                "Control panel repair & programming",
                "Generator servicing & load testing",
                "Electrical fault diagnosis & cable rectification",
                "Submersible pump recovery & reinstallation",
                "VFD and soft-starter configuration"
            ],
            endText: "Our technicians ensure each system continues to operate safely, efficiently, and with minimal downtime.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592683/engineering-services-maintenance_skilled_technician_wearing.jpg_rei72c.jpg",
        },
        {
            title: "Applications & Expertise",
            subtitle: "Our engineering solutions are tailored for:",
            bullets: [
                "High-rise buildings & commercial towers",
                "Residential properties & villa communities",
                "Industrial plants & utility networks",
                "Firefighting pump rooms",
                "Irrigation farms & landscape projects",
                "Water features, lakes & fountains",
                "RO filtration & water treatment facilities"
            ],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592755/engineering-services-application-expertise.jpg_tffpsi.jpg",
        },
        {
            title: "Why Choose Our Engineering Division?",
            bullets: [
                "Decades of technical expertise",
                "CAD-driven engineering accuracy",
                "In-house fabrication capabilities",
                "Multi-brand pump integration expertise",
                "Skilled engineers & certified technicians",
                "Fast turnaround, reliable service, and long-term support"
            ],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592801/engineering-clean_pump_facility.jpg_taysd3.jpg",
        }
    ];
    return (
        <main>
            <SubPageHeading
            fullHeight
                title={"Engineering & Technical Services"}
                description={"With decades of industry expertise, our Engineering Division delivers complete water-transfer and pumping solutions, covering design, fabrication, installation, commissioning, and long-term maintenance. We support a wide range of applications including pressure boosting, water transfer, firefighting, irrigation, decorative water features, and water purification systems—ensuring reliable performance tailored to each project’s technical requirements."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <EnterprisePinnedSection sections={capabilities} />
        </main>
    )
}

export default EngineeringServicesPage