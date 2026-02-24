import EngProcessSection from "@/components/Services/EngProcessSection";
import KitchenImageGrid from "@/components/Services/Kitchen/KitchenImageGrid"
import SubPageHeading from "@/components/UI/SubPageHeading"

function SubmersiblePumpsPage() {
    const features = [
        { heading: "High-Efficiency Sealed Motors", text: "Oil-filled or water-cooled motors designed for continuous-duty (S1) operation, providing superior heat dissipation and long-lasting performance even in deep installations." },
        { heading: "Corrosion- & Sand-Resistant Construction", text: "Available in stainless steel, cast iron, and composite materials, with wear-resistant impellers and diffusers ideal for sandy boreholes and abrasive water environments." },
        { heading: "Solids-Handling Capability", text: "Select models feature vortex or channel impellers capable of passing solids, making them suitable for drainage, sludge, and light wastewater applications." },
        { heading: "Long Service Life with Minimal Maintenance", text: "Equipped with double mechanical seals, thermal overload protection, and high-quality bearings to ensure extended operational life and reduced downtime." },
        { heading: "Wide Product Range", text: "Options include:", options: ["Borehole submersibles (4”, 6”, 8”, 10”)", "Drainage and dewatering pumps", "Sump and utility pumps", "Fountain and water feature pumps", "Agricultural and irrigation submersibles"] },
        { heading: "High Lift & High Flow Configurations", text: "Models available for deep-well high-head applications as well as high-volume drainage requirements." }
    ];
    const applications = [
        {
            heading: "Boreholes & Deep Wells",
            text: "Ideal for municipal water supply, irrigation wells, and private borehole systems requiring high head."
        },
        {
            heading: "Basement, Sump & Pit Drainage",
            text: "Efficient removal of accumulated water in residential, commercial, and industrial basements."
        },
        {
            heading: "Construction & Site Dewatering",
            text: "Suitable for removing groundwater and accumulated rainwater from construction sites, tunnels, and trenches."
        },
        {
            heading: "Water Features, Lakes & Fountains",
            text: "Provides reliable circulation for decorative fountains, ponds, and landscape water features."
        },
        {
            heading: "Agricultural Water Supply",
            text: "Supports farm irrigation, livestock watering, and rural water distribution."
        }
    ];
    return (
        <main>
            <SubPageHeading
                title={"Submersible Pumps"}
                description={"Submersible pumps are specifically engineered for fully immersed operation, delivering reliable and efficient liquid handling in wells, tanks, sumps, and drainage pits. Built to perform under harsh and variable environmental conditions, these pumps ensure stable output, excellent hydraulic efficiency, and long-term durability. Their sealed motor design and rugged construction make them suitable for both clean water and demanding solids-laden applications."}
                image={"/gallery/gallery-1.jpg"}
            />
            <KitchenImageGrid
                topHeading="Features"
                headings={["Product-Oriented", "Key Features"]}
                items={features}
            />
            <EngProcessSection
                heading="Applications"
                items={applications}
            />
        </main>
    )
}

export default SubmersiblePumpsPage