import TrustedBusinessAdvisor from "@/components/Services/TrustedAdvisorTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

function WhyJoinUsPage() {
  const items = [
    {
      label: "Diversified & Stable Organization",
      text: "Joining MAHY Khoory Group means becoming part of a diversified, multi-sector organization with a strong legacy of stability and long-term vision. Operating across manufacturing, trading, engineering, logistics, waste management, automotive, hospitality, and other industries, we offer professionals the opportunity to build a versatile career within one integrated group structure. Exposure to multiple sectors enhances experience, knowledge, and long-term career mobility.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793273/2_utqc1w.jpg",
    },
    {
      label: "Structured Growth & Mobility",
      text: "We maintain a performance-driven environment with clear roles, measurable objectives, and strong governance standards. Career progression is supported through internal mobility across subsidiaries, allowing high-performing individuals to expand responsibilities, move into leadership roles, or transition across sectors based on capability and business needs.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793271/3_o8wyre.jpg",
    },
    {
      label: "Technology & Competitive Benefits",
      text: "We continuously invest in digital transformation, ERP integration, and process optimization, ensuring employees work within structured and technology-enabled systems. In addition to professional growth, we offer competitive compensation, medical insurance, annual leave in accordance with UAE labor law, and performance-based incentives where applicable.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793270/4_ggufvf.jpg",
    },
  ];

  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Why Join Us"}
        image={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793181/1_vtulol.jpg"
        }
      />
      <TrustedBusinessAdvisor
        items={items}
        endText={
          "At MAHY Khoory Group, you become part of a professional, disciplined, and forward-looking organization committed to long-term success."
        }
      />
    </main>
  );
}

export default WhyJoinUsPage;
