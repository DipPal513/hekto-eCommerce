import React, {useEffect, useState} from 'react';
import {Spinner, Table} from "react-bootstrap";
import AllorderCompoent from "./AllorderCompoent";

const ManageOrder = () => {
    const[allorders,setAllorders]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);


    useEffect(()=>{
        fetch(`https://desolate-depths-52945.herokuapp.com/allorders`)
            .then(res=>res.json())
            .then(data=>{
                setAllorders(data)
                setLoading(false)
            })
    },[allorders]);
    if(isLoading){
        return <Spinner animation="border"/>
    }

    return (
        <div  data-aos="zoom-in">
            <h2>Manage Orders</h2>


            <Table  bordered className="bg-white">
                <thead>
                <tr className="bg-white-50">
                    <th>Order Id</th>

                    <th>Email Id</th>

                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    allorders?.map(allorder=>(<AllorderCompoent
                            key={allorder._id}
                            allorder={allorder}>

                        </AllorderCompoent>



                    ))

                }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;