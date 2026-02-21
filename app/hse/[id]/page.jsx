

async function HealthSafetyManagementDetailPage({ params }) {
    const data = [
        {
            id: "health-safety-management",
            title: "Health & Safety Management",
            text1: "The Group maintains structured Health and Safety Management Systems designed to identify hazards, assess risks, and implement effective control measures across all operational environments, including factories, warehouses, transport operations, project sites, and service locations.",
            text2: "Key elements of our health and safety approach include:",
            text3: "Senior management actively oversees health and safety performance, reinforcing a strong safety culture and zero tolerance for unsafe practices.",
            items: [
                "Compliance with applicable occupational health and safety laws and regulations",
                "Risk assessments and method statements tailored to specific operational activities",
                "Preventive measures to reduce incidents, injuries, and occupational hazards",
                "Regular safety training, toolbox talks, and awareness programs",
                "Clear roles, responsibilities, and accountability at all levels of the organization"
            ]
        },
        {
            id: "environmental-management",
            title: "Environmental Management",
            text1: "Environmental responsibility is a fundamental component of the Group’s operations, particularly across manufacturing, recycling, waste management, logistics, and energy-related activities.",
            text2: "The Group implements environmental management practices aimed at:",
            text3: "Environmental considerations are integrated into operational planning, investment decisions, and continuous improvement programs across all businesses.",
            items: [
                "Minimizing environmental impact from operations",
                "Promoting recycling, resource recovery, and responsible waste handling",
                "Improving energy efficiency and reducing environmental footprint",
                "Ensuring compliance with environmental laws, permits, and regulations",
                "Supporting circular economy and sustainability initiatives"
            ]
        },
        {
            id: "monitoring-compliance",
            title: "Monitoring, Audits & Compliance",
            text1: "Health, Safety, and Environmental performance is subject to continuous monitoring through inspections, performance tracking, and management reviews. Dedicated internal teams conduct regular HSE audits and assessments to verify compliance with internal standards and regulatory requirements.",
            text2: "In addition, the Group is subject to external audits and inspections by independent and accredited bodies, where applicable, to validate compliance and the effectiveness of HSE management systems.",
            text3: "Audit findings are reviewed by management, and corrective and preventive actions are implemented to strengthen controls and improve performance."
        },
        {
            id: "continuous-improvement",
            title: "Continuous Improvement & Commitment",
            text1: "MAHY Khoory Group is committed to continuous improvement in HSE performance. Lessons learned from audits, incident investigations, and operational reviews are used to enhance procedures, training programs, and risk controls.",
            text2: "By maintaining strong HSE governance and oversight, the Group ensures safe working environments, protects the environment, and supports sustainable and responsible operations across all sectors in which it operates."
        }
    ];

    const { id } = await params;

    const currentData = data.find(item => item.id === id);


    if (!currentData) {
        return (
            <main className='max-w-4xl mx-auto pt-22 pb-15 animate-fade-in'>
                <h1 className="text-3xl font-bold mb-6">Content Not Found</h1>
                <p>The requested content could not be found. Please check the URL and try again.</p>
            </main>
        )
    };

    return (
        <main className='max-w-4xl mx-auto pt-28 pb-15 animate-fade-in'>
            <h1 className="text-3xl font-bold mb-6">{currentData?.title}</h1>
            <p className="mb-4">{currentData?.text1}</p>
            <p className="mb-4">{currentData?.text2}</p>
            {currentData?.items && (
                <ul className="list-disc pl-5 mb-4">
                    {currentData.items.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            )}
            {currentData?.text3 && (
                <p className="mb-4">{currentData?.text3}</p>
            )}
        </main>
    )
}

export default HealthSafetyManagementDetailPage