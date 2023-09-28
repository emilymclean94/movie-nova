import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import WLMovieInfoBtn from "./WLMovieInfoBtn";
import WLMovieDeleteBtn from "./WLMovieDeleteBtn";
import "./dashboard.css";

const WatchListCard = ({ movie, username }) => {
  const { title, genre, release_date, poster_path } = movie;

  return (
    <Card 
    className="watchlist-card bg-transparent border-top">
      <Row className="card-body-container">
        <Col>
          <Card.Img
            className="card-img"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            style={{width:'130px'}}
          ></Card.Img>
        </Col>
        <Col>
          <Card.Body className="watchlist-card-body"
          style={{color: "white"}}>
            <Row>
              <Col>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>
                  {release_date}
                  {genre}
                </Card.Subtitle>
              </Col>
              <Col>
                <WLMovieInfoBtn movie={movie} />
                <WLMovieDeleteBtn username={username} movieId={movie.id} />
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default WatchListCard;
