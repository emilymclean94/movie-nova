import React from "react";
import { Card } from "react-bootstrap";
import MCMovieAddBtn from "./MCMovieAddBtn";
import SearchedMovieInfoButton from "./MCMovieInfoBtn";
import "./movies.css";

const MovieCard = ({ username, movie }) => {
  const { original_title, release_date, poster_path } = movie;

  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      />
      <Card.Body>
        <Card.Title 
        id="card-title">{original_title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>
        <div className="card-btn-container">
          <SearchedMovieInfoButton movie={movie} />
          <MCMovieAddBtn username={username} movie={movie} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
