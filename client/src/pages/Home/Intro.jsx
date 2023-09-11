import React from "react";
import "./home.css";
// import thumb from "../../Assets/thumb.png";
import touch from "../../Assets/touch.png";

const Intro = () => {
  return (
    <div className="intro">
      {/* <h1 className="home-divs-title">What is Streamverse?</h1> */}
      <h2 className="intro-trust-h2">
        StreamVerse is a social media platform for movie lovers to connect and form a community!
      </h2>
      <div className="shape-divider-one">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <img className="intro-img" src={touch} alt="intro img" />
    </div>
  );
};

export default Intro;
