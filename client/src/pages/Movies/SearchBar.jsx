import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

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
    const apiKey = "93d064eaaeea0b2a09e2e20af37a5993";

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
    </Container>
  );
};

export default MovieSearchBar;
