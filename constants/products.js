import { getTranslations } from "next-intl/server";

const products = [
    {
        id: 1,
        modelsCount: 3,
        images: ["/products/pump.png", "/products/pump2.png"],
        price: 4000,
        partnerId: 0
    },
    {
        id: 2,
        modelsCount: 2,
        images: ["/products/submersible-pump.png"],
        price: 5000,
        partnerId: 0
    },
    {
        id: 3,
        modelsCount: 3,
        images: ["/products/multistage-pump.png"],
        price: 3000,
        partnerId: 3
    },
    {
        id: 4,
        modelsCount: 3,
        images: ["/products/fire-fighting.png"],
        price: 6000,
        partnerId: 4
    },
    {
        id: 5,
        modelsCount: 3,
        images: ["/products/booster-skid.png"],
        price: 7000,
        partnerId: 5
    }
];

export const getProduct = async (id) => {
    const t = await getTranslations("Products");
    const product = products.find(p => p.id === Number(id));
    if (!product) return null;

    let models = [];
    for (let i = 1; i <= product.modelsCount; i++) {
        models.push(t(`Product${product.id}.Models.Model${i}`));
    }

    return {
        ...product,
        name: t(`Product${product.id}.Name`),
        models
    };
};

export const getProducts = async () => {
    const t = await getTranslations("Products");
    return products.map(product => {
        let models = [];
        for (let i = 1; i < product.modelsCount; i++) {
            models.push(t(`Product${product.id}.Models.Model${i}`));
        }
        return {
            ...product,
            name: t(`Product${product.id}.Name`),
            models
        };
    });
};

export const getProductsByIds = async (ids) => {
    const t = await getTranslations("Products");
    const idSet = ids.map(Number);

    return products
        .filter(product => idSet.includes(product.id))
        .map(product => {
            const models = [];
            for (let i = 1; i < product.modelsCount; i++) {
                models.push(t(`Product${product.id}.Models.Model${i}`));
            }

            return {
                ...product,
                name: t(`Product${product.id}.Name`),
                models,
            };
        });
};

export const combineProductsWithCart = (products, cart) => {
    if (!Array.isArray(products) || !Array.isArray(cart)) return [];

    return cart
        .map(({ productId, quantity, modelIndex }) => {
            const product = products.find(
                (p) => p.id === Number(productId)
            );

            if (!product) return null;

            return {
                ...product,
                quantity,
                modelIndex
            };
        })
        .filter(Boolean);
};

export default products;