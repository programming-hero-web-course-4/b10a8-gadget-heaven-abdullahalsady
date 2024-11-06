import { useEffect, useState } from "react";

const useCartAndWishlistCount = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const updateCounts = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        setCartCount(cartItems.length);
        setWishlistCount(wishlistItems.length);
    };

    useEffect(() => {
        updateCounts();
        const interval = setInterval(updateCounts, 0);
        return () => clearInterval(interval);
    }, []);

    return { cartCount, wishlistCount };
};

export default useCartAndWishlistCount;
