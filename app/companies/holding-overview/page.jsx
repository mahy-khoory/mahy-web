import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid"
import SubPageHeading from "@/components/UI/SubPageHeading"


function HoldingOverviewPage() {
    return (
        <main>
            <SubPageHeading
                title={"Holding Company Overview"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyTextGrid />
        </main>
    )
}

export default HoldingOverviewPage