import CompaniesSectors from "@/components/CompaniesSectors"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"

function EngineeringTechnicalServices() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-2.jpg"}
                    title={"Engineering & Technical Services"}
                    texts={[
                        "This sector delivers specialized engineering expertise, system integration, and turnkey execution of complex pumping and fluid-handling projects.",
                        "The Engineering, Project Delivery & Technical Services sector operates as the MAHY Khoory Group's technical execution arm. It focuses on the design, assembly, installation, commissioning, and lifecycle support of pumping and fluid-management systems for critical infrastructure and industrial applications.",
                        "Projects are executed across residential, commercial, municipal, industrial, and utility sectors, where system reliability, performance, and regulatory compliance are essential. Capabilities span hydraulic design, equipment selection, fabrication, system integration, and site execution.",
                        "Through disciplined engineering processes and close coordination with the Group's trading and service entities, this sector delivers customized, high-performance solutions that meet demanding technical and operational requirements."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Al Khoory Engineering"
                    ]}
                />
            </section>
            {/* added component */}
            {/* <SolarPanelQuoteGrid /> */}  
        </main>
    )
}

export default EngineeringTechnicalServices