import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid"
import SubPageHeading from "@/components/UI/SubPageHeading"


function HoldingOverviewPage() {
    return (
        <main>
            <SubPageHeading
                title={"Holding Company Overview"}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772801806/holding-overview_mnmekm.jpg"}
            />
            <CompanyTextGrid />
            <section className="space-y-5 text-gray-600 max-w-7xl mx-auto px-5 pb-10 md:pb-20">
                <p>Over the decades, the Group has consistently expanded its capabilities by investing in modern technologies, strengthening operational expertise, and building long-term partnerships across multiple industries. This strategic approach has enabled M.A.H.Y Khoory Group to adapt to evolving market demands while maintaining a strong foundation built on reliability, technical excellence, and responsible business practices.</p>
                <p>Today, the Group continues to focus on sustainable growth and innovation, supporting industries that contribute to economic development and environmental responsibility. Through continuous improvement, operational efficiency, and a commitment to quality, M.A.H.Y Khoory Group remains dedicated to creating long-term value for its partners, customers, and the communities it serves.</p>
            </section>
        </main>
    )
}

export default HoldingOverviewPage