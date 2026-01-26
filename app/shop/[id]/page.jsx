import MoreProducts from '@/components/UI/shop/MoreProducts';
import Product from '@/components/UI/shop/Product';
import ProductAbout from '@/components/UI/shop/ProductAbout';
import Specs from '@/components/UI/shop/Specs';
import { getNewProduct, getNewProducts, getProduct, getProducts, newProducts } from '@/constants/products';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

async function ProductPage({ params, searchParams }) {
    const { id } = await params;
    const { model } = await searchParams;

    const t = await getTranslations('ShopPage');
    // const product = await getProduct(id);
    const product = getNewProduct(id);
    if (!product) notFound();
    const moreProducts = await getProducts();
    const locale = await getLocale();

    const productDetail = { text: t("Text"), text1: t("Text1"), text2: t("Text2"), text3: t("Text3") };
    const tabs = ["Technical", "Specs"];

    return (
        <main className='pb-15'>
            <Product product={product} model={model} locale={locale} currency={t("Currency")} addToCart={t("AddToCart")} company={t("Company")}
                modelHeading={t("Model")} modelsHeading={t("Models")} productDetail={productDetail} toastText={t("Toast")} />
            <div className='max-w-6xl mx-auto'>
                <ProductAbout about={product.about} description={product.description} />
                <Specs tabs={tabs} technical={product.technical} specs={product.specs} />
                <MoreProducts
                    products={moreProducts}
                    modelHeading={t("Model")}
                    modelsHeading={t("Models")}
                    currency={t("Currency")}
                    buy={t("Buy")}
                    locale={locale}
                />
            </div>
        </main>
    )
}

export default ProductPage