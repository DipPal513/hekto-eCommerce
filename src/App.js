import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopHeader from "./Pages/Header/TopHeader";
import NavbarMenu from "./Pages/Header/NavbarMenu";
import TopBanner from "./Pages/TopBannerSlider/TopBanner";
import FeaturedProducts from "./Pages/FeaturedProducts/FeaturedProducts";
import LatestProduct from "./Pages/LatestProducts/LatestProduct";
import Ouroffers from "./Pages/OurserviceOffers/Ouroffers";
import CenterBanner from "./Pages/CenterBanner/CenterBanner";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <NavbarMenu></NavbarMenu>
        <TopBanner/>
        <FeaturedProducts/>
      <LatestProduct/>
        <Ouroffers/>
        <CenterBanner/>

    </div>
  );
}

export default App;
