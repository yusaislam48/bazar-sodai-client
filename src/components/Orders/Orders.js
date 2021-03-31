import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderCard from './OrderCard';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://bazar-sodai01.herokuapp.com/orders/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders]);
    return (
        <div className="container mb-4">
            <h3 style={{fontWeight: "700", color:"gray"}}>Orders</h3><br/>
            {
                orders.length === 0 
                ?<h4 style={{fontWeight: "700", color:"#71BA58"}} className="text-center mb-4">Please Order Something To Show here!</h4>
                :<h4 style={{fontWeight: "700", color:"#71BA58"}} className="text-center mb-4">Total Order: {orders.length}</h4>
            }
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    {
                        orders.length === 0 && 
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    }
                </div>
            </div>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    orders.map(order => <OrderCard order={order}></OrderCard>)
                }
            </div>

        </div>
    );
};

export default Orders;