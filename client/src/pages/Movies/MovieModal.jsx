import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const { poster_path, title, release_date, overview } = movie;

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Streamverse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-center mb-3">
        <h5>{movie && movie.title}</h5>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-3">
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              className="img-fluid rounded"
            />
          )}
        </div>
        <h5>Release Date: {release_date}</h5>
        <p>{overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
