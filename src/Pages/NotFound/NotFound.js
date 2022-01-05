import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import NavbarMenu from "../Header/NavbarMenu";
import Footer from "../FooterComponent/Footer";

const NotFound = () => {
    const history = useHistory();
    const handleBtn = () => {
        history.push('/')
    }
    return (
<>
    <NavbarMenu/>
        <div className='notfound container d-flex align-items-center justify-content-center'>

            <Row className='align-items-center justify-content-center'>
                <Col className='d-flex flex-column'><img src="https://i.ibb.co/0VMPygb/404notfound.png" alt="" />
                <Button variant='danger' onClick={handleBtn}>Back To Home</Button>
                </Col>
            </Row>

        </div>
    <Footer/>
</>
    )
}

export default NotFound
