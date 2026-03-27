import MilestoneTimeline from "./MilestoneTimeline";
import MobileTimeline from "./MobileTimeline";

function TimelineContainer({ title }) {
    const milestones = [
        {
            year: "1929",
            title: "MAHY Khoory was established",
            text: "MAHY Khoory was founded as a trading enterprise and has grown into a diversified UAE-based business group operating across multiple sectors."
        },
        {
            year: "1965",
            title: "Official partner & distributor of Grundfos",
            text: "MAHY Khoory became the UAE distributor for Grundfos, strengthening its capabilities in water pumping and infrastructure solutions."
        },
        {
            year: "1978",
            title: "Official partner & distributor of Lister Petter",
            text: "The partnership expanded the Group's portfolio in diesel engines and power generation solutions."
        },
        {
            year: "1984",
            title: "Al Khoory Engineering established",
            text: "Formed to deliver turnkey pumping and electro-mechanical solutions for infrastructure and building services projects."
        },
        {
            year: "1987",
            title: "Union Paper Mills commenced operations",
            text: "Union Paper Mills recycles waste paper and manufactures corrugated sheets, supporting sustainable packaging and circular economy initiatives."
        },
        {
            year: "1989",
            title: "Emirates International Equipment & Machinery (EIEM) established",
            text: "EIEM supplies pumps, pumping solutions, and water heaters for residential, commercial, and industrial applications."
        },
        {
            year: "1994",
            title: "Official partner & distributor of ESPA",
            text: "MAHY Khoory became the UAE partner and distributor for ESPA, expanding its portfolio of water pumps and pumping solutions."
        },
        {
            year: "1996",
            title: "Greenland Equipment & Machinery established",
            text: "Greenland supplies water pumps, pumping solutions, and HVAC systems for residential, commercial, and industrial projects."
        },
        {
            year: "1998",
            title: "Clean Earth started",
            text: "Clean Earth provides waste management and environmental services, reflecting the Group's sustainability focus."
        },
        {
            year: "2000",
            title: "Greenland Transport established",
            text: "Greenland Transport provides transportation and logistics services exclusively for MAHY Khoory Group companies."
        },
        {
            year: "2001",
            title: "Al Mehwar Alfede General Trading LLC established",
            text: "A specialized trading company focused on pumping systems and mechanical solutions for building services and light industrial projects."
        },
        {
            year: "2004",
            title: "SENAN Industry established",
            text: "SENAN Industry manufactures plastic containers, jerry cans, and industrial packaging products for multiple sectors."
        },
        {
            year: "2008",
            title: "Partnership with Fuji Electric",
            text: "This partnership strengthened the Group's offerings in Variable Frequency Drives (VFDs), motor control, and industrial automation solutions."
        },
        {
            year: "2010",
            title: "Partnership with Kirloskar",
            text: "Expanded the Group's pump and engine solutions for industrial and infrastructure applications."
        },
        {
            year: "2010",
            title: "Al Dhafra Paper Manufacturing established",
            text: "Produces recycled paper products, complementing the Group's paper and packaging operations."
        },
        {
            year: "2012",
            title: "Pearl Marina Hotel Apartments started",
            text: "Marked the Group's expansion into hospitality through serviced hotel apartments, offering premium accommodation and guest services."
        },
        {
            year: "2013",
            title: "Market Restaurant started",
            text: "Marked the Group's entry into the hospitality sector with a focus on quality dining experiences."
        },
        {
            year: "2013",
            title: "Khoory Kitchen started",
            text: "Provides premium kitchen solutions and interior design concepts."
        },
        {
            year: "2016",
            title: "Partnership with Ariston",
            text: "Strengthened the Group's residential product range through water heaters and energy-efficient home solutions."
        },
        {
            year: "2019",
            title: "Union Wood Works established",
            text: "Manufactures compressed wood blocks for industrial, logistics, and packaging applications."
        },
        {
            year: "2019",
            title: "National Paper Industry (NPI) joined the Group",
            text: "A leading corrugated carton manufacturer, reinforcing the Group's packaging leadership."
        },
        {
            year: "2020",
            title: "Partnership with Hisense (HVAC systems)",
            text: "Expanded the Group's HVAC and climate-control solutions portfolio."
        },
        {
            year: "2022",
            title: "Pure Energy established",
            text: "Provides solar panel installation projects for residential, commercial, and industrial customers."
        },
        {
            year: "2023",
            title: "Partnership with DeWalt",
            text: "Focused on heavy-duty tools and accessories for construction and industrial applications."
        },
        {
            year: "2024",
            title: "Pallet Biz started",
            text: "Specializes in pallet manufacturing and logistics support for supply chain operations."
        },
        {
            year: "2024",
            title: "M.A.H.Y. Khoory Automotive established",
            text: "Represents the Group's expansion into automotive sales, distribution, and after-sales services."
        },
        {
            year: "2025",
            title: "Samsung partnership (HVAC solutions)",
            text: "Strengthens the Group's HVAC and building climate solutions portfolio."
        }
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
};

export default TimelineContainer