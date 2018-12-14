import React from "react";
import "../../sass/main.scss";
const sectionTitle = {
  visibility: "visible",
  animationDuration: "2s",
  animationName: "fadeInDown"
};
const cloned = {
  width: "330px",
  marginRight: "30px"
};

export default function Team() {
  return (
    <div>
      <div className="our-team-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 offset-lg-2 text-center wow fadeInDown"
              data-wow-duration="2s"
              style={sectionTitle}
            >
              <div className="section-title">
                <h2>Meet Our Team</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card__side card__side--front">Team Member</div>
                <div className="card__side card__side--back">Back Info</div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card__side card__side--front">Team Member</div>
                <div className="card__side card__side--back">Back Info</div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card__side card__side--front">Team Member</div>
                <div className="card__side card__side--back">Back Info</div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="card">
                <div className="card__side card__side--front">Team Member</div>
                <div className="card__side card__side--back">Back Info</div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="card">
                <div className="card__side card__side--front">Team Member</div>
                <div className="card__side card__side--back">Back Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
