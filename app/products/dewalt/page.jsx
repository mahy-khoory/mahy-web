import DewaltStrategySection from "@/components/Services/DewaltStrategySection"
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline"
import SubPageHeading from "@/components/UI/SubPageHeading"

function Dewalt() {
    const timelineItems = [
        {
            title: "Professional-Grade Power Tools",
            text: "Premium-grade, professional power tools",
            image: "/gallery/gallery-1.jpg"
        },
        {
            title: "Certified Industrial Safety Footwear",
            text: "Certified safety shoes for industrial and construction use",
            image: "/gallery/gallery-2.jpg"
        },
        {
            title: "Built for Demanding Environments",
            text: "High durability for demanding work environments",
            image: "/gallery/gallery-3.jpg"
        },
        {
            title: "Engineered for Comfort & Protection",
            text: "Designed for performance, comfort, and protection",
            image: "/gallery/gallery-4.jpg"
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"DEWALT Power Tools & Safety Shoes"}
                description={""}
                description2={""}
                image={"/gallery/gallery-4.jpg"}
            />
            <WasteCollectionTimeline
                heading="Key Highlights"
                text="DEWALT Power Tools & Safety Shoes are built for maximum performance, durability, and workplace safety. Trusted by professionals worldwide, DEWALT products are engineered to withstand demanding job-site conditions while delivering consistent, high-quality results."
                text2="The power tools range offers precision, strength, and reliability for construction, maintenance, and industrial applications. Complementing this, DEWALT safety shoes provide certified protection, comfort, and durability, ensuring workers remain safe without compromising productivity."
                text3="DEWALT"
                text4="Power Tools & Safety Shoes"
                endHeading="Built for Reliable Performance"
                endText="DEWALT solutions ensure confidence, efficiency, and safety across every task."
                items={timelineItems}
            />
            <DewaltStrategySection />
        </main>
    )
};

export default Dewalt