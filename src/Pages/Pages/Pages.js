import React, { useContext } from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { UserContext } from "../../App";
import "../../Styles/Pages.css";
import ProductHeaderFilter from "../ProductHeaderFIlter/ProductHeaderFilter";
import NavbarMenu from "../Header/NavbarMenu";
const Pages = () => {
  const data = useContext(UserContext);
  return (
    <div className="pages">
        <NavbarMenu/>
      <Container>
     
          <ProductHeaderFilter />
  
        <div className="pages-products my-5">
          <Row>
            {data.products.slice(0,12).map((product) => (
              <Col md={3} className="mb-4">
                <Card className="border-0 text-center h-100">
                  <Card.Img variant="top" className="m-auto p-3" src={product.productImg} style={{background:"#f6f7fb"}}/>
                  <Card.Body>
                    <Card.Title style={{color:"var(--text-color)"}}>{product.productName}</Card.Title>
                    <div className="dots d-flex align-items-center justify-content-center my-3">
                      <span></span>
                      <span className="mx-2"></span>
                      <span></span>
                    </div>
                  <p className="fw-bold">${product.price}</p>
                  </Card.Body>
                </Card>{" "}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Pages;
