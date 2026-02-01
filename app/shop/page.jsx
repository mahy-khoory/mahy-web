import Breadcrumb from "@/components/UI/Breadcrumb";
import Filters from "@/components/UI/companies/Filters";
import PageHeading from "@/components/UI/PageHeading";

import FiltersSection from "@/components/UI/shop/FiltersSection";
import Pagination from "@/components/UI/shop/Pagination";
import ProductCard from "@/components/UI/shop/ProductCard";
import StoreProductsInCookies from "@/components/UI/shop/StoreProductsInCookies";
import TopFilter from "@/components/UI/shop/TopFilter";
import { getPartnerNames } from "@/constants/partners";
import products, { getNewProducts, getProducts } from "@/constants/products";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function Shop({ searchParams }) {
    const params = await searchParams;
    const locale = await getLocale();
    const {
        search = "",
        brand,
        category,
        price_min,
        price_max,
        page = 1,
    } = params;

    const t = await getTranslations("ShopPage");

    const topFilters = [
        { key: "ariston", label: "Ariston", text: t("Filter1Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769338670/Picture1_ld0xap.png" },
        { key: "crane", label: "Crane", text: t("Filter2Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769418510/valve_converted_xgfz0v.png" },
        { key: "dewalt", label: "Dewalt Tools", text: t("Filter4Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421634/61oaKFTEUJL._AC_SL1200__awsn9m.png" },
        { key: "franklin", label: "Franklin Motors", text: t("Filter5Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769422322/Picture1_uvoma3.png" },
        { key: "globalWater", label: "Global Water Solutions", text: t("Filter6Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769422636/Picture1_yiezev.png" },
        { key: "grundfos", label: "Grundfos Pumps", text: t("Filter7Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769423150/Picture1_eivc8u.png" },
    ];

    const { items, cookieKey, stored, total, totalPages } = await getNewProducts(brand, Number(page), category, Number(price_min), Number(price_max));

    return (
        <main className="pb-14 pt-16 max-w-350 mx-auto px-4">
            <Breadcrumb segments={[{ label: t("Page"), href: "/shop" }]} locale={locale} maxWidth={false} />
            <TopFilter items={topFilters} locale={locale} topFilter={brand} />
            <div id="list" className="flex flex-col md:flex-row min-h-screen relative mt-4">
                {/* <Filters filters={filters} search={search} /> */}
                <FiltersSection brands={topFilters} />
                <div className="flex-1 overflow-y-auto">
                    <div className="text-sm font-medium text-gray-700">Showing {items.length.toLocaleString(locale)} out of {total} {t("Results")} </div>
                    {/* No Products */}
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20">
                            <p className="text-lg">No products found</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                                {items.map((item, i) => (
                                    <div key={i}>
                                        <ProductCard
                                            title={item.overview}
                                            models={item.models}
                                            price={item.standardPrice}
                                            specs={item.specs}
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
                            <Pagination currentPage={Number(page)} totalPages={totalPages} />
                        </>
                    )}
                </div>
            </div>
            <StoreProductsInCookies cookieKey={cookieKey} stored={stored} />
        </main>
    );
}

export default Shop;
