import ScrollRevealImage from "@/components/Products/PlasticJerryCans"
import SubPageHeading from "@/components/UI/SubPageHeading"

function PlasticJerryCansPage() {
    return (
        <main>
            <SubPageHeading
                title={"Plastic Jerry Cans"}
                description={"Our comprehensive range of plastic jerry cans is available in multiple capacities — 0.5L, 1L, 3L, 4L, 5L, 15L, 20L, and 25L — designed to meet the versatile packaging requirements of lubricant manufacturers, petroleum distributors, chemical suppliers, cleaning product producers, and food-processing industries across the UAE. "}
                description2={"Each jerry can is manufactured using premium-grade, high-density raw materials, ensuring durability, leak resistance, dimensional stability, and safe handling in harsh operational environments."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <ScrollRevealImage />
        </main>
    )
};

export default PlasticJerryCansPage