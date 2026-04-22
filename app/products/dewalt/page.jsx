import DewaltStrategySection from "@/components/Services/DewaltStrategySection";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

function Dewalt() {
  const timelineItems = [
    {
      title: "Professional-Grade Power Tools",
      text: "Premium-grade, professional power tools",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421630/81D2e2wZkEL._AC_SL1500__pjnjwy.png",
    },
    {
      title: "Certified Industrial Safety Footwear",
      text: "Certified safety shoes for industrial and construction use",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421591/518lx4XQYEL._AC_SL1200__b7r08x.png",
    },
    {
      title: "Built for Demanding Environments",
      text: "High durability for demanding work environments",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421596/515qTE0N52L._AC_SL1200__vw9mug.png",
    },
    {
      title: "Engineered for Comfort & Protection",
      text: "Designed for performance, comfort, and protection",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421653/91B7XzKKDoL._AC_SL1500__r9uxvo.png",
    },
  ];

  return (
    <main>
      <PageHeading
        title={"DEWALT Power Tools & Safety Shoes"}
        // description={
        //   "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        // }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421583/71RDkb-CH5L._AC_SL1500__xvaxxk.png"
      />
      <WasteCollectionTimeline
        heading="Key Highlights"
        text="DEWALT Power Tools & Safety Shoes are built for maximum performance, durability, and workplace safety. Trusted by professionals worldwide, DEWALT products are engineered to withstand demanding job-site conditions while delivering consistent, high-quality results."
        text2="The power tools range offers precision, strength, and reliability for construction, maintenance, and industrial applications. Complementing this, DEWALT safety shoes provide certified protection, comfort, and durability, ensuring workers remain safe without compromising productivity."
        text3="DEWALT"
        text4="Power Tools & Safety Shoes"
        endHeading="Built for Reliable Performance"
        endText="DEWALT solutions ensure confidence, efficiency, and safety across every task."
        items={timelineItems}
      />
      <DewaltStrategySection />
    </main>
  );
}

export default Dewalt;
