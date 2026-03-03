import CompaniesSectors from "@/components/CompaniesSectors"
import SubPageHeading from "@/components/UI/SubPageHeading"

function EmployeeBenefitsPage() {
    return (
        <main>
            <SubPageHeading
                title={"Employee Benefits"}
                image={"/gallery/gallery-2.jpg"}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Overview"}
                    texts={[
                        "At MAHY Khoory Group, we provide a structured and fair benefits framework designed to support employee well-being, stability, and professional growth. Compensation and benefits are aligned with market standards and fully compliant with UAE Labour Law and applicable regulations.",
                        "Employees receive statutory entitlements including salary, annual leave, public holidays, medical insurance, and end-of-service benefits as per UAE law. Depending on the role and subsidiary, additional allowances or performance-based incentives may apply in accordance with internal policies.",
                        "Beyond financial benefits, we offer a professional and stable work environment with clear structures, defined responsibilities, and opportunities for internal mobility and development. Our objective is to maintain fair, compliant, and competitive employment conditions that support long-term partnership and mutual growth."
                    ]}
                />
            </section>
        </main>
    )
}

export default EmployeeBenefitsPage