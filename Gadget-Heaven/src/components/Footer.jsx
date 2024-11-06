const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-10 px-5">
            <div className="max-w-6xl mx-auto text-center">
                <div className="border-b border-gray-300 pb-5 mb-5">
                    <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                    <p className="mt-2">Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-8">
                    <div className="mb-5 sm:mb-0">
                        <h3 className="font-semibold">Services</h3>
                        <ul className="mt-2 text-sm text-gray-500"> 
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>

                    <div className="mb-5 sm:mb-0">
                        <h3 className="font-semibold">Company</h3>
                        <ul className="mt-2 text-sm text-gray-500"> 
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="mt-2 text-sm text-gray-500"> 
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
