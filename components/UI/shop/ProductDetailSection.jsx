import Cookies from 'js-cookie';
import { ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi';
import { toast } from 'react-toastify';

function ProductDetailSection({ company, product, model, locale, currency, addToCartText, modelHeading, modelsHeading, productDetail, toastText }) {
    const [modelIndex, setModelIndex] = useState(Number(model || 0));
    const [quantity, setQuantity] = useState(1);
    const productId = product.id;

    const decrement = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    const addToCart = () => {
        const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];
        const existingIndex = cart.findIndex((item) => item.productId === productId && item.model === modelIndex);

        if (existingIndex !== -1) cart[existingIndex].quantity = quantity;
        else cart.push({ productId, modelIndex, quantity });

        Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
        setQuantity(1);
        toast(toastText);
    };

    return (
        <div className="flex flex-col mt-10 px-5 lg:px-14 select-none">
            <p className="t-base font-medium uppercase">{company}</p>
            <h1 className={`text-3xl font-semibold leading-tight mt-1 ${locale !== "ar" && "tracking-tighter"}`}>{product.name}</h1>
            <p className="mt-2 tracking-tighter">{product.price.toLocaleString()} {currency}</p>

            <p className="mt-10 text-gray-700 font-light tracking-tight">{productDetail.text}</p>
            <ul className='list-disc list-inside space-y-1 mt-3 text-gray-700 font-light tracking-tight'>
                <li>{productDetail.text1}</li>
                <li>{productDetail.text2}</li>
                <li>{productDetail.text3}</li>
            </ul>
            <div className='mt-10'>
                <p className='font-medium uppercase text-sm text-gray-600 mb-2'>{product.models.length > 1 ? modelsHeading : modelHeading}</p>
                {product.models.map((model, i) => (
                    <button key={i} onClick={() => setModelIndex(i)}
                        className={`rounded-xl border border-[#79c4e7] ${i === modelIndex ? "text-white bg-[#79c4e7]" : "text-[#79c4e7]"}  py-1 px-4 mr-2 text-sm hover:text-white hover:bg-[#79c4e7] transition-colors duration-300`}>
                        {model}
                    </button>
                ))}
            </div>
            <div className="lg:flex gap-4 mt-10">
                <div className="bg-gray-50 rounded-xl py-2 px-6 flex justify-between items-center gap-10 lg:w-fit">
                    <button onClick={decrement}>
                        <HiMinus />
                    </button>
                    <p className="font-medium text-lg">{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)} >
                        <HiPlus />
                    </button>
                </div>
                <button onClick={addToCart} className="mt-4 lg:mt-0 b-base b-base-hover rounded-xl py-2 px-14 flex items-center justify-center gap-4 w-full lg:w-fit" >
                    <ShoppingCart stroke='white' size={20} />
                    <p className="text-white font-medium py-1">{addToCartText}</p>
                </button>
            </div>
        </div>
    )
}

export default ProductDetailSection