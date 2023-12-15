import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import MovieCard from "../pages/Movies/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchBar = () => {
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
    const apiKey = API_KEY;

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
    <Container className="searchbar-container">
      <div className="searchbar-and-button">
        <Form className="search-form" onSubmit={handleSubmit}>
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
      </div>
      <div className="searched-result">
        {results.length > 0 && (
          <div className="searched-movies">
            <div className="searched-grid">
              {results.map((movie) => (
                <ListGroup.Item key={movie.id}>
                  <MovieCard movie={movie} />
                </ListGroup.Item>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchBar;
