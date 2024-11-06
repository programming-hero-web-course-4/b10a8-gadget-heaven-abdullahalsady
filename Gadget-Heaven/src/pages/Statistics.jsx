import { useEffect } from "react";

const Statistics = () => {
    useEffect(() => {
        document.title = 'Statistics ✨ Gadget Heaven';
    }, []);

    return (
        <>
            <div className="mx-auto bg-purple-600 text-white rounded-lg text-center p-10 w-4/5 md:w-3/5 lg:w-4/5">
                <h1 className="text-xl md:text-2xl font-bold">Gadget Statistics</h1>
                <p className="pt-2">Stay updated with the latest data on gadget trends, performance metrics, and user preferences.</p>
            </div>
            <div className="mx-auto text-center text-gray-500 mt-6">
                <p>No data available</p>
            </div>
        </>
    );
};

export default Statistics;
