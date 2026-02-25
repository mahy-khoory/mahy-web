import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import PumpingSystemServices from "@/components/Services/PumpingSystemServices";
import SubPageHeading from "@/components/UI/SubPageHeading";
import SplitScrollShowcase from "@/components/UI/SplitScrollShowcase";
import PumpingServiceHorizontalScroll from "@/components/Services/PumpingServiceHorizontalScroll";
import StackingCardsSection from "@/components/Services/StackingCardsSection";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import ServicedHotelApartments from "@/components/Services/ServicedHotelApartments";
import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";

function PumpingSystemServicesPage() {
  const categories = [
    { title: "Booster Pumps", text: "High-performance pressure boosting systems for domestic villas, commercial buildings, and high-rise towers. GRUNDFOS booster systems ensure stable water pressure, intelligent control, and energy-efficient operation through advanced VFD technology and modular pump configurations.", image: "/gallery/gallery-1.jpg" },
    { title: "Transfer Pumps", text: "Designed for fluid movement, circulation, and utility applications, these pumps provide dependable operation with high hydraulic efficiency. Ideal for building services, chilled/hot water loops, mechanical rooms, and industrial water distribution.", image: "/gallery/gallery-2.jpg" },
    { title: "Submersible Pumps", text: "Engineered for submerged operation in boreholes, sumps, tanks, and drainage pits, GRUNDFOS submersible lines deliver superior performance in clean water, sandy wells, drainage, and dewatering applications.", image: "/gallery/gallery-3.jpg" },
    { title: "Sewage & Wastewater Pumps", text: "Purpose-built for heavy-duty solids handling, sewage transfer, and sludge movement. Available with channel, vortex, and grinder/cutter options, these pumps support municipal networks, STPs, commercial buildings, and industrial wastewater management.", image: "/gallery/gallery-4.jpg" },
    { title: "Chilled Water Pumps", text: "Optimized for HVAC applications, these pumps ensure precise chilled water circulation for district cooling plants, central cooling networks, and commercial building HVAC systems. Fully compatible with VFD controls for maximum energy savings.", image: "/gallery/gallery-5.jpg" }
  ];
  const steps = [
    {
      title: "High-rise buildings & commercial complexes",
      desc: "Reliable water pressure boosting, circulation, and wastewater handling for towers and large facilities.",
    },
    {
      title: "Residential water distribution networks",
      desc: "Stable supply for villas, communities, and residential clusters."
    },
    {
      title: "District cooling plants & HVAC systems",
      desc: "High-efficiency pumps for chilled and condenser water loops under high ambient temperatures."
    },
    {
      title: "Industrial water supply & process applications",
      desc: "Robust designs for factories, utilities, cooling systems, and process water circulation."
    },
    {
      title: "Wastewater lifting stations & treatment facilities",
      desc: "Durable pumps for sewage transfer, drainage, and treatment plant operations."
    },
  ];

  return (
    <main>
      <SubPageHeading
        title={"Pumping Solutions"}
        description={
          "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        }
        image={"/gallery/gallery-6.jpg"}
      />
      <TrustedAdvisorSection
        heading="Overview"
        texts={[
          "The Pumping Solutions catalogue showcases a complete portfolio of GRUNDFOS-engineered pump systems, purpose-built for residential, commercial, industrial, and infrastructure applications. Each pump is designed with advanced hydraulics, high-efficiency motors, and durable materials to ensure optimal performance, reduced energy consumption, and long operational life—particularly suited to the demanding climatic and water quality conditions of the UAE.",
          "These solutions are developed to meet the region’s highest standards for reliability, sustainability, and lifecycle efficiency, supporting modern building requirements and large-scale industrial operations."
        ]}
      />
      <ServicedHotelApartments
        topHeading="Categories"
        heading={"Pump Categories Available"}
        text="Explore a comprehensive range of pump categories designed to meet diverse industrial, commercial, and infrastructure requirements."
        items={categories}
      />
      <ComprehensiveProcessSection
        subHeading="Specialized Engineering"
        heading="Engineered for UAE Market Requirements"
        steps={steps}
      />

      {/* <StackingCardsSection /> */}
      {/* <PumpingServiceHorizontalScroll /> */}

      {/* <PumpingSystemServices /> */}
      {/* <PumpingServiceCards />
            <SplitScrollShowcase /> */}
    </main>
  );
}

export default PumpingSystemServicesPage;
