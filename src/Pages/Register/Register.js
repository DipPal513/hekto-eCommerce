import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import TopHeader from '../Header/TopHeader';
import { useHistory, useLocation } from 'react-router';
import img from "./register.jpg"
const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/home";

    const { registerUser } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleLoginSubmit = e => {
        registerUser(email, password, location, history)
        e.preventDefault();

    }

    

    return (
        <div>
            <TopHeader />
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleLoginSubmit} className="text-center">
                        <h1 className="p-5 fw-bolder text-success">Register your Account</h1>
                        <input onChange={handleEmail}  className="m-3" type="email" name="email" placeholder="Type Your Email" /><br />
                        <input onChange={handlePassword} className=" mb-3" type="password" name="Password" placeholder="Password" /><br />
                        <button type="submit" className="btn btn-outline-success mb-4">Register</button>
                        <p className="fw-bold text-success">AlReady Register? Please <Link to="/login"> <button className="btn btn-outline-success mt-1">Login</button> </Link> </p>
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

export default Register;