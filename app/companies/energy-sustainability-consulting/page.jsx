import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function EnergySustainabilityConsulting() {
    const companies = getCompaniesBySector("energy-sustainability-consulting");

    return (
        <main>

             <SubPageHeading
        title="Sustainability Is Our Power"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886426/investors-examine-solar-panel-surface-using-tablet-discussing-design-efficiency.jpg_plo6qi.jpg"
        align="center"
        fullHeight
      />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886475/photovoltaics-factory-industrial-production-managers-looking-schematics.jpg_pric2u.jpg"}
                    title={"Energy & Sustainability Consulting"}
                    texts={[
                        "This sector provides sustainability advisory and green-building consultancy services.",
                        "The Sustainability, Energy & Green Building Consultancy sector supports environmentally responsible building design and operation. Services include green-building certification, energy audits, system commissioning, and performance optimization.",
                        "The sector helps clients achieve international sustainability standards while delivering measurable energy and water savings."
                    ]}
                />
            </section>
            <GroupCompaniesGrid
                companies={companies}
                title="Companies in This Sector"
                description="Businesses operating within this business sector of the Group."
            />
        </main>
    )
}

export default EnergySustainabilityConsulting
