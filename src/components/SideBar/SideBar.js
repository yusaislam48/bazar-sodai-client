import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return (
        <div className='sidebar p-4'>
            <h2 className="text-center header-text">Admin</h2>
            <br/>
            <Link to='/admin/addproduct'>
                <h6 className="text-center options"><FontAwesomeIcon icon={faPlus} /> Add Product</h6>
            </Link>
            <Link to='/admin/manageproduct'>
                <h6 className="text-center options"><FontAwesomeIcon icon={faTasks} /> Manage Product</h6>
            </Link>
        </div>
    );
};

export default SideBar;