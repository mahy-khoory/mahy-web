import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import VisionBenchmarkSection from "@/components/UI/about-us/BenchMarks"
import SubPageHeading from "@/components/UI/SubPageHeading"

function LeadershipAndVisionPage() {
    const leadershipVision = [
        {
            title: "Long-Term Strategic Vision",
            text: "At MAHY Khoory Group, our leadership is guided by a long-term strategic vision focused on sustainable growth, operational excellence, and continuous transformation across all business sectors. As a diversified holding group comprising 25 companies, our leadership structure ensures alignment between corporate governance, financial discipline, operational performance, and innovation."
        },
        {
            title: "Structured Governance & Accountability",
            text: "Our executive management and senior leadership teams work collaboratively to define clear strategic objectives for each subsidiary while maintaining strong group-wide standards and accountability. Decision-making is driven by data, structured processes, and measurable performance indicators to ensure consistency and transparency across all business units."
        },
        {
            title: "Digital Transformation & Integration",
            text: "A key pillar of our vision is digital transformation and process integration. We continuously invest in advanced systems, structured governance frameworks, and performance management methodologies to enhance efficiency, strengthen internal controls, and support scalable growth across manufacturing, trading, logistics, engineering, hospitality, waste management, and other sectors within the group."
        },
        {
            title: "Leadership Philosophy & Values",
            text: "Our leadership philosophy emphasizes responsibility, integrity, and long-term value creation. We encourage forward-thinking approaches, calculated risk management, and continuous improvement to ensure that the group remains competitive and resilient in an evolving business environment."
        },
        {
            title: "Future-Ready Commitment",
            text: "Through strong leadership and a unified vision, MAHY Khoory Group remains committed to building a future-ready organization that delivers excellence, stability, and sustainable impact across all industries in which we operate."
        }
    ];
    return (
        <main>
            <SubPageHeading
                title={"Leadership & Vision"}
                image={"/gallery/gallery-2.jpg"}
            />
            <VisionBenchmarkSection
                heading="Overview"
                items={leadershipVision}
            />
        </main>
    )
}

export default LeadershipAndVisionPage