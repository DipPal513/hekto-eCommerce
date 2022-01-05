import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { Card, Spinner } from "react-bootstrap";
import Pages from "./Pages/Pages/Pages";
import NotFound from "./Pages/NotFound/NotFound";
import ShopList from "./Pages/ShopList/ShopList";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import ContactUspage from "./Pages/ContactusPage/ContactUspage";
import NavbarMenu from "./Pages/Header/NavbarMenu";
import TopHeader from "./Pages/Header/TopHeader";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BlogsPage from "./Pages/Blogpage/BlogsPage";
import Pagesshoplist from "./Pages/Pages/Pagesshoplist";
import AuthProvider from "./Contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";


export const UserContext = createContext(null)
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    fetch("https://desolate-depths-52945.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setisLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }
  const data = { products }
  return (
    <div className="App">
    <AuthProvider>
    <UserContext.Provider value={data}>
    <Router>
    <TopHeader />
      <NavbarMenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path="/contact">
            <ContactUspage/>
          </Route>
          <Route exact path='/products'>
            <Pages />
          </Route>
          <Route exact path='/pages'>
            <Pagesshoplist />
          </Route>
          <Route exact path='/shopList'>
            <ShopList />
          </Route>
          <Route exact path='/blogs'>
            <BlogsPage />
          </Route>
          <Route exact path='/cart/:id'>
            <Cart />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <PrivateRoute  path='/productDetails/:id'>
            <ProductDetails />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
    </AuthProvider>

    </div>
  );
}

export default App;
