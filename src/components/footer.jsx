import React from "react";
import "./css/footer.scss";
import SocialMedia from "./socialmedia";

const footer = () => {
  return (
    <div className="footer">
      <div className="foot-text">
        <span>
          **Art illustrated in the prototype are from
          https://designm.ag/resources/40-creative-concept-art-examples/
        </span>
      </div>
      <SocialMedia styles="footer" />
    </div>
  );
};
export default footer;
