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
    const search = params.search;
    const t = await getTranslations('CompaniesPage');
    const locale = await getLocale();

    const sectorsI = companiesSectors;

    const sectors = [
        { id: 1, label: t("Filter1Label1") },
        { id: 2, label: t("Filter1Label2") },
        { id: 3, label: t("Filter1Label3") },
        { id: 4, label: t("Filter1Label4") },
        { id: 5, label: t("Filter1Label5") },
    ];
    const sizes = [
        { id: 1, label: t("Filter2Label1") },
        { id: 2, label: t("Filter2Label2") },
        { id: 3, label: t("Filter2Label3") },
        { id: 4, label: t("Filter2Label4") },
        { id: 5, label: t("Filter2Label5") },
    ];
    const locations = [
        { id: 1, label: t("Filter3Label1") },
        { id: 2, label: t("Filter3Label2") },
        { id: 3, label: t("Filter3Label3") },
        { id: 4, label: t("Filter3Label4") },
        { id: 5, label: t("Filter3Label5") },
    ];

    const filters = [
        {
            title: t("Filter1"),
            key: "sector",
            options: sectors,
            count: sectors.length.toLocaleString(locale)
        },
        {
            title: t("Filter2"),
            key: "size",
            options: sizes,
            count: sizes.length.toLocaleString(locale)
        },
        {
            title: t("Filter3"),
            key: "location",
            options: locations,
            count: locations.length.toLocaleString(locale)
        },
    ];
    const companies = [
        {
            name: t("Comapny1"),
            image: "/companies/Grundfos.jpg",
            sectorId: 1,
            sizeId: 4,
            locationId: 1,
        },
        {
            name: t("Comapny2"),
            image: "/companies/oventop.jpeg",
            sectorId: 2,
            sizeId: 3,
            locationId: 2,
        },
        {
            name: t("Comapny3"),
            image: "/companies/partners-ariston.jpg",
            sectorId: 3,
            sizeId: 5,
            locationId: 3,
        },
        {
            name: t("Comapny4"),
            image: "/companies/partners-gaia.jpg",
            sectorId: 4,
            sizeId: 2,
            locationId: 4,
        },
    ];

    const getCompanies = () => {
        let filteredCompanies = search
            ? companies.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            )
            : companies;

        const sectorIds = params.sector?.split(",").map(Number) || [];
        const sizeIds = params.size?.split(",").map(Number) || [];
        const locationIds = params.location?.split(",").map(Number) || [];

        return filteredCompanies.filter((company) => {
            if (sectorIds.length && !sectorIds.includes(company.sectorId)) return false;
            if (sizeIds.length && !sizeIds.includes(company.sizeId)) return false;
            if (locationIds.length && !locationIds.includes(company.locationId)) return false;
            return true;
        });
    };

    return (
        <main className='bg-gray-50 pb-14'>
            <PageHeading title={t("Heading")}
                description={t("Description")}
                image={"/gallery/gallery-2.jpg"}
            />
            <Breadcrumb segments={[{ label: t("Page"), href: "/companies" }]} locale={locale} />
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