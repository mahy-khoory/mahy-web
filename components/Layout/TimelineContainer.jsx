import MilestoneTimeline from "./MilestoneTimeline";
import MobileTimeline from "./MobileTimeline";

function TimelineContainer({ title }) {
  const milestones = [
    {
      year: "1929",
      title: "MAHY Khoory was established",
      text: "MAHY Khoory was founded as a trading enterprise and has grown into a diversified UAE-based business group operating across multiple sectors.",
    },
    {
      year: "1965",
      title:
        "Authorized Partner in Danish Origin Pumping TechnologiesOfficial partner & distributor of Grundfos",
      text: "MAHY Khoory became the UAE’s official distributor for a leading Danish origin manufacturer of water pumping technology, further strengthening its capabilities in delivering high performance pumping and infrastructure solutions.",
    },
    {
      year: "1978",
      title:
        "Official Partner & Distributor of a British Origin Engine Manufacturer",
      text: "As the authorized partner and distributor of a renowned British origin producer of diesel engines, the Group expanded its portfolio in robust diesel engine technology and dependable power generation solutions.",
    },
    {
      year: "1984",
      title: "Al Khoory Engineering established",
      text: "Formed to deliver turnkey pumping and electro-mechanical solutions for infrastructure and building services projects.",
    },
    {
      year: "1987",
      title: "Union Paper Mills commenced operations",
      text: "Union Paper Mills recycles waste paper and manufactures corrugated sheets, supporting sustainable packaging and circular economy initiatives.",
    },
    // {
    //   year: "1989",
    //   title: "Emirates International Equipment & Machinery (EIEM) established",
    //   text: "EIEM supplies pumps, pumping solutions, and water heaters for residential, commercial, and industrial applications.",
    // },
    {
      year: "1994",
      title:
        "Official Partner & Distributor of a Spanish Origin Water Pumping Manufacturer",
      text: "MAHY Khoory became the UAE partner and distributor for a well established Spanish origin producer of water pumping technologies, expanding its portfolio of advanced water pumps and comprehensive pumping solutions.",
    },
    // {
    //   year: "1996",
    //   title: "Greenland Equipment & Machinery established",
    //   text: "Greenland supplies water pumps, pumping solutions, and HVAC systems for residential, commercial, and industrial projects.",
    // },
    {
      year: "1998",
      title: "Clean Earth started",
      text: "Clean Earth provides waste management and environmental services, reflecting the Group's sustainability focus.",
    },
    {
      year: "2000",
      title: "Greenland Transport established",
      text: "Greenland Transport provides transportation and logistics services exclusively for MAHY Khoory Group companies.",
    },
    // {
    //   year: "2001",
    //   title: "Al Mehwar Alfede General Trading LLC established",
    //   text: "A specialized trading company focused on pumping systems and mechanical solutions for building services and light industrial projects.",
    // },
    {
      year: "2004",
      title: "SENAN Industry established",
      text: "SENAN Industry manufactures plastic containers, jerry cans, and industrial packaging products for multiple sectors.",
    },
    {
      year: "2008",
      title:
        "Strategic Partnership in Industrial Automation & Drive Technologies",
      text: "This collaboration enhanced the Group’s capabilities in Variable Frequency Drives (VFDs), motor control systems, and broader industrial automation solutions, strengthening its ability to support complex operational and energy efficient applications. ",
    },
    {
      year: "2010",
      title: "Partnership with an Indian Origin Engineering Manufacturer",
      text: "Through its collaboration with a well established Indian origin producer of pumps and engines, the Group broadened its range of pumping and engine solutions, enhancing its capabilities for industrial and large scale infrastructure applications.",
    },
    {
      year: "2010",
      title: "Al Dhafra Paper Manufacturing established",
      text: "Produces recycled paper products, complementing the Group's paper and packaging operations.",
    },
    {
      year: "2012",
      title: "Pearl Marina Hotel Apartments started",
      text: "Marked the Group's expansion into hospitality through serviced hotel apartments, offering premium accommodation and guest services.",
    },
    {
      year: "2013",
      title: "Market Restaurant started",
      text: "Marked the Group's entry into the hospitality sector with a focus on quality dining experiences.",
    },
    {
      year: "2013",
      title: "Khoory Kitchen started",
      text: "Provides premium kitchen solutions and interior design concepts.",
    },
    {
      year: "2016",
      title: "Partnership in Home Heating & Energy Efficient Solutions",
      text: "The collaboration enhanced the Group’s residential product portfolio by introducing advanced water heating systems and energy efficient home comfort solutions.",
    },
    {
      year: "2019",
      title: "Union Wood Works established",
      text: "Manufactures compressed wood blocks for industrial, logistics, and packaging applications.",
    },
    {
      year: "2019",
      title: "National Paper Industry (NPI) joined the Group",
      text: "A leading corrugated carton manufacturer, reinforcing the Group's packaging leadership.",
    },
    {
      year: "2020",
      title: "Integration of Advanced HVAC Technologies from China",
      text: "The Group has enhanced its HVAC portfolio by integrating advanced systems developed by leading manufacturers in China. This integration has improved the efficiency, reliability, and scalability of its climate-control solutions across residential, commercial, and industrial sectors.",
    },
    {
      year: "2022",
      title: "Pure Energy established",
      text: "Provides solar panel installation projects for residential, commercial, and industrial customers.",
    },
    {
      year: "2023",
      title: "Partnership in Professional Tools & Industrial Equipment",
      text: "The collaboration focused on expanding the Group’s range of heavy duty tools and accessories designed for demanding construction and industrial environments, enhancing its ability to support high performance project needs.",
    },
    {
      year: "2024",
      title: "Pallet Biz started",
      text: "Specializes in pallet manufacturing and logistics support for supply chain operations.",
    },
    {
      year: "2024",
      title: "M.A.H.Y. Khoory Automotive established",
      text: "Represents the Group's expansion into automotive sales, distribution, and after-sales services.",
    },
    {
      year: "2025",
      title: "Integration of Advanced HVAC Technologies from South Korea",
      text: "The Group has strengthened its HVAC capabilities through the incorporation of innovative systems developed by leading manufacturers in South Korea. This has enabled the delivery of high-performance, energy-efficient climate-control solutions suited to a wide range of residential, commercial, and industrial applications.",
    },
  ];

  return (
    <section>
      <div className="md:hidden">
        <MobileTimeline title={title} items={milestones} accent={"#2c3f6e"} />
      </div>
      <div className="hidden md:block">
        <MilestoneTimeline title={title} milestones={milestones} />
      </div>
    </section>
  );
}

export default TimelineContainer;
