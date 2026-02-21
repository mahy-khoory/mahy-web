import CompaniesSectors from "@/components/CompaniesSectors"

function ContainerboardManufacturingPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Containerboard Manufacturing"}
                    texts={[
                        "This sector anchors the MAHY Khoory Group’s circular manufacturing ecosystem through large-scale paper recycling and containerboard production.",
                        "The Paper Recycling & Containerboard Manufacturing sector specializes in converting recovered paper into high-quality recycled containerboard products, including linerboard and fluting medium used by the packaging industry.",
                        "Operating advanced paper mills with significant daily production capacity, the sector supports packaging manufacturers across the UAE and regional markets. Integrated recycling processes enable waste diversion, resource efficiency, and reduced dependence on virgin raw materials.",
                        "This sector plays a strategic role in industrial self-sufficiency, sustainability, and circular economy initiatives, supplying reliable raw materials for downstream packaging operations."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Union Paper Mills",
                        "Al Dhafra Paper Manufacturing"
                    ]}
                />
            </section>
        </main>
    )
}

export default ContainerboardManufacturingPage