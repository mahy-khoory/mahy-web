import CompaniesSectors from "@/components/CompaniesSectors"

function TransportationLogisticsPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Transportation & Logistics"}
                    texts={[
                        "This sector provides logistics and transportation services supporting group - wide operations.",
                        "The Transportation & Logistics sector operates a dedicated fleet supporting the movement of goods, equipment, and personnel across the Group’s businesses. It plays a critical role in manufacturing supply chains, project execution, and service delivery.",
                        "Efficient routing, fleet management, and operational control ensure reliability and cost efficiency."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Greenland Transport"
                    ]}
                />
            </section>
        </main>
    )
}

export default TransportationLogisticsPage