import React from "react";
import './home.css';
import like from '../../Assets/likes.png';
import thumb from '../../Assets/thumb.png';

const Trust = () => {
    return (
        <div className="trust">
        {/* <h1 className="home-divs-title">Trust Us!</h1> */}
        <h2 className="home-divs-h2">No longer will you forget the name <br/> of "that really good show" you watched<br/> last year or a friends recommendation! You <br/>can store it all here with us at StreamVerse.</h2>
        <div className="custom-shape-divider-top-1686538780">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>
        <img className="trust-img" src={thumb} alt="intro img"/>
        </div>
    );
    }
export default Trust;