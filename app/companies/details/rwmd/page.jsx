import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";

function RecyclableWasteManagementDivision() {
  const services = [
    {
      title: "Waste Paper and Cardboard Collection",
      text: "Scheduled collection of commercial, industrial, and institutional paper waste using roll-off containers, compactors, and pickup vehicles.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Multi-Recyclables Management",
      text: "Collection and segregation of additional recyclable materials such as plastics, metals, and beverage cans.",
      image: "/gallery/gallery-2.jpg",
    },
    {
      title: "On-Site Recycling Solutions",
      text: "Provision of balers, bins, dumpsters, and staff training to enable effective source segregation at client locations.",
      image: "/gallery/gallery-3.jpg",
    },
    {
      title: "Closed-Loop Recycling Support",
      text: "Direct coordination with the Group’s paper mills to ensure recovered materials are efficiently reintegrated into production.",
      image: "/gallery/gallery-4.jpg",
    },
  ];

  const cards = [
    {
      title: "Operations and Scale",
      text: "RWMD operates large-scale collection and processing across Dubai and the Northern Emirates, serving schools, factories, warehouses, offices, and commercial centers with daily collection routes and consolidation activities.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Geographic Coverage",
      text: "Based in Dubai, RWMD serves the entire emirate and supports nationwide recycling efforts, working alongside Al Dhafra Waste Collection to ensure UAE-wide recyclable waste coverage.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Strategic Importance",
      text: "RWMD secures locally collected recycled fibre, reduces reliance on imports, stabilizes production costs, and enables 100% recycled content in paper products.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Leadership and Workforce",
      text: "Managed by experienced recycling and logistics professionals, supported by trained field teams ensuring safe handling, logistics coordination, and uninterrupted supply chains.",
      image: "/solar/solar-1.svg",
    },
  ];

  const overview = [
    {
      heading: "Background and Establishment",
      text: "RWMD was established as part of the MAHY Khoory Group’s long-term sustainability strategy to secure a stable source of recycled fibre for Union Paper Mills and Al Dhafra Paper Manufacturing.",
      lastText:
        "Operating under the Green Arabia platform, it links waste collection directly with manufacturing within a vertically integrated recycling network.",
    },
    {
      heading: "Quality, Safety, and Regulatory Compliance",
      text: "The division operates in full compliance with local waste management regulations, with all vehicles and equipment meeting safety and regulatory standards.",
      bullets: [
        "Routine inspections and preventive maintenance",
        "Strict hygiene and safety protocols",
        "Controlled collection, sorting, and baling processes",
      ],
      lastText:
        "Ensures worker safety, operational reliability, and consistent material quality.",
    },
    {
      heading: "Environmental Impact and Sustainability",
      text: "RWMD delivers measurable environmental benefits through structured recycling programs and efficient waste diversion.",
      bullets: [
        "Conservation of trees and natural resources",
        "Reduction of landfill usage",
        "Lower energy consumption through recycling",
      ],
      lastText:
        "Supports UAE environmental goals and extends sustainability practices to customers and communities.",
    },
    {
      heading: "Infrastructure and Fleet",
      text: "RWMD maintains modern infrastructure to support large-scale recycling operations.",
      bullets: [
        "Fleet of recyclable waste collection trucks",
        "Forklifts and material-handling equipment",
        "Sorting lines and high-capacity baling machines",
        "Bins, containers, and compactors at customer sites",
      ],
      lastText:
        "Digital tracking systems monitor collection volumes and material flows for optimization.",
    },
    {
      heading: "Innovation and Continuous Improvement",
      text: "Innovation is central to RWMD operations, focusing on efficiency and environmental responsibility.",
      bullets: [
        "Digital route optimization",
        "Low-emission vehicles",
        "Customer recycling performance reporting tools",
      ],
      lastText:
        "These initiatives reinforce RWMD’s position as a modern recycling service provider.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
        heading="Recyclable Waste Management Division"
        texts={[
          "The Recyclable Waste Management Division (RWMD) is the Dubai-based recycling arm of the MAHY Khoory Group, supporting its integrated recycling and manufacturing ecosystem.",
          "RWMD plays a critical role in the collection, consolidation, and supply of recyclable materials—primarily waste paper and cardboard—to the Group’s manufacturing facilities.",
          "With the capacity to process over 1,300 metric tonnes of waste paper per day, RWMD ensures a consistent and sustainable supply of recovered fibre within the Group’s circular economy model.",
        ]}
      />
      <ValuesSection
        title="Mission"
        description="To maximize landfill diversion by providing efficient, reliable, and scalable recycling solutions, supporting UAE environmental objectives and reducing dependence on virgin materials."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776682027/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
        imageAlt="Mission"
        ctaHref={false}
        imagePosition="right"
      />

      <ValuesSection
        title="Vision"
        description="To continuously enhance recycling operations through modern equipment, optimized logistics, and customer-focused programs aligned with innovation and sustainability."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776761407/comprehensive-growth_irbplq.jpg"
        imageAlt="Vision"
        ctaHref={false}
        imagePosition="left"
      />
      <KitchenMenu
        heading="Services and Capabilities"
        text="RWMD delivers comprehensive recyclable waste management services across industrial, commercial, and institutional sectors."
        items={services}
      />

      <PumpingServiceCards
        cards={cards}
        heading="Recyclable Waste Management Division"
        subHeading="Recycling Infrastructure & Circular Economy Solutions"
        tag="[ RECYCLING DIVISION ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
      />

      <FeaturesEngineeringSection
        heading="RWMD Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776767418/dubai-city-skyline-showing-burj-khalifa-2014.jpg_jx4cxo.jpg"
      />
    </main>
  );
}

export default RecyclableWasteManagementDivision;
