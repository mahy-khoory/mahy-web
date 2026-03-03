import SolarPanelInstallationsGrid from "@/components/Services/SolarPanel/SolarPanelInstallationsGrid"
import SubPageHeading from "@/components/UI/SubPageHeading"

function LearningAndDevelopmentPage() {
    const items = [
        { title: "Structured Training & Development", text: "We actively support training and professional development across all levels of the organization. Employees are encouraged to enhance their technical knowledge, operational skills, leadership capabilities, and industry expertise through structured training programs and practical exposure. Depending on the role and business requirements, training may include technical certifications, system and ERP training, compliance workshops, safety programs, leadership development, and sector-specific skill enhancement.", image: "/solar/solar-1.svg" },
        { title: "Operationally Aligned Upskilling", text: "Our approach to development is aligned with operational needs. As the group continues to modernize and adopt advanced systems and structured governance frameworks, we ensure that employees are equipped with the necessary knowledge and tools to adapt effectively. By investing in upskilling and continuous improvement, we maintain high performance standards across all subsidiaries.", image: "/solar/solar-1.svg" },
        { title: "Long-Term Professional Growth", text: "We also recognize the importance of long-term professional growth. Where appropriate, employees may be supported in pursuing additional education, professional certifications, or specialized training programs that align with their roles and the strategic direction of the group. This support may vary depending on company policy and operational priorities, but the principle remains consistent — growth is encouraged and valued.", image: "/solar/solar-1.svg" },
        { title: "Hands-On Learning & Collaboration", text: "Learning at MAHY Khoory Group is not limited to formal training sessions. Employees gain practical experience through cross-functional collaboration, exposure to multi-sector operations, and involvement in real projects that require critical thinking and accountability. This combination of structured training and hands-on experience creates a strong foundation for sustainable career progression.", image: "/solar/solar-1.svg" },
        { title: "Building a Future-Ready Workforce", text: "When employees grow, the organization grows with them. By continuously developing skills, enhancing knowledge, and strengthening professional competence, we build a more capable, resilient, and future-ready enterprise. Our commitment to learning and development reflects our long-term vision of building not just successful businesses, but skilled professionals who contribute meaningfully to sustained organizational success.", image: "/solar/solar-1.svg" }
    ];
    return (
        <main>
            <SubPageHeading
                title={"Learning & Development"}
                image={"/gallery/gallery-2.jpg"}
            />
            <SolarPanelInstallationsGrid
                heading="Overview"
                text={"At MAHY Khoory Group, we strongly believe that organizational growth and employee development go hand in hand. Continuous learning is not viewed as an optional initiative, but as a strategic investment that strengthens both individual capability and overall business performance."}
                itemsTitle={false}
                items={items}
            />
        </main>
    )
}

export default LearningAndDevelopmentPage