import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopHeader from "./Pages/Header/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />

    </div>
  );
}

export default App;
