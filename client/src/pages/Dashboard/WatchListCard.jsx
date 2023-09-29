import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import WLMovieInfoBtn from "./WLMovieInfoBtn";
import WLMovieDeleteBtn from "./WLMovieDeleteBtn";
import "./dashboard.css";

const WatchListCard = ({ movie, username }) => {
  const { title, genre, release_date, poster_path } = movie;

  return (
    <Card 
    className="watchlist-card bg-transparent border-top"
    style={{boxShadow: 0, borderRadius: 0}}>
      <div className="card-contents">
        
          <Card.Img
            className="card-img"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            style={{width:'130px'}}
          ></Card.Img>
       
        <div className="card-body"
        style={{color: "white"}}>
          {/* <Card.Body className="watchlist-card-body"
          style={{color: "white"}}> */}
            
              <div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>
                  {release_date}
                  <p>Genre Here</p>
                  {genre}
                </Card.Subtitle>
              </div>
              <div className="card-btn-container">
                <WLMovieInfoBtn movie={movie}
                 />
                <WLMovieDeleteBtn username={username} movieId={movie.id} 
                 />
              </div>
            
          {/* </Card.Body> */}
          </div>
      </div>
    </Card>
  );
};

export default WatchListCard;
