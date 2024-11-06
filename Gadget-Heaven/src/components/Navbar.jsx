import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import useCartAndWishlistCount from "./../useCartAndWishlistCount"; // Update the path as needed

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount, wishlistCount } = useCartAndWishlistCount();

    const isActive = (path) => location.pathname === path;

    const iconColor = location.pathname === "/home" ? "text-white" : "text-black";
    const mobileIconColor = location.pathname === "/home" ? "text-white" : "text-black";
    const mobileBorderColor = location.pathname === "/home" ? "border-white" : "border-black";

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
                        <Link to="/" className={`${isActive("/") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Home</li>
                        </Link>
                        <Link to="/statistics" className={`${isActive("/statistics") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Statistics</li>
                        </Link>
                        <Link to="/dashboard" className={`${isActive("/dashboard") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>Dashboard</li>
                        </Link>
                        <Link to="/FAQs" className={`${isActive("/FAQs") ? "text-purple-600 font-semibold" : "hover:text-gray-300"}`}>
                            <li>FAQs</li>
                        </Link>
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
                            <Link to="/" onClick={() => setMenuOpen(false)} className={`${isActive("/") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Home</li>
                            </Link>
                            <Link to="/statistics" onClick={() => setMenuOpen(false)} className={`${isActive("/statistics") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Statistics</li>
                            </Link>
                            <Link to="/dashboard" onClick={() => setMenuOpen(false)} className={`${isActive("/dashboard") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>Dashboard</li>
                            </Link>
                            <Link to="/FAQs" onClick={() => setMenuOpen(false)} className={`${isActive("/faq") ? "text-purple-700 font-semibold" : "hover:text-gray-300"}`}>
                                <li>FAQs</li>
                            </Link>
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
