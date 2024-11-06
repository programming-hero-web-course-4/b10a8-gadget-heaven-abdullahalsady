import { useEffect, useState } from 'react';
import { FaTimes, FaSortAmountDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import modalImage from './../assets/Group.png'

const loadFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [activeView, setActiveView] = useState("cart");
    const [sortOrder, setSortOrder] = useState("none");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        document.title = 'Dashboard ✨ Gadget Heaven';

            fetch('/data.json')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    loadCart();
                    loadWishlist();
                })
                .catch(error => console.error("Error fetching products:", error));

    }, [setProducts]);



    const loadCart = () => {
        const storedCart = loadFromLocalStorage('cart');
        setCart(storedCart);
    };

    const loadWishlist = () => {
        const storedWishlist = loadFromLocalStorage('wishlist');
        setWishlist(storedWishlist);
    };

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    const toggleCartItem = (itemId) => {
        const isItemInCart = cart.includes(itemId);
        const updatedCart = isItemInCart
            ? cart.filter(id => id !== itemId)
            : [...cart, itemId];

        setCart(updatedCart);
        saveToLocalStorage('cart', updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const toggleWishlistItem = (itemId) => {
        const isItemInWishlist = wishlist.includes(itemId);
        const updatedWishlist = isItemInWishlist
            ? wishlist.filter(id => id !== itemId)
            : [...wishlist, itemId];

        setWishlist(updatedWishlist);
        saveToLocalStorage('wishlist', updatedWishlist);
        window.dispatchEvent(new Event("wishlistUpdated"));

    };

    const addToCartFromWishlist = (itemId) => {
        const isItemInCart = cart.includes(itemId);
        if (isItemInCart) {
            toast.error("This product is already in the cart.");
        } else {
            const updatedCart = [...cart, itemId];
            setCart(updatedCart);
            saveToLocalStorage('cart', updatedCart);
            window.dispatchEvent(new Event("cartUpdated"));
            toast.success("Added to cart from wishlist!");
        }
    };

    const getDisplayProducts = () => {
        const source = activeView === "cart" ? cart : wishlist;
        const filteredProducts = products.filter(product => source.includes(product.product_id));

        if (sortOrder === "desc") {
            return filteredProducts.sort((a, b) => b.price - a.price);
        } else {
            return filteredProducts;
        }
    };

    const displayProducts = getDisplayProducts();

    const sortByPrice = () => {
        setSortOrder("desc");
    };

    const totalPrice = cart.reduce((total, itemId) => {
        const product = products.find(product => product.product_id === itemId);
        return product ? total + product.price : total;
    }, 0);

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCart([]);
        saveToLocalStorage('cart', []);
        window.dispatchEvent(new Event("cartUpdated"));
        navigate('/');
    };

    return (
        <>
            {/* Banner Section */}
            <div className="bg-purple-600 text-white p-4 w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/5 mx-auto rounded-lg">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Dashboard</h1>
                <p className="mt-2 text-center text-sm sm:text-base">Manage your Cart and Wishlist items in one place.</p>
                <div className="flex justify-center space-x-2 sm:space-x-4 mt-4">
                    <button
                        onClick={() => handleViewChange("cart")}
                        className={`font-semibold py-2 px-2 sm:px-4 rounded-lg transition-colors ${activeView === "cart"
                            ? "text-white bg-purple-700 border border-white hover:bg-purple-700"
                            : "text-white bg-purple-600 hover:bg-purple-700 border border-purple-600"
                            }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => handleViewChange("wishlist")}
                        className={`font-semibold py-2 px-2 sm:px-4 rounded-lg transition-colors ${activeView === "wishlist"
                            ? "text-white bg-purple-700 border border-white hover:bg-purple-700"
                            : "text-white bg-purple-600 hover:bg-purple-700 border border-purple-600"
                            }`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            {/* Header Section (Cart or Wishlist) */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/5 mx-auto">
                <div className="text-xl sm:text-2xl font-semibold">
                    {activeView === "cart" ? "Cart" : "Wishlist"}
                </div>

                {activeView === "cart" && (
                    <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
                        <div className="text-sm sm:text-lg font-medium">Total: ${totalPrice}</div>
                        <button
                            onClick={sortByPrice}
                            className="border px-3 sm:px-4 py-1 sm:py-2 rounded-full text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white text-sm sm:text-base flex items-center"
                        >
                            <FaSortAmountDown className="mr-2" />
                            Sort by Price
                        </button>
                        <button
                            onClick={handlePurchase}
                            className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-blue-600 text-sm sm:text-base"
                            disabled={totalPrice === 0}
                        >
                            Purchase
                        </button>
                    </div>
                )}
            </div>

            {/* Product List Section */}
            <div className="mt-4 sm:mt-6 flex flex-col items-center w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/5 mx-auto">
                {displayProducts.length > 0 ? (
                    displayProducts.map((product) => (
                        <div key={product.product_id} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 w-full flex flex-col sm:flex-row relative">
                            <FaTimes
                                onClick={() => {
                                    if (activeView === 'cart') {
                                        toggleCartItem(product.product_id);
                                    } else {
                                        toggleWishlistItem(product.product_id);
                                    }
                                }}
                                className="text-red-600 absolute top-4 right-4 sm:top-1/2 sm:right-6 cursor-pointer transform -translate-y-1/2"
                                size={20}
                            />

                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md mx-auto sm:mx-0"
                            />

                            <div className="flex flex-col justify-center mt-2 sm:mt-0 sm:ml-4 w-full text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-semibold">{product.product_title}</h3>
                                <p className="text-gray-500 text-sm sm:text-base mt-2">{product.description}</p>
                                <p className="text-gray-600 text-sm sm:text-base mt-2 font-semibold">Price: ${product.price}</p>

                                {activeView === "wishlist" && (
                                    <div className="flex justify-center sm:justify-between mt-4">
                                        <button
                                            onClick={() => addToCartFromWishlist(product.product_id)}
                                            className="border px-3 sm:px-4 py-1 sm:py-2 rounded-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white text-sm sm:text-base"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-10">No items found in {activeView}.</p>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs w-full">

                        <div className="flex justify-center items-center mb-4">
                            <img
                                src={modalImage}
                                alt="Icon"
                                className="w-10 h-10 bg-green-500 rounded-full"
                            />
                        </div>


                        <h2 className="text-lg font-semibold mb-2">Payment Successfully</h2>
                        <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
                        <p className="text-gray-600 mb-4">Total: {totalPrice}</p>


                        <button
                            onClick={handleCloseModal}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
