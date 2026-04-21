import Filters from '@/components/UI/companies/Filters';
import PageHeading from '@/components/UI/PageHeading';
import List from '@/components/UI/companies/List';
import React from 'react'
import Breadcrumb from '@/components/UI/Breadcrumb';
import { getLocale, getTranslations } from 'next-intl/server';
import SectorsSection from '@/components/UI/companies/SectorsSection';
import { companiesSectors } from '@/constants/sectors';

async function Companies({ searchParams }) {
    const params = await searchParams;
    const search = params.search || "";
    const t = await getTranslations('CompaniesPage');
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
            count: sectors.length
        },
        {
            title: "Company Size",
            key: "size",
            options: sizes,
            count: sizes.length
        },
        {
            title: "Location",
            key: "location",
            options: locations,
            count: locations.length
        },
    ];

    const companies = [
        {
            name: "MAHY Khoory Group",
            slug: "mahy-khoory-group",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/union-industries_qsyee7.png",
            sector: "group",
            size: "large",
            location: "uae",
        },
        {
            name: "MAHY Khoory Trading",
            slug: "trading",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900740/union-industries_qsyee7.png",
            sector: "trading",
            size: "medium",
            location: "ksa",
        },
        {
            name: "MAHY Khoory Automotive",
            slug: "automotive",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
            sector: "automotive",
            size: "large",
            location: "uae",
        },
        {
            name: "Clean Earth LLC",
            slug: "clean-earth-llc",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774900741/MKA_wwor7m.png",
            sector: "clean earth",
            size: "large",
            location: "uae",
        },
        {
            name: "Solid Waste Management Division",
            slug: "solid-waste-management-division",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901474/npi-logo_yq0h45.png",
            sector: "waste management",
            size: "small",
            location: "uae",
        },
        {
            name: "National Paper Industry",
            slug: "national-paper-industry",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774901474/npi-logo_yq0h45.png",
            sector: "manufacturing",
            size: "small",
            location: "pakistan",
        },
    ];

    const getCompanies = () => {
        let filtered = search
            ? companies.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            )
            : companies;

        const sectorValues = params.sector?.split(",") || [];
        const sizeValues = params.size?.split(",") || [];
        const locationValues = params.location?.split(",") || [];

        return filtered.filter(company => {
            if (sectorValues.length && !sectorValues.includes(company.sector)) return false;
            if (sizeValues.length && !sizeValues.includes(company.size)) return false;
            if (locationValues.length && !locationValues.includes(company.location)) return false;
            return true;
        });
    };

    return (
        <main className='bg-gray-50 pb-14'>
            <PageHeading
                title={t("Heading")}
                description={t("Description")}
                image={"/gallery/gallery-2.jpg"}
            />

            <Breadcrumb
                segments={[{ label: t("Page"), href: "/companies" }]}
                locale={locale}
            />

            <div id='list' className='relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20'>
                <Filters filters={filters} search={search} />

                <div className="col-span-8">
                    <List companies={getCompanies()} locale={locale} />
                </div>
            </div>

            <SectorsSection sectors={sectorsI} />
        </main>
    )
}

export default Companies
























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