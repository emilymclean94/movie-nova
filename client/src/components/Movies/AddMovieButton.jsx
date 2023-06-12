import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const AddMovieButton = ({ movie }) => {
  const [showModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    // Fetch initial movie data
    fetchMovies();
  }, []);

  // Function to fetch movie data
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/', {
        params: {
          api_key: 'bb8c9e655b550c820642d263e87af207',
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
