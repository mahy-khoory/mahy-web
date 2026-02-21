import CompaniesSectors from "@/components/CompaniesSectors"

function CompressedWoodBlocksPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Compressed Wood Blocks"}
                    texts={[
                        "This sector produces engineered wood products manufactured entirely from recycled wood waste.",
                        "The Engineered Wood & Recycled Materials Manufacturing sector focuses on converting reclaimed wood into high-performance engineered products, primarily compressed eco-wood blocks.",
                        "These products serve as sustainable alternatives to virgin timber in construction, packaging, industrial support, and furniture applications. Manufacturing processes emphasize consistency, durability, and scalability, enabling large-volume supply for regional markets.",
                        "The sector supports waste reduction, resource conservation, and sustainable manufacturing while delivering cost-effective and reliable industrial materials."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Union Wood Works"
                    ]}
                />
            </section>
        </main>
    )
}

export default CompressedWoodBlocksPage