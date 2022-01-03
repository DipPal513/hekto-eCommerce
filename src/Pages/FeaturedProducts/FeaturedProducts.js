import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Spinner} from "react-bootstrap";

const FeaturedProducts = () => {
    const [featuredproduct,setFeaturedproduct]=useState([]);
    const[loading,setisLoading]=useState(true);
    useEffect(()=>{
        fetch('https://desolate-depths-52945.herokuapp.com/allproducts')
            .then(res=>res.json())
            .then(data=>{
                setFeaturedproduct(data)
                setisLoading(false)
            })
    },[]);

    if (loading){
        return <Spinner animation="border"/>
    }
    return (
        <div className="mt-5">
            <h2 className="text-center pt-5 pb-5">Featured Products</h2>
            <Container>

                <Row xs={1} md={3} className="g-4">
                {
                featuredproduct.slice(0,3).map(featured=>(



                    <Col>
                        <Card className="border-0 text-center">
                            <Image  variant="top" src={featured.productImg} className="img-fluid w-50 mx-auto" />
                            <Card.Body>
                                <h6 className="text-danger"> {featured.productName}</h6>
                                <Card.Text>
                                    <h6>Code: {featured.productCode}</h6>
                                    <h6> ${featured.price}</h6>
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

export default FeaturedProducts;