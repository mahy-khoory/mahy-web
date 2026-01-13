import SparePartsTimeline from "@/components/Shop/SparePartsTimeline"
import SubPageHeading from "@/components/UI/SubPageHeading"

function SparePartsPage() {
    return (
        <main>
            <SubPageHeading
                title={"Spare Parts"}
                description={"High-quality spare parts designed to ensure reliability, performance, and long service life. Our extensive inventory minimizes downtime and keeps your systems running at peak efficiency."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <SparePartsTimeline />
        </main>
    )
}

export default SparePartsPage