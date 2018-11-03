import React from "react";
import { css } from "glamor";
import "../../sass/main.scss";

export default function Header() {
  return (
    // <!-- ============== Header Area ============= -->
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="logo">
              <h1>
                <a href="landing-mobile-app.html">
                  Dagama
                  <span>App</span>
                </a>
              </h1>
            </div>
          </div>
          <div className="col-sm-9 col-6 text-right">
            <div className="main-menu about-us">
              <ul>
                <li>
                  <a href="landing.html">BETA</a>
                </li>
                <li>
                  <a href="cart-overview.html">Overview</a>
                </li>
                <li>
                  <a href="faq-v1.html">FAQ</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="slack-main-menu main-menu offcanvas">
              <span className="offcanvas-menu-trigger">
                <i className="icofont icofont-justify-all" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
