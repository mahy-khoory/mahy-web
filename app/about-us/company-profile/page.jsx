import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import CompanyStructure from "@/components/UI/about-us/CompanyStructure";
import AnimatedLines from "@/components/UI/AnimatedLines";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

const companyProfile = () => {
  const sustainability = [
    {
      title: "Diversification with depth",
      image: "/al-quba.jpg",
      bullets: [
        "A balanced mix of commercial",
        "industrial",
        "manufacturing",
        "service businesses",
      ],
    },
    {
      title: "Engineering & technical capability",
      image: "/burj.jpg",
      description: "Strong in-house expertise supporting complex projects",
    },
    {
      title: "Sustainability focus",
      image: "/mosque.JPG",
      bullets: [
        "Active participation in recycling",
        "renewable energy",
        "circular economy initiatives",
      ],
    },
    {
      title: "Operational reliability",
      image: "/dubai-pano.jpg",
      description:
        "Long-standing partnerships and proven execution track record",
    },
  ];

  const structure = {
    heading: "MAHY Khoory",
    company:
      "The Group operates through a network of specialized subsidiaries and divisions, each focused on a defined business activity, while benefiting from centralized governance, shared infrastructure, and group-wide management standards. This structure enables efficiency, accountability, and consistency across all operations.",
    items: [
      {
        title: "25+",
        subTitle: "Companies & Operating divisions",
        text: "",
      },
      {
        title: "Facilities",
        subTitle: "Manufacturing & Industrial",
        text: "",
      },

      {
        title: "Trading",
        subTitle: "Global sourcing & distribution",
        text: "",
      },
      {
        title: "Engineering",
        subTitle: "Integrated technical solutions",
        text: "",
      },
      {
        title: "Servicing",
        subTitle: "Lifecycle support & maintenance",
        text: "",
      },
      {
        title: "Regions",
        subTitle: "All Across UAE & OMAN",
        text: "",
      },
    ],
  };
  return (
    <>
      <SubPageHeading
        title={"Company Profile"}
        description={
          "MAHY Khoory Group brings together decades of experience, deep sector knowledge, and strong operational capabilities across a diversified portfolio of businesses. Our expertise has been built over time through disciplined growth, long-term partnerships, and consistent execution across industrial, commercial, environmental, and service sectors."
        }
        // description2={
        //   "The Group's capabilities are anchored in physical assets, skilled teams, and integrated operations that allow us to deliver reliable solutions at scale, while maintaining high standards of governance, safety, and performance."
        // }
        image={"/profile/bg.jpg"}
        height="h-screen"
      />
      <WhoWeAre />
      <div className="text-center px-4 bg-black p-20">
        <AnimatedLines bg="bg-gray-200" />
        <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-gray-100">
          Sales & Structure
        </h2>
      </div>

      <CompanyStructure data={structure} />

      <div className="text-center px-4 bg-black p-20">
        <AnimatedLines bg="bg-gray-200" />
        <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-gray-100">
          What Defines The Group
        </h2>
      </div>
      <SustainabilityPanels items={sustainability} cols={4} />

      {/* <EnterprisePinnedContainer /> */}
    </>
  );
};

export default companyProfile;
