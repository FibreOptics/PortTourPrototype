import React from "react";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import "./css/about.scss";

const about = () => {
  return (
    <div className='about'>
      <Appbar />
      <div className='main-container'>
        {/* <h2>About</h2> */}
        <div className='about-container'>
          <div className='profile-pic'>img</div>
          <div className='text'>
            <strong>About me</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              facilisis, est in accumsan tristique, sapien nunc malesuada ante,
              nec bibendum tortor velit eget odio. In vel turpis vulputate,
              venenatis ex ornare, ornare dolor. Nulla in dui non risus porta
              elementum nec non ipsum. Ut semper, eros vitae ullamcorper
              sodales, leo libero ultrices mi, quis pharetra purus eros nec
              nisl. Mauris quis faucibus velit. Aenean ullamcorper ullamcorper
              mauris at finibus. Sed vitae sollicitudin risus. Donec non
              hendrerit tortor. Aenean lobortis massa eget augue fermentum, ac
              vulputate quam varius. Nunc non urna justo.
            </p>
          </div>
        </div>
        <div className='resume'>Resume</div>
        <div>IG component</div>
      </div>
      <Footer />
    </div>
  );
};
export default about;
