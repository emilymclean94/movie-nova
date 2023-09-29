import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";

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
      <BsInfoSquareFill
        fill="#b279d8f5"
        size={25}
        className="info-icon"
        onClick={handleMoreInfo}
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Streamverse</Modal.Title>
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
