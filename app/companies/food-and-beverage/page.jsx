import CompaniesSectors from "@/components/CompaniesSectors"

function FoodBeveragePage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Food & Beverage"}
                    texts={[
                        "This sector operates casual dining and food-service concepts.",
                        "The Food & Beverage sector focuses on delivering quality dining experiences through professionally managed restaurant and café operations, serving both hospitality guests and the wider community."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Market Restaurant & Café"
                    ]}
                />
            </section>
        </main>
    )
}

export default FoodBeveragePage