import React, { useState, useEffect } from "react";
import { Button, Col, Table } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MOVIES } from "../utils/queries";
import { REMOVE_MOVIE } from "../utils/mutations";

const WatchList = ({ username }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useQuery(QUERY_MOVIES);

  useEffect(() => {
    if (data) {
      setMovies(data.movie);
    }
  }, [data]);

  const [removeMovie] = useMutation(REMOVE_MOVIE, {
    update(cache, { data: { removeMovie } }) {
      // Read the existing data from the cache for the QUERY_MOVIES query
      const { movie } = cache.readQuery({ query: QUERY_MOVIES });

      // Find the index of the deleted movie in the movie array
      const deletedMovieIndex = movie.findIndex(
        (m) => m._id === removeMovie._id
      );

      // If the deleted movie is found in the cache, remove it from the array
      if (deletedMovieIndex !== -1) {
        const updatedMovies = [...movie];
        updatedMovies.splice(deletedMovieIndex, 1);

        // Update the cache with the updated movie array
        cache.writeQuery({
          query: QUERY_MOVIES,
          data: { movie: updatedMovies },
        });
      }
    },
  });

  const deleteMovie = async (index) => {
    try {
      const movieId = movies[index]._id;
      console.log("Movie ID to delete:", movieId);
      // Remove the movie from the server
      await removeMovie({
        variables: { movieId },
      });

      // Rest of the code remains the same
      const updatedMovies = movies.filter((movie, i) => i !== index);
      setMovies(updatedMovies);
    } catch (error) {
      console.error("Error deleting movie:", error);
      // Handle error if the movie deletion fails (e.g., show a notification)
    }
  };

  return (
    <Col className="watchlist" style={{ height: "500px", overflowY: "auto" }}>
      <h2 className="watched-list-title text-center">My Watched List</h2>
      <Col className="m-3 content2">
        <Table striped="true" rounded="true" bordered="true" hover="true">
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
            {movies.map((movie, index) => (
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
                  <Button onClick={() => deleteMovie(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Col>
  );
};

export default WatchList;
