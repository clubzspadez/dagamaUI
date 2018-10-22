import React from "react";

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
          <div className="col-lg-2 col-sm-6">
            <div className="widget">
              <h4 className="widget-title">Policy</h4>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Licenses</a>
                </li>
                <li>
                  <a href="#">Refunds</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
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
          <div className="col-lg-4 col-sm-6">
            <div className="widget">
              <h4 className="widget-title">Subscribe Newsletter</h4>
              <form action="#">
                <input type="text" placeholder="Your email address" />
                <button className="boxed-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="copywright">
                <div class="row">
                  <div class="col-md-6">
                    <p>Copyright 2017 - All Right Reserved</p>
                  </div>
                  <div class="col-md-6 text-right">
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
