import React from "react";
import Picture from "./Picture";

const fakeData = {};
export default function Pictures() {
  return (
    <div>
      <div className="row">
        {fakeData.map((picture, index) => (
          <Picture picture={picture} key={index} />
        ))}
      </div>
    </div>
  );
}
