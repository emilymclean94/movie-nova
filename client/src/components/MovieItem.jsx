import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MovieModal from './MovieModal';

const MovieItem = ({ movie }) => {

  const { id, title, poster_path, release_date } = movie;

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMoreInfo = () => {
    console.log('Movie ID:', id);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (

      <Card style={{ width: '18rem' }}>

        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Release Date: {release_date}</Card.Text>
          <Button variant="primary" onClick={handleMoreInfo}>
            More Info
          </Button>
        </Card.Body>

        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />

      </Card>

  )
}

export default MovieItem;
