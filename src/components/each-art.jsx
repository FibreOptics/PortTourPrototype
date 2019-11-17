import React from "react";
import "./css/each-art.scss";

const EachArt = ({ title, imgUrl }) => {
  console.log(this);
  return (
    <div className="menu-item">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="background-image"
      />
      <div className="content"></div>
    </div>
  );
};

export default EachArt;
