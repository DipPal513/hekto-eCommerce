import React from 'react'
import { Card ,Col ,Button} from 'react-bootstrap'

const Blog = ({img,title}) => {
    return (
        <Col>
        {" "}
        <Card className='shadow rounded'>
          <Card.Img variant="top" src={img} className='h-100' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </Card.Text>
            <a href="#" >Read More</a>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Blog
