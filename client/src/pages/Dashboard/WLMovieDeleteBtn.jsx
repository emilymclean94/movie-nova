import React from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { QUERY_MOVIES } from "../../utils/queries";
import { REMOVE_MOVIE } from "../../utils/mutations";

const DeleteMovieButton = ({ movieId }) => {
  const [removeMovie] = useMutation(REMOVE_MOVIE, {
    update(cache, { data: { removeMovie } }) {
      console.log("Data from update function:", removeMovie);
      try {
        // Read the existing data from the cache for the QUERY_MOVIES query
        const { movies } = cache.readQuery({ query: QUERY_MOVIES });

        // Find the index of the deleted movie in the movies array
        const deletedMovieIndex = movies.findIndex(
          (m) => m._id === removeMovie._id
        );

        // If the deleted movie is found in the cache, remove it from the array
        if (deletedMovieIndex !== -1) {
          const updatedMovies = [...movies];
          updatedMovies.splice(deletedMovieIndex, 1);

          // Update the cache with the updated movie array
          cache.writeQuery({
            query: QUERY_MOVIES,
            data: { movies: updatedMovies },
          });
        }
      } catch (error) {
        console.error("Error updating cache:", error);
      }
    },
  });

  const deleteMovie = async () => {
    try {
      // Remove the movie from the server
      await removeMovie({
        variables: { movieId },
      });
      console.log("Movie with ID", movieId, "has been deleted!");
    } catch (error) {
      console.error("Error deleting movie:", error);
      // Handle error if the movie deletion fails (e.g., show a notification)
    }
  };

  return (
    <Button
      className="btn btn-dark"
      variant="primary"
      id="button"
      onClick={deleteMovie}
    >
      Delete
    </Button>
  );
};

export default DeleteMovieButton;
