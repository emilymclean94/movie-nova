import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from '../../Assets/homeGif.gif'
import './home.css'

const Home = () => {

  return (

    <Container className="home-body d-flex flex-row flex-wrap align-content-center bg-black" id="home">
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
    
  )
}

export default Home;