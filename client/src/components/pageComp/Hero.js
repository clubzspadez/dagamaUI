import React from "react";

export default function Hero() {
  return (
    // <!-- ================ Hero Area Start ============== --></div>
    <div className="hero-area theme-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-md-auto col-md-11 pdt-100 ">
            <h1>Find events. Near you.</h1>
            <p>
              Dagama utilizes geo-tracking nodes to find events that are nearest
              to your location, and sends you notifications in the future for
              similar events.
            </p>{" "}
            <a href="#" className="boxed-btn">
              Download
            </a>
            <a href="#" className="borderd-btn">
              Learn more
            </a>
          </div>
          <div
            className="col-lg-5 text-right wow slideInRight"
            data-wow-duration="3s"
            data-wow-delay=".3s"
          >
            <img src="assets/img/ben1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-social-icon">
        <ul>
          <li>
            <a href="#">
              <i className="icofont icofont-social-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icofont icofont-social-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icofont icofont-social-google-plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icofont icofont-social-pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    // <!--================H ero Area end==============-->
  );
}
