import React from "react";
import "../../sass/layout/_services.scss";

export default function Services() {
  return (
    // <!-- ================ Services Area Start ============== -->
    <div className="service-area theme-2 padding-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                {" "}
                <i className="icofont icofont-tools-alt-2" />
              </div>
              <h4>Navigate</h4>
              <p>
                Dagama is specifically designed to be simple to use. We've kept
                in mind clarity and convenience for all users.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                {" "}
                <i className="icofont icofont-rocket-alt-1" />
              </div>
              <h4>Connect</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                {" "}
                <i className="icofont icofont-diamond" />
              </div>
              <h4>Explore</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                {" "}
                <i className="icofont icofont-users" />
              </div>
              <h4>Share</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            {" "}
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
    // <!--================Services Area End==============-->
  );
}
