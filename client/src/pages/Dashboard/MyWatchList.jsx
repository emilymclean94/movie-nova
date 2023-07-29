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
    <Col
      className="mywatchlist"
      id="dash4"
      style={{ height: "500px", overflowY: "auto" }}
    >
      <h1 className="watchlist-title text-center m-3">My Watched List</h1>

      <Col className="table-resposive m-3 mywatchlist">
        <Table
          className="table"
          striped="true"
          rounded="true"
          bordered="true"
          hover="true"
          responsive="true"
        >
          <thead>
            <tr className="font text-center">
              <th>IMG</th>
              <th>Title</th>
              <th>Release Date</th>
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
                <td className="overview">{movie.releaseDate}</td>
                <td className="overview">{movie.description}</td>
                <td>
                  <div className="delete-button">
                    <WLMovieDeleteBtn movieId={movie._id} />
                  </div>
                  <div className="delete-button">
                    <WLMovieInfoBtn movie={movie} />
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
