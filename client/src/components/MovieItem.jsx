import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MovieModal from './MovieModal';
import MovieInfoButton from './MovieInfoButton';
import AddMovieButton from './AddMovieButton';

const MovieItem = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!movie) {
    return null; // Return null or a placeholder if movie prop is undefined
  }

  const { id, title, poster_path, release_date } = movie;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>
        <Card.Text>ID: {id}</Card.Text>

        <MovieInfoButton movie={movie} />
        <AddMovieButton movie={movie} />

       
      </Card.Body>
      {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}
    </Card>
  );
};

export default MovieItem;
