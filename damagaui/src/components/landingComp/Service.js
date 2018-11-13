import React from "react";

const objProp = {};

objProp.name = "Reggie";
objProp.description = "Reggie lets his hair grow";

export default function Service(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="service-icon">
          <i className="icofont icofont-tools-alt-2" />
        </div>
        <h4>{props.feature.name}</h4>
        <p>{props.feature.description}</p>
      </div>
    </div>
  );
}
