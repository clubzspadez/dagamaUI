import React from "react";

const divStyle = {
  visibility: "visible",
  animationDuration: "2.5s",
  animationName: "zoomIn"
};
export default function Work() {
  return (
    <div>
      <div className="section-padding about-us">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 wow zoomIn"
              data-wow-duration="2.5s"
              style={divStyle}
            >
              <h2>How We Work</h2>
              <p>
                Whether it’s for work, a side project or even the next family
                vacation, Trello helps your team stay organized. It is a long
                established fact that a reader will be distracted by the of a
                page when looking at its layout. <br />
                The point of using Lorem Ipsum is that it has a normal distrib
                of letters, as opposed to using making it look like readable It
                is a long established fact English.
              </p>
              <a href="#" className="boxed-btn">
                See Project
              </a>
            </div>
          </div>
        </div>
        <img src="assets/img/about1.jpg" alt="" className="img-absulate" />
      </div>
    </div>
  );
}
