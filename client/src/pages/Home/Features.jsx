import React from "react";
import "./home.css";
import top from "../../Assets/top.png";
// import likes from "../../Assets/likes.png";
// import touch from "../../Assets/touch.png";

const Features = () => {
  return (
    <div className="features">
      <div className="features-content-container">
        <h2 className="features-h2">
          Look up movies and add them to your "Watched List"! It
          couldn't be simpler!
        </h2>
        <img src={top} alt="features img" className="features-img" />
      </div>

      <div className="shape-divider-two">
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
export default Features;
