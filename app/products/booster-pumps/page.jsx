import BoosterPumpRevealSection from "@/components/Products/BoosterPumpRevealSection"
import SubPageHeading from "@/components/UI/SubPageHeading"

function BoosterPumpsPage() {
    return (
        <main>
            <SubPageHeading
                title={"Booster Pumps"}
                description={"Booster pumps are engineered to elevate water pressure and maintain a consistent, reliable flow across residential, commercial, and industrial systems. Designed for continuous and stable performance, these pumps ensure uninterrupted water delivery even under fluctuating demand conditions."}
                description2={"With advanced control technologies and robust construction, booster systems deliver long-term durability, energy efficiency, and user-friendly operation."}
                image={"/gallery/gallery-3.jpg"}
            />
            <BoosterPumpRevealSection />
        </main>
    )
};

export default BoosterPumpsPage