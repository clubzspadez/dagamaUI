import React from "react";
import "../../sass/main.scss";

import Service from "./Service";

const featured = [
  {
    icon: "map-marked",
    name: "Navigate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum."
  },
  {
    icon: "walking",
    name: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum."
  },
  {
    icon: "users",
    name: "Share",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum."
  }
];

export default function Services() {
  return (
    // <!-- ================ Services Area Start ============== -->
    <div className="service-area theme-2 padding-80">
      <div className="container">
        <div className="row">
          {featured.map((feature, index) => (
            <Service feature={feature} key={index} />
          ))}
        </div>

        <div className="row download">
          <div className="col-lg-12 text-right">
            <div className="col-lg-6 text-center" />
            <h1>Lets navigate the world together!</h1>
            <a href="#" className="store-btn">
              <i className="icofont icofont-brand-apple" /> App Store
            </a>
            <a href="#" className="store-btn">
              <i className="icofont icofont-ui-play" /> Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
    /* // <--================Services Area End==============--> */
  );
}
