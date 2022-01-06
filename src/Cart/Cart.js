import React, {useState} from "react";
import {Alert, Button, Col, Container, Form, Row, Spinner, Table} from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import UseAuth from "../hooks/useAuth";

const Cart = () => {


  const [placeorder,setplaceOrder]=useState({});
  const [isLoading,setIsloading]=useState(false);
  const[userdetails,setUserdetails]=useState('');
  const [success, setSuccess] = useState(false);

  const {user}=UseAuth();
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const {
    _id,
    productImg,
    productName,
    totalReview,
    review,
    price,
    description,
    category,
    Color,productCode
  } = product;

  const handleOnBlur=e=>{
    const field=e.target.name;
    const value=e.target.value;
    const newuserdata={...userdetails};
    newuserdata[field]=value;
    setUserdetails(newuserdata);

  }

  const useremail=user.email;
  const username=user.displayName;
  const adress=userdetails.adress;
  const phone=userdetails.phone;

  const productorder={productName,productImg,price,category,Color,useremail,username,adress,phone};
  const handleplaceorder = e => {
    setIsloading(true);

    fetch('https://desolate-depths-52945.herokuapp.com/placeorder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productorder)
    })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setSuccess(true);
            setIsloading(false)
            e.target.reset();
          }
        })


    e.preventDefault();
  }
  //
  // if (isLoading){
  //   return <Spinner animation="border" />;
  // }


  return (
    <div className="cart mt-5">
      <h2 className="text-center text-black">Cart Checkout</h2>
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Product Img</th>
                  <th>Product Code</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{_id}</td>
                  <td>{productName}</td>
                  <td>${price}</td>
                  <td><img src={productImg} style={{height:'36px',width:'36px'}}/></td>
                  <td>{productCode}</td>
                  <td>${price}</td>

                </tr>
               
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <Form onSubmit={handleplaceorder}>
              <Form.Group className="mb-3 w-100 mx-auto" controlId="formBasicEmail">

                <Form.Control type="email" placeholder="Enter email" name="email"  defaultValue={user.email} />

              </Form.Group>
              <Form.Group className="mb-3 w-100 mx-auto" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Enter name"  name="name"  defaultValue={user.displayName} />

              </Form.Group>
              <Form.Group className="mb-3 w-100 mx-auto" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Enter Phone Number"  name="phone"  onBlur={handleOnBlur}/>

              </Form.Group>
              <Form.Group className="mb-3 w-100 mx-auto" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Enter Adress"   name="adress" onBlur={handleOnBlur}/>

              </Form.Group>
              <Button variant="success"  type="submit" className="w-100 mb-5">Place Order</Button>
            </Form>
            {isLoading && <Spinner animation="border" />}
            {success && <Alert variant="success">Order Pllace successfully!</Alert>}


          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
