import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import MovieItem from '../../components/MovieItem';

const Movies = () => {

  const [searchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);


  const fetchPopularMovies = () => {
    const apiKey = 'bb8c9e655b550c820642d263e87af207';

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

  const searchMovies = () => {
    const apiKey = 'bb8c9e655b550c820642d263e87af207';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    axios
      .get(url)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  searchMovies();

  return (

    <Container>

      {results.length === 0 && (
        <div className="mt-4">
          <h2>Popular Movies</h2>
          <div className="popular-movies">
            <div className="movies-grid">
              {popularMovies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}

    </Container>
  )
}

export default Movies;
