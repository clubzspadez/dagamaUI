import React from "react";
import "../../sass/main.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    // <!-- ============== Header Area ============= -->
    <header className="hasShadow">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="logo">
              <NavLink to="/" activeClassName="active">
                <h1>
                  <a href="landing-mobile-app.html">
                    Dagama
                    <span>App</span>
                  </a>
                </h1>
              </NavLink>
            </div>
          </div>
          <div className="col-sm-9 col-6 text-right">
            <div className="main-menu about-us">
              <ul>
                <li>
                  <NavLink to="/overview" activeClassName="active">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" activeClassName="active">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact{" "}
                  </NavLink>
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
