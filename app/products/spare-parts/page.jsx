import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import OfferingsSection from "@/components/Services/OfferingsSection";
import SparePartsTimeline from "@/components/Shop/SparePartsTimeline";
import SubPageHeading from "@/components/UI/SubPageHeading";

function SparePartsPage() {
  const coverage = [
    {
      heading: "GRUNDFOS Pumps",
      text: "Complete spare part kits for booster systems, transfer pumps, submersibles, chilled water pumps, and wastewater pumps. Available items include mechanical seals, impellers, bearings, O-rings, motor components, control modules, and more.",
    },
    {
      heading: "Lister Petter Engines",
      text: "Authentic engine components such as filters, pistons, injector nozzles, gaskets, belts, cooling components, and overhaul kits for reliable generator and diesel engine maintenance.",
    },
    {
      heading: "VEM Motors",
      text: "OEM-approved motor spares including bearings, cooling fans, terminal blocks, rotors, stators, and motor protection accessories.",
    },
    {
      heading: "DEWALT Power Tools",
      text: "Genuine DEWALT spare parts including switches, carbon brushes, chucks, housings, gears, armatures, and service kits for drills, grinders, saws, and impact tools.",
    },
    {
      heading: "Safety Products & Accessories",
      text: "A wide selection of essential safety items and consumables for maintenance teams and field technicians.",
    },
  ];
  const support = [
    {
      heading: "Maintenance Companies & Facility Management Firms",
      icon: "🛠️",
    },
    {
      heading: "Government Departments & Public Sector Entities",
      icon: "🏛️",
    },
    {
      heading: "Industrial Plants & Utilities",
      icon: "🏭",
    },
    {
      heading: "MEP Contractors",
      icon: "🔧",
    },
    {
      heading: "End Users & Residential Customers",
      icon: "🏠",
    },
  ];

  const items = [
    {
      title: "Understanding Customer Needs",
      text: "We analyze your requirements and identify the exact spare parts needed to keep your operations running smoothly.",
    },
    {
      title: "Sourcing & Quality Assurance",
      text: "We work with trusted suppliers to ensure high-quality, reliable spare parts that meet industry standards.",
    },
    {
      title: "Inventory & Availability",
      text: "Critical parts are stocked and managed efficiently to ensure quick availability and minimal downtime.",
    },
    {
      title: "Fast Delivery & Support",
      text: "We provide timely delivery and ongoing support to ensure your business operations continue without interruption.",
    },
  ];

  return (
    <main>
      <SubPageHeading
        title={"Spare Parts"}
        description={
          "Our Spare Parts Division provides a comprehensive inventory of genuine, manufacturer-approved spare parts to support all the products we supply—including pumps, engines, motors, and power tools. By maintaining a robust stock of critical components, we ensure fast turnaround, minimized downtime, and reliable after-sales service for customers across the UAE and the wider GCC region."
        }
        description2={
          "Every spare part is sourced directly from leading global brands and engineered to deliver long service life, optimal compatibility, and consistent performance in the region’s demanding operating conditions."
        }
        fullHeight
        image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776984818/spare-parts-background-beautiful-illustration-picture-generative-ai.jpg_yanoie.jpg"}
      />
      <FeaturesEngineeringSection image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776984884/transportation.jpg_f3k4sm.jpg" heading="Product Coverage" items={coverage} />
      <OfferingsSection
        heading="Service Support & Availability"
        texts={[
          "To ensure uninterrupted operation for our clients, we maintain ready stock for fast replacement and service needs across multiple sectors",
          "Whether it is an emergency breakdown, scheduled servicing, or major overhaul, our Spare Parts Division ensures prompt delivery, accurate part identification, and technical assistance to restore system performance quickly and efficiently.",
        ]}
        items={support}
      />
      <SparePartsTimeline  items={items} />
    </main>
  );
}

export default SparePartsPage;
