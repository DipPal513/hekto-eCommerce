import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrCart } from "react-icons/gr";
import { AiOutlineHeart,AiOutlineStar, AiOutlineZoomIn } from "react-icons/ai";
import {BsFillStarFill} from "react-icons/bs";
import "../../Styles/ShopItem.css";

const ShopItem = ({ products }) => {
  const { name, img, price, details } = products;
  return (
    <Col md={8} className='mb-3'>
      <Row>
        <Col md={5}>
          <img src={img} alt="" />
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center">
            <h5 className="fw-bold">{name}</h5>
            <div className="dots ms-3">
              <span></span>
              <span className="mx-2"></span>
              <span></span>
            </div>
          </div>
          <div className="prices d-flex align-items-center">
            <p className="price fw-bold">${price}</p>
            <p className="fw-bold ms-2 text-danger">$42.00</p>
            <div className="d-flex">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <AiOutlineStar />
            </div>
          </div>
          <p className="text-muted">{details}</p>
          <div className="d-flex align-items-center">
            <GrCart />
            <AiOutlineHeart className="mx-4" />
            <AiOutlineZoomIn />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ShopItem;
