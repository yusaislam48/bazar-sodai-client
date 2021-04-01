import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageProducts from './components/ManageProducts/ManageProducts';
import CheckOut from './components/CheckOut/CheckOut';
import AddProduct from './components/AddProduct/AddProduct';

export const UserContext = React.createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/admin/addproduct">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/admin/manageproduct">
          <ManageProducts></ManageProducts>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/manageProducts">
          <ManageProducts></ManageProducts>
        </Route>
        <Route path="/deals">
          <Deals></Deals>
        </Route>
        <PrivateRoute path="/checkout/:productId">
          <CheckOut></CheckOut>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}