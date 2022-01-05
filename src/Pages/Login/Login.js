import React, { useState } from "react";

import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import TopHeader from "../Header/TopHeader";
import { useHistory, useLocation } from "react-router";
import img from "./login.jpg";
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/home";

  const { handleGoogleLogin, loginUser } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // getting  email,password
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    loginUser(email, password, location, history);

    e.preventDefault();
  };

  /* Handle Google Login */
  const handleGoogle = (e) => {
    handleGoogleLogin(location, history);
    e.preventDefault();
  };
  return (
    <div>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-lg-2 col-md-4 col-sm-8 shadow">
        <h1 className=" fw-bolder text-center mb-5">Log In</h1>
          <form onSubmit={handleLoginSubmit} className="text-center">
            
            <input
              onChange={handleEmail}
              className="form-control"
              type="email"
              name="email"
              placeholder="Type Your Email"
            />
            <br />
            <input
              onChange={handlePassword}
              className=" mb-2 form-control"
              type="password"
              name="Password"
              placeholder="Password"
            />
            <br />
            <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-outline-danger mb-4">
              sign in
            </button>
            
            <button
              type="submit"
              className="mb-4 btn"
              onClick={handleGoogle}
            >
              <FcGoogle />
            </button>

            </div>
            <p className="fw-bold text-success">
              New User ?{" "}
              <Link to="/register">
                {" "}
                <button className="btn btn-outline-success mt-1">
                  Register
                </button>{" "}
              </Link>{" "}
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
