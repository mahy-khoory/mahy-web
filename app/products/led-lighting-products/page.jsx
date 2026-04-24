import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

function LedLightningProducts() {
  const highlights = [
    {
      title: "Efficiency",
      desc: "Energy-efficient and cost-saving LED technology",
    },
    {
      title: "Longevity",
      desc: "Long lifespan with minimal maintenance",
    },
    {
      title: "Brightness",
      desc: "High brightness and uniform light distribution",
    },
    {
      title: "Versatility",
      desc: "Suitable for residential, commercial, and industrial use",
    },
    {
      title: "Sustainability",
      desc: "Modern, reliable, and eco-friendly lighting solutions",
    },
  ];

  return (
    <main>
      <PageHeading
        title={"ECOLINK LED Bulbs & Lighting Products"}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025861/led-lightning-1_z6ycj6.jpg"
      />
      <SolarPanelImageGrid
        subHeading={"LED Bulbs & Lighting Products"}
        text={
          "ECOLINK LED Bulbs & Lighting Products are designed to deliver high performance, energy efficiency, and long-lasting reliability for residential, commercial, and industrial applications. Built with advanced LED technology, ECOLINK lighting solutions provide superior illumination while significantly reducing power consumption and maintenance costs."
        }
        items={[
          {
            title: "Reliable Performance Across Every Space",
            text: "Our product range combines modern design, consistent light output, and durable construction, making it ideal for offices, warehouses, retail spaces, hospitality environments, and everyday home use. ECOLINK LED solutions are engineered to perform reliably in diverse conditions, ensuring optimal brightness, color consistency, and extended lifespan.",
          },
          {
            title: "Sustainable & Cost-Efficient Lighting",
            text: "With a strong focus on sustainability and cost efficiency, ECOLINK LED lighting supports greener operations by lowering energy usage and carbon footprint—without compromising on quality or aesthetics.",
          },
        ]}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025869/led-lightning-2_y1ke9v.png"
      />
      <ComprehensiveProcessSection
        heading="Key Highlights"
        subHeading="LED Bulbs & Lighting"
        steps={highlights}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025863/led-lightning-3_mugfpo.png"
        endText="ECOLINK LED Bulbs & Lighting Products offer a smart, sustainable lighting choice for projects that demand performance, durability, and efficiency."
      />
    </main>
  );
}

export default LedLightningProducts;
