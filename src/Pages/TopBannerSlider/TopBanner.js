import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

const TopBanner = () => {
  const topbanner = {
    backgroundColor: "#F2F0FF",
  };

  return (
    <div style={topbanner}>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row className="pt-5 pb-5">
              <Col md={6} sm={12} className="mt-5 mx-auto">
                <h6 className="text-danger">
                  Best Furniture For Your Castle....
                </h6>
                <h3>
                  New Furniture Collection
                  <br />
                  Trends in 2020
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <Button variant="danger">Shop Now</Button>
              </Col>

              <Col md={6} sm={12}>
                <img
                  className=" w-75 img-fluid"
                  src="https://i.ibb.co/gW0KqP5/sliderimg1.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="pt-5 pb-5">
              <Col md={6} sm={12} className="mt-5 mx-auto">
                <h6 className="text-danger">
                  Best Furniture For Your Castle....
                </h6>
                <h3>
                  New Furniture Collection
                  <br />
                  Trends in 2020
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <Button variant="danger">Shop Now</Button>
              </Col>

              <Col md={6} sm={12}>
                <img
                  className="d-block w-75 img-fluid"
                  src="https://i.ibb.co/H2Wm6Rw/gamestation.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="pt-5 pb-5">
              <Col md={6} sm={12} className="mt-5 mx-auto">
                <h6 className="text-danger">
                  Best Furniture For Your Castle....
                </h6>
                <h3>
                  New Furniture Collection
                  <br />
                  Trends in 2020
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <Button variant="danger">Shop Now</Button>
              </Col>

              <Col md={6} sm={12}>
                <img
                  className="d-block w-75 img-fluid"
                  src="https://i.ibb.co/nBJBFwf/image-1166.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default TopBanner;
