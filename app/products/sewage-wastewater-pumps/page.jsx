import KitchenItems from "@/components/Services/Kitchen/KitchenItems";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import SubPageHeading from "@/components/UI/SubPageHeading"

function SewagePumpsPage() {
    const features = [
        { title: "Advanced Non-Clog Hydraulics", text: "quipped with vortex, semi-open channel, or closed channel impellers, providing exceptional solids-handling capability while minimizing clogging and blockage.", image: "/gallery/gallery-1.jpg" },
        { title: "Solids-Handling Capacity", text: "Capable of handling large solid particles, fibrous waste, and sludge—ensuring smooth operation in sewage networks and wastewater plants.", image: "/gallery/gallery-2.jpg" },
        { title: "Cutter & Grinder Options", text: "Select models include integrated cutter or grinder mechanisms, ideal for applications involving sanitary products, wipes, plastics, and fibrous materials.", image: "/gallery/gallery-3.jpg" },
        { title: "Heavy-Duty Cast Iron Construction", text: "Pump body, motor housing, and critical components built with corrosion-resistant cast iron for enhanced durability and long operating life.", image: "/gallery/gallery-4.jpg" },
        { title: "Auto-Coupling System Compatibility", text: "Available with guide rails and auto-coupling bases, allowing quick installation and easy removal for maintenance without entering the wet well.", image: "/gallery/gallery-5.jpg" },
        { title: "Reliable Motor Protection", text: "Includes thermal overload protection, oil-chamber sealing, double mechanical seals, moisture sensors (optional), and high-grade bearings for extended life.", image: "/gallery/gallery-6.jpg" },
        { title: "Wide Duty Range", text: "Offered in various capacities—from small commercial sump pumps to large municipal sewage transfer units.", image: "/gallery/gallery-7.jpg" }
    ];
    const applications = [
        { title: "Sewage Lifting Stations & Pumping Chambers", text: "Ideal for underground pits, STP inlets, and municipal pumping stations." },
        { title: "Municipal Wastewater Networks", text: "Designed for raw sewage transfer, stormwater pumping, and mainline sewer systems." },
        { title: "Industrial Wastewater Treatment", text: "Suitable for effluent transfer, sludge handling, and wastewater process streams in factories and plants." },
        { title: "Commercial Building Sewage Discharge", text: "Used in malls, hotels, hospitals, residential towers, labour camps, and complexes with basement sewage pits." },
        { title: "Treatment Plant Inlet/Outlet & Return Stations", text: "Supports STP operations including inlet channels, secondary sludge movement, equalization tank transfer, and clarifier return systems." }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Sewage & Wastewater Pumps"}
                image={"/gallery/gallery-1.jpg"}
            />
            <KitchenMenu
                heading="Product-Oriented Key Features"
                text="Sewage and wastewater pumps are engineered for the demanding task of transporting solids-laden liquids, sludge, and raw sewage in municipal, industrial, and commercial environments. Designed for heavy-duty, continuous operation, these pumps feature robust construction, advanced impeller technology, and reliable motor protection systems—ensuring long-term performance even under harsh conditions. They are suitable for both dry and wet pit installations and support fully automatic operation through compatible control systems."
                items={features}
            />
            <KitchenItems
                title="Applications"
                items={applications}
            />
        </main>
    )
}

export default SewagePumpsPage