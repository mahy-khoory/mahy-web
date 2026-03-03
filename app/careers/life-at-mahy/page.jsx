import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import SubPageHeading from "@/components/UI/SubPageHeading"


function LifeAtMahyPage() {
    return (
        <main>
            <SubPageHeading
                title={"Life at MAHY Khoory Group"}
                image={"/gallery/gallery-2.jpg"}
            />
            <TrustedAdvisorSection
                heading="Overview"
                texts={[
                    "Life at MAHY Khoory Group is built on stability, professionalism, and long-term relationships. Many of our employees choose to grow their careers with us for decades, reflecting the supportive and structured environment we strive to maintain. It is not uncommon to find team members who have been part of the organization for 20 or even 30 years a testament to the trust, continuity, and mutual respect within the group.",
                    "We foster a professional yet collaborative working atmosphere where individuals feel valued for their contributions. Employees work within clearly defined roles and structured systems, creating clarity, fairness, and accountability across departments. This structured approach provides both stability and confidence, allowing individuals to focus on performance and growth.",
                    "Our multicultural workforce brings together professionals from various nationalities and backgrounds, working together with shared objectives and mutual respect. This diversity strengthens teamwork and creates a dynamic yet harmonious work environment.",
                    "We believe that a positive workplace culture directly contributes to long-term employee satisfaction. Recognition of performance, internal growth opportunities, and transparent communication all play a role in maintaining a healthy and motivating environment. Employees who demonstrate commitment and dedication are given opportunities to expand their responsibilities and build meaningful careers within the group.",
                    "At MAHY Khoory Group, life is defined by professional growth, operational excellence, and long-term partnership. We are committed to maintaining an environment where employees feel secure, respected, and motivated to grow alongside the organization."
                ]}
            />
        </main>
    )
}

export default LifeAtMahyPage