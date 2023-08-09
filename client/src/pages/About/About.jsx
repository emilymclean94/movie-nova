import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import SearchBar from "../../components/SearchBar";
import "./about.css";

const styles = {
  icons: {
    color: "#de82ebe8",
  },
};

const About = () => {
  return (
    <Container className="about about-container" id="about">
      <SearchBar />
      <Row className="links">
        <Col>
          <a href="https://github.com/emilymclean94" style={styles.icons}>
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Emily</h6>
            </div>
          </a>
        </Col>
        <Col>
          <a href="https://github.com/keelyybug" style={styles.icons}>
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Keely</h6>
            </div>
          </a>
        </Col>
        <Col>
          <a href="https://github.com/EGARRISXN" style={styles.icons}>
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Ethan</h6>
            </div>
          </a>
        </Col>
        <Col>
          <a href="hhttps://github.com/Ashleyg5" style={styles.icons}>
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Ashley</h6>
            </div>
          </a>
        </Col>
        <Col>
          <a href="https://github.com/sweetkloid" style={styles.icons}>
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Sami</h6>
            </div>
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/emilymclean94/movie-nova"
            style={styles.icons}
          >
            <div className="icon-wrapper">
              <BsGithub />
              <h6>Repo</h6>
            </div>
          </a>
        </Col>
      </Row>
      <Container className="about-content">
        <h1>About</h1>
      </Container>
    </Container>
  );
};

export default About;
