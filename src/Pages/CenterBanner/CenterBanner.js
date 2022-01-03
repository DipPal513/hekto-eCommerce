import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FcOk } from "react-icons/fc";

const CenterBanner = () => {
    const centerbg={
        backgroundColor:'#F1F0FF',
        marginTop:'50px'
    }


    return (
        <div style={centerbg}>
            <Container>
                <Row>
                    <Col md={6} sm={12} className="text-end">
                        <img src="https://i.ibb.co/ZLnTvRq/bannersofa1.png" className="img-fluid w-75"/>

                    </Col>
                    <Col md={6} sm={12} className="text-start">
                        <h2 className="pt-5">Unique Features Of leatest &<br/>
                            Trending Poducts</h2>
                        <p className="text-start text-black-50"><FcOk/>  All frames constructed with hardwood solids and laminates</p>
                        <p className="text-start text-black-50"><FcOk/>  Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails</p>
                        <p className="text-start text-black-50"><FcOk/>  Arms, backs and seats are structurally reinforced</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CenterBanner;