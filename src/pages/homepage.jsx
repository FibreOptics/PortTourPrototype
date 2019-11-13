import React from "react";
import "./homepage.scss";
import Portfolio from "../components/portfolio";
import Appbar from "../components/appbar";
const homepage = () => {
  return (
    <div className='homepage'>
      <Appbar />
      <Portfolio />
    </div>
  );
};

export default homepage;
