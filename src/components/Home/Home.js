import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            console.log(data)
        })
    }, [products]);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;