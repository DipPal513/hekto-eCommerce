import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

const AllorderCompoent = (props) => {

        const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
        const [success, setSuccess] = useState(false);
        const{_id,productName,price,productImg,phone,useremail}=props.allorder;

        const handleDelete = () => {


            fetch(`https://desolate-depths-52945.herokuapp.com/deleteorder/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setShow(false);
                        setSuccess(true);
                    }
                });

        };




        return (
            <>
                {success && <Alert variant="success">Order Cancel successfully!</Alert>}
                <tr className="bg-white" >


                    <td>{_id}</td>
                    <td>{useremail}</td>
                    <td>{productName}</td>
                    <td>${price}</td>
                    <td>{phone}</td>
                    <td><img src={productImg} style={{height:'36px',width:'36px'}}/></td>
                    <td><Button variant="outline-danger" onClick={handleShow}>Cancel
                    </Button>



                    </td>

                </tr>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to delete?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
    );
};

export default AllorderCompoent;