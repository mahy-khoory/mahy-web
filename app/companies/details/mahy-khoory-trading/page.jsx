import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import CompanyDetailCards from "@/components/UI/companies/detail/CompanyDetailCards";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";

function MahyKhooryTradingPage() {
  const overview = [
    {
      heading: "Geographic Coverage",
      text: "Headquartered in Dubai, M.A.H.Y. Khoory Trading operates extensively across the GCC, with a particularly strong presence in the UAE and Oman. Supported by the Group’s logistics and warehousing infrastructure, the division ensures efficient distribution and product availability across regional markets.",
      lastText:
        "In addition to its GCC focus, the division also supports re-export activities to neighboring regions, including Africa and selected international markets.",
    },
    {
      heading: "Role Within the MAHY Khoory Group",
      text: "Within the Group’s structure, M.A.H.Y. Khoory Trading serves as a foundational business unit and central procurement channel. It supports both external customers and internal subsidiaries by sourcing, stocking, and distributing equipment required for engineering, manufacturing, and service operations across the Group.",
      lastText:
        "This integrated role ensures consistency in product quality, supplier relationships, technical standards, and commercial practices throughout the MAHY Khoory Group.",
    },
    {
      heading: "Quality and Regulatory Compliance",
      text: "Quality assurance and regulatory compliance are integral to the Trading division’s operations. All products are sourced from reputable, ISO-certified manufacturers and comply with applicable UAE and international standards, including electrical, fire safety, and performance regulations.",
      lastText:
        "Rigorous inspection, documentation, and traceability processes are applied to ensure reliable, safe, and compliant deliveries for every project.",
    },
    {
      heading: "Sustainability and Energy Efficiency",
      text: "While operating as a trading business, M.A.H.Y. Khoory Trading actively supports sustainability objectives by promoting energy-efficient and environmentally responsible products. These include high-efficiency motors, inverter-based HVAC systems, smart pumping solutions, and solar-assisted water heating technologies.",
      lastText:
        "Through these offerings, the division helps customers reduce energy consumption, operating costs, and environmental impact.",
    },
    {
      heading: "Infrastructure and Technical Support",
      text: "The Trading division is supported by extensive infrastructure, including large-scale warehouses, showrooms, spare-parts facilities, and technical support teams. Product specialists and engineers provide system selection guidance, training, and after-sales assistance to ensure optimal system performance.",
      lastText:
        "Digital tools such as e-catalogs, product selection software, and online ordering platforms further enhance service efficiency and customer experience.",
    },
    {
      heading: "Strategic Direction",
      text: "M.A.H.Y. Khoory Trading continues to expand its portfolio and market reach through strategic partnerships, digital enablement, and alignment with emerging technologies.",
      lastText:
        "By leveraging the Group’s global supplier network and strong market presence, the division remains a key driver of commercial growth and long-term value creation within the MAHY Khoory Group.",
    },
  ];
  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="MAHY Khoory Trading"
        texts={[
          "M.A.H.Y. Khoory Trading is the commercial and distribution arm of the MAHY Khoory Group, serving as a key supplier of industrial, electromechanical, and building services equipment across the GCC and selected international markets. The division plays a central role in supporting infrastructure, construction, industrial, and utility sectors through the supply of reliable, high-quality products sourced from leading global manufacturers. With decades of experience in import, distribution, and project supply, M.A.H.Y. Khoory Trading has established itself as a trusted partner for contractors, developers, and institutional clients, delivering both products and technical support at scale.",
        ]}
      />

      <CompanyTextGrid
        heading="Market Experience and Project Support"
        paragraphs={[
          "M.A.H.Y. Khoory Trading has supplied equipment to a wide range of major residential, commercial, industrial, and infrastructure projects across the UAE and the wider region. Its products are widely specified in high-rise towers, mixed-use developments, utilities networks, industrial facilities, hospitality projects, and oil & gas installations.",
        ]}
        image="/MAHY.png"
        rightText="The division works closely with consultants, contractors, and developers from early design stages through delivery, commissioning, and after-sales support. This project-oriented approach ensures technical compatibility, timely execution, and long-term system reliability."
      />

      <SolarPanelQuoteGrid
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773042594/Dubai_business_district_at_night_with_illuminated_skyscrapers.jpg_inqewf.jpg"
        heading="Client Segments"
        text="The Trading division serves a diverse client base that includes"
        // text2="Looking ahead, M.A.H.Y. Khoory & Co. LLC continues to guide the Group with a long-term perspective focused on controlled diversification, geographic expansion, and technology adoption. Ongoing investment in digital initiatives and operational optimization supports the Group’s ambition to remain competitive and resilient in evolving markets."
        items={[
          "Channel Partners",
          "MEP and EPC contractors",
          "Real estate developers",
          "Government and municipal utilities",
          "Industrial and manufacturing operators",
          "Hospitality and commercial facility owners",
        ]}
        quoteText="Its ability to supply multiple product categories under a single commercial platform makes it a preferred partner for large, multi-discipline projects."
        // quoteItems={[
        //   "Controlled Diversification Strategy",
        //   "Geographic Expansion Across Regions",
        //   "Investment in Digital Transformation",
        //   "Focus on Sustainability & Innovation",
        // ]}
      />
      <FeaturesEngineeringSection
        heading="Overview"
        text={
          "M.A.H.Y. Khoory Trading is a GCC-wide procurement and distribution division that delivers compliant, energy-efficient solutions through strong infrastructure, technical support, and global partnerships, driving consistent quality, operational efficiency, and long-term growth across the Group."
        }
        items={overview}
      />
    </main>
  );
}

export default MahyKhooryTradingPage;
