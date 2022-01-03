import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopHeader from "./Pages/Header/TopHeader";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header/Header";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
    </div>
  );
}

export default App;
