import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import MovieCard from './MovieCard';

const MOVIE_DB_API_KEY = '93d064eaaeea0b2a09e2e20af37a5993';

const PopularMovies = () => {

  const [results] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    const apiKey = MOVIE_DB_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  return (

    <Container>

      {results.length === 0 && (
        <div className="mt-4">
          <h2>Popular Movies</h2>
          <div className="popular-movies">
            <div className="movies-grid">
              {popularMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}

    </Container>
  )
}

export default PopularMovies;