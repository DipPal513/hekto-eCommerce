import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const TrendingProducts = () => {
  const data = useContext(UserContext)
  return (
    <div className="trending-products py-5">
      <Container>
        <h2 className="text-center mb-5">Trending Products</h2>
        <Row>
          {data.products.slice(11, 15).map((trending, index) => (
            <Col lg={3} md={5} xs={12} className="mb-3">
              <Card
                className="h-100 text-center p-3 shadow border-0 product-card"
                style={{ background: "#fff" }}
              >
                <Card.Img
                  variant="top"
                  className="img-fluid w-75 m-auto"
                  src={trending.productImg}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#151875" }}>
                    {trending.productName}
                  </Card.Title>
                  <Card.Text className="fw-bold" style={{ color: "#151875" }}>
                    ${trending.price}.00
                  </Card.Text>
                </Card.Body>
                <div className="hoverDiv">
                  <Button
                    className="hoverBtn"
                    as={Link}
                    to={`/productDetails/${trending._id}`}
                  >
                    See Details
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        {/* trending bottom */}

        <Row className="mt-5">
          
            <Col sm={8}>
             <Row>
               <Col className="">
               <div className="inner-off-section shadow p-3">
                <div className="left-text">
                  <h4 style={{color:"var(--main-color)"}} className="text-capitalize">23% off in all products</h4>
                  <a className="text-danger text-capitalize fw-bold">shop now</a>
                </div>
                <div className="right-img d-flex justify-content-end">
                  <img src="https://i.ibb.co/x116phH/imageclock.png" alt="" />
                </div>
              </div>
               </Col>
               <Col>
               <div className="inner-off-section shadow p-3 h-100">
                <div className="left-text">
                  <h4 style={{color:"var(--main-color)"}} className="text-capitalize">23% off in all products</h4>
                  <a className="text-danger text-capitalize fw-bold">Explore Now</a>
                </div>
                <div className="right-img d-flex justify-content-end">
                  <img src="https://i.ibb.co/7WCsVsD/imagebook.png" alt="" />
                </div>
              </div>
               </Col>
             </Row>
            </Col>
            <Col sm={4}>
              <div className="item row d-flex align-items-center">
               <div className="left-img col-lg-4 d-flex justify-content-center"style={{background:"lightgray"}}>
               <img src="https://i.ibb.co/ph7xyyZ/image-20.png" className="w-75" alt="" />
               </div>
                <div className="right-text col-lg-8">
                  <h5 className="text-capitalize">executive seat chair</h5>
                  <p className="price fw-bold">$32</p>
                </div>
              </div>
              <div className="item row d-flex align-items-center my-2">
               <div className="left-img col-lg-4 d-flex justify-content-center"style={{background:"lightgray"}}>
               <img src="https://i.ibb.co/ph7xyyZ/image-20.png" className="w-75" alt="" />
               </div>
                <div className="right-text col-lg-8">
                  <h5 className="text-capitalize">executive seat chair</h5>
                  <p className="price fw-bold">$32</p>
                </div>
              </div>
              <div className="item row d-flex align-items-center">
               <div className="left-img col-lg-4 d-flex justify-content-center"style={{background:"lightgray"}}>
               <img src="https://i.ibb.co/ph7xyyZ/image-20.png" className="w-75" alt="" />
               </div>
                <div className="right-text col-lg-8">
                  <h5 className="text-capitalize">executive seat chair</h5>
                  <p className="price fw-bold">$32</p>
                </div>
              </div>
             
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrendingProducts;
