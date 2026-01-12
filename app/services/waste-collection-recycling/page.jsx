import WasteCollectionServices from "@/components/Services/WasteCollectionServices"
import SubPageHeading from "@/components/UI/SubPageHeading"

function WasteCollectionServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Waste Collection & Recycling Services"}
                description={"Efficient and responsible waste collection solutions designed to meet modern environmental standards. We ensure safe recycling processes that support sustainability and a cleaner future."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <WasteCollectionServices />
        </main>
    )
}

export default WasteCollectionServicesPage