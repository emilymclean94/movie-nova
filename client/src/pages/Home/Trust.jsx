import React from "react";
import "./home.css";
import thumb from "../../Assets/thumb.png";

const Trust = () => {
  return (
    <div className="trust">
      <div className="trust-content-container">
        <h2 className="intro-trust-h2">
          No longer will you forget the name of that show you watched last year
          or a friend's recommendation! You can save it all on StreamVerse.
        </h2>
        <img className="trust-img" src={thumb} alt="intro img" />
      </div>
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
    </div>
  );
};
export default Trust;
