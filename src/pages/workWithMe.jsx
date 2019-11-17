import React from "react";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import "./css/workWithMe.scss";

const workWithMe = () => {
  return (
    <div className='workWithMe'>
      <Appbar />
      <div style={{ backgroundColor: "white", textAlign: "center" }}>
        <h2>Work with me</h2>
      </div>
      <Footer />
    </div>
  );
};
export default workWithMe;
