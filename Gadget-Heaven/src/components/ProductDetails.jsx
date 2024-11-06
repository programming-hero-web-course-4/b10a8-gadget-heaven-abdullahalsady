import { useLoaderData } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { addToCart, addToWishlist } from '../utils/productUtils';

const ProductDetails = () => {
    const product = useLoaderData();

    const handleAddToCart = () => {
        const result = addToCart(product);
        if (!result.success) {
            toast.warn(result.message);
        } else {
            toast.success(result.message);
        }
    };

    const handleAddToWishlist = () => {
        const result = addToWishlist(product);
        if (!result.success) {
            toast.warn(result.message);
        } else {
            toast.info(result.message);
        }
    };

    return (
        <div className="container mx-auto px-4 ">

            <div className="relative bg-purple-600 text-white rounded text-center p-10 pb-40">
                <h1 className="text-xl md:text-2xl font-bold">Product Details</h1>
                <p className=" md:text-lg">Explore the details of this product, including specifications, price, and availability.</p>
            </div>

            <div className="flex justify-center relative rounded-lg" style={{ top: '-140px' }}>
                <div className="flex flex-col lg:flex-row rounded-lg items-stretch bg-purple-100  p-6 w-full max-w-6xl">
                    <div className="w-full lg:w-1/3 flex justify-center items-center bg-white p-4 lg:mb-0">
                        <img src={product.product_image} alt={product.product_title} className="w-3/4 h-auto object-contain " />
                    </div>

                    <div className="w-full lg:w-2/3 bg-white p-6  border-gray-200 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.product_title}</h1>
                            <p className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">Price: ${product.price}</p>

                            <p className={`text-sm font-semibold mb-4 ${product.availability ? 'text-green-500' : 'text-red-500'}`}>
                                {product.availability ? 'In Stock' : 'Out of Stock'}
                            </p>

                            <p className="text-gray-700 mb-6">{product.description}</p>

                            <h2 className="text-lg md:text-xl font-semibold mb-2">Specifications:</h2>
                            <ul className="list-disc list-inside mb-6 space-y-1">
                                {product.specification.map((spec, index) => (
                                    <li key={index} className="text-gray-600">{spec}</li>
                                ))}
                            </ul>

                            <div className="flex items-center mb-6">
                                <span className="text-lg font-semibold mr-2">Rating:</span>
                                <ReactStars
                                    count={5}
                                    value={product.rating}
                                    size={22}
                                    isHalf={true}
                                    activeColor="#ffd700"
                                    edit={false}
                                />
                                <span className="ml-2 text-gray-500">{product.rating}</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center text-white bg-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors gap-2 text-sm md:text-base"
                            >
                                Add To Cart <MdOutlineShoppingCart />
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className="flex items-center text-purple-600 font-semibold py-2 px-6 border border-purple-600 rounded-lg hover:bg-purple-100 transition-colors gap-2 text-sm md:text-base"
                            >
                                 Wish list <FaRegHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
