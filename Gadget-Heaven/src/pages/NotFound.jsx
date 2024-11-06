import { Link } from "react-router-dom";
import NFImage from "./../assets/notfound.png";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-purple-100 to-sky-100">
            <div className=" p-6 md:p-8 rounded-lg max-w-4xl w-full text-center">
                <img
                    src={NFImage}
                    alt="Not Found"
                    className="mx-auto w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6"
                />
                <h1 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-4">
                    404 - Page Not Found
                </h1>
                <p className="text-md sm:text-lg text-gray-600 mb-6">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-green-400 text-white text-md sm:text-lg font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
