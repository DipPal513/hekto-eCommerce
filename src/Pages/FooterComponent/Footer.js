import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, Nav, Row} from "react-bootstrap";
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";

const Footer = () => {
    const footerbg={
        backgroundColor:'#EEEFFB'

    }
    return (
        <div style={footerbg}>

         <Container>
             <Row>
                 <Col md={5} sm={6} >
                     <h4 className="text-black pt-5">Hekto</h4>
                     <InputGroup className="mb-3">
                         <FormControl aria-label="Text input with dropdown button" placeholder="Enter Email Adress" />
                         <Button variant="danger">Subscribe</Button>


                     </InputGroup>
                     <h6 className="text-black-50">Contact Info</h6>
                     <p className="text-black-50" >17 Princess Road, London, Greater London NW1 8JR, UK</p>

                 </Col>
                 <Col md={3} sm={6}>
                     <h5 className="text-black pt-5 ps-2">Catagories</h5>
                     <Nav  className="text-black-50 flex-column">
                         <Nav.Link  className="text-black-50">Laptops & Computers</Nav.Link>
                         <Nav.Link  className="text-black-50">Cameras & Photography</Nav.Link>
                         <Nav.Link  className="text-black-50">Smart Phones & Tablets</Nav.Link>
                         <Nav.Link  className="text-black-50">Video Games & Consoles</Nav.Link>
                         <Nav.Link  className="text-black-50">Waterproof Headphones</Nav.Link>

                     </Nav>
                 </Col>
                 <Col md={2}>
                     <h5 className="text-black pt-5 ps-2">Customer Care</h5>
                     <Nav  className="text-black-50 flex-column">
                         <Nav.Link  className="text-black-50">My Account</Nav.Link>
                         <Nav.Link  className="text-black-50">Discount</Nav.Link>
                         <Nav.Link  className="text-black-50">Returns</Nav.Link>
                         <Nav.Link  className="text-black-50">Order history</Nav.Link>
                         <Nav.Link  className="text-black-50">Order Tracking</Nav.Link>

                     </Nav>

                 </Col>
                 <Col md={2} className="text-start">

                     <h5 className="text-black pt-5 ps-2">Pages</h5>
                     <Nav  className="text-black-50 flex-column">
                         <Nav.Link  className="text-black-50">Blog</Nav.Link>
                         <Nav.Link  className="text-black-50">Browse the Shop</Nav.Link>
                         <Nav.Link  className="text-black-50">Category</Nav.Link>
                         <Nav.Link  className="text-black-50">Pre-Built Pages</Nav.Link>
                         <Nav.Link  className="text-black-50">Visual Composer Elements</Nav.Link>
                         <Nav.Link  className="text-black-50">WooCommerce Pages</Nav.Link>

                     </Nav>
                 </Col>
             </Row>

             <div className="pb-4 d-flex pt-4">
                 <div className="text-start">
                     <h6 className="text-black-50">©Webecy - All Rights Reserved</h6>
                 </div>
                 <div className="text-end ms-auto d-flex">

                     <BsFacebook className="me-2"/>
                     <BsInstagram className="me-2"/>
              <BsTwitter/>
                 </div>
             </div>
         </Container>
        </div>
    );
};

export default Footer;