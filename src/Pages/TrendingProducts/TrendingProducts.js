import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";

const TrendingProducts = () => {
  const data = useContext(UserContext)
  return (
    <div className="trending-products py-5">
      <Container>
        <h2 className="text-center mb-5">Trending Products</h2>
        <Row>
          {data.products.slice(11, 15).map((trending, index) => (
            <Col xs={1} md={3}>
              <Card
                className="h-100 text-center p-3 shadow border-0"
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
              </Card>
            </Col>
          ))}
        </Row>
        {/* trending bottom */}

        <Row className="mt-5">
          
            <Col sm={8}>
              <div className="inner-off-section">
                <div className="left-text">
                  <h4>23% off in all products</h4>
                  <button>shop now</button>
                </div>
                <div className="right-img">
                  <img src="" alt="" />
                </div>
              </div>
            </Col>
   
        </Row>
      </Container>
    </div>
  );
};

export default TrendingProducts;
