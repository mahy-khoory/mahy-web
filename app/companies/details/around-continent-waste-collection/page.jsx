import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";

function AroundContinentWasteCollection() {
  const services = [
    {
      title: "General Waste Collection and Transportation",
      text: "Collection and transport of non-recyclable general waste from commercial, industrial, and project sites to approved disposal facilities.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Construction and Demolition (C&D) Waste",
      text: "Handling and transportation of construction debris, demolition waste, and project-related waste materials generated from infrastructure and development activities.",
      image: "/gallery/gallery-2.jpg",
    },
    {
      title: "Hazardous Waste Transportation",
      text: "Collection and transport of regulated hazardous waste in accordance with UAE environmental and safety regulations, including controlled solid and liquid waste streams.",
      image: "/gallery/gallery-3.jpg",
    },
    {
      title: "Solid and Liquid Waste Handling",
      text: "Authorized handling and transportation of solid waste materials, liquid waste including oils, sludge, and chemical residues, and industrial by-products requiring controlled disposal.",
      image: "/gallery/gallery-4.jpg",
    },
    {
      title: "Disposal and Treatment Coordination",
      text: "Coordinates closely with licensed treatment and disposal facilities to ensure all waste is processed in full regulatory compliance.",
      image: "/gallery/gallery-1.jpg",
    },
  ];

  const cards = [
    {
      title: "Operations and Industry Applications",
      text: "Around Continent Waste Collection operates a dedicated waste logistics network supported by trained personnel and purpose-built vehicles. It serves manufacturing, construction, commercial establishments, warehouses, logistics operations, and institutions generating regulated waste.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Geographic Coverage",
      text: "Although primarily licensed and managed from Dubai, the company provides services across the UAE, transporting waste to approved facilities in multiple emirates.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Strategic Role within the Group",
      text: "The company strengthens MAHY Khoory Group’s environmental services portfolio by focusing on general, construction, and hazardous waste logistics, supporting compliance and environmental protection.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Leadership and Oversight",
      text: "Managed by experienced professionals in waste management and environmental compliance, ensuring all operations adhere strictly to laws, permits, and safety protocols.",
      image: "/solar/solar-1.svg",
    },
  ];

  // OVERVIEW SECTION
  const overview = [
    {
      heading: "Establishment and Regulatory Framework",
      text: "Around Continent Waste Collection was established as part of the MAHY Khoory Group’s strategic expansion into environmental and waste management services. The company is licensed by relevant UAE authorities, including Dubai Municipality.",
      lastText:
        "Its establishment reflects the Group’s commitment to providing compliant waste logistics and disposal coordination services.",
    },
    {
      heading: "Safety, Quality, and Regulatory Compliance",
      text: "Safety and compliance are central to all operations. All vehicles are equipped with secure containment systems, spill response kits, and emergency equipment.",
      bullets: [
        "Certified and trained drivers and handlers",
        "Traceable and documented waste movements",
        "Full regulatory reporting compliance",
      ],
      lastText:
        "Ensures transparency, accountability, and strict adherence to UAE environmental regulations.",
    },
    {
      heading: "Environmental Protection and Risk Mitigation",
      text: "The company ensures controlled collection, transport, and disposal of waste, preventing environmental contamination and public safety risks.",
      bullets: [
        "Minimizes land, water, and air impact",
        "Supports environmental compliance for clients",
        "Promotes waste segregation and safe handling",
      ],
      lastText:
        "Improves operational efficiency while reducing environmental risk.",
    },
    {
      heading: "Fleet and Infrastructure",
      text: "The company operates a modern fleet designed for diverse waste streams.",
      bullets: [
        "Tanker vehicles for liquid waste",
        "Sealed containers for solid and hazardous waste",
        "Specialized vehicles for regulated materials",
      ],
      lastText:
        "All vehicles comply with transport standards and undergo strict maintenance programs.",
    },
    {
      heading: "Technology and Operational Excellence",
      text: "Advanced tracking and documentation systems enhance safety, efficiency, and transparency.",
      bullets: [
        "GPS fleet monitoring",
        "Digital waste manifests",
        "Real-time tracking and reporting",
      ],
      lastText:
        "Provides visibility of waste movements and supports proactive risk management.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Around Continent Waste Collection"
        texts={[
          "Around Continent Waste Collection is an environmental services subsidiary within the MAHY Khoory Group, specializing in the collection, handling, and transportation of general waste, construction and demolition waste, hazardous waste, and solid and liquid waste.",
          "The company operates under approved regulatory permits and is authorized to manage and transport a wide range of controlled and regulated waste streams across the United Arab Emirates.",
          "It supports industrial, commercial, and project-based operations by ensuring waste is collected, transported, and directed to approved treatment or disposal facilities in strict compliance with UAE environmental, health, and safety regulations.",
        ]}
      />

      <ValuesSection
        title="Mission"
        description="To deliver safe, reliable, and fully compliant waste collection and transportation services, protecting public health, infrastructure assets, and the environment."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
        imageAlt="Mission"
        ctaHref={false}
        imagePosition="right"
      />

      <ValuesSection
        title="Vision"
        description="To become a trusted national partner for organizations requiring professional waste management solutions, particularly in general, construction-related, and hazardous waste, while maintaining high operational and regulatory standards."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        imageAlt="Vision"
        ctaHref={false}
        imagePosition="left"
      />

      <KitchenMenu
        heading="Services and Licensed Capabilities"
        text="Around Continent Waste Collection provides a broad range of waste collection and transportation services to industrial, commercial, and project-based clients."
        items={services}
      />

      <PumpingServiceCards
        cards={cards}
        heading="Around Continent Waste Collection"
        subHeading="Environmental Waste Logistics & Compliance Solutions"
        tag="[ ENVIRONMENTAL SERVICES ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776682027/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
      />

      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default AroundContinentWasteCollection;
