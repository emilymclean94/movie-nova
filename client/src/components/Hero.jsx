import React from "react";
import blue from "../Assets/blue.gif";

const HeroLeft = () => {

  return (
    <div className='image-container' sx={commonStyles}>
      <img src={blue} className="blue" alt="cool" />
    </div>
  );
};

const HeroRight = () => {

  return (
    <div className="text-container">
        <h3 className='sub-title'>
          INTO THE
        </h3>
        <h3 className='title'>
          STREAMVERSE
        </h3>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='app-container'>
      <div className='left-container'>
        <HeroLeft />
      </div>
      <div classNAme='right-container'>
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;