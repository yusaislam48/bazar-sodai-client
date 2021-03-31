import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import CheckOutTable from './CheckOutTable';
import { format, formatRelative, subDays } from 'date-fns'

const CheckOut = () => {
    const { productId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [checkOutProduct, setCheckOutProduct] = useState([]);
    useEffect(() => {
        fetch(`https://bazar-sodai01.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => {
            setCheckOutProduct(data[0]);
        })
    }, [checkOutProduct]);
    
    const {_id, name, price, weight, imageUrl} = checkOutProduct;
    const history = useHistory();
    const handleCheckout = () => {
        const orderedProduct = {
            productId: _id,
            name: name,
            price: price,
            weight: weight,
            imageUrl: imageUrl,
            orderDate: format(new Date(), 'dd/MM/yyyy'),
            // orderTime: formatRelative(subDays(new Date(), 3), new Date()),
            customerName: loggedInUser.name,
            customerEmail: loggedInUser.email
        }
        // console.log(orderedProduct)

        fetch('https://bazar-sodai01.herokuapp.com/addOrderProduct', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderedProduct)
        })
        .then(res => {
            console.log('server site res', res);
            history.push('/orders')
        })
    };
    

    return (
        <div className="container">
            <h3 style={{fontWeight: "700", color:"gray"}}>Checkout</h3><br/>
            <div className='border border-success rounded-top p-1'>
                <table className="table container">
                    <thead>
                        <tr className="table-success">
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CheckOutTable checkOutProduct={checkOutProduct}></CheckOutTable>
                    </tbody>
                </table>
            </div>
            <br/>
            <div className="d-flex justify-content-end">
                <button onClick={()=>handleCheckout()} type="button" className="btn btn-success">CheckOut</button>
            </div>
            
        </div>
    );
};

export default CheckOut;