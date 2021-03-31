import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const {_id ,name, price, imageUrl, weight} = product;

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
                            <Link to={`/checkout/${_id}`}>
                                <button className="buy-button">Buy Now</button>
                            </Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;