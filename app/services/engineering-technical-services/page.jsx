import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import HoverableColumns from "@/components/HoverableColumns";
import EngProcessSection from "@/components/Services/EngProcessSection";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import OfferingsSection from "@/components/Services/OfferingsSection";
import ServicesPumping from "@/components/ServicesPumping";
import SubPageHeading from "@/components/UI/SubPageHeading";
function PumpingSystemServicesPage() {
  return (
    <main>
      <SubPageHeading
        title={"Engineering & Technical Services"}
        description={
          "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        }
        image={"/gallery/gallery-5.jpg"}
      />
      <FeaturesEngineeringSection />
      <OfferingsSection/>
      {/* <EngProcessSection/> */}


    </main>
  );
}

export default PumpingSystemServicesPage;
