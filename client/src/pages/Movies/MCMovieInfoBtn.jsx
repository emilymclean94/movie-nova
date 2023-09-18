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
        id="info-icon"
        fill="#b279d8f5"
        size={20}
        onClick={handleMoreInfo}
        margin="5px"
      />

      <Modal 
      show={showModal} 
      onHide={handleCloseModal}
      centered>
        <Modal.Header closeButton>
          <Modal.Title>StreamVerse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                className="img-fluid rounded"
              />
            )}
            <h4>{title}</h4>
          <h5>Release Date: {release_date}</h5>
          <p>{overview}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchMovieInfoButton;
