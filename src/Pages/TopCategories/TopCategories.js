import React, { useEffect, useState } from "react";
import { Col, Container, Spinner, Row, Card } from "react-bootstrap";

const TopCategories = () => {
  const [topCategoriesProducts, setTopCategoriesProducts] = useState([]);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    fetch("https://desolate-depths-52945.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setTopCategoriesProducts(data);
        setisLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div className="topCategories">
      <Container>
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--text-color)" }}
        >
          Latest Blog
        </h2>

        <Row>
          {topCategoriesProducts.slice(14,18).map((product) => (
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
