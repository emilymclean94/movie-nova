import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const WLMovieInfoBtn = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!movie) {
    return null;
  }

  const { posterImg, title, releaseDate, description } = movie;

  return (
    <>
      <Button
        className="card-button btn btn-dark"
        variant="primary"
        onClick={handleMoreInfo}
      >
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
            {posterImg && (
              <img src={posterImg} alt={title} className="img-fluid rounded" />
            )}
          </div>
          <h5>Release Date: {releaseDate}</h5>
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WLMovieInfoBtn;
