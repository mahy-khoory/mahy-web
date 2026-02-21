import CompaniesSectors from "@/components/CompaniesSectors"

function SolarRenewableEnergyPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Solar & Renewable Energy"}
                    texts={[
                        "This sector delivers renewable energy engineering and EPC solutions focused on clean energy deployment.",
                        "The Renewable Energy & Sustainability Engineering sector provides end - to - end EPC services for solar photovoltaic and renewable energy systems. It supports commercial and industrial clients in reducing energy costs, improving efficiency, and lowering carbon emissions.",
                        "Services cover feasibility, design, procurement, installation, commissioning, and ongoing operations and maintenance, enabling long-term system performance and regulatory compliance."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Pure Energy Construction LLC"
                    ]}
                />
            </section>
        </main>
    )
}

export default SolarRenewableEnergyPage