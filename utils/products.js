import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const addToCart = (productId, quantity, toastText) => {
    const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];
    const existingIndex = cart.findIndex((item) => item.productId === productId);

    if (existingIndex !== -1) cart[existingIndex].quantity = quantity;
    else cart.push({ productId, quantity });

    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    toast(toastText);
};