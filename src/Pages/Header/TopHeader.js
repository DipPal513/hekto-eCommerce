import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

// import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

import { AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai";


import '../../Styles/TopHeader.css'
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const TopHeader = () => {
  const { user, logout } = useFirebase();
  return (
    <div className="topHeader">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-evenly">
            <div className="email d-flex align-items-center">
              <HiOutlineMail />
              <p className='mb-0 ms-4'>dippal@gmail.com</p>
            </div>
            <div className="email d-flex align-items-center">
              <BiPhoneCall />
              <p className='mb-0 ms-4'>(12345)67890</p>
            </div>
          </div>
          <div className="col-lg-6 justify-content-end d-flex align-items-center">
            <ul className="d-flex mb-0 topBannerList">
              <li className="ms-3"><a href="#">English</a></li>
              <li className="ms-3"><a href="#">USD</a></li>

              {
                user?.email ?
                  <span className="mx-2" >
                    <button onClick={logout} className="btn btn-outline-danger">LogOut <AiOutlineUser /></button></span>
                  :
                  <li className="ms-3"> <Link to="login">Login  <AiOutlineUser /></Link></li>

              }



              <li className="ms-3"><a href="#">wishlist <GiSelfLove /></a></li>
              <li className="ms-3"><a href="#"><AiOutlineShoppingCart /></a></li>

        
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
