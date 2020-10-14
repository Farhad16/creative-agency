import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import logo from '../images/logos/logo.png'
import google from '../images/logos/googleLogo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                setLoggedInUser(result.user);
                history.replace(from);
            }).catch(error => {
                console.log(error.message);
            });
    }


    return (
        <div className="loginSection row">
            <div className="login w-50 text-center">
                <Link to="/"><img src={logo} alt="" width="150px" /></Link>
                <div className="loginForm">
                    <div className="google">
                        <h5>Login With</h5>
                        <button onClick={googleSignIn}><img src={google} alt="" />Continue with Google</button>
                        <p>Dont't have an account? <Link to="">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;