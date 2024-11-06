import Hero from './../components/Hero';
import Product from "./../components/Product";
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        document.title = ' Gadgets ✨ Gadget Heaven';
    }, []);
    return (
        <>
            <Hero />
            <Product />
        </>
    );
};

export default Home;