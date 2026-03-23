import CompaniesSectors from "@/components/CompaniesSectors"

function HospitalityPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773043120/Dubai-pearl-marina.jpg_jormq7.jpg"}
                    title={"Food & Beverage"}
                    texts={[
                        "This sector operates serviced accommodation along with casual dining and food-service concepts, delivering a complete hospitality experience.",
                        "The Hospitality & Food & Beverage sector provides high-quality serviced hotel apartments for business and leisure travellers, combining hotel services with residential comfort in strategic urban locations. Alongside accommodation, the sector offers professionally managed restaurant and café operations, delivering quality dining experiences to both residents and the wider community.",
                        "By integrating accommodation and dining under one sector, it enhances guest convenience, service consistency, and overall customer experience, while maintaining strong operational standards across both hospitality and food-service offerings."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Market Restaurant & Café",
                        "Pearl Marina Hotel Apartments"
                    ]}
                />
            </section>
        </main>
    )
}

export default HospitalityPage