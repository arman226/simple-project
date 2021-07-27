import React, { Component}  from 'react';
import NavBar from './components/navigation-bar/navigation-bar.components';
import HomePage from './components/home-page/home-page.components';
import SupportPage from './components/support-page/support-page.components';
import IphonePage from './components/iphone-page/iphone-page.components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer.components';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>

      <Router>
        <Switch>
          <Route exact from="/" render={props => <HomePage {...props} />} />
          <Route exact path="/Iphone" render={props => <IphonePage {...props} />} />
          <Route exact path="/Support" render={props => <SupportPage {...props} />} />
        </Switch>
      </Router>
      
      <Footer/>
      </div>
    );
  }
}

export default App;
