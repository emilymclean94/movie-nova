import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MovieItem({ movie }) {
  const { id, title, poster_path, release_date } = movie;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>
        <Button variant="primary" href={`https://www.themoviedb.org/movie/${id}`} target="_blank">
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
