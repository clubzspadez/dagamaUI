import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-services secondary-heading">
        <div className="service-icon">
          <FontAwesomeIcon className="icon-pack" icon={props.feature.icon} />
        </div>
        <h4>{props.feature.name}</h4>
        <p className="secondary-heading">{props.feature.description}</p>
      </div>
    </div>
  );
}
