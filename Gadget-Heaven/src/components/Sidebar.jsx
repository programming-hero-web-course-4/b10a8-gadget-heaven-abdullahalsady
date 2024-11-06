import PropTypes from 'prop-types';

const Sidebar = ({ onCategoryChange, activeCategory }) => {
    const categories = [
        { name: "All Product" },
        { name: "Laptops" },
        { name: "Phones" },
        { name: "MacBook" },
    ];

    return (
        <ul className="space-y-4 border-2 border-purple-100 rounded-lg p-4">
            {categories.map((category, index) => (
                <li 
                    key={index}
                    onClick={() => onCategoryChange(category.name)}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${activeCategory === category.name ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'} mb-4`}
                >
                    {category.name}
                </li>
            ))}
        </ul>
    );
};


Sidebar.propTypes = {
    onCategoryChange: PropTypes.func.isRequired, 
    activeCategory: PropTypes.string.isRequired, 
};

export default Sidebar;