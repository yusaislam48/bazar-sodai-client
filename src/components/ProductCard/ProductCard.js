import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const {name, price, imageUrl, weight} = product;
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name} ({weight}<span>g</span>)</h4>
                            <h6></h6><br/>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className='product-price'><span className="taka-sing">৳</span>{price}</h3>
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