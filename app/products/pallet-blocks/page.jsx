import PalletProcessSection from "@/components/Products/PalletProcessSection";
import ScrollRevealImage from "@/components/Products/PlasticJerryCans";
import SubPageHeading from "@/components/UI/SubPageHeading";

function PalletBlock() {
  return (
    <main>
      <SubPageHeading
        title={"Pallet Blocks"}
        // description={"Our comprehensive range of plastic jerry cans is available in multiple capacities — 0.5L, 1L, 3L, 4L, 5L, 15L, 20L, and 25L — designed to meet the versatile packaging requirements of lubricant manufacturers, petroleum distributors, chemical suppliers, cleaning product producers, and food-processing industries across the UAE. "}
        // description2={"Each jerry can is manufactured using premium-grade, high-density raw materials, ensuring durability, leak resistance, dimensional stability, and safe handling in harsh operational environments."}
        image={"/gallery/gallery-3.jpg"}
      />
      <PalletProcessSection
        mainImage="/gallery/gallery-1.jpg"
        secondaryImage="/gallery/gallery-2.jpg"
        steps={[
          {
            title: "Understand your needs",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
          {
            title: "Develop custom solutions",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
          {
            title: "Achieve targeted results",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
        ]}
      />
    </main>
  );
}

export default PalletBlock;
