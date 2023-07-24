import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import MovieCard from "./Movies/MovieCard";
import MovieModal from "./Movies/MovieModal";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const REACT_APP_TMDB_API_KEY = "93d064eaaeea0b2a09e2e20af37a5993";

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm === "") {
      setResults([]);
      return;
    }

    searchMovies();
  };

  const searchMovies = () => {
    const apiKey = REACT_APP_TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    axios
      .get(url)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
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
            size="md"
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit" size="md">
            Search
          </Button>
        </div>
      </Form>

      {results.length > 0 && (
        <div className="searched-movies">
          {results.map((movie) => (
            <ListGroup.Item key={movie.id}>
              <MovieCard movie={movie} />
            </ListGroup.Item>
          ))}
        </div>
      )}

      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
    </Container>
  );
};

export default SearchBar;
