import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/Movies/MovieCard";
import { Container } from "react-bootstrap/";
import axios from "axios";

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
    <Container className="movies">
      <SearchBar />
      {results.length === 0 && (
        <div className="popular-movies">
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
