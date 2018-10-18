import React from "react";

export default function Action() {
  return (
    // <!-- ================ Call to Action Area Start ============== -->
    <div className="cta-area padding-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-md-auto text-center">
            <h3>Why Our App ?</h3>
            <p>
              Faster and secuire mail service that available for across devices.
              Sync upto 15 GB Data and A single username and password gets you
              into everything Google.
            </p>{" "}
            <a
              href="https://www.youtube.com/watch?v=zr1PmqXHqrA"
              className="video-play-btn mfp-iframe"
            >
              <img src="assets/img/video-play-btn.png" alt="" />{" "}
              <span>See Overview</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    // <!--================C all to Action Area End==============-->
  );
}
