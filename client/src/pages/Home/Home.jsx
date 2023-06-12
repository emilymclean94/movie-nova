import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from '../../Assets/homeGif.gif'
import './home.css'
import Intro from "./Intro";
import Features from "./Features";
import Trust from "./Trust";

const Home = () => {

  return (
<div>
    <Container className="home-body d-flex flex-row flex-wrap align-content-center bg-" id="home">
        <Col className="col-lg-6 image-container">
          <img 
            src={Hero}
          />
        </Col>
        <Col className="col-lg-6">
          <div className="text-container d-flex flex-wrap flex-column align-items-end m-2">
            <h1 className='display-3 sub-title'>
              INTO THE
            </h1>
            <h1 className='display-1 title'>
              STREAMVERSE
            </h1>
          </div>
        </Col>
    </Container>
    <div className="div-container">
    <Intro/>
    <Features/>
    <Trust/>      
    </div>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');
</style>
    </div>
  )
}

export default Home;