"use client"

import { ArrowRight } from "lucide-react";
import { useState } from "react";

function CorporateGovernance() {
    const items = [
        {
            heading: "Governance Framework",
            text1: "The Group operates under a structured governance framework that defines clear roles, responsibilities, and decision-making authority at both Group and operating company levels. Strategic direction, risk oversight, and policy-setting are guided at the Group level, while day-to-day operations are managed by experienced leadership teams within each business.",
            text2: "This structure ensures alignment with the Group's strategic objectives while allowing flexibility to address sector-specific and operational requirements."
        },
        {
            heading: "Leadership Oversight & Accountability",
            text1: "Corporate governance at MAHY Khoory Group emphasizes accountability at every level of the organization. Leadership and management teams are responsible for executing strategy in accordance with approved policies, ethical standards, and regulatory requirements.",
            text2: "Performance is monitored through defined reporting, review, and control mechanisms, ensuring that risks are identified, managed, and addressed in a timely manner."
        },
        {
            heading: "Risk Management & Internal Controls",
            text1: "The Group adopts a proactive approach to risk management, supported by internal control systems designed to safeguard assets, ensure financial integrity, and support informed decision-making.",
            text2: "Risks related to operations, finance, compliance, health and safety, and the environment are regularly assessed and managed through established processes, enabling the Group to operate with resilience and stability."
        },
        {
            heading: "Ethics, Compliance & Integrity",
            text1: "MAHY Khoory Group conducts its business in accordance with applicable laws, regulations, and ethical standards in all jurisdictions where it operates. Integrity, fairness, and professionalism are central to the Group’s culture and governance practices.",
            text2: "Policies and procedures are in place to promote ethical conduct, prevent conflicts of interest, and ensure compliance with legal and regulatory obligations across all businesses."
        },
        {
            heading: "Health, Safety & Environmental Responsibility",
            text1: "The Group places strong emphasis on health, safety, and environmental responsibility as integral components of corporate governance. Systems and practices are implemented to protect employees, partners, customers, and the communities in which the Group operates.",
            text2: "Environmental considerations, including waste management, recycling, and resource efficiency, are embedded within operational and governance processes."
        },
        {
            heading: "Transparency & Stakeholder Engagement",
            text1: "MAHY Khoory Group is committed to open and transparent communication with its stakeholders, including employees, customers, partners, regulators, and financial institutions.",
            text2: "Clear reporting, timely disclosure, and constructive engagement support trust, confidence, and long-term relationships with all stakeholders."
        },
        {
            heading: "Continuous Improvement",
            text1: "Corporate governance at MAHY Khoory Group is subject to ongoing review and enhancement. The Group continuously evaluates its governance practices to ensure alignment with evolving regulatory requirements, industry standards, and best practices.",
            text2: "Through continuous improvement, the Group aims to strengthen governance effectiveness while supporting sustainable growth and long-term value creation."
        },
    ];

    return (
        <section className="bg-gray-50 py-7 md:py-10">
            <div className="max-w-7xl mx-auto px-5 space-y-6">
                {items.map((item, i) => (
                    <Card key={i} item={item} />
                ))}
            </div>
        </section>
    )
};

const Card = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-2xl shadow-sm py-1">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center gap-8 w-full py-5 px-10">
                <p className="text-sm md:text-lg text-start">{item.heading}</p>
                <div className={`border border-gray-500 rounded-full p-3 ${isOpen && "rotate-90"} transition-transform duration-300`}>
                    <ArrowRight size={20} />
                </div>
            </button>
            {isOpen && (
                <div className="border-t border-gray-300 pt-8 pb-7 px-10">
                    <h2 className="text-gray-700">{item.text1}</h2>
                    <p className="mt-2 md:mt-4 text-gray-600">{item.text2}</p>
                </div>
            )}
        </div>
    )
}

export default CorporateGovernance