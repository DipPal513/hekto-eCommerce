import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import Blog from "./Blog";

const LatestBlog = () => {
  return (
      <div className="latestBlog my-5 mt-5">
        <Container>
          <h2
              className="text-center mb-5 fw-bold"
              style={{ color: "var(--text-color)" }}
          >
            Latest Blog
          </h2>
          <Row>
            <Blog
                title="Top essential Trends in 2021"
                img="https://i.ibb.co/7K3JQpN/blogimg1.png"
            />
            <Blog
                title="Top essential Trends in 2021"
                img="https://i.ibb.co/yqKCQJn/blogimg2.png"
            />
            <Blog
                title="Top essential Trends in 2021"
                img="https://i.ibb.co/jzL64jN/2dc-Yhvb-HV-M.png"
            />
          </Row>
        </Container>
      </div>
  );
};

export default LatestBlog;
