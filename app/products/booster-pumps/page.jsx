import BoosterPumpRevealSection from "@/components/Products/BoosterPumpRevealSection"
import BoosterPumpSlideRevealSection from "@/components/Products/BoosterPumpSlideRevealSection"
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline"
import SubPageHeading from "@/components/UI/SubPageHeading"

function BoosterPumpsPage() {

    const timelineItems = [
        { title: "High-Efficiency Hydraulic Design", text: "Delivers superior pressure boosting with optimized flow characteristics, ensuring reduced energy consumption and high operational performance.", image: "/gallery/gallery-1.jpg" },
        { title: "Advanced Control Systems", text: "Options include:", options: ["Pressure switch controllers for basic regulation", "Variable Frequency Drive (VFD) systems for intelligent speed control, reduced power usage, and extended pump life", "Smart control panels with LCD displays, alarms, BMS connectivity, and system diagnostics"], image: "/gallery/gallery-3.jpg" },
        { title: "Flexible Pump Configurations", text: "Available in single, twin, and multi-pump (triplex/quadra) setups to meet varying flow rates and redundancy requirements.", image: "/gallery/gallery-2.jpg" },
        { title: "Durable & Corrosion-Resistant Construction", text: "Built with stainless steel impellers, diffusers, and wetted components, ensuring long service life in harsh water conditions.", image: "/gallery/gallery-4.jpg" },
        { title: "Low Noise Performance", text: "Engineered with vibration-dampened bases and balanced motors, making them ideal for indoor, residential, and noise-sensitive installations.", image: "/gallery/gallery-4.jpg" },
        { title: "Dry-Run & Overload Protection", text: "Integrated safety mechanisms protect the motor and pump assembly, ensuring reliable long-term operation.", image: "/gallery/gallery-4.jpg" }
    ];
    const tabItems = [
        { title: "High-Rise & Multi-Story Buildings", text: "Ensures consistent pressure on all floors for domestic water distribution." },
        { title: "Commercial Facilities", text: "Ideal for malls, hotels, schools, hospitals, labor camps, and office complexes." },
        { title: "Residential Properties", text: "Reliable solutions for villas, townhouses, and apartment clusters." },
        { title: "Irrigation & Landscaping", text: "Provides stable pressure for drip systems, sprinklers, and turf irrigation networks." },
        { title: "Water Treatment & Filtration Systems", text: "Suitable for RO plants, ultrafiltration units, and industrial filtration processes requiring precise pressure control." },
        { title: "Industrial Utilities", text: "Supports boiler feed, cooling water circulation, washing stations, and other pressure-dependent processes." }
    ]

    return (
        <main>
            <SubPageHeading
                title={"Booster Pumps"}
                image={"/gallery/gallery-3.jpg"}
            />
            <WasteCollectionTimeline
                heading="Overview"
                text="Booster pumps are engineered to elevate water pressure and maintain a consistent, reliable flow across residential, commercial, and industrial systems. Designed for continuous and stable performance, these pumps ensure uninterrupted water delivery even under fluctuating demand conditions. With advanced control technologies and robust construction, booster systems deliver long-term durability, energy efficiency, and user-friendly operation."
                items={timelineItems}
                bottomSection={false}
            />
            <WasteCollectionMenu
                heading="Applications"
                tabs={tabItems.map((item) => item.title)}
                items={tabItems.map((item) => item.text)}
            />
            {/* <BoosterPumpRevealSection />
            <BoosterPumpSlideRevealSection /> */}
        </main>
    )
};

export default BoosterPumpsPage