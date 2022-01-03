import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";

const Ouroffers = () => {
  const [allservices, setAllservices] = useState([]);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    fetch("https://desolate-depths-52945.herokuapp.com/allservices")
      .then((res) => res.json())
      .then((data) => {
        setAllservices(data);
        setisLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div className="mt-5">
      <h2 className="text-center pt-5 pb-5">What Shopex Offer!</h2>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {allservices.map((service) => (
            <Col>
              <Card className="border-0 text-center">
                <Image
                  variant="top"
                  src={service.serviceImg}
                  className="img-fluid w-25 mx-auto"
                />
                <Card.Body>
                  <h6 className="text-danger"> {service.name}</h6>
                  <Card.Text>
                    <p>{service.serviceDescription}</p>
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

export default Ouroffers;
