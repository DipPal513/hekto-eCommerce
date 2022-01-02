import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import '../../Styles/TopHeader.css'
const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="email d-flex align-items-center">
              <HiOutlineMail />
              <p className='mb-0 ms-4'>dippal@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
