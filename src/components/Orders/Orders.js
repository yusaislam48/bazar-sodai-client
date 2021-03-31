import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/orders/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders]);
    return (
        <div className="container">
            <h3 style={{fontWeight: "700", color:"gray"}}>Orders</h3><br/>
            <h4>Total Order: {orders.length}</h4>
            <h4>{orders[4]?.orderTime}</h4>

        </div>
    );
};

export default Orders;