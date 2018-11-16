import Header from "./landingComp/Header";
import Contact from "./landingComp/Contact";
import Hero from "./landingComp/Hero";
import Action from "./landingComp/Action";
import Services from "./landingComp/Services";
import "../sass/base/_base.scss";
import "../sass/layout/_contact.scss";

import React from "react";
class Landing extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
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
