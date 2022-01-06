import React, {useState} from 'react';
import {Form, Button, Alert, Spinner} from "react-bootstrap";
import { BsFillCloudUploadFill } from "react-icons/bs";

const AddProducts = () => {

     const [addingservice,setAdddedService]=useState(false);
    const [newproduct,setNewProduct]=useState({});
    const [success, setSuccess] = useState(false);


    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newProductdata = {...newproduct};
        newProductdata[field] = value;
        console.log(newProductdata)
        setNewProduct(newProductdata);

    }
    const productName=newproduct.name;
    const productImg=newproduct.image;
    const price=newproduct.price;
    const productCode=newproduct.code;
    const Color=newproduct.Color;
    const review=newproduct.review;
    const category=newproduct.category;
    const description=newproduct.description;
    const totalReview=newproduct.totalReview;

    const handleAddproduct = e => {

        const productdata={productName,productImg,price,productCode,review,category,Color,description,totalReview}
        // setAdddedService(true);
        setSuccess(false);
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('productName', name);
        // formData.append('description', description);
        // formData.append('productImg', image);
        // formData.append('price', price);
        // formData.append('productCode', code);
        // formData.append('Color', color);
        // formData.append('category', category);
        // formData.append('review', review);
        //
        // console.log(formData.name);
        fetch("https://desolate-depths-52945.herokuapp.com/addproduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productdata),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    e.target.reset();
                    setSuccess(true);
                }
            });
        e.preventDefault();




    }


    return (
        <div data-aos="zoom-in">
            <h2 className="text-center pt-4">Add Product</h2>
            {success && <Alert variant='success'>Service Added Succesfully!</Alert> }
            <Form onSubmit={handleAddproduct}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Enter Product Name" name="name"  onBlur={handleOnBlur}
                    />

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Product Price" name="price"  onBlur={handleOnBlur}/>

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Image Link" name="image"  onBlur={handleOnBlur}/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Prodcut Code" name="code"  onBlur={handleOnBlur}/>

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Prodcut raating" name="review"  onBlur={handleOnBlur}/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Prodcut totalReview" name="totalReview"  onBlur={handleOnBlur}/>

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Prodcut Color" name="Color"  onBlur={handleOnBlur}/>

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Prodcut Category" name="category"  onBlur={handleOnBlur}/>

                </Form.Group>


                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Product Description" name="description"  onBlur={handleOnBlur}
                    />
                </Form.Group>

                {addingservice  && <Spinner animation="border" />}
                <div className="mx-auto text-center">
                    <Button variant="primary" type="submit" className="w-50 ">
                        Add Service
                    </Button>
                </div>
            </Form>

        </div>
    );
};

export default AddProducts;