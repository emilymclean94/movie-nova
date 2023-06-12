import React from 'react';
import { Card } from 'react-bootstrap';
import MovieInfoButton from './MovieInfoButton';
import AddMovieButton from './AddMovieButton';

const MovieItem = ({ movie }) => {


  if (!movie) {
    return null; // Return null or a placeholder if movie prop is undefined
  }

  const { title, poster_path, release_date, id } = movie;

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>

        <div className="d-flex align-items-center justify-content-center ">
          <MovieInfoButton movie={movie} />
          <AddMovieButton movie={movie} />
        </div>
       
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
