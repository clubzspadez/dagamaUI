import React from "react";
import Work from "./Overview/Work";
import Team from "./Overview/Team";
import "../sass/base/_base.scss";
import "../sass/main.scss";

function Overview() {
  return (
    <div>
      <Work />
      <Team />
    </div>
  );
}

export default Overview;
