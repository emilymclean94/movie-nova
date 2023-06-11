import React from 'react';
import './home.css';
import review1 from '../Assets/review1.png';
import review2 from '../Assets/review2.png';
import review3 from '../Assets/review3.png';
import review4 from '../Assets/review4.png';
import review5 from '../Assets/review5.png';


const Marquee = () => {
    return (
      <div className="marquee">
        <h7>h7 className='review-title'</h7>
        <div className='marquee-container'>
                <img className='review-img' src={review1} alt="first review"/>
                <img className='review-img' src={review2} alt="second review"/>
                <img className='review-img' src={review3} alt="third review"/>
                <img className='review-img' src={review4} alt="fourth review"/>
                <img className='review-img' src={review5} alt="fifth review"/>
        </div>
        <div class="custom-shape-divider-top-1686416324">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
    )
}

export default Marquee;