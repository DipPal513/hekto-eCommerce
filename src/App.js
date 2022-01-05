import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { Spinner } from "react-bootstrap";
import Pages from "./Pages/Pages/Pages";
import NotFound from "./Pages/NotFound/NotFound";
import ShopList from "./Pages/ShopList/ShopList";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import ContactUspage from "./Pages/ContactusPage/ContactUspage";


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

    <UserContext.Provider value={data}>
    <Router>
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
          <Route exact path='/pages'>
            <Pages />
          </Route>
          <Route exact path='/shopList'>
            <ShopList />
          </Route>
          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
      

    </div>
  );
}

export default App;
