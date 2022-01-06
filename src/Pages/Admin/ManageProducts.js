import React, {useEffect, useState} from 'react';
import {Alert, Button, Spinner, Table} from "react-bootstrap";

const ManageProducts = () => {
    const [allproduct,setAllproducts]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch(`https://desolate-depths-52945.herokuapp.com/allproducts`)
            .then(res=>res.json())
            .then(data=>{
                setAllproducts(data)
                setLoading(false)
            })
    },[allproduct]);
    console.log(allproduct);
    const handleDelete = (id) => {


        fetch(`https://desolate-depths-52945.herokuapp.com/deleteproduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {

                    setSuccess(true);
                }
            });

    };
    if(isLoading){
        return <Spinner animation="border"/>
    }
    return (
        <div data-aos="zoom-in">
            <h2>Manage Products</h2>
            {success && <Alert variant="success" >Product delete!</Alert>}
            <Table  bordered className="bg-white">
                <thead>
                <tr className="bg-white-50">
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                    <th>Product Price</th>
                    <th>Product Category</th>
                    <th>Product Color</th>
                    <th>Action</th>



                </tr>
                </thead>
                <tbody>
                {
                    allproduct?.map(products=>(  <tr className="bg-white" key={products?._id}>


                            <td>{products?._id}</td>
                            <td>{products?.productName}</td>
                            <td><img src={products?.productImg} style={{height:'36px',width:'36px'}}/></td>

                            <td>{products?.description.slice(0,110)}</td>

                            <td>${products?.price}</td>
                            <td>{products?.category}</td>
                            <td>{products?.Color}</td>

                            <td><Button variant="outline-danger" type="submit" onClick={()=>handleDelete(products?._id)}>Delete</Button></td>

                        </tr>
                    ))
                }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;