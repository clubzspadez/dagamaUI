import React from "react";
import "../../sass/layout/_services.scss";
import Service from "./Service";

const featured = [
  {
    icon: "",
    name: "Navigate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum."
  },
  {
    icon: "",
    name: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum."
  },
  {
    icon: "",
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
          {featured.map(feature => (
            <Service feature={feature} />
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
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
