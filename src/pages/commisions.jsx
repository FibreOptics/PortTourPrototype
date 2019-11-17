import React from "react";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import "./css/commissions.scss";

const commissions = () => {
  return (
    <div className='commissions'>
      <Appbar />
      <div style={{ backgroundColor: "white", textAlign: "center" }}>
        <h2>Commissions</h2>
      </div>
      <Footer />
    </div>
  );
};
export default commissions;
