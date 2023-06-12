import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MovieModal from './MovieModal';
import axios from 'axios';

const MOVIE_DB_API_KEY = '93d064eaaeea0b2a09e2e20af37a5993';

const MovieInfoButton = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Fetch initial movie data
    fetchMovies();
  }, []);

  // Function to fetch movie data
  const fetchMovies = async () => {
    try {
      await axios.get('https://api.themoviedb.org/3/movie/', {
        params: {
          api_key: MOVIE_DB_API_KEY,
          page: 1,
        },
      });
      // You can update the state or perform any other desired actions
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleMoreInfo}>
        More Info
      </Button>
      {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}
    </div>
  );
};

export default MovieInfoButton;
