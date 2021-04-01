import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Login = () => {
    document.title = "Login";
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                image: photoURL
            };
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
        });
    };

    

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div onClick={handleSignIn} className="py-2 px-4 login-btn">
                <h4>
                    <span className="px-2 google-icon"><FontAwesomeIcon icon={faGoogle} /></span> Sign In With Google
                </h4>
            </div>
        </div>
    );
};

export default Login;