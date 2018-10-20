import NavBar from "./pageComp/NavBar";
import Header from "./pageComp/Header";
import Contact from "./pageComp/Contact";
import Hero from "./pageComp/Hero";
import Action from "./pageComp/Action";
import Services from "./pageComp/Services";
import React from "react";
class Landing extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Hero />
        <Action />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default Landing;
