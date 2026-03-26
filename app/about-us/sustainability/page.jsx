import CorporateCulture from "@/components/UI/about-us/sustainability/CorporateCulture"
import QualityPolicies from "@/components/UI/about-us/sustainability/QualityPolicies"
import RandD from "@/components/UI/about-us/sustainability/Randd"
import SustainabilitySection from "@/components/UI/about-us/sustainability/Sustainability"
import Image from "next/image"

function SustainabilityPage() {
    const items = [
        {
            title: "Responsible Operations",
            text: "Sustainability at MAHY Khoory Group is closely linked to operational discipline and governance. Environmental considerations are incorporated into operational planning, investment decisions, and continuous improvement initiatives across all businesses.",
            text2: "We apply structured management systems, monitoring processes, and audits to ensure responsible operations, environmental protection, and ongoing performance improvement.",
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Health, Safety & People",
            text: "The Group places strong emphasis on the health, safety, and well-being of its employees, contractors, and stakeholders. Safe working environments, risk management, and continuous training are essential components of our sustainability framework.",
            text2: "By investing in people, skills development, and safety awareness, we aim to create stable, productive, and responsible workplaces across all operations.",
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "Community Engagement & Social Responsibility",
            text: "MAHY Khoory Group is committed to contributing positively to the communities in which it operates. Our businesses support local employment, skills development, and economic activity across multiple emirates.",
            text2: "Where appropriate, the Group engages in community-focused initiatives that reflect local needs and align with our values, contributing to social well-being and long-term community development.",
            image: "/gallery/gallery-6.jpg"
        },
        {
            title: "Ethical Business & Governance",
            text: "Strong corporate governance and ethical conduct underpin our sustainability and CSR commitments. The Group operates in accordance with clear policies, codes of conduct, and compliance frameworks that promote transparency, accountability, and responsible decision-making.",
            text2: "By maintaining high ethical standards and disciplined governance, we aim to build trust with customers, partners, employees, and stakeholders.",
            image: "/gallery/gallery-8.jpeg"
        },
        {
            title: "Continuous Improvement & Long-Term Commitment",
            text: "Sustainability and CSR at MAHY Khoory Group are ongoing commitments. We continuously review our practices, monitor performance, and enhance systems to respond to evolving regulatory requirements, industry standards, and stakeholder expectations.",
            text2: "Through responsible operations, environmental stewardship, and community engagement, the Group seeks to support sustainable growth and long-term value creation across all sectors in which it operates.",
            image: "/gallery/gallery-4.jpg"
        }
    ];

    return (
        <main className='lg:pb-20'>
            <div className="w-full h-screen relative">
                <Image src={"/gallery/gallery-1.jpg"} alt="Sustainability" fill style={{ objectFit: "cover" }} />
                <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-linear-to-t from-white to-transparent" />
                <div className="absolute inset-0 text-center z-10 pt-45 text-3xl text-white">
                    <p>To lead in connectivity and intelligence computing.</p>
                    <p className="mt-5">Enabling communation</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl gap-8 lg:gap-15 mx-auto relative bottom-40 lg:bottom-20 px-4 lg:px-0 h-150 lg:h-fit">
                <div className="relative h-70 lg:h-90 rounded-4xl overflow-hidden">
                    <Image src={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp"} alt="Office"
                        fill style={{ objectFit: "cover" }} />
                </div>
                <div className="flex flex-col justify-center">
                    {/* <p className="font-semibold text-xl">Mahy Khoory</p> */}
                    <p className="font-semibold text-xl">Sustainability & Corporate Social Responsibility</p>
                    <p className="text-sm mt-2">At MAHY Khoory Group, sustainability and corporate social responsibility are integral to how we conduct our business and plan for the future. As a diversified group operating across manufacturing, packaging, recycling, waste management, logistics, energy, automotive, hospitality, and service sectors, we recognize our responsibility to operate in a manner that protects the environment, supports communities, and creates long-term value for stakeholders.</p>
                    <p className="text-sm mt-2">Our approach to sustainability is practical, embedded in operations, and aligned with responsible growth, regulatory compliance, and ethical business practices.</p>
                    {/* <h2 className="mt-5 font-semibold">Our Mission</h2>
                    <p className="text-sm mt-2">To create an intelligent future with digital innovation, excellent growth platform for employees, and greater value for customers, shareholders, and stakeholders across the globe.</p> */}
                </div>
            </div>
            <QualityPolicies
                heading="Environmental Responsibility"
                text="Environmental stewardship is a core focus across the Group’s operations, particularly within manufacturing, recycling, waste management, logistics, and energy-related activities. We actively work to minimize environmental impact, improve resource efficiency, and support circular economy principles."
                items={[
                    { title: "Recycling & Resource Recovery", text: "Recycling and resource recovery of wood, metal, cartons, and OCC" },
                    { title: "Manufacturing Integration", text: "Integration of recovered materials into manufacturing processes" },
                    { title: "Waste Management", text: "Responsible waste collection, handling, and disposal" },
                    { title: "Energy Efficiency & Clean Energy", text: "Energy efficiency improvements and clean energy solutions" },
                    { title: "Regulatory Compliance", text: "Compliance with environmental laws, permits, and regulatory standards" }
                ]}
                endText="Through these efforts, the Group contributes to reducing waste, conserving resources, and supporting sustainable industrial practices."
            />
            <SustainabilitySection
                cardHeight="lg:h-100"
                items={items}
            />
            <RandD />
            <CorporateCulture />
        </main>
    )
}

export default SustainabilityPage