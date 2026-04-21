import CompaniesSectors from "@/components/CompaniesSectors";
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhyUs from "@/components/UI/home/WhyUs";
import React from "react";

function CleanEarthLLCPage() {
  const tabItems = [
    {
      title: "Mision",
      text: "Clean Earth LLC is a Dubai-based environmental services and recycling company providing professional collection, recovery, and recycling solutions for industrial and commercial waste streams. The company operates with a strong focus on sustainability, environmental responsibility, and regulatory compliance, supporting Dubai’s long-term environmental and circular economy objectives.",
    },
    {
      title: "Vision",
      text: "Clean Earth LLC specializes in the recovery of high-value recyclable materials, helping businesses divert waste from landfills while transforming discarded resources into reusable inputs for recycling and re-processing industries.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Clean Earth LLC"
        texts={[
          "Clean Earth LLC is a Dubai-based environmental services and recycling company providing professional collection, recovery, and recycling solutions for industrial and commercial waste streams. The company operates with a strong focus on sustainability, environmental responsibility, and regulatory compliance, supporting Dubai’s long-term environmental and circular economy objectives.",
          "Clean Earth LLC specializes in the recovery of high-value recyclable materials, helping businesses divert waste from landfills while transforming discarded resources into reusable inputs for recycling and re-processing industries.",
        ]}
      />

     
      <SolarPanelImageGrid
        heading="Core Services and Capabilities"
        subHeading={"Clean Earth LLC"}
        text={
          "Clean Earth LLC offers a focused portfolio of waste collection and recycling services designed to meet the needs of hospitality, industrial, retail, and institutional clients:"
        }
        items={[
          {
            title: "Reusable Industrial Oil Collection",
            text: "Safe collection and recovery of used lubricants and industrial oils for re-refining or approved recycling processes.",
          },
          {
            title: "Used Cooking Oil Collection",
            text: "Scheduled pickup services for hotels, restaurants, catering facilities, and commercial kitchens, ensuring responsible handling and recycling of cooking oils.",
          },
          {
            title: "Metal and Iron Scrap Recovery",
            text: "Collection, segregation, and supply of ferrous and non-ferrous metal scrap to authorized recycling markets.",
          },
          {
            title: "Glass Scrap Collection",
            text: "Handling and transportation of broken and reusable glass for processing into recycled cullet and new glass products.",
          },
        ]}
      />

       <WasteCollectionMenu
        image="/gallery/gallery-1.jpg"
        heading="Values"
        tabs={tabItems.map((item) => item.title)}
        items={tabItems.map((item) => item.text)}
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={"/gallery/gallery-1.jpg"}
          title={"Operations and Compliance"}
          texts={[
            "Clean Earth LLC operates in full alignment with Dubai’s environmental regulations and waste-management standards. All collection and transportation activities are supported by trained logistics personnel and compliant vehicles designed to meet safety and environmental requirements.",
            "The company provides:",
          ]}
          items={[
            "Secure and scheduled waste collection programs",
            "Proper documentation and traceability of collected materials",
            "Environmentally responsible transport and downstream recycling pathways",
          ]}
          text2={
            "This structured approach ensures regulatory compliance while maintaining operational efficiency."
          }
        />
      </section>
      <TrustedAdvisorSection
        heading="Market Focus"
        texts={["Clean Earth LLC serves a diverse client base, including:"]}
        bullets={[
          "Hotels, restaurants, and catering establishments",
          "Industrial and manufacturing facilities",
          "Retail and commercial properties",
          "Educational and institutional organizations",
        ]}
        lastText={
          "By offering customizable collection schedules and tailored recycling solutions, the company supports clients of varying sizes and operational needs."
        }
      />
      <SolarPanelQuoteGrid
        heading="Sustainability and Environmental Impact"
        text="Sustainability is at the core of Clean Earth LLC’s operations. By recovering oils, metals, and glass for reuse and recycling, the company:"
        items={[
          "Diverts valuable materials from landfills",
          "Conserves natural resources",
          "Reduces environmental pollution",
          "Supports circular supply chains",
        ]}
        quoteText="Its services help businesses integrate responsible waste management into daily operations while contributing to Dubai’s broader sustainability and environmental goals."
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={"/gallery/gallery-1.jpg"}
          title={"Strategic Value to Clients"}
          texts={[
            "Through professional operations and strategic recycling partnerships, Clean Earth LLC enables clients to:",
          ]}
          items={[
            "Meet environmental and regulatory requirements",
            "Improve corporate sustainability performance",
            "Reduce waste-handling risks",
            "Demonstrate environmental responsibility to stakeholders",
          ]}
          text2={
            "By combining operational reliability with environmental expertise, Clean Earth LLC acts as a trusted partner for sustainable waste management."
          }
        />
      </section>
    </main>
  );
}

export default CleanEarthLLCPage;
