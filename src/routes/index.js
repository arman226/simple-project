import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "../components/Navmenu";
<<<<<<< HEAD
import Footer from "../components/footer"
=======
import Footer from "../components/footer";

>>>>>>> 2eff07e21711064954b44e614124d25f4a485158
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const RootRoute = () => {
  return (
    <Router>
      <NavMenu />
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/About' component={AboutUs} />
        <Route exact path='/Contact' component={ContactUs} />
<<<<<<< HEAD
      <Footer/>
=======
      <Footer/>  
>>>>>>> 2eff07e21711064954b44e614124d25f4a485158
    </Router>
  );
};

export default RootRoute;
