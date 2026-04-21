import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyDetailCards from "@/components/UI/companies/detail/CompanyDetailCards";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";

function AlDhafraPaper() {
const adpmCardsData = [
  {
    title: "Market Reach",
    text: "Headquartered in Abu Dhabi, Al Dhafra Paper Manufacturing supplies packaging manufacturers across the United Arab Emirates and the wider Middle East, with products also reaching selected international markets. Alongside Union Paper Mills in Dubai, the facility plays a critical role in ensuring regional self-sufficiency in recycled containerboard production.",
    image: "/solar/solar-1.svg",
  },
  {
    title: "Innovation and Continuous Advancement",
    text: "Al Dhafra Paper Manufacturing maintains a strong focus on technological advancement, regularly upgrading fibre processing equipment and embracing digital optimization. Through collaboration with global technology partners and industry specialists, the mill continuously enhances product performance, cost efficiency, and environmental outcomes—maintaining its position at the forefront of sustainable paper manufacturing in the Middle East.",
    image: "/solar/solar-2.svg",
  },
  {
    title: "Infrastructure and Technology",
    text: "The Abu Dhabi facility is equipped with advanced paper manufacturing infrastructure, including high-capacity pulpers, continuous fibre processing systems, modern winders, and fully automated packing lines. Digital control systems and real-time quality monitoring ensure production stability and operational efficiency.",
    image: "/solar/solar-2.svg",
  },
  {
    title: "Leadership and Management",
    text: "Al Dhafra Paper Manufacturing is managed by experienced professionals with deep expertise in paper manufacturing and industrial operations. Leadership at the mill emphasizes operational discipline, safety, efficiency, and continuous improvement, in line with the Group’s approach to managing its technical and manufacturing businesses.",
    image: "/solar/solar-1.svg",
  },
];
const overview = [
  {
    heading: "Background and Development",
    text: "The foundation of Al Dhafra Paper Manufacturing builds on the Group’s long-standing expertise in paper recycling, which began in 1987 with the establishment of Union Paper Mills, one of the earliest paper recycling operations in the GCC.",
    lastText:
      "Leveraging decades of technical and operational experience, Al Dhafra Paper Manufacturing was established to address the growing regional demand for sustainable containerboard solutions. The development of the facility reflects the MAHY Khoory Group’s long-term growth philosophy: expansion through innovation, circular manufacturing, and environmental stewardship.",
  },
  {
    heading: "Operations and Integration",
    text: "Al Dhafra Paper Manufacturing operates as part of an integrated recycling and manufacturing ecosystem within the MAHY Khoory Group.",
    bullets: [
      "Works closely with Union Paper Mills and in-house waste collection operations",
      "Processes over 1,300 tonnes of recovered waste paper daily",
      "Partnership with Valmet to install advanced ceramic dewatering elements",
    ],
    lastText:
      "These initiatives enhance machine efficiency, paper quality, and energy performance, reflecting the company’s commitment to operational excellence, continuous improvement, and innovation.",
  },
  {
    heading: "Strategic Importance to the Group",
    text: "As the UAE’s second recycled containerboard mill, Al Dhafra Paper Manufacturing represents a strategic pillar within the MAHY Khoory Group’s industrial portfolio.",
    bullets: [
      "Secures stable supply of recycled paper for the Group’s packaging value chain",
      "Reinforces regional leadership in recycling and circular manufacturing",
    ],
    lastText:
      "By transforming waste into high-value industrial raw material, the facility reflects the Group’s long-term vision for sustainable manufacturing and responsible industrial growth.",
  },
  {
    heading: "Quality and Regulatory Compliance",
    text: "Quality assurance is embedded throughout the operations of Al Dhafra Paper Manufacturing, supported by ISO-certified management systems and strict regulatory compliance.",
    bullets: [
      "Adherence to environmental and industrial standards",
      "Comprehensive testing for strength, performance, and reliability",
      "Careful sorting, cleaning, and processing of recovered paper",
    ],
    lastText:
      "These processes ensure contamination-free production and consistent output quality.",
  },
  {
    heading: "Environmental and Sustainability Performance",
    text: "Sustainability is central to the operating model of Al Dhafra Paper Manufacturing, with 100% post-consumer wastepaper used as raw material.",
    bullets: [
      "Reduces reliance on virgin raw materials",
      "Conserves natural resources",
      "Lowers energy and water consumption",
      "Significantly reduces landfill waste and carbon emissions",
      "Operates closed-loop water recycling systems",
    ],
    lastText:
      "The mill also incorporates waste-heat recovery where feasible and actively supports community recycling initiatives that promote responsible waste diversion.",
  },
];

  const features = [
    {
      title: "Union Testliner (90–200 GSM)",
      text: "High-strength linerboard for corrugated packaging.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Unionflute (90–200 GSM)",
      text: "Recycled fluting medium providing rigidity and cushioning.",
      image: "/gallery/gallery-2.jpg",
    },
  ];
  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Al Dhafra Paper Manufacturing"
        texts={[
          "Al Dhafra Paper Manufacturing is the MAHY Khoory Group’s dedicated recycled containerboard manufacturing facility, located in Abu Dhabi. Established in 2017, Al Dhafra Paper Manufacturing operates as a fully integrated mill converting 100% recovered wastepaper into high-quality Test liner and Fluting Medium for the packaging industry.With an average production capacity of approximately 690 tonnes per day, the mill operates in compliance with leading environmental, technical, and regulatory standards. Situated within ICAD III, the facility is equipped with state-of-the-art production lines and benefits from continuous technology upgrades, ensuring operational efficiency and product consistency aligned with international benchmarks.",
        ]}
      />

      <ValuesSection
        title="Our Mission "
        description="Al Dhafra Paper Manufacturing’s mission is to be a regional leader in sustainable containerboard manufacturing, fully aligned with the MAHY Khoory Group’s commitment to delivering solutions that enhance quality of life while protecting the environment."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
        imageAlt="Our Mission"
        ctaHref={false}
        imagePosition="right"
      />

      <ValuesSection
        title="Our Vision "
        description="Our vision is to expand the use of recycled fibre, reduce the environmental footprint of packaging materials, and support regional industries with reliable, eco-friendly paper products."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        imageAlt="Our Vision"
        ctaHref={false}
        imagePosition="left"
      />

      <KitchenMenu
        heading="Products and Capabilities"
        text="Al Dhafra Paper Manufacturing produces a comprehensive range of recycled containerboard products, engineered to meet the needs of packaging converters in both regional and international markets. The product portfolio includes The mill also offers customized paper specifications, ensuring consistent quality, strength, and performance tailored to customer requirements."
        items={features}
      />
      <PumpingServiceCards
        cards={adpmCardsData}
        heading="Al Dhafra Paper Manufacturing"
        subHeading="Recycled Containerboard Manufacturing & Industrial Operations"
        tag="[ PAPER MANUFACTURING ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
      />

      <FeaturesEngineeringSection
        heading="Al Dhafra Paper Mills Overview"

        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default AlDhafraPaper;
