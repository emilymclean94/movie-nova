import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MovieModal from './MovieModal';
import axios from 'axios';

const MovieInfoButton = ({ movie }) => {

    const [showModal, setShowModal] = useState(false);
    const [movies, setMovies] = useState([]);

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

    const { id, title, poster_path, release_date } = movie;
  
    return (

        <div>

            <Button variant="primary"
            onClick={handleMoreInfo}>
                More Info
            </Button>

            {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}

        </div>
        
    )
}

export default MovieInfoButton;