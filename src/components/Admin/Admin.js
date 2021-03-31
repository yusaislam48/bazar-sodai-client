import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const Admin = () => {
    return (
        <div  className="container">
            <h4>This is admin</h4><br/>
            <div>
                <AddProduct></AddProduct>
            </div><br/>
            <div>
                <ManageProducts></ManageProducts>
            </div>
        </div>
    );
};

export default Admin;