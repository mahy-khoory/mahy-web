import WasteCollectionItems from "@/components/Services/WasteCollection/WasteCollectionItems"
import WasteCollectionScrollMovingCards from "@/components/Services/WasteCollection/WasteCollectionScrollMovingCards"
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline"
import SubPageHeading from "@/components/UI/SubPageHeading"

function WasteCollectionServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Waste Collection & Recycling Services"}
                description={"Efficient and responsible waste collection solutions designed to meet modern environmental standards. We ensure safe recycling processes that support sustainability and a cleaner future."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <WasteCollectionTimeline />
            <WasteCollectionItems />
            <WasteCollectionScrollMovingCards />
        </main>
    )
}

export default WasteCollectionServicesPage