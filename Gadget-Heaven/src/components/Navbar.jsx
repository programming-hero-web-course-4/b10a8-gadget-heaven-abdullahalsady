import { useState, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const isActive = (path) => location.pathname === path;

    const iconColor = location.pathname === "/home" ? "text-white" : "text-black";
    const mobileIconColor = location.pathname === "/home" ? "text-white" : "text-black";
    const mobileBorderColor = location.pathname === "/home" ? "border-white" : "border-black";

    // Function to update cart and wishlist counts
    const updateCounts = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        console.log(cartItems.length)
        setCartCount(cartItems.length);
        setWishlistCount(wishlistItems.length);
    };

    useEffect(() => {
        // Initial load of counts
        updateCounts();
    
        // Listen for custom events to update counts
        const handleCartUpdate = () => updateCounts();
        const handleWishlistUpdate = () => updateCounts();
    
        window.addEventListener("cartUpdated", handleCartUpdate);
        window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    
        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
            window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
        };
    }, []);
    

    return (
        <div className="w-full">
            <div
                className={`mx-auto flex flex-col items-center border-t-8 border-white border-l-8 border-r-8 ${location.pathname === "/home" ? "bg-purple-600" : "bg-white text-black"
                    }`}
            >
                <nav
                    className={`w-4/5 flex justify-between items-center py-4 mt-4 ${location.pathname === "/home" ? "bg-purple-600 text-white" : "bg-white text-black"
                        }`}
                >
                    <h1 className="text-lg font-bold">Gadget Heaven</h1>

                    <div className="flex items-center md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className={`${mobileIconColor}`}>
                            <HiMenuAlt3 size={28} />
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-6">
                        <NavLink to="/" className={`${isActive("/") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/statistics" className={`${isActive("/statistics") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Statistics</li>
                        </NavLink>
                        <NavLink to="/dashboard" className={`${isActive("/dashboard") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Dashboard</li>
                        </NavLink>
                        <NavLink to="/FAQs" className={`${isActive("/FAQs") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>FAQs</li>
                        </NavLink>
                    </ul>

                    <div className="hidden md:flex space-x-4 relative">
                        {/* Cart Notification */}
                        <button className={`relative rounded-full p-2 border-2 ${iconColor} ${iconColor === "text-purple-600" ? "text-white" : "border-white"}`}>
                            <MdOutlineShoppingCart />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Wishlist Notification */}
                        <button className={`relative rounded-full p-2 border-2 ${iconColor} ${iconColor === "text-purple-600" ? "text-white" : "border-white"}`}>
                            <FaRegHeart />
                            {wishlistCount > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                                    {wishlistCount}
                                </span>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-purple-500 bg-opacity-90 flex flex-col justify-between text-white w-3/4 md:hidden z-10">
                        <ul className="flex flex-col space-y-4 mt-8 px-6">
                            <NavLink to="/" onClick={() => setMenuOpen(false)} className={`${isActive("/") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/statistics" onClick={() => setMenuOpen(false)} className={`${isActive("/statistics") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Statistics</li>
                            </NavLink>
                            <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className={`${isActive("/dashboard") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Dashboard</li>
                            </NavLink>
                            <NavLink to="/FAQs" onClick={() => setMenuOpen(false)} className={`${isActive("/faq") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>FAQs</li>
                            </NavLink>
                        </ul>

                        <div className="flex space-x-4 p-6 justify-center">
                            {/* Cart Notification */}
                            <button className={`relative rounded-full p-2 border-2 ${mobileIconColor} ${mobileBorderColor}`}>
                                <MdOutlineShoppingCart />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Wishlist Notification */}
                            <button className={`relative rounded-full p-2 border-2 ${mobileIconColor} ${mobileBorderColor}`}>
                                <FaRegHeart />
                                {wishlistCount > 0 && (
                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                                        {wishlistCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
