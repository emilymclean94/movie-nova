import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import MovieItem from  './MovieItem';
import MovieModal from './MovieModal';


const MovieSearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

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

        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchForm">
        <Form.Control
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleChange}
        />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="primary" type="submit" size="lg">
        Search
        </Button>
        </div>
        </Form>

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

export default MovieSearchBar;