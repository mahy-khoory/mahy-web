import KitchenItems from "@/components/Services/Kitchen/KitchenItems";
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhyUs from "@/components/UI/home/WhyUs";

function SolidWasteManagementDivision() {
  const tabItems = [
    {
      title: "Wood Waste Processing",
      text: "SWMD processes about 300 tons of wood and green waste daily, converting it into biomass fuel for waste-to-energy plants, including a Dubai Municipality landfill operation. It also supplies wood chips for internal use and to industrial customers, positioning itself as a reliable, large-scale supplier.",
    },
    {
      title: "Solid Waste Processing & Resource Recovery",
      text: "The division processes Pulper Reject, recovering pulp and converting non recoverable waste into RDF using advanced separation and granulation systems. SWMD also supports external industrial clients such as UPIC, positioning the division as a regional pioneer in pulper reject processing and recovery solutions.",
    },
    {
      title: "Integrated Industrial Operations",
      text: "SWMD operates one of the UAE’s few integrated in-house industrial wastes processing platforms, converting 100% of internal process waste into reusable and revenue-generating resources while supporting municipal sustainability programs and external clients.",
    },
  ];

  const applications = [
    {
      title: "Sustainability Commitment",
      text: "By diverting around 300 tons of wood waste daily from landfill, SWMD supports Dubai Municipality’s zero-waste vision while providing sustainable, cost-effective solutions to waste generators across the UAE.It promotes source segregation to separate recyclable and non-recyclable wood, maximizing material value and reducing disposal volumes, costs, and environmental impact.",
    },
    {
      title: "Infrastructure, Operations & Availability",
      text: "SWMD operates from strategically located facilities across Dubai, including Al Quoz and key industrial zones, enabling efficient logistics, rapid response, and reliable service delivery. Operating 24/7, it provides flexible receiving and processing windows, allowing transporters and generators to optimize fleet use, reduce waiting times, and improve overall logistics efficiency.",
    },
    {
      title: "Strategic Partnerships",
      text: "SWMD works closely with Dubai Municipality and relevant regulatory authorities to ensure alignment with evolving waste management policies, sustainability targets, and environmental compliance requirements. The division actively supports pilot initiatives focused on waste reduction, recycling optimization, and waste-to-energy programs.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Solid Waste Management Division (SWMD)"
        texts={[
          "The Solid Waste Management Division (SWMD) of the MAHY Khoory Group delivers integrated, sustainable industrial waste management solutions across the UAE. Through advanced processing systems, disciplined operations, and full regulatory compliance, SWMD converts waste into valuable resources—supporting circular economy objectives, reducing landfill dependency, and generating measurable environmental and commercial value.",
          "Originally established to eliminate landfill disposal and permit dependency for in-house waste, SWMD has achieved 100% internal waste recovery and today operates as a self-sustaining, revenue-generating division, serving internal operations as well as external industrial and municipal clients.",
        ]}
      />
      <TrustedAdvisorSection
        heading="Our Role"
        texts={[
          "SWMD is a trusted partner in sustainable industrial waste management, delivering integrated solutions across wood waste recovery, biomass fuel preparation, pulper reject recovery, RDF production, and industrial solid waste processing.",
          "Through innovation, skilled manpower, and environmentally responsible practices, SWMD plays a vital role in enhancing resource efficiency and supporting the UAE’s long-term sustainability vision.",
        ]}
      />
      <KitchenItems image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776795430/nice-fountain-with-leafy-trees-background_mhludz.jpg" title="Applications" items={applications} />
      <WasteCollectionMenu
        heading="Core Operations"
        tabs={tabItems.map((item) => item.title)}
        items={tabItems.map((item) => featuresElement({ item }))}
      />
    </main>
  );
}

export default SolidWasteManagementDivision;

const featuresElement = ({ item }) => (
  <div className="text-gray-700 text-sm space-y-4">
    <p>{item.text}</p>
    <p className="">{item.endText}</p>
  </div>
);

const ApplicationElement = ({ items }) => (
  <div className="text-gray-700 space-y-2">
    {items.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);
