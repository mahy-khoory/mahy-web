import WasteCollectionScrollMovingCards from "@/components/Services/WasteCollection/WasteCollectionScrollMovingCards"
import SubPageHeading from "@/components/UI/SubPageHeading"

function CareerProgressionPage() {
    const items = [
        { title: "Long-Term Growth", text: "At MAHY Khoory Group, career progression is a proven reality. Many of our employees have built long-term careers with us, with some contributing for more than 20 or even 30 years. This reflects the stability and professional environment we are committed to maintaining." },
        { title: "Internal Development", text: "We believe in developing talent from within. Employees who demonstrate dedication and capability are given opportunities to expand responsibilities and move into higher roles across departments and subsidiaries." },
        { title: "Merit-Based Advancement", text: "Progression within the group is based on performance, discipline, and measurable contribution. Clear structures and defined evaluations ensure that promotions are aligned with merit and demonstrated results." },
        { title: "Cross-Sector Opportunities", text: "As a diversified organization, we offer both vertical and lateral mobility. Employees may transition across different sectors within the group, broadening their expertise while building sustainable, long-term careers." }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Career Progression"}
                image={"/gallery/gallery-2.jpg"}
            />
            <WasteCollectionScrollMovingCards
                heading="Overview"
                items={items}
            />
        </main>
    )
}

export default CareerProgressionPage