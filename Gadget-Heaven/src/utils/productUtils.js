export const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.includes(product.product_id)) {
        return { success: false, message: 'This product is already in the cart!' };
    }
    cart.push(product.product_id); 
    localStorage.setItem('cart', JSON.stringify(cart));

    // Dispatch custom event
    window.dispatchEvent(new Event("cartUpdated"));
    return { success: true, message: 'Product added to cart successfully!' };
};

export const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.includes(product.product_id)) {
        return { success: false, message: 'This product is already in the wishlist!' };
    }
    wishlist.push(product.product_id); 
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Dispatch custom event
    window.dispatchEvent(new Event("wishlistUpdated"));
    return { success: true, message: 'Product added to wishlist successfully!' };
};
