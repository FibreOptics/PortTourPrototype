import React from "react";
import { Link } from "react-router-dom";
import "./appbar.scss";

export default function appbar() {
  const menu = [
    "Home",
    "Artwork",
    "About",
    "Work with me",
    "Commisions",
    "FAQ"
  ];
  return (
    <div className='appbar'>
      <div className='heading'>
        <h1>Mr.Tour's folio</h1>
      </div>
      <div className='navigation-tab'>
        <ul>
          {menu.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
      <div className='social-media'>
        <Link to='http://facebook.com' className='fa fa-google' />
        <Link to='http://facebook.com' className='fa fa-facebook' />
        <Link to='http://facebook.com' className='fa fa-youtube' />
        <Link to='http://facebook.com' className='fa fa-instagram' />
        <Link to='http://facebook.com' className='fa fa-pinterest' />
      </div>
    </div>
  );
}
