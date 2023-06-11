import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import MovieItem from '../../components/MovieItem';
import MovieModal from '../../components/MovieModal';

function Movies() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm === '') {
      setResults([]);
      return;
    }

    searchMovies();
  };

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

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <Container>
      
      <h1 className="mt-4 mb-4">Movie Search</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {results.length === 0 && (
    <div className="mt-4">
      <h2>Popular Movies</h2>
      <div className="popular-movies">
        {popularMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    )}

    {results.length > 0 && (
    <div className="searched-movies">
      {results.map((movie) => (
        <ListGroup.Item key={movie.id}>
          <MovieItem movie={movie} />
        </ListGroup.Item>
      ))}
    </div>
    )}

     <MovieModal movie={selectedMovie} onClose={handleCloseModal} />

    </Container>
  )
}

export default Movies;
