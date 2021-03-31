import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Table = ({product}) => {
    const {_id, name, price, weight} = product;
    const id = _id.slice(20, 24);
    const deleteProduct = id =>{
        console.log(id)
        fetch(`https://bazar-sodai01.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
        .then(res => console.log(res))
    }
    return (
        <>
            <tr  className="table-info">
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{weight}g</td>
                <td>{price}</td>
                <td>
                    <button onClick={()=>deleteProduct(_id)} type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                </td>
            </tr>
        </>
    );
};

export default Table;