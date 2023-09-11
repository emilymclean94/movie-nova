import React from "react";
import { Container, Col } from "react-bootstrap";
import Intro from "./Intro";
import Features from "./Features";
import Trust from "./Trust";
import Hero from "../../Assets/24OD.gif";
// import Hero from "../../assets/homeGif.gif";
import "./home.css";



const Home = () => {
  return (
    <div className="home-background">
      <Container
        className="home-container"
        id="home"
      >
        <Col className="image-container">
          <img className='hero-image' src={Hero} alt="hero gif of astronaut spinning around"/>
        </Col>
        <Col className="">
          <div className="text-container">
            <h1 className="display-3 sub-title">INTO THE</h1>
            <h1 className="display-1 title">STREAMVERSE</h1>
          </div>
        </Col>
      </Container>
      
      <div className="div-container">
        <Intro />
        <Features />
        <Trust />
      </div>
    </div>
  );
};

export default Home;
