import CompaniesSectors from "@/components/CompaniesSectors"
import SubPageHeading from "@/components/UI/SubPageHeading"

function InternshipAndGraduatePrograms() {
    return (
        <main>
            <SubPageHeading
                title={"Internship & Graduate Program"}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773043332/representing_internship_and_graduate_develo.jpg_bo4uyd.jpg"}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773043332/skyline_at_early_evening_featuring_real.jpg_kdmx30.jpg"}
                    title={"Overview"}
                    texts={[
                        "At MAHY Khoory Group, we recognize the importance of developing future professionals by providing meaningful early-career opportunities. Our Internship and Graduate Program is designed to give students and recent graduates practical exposure to real business environments across our diversified group.",
                        "From time to time, different departments within the group may require interns or entry-level graduates based on operational needs and project requirements. Opportunities may arise within engineering, finance, supply chain, logistics, technical services, administration, IT, digital transformation, hospitality, and other business functions across our subsidiaries.",
                        "Our program aims to provide structured learning through hands-on experience, departmental collaboration, and supervised project involvement. Interns and graduates are given the opportunity to understand operational workflows, corporate governance standards, and professional expectations within a structured organizational framework.",
                        "Participants may work closely with experienced managers and team leaders, gaining insight into real-world business challenges and contributing to ongoing projects. This exposure helps bridge the gap between academic knowledge and practical application.",
                        "Internship placements and graduate opportunities are announced based on availability and business requirements. Interested candidates are encouraged to submit their CV through the Submit Your CV section or follow our official communication channels for updates.",
                        "At MAHY Khoory Group, we believe that investing in young talent supports both individual career growth and long-term organizational development. By nurturing early-career professionals, we contribute to building a skilled and capable workforce for the future."
                    ]}
                />
            </section>
        </main>
    )
}

export default InternshipAndGraduatePrograms