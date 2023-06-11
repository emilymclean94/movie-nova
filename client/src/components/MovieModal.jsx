import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import MovieItem from './MovieItem';

const MovieModal = ({ movie, onClose }) => {

  return (

    <Modal show={movie !== null} onHide={onClose}>

      <Modal.Header closeButton>
        <Modal.Title>{movie && movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MovieItem /> {/* Render movie details */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>

    </Modal>
    
  )
}

export default MovieModal;