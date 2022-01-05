import React from 'react'
import { Card ,Col ,Button} from 'react-bootstrap'

const Blog = ({img,title}) => {
    return (
        <Col lg={4}>
        {" "}
        <Card className='shadow rounded'>
          <Card.Img variant="top" src={img} className='w-100 h-100' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                More off this less hello samlande lied much
                over tightly circa horse taped mightly
            </Card.Text>
            <a href="#" >Read More</a>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Blog
