import React from "react";
import './home.css';
import top from '../../Assets/top.png';
import likes from '../../Assets/likes.png';
import touch from '../../Assets/touch.png';

const Features = () => {
    return (
        <div className="features">
        {/* <h1 className="home-divs-title-right-2">What are some Features?</h1> */}
        <h2 className="home-divs-h2-right-2">You can look up movies, add them to your <br/>"Watched List"! It could be simpler!</h2>
        <div className="custom-shape-divider-top-1686538417">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div> 
        <img src={top} alt="features img" className="features-img"/>
        </div> 
        
    );
    }
    export default Features;