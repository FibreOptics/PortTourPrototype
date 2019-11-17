import React from "react";
import "./css/artcollection.scss";
import Portfolio from "../components/portfolio";
import Appbar from "../components/appbar";
import Footer from "../components/footer";

const artcollection = () => {
  return (
    <div className='homepage'>
      <Appbar />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default artcollection;
