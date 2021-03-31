import React from 'react';

const CheckOutTable = ({checkOutProduct}) => {
    const { name, price, weight } = checkOutProduct;
    return (
        <>
            <tr>
                <th scope="row">{name}</th>
                <td>1</td>
                <td>{weight}g</td>
                <td className="taka-sing">{price} ৳</td>
            </tr>
            <tr className="text-danger">
                <th scope="row">Total</th>
                <td>1</td>
                <td>{weight}g</td>
                <td className="taka-sing">{price} ৳</td>
            </tr>
        </>
    );
};

export default CheckOutTable;