import SolarPanelImagesGrid from '@/components/Services/SolarPanel/SolarPanelImagesGrid'
import WasteCollectionItems from '@/components/Services/WasteCollection/WasteCollectionItems';
import WasteCollectionScrollMovingCards from '@/components/Services/WasteCollection/WasteCollectionScrollMovingCards';
import SubPageHeading from '@/components/UI/SubPageHeading'

function ChilldWaterPumpsPage() {
    const overviewItems = [
        { title: "Optimized for HVAC & District Cooling", text: "Chilled water pumps are purpose-built for HVAC circulation, district cooling systems, and centralized air-conditioning networks, ensuring highly efficient cooling water movement and stable thermal performance." },
        { title: "Reliable Continuous-Duty Performance", text: "Designed for continuous-duty operation, these pumps maintain precise flow rates and consistent pressure to support heat exchangers, AHUs, FCUs, and large-scale cooling loops. Their robust construction, energy-efficient motors, and compatibility with modern control systems make them essential for high-performance HVAC infrastructure." }
    ];
    const features = [
        { title: "Heavy-Duty, Long-Life Construction", text: "Engineered with cast iron or ductile iron castings, stainless steel impellers, and high-grade bearings for long-term reliability under 24/7 operational conditions.", icon: "/waste/waste-1.svg" },
        { title: "High-Efficiency Motors (IE3 / IE4)", text: "Equipped with premium-efficiency motors that significantly reduce operating costs, enhance system performance, and comply with global energy standards.", icon: "/waste/waste-2.svg" },
        { title: "VFD (Variable Frequency Drive) Compatibility", text: "Designed for seamless integration with VFD control systems, enabling variable-speed operation, reduced energy consumption, lower system stress, and extended equipment lifespan.", icon: "/waste/waste-3.svg" },
        { title: "Low-Noise, Vibration-Optimized Hydraulics", text: "Hydraulically balanced impellers, vibration-dampened bases, and precision-manufactured components ensure exceptionally quiet operation—ideal for mechanical rooms and commercial environments.", icon: "/waste/waste-4.svg" },
        { title: "Multiple Configurations Available", text: "Options include:", options: ["Inline centrifugal pumps for compact pipe-aligned installations", "End-suction horizontal pumps for high-flow and high-head requirements", "Split-case pumps (optional) for large-capacity district cooling applications", "Close-coupled or long-coupled designs for system flexibility"], icon: "/waste/waste-1.svg" },
        { title: "Ease of Service & Maintenance", text: "Features such as back-pull-out design (for selected models), replaceable wear rings, and accessible components help minimize downtime and simplify servicing.", icon: "/waste/waste-2.svg" },
    ];
    const applications = [
        { title: "HVAC Chilled Water Networks", text: "Ensures efficient circulation between chillers, AHUs, FCUs, and cooling coils." },
        { title: "District Cooling Plants", text: "Ideal for primary, secondary, and tertiary pumping systems across large cooling networks." },
        { title: "Commercial Building Cooling Loops", text: "Used in malls, hotels, hospitals, residential towers, and office complexes requiring reliable cooling water distribution." },
        { title: "Central A/C Systems", text: "Supports centralized chilled-water air-conditioning systems in mixed-use developments." },
        { title: "Industrial Cooling Processes", text: "Suitable for industrial heat exchangers, machinery cooling loops, process chillers, and production facility cooling lines." }
    ];

    return (
        <main>
            <SubPageHeading
                title="Chilled Water Pumps"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822187/gallery-1_exhyck.jpg"
            />
            <div className='my-20'>
                <SolarPanelImagesGrid
                    heading='Overview'
                    items={overviewItems}
                    text1='Trusted'
                    text2="for Thermal Stability"
                />
            </div>
            <WasteCollectionItems
                heading={"Product-Oriented Key Features"}
                items={features}
            />
            <WasteCollectionScrollMovingCards
                heading="Applications"
                items={applications}
            />
        </main>
    )
}

export default ChilldWaterPumpsPage