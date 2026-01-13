import MoreProducts from '@/components/UI/shop/MoreProducts';
import Product from '@/components/UI/shop/Product';
import Specs from '@/components/UI/shop/Specs';
import { getProduct, getProducts } from '@/constants/products';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

async function ProductPage({ params, searchParams }) {
    const { id } = await params;
    const { model } = await searchParams;

    const t = await getTranslations('ShopPage');
    const product = await getProduct(id);
    if (!product) notFound();
    const moreProducts = await getProducts();
    const locale = await getLocale();

    const productDetail = { text: t("Text"), text1: t("Text1"), text2: t("Text2"), text3: t("Text3") };
    const tabs = [t("Category1"), t("Category2")];
    const specs = [
        { title: t("Category1Item1Title"), text: t("Category1Item1Text") },
        { title: t("Category1Item2Title"), text: t("Category1Item2Text") },
        { title: t("Category1Item3Title"), text: t("Category1Item3Text") },
        { title: t("Category1Item4Title"), text: t("Category1Item4Text") },
        { title: t("Category1Item5Title"), text: t("Category1Item5Text") },
    ];
    const support = [
        { title: t("Category2Item1Title"), text: t("Category2Item1Text"), link: "/" },
        { title: t("Category2Item2Title"), text: t("Category2Item2Text"), link: "/" }
    ];
    return (
        <main className='max-w-6xl mx-auto pt-22 pb-15 '>
            <Product product={product} model={model} locale={locale} currency={t("Currency")} addToCart={t("AddToCart")} company={t("Company")}
                modelHeading={t("Model")} modelsHeading={t("Models")} productDetail={productDetail} toastText={t("Toast")} />
            <Specs tabs={tabs} specs={specs} support={support} />
            <MoreProducts
                products={moreProducts}
                modelHeading={t("Model")}
                modelsHeading={t("Models")}
                currency={t("Currency")}
                buy={t("Buy")}
                locale={locale}
            />
        </main>
    )
}

export default ProductPage