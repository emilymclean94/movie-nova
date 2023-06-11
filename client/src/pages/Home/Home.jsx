import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import Scroll1 from "../../components/Scroll";
import Reviews from "../../components/Reviews";

const Home = () => {

  return (

    <Container className="home-body" id="home">

      <Container className="home-content">
        <Hero />
        <Scroll1 />
        <Reviews />
      </Container>
      
    </Container>
    
  )
}

export default Home;