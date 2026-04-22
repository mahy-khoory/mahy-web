import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";


function AlKhooryEngineering() {
  const pumpingCardsData = [
    {
      title: "Heritage & Development",
      text: "Al Khoory Engineering originated from the Group’s core pumping business dating back to the mid-20th century. As MAHY Khoory expanded into engineering and construction, pumping system design evolved into a dedicated function, eventually forming a specialized entity focused on engineering, system integration, and turnkey project execution across multiple sectors.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Geographic Presence",
      text: "Headquartered in Dubai, with engineering offices and facilities in Ras Al Khor / Al Aweer, the company ensures efficient access to project sites across Dubai and the Northern Emirates, while also supporting selected projects across the UAE and neighboring Gulf markets.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Leadership & Management",
      text: "The company is led by senior engineers and experienced project managers with deep expertise in pumping systems and infrastructure delivery, operating under the Group’s engineering framework to maintain alignment with corporate standards and strategic objectives.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Quality & Compliance",
      text: "Al Khoory Engineering follows stringent quality and safety standards, complying with international codes such as API, ANSI, and ISO, along with local regulations. ISO 9001:2015-certified processes and comprehensive testing, including hydrostatic and factory acceptance tests, ensure reliable performance and long-term operational safety.",
      image: "/solar/solar-1.svg",
    },
  ];
  const overview = [
    {
      heading: "Products and Engineering Services",
      text: "Al Khoory Engineering provides end-to-end pumping system solutions across the full project lifecycle, from concept to commissioning.",
      bullets: [
        "Engineering design and hydraulic analysis",
        "Equipment selection and supply",
        "Fabrication and assembly of pump systems",
        "Turnkey installation and commissioning",
        "Centrifugal, submersible, and vertical turbine pumps",
        "Booster pump sets and multi-stage pumps",
        "Duplex and triplex pumping skids",
        "Complete packaged pumping systems",
        "Control panels, pressure vessels, piping, valves, and instrumentation",
        "Advanced services including hydraulic calculations, system simulations, and maintenance planning",
      ],
      lastText:
        "These capabilities enable delivery of fully integrated pumping systems optimized for performance and reliability.",
    },
    {
      heading: "Project Experience",
      text: "Al Khoory Engineering has executed numerous specialized projects across the UAE and the wider region, delivering pumping systems for a variety of applications.",
      bullets: [
        "High-rise residential and commercial developments",
        "Hotels and mixed-use complexes",
        "Municipal water and wastewater treatment facilities",
        "Fire-fighting and life-safety systems for large campuses",
      ],
      lastText:
        "Working closely with MEP contractors, consultants, and developers, the company delivers technically sound systems within demanding timelines, contributing to landmark infrastructure projects across the Middle East.",
    },
    {
      heading: "Industry Focus and Client Segments",
      text: "The company serves a diverse client base across multiple sectors while specializing exclusively in pumping and fluid-handling systems.",
      bullets: [
        "Construction and real estate development",
        "Municipal and utility authorities",
        "Industrial facilities",
        "Oil & gas and infrastructure projects",
      ],
      lastText:
        "Its solutions support applications ranging from domestic water supply and sewage handling to fire protection and industrial fluid transfer.",
    },
    {
      heading: "Role within the MAHY Khoory Group",
      text: "Al Khoory Engineering functions as the core technical and execution arm for pumping projects within the Group.",
      bullets: [
        "Coordinates with trading companies for equipment sourcing",
        "Works with service divisions for installation and after-sales support",
        "Leverages partnerships with global manufacturers such as Grundfos and Kirloskar",
      ],
      lastText:
        "This integrated approach ensures consistency in engineering standards, product quality, and system reliability across all projects.",
    },
    {
      heading: "Quality and Regulatory Compliance",
      text: "Al Khoory Engineering maintains stringent quality and safety standards across all engineering and fabrication activities.",
      bullets: [
        "Compliance with international standards such as API, ANSI, and ISO",
        "Adherence to local authority regulations",
        "ISO 9001:2015-certified quality management systems",
        "Hydrostatic and factory acceptance testing",
      ],
      lastText:
        "This disciplined approach ensures reliable system performance and long-term operational safety.",
    },
    {
      heading: "Sustainability and Responsible Engineering",
      text: "Environmental responsibility is integrated into the company’s design philosophy through energy-efficient system solutions.",
      bullets: [
        "Variable-speed drive systems",
        "Optimized hydraulic designs",
        "Energy-efficient pumping solutions",
        "Water reuse and conservation principles in wastewater systems",
      ],
      lastText:
        "These practices reduce power consumption, lifecycle costs, and environmental impact across projects.",
    },
    {
      heading: "Infrastructure and Technical Resources",
      text: "The company is supported by specialized infrastructure and technical capabilities to ensure efficient project delivery.",
      bullets: [
        "Engineering offices with 3D modeling and hydraulic simulation tools",
        "In-house workshops for pump assembly and system integration",
        "On-site commissioning and technical support teams",
        "Central warehouse with pumps and spare parts",
        "Dedicated service center at Ras Al Khor",
      ],
      lastText:
        "These resources support system design, installation, maintenance, and troubleshooting throughout the project lifecycle.",
    },
    {
      heading: "Innovation and Strategic Direction",
      text: "Al Khoory Engineering invests in innovation to stay at the forefront of pumping technology.",
      bullets: [
        "Solar-powered pumping systems",
        "Smart control systems",
        "IoT-enabled monitoring solutions",
        "Expansion into desalination and industrial process pumping",
        "Offshore system applications",
      ],
      lastText:
        "Leveraging global technology partnerships, the company continues to introduce advanced solutions and expand into specialized markets.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Al Khoory Engineering"
        texts={[
          "Al Khoory Engineering, a key subsidiary within the MAHY Khoory Group, is a specialist engineering company focused on the design, supply, and implementation of water and wastewater pumping systems. As part of the Group’s long-established legacy in pumping and fluid management, the company delivers comprehensive engineering solutions for complex infrastructure and industrial projects. Leveraging decades of collective experience within the Group, Al Khoory Engineering supports large-scale, mission-critical installations, providing technically robust and reliable pumping systems tailored to project-specific requirements.",
        ]}
      />

      <ValuesSection
        title="Our Mission "
        description="Aligned with the MAHY Khoory Group’s corporate values, Al Khoory Engineering’s mission is to deliver high-performance pumping solutions that enhance infrastructure reliability, optimize resource utilization, and support sustainable development."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
        imageAlt="Our Mission"
        ctaHref={false}
        imagePosition="right"
      />

      <ValuesSection
        title="Our Vision "
        description="The company’s vision centers on technical excellence, customization, and intelligent system design, positioning Al Khoory Engineering as a trusted engineering partner for complex fluid-handling applications."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        imageAlt="Our Vision"
        ctaHref={false}
        imagePosition="left"
      />

      <PumpingServiceCards
        cards={pumpingCardsData}
        heading="Al Khoory Engineering"
        subHeading="Engineering, System Integration & Turnkey Pumping Solutions"
        tag="[ ENGINEERING DIVISION ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776795078/factory-with-blue-pipe-blue-pipe-with-word-power-it_fseudd.jpg"
      />

      <FeaturesEngineeringSection
        heading="Engineering Capabilities"
        // text={
        //   "M.A.H.Y. Khoory Trading is a GCC-wide procurement and distribution division that delivers compliant, energy-efficient solutions through strong infrastructure, technical support, and global partnerships, driving consistent quality, operational efficiency, and long-term growth across the Group."
        // }
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default AlKhooryEngineering;
