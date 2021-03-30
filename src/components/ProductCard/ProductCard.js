import React from 'react';
import productPic from '../../Products/image 32.png'
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <img src={productPic} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className='product-price'>$330</h3>
                        </div>
                        <div>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;