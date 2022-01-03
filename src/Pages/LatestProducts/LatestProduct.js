import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Spinner} from "react-bootstrap";

const LatestProduct = () => {
    const [latestproduct,setLatestProduct]=useState([]);
    const[loading,setisLoading]=useState(true);
    useEffect(()=>{
        fetch('https://desolate-depths-52945.herokuapp.com/allproducts')
            .then(res=>res.json())
            .then(data=>{
                setLatestProduct(data)
                setisLoading(false)
            })
    },[]);

    if (loading){
        return <Spinner animation="border"/>
    }
    return (
        <div className="mt-5">
            <h2 className="text-center pt-5 pb-5">Latest Products</h2>
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        latestproduct.slice(4,10).map(latest=>(



                            <Col>
                                <Card className="border-0 text-center">
                                    <Image  variant="top" src={latest.productImg} className="img-fluid w-50 mx-auto" />
                                    <Card.Body>
                                        <h6 className="text-danger"> {latest.productName}</h6>
                                        <Card.Text>
                                            <h6>Code: {latest.productCode}</h6>
                                            <h6> ${latest.price}</h6>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>




                        ))

                    }
                </Row>
            </Container>

        </div>
    );
};

export default LatestProduct;