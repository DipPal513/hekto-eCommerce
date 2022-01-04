import React, { useState } from 'react';

import { Link} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import TopHeader from '../Header/TopHeader';
import { useHistory, useLocation } from 'react-router';
import img from "./login.jpg"
const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/home";

    const { handleGoogleLogin, loginUser } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    // getting  email,password
    const handleEmail = (e) => {
        setEmail(e.target.value);

    };
    const handlePassword = (e) => {
        setPassword(e.target.value);

    };

    const handleLoginSubmit = e => {
        loginUser(email, password, location, history);

        e.preventDefault();

    }

    /* Handle Google Login */
    const handleGoogle = (e) => {
        handleGoogleLogin(location, history);
        e.preventDefault();
    }
    return (

        <div>
            <TopHeader />
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleLoginSubmit} className="text-center">
                        <h1 className="p-5 fw-bolder text-success">Log In your Account</h1>
                        <input onChange={handleEmail} className="m-3" type="email" name="email" placeholder="Type Your Email" /><br />
                        <input onChange={handlePassword} className=" mb-2" type="password" name="Password" placeholder="Password" /><br />
                        <button type="submit" className="btn btn-outline-success mb-4">Log in</button>
                        <p className="fw-bold text-success">New User ? <Link to="/register"> <button className="btn btn-outline-success mt-1">Register</button> </Link> </p>

                        <button type="submit" className="btn btn-outline-success mb-4" onClick={handleGoogle} >LoginWithGoogle</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="img-logo">
                        <img className="img-fluid" src={img} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;