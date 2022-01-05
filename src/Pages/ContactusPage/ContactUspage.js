import React from 'react';

import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import { FcPhoneAndroid,FcAssistant,FcShipped,FcAbout,FcGlobe } from "react-icons/fc";

const ContactUspage = () => {
    const contactbg={
        backgroundColor:"#F6F5FF"
    }
    return (
        <div >
         
            <div style={contactbg}>
                <h2 className="pt-5 pb-5 text-center">Contact Us</h2>
            </div>
            <Container>

                <Row className="mt-5 mb-5">
                    <Col md={6} sm={12}>
                        <h2 className="text-black">Information About us</h2>
                        <p className="text-black-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3 className="text-black">Contact Way</h3>
                        <Row className="pt-3">
                            <Col md={6} sm={12}>
                                <p className="text-black"><FcPhoneAndroid/> Tel: 877-67-88-99</p>
                                <p className="text-black"><FcAbout/> E-Mail: shop@store.com</p>

                            </Col>
                            <Col md={6} sm={12}>
                                <p className="text-black"><FcAssistant/> Support Forum<br/>For over 24hr</p>


                            </Col>
                        </Row>




                        <Row className="pt-3">
                            <Col md={6} sm={12}>
                                <p className="text-black"><FcGlobe/> 20 Margaret st, London<br/>Great britain, 3NM98-LK</p>


                            </Col>
                            <Col md={6} sm={12}>
                                <p className="text-black"><FcShipped/> Free standard shipping<br/>on all orders.</p>


                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row className="mt-5 mb-5">
                    <Col md={6} sm={12}>
                        <h2 className="text-black">Get In Touch</h2>
                        <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>


                        <Form className="mt-3">
                            <Row>
                                <Col>
                                    <Form.Group a controlId="formGridEmail">

                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Enter name" />
                                </Col>


                            </Row>


                            <Form.Group className="mb-3 mt-4 mb-4" controlId="formGroupEmail">

                                <Form.Control type="text" placeholder="Subject*" />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Type Your Massage here"
                                    style={{ height: '130px' }}
                                />
                            </FloatingLabel>
                        </Form>
                        <Button variant="danger" className="mt-3">Send Mail</Button>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src="https://i.ibb.co/SRRvss2/contact.png" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUspage;
