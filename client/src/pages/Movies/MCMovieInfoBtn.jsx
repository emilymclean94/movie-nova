import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";
import "./movies.css";

const SearchMovieInfoButton = ({ movie }) => {
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

  const { poster_path, title, release_date, overview } = movie;

  return (
    <>
      <Button
        id="info-btn"
        className="card-button btn btn-dark"
        variant="primary"
        onClick={handleMoreInfo}
      >
        More Info
      </Button>

      <BsInfoSquareFill
        fill="#b279d8f5"
        size={25}
        className="card-button"
        onClick={handleMoreInfo}
      />

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
    </>
  );
};

export default SearchMovieInfoButton;
