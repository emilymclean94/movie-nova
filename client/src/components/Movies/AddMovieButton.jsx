import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const MOVIE_DB_API_KEY = '93d064eaaeea0b2a09e2e20af37a5993';

const AddMovieButton = ({ id }) => {
  const [showModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {

    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: MOVIE_DB_API_KEY,
          page: 1
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to add a movie to the watch list
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setShowSuccessModal(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={addMovie}>
        Add Movie
      </Button>
      {showModal} 
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The movie has been added to your wishlist!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovieButton;
