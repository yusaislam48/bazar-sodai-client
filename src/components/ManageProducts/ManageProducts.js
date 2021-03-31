import React, { useEffect, useState } from 'react';
import Table from './Table';

const ManageProducts = () => {
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
        <table className="table container">
            <thead>
                <tr className="table-danger">
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <Table key={product._id} product={product}></Table>)
                }
            </tbody>
        </table>
    );
};

export default ManageProducts;