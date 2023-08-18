import React, { useLayoutEffect } from 'react';
import Slider from './Component/Slider.jsx';
import ProductContent from './Component/ProductContent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "grey"
    });
    return (
        <>
            <Slider />
            <ProductContent />
        </>
    );
};

export default Home;