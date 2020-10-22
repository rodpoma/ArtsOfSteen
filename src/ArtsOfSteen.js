import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";

import About from "./components/About";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/NavBar";
import Store from "./components/Store";
import Search from "./components/Search";

import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ArtsOfSteen = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="containerUltimate">
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/store" component={Store} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  );
};

export default ArtsOfSteen;
