import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import CompanyStructure from "@/components/UI/about-us/CompanyStructure";
import ManufacturingNetworkSection from "@/components/UI/about-us/ManufacturingNetworkSection";
import AnimatedLines from "@/components/UI/AnimatedLines";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";
import SubPageHeadingNoOverlayImage from "@/components/UI/SubPageHeadingNoOverlayImage";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function companyProfile() {
  const locale = await getLocale();
  const t = await getTranslations("AboutUsPage");

  const network = {
    text: [t("Network.Text1"), t("Network.Text2")],
    stats: [t("Network.Stat1"), t("Network.Stat2"), t("Network.Stat3")],
    statsNo: [
      (300000).toLocaleString(locale),
      (60).toLocaleString(locale),
      (1200).toLocaleString(locale),
    ],
    map: [t("Network.Map1"), t("Network.Map2"), t("Network.Map3")],
    locations: [
      t("Network.Location1"),
      t("Network.Location2"),
      t("Network.Location3"),
      t("Network.Location4"),
      t("Network.Location5"),
    ],
  };

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

  const companies = [
    {
      name: "MAHY Khoory Group of Companies",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900951/mahy-comp-removebg-preview_p7rg9d.png",
      preview:
        "A diversified conglomerate operating across manufacturing, trading, engineering, logistics, automotive, hospitality, and sustainability & Waste Management sectors.",
    },
    {
      name: "MAHY Khoory Trading",
      logo: "/gallery/icon.png",
      preview:
        "The Group's commercial arm supplying industrial, electromechanical, HVAC, and infrastructure equipment across the GCC.",
    },
    {
      name: "Al Khoory Engineering",
      logo: "/gallery/icon.png",
      preview:
        "Provides end-to-end engineering, design, and turnkey execution of water and wastewater pumping systems for infrastructure, industrial, and high-rise developments across the UAE.",
    },
    {
      name: "Union Paper Mills",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      preview:
        "Manufactures high-quality recycled linerboard and fluting medium by converting waste paper into sustainable packaging materials for the regional corrugated industry.",
    },
    {
      name: "Al Dhafra Paper Manufacturing",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901240/al-dfhara-ppr_xvf7ur.png",
      preview:
        "Manufactures 100% recycled containerboard in Abu Dhabi, producing high-quality Testliner and Fluting Medium for the regional packaging industry.",
    },
    {
      name: "Union Wood Works",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/unw_jcgehq.png",
      preview:
        "Manufactures high-performance compressed wood blocks from 100% recycled wood fibers, providing sustainable alternatives to solid timber for industrial and construction applications.",
    },
    {
      name: "Recyclable Waste Management Division",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      preview:
        "Manages large-scale collection and processing of recyclable waste in Dubai, supplying recovered fibre to the Group’s paper manufacturing facilities to support its circular economy model.",
    },
    {
      name: "Al Dhafra Waste Collection",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/al-dhafra_uvrwjp.png",
      preview:
        "Provides recyclable waste collection services across Abu Dhabi, supplying recovered materials to the Group’s paper mills to support its integrated recycling ecosystem.",
    },
    {
      name: "Around Continent Waste Collection",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/green-arabia_vv0jlv.png",
      preview:
        "Provides licensed hazardous waste collection and transportation services across the UAE, ensuring safe and fully compliant handling of regulated industrial waste materials.",
    },
    {
      name: "Etihad Waste Management",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/al-etihad_iml1nr.png",
      preview:
        "Provides large-scale recyclable waste collection and processing services across Oman, supporting national sustainability goals and circular economy initiatives.",
    },
    {
      name: "Clean Earth LLC",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/clean-earth_ljd0zc.png",
      preview:
        "Provides professional collection and recycling of used oils, metals, and glass in Dubai, helping businesses divert waste from landfill and support circular economy practices.",
    },
    {
      name: "Solid Waste Management Division",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      preview:
        "Provides comprehensive solid waste collection, transportation, and regulated disposal services across Dubai, supporting municipal, commercial, and industrial waste management needs.",
    },
    {
      name: "Union Sustainable Packaging Solutions",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/Union_Sustainable_Packaging_Solutions_jgnr0t.png",
      preview:
        "Designs and manufactures eco-friendly corrugated and paper-based packaging solutions using recycled materials to support sustainable and circular supply chains.",
    },
    {
      name: "National Paper Industries",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901474/npi-logo_yq0h45.png",
      preview:
        "Manufactures customized corrugated cartons and packaging solutions in the UAE, supporting diverse industries through integrated design, printing, and high-quality production capabilities.",
    },
    {
      name: "Greenland Transport",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/greenland_hyiyra.png",
      preview:
        "Provides in-house logistics and transportation services across the UAE, ensuring efficient movement of goods, equipment, and personnel for the Group’s diverse operations.",
    },
    {
      name: "Senan Industry LLC",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/senan_uunajv.png",
      preview:
        "Manufactures rigid plastic packaging, including jerrycans, bottles, and industrial containers, with integrated in-house cap production for automotive, chemical, and food industries.",
    },
    {
      name: "Pure Energy Construction LLC",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/pure-energy_vk9vu2.png",
      preview:
        "Provides end-to-end renewable energy EPC services, specializing in the design and installation of solar photovoltaic systems for commercial and industrial clients across the UAE.",
    },
    {
      name: "Pearl Marina Hotel Apartments",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/pearl-marina_sespkm.png",
      preview:
        "Operates upscale serviced hotel apartments in Dubai Marina, offering fully furnished accommodation with premium amenities for business and leisure travelers.",
    },
    {
      name: "Market Restaurant and Café",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/market-place_wd3u8y.png",
      preview:
        "Operates a contemporary all-day dining restaurant in Dubai Marina, offering international cuisine and catering services for hotel guests, residents, and corporate clients.",
    },
    {
      name: "MAHY Khoory Motors",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
      preview:
        "Serves as the exclusive Abu Dhabi distributor for OMODA and JAECOO vehicles, delivering advanced hybrid and electric mobility solutions with integrated sales and after-sales services.",
    },
    {
      name: "MAHY Khoory Automotive",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
      preview:
        "Represents Dongfeng vehicles in the UAE, offering technologically advanced sedans and SUVs supported by integrated sales, service, and customer support operations.",
    },
    {
      name: "Creative Solutions Green Building Consultancy",
      logo: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/creative-solution_pwju0r.png",
      preview:
        "Provides green-building and sustainability consultancy services, supporting energy-efficient design and certification compliance for commercial, industrial, and infrastructure projects across the UAE.",
    },
  ];

  return (
    <>
      <SubPageHeadingNoOverlayImage
        image={"/profile/profile-bg.jpg"}
        image2={"/profile/profile-bg-2.jpg"}
        height="h-screen"
      />
      <WhoWeAre image={"/gallery/gallery-2.jpg"} />
      {/* <div className="text-center px-4 bg-black p-20">
        <AnimatedLines bg="bg-gray-200" />
        <p className="text-heading text-2xl sm:text-1xl font-semibold text-gray-100">
          MAHY Khoory Group brings together decades of experience, deep sector
          knowledge, and strong operational capabilities across a diversified
          portfolio of businesses. Our expertise has been built over time
          through disciplined growth, long-term partnerships, and consistent
          execution across industrial, commercial, environmental, and service
          sectors.”
        </p>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28 text-center bg-black">
        {/* Decorative divider */}
        <div className="flex justify-center mb-8">
          <AnimatedLines bg="bg-gray-300" />
        </div>

        {/* Statement */}
        <p
          className="
      text-gray-100
      font-medium
      leading-relaxed
      tracking-wide
      max-w-4xl
      mx-auto
      text-lg
      sm:text-xl
      lg:text-2xl
    "
        >
          MAHY Khoory Group brings together decades of experience, deep sector
          knowledge, and strong operational capabilities across a diversified
          portfolio of businesses. Our expertise has been built over time
          through disciplined growth, long-term partnerships, and consistent
          execution across industrial, commercial, environmental, and service
          sectors.
        </p>
      </div>

      <CompanyStructure
        data={structure}
        textClasses="variant2"
        bg="bg-gray-50"
        bgHover="hove:bg-gray-50"
        collape={false}
      />

      <ManufacturingNetworkSection network={network} locale={locale} />

      <div className="text-center px-4 bg-black p-20">
        <AnimatedLines bg="bg-gray-200" />
        <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-gray-100">
          What Defines The Group
        </h2>
      </div>
      <SustainabilityPanels items={sustainability} cols={4} />
      <GroupCompaniesGrid companies={companies} />

      {/* <EnterprisePinnedContainer /> */}
    </>
  );
};

export default companyProfile;
