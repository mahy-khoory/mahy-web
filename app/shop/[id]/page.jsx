import Breadcrumb from '@/components/UI/Breadcrumb';
import MoreProducts from '@/components/UI/shop/MoreProducts';
import Product from '@/components/UI/shop/Product';
import ProductAbout from '@/components/UI/shop/ProductAbout';
import ProductInfo from '@/components/UI/shop/ProductInfo';
import Specs from '@/components/UI/shop/Specs';
import { getNewProduct, getNewProducts, getPaginatedRandomProducts, getProduct, getProducts, newProducts } from '@/constants/products';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

async function ProductPage({ params, searchParams }) {
    const { id } = await params;
    const { model } = await searchParams;

    const t = await getTranslations('ShopPage');
    // const product = await getProduct(id);
    const product = getNewProduct(id);
    if (!product) notFound();

    // const moreProducts = await getProducts();
    const { items } = await getPaginatedRandomProducts(1);
    console.log(items);

    const locale = await getLocale();

    const productDetail = { text: t("Text"), text1: t("Text1"), text2: t("Text2"), text3: t("Text3") };
    const tabs = ["Technical", "Specs"];

    return (
        <main className='max-w-350 px-5 mx-auto pt-15 pb-15'>
            <Breadcrumb segments={[{ label: t("Page"), href: "/shop" }, { label: product.overview }]} locale={locale} maxWidth={false} />
            <Product product={product} model={model} locale={locale} currency={t("Currency")} addToCart={t("AddToCart")} company={t("Company")}
                modelHeading={t("Model")} modelsHeading={t("Models")} productDetail={productDetail} toastText={t("Toast")} />
            <ProductInfo technical={product.technical} description={product.description} />
            {/* <ProductAbout about={product.about} description={product.description} /> */}
            {/* <Specs tabs={tabs} technical={product.technical} specs={product.specs} /> */}
            <MoreProducts
                products={items}
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