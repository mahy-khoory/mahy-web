import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function EngineeringTechnicalServices() {
    const companies = getCompaniesBySector("engineering-technical-services");

    return (
        <main>
             <SubPageHeading
                    fullHeight
                    title="Engineering & Technical Services"
                    // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772868318/Code_of_Conduct.jpg_qjqqzs.jpg"
                    image={
                      "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776973961/worker-without-helmet-factory-with-welding-clip-welding-sparks-fly-from-iron-factory-man-works.jpg_biti5g.jpg"
                    }
                    align="center"
                  />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776974115/architects-wearing-helmets-plans.jpg_d62rdl.jpg"}
                    image2={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776973968/cutting-metal-with-plasma-equipment.jpg_vmayse.jpg"}
                    title={"Engineering & Technical Services"}
                    texts={[
                        "This sector delivers specialized engineering expertise, system integration, and turnkey execution of complex pumping and fluid-handling projects.",
                        "The Engineering, Project Delivery & Technical Services sector operates as the MAHY Khoory Group's technical execution arm. It focuses on the design, assembly, installation, commissioning, and lifecycle support of pumping and fluid-management systems for critical infrastructure and industrial applications.",
                        "Projects are executed across residential, commercial, municipal, industrial, and utility sectors, where system reliability, performance, and regulatory compliance are essential. Capabilities span hydraulic design, equipment selection, fabrication, system integration, and site execution.",
                        "Through disciplined engineering processes and close coordination with the Group's trading and service entities, this sector delivers customized, high-performance solutions that meet demanding technical and operational requirements."
                    ]}
                />
            </section>
            <GroupCompaniesGrid
                companies={companies}
                title="Companies in This Sector"
                description="Businesses operating within this business sector of the Group."
            />
            {/* added component */}
            {/* <SolarPanelQuoteGrid /> */}
        </main>
    )
}

export default EngineeringTechnicalServices
