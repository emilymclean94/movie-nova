import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap/";
import SearchBar from "../../components/SearchBar";
import MovieCard from "./MovieCard";
import axios from "axios";
import "./movies.css";

const Movies = () => {
  const [results] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    const apiKey = "93d064eaaeea0b2a09e2e20af37a5993";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <Container className="movies-container">
      <SearchBar />
      <h2 className="page-title">Popular Movies:</h2>
      {results.length === 0 && (
        <div className="m-3 popular-movies">
          <div className="movies-grid">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Movies;
