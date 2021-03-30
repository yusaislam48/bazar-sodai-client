import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default Home;