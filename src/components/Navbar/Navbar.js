import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/logo.png'
// import $ from 'jquery';
// import "../../../node_modules/jquery/dist/jquery.min.js";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/js/src/collapse.js";

const Navbar = () => {
    return (
            <nav className="navbar mb-5 navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img style={{width: '200px'}} src={logo} alt=""/>
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/orders">Orders</a>
                            <a className="nav-link" href="/deals">Deals</a>
                            <a className="nav-link" href="/admin">Admin</a>
                            <Link to="/login">
                                <button type="button" className="btn btn-warning">Login</button>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
            </nav>
    );
};

export default Navbar;