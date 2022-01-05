import React from 'react';
import {Col, Row, Nav, Navbar, Container} from "react-bootstrap";
import {Link, useRouteMatch} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import AddProducts from "../Admin/AddProducts";
import UseAuth from "../../hooks/useAuth";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { HiFolderAdd,HiUserAdd,HiShoppingCart,HiOutlineAdjustments } from "react-icons/hi";
import ManageProducts from "../Admin/ManageProducts";
import ManageOrder from "../Admin/ManageOrder";
import AddReview from "../User/AddReview";
import MyOrders from "../User/MyOrders";
import MakePayment from "../User/MakePayment";
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{user,admin}=UseAuth();
    const dashboardbg={
        background:'#F4F7FC',
        height:'100%',
        width:'100%',
        paddingBottom:'500px'
    }
    return (
        <div>
            <Row>
                <Col md={3} className="text-start ps-4 mt-4">

                    <h2>Hekto Dashboard</h2>


                    {
                        admin ?
                            <Nav  className="flex-column mt-3">
                                <Link to={`${url}/manageorders`} className="text-decoration-none text-black ps-3 pt-2"><BsFillCartCheckFill/> Manage Orders</Link>
                                <Link to="/dashboard/makeadmin" className="text-decoration-none text-black ps-3 pt-2"><HiUserAdd/> Make Admin</Link>
                                <Link to={`${url}/addproduct`} className="text-decoration-none text-black ps-3 pt-2"><HiFolderAdd/>Add Product</Link>
                                <Link to={`${url}/manageproduct`} className="text-decoration-none text-black ps-3 pt-2"><HiOutlineAdjustments/>ManageProduct</Link>



                            </Nav>

                            :
                            <Nav  className="flex-column mt-3">
                                <Link to="/dashboard/myorders" className="text-decoration-none text-black ps-3 pt-2"><HiShoppingCart/> My Orders</Link>
                                <Link to="/dashboard/addreview" className="text-decoration-none text-black ps-3 pt-2"><BiLike/> Add Review</Link>
                                <Link to="/dashboard/makepayment" className="text-decoration-none text-black ps-3 pt-2"><FaMoneyBill/> Payment</Link>



                            </Nav>
                    }

                </Col>
                <Col md={9} >
                    <Navbar>
                        <Container >
                            {/*<h5 className="text-start">Hello {user.displayName}</h5>*/}
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    {/*<Link to="/" className="text-decoration-none text-black-50">Go back to Home</Link>*/}
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Row style={dashboardbg}>
                        <Col md={12}>
                            <h2> Welcome to Dashboard</h2>
                            <Switch>

                                <Route path={`${path}/addreview`}>
                                    <AddReview/>
                                </Route>
                                <Route path={`${path}/myorders`}>
                                    <MyOrders/>
                                </Route>
                                <Route path={`${path}/makepayment`}>
                                    <MakePayment/>
                                </Route>
                                <Route path={`${path}/addproduct`}>
                                    <AddProducts/>
                                </Route>
                                <Route path={`${path}/manageproduct`}>
                                    <ManageProducts/>
                                </Route>
                                <Route path={`${path}/manageorders`}>
                                    <ManageOrder/>
                                </Route>



                            </Switch>


                        </Col>
                    </Row>


                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;