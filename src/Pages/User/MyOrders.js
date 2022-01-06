import React, {useEffect, useState} from 'react';

import {Button, Card, Col, Row, Spinner} from "react-bootstrap";
import UseAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const[userorders,setUserorders]=useState([]);
    const[isLoading,setIsloading]=useState(true);
    const [success,setSucess]=useState(false);
    const{user}=UseAuth();
    useEffect(()=>{
        fetch(`https://desolate-depths-52945.herokuapp.com/userorders?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                setUserorders(data)
                setIsloading(false)

            })

    },[success]);



    if(isLoading){
        return <Spinner animation="border" />;
    }

    return (
        <>
            <h2 className="pt-3 pb-3">Order History</h2>

            <Row xs={1} md={3} className="g-4"  data-aos="zoom-in">
                {
                    userorders.map(orders=>(
                        <Col>
                            <Card>
                                <div>
                                    <Card.Img variant="top" src={orders.productImg} className="img-fluid w-50 me-5 ps-3 pt-2"/>
                                    <Button variant='outline-danger' className="ms-5">Pending</Button>
                                </div>
                                <Card.Body>
                                    <Card.Title>{orders.productName}</Card.Title>
                                    <Card.Text>
                                        <h5> Total:${orders.price}</h5>
                                        <p>  Phone:{orders.phone}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>



                    ))
                }




            </Row>

        </>
    );
};

export default MyOrders;