import React from "react";
import "./css/homepage.scss";
import Portfolio from "../components/portfolio";
import Appbar from "../components/appbar";
import Footer from "../components/footer";

const homepage = () => {
  return (
    <div className='homepage'>
      <Appbar />
      <div style={{ backgroundColor: "white", textAlign: "center" }}>
        <h2>Homepage</h2>
      </div>
      <Footer />
    </div>
  );
};

export default homepage;
