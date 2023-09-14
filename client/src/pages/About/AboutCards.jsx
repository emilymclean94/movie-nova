import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import "./about.css";

const AboutCards = ({ headshot, name, ghLink, liLink, bio }) => {
  return (
    <Card className="bio-card m-2">
      <Row>
        <Col xs={6}>
          <Card.Img variant="top" src={headshot} />
        </Col>
        <Col xs={6}>
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Text>{bio}</Card.Text>
          <div className="card-btn-container">
            <a href={ghLink}>
              <FaSquareGithub size={50} fill="#b279d8f5" className="gh-icon" />
            </a>
            <a href={liLink}>
              <FaLinkedin size={50} fill="#b279d8f5" className="li-icon" />
            </a>
          </div>
        </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default AboutCards;
