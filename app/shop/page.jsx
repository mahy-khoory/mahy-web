import Breadcrumb from "@/components/UI/Breadcrumb";
import Filters from "@/components/UI/companies/Filters";
import PageHeading from "@/components/UI/PageHeading";
import ProductCard from "@/components/UI/shop/ProductCard";
import TopFilter from "@/components/UI/shop/TopFilter";
import { getPartnerNames } from "@/constants/partners";
import products, { getProducts, newProducts } from "@/constants/products";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function Shop({ searchParams }) {
    const params = await searchParams;
    const locale = await getLocale();
    const search = params.search;
    const t = await getTranslations("ShopPage");

    const partnerNames = await getPartnerNames();
    const topFilters = [
        { label: t("Filter1"), text: t("Filter1Text") },
        { label: t("Filter2"), text: t("Filter2Text") },
        { label: t("Filter3"), text: t("Filter3Text") },
        { label: t("Filter4"), text: t("Filter4Text") },
        { label: t("Filter5"), text: t("Filter5Text") },
        { label: t("Filter6"), text: t("Filter6Text") },
        { label: t("Filter7"), text: t("Filter7Text") },
        { label: t("Filter8"), text: t("Filter8Text") },
        { label: t("Filter9"), text: t("Filter9Text") }
    ];
    const filters = [
        {
            title: t("Partners"),
            key: "partners",
            options: partnerNames,
            count: partnerNames.length.toLocaleString(locale)
        }
    ];

    const getItems = async () => {
        const partnerIds = params.partners?.split(",").map(Number) || [];
        const p = await getProducts();

        return p.filter(
            (item) => !partnerIds.length || partnerIds.includes(item.partnerId)
        );
    };
    // const items = await getItems();
    const items = newProducts;
    console.log(items);

    return (
        <main className="pb-14">
            <PageHeading
                title={t("Heading")}
                description={t("Description")}
                image={"/gallery/gallery-2.jpg"}
            />
            <Breadcrumb segments={[{ label: t("Page"), href: "/shop" }]} locale={locale} />
            <TopFilter topFilters={topFilters} locale={locale} />
            <div id="list" className="relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20" >
                <Filters filters={filters} search={search} />
                <div className="col-span-8">
                    <div className="text-sm font-medium text-gray-700">{t("Results")} ({items.length.toLocaleString(locale)})</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {items.map((item, i) => (
                            <div key={i}>
                                <ProductCard
                                    title={item.overview}
                                    category={item.category}
                                    models={item.models}
                                    price={item.standardPrice}
                                    image={item.images[0]}
                                    href={`/shop/${item.partNumber}`}
                                    modelHeading={t("Model")}
                                    modelsHeading={t("Models")}
                                    currency={t("Currency")}
                                    buy={t("Buy")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Shop;
