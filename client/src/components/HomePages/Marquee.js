import React from 'react';
import './Home.css';
import styled from '@emotion/styled'
import review1 from './homeimages/review1.png';
import review2 from './homeimages/review2.png';
import review3 from './homeimages/review3.png';
import review4 from './homeimages/review4.png';
import review5 from './homeimages/review5.png';


const Marquee = () => {
    return (
      <div className="marquee">
        <Reviews>Reviews</Reviews>
        <MarqueeContainer>
                <IMG src={review1} alt="first review"/>
                <IMG src={review2} alt="second review"/>
                <IMG src={review3} alt="second review"/>
                <IMG src={review4} alt="second review"/>
                <IMG src={review5} alt="second review"/>
        </MarqueeContainer>
        <div class="custom-shape-divider-top-1686416324">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
    )
}
const Reviews = styled.h1`
font-size: 5rem;
font-weight: bold;
color: #1e0876;
padding-bottom: 1em;
`
const MarqueeContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: hidden;
height: 25rem;
gap: 1rem;
gap-bottom: 3rem;
`
const IMG = styled.img`
-moz-animation: marquee 10s linear infinite;
-webkit-animation: marquee 10s linear infinite;
animation: marquee 10s linear infinite;
@keyframes marquee {
    0% {
        transform: translateX(100);
    }
    100% {
        transform: translateX(-100%);
    }}
    @-webkit-keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      @keyframes marquee {
        0% {
          -moz-transform: translateX(100%);
          -webkit-transform: translateX(100%);
          transform: translateX(100%)
        }
        100% {
          -moz-transform: translateX(-100%);
          -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
        }
      }
    `
export default Marquee;