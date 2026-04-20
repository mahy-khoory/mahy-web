import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import CompanyDetailCards from "@/components/UI/companies/detail/CompanyDetailCards";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";

function MahyKhooryGroupPage() {
  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="MAHY Khoory Group"
        texts={[
          "M.A.H.Y. Khoory & Co. LLC is the holding company of the MAHY Khoory Group, a diversified enterprise group headquartered in Dubai with a distinguished heritage dating back to 1930. Over more than nine decades, the Group has grown from a pioneering entrepreneurial venture into a well-established organization with a strong reputation for technical expertise, operational reliability, and long-term value creation across the Middle East and selected international markets.",
        ]}
      />

      <CompanyTextGrid
        heading="About Us"
        paragraphs={[
          "The Group operates through a portfolio of specialized companies active across a broad range of sectors, including water and wastewater pumping systems, electromechanical and power solutions, HVAC and industrial machinery, paper recycling and packaging manufacturing, environmental and waste management services, logistics and warehousing, and hospitality. This diversified portfolio reflects a balanced mix of industrial, commercial, service-oriented, and environmental activities, enabling the Group to serve multiple industries while maintaining focused expertise within each business segment.",
        ]}
        image="/MAHY.png"
        rightText="Headquartered in Dubai, the MAHY Khoory Group maintains a strong operational footprint across the United Arab Emirates, with offices, warehouses, manufacturing facilities, and service centers in Abu Dhabi, Al Ain, Sharjah, and Ras Al Khaimah. Beyond the UAE, the Group serves customers and supports projects in more than 29 countries, spanning the GCC, Africa, and South Asia. This geographic reach allows the Group to combine deep local market knowledge with the capability to support regional and international projects of varying scale and complexity."
      />

      <SolarPanelQuoteGrid
      image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773042594/Dubai_business_district_at_night_with_illuminated_skyscrapers.jpg_inqewf.jpg"
        heading="Infrastructure & Long-Term Vision"
        text="The Group’s extensive infrastructure underpins its ability to operate at scale and deliver consistently across markets. This includes centralized and regional warehouses, advanced manufacturing facilities equipped with automated production systems, specialized workshops, and robust logistics networks."
        text2="Looking ahead, M.A.H.Y. Khoory & Co. LLC continues to guide the Group with a long-term perspective focused on controlled diversification, geographic expansion, and technology adoption. Ongoing investment in digital initiatives and operational optimization supports the Group’s ambition to remain competitive and resilient in evolving markets."
        items={[
          "Centralized & Regional Warehousing",
          "Advanced Automated Manufacturing Facilities",
          "Specialized Workshops & Technical Capabilities",
          "Integrated Logistics & Supply Chain Network",
        ]}
        quoteText="By leveraging its established expertise across pumping systems, electromechanical solutions, recycling, and environmental services, the MAHY Khoory Group is well positioned to deliver sustainable long-term value for customers, partners, and stakeholders."
        quoteItems={[
          "Controlled Diversification Strategy",
          "Geographic Expansion Across Regions",
          "Investment in Digital Transformation",
          "Focus on Sustainability & Innovation",
        ]}
      />
      <CompanyDetailCards
        img1={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        }
        img2={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776677556/corporate-sustainability.jpg_vhc4mz.jpg"
        }
        heading1="Operating Across Industries and Markets"
        text1={[
          "As a holding company, M.A.H.Y. Khoory & Co. LLC provides strategic leadership, governance, and centralized oversight across the Group’s subsidiaries. The holding structure is designed to ensure clarity of ownership, consistency in governance standards, and alignment with the Group’s long-term strategic objectives. While each subsidiary operates as an independent legal entity with responsibility for its day-to-day operations and sector-specific performance, all companies function within a unified framework of governance, values, and performance expectations established at the Group level.",
          "The MAHY Khoory Group employs over 3,100 professionals representing more than 30 nationalities, reflecting a diverse and experienced workforce that supports the Group’s operations across its various sectors and geographies. The Group places strong emphasis on professional development, technical capability, and operational discipline, enabling its companies to deliver reliable solutions and maintain long-standing relationships with customers, partners, and suppliers.",
        ]}
        items1={[
          "Long-term partnerships with leading international manufacturers and technology providers form a core strength of the Group",
        ]}
        heading2={false}
        text2={[
          "Through these relationships, the MAHY Khoory Group represents and distributes globally recognized brands in pumping, electromechanical, HVAC, and industrial systems, ensuring access to proven technologies and high-quality products. ",
        ]}
        items2={[
          "These partnerships enhance the Group’s ability to deliver integrated solutions and support complex projects across infrastructure, industrial, commercial, and environmental applications.",
        ]}
      />
      <CompanyTextOnBackground
        heading="Sustainability and Growth "
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
        align="left"
        text="Sustainability and responsible growth are integral to the Group’s operating philosophy. Recycling, resource recovery, and environmental services form a significant part of the Group’s business portfolio, with manufacturing operations converting waste paper and wood into value-added products and waste management companies supporting circular economy initiatives. Across its businesses, the Group also promotes energy-efficient technologies and systems that help customers reduce environmental impact, operating costs, and resource consumption."
      />
      {/* <ServicesGlobally
        heading="Your Single-Point Solution"
        text="Whether you need a one-time repair, a full system overhaul, or a long-term maintenance partner, our service team delivers reliability, accountability, and technical excellence."
        texts2={[
          "Talk to us today to discuss a service plan or AMC tailored to your building and operational needs.",
        ]}
      /> */}
      {/* <CompanyDetailMenu /> */}
    </main>
  );
}

export default MahyKhooryGroupPage;
