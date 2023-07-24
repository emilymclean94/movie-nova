import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MovieInfoButton = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { poster_path, title, release_date, overview } = movie;

  return (
    <div>
      <Button variant="primary" onClick={handleMoreInfo}>
        More Info
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Streamverse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <h5>{title}</h5>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieInfoButton;
