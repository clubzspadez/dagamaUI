import React from "react";
const NavBar = () => {
  return (
    // <!-- ============== Offcanvas Menu Area =============
    <div className="offcanvas-menu">
      <span className="offcanvasmenu-close">
        <i className="icofont icofont-close-line" />
      </span>
      <div className="logo">
        <h1>
          <a href="landing-mobile-app.html">
            Dagama
            <span>App</span>
          </a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="landing-mobile-app.html">Home</a>
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
  );
};

export default NavBar;
