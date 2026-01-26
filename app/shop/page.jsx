import Breadcrumb from "@/components/UI/Breadcrumb";
import Filters from "@/components/UI/companies/Filters";
import PageHeading from "@/components/UI/PageHeading";
import ProductCard from "@/components/UI/shop/ProductCard";
import TopFilter from "@/components/UI/shop/TopFilter";
import { getPartnerNames } from "@/constants/partners";
import products, { getNewProducts, getProducts } from "@/constants/products";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function Shop({ searchParams }) {
    const params = await searchParams;
    const locale = await getLocale();
    const search = params.search;
    const topFilter = params.brand || "ariston";
    const t = await getTranslations("ShopPage");

    const partnerNames = await getPartnerNames();
    const topFilters = [
        { key: "ariston", label: "Ariston", text: t("Filter1Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769338670/Picture1_ld0xap.png" },
        { key: "craneVijay", label: "Crane Vijay", text: t("Filter2Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769418510/valve_converted_xgfz0v.png" },
        { key: "craneFarah", label: "Crane Farah", text: t("Filter3Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769420943/Picture1_b8bwbg.png" },
        { key: "dewalt", label: "Dewalt Tools", text: t("Filter4Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421634/61oaKFTEUJL._AC_SL1200__awsn9m.png" },
        { key: "franklin", label: "Franklin Motors", text: t("Filter5Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769422322/Picture1_uvoma3.png" },
        { key: "globalWater", label: "Global Water Solutions", text: t("Filter6Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769422636/Picture1_yiezev.png" },
        { key: "grundfos", label: "Grundfos Pumps", text: t("Filter7Text"), image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769423150/Picture1_eivc8u.png" },
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
    const items = getNewProducts(topFilter);

    return (
        <main className="pb-14">
            <PageHeading
                title={t("Heading")}
                description={t("Description")}
                image={"/gallery/gallery-2.jpg"}
            />
            <Breadcrumb segments={[{ label: t("Page"), href: "/shop" }]} locale={locale} />
            <TopFilter items={topFilters} locale={locale} topFilter={topFilter} />
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
