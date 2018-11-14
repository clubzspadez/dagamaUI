import React, { Component } from "react";
import Landing from "./components/Landing";
import NavBar from "./components/landingComp/NavBar";
import Footer from "./components/landingComp/Footer";
import logo from "./logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarked,
  faWalking,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
library.add(faMapMarked, faWalking, faUsers);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
