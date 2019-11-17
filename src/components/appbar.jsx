import React from "react";
import { withRouter } from "react-router-dom";

import "./css/appbar.scss";
import SocialMedia from "./socialmedia";

const appbar = ({ history }) => {
  const menu = [
    { title: "Home", link: "/" },
    { title: "Artwork", link: "/Illustrations" },
    { title: "About", link: "/About" },
    { title: "Work with me", link: "/WorkWithMe" },
    { title: "Commisions", link: "/Commissions" }
  ];

  return (
    <div className='appbar'>
      <div className='heading'>
        <h1>Mr.Tour's Artworks</h1>
      </div>
      <div className='navigation-tab'>
        <ul>
          {menu.map(x => (
            <li onClick={() => history.push(x.link)}>{x.title}</li>
          ))}
        </ul>
      </div>
      <SocialMedia styles='appbar' />
    </div>
  );
};
export default withRouter(appbar);
