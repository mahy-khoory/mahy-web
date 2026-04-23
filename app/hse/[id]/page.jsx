import SubPageHeading from "@/components/UI/SubPageHeading";
import CompaniesSectors from "@/components/CompaniesSectors";

const HSE_IMAGES = {
    "health-safety-management": "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776977327/flat-lay-arrangement-with-safety-equipment.jpg_qmca6i.jpg",
    "environmental-management":  "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776977324/employees-with-masks-working-warehouse.jpg_w2gwtw.jpg",
    "monitoring-compliance":     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776977337/architect-holding-blueprint.jpg_he3kqs.jpg",
    "continuous-improvement":    "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776977327/flat-lay-arrangement-with-safety-equipment.jpg_qmca6i.jpg",
};

const data = [
    {
        id: "health-safety-management",
        title: "Health & Safety Management",
        description: "Structured systems to identify hazards, assess risks, and implement effective controls across all our operational environments.",
        text1: "The Group maintains structured Health and Safety Management Systems designed to identify hazards, assess risks, and implement effective control measures across all operational environments, including factories, warehouses, transport operations, project sites, and service locations.",
        text2: "Senior management actively oversees health and safety performance, reinforcing a strong safety culture and zero tolerance for unsafe practices.",
        itemsIntro: "Key elements of our health and safety approach include:",
        items: [
            "Compliance with applicable occupational health and safety laws and regulations",
            "Risk assessments and method statements tailored to specific operational activities",
            "Preventive measures to reduce incidents, injuries, and occupational hazards",
            "Regular safety training, toolbox talks, and awareness programs",
            "Clear roles, responsibilities, and accountability at all levels of the organization",
        ],
    },
    {
        id: "environmental-management",
        title: "Environmental Management",
        description: "Embedding environmental responsibility across manufacturing, recycling, logistics, and energy-related activities.",
        text1: "Environmental responsibility is a fundamental component of the Group's operations, particularly across manufacturing, recycling, waste management, logistics, and energy-related activities.",
        text2: "Environmental considerations are integrated into operational planning, investment decisions, and continuous improvement programs across all businesses.",
        itemsIntro: "The Group implements environmental management practices aimed at:",
        items: [
            "Minimizing environmental impact from operations",
            "Promoting recycling, resource recovery, and responsible waste handling",
            "Improving energy efficiency and reducing environmental footprint",
            "Ensuring compliance with environmental laws, permits, and regulations",
            "Supporting circular economy and sustainability initiatives",
        ],
    },
    {
        id: "monitoring-compliance",
        title: "Monitoring, Audits & Compliance",
        description: "Continuous oversight through inspections, internal audits, and independent external assessments to uphold our HSE standards.",
        text1: "Health, Safety, and Environmental performance is subject to continuous monitoring through inspections, performance tracking, and management reviews. Dedicated internal teams conduct regular HSE audits and assessments to verify compliance with internal standards and regulatory requirements.",
        text2: "Audit findings are reviewed by management, and corrective and preventive actions are implemented to strengthen controls and improve performance.",
        itemsIntro: "In addition, the Group is subject to external audits and inspections by independent and accredited bodies, where applicable, to validate:",
        items: [
            "Compliance with applicable laws and regulations",
            "Effectiveness of HSE management systems",
            "Alignment with industry best practices",
        ],
    },
    {
        id: "continuous-improvement",
        title: "Continuous Improvement & Commitment",
        description: "Driving ongoing improvement in HSE performance through lessons learned, operational reviews, and strengthened risk controls.",
        text1: "MAHY Khoory Group is committed to continuous improvement in HSE performance. Lessons learned from audits, incident investigations, and operational reviews are used to enhance procedures, training programs, and risk controls.",
        text2: "By maintaining strong HSE governance and oversight, the Group ensures safe working environments, protects the environment, and supports sustainable and responsible operations across all sectors in which it operates.",
    },
];

async function HealthSafetyManagementDetailPage({ params }) {
    const { id } = await params;
    const currentData = data.find((item) => item.id === id);

    if (!currentData) {
        return (
            <main className="max-w-4xl mx-auto pt-22 pb-15 animate-fade-in">
                <h1 className="text-3xl font-bold mb-6">Content Not Found</h1>
                <p>The requested content could not be found. Please check the URL and try again.</p>
            </main>
        );
    }

    const image = HSE_IMAGES[id];

    // Build texts array: intro paragraph + itemsIntro label (if present)
    const texts = [
        currentData.text1,
        ...(currentData.itemsIntro ? [currentData.itemsIntro] : []),
    ];

    return (
        <main className="animate-fade-in">
            {/* ── Hero ── */}
            <SubPageHeading
            fullHeight
                title={currentData.title}
                description={currentData.description}
                image={image}
            />

            {/* ── Body ── */}
            <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
                <CompaniesSectors
                    title={currentData.title}
                    image={image}
                    texts={texts}
                    items={currentData.items ?? undefined}
                    text2={currentData.text2}
                    endText={undefined}
                />
            </section>
        </main>
    );
}

export default HealthSafetyManagementDetailPage;