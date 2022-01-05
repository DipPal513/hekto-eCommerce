import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/" className="text-decoration-none text-black pt-2">
                <h3>Hekto</h3>
              </Link>


            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className="ms-4">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/pages">Pages</Nav.Link>

                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link >
                  <Link to="/contact" className="text-decoration-none text-black">
                    Contact
                  </Link>

                 </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarMenu;
