import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

const Cart = () => {
    
  return (
    <div className="cart mt-5">
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
               
              </tbody>
            </Table>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
