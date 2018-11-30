import React, { Component } from "react";
import Landing from "./components/Landing";
import Overview from "./components/Overview.js";
import Header from "./components/landingComp/Header";
import Footer from "./components/landingComp/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarked,
  faWalking,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
library.add(faMapMarked, faWalking, faUsers);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/overview" component={Overview} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
