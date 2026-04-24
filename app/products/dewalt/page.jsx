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
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027389/power-tools-1_zo4m4y.png",
    },
    {
      title: "Built for Demanding Environments",
      text: "High durability for demanding work environments",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027393/power-tools-4_jmppuk.png",
    },
    {
      title: "Engineered for Comfort & Protection",
      text: "Designed for performance, comfort, and protection",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027375/power-tools-2_zj7ofz.jpg",
    },
  ];

  return (
    <main>
      <PageHeading
        title={"DEWALT Power Tools & Safety Shoes"}
        // description={
        //   "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        // }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027385/power-tools-5_vkzikd.png"
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
        bottomImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027375/power-tools-3_xcs0f6.jpg"
      />
      <DewaltStrategySection />
    </main>
  );
}

export default Dewalt;
