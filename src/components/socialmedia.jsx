import React from "react";
import "./css/socialmedia.scss";

export default function socialmedia({ styles }) {
  return (
    <div className={`social-media ${styles}`}>
      <a href="http://google.com" className="fa fa-google">
        <span>Google</span>
      </a>
      <a href="http://facebook.com" className="fa fa-facebook">
        <span>Facebook</span>
      </a>
      <a href="http://youtube.com" className="fa fa-youtube">
        <span>YouTube</span>
      </a>
      <a href="http://instagram.com" className="fa fa-instagram">
        <span>Instagram</span>
      </a>
      <a href="http://pinterest.com" className="fa fa-pinterest">
        <span>pinterest</span>
      </a>
    </div>
  );
}
