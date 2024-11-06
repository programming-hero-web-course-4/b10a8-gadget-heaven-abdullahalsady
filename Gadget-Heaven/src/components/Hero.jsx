import vrHeadset from "../assets/banner.jpg";

const Hero = () => {
    return (
        <div className="relative bg-purple-600 border-l-8 border-white border-r-8 rounded-br-lg  justify-center min-h-[120vh] md:min-h-[130vh] lg:min-h-screen flex">
            <div className="w-4/5 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl  lg:mt-10  sm:text-3xl md:text-4xl pt-10 text-white font-bold">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="mt-6 mb-2 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
                    Shop Now
                </button>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[100%] -translate-y-1/2 w-11/12 sm:w-4/5  max-w-4xl">
                <div className="border border-purple-100 bg-[#ffffff26] p-6 rounded-lg shadow-lg">
                    <img
                        src={vrHeadset}
                        alt="VR Headset"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
