import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import PumpingSystemServices from "@/components/Services/PumpingSystemServices";
import SubPageHeading from "@/components/UI/SubPageHeading";
import SplitScrollShowcase from "@/components/UI/SplitScrollShowcase";
import PumpingServiceHorizontalScroll from "@/components/Services/PumpingServiceHorizontalScroll";
import StackingCardsSection from "@/components/Services/StackingCardsSection";

function PumpingSystemServicesPage() {
  return (
    <main>
      <SubPageHeading
        title={"Pumping Solutions"}
        description={
          "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        }
        image={"/gallery/gallery-6.jpg"}
      />
      <div></div>
      <StackingCardsSection />
      <PumpingServiceHorizontalScroll />

      {/* <PumpingSystemServices /> */}
      {/* <PumpingServiceCards />
            <SplitScrollShowcase /> */}
    </main>
  );
}

export default PumpingSystemServicesPage;
