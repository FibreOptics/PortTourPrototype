import React from "react";
import "./each-art.scss";

const EachArt = ({ title, imgUrl }) => {
  console.log(this);
  return (
    <div style={{ backgroundImage: `url(${imgUrl})` }} className='menu-item'>
      <div className='content'></div>
    </div>
  );
};

export default EachArt;
