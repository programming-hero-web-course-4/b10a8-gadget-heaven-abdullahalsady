import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Product");

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); 
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setFilteredProducts(
            category === "All Product" 
                ? products 
                : products.filter(product => product.category === category)
        );
    };

    return (
        <div className="w-full mx-auto py-10 mt-60 md:mt-70 lg:mt-80">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col md:flex-row gap-4 w-[90%] lg:w-4/5 mx-auto">
                <div className="w-full md:w-1/4">
                    <Sidebar onCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
                </div>
                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="bg-white border-2 border-purple-100 rounded-lg p-4">
                            <div className="bg-gray-300 h-40 rounded-md mb-4">
                                <img src={product.product_image} alt={product.product_title} className="w-full h-full object-cover rounded-md"/>
                            </div>
                            <h3 className="text-lg font-semibold">{product.product_title}</h3>
                            <p className="text-gray-600">Price: ${product.price}</p>
                            <Link to={`/product-details/${product.product_id}`}>
                                <button className="mt-4 text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
