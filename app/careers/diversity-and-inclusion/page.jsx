import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import SubPageHeading from "@/components/UI/SubPageHeading"

function DiversityAndInclusionPage() {
    const Images = [
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773043707/sunset_featuring_recognizable.jpg_x6clvj.jpg",
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773043706/Dubai_s-illumina.jpg_eonxvc.jpg"
    ]
    return (
        <main>
            <SubPageHeading
                title={"Diversity & Inclusion"}
                image={"/gallery/gallery-2.jpg"}
            />
            <TrustedAdvisorSection
                heading="Overview"
                texts={[
                    "At MAHY Khoory Group, diversity is one of our core strengths. As a multi-sector organization operating across various industries, our workforce represents a wide range of nationalities, professional backgrounds, and cultural perspectives.",
                    "We are proud to have team members from numerous countries working together across our 25 companies. This multicultural environment enriches our organization with diverse ideas, global experience, and varied technical expertise. Different cultures, languages, and perspectives come together under one unified objective delivering operational excellence and sustainable growth.",
                    "Our approach to inclusion is rooted in respect, professionalism, and equal opportunity. Employment decisions are based on merit, qualifications, performance, and alignment with organizational values. We maintain a workplace where individuals are valued for their contributions and are encouraged to collaborate across departments, roles, and business units.",
                    "By fostering an inclusive environment, we strengthen innovation, improve decision-making, and enhance teamwork across the group. Diversity within MAHY Khoory Group is not only a reflection of our global outlook it is a key driver of our continued success."
                ]}
                images={Images}
            />
        </main>
    )
}

export default DiversityAndInclusionPage