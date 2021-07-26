import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "../components/Navmenu";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const RootRoute = () => {
  return (
    <Router>
      <NavMenu />
      <div style={{ marginTop: 100 }}>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/About' component={AboutUs} />
        <Route exact path='/Contact' component={ContactUs} />
      </div>
    </Router>
  );
};

export default RootRoute;
