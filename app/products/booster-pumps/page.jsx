import BoosterPumpRevealSection from "@/components/Products/BoosterPumpRevealSection";
import BoosterPumpSlideRevealSection from "@/components/Products/BoosterPumpSlideRevealSection";
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

function BoosterPumpsPage() {
  const timelineItems = [
    {
      title: "High-Efficiency Hydraulic Design",
      text: "Delivers superior pressure boosting with optimized flow characteristics, ensuring reduced energy consumption and high operational performance.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017064/booster-pumps2_quf1si.png",
    },
    {
      title: "Advanced Control Systems",
      text: "Options include:",
      options: [
        "Pressure switch controllers for basic regulation",
        "Variable Frequency Drive (VFD) systems for intelligent speed control, reduced power usage, and extended pump life",
        "Smart control panels with LCD displays, alarms, BMS connectivity, and system diagnostics",
      ],
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017064/booster-pumps3.png_zznjx5.jpg",
    },
    {
      title: "Flexible Pump Configurations",
      text: "Available in single, twin, and multi-pump (triplex/quadra) setups to meet varying flow rates and redundancy requirements.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017069/booster-pumps4.png_y77hkb.jpg",
    },
    {
      title: "Durable & Corrosion-Resistant Construction",
      text: "Built with stainless steel impellers, diffusers, and wetted components, ensuring long service life in harsh water conditions.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017068/booster-pumps4_v299pw.png",
    },
    {
      title: "Low Noise Performance",
      text: "Engineered with vibration-dampened bases and balanced motors, making them ideal for indoor, residential, and noise-sensitive installations.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017067/booster-pumps5_uynqax.png",
    },
    {
      title: "Dry-Run & Overload Protection",
      text: "Integrated safety mechanisms protect the motor and pump assembly, ensuring reliable long-term operation.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017066/booster-pumps6_l9zjty.png",
    },
  ];
  const tabItems = [
    {
      title: "High-Rise & Multi-Story Buildings",
      text: "Ensures consistent pressure on all floors for domestic water distribution.",
    },
    {
      title: "Commercial Facilities",
      text: "Ideal for malls, hotels, schools, hospitals, labor camps, and office complexes.",
    },
    {
      title: "Residential Properties",
      text: "Reliable solutions for villas, townhouses, and apartment clusters.",
    },
    {
      title: "Irrigation & Landscaping",
      text: "Provides stable pressure for drip systems, sprinklers, and turf irrigation networks.",
    },
    {
      title: "Water Treatment & Filtration Systems",
      text: "Suitable for RO plants, ultrafiltration units, and industrial filtration processes requiring precise pressure control.",
    },
    {
      title: "Industrial Utilities",
      text: "Supports boiler feed, cooling water circulation, washing stations, and other pressure-dependent processes.",
    },
  ];

  return (
    <main>
      <PageHeading
        title={"Booster Pumps"}
        // description={
        //   "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        // }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017075/booster-pumps1_h6u2qe.png"
      />
      <WasteCollectionTimeline
        text="Booster pumps are engineered to elevate water pressure and maintain a consistent, reliable flow across residential, commercial, and industrial systems. Designed for continuous and stable performance, these pumps ensure uninterrupted water delivery even under fluctuating demand conditions. With advanced control technologies and robust construction, booster systems deliver long-term durability, energy efficiency, and user-friendly operation."
        items={timelineItems}
        bottomSection={false}
      />
      <WasteCollectionMenu
      image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777017066/booster-pumps7_ufjl42.png"
        heading="Applications"
        tabs={tabItems.map((item) => item.title)}
        items={tabItems.map((item) => item.text)}
        imageFit="contain"
      />
      {/* <BoosterPumpRevealSection />
            <BoosterPumpSlideRevealSection /> */}
    </main>
  );
}

export default BoosterPumpsPage;
