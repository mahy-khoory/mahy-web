import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection"
import HoverableColumns from "@/components/HoverableColumns"
import ServicesPumping from "@/components/ServicesPumping"
import SubPageHeading from "@/components/UI/SubPageHeading"
function PumpingSystemServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Comprehensive Pumping"}
                description={"Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."}
                image={"/gallery/gallery-8.jpeg"}
            />
 <HoverableColumns />
 <ComprehensiveProcessSection/>
      <ServicesPumping/>

        </main>
    )
}

export default PumpingSystemServicesPage