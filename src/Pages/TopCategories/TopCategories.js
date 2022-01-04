import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Spinner, Row, Card } from "react-bootstrap";
import { UserContext } from "../../App";

const TopCategories = () => {
 const data = useContext(UserContext);
  return (
    <div className="topCategories">
      <Container>
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--text-color)" }}
        >
          Top Categories
        </h2>

        <Row>
          {data.products.slice(25,29).map((product) => (
            <Col sm={3}>
              {" "}
              <Card
                className="h-100 text-center p-3 border-0"
                style={{ background: "#fff" }}
              >
                <Card.Img
                  variant="top"
                  className="img-fluid w-75 m-auto rounded-circle shadow p-3"
                  src={product.productImg}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#151875" }}>
                    {product.productName}
                  </Card.Title>
                  <Card.Text className="fw-bold" style={{ color: "#151875" }}>
                    ${product.price}.00
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopCategories;
