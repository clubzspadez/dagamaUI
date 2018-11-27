import React from "react";
import "../../sass/main.scss";

export default function Footer() {
  return (
    // <!-- ================ Footer area Start ============== -->
    <footer className="site-footer theme-2">
      <div className="container ptb-60">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="widget">
              <h4 className="widget-title">About</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 text-right">
            <div className="widget">
              <h4 className="widget-title">Policy</h4>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Licenses</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 text-right">
            <div className="widget">
              <h4 className="widget-title">Help</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Refunds</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="copywright">
                <div className="row">
                  <div className="col-md-6">
                    <p>Copyright 2017 - All Right Reserved</p>
                  </div>
                  <div className="col-md-6 text-right">
                    <ul>
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Term</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
