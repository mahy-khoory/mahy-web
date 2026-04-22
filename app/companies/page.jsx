import Filters from "@/components/UI/companies/Filters";
import PageHeading from "@/components/UI/PageHeading";
import List from "@/components/UI/companies/List";
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import { getLocale, getTranslations } from "next-intl/server";
import SectorsSection from "@/components/UI/companies/SectorsSection";
import { companiesSectors } from "@/constants/sectors";

async function Companies({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";
  const t = await getTranslations("CompaniesPage");
  const locale = await getLocale();

  const sectorsI = companiesSectors;

  const sectors = [
    { id: "group", label: "Group" },
    { id: "trading", label: "Trading" },
    { id: "automotive", label: "Automotive" },
    { id: "manufacturing", label: "Manufacturing" },
  ];

  const sizes = [
    { id: "small", label: "Small" },
    { id: "medium", label: "Medium" },
    { id: "large", label: "Large" },
  ];

  const locations = [
    { id: "uae", label: "UAE" },
    { id: "ksa", label: "KSA" },
    { id: "pakistan", label: "Pakistan" },
  ];

  const filters = [
    {
      title: "Sector",
      key: "sector",
      options: sectors,
      count: sectors.length,
    },
    {
      title: "Company Size",
      key: "size",
      options: sizes,
      count: sizes.length,
    },
    {
      title: "Location",
      key: "location",
      options: locations,
      count: locations.length,
    },
  ];

  const companies = [
    {
      name: "MAHY Khoory Group of Companies",
      slug: "mahy-khoory-group",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900951/mahy-comp-removebg-preview_p7rg9d.png",
      sector: "group",
      size: "large",
      location: "uae",
      preview:
        "A diversified conglomerate operating across manufacturing, trading, engineering, logistics, automotive, hospitality, and sustainability sectors.",
    },
    {
      name: "MAHY Khoory Trading",
      slug: "mahy-khoory-trading",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/union-industries_qsyee7.png",
      sector: "trading",
      size: "medium",
      location: "ksa",
      preview:
        "The Group's commercial arm supplying industrial, electromechanical, HVAC, and infrastructure equipment across the GCC.",
    },
    {
      name: "Al Khoory Engineering",
      slug: "al-khoory-engineering",
      image: "/gallery/icon.png",
      sector: "engineering",
      size: "large",
      location: "uae",
      preview:
        "Provides end-to-end engineering, design, and turnkey execution of water and wastewater pumping systems.",
    },
    {
      name: "Union Paper Mills",
      slug: "union-paper-mills",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      sector: "manufacturing",
      size: "large",
      location: "uae",
      preview:
        "Manufactures recycled linerboard and fluting medium from waste paper for sustainable packaging.",
    },
    {
      name: "Al Dhafra Paper Manufacturing",
      slug: "al-dhafra-paper-manufacturing",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901240/al-dfhara-ppr_xvf7ur.png",
      sector: "manufacturing",
      size: "large",
      location: "uae",
      preview:
        "Produces high-quality recycled containerboard for packaging industries.",
    },
    {
      name: "Union Wood Works",
      slug: "union-wood-works",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/unw_jcgehq.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      preview:
        "Produces compressed wood blocks from recycled fibers for industrial applications.",
    },
    {
      name: "Recyclable Waste Management Division",
      slug: "rwmd",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      sector: "waste management",
      size: "large",
      location: "uae",
      preview:
        "Handles large-scale recyclable waste processing supporting circular economy initiatives.",
    },
    {
      name: "Al Dhafra Waste Collection",
      slug: "al-dhafra-waste-collection",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/al-dhafra_uvrwjp.png",
      sector: "waste management",
      size: "medium",
      location: "uae",
      preview:
        "Provides waste collection services across Abu Dhabi supporting recycling supply chains.",
    },
    {
      name: "Around Continent Waste Collection",
      slug: "around-continent-waste-collection",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/green-arabia_vv0jlv.png",
      sector: "waste management",
      size: "medium",
      location: "uae",
      preview:
        "Licensed hazardous waste collection and transport services ensuring compliance.",
    },
    {
      name: "Etihad Waste Management",
      slug: "al-etihad-waste-management-services-llc",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/al-etihad_iml1nr.png",
      sector: "waste management",
      size: "large",
      location: "oman",
      preview:
        "Provides large-scale recyclable waste processing services supporting sustainability goals.",
    },
    {
      name: "Clean Earth LLC",
      slug: "clean-earth-llc",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/clean-earth_ljd0zc.png",
      sector: "clean earth",
      size: "large",
      location: "uae",
      preview:
        "Recycling services for oils, metals, and glass supporting circular economy.",
    },
    {
      name: "Solid Waste Management Division",
      slug: "solid-waste-management-division",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/unionpm_s0fddv.png",
      sector: "waste management",
      size: "small",
      location: "uae",
      preview: "Comprehensive solid waste collection and disposal services.",
    },
    {
      name: "Union Sustainable Packaging Solutions",
      slug: "union-sustainable-packaging",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900738/Union_Sustainable_Packaging_Solutions_jgnr0t.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      preview:
        "Designs eco-friendly packaging solutions using recycled materials.",
    },
    {
      name: "National Paper Industries",
      slug: "national-paper-industry",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901474/npi-logo_yq0h45.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      preview: "Produces corrugated cartons and packaging solutions.",
    },
    {
      name: "Greenland Transport",
      slug: "greenland-general-transport",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/greenland_hyiyra.png",
      sector: "logistics",
      size: "medium",
      location: "uae",
      preview:
        "Provides logistics and transportation services for group operations.",
    },
    {
      name: "Senan Industry LLC",
      slug: "senan-industry",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/senan_uunajv.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      preview: "Manufactures rigid plastic packaging solutions.",
    },
    {
      name: "Pure Energy Construction LLC",
      slug: "pure-energy-construction",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/pure-energy_vk9vu2.png",
      sector: "energy",
      size: "medium",
      location: "uae",
      preview:
        "Provides solar EPC solutions for commercial and industrial clients.",
    },
    {
      name: "Pearl Marina Hotel Apartments",
      slug: "pearl-marina",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900739/pearl-marina_sespkm.png",
      sector: "hospitality",
      size: "medium",
      location: "uae",
      preview: "Upscale serviced apartments in Dubai Marina.",
    },
    {
      name: "Market Restaurant and Café",
      slug: "market-restaurant",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/market-place_wd3u8y.png",
      sector: "hospitality",
      size: "small",
      location: "uae",
      preview: "Contemporary dining restaurant offering international cuisine.",
    },
    {
      name: "MAHY Khoory Motors",
      slug: "mahy-khoory-motors",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
      sector: "automotive",
      size: "large",
      location: "uae",
      preview: "Distributor of OMODA and JAECOO vehicles.",
    },
    {
      name: "MAHY Khoory Automotive",
      slug: "mahy-khoory-automotive",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
      sector: "automotive",
      size: "large",
      location: "uae",
      preview: "Represents Dongfeng vehicles with integrated services.",
    },
    {
      name: "Creative Solutions Green Building Consultancy",
      slug: "creative-solutions",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/creative-solution_pwju0r.png",
      sector: "consultancy",
      size: "medium",
      location: "uae",
      preview:
        "Provides sustainability and green building consultancy services.",
    },
  ];

  const getCompanies = () => {
    let filtered = search
      ? companies.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase()),
        )
      : companies;

    const sectorValues = params.sector?.split(",") || [];
    const sizeValues = params.size?.split(",") || [];
    const locationValues = params.location?.split(",") || [];

    return filtered.filter((company) => {
      if (sectorValues.length && !sectorValues.includes(company.sector))
        return false;
      if (sizeValues.length && !sizeValues.includes(company.size)) return false;
      if (locationValues.length && !locationValues.includes(company.location))
        return false;
      return true;
    });
  };

  return (
    <main className="bg-gray-50 pb-14">
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        image={"/gallery/gallery-2.jpg"}
      />

      <Breadcrumb
        segments={[{ label: t("Page"), href: "/companies" }]}
        locale={locale}
      />

      <div
        id="list"
        className="relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20"
      >
        <Filters filters={filters} search={search} />

        <div className="col-span-8">
          <List companies={getCompanies()} locale={locale} />
        </div>
      </div>

      <SectorsSection sectors={sectorsI} />
    </main>
  );
}

export default Companies;

// import Filters from '@/components/UI/companies/Filters';
// import PageHeading from '@/components/UI/PageHeading';
// import List from '@/components/UI/companies/List';
// import React from 'react'
// import Breadcrumb from '@/components/UI/Breadcrumb';
// import { getLocale, getTranslations } from 'next-intl/server';
// import SectorsSection from '@/components/UI/companies/SectorsSection';
// import { companiesSectors } from '@/constants/sectors';

// async function Companies({ searchParams }) {
//     const params = await searchParams;
//     const search = params.search;
//     const t = await getTranslations('CompaniesPage');
//     const locale = await getLocale();

//     const sectorsI = companiesSectors;

//     const sectors = [
//         { id: 1, label: t("Filter1Label1") },
//         { id: 2, label: t("Filter1Label2") },
//         { id: 3, label: t("Filter1Label3") },
//         { id: 4, label: t("Filter1Label4") },
//         { id: 5, label: t("Filter1Label5") },
//     ];
//     const sizes = [
//         { id: 1, label: t("Filter2Label1") },
//         { id: 2, label: t("Filter2Label2") },
//         { id: 3, label: t("Filter2Label3") },
//         { id: 4, label: t("Filter2Label4") },
//         { id: 5, label: t("Filter2Label5") },
//     ];
//     const locations = [
//         { id: 1, label: t("Filter3Label1") },
//         { id: 2, label: t("Filter3Label2") },
//         { id: 3, label: t("Filter3Label3") },
//         { id: 4, label: t("Filter3Label4") },
//         { id: 5, label: t("Filter3Label5") },
//     ];

//     const filters = [
//         {
//             title: t("Filter1"),
//             key: "sector",
//             options: sectors,
//             count: sectors.length.toLocaleString(locale)
//         },
//         {
//             title: t("Filter2"),
//             key: "size",
//             options: sizes,
//             count: sizes.length.toLocaleString(locale)
//         },
//         {
//             title: t("Filter3"),
//             key: "location",
//             options: locations,
//             count: locations.length.toLocaleString(locale)
//         },
//     ];
//     const companies = [
//         {
//             name: "MAHY Khoory Group",
//             image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/union-industries_qsyee7.png",
//             sectorId: 1,
//             sizeId: 4,
//             locationId: 1,
//         },
//         {
//             name: "MAHY Khoory Trading",
//             image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/union-industries_qsyee7.png",
//             sectorId: 2,
//             sizeId: 3,
//             locationId: 2,
//         },
//         {
//             name: "MAHY Khoory Automotive",
//             image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
//             sectorId: 3,
//             sizeId: 5,
//             locationId: 3,
//         },
//         {
//             name: "National Paper Industry ",
//             image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901474/npi-logo_yq0h45.png",
//             sectorId: 4,
//             sizeId: 2,
//             locationId: 4,
//         },
//     ];

//     const getCompanies = () => {
//         let filteredCompanies = search
//             ? companies.filter(c =>
//                 c.name.toLowerCase().includes(search.toLowerCase())
//             )
//             : companies;

//         const sectorIds = params.sector?.split(",").map(Number) || [];
//         const sizeIds = params.size?.split(",").map(Number) || [];
//         const locationIds = params.location?.split(",").map(Number) || [];

//         return filteredCompanies.filter((company) => {
//             if (sectorIds.length && !sectorIds.includes(company.sectorId)) return false;
//             if (sizeIds.length && !sizeIds.includes(company.sizeId)) return false;
//             if (locationIds.length && !locationIds.includes(company.locationId)) return false;
//             return true;
//         });
//     };

//     return (
//         <main className='bg-gray-50 pb-14'>
//             <PageHeading title={t("Heading")}
//                 description={t("Description")}
//                 image={"/gallery/gallery-2.jpg"}
//             />
//             <Breadcrumb segments={[{ label: t("Page"), href: "/companies" }]} locale={locale} />
//             <div id='list' className='relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20'>
//                 <Filters filters={filters} search={search} />
//                 <div className="col-span-8">
//                     <List companies={getCompanies()} locale={locale} />
//                 </div>
//             </div>
//             <SectorsSection sectors={sectorsI} />
//         </main>
//     )
// }

// export default Companies
