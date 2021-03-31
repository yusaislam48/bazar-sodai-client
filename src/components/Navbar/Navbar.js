import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../icons/logo.png'
// import $ from 'jquery';
// import "../../../node_modules/jquery/dist/jquery.min.js";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/js/src/collapse.js";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {isSignedIn, name, email, image} = loggedInUser;

    return (
            <nav className="navbar mb-5 navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img style={{width: '200px'}} src={logo} alt=""/>
                    </Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                        <div className="navbar-nav">
                            <Link className="nav-link"  to='/'>
                                <h5>Home</h5>
                            </Link>
                            <Link className="nav-link"  to='/orders'>
                                <h5>Orders</h5>
                            </Link>
                            <Link className="nav-link"  to='/deals'>
                                <h5>Deals</h5>
                            </Link>
                            <Link className="nav-link"  to='/admin'>
                                <h5>Admin</h5>
                            </Link>
                            {
                                isSignedIn 
                                ?   <Link className="nav-link disabled"  to='#'>
                                        <h5 style={{color: "#71BA58"}}>{name}</h5>
                                        
                                    </Link>
                                :   <Link to="/login">
                                        <button type="button" className="btn btn-warning">Login</button>
                                    </Link>
                            }
                        </div>
                    </div>
                {/* </div> */}
            </nav>
    );
};

export default Navbar;