import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    document.title = "Bazar Sodai";
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://bazar-sodai01.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data)
        })
    }, [products]);
    return (
        <div className="container mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    {
                        products.length === 0 && 
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    }
                </div>
            </div>
        
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;