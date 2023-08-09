import React, { useState, useEffect } from "react";
import { Col, Table } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIES } from "../../utils/queries";
import WLMovieDeleteBtn from "./WLMovieDeleteBtn";
import WLMovieInfoBtn from "./WLMovieInfoBtn";

const MyWatchList = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useQuery(QUERY_MOVIES);

  useEffect(() => {
    if (data && data.movies) {
      setMovies(data.movies); // Check if data.movies is defined before setting the state
    }
  }, [data]);

  // Log the data and current state of movies for debugging
  console.log("Data from server:", data);
  console.log("Current state of movies:", movies);

  return (
    <Col className="mywatchlist">
      <h2 className="watchlist-title text-center m-3">Your Watch List!</h2>

      <Col className="m-3 watchlist-table">
        <Table
          className="table"
          responsive="lg"
          striped="true"
          bordered="true"
          hover="true"
          size="sm"
        >
          <thead>
            <tr className="font text-center">
              <th>IMG</th>
              <th>Title</th>
              <th>Overview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td className="poster-container-watched">
                  <img
                    className="poster-watched"
                    src={movie.posterImg}
                    alt={movie.title}
                  />
                </td>
                <td className="movie-title">{movie.title}</td>
                <td className="overview">{movie.description}</td>
                <td className="buttons">
                  <div className="info-button">
                    <WLMovieInfoBtn movie={movie} />
                  </div>
                  <div className="delete-button">
                    <WLMovieDeleteBtn movieId={movie._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Col>
  );
};

export default MyWatchList;
