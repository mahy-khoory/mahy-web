import CompaniesSectors from "@/components/CompaniesSectors"

function EnergySustainabilityConsulting() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Energy & Sustainability Consulting"}
                    texts={[
                        "This sector provides sustainability advisory and green-building consultancy services.",
                        "The Sustainability, Energy & Green Building Consultancy sector supports environmentally responsible building design and operation. Services include green-building certification, energy audits, system commissioning, and performance optimization.",
                        "The sector helps clients achieve international sustainability standards while delivering measurable energy and water savings."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Creative Solutions Green Building Consultancy"
                    ]}
                />
            </section>
        </main>
    )
}

export default EnergySustainabilityConsulting