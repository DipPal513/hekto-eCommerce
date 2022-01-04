import React from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { BsFillGridFill,BsGrid1X2Fill } from 'react-icons/bs';
import '../../Styles/ProductHeaderFilter.css'
const ProductHeaderFilter = () => {
  return (
    <div className="productHeaderFilter my-4 py-5">
      <Row>
        <Col>
          <h3>Ecommerce Acceories & Fashion Item</h3>
          <p className="text-muted">Lorem ipsum dolor sit amet consecteter.</p>
        </Col>

        <Col className="d-flex align-items-center justify-content-evenly">
          <div className="page d-flex align-items-center justify-content-center">
            <p className="mb-0 me-2 text-capitalize">per page</p>
            <input type="number" className="w-25" name="" id="" />
          </div>
          <div className="sort d-flex align-items-center">
            <p className="mb-0 text-capitalize">sort By</p>

            <DropdownButton variant="" title="Name" id="input-group-dropdown-1">
              <Dropdown.Item href="#">Price</Dropdown.Item>
              <Dropdown.Item href="#">Popularity</Dropdown.Item>
              <Dropdown.Item href="#">New</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="view d-flex align-items-center">
              <p className="mb-0 text-capitalize me-2">View</p>
            <div className="icons d-flex align-items-center">
            <BsFillGridFill className="me-2"/>
              <BsGrid1X2Fill className="me-3"/>
              <input type="text" className="w-50"/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductHeaderFilter;
