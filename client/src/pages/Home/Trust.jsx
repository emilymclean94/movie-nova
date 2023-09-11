import React from "react";
import "./home.css";
// import like from "../../Assets/likes.png";
import thumb from "../../Assets/thumb.png";

const Trust = () => {
  return (
    <div className="trust">
      {/* <h1 className="home-divs-title">Trust Us!</h1> */}
      <h2 className="intro-trust-h2">
        No longer will you forget the name of "that really good show" you
        watched last year or a friends recommendation! You can store it all here with us at StreamVerse.
      </h2>
      <div className="shape-divider-three">
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
      <img className="trust-img" src={thumb} alt="intro img" />
    </div>
  );
};
export default Trust;
