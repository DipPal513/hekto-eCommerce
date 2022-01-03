import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
const Discount = () => {
  return (
    <div className="discount py-5">
      <Container>
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--text-color)" }}
        >
          Discount Item
        </h2>
        <Row className="d-flex align-items-center">
          <Col sm={7}>
            <h3>20% Discount Of All Products</h3>
            <h5 className="text-danger">Eams Sofa compact</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos repudiandae error odit eius at ad.Dignissimos repudiandae error odit eius at ad.
            </p>
            <Row>
              <Col>
                <p className="text-muted">
                  <FaCheck /> Material expose like metals
                </p>
                <p className="text-muted">
                  <FaCheck /> Material expose like metals
                </p>
              </Col>
              <Col className="">
                <p className="text-muted">
                  <FaCheck /> Material expose like metals
                </p>
                <p className="text-muted">
                  <FaCheck /> Material expose like metals
                </p>
              </Col>
            </Row>
            <Button variant="danger">Shop Now</Button>
          </Col>
          <Col sm={5}>
            <img
              src="https://i.ibb.co/mbqnSBW/Group54.png?fbclid=IwAR1ecO0JJ68tXnYcCHOgUJ39lwcE3a_Ee7RwnhH-MuftXeYDiRTy4R_etn8"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discount;
