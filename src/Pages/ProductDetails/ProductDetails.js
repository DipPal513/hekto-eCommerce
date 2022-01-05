import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiTwotoneStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { BsHeart } from "react-icons/bs";
import '../../Styles/ProductDetails.css'
import useProductDetails from "../../hooks/useProductDetails";
const ProductDetails = () => {
    const { id } = useParams();
    const [product] = useProductDetails(id)
  const {
    productImg,
    productName,
    totalReview,
    review,
    price,
    description,
    category,
    Color,productCode
  } = product;

  return (
    <div className="productDetails">
      <Container>
        <Row className="py-5 my-5 shadow">
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={productImg} className="img-fluid" alt="" />
          </Col>
          <Col>
            <h3>{productName}</h3>
            <div className="d-flex align-items-center">
              <StarRatings
                 rating={review}
                starRatedColor="goldenrod"
                numberOfStars={5}
                name="rating"
              />
              <p className="text-info fw-bold mb-0 ms-2">({totalReview})</p>
            </div>
            <p className="text-info fw-bold mt-2">${price}</p>
            <div className="d-flex">
                <p className="fw-bold">Color: </p>
                <p className="fw-bold">{Color}</p>
            </div>
            <p className="text-muted">
             {description}
            </p>
            <div className="d-flex align-items-center ">
             <Button as={Link} to={`/cart/${id}`} variant="outline-danger" >Add To Cart</Button>
                <BsHeart className="ms-2" />
            </div>
            <div className="mt-3">
              <p className="fw-bold">Categories: {category}</p>
              <p className="fw-bold">Product Code: {productCode}</p>
              <p className="fw-bold">Share</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
