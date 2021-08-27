import React from "react";
import { Route } from "react-router";
import { Switch, useLocation } from "react-router-dom";
import NavMenu from "../components/Navmenu";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";
import styled from 'styled-components'

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Team from "../pages/Team";
import ScrollToTop from "../components/ScrollToTop";

const Section = styled.section `
    overflow-x: hidden;
`

const RootRoute = () => {
  let location = useLocation();

  return (
    
    <Section>
      <NavMenu />
      <AnimatePresence exitBeforeEnter>
      <ScrollToTop/>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/About' component={AboutUs} />
          <Route exact path='/Contact' component={ContactUs} />
          <Route exact path='/Team' component={Team}/>
        </Switch>
      </AnimatePresence>
      <Footer/>  
    </Section>
    
  );
};

export default RootRoute;
