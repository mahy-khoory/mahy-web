import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import WhyUs from "@/components/UI/home/WhyUs";

function SolidWasteManagementDivision() {
    const tabItems = [
        {
            title: "Wood Waste Processing",
            text: "SWMD processes approximately 300 tons per day of wood waste, converting it into biomass fuel for waste-to-energy applications. Based on its strong market presence and proven capability in handling large-scale waste streams with efficiency, reliability, and operational commitment, SWMD has also been entrusted by Dubai Municipality to manage green waste at one of their Landfills. Under this assignment, SWMD processes approximately 300 tons per day of  green waste and supplies the processed material to Dubai Municiplaity’s Partnered Waste-to-Energy plant.",
            endText: "In addition to supplying wood chips for inhouse plant energy requirements, SWMD also supplies processed wood chips to one of the Group’s manufacturing divisions for composite wood block production. This capability has established SWMD as a reliable commercial supplier of wood chips in the market, serving diverse industrial users with consistent quality and dependable supply."
        },
        {
            title: "Solid Waste Processing & Resource Recovery",
            text: "The division processes Pulper Reject, recovering pulp and converting non recoverable waste into RDF using advanced separation and granulation systems. SWMD also supports external industrial clients such as UPIC, positioning the division as a regional pioneer in pulper reject processing and recovery solutions.",
        },
        {
            title: "Integrated Industrial Operations",
            text: "SWMD operates one of the UAE’s few integrated in-house industrial wastes processing platforms, converting 100% of internal process waste into reusable and revenue-generating resources while supporting municipal sustainability programs and external clients.",
        }
    ];

    const applications = {
        data: [
            {
                title: "Sustainability Commitment",
                content:
                    <ApplicationElement
                        items={[
                            "By diverting approximately 300 tons per day of wood waste from landfill, SWMD has made a significant contribution toward supporting Dubai Municipality’s vision of zero wood waste to landfill. The division provides sustainable and compliant solutions to wood waste generators across the UAE, enabling them to reduce disposal costs while adopting responsible waste management practices.",
                            "SWMD actively promotes source segregation and material awareness, helping generators distinguish between reusable wood suitable for recycling and non-reusable wood suitable for energy recovery. This approach delivers tangible commercial and environmental benefits—reusable wood achieves higher market value, while non-recyclable material benefits from reduced disposal volumes and lower handling costs.",
                        ]}
                    />
            },
            {
                title: "Strategic Partnerships",
                content:
                    <ApplicationElement
                        items={[
                            "SWMD works closely with Dubai Municipality and relevant regulatory authorities to ensure alignment with evolving waste management policies, sustainability targets, and environmental compliance requirements. The division actively supports pilot initiatives focused on waste reduction, recycling optimization, and waste-to-energy programs.",
                        ]}
                    />
            },
            {
                title: "Infrastructure, Operations & Availability",
                content:
                    <ApplicationElement
                        items={[
                            "SWMD operates from strategically located facilities across Dubai, including operational hubs in Al Quoz and key industrial zones, enabling efficient logistics, rapid response, and reliable service delivery.",
                            "The division operates on a 24/7 basis, offering flexible receiving and processing windows that allow waste transporters and generators to optimize fleet utilization, minimize waiting time, and improve overall logistics efficiency."
                        ]}
                    />
            }
        ]
    };

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Solid Waste Management Division (SWMD)"
                texts={[
                    "The Solid Waste Management Division (SWMD) of the MAHY Khoory Group delivers integrated, sustainable industrial waste management solutions across the UAE. Through advanced processing systems, disciplined operations, and full regulatory compliance, SWMD converts waste into valuable resources—supporting circular economy objectives, reducing landfill dependency, and generating measurable environmental and commercial value.",
                    "Originally established to eliminate landfill disposal and permit dependency for in-house waste, SWMD has achieved 100% internal waste recovery and today operates as a self-sustaining, revenue-generating division, serving internal operations as well as external industrial and municipal clients."
                ]}
            />
            <WasteCollectionMenu
                heading="Core Operations"
                tabs={tabItems.map((item) => item.title)}
                items={tabItems.map((item) => featuresElement({ item }))}
            />
            <WhyUs
                items={applications}
                reverse={true}
            />
            <TrustedAdvisorSection
                heading="Our Role"
                texts={[
                    "SWMD is a trusted partner in sustainable industrial waste management, delivering integrated solutions across wood waste recovery, biomass fuel preparation, pulper reject recovery, RDF production, and industrial solid waste processing.",
                    "Through innovation, skilled manpower, and environmentally responsible practices, SWMD plays a vital role in enhancing resource efficiency and supporting the UAE’s long-term sustainability vision."
                ]}
            />
        </main>
    )
}

export default SolidWasteManagementDivision

const featuresElement = ({ item }) => (
    <div className="text-gray-700 text-sm space-y-4">
        <p>{item.text}</p>
        <p className="">{item.endText}</p>
    </div>
);

const ApplicationElement = ({ items }) => (
    <div className="text-gray-700 space-y-2">
        {items.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
);