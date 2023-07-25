import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from "../../utils/mutations";
import { toast } from "react-toastify";
import axios from "axios";
import MovieModal from "./MovieModal";
import "./movies.css";

const REACT_APP_TMDB_KEY = "93d064eaaeea0b2a09e2e20af37a5993";

const MovieCard = ({ username, movie }) => {
  const { original_title, overview, poster_path, release_date, _id } = movie;

  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Fetch initial movie data
    fetchMovies();
  }, []);

  // Function to fetch movie data
  const fetchMovies = async () => {
    try {
      // Make the API call to fetch movie data
      const response = await axios.get("https://api.themoviedb.org/3/movie/", {
        params: {
          api_key: REACT_APP_TMDB_KEY,
          page: 1,
        },
      });
      // You can update the state or perform any other desired actions with the response data
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [addMovie] = useMutation(ADD_MOVIE);
  console.log("addMovie function:", addMovie);

  const handleAddMovie = async () => {
    try {
      const { data } = await addMovie({
        variables: {
          title: original_title,
          description: overview,
          releaseDate: release_date,
          posterImg: `https://image.tmdb.org/t/p/w300${poster_path}`,
          username: username,
          _id: _id,
        },
      });

      // Show success notification
      toast.success("Movie added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Added movie data:", data); // Check the data returned by the mutation
    } catch (error) {
      console.error(error);
      // Show error notification if there's an error
      toast.error("Failed to add the movie. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Card style={{ width: "16rem" }} className="movie-card">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      />
      <Card.Body>
        <Card.Title>{original_title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>
        <div className="d-flex align-items-center justify-content-center ">
          <Button
            className="card-button"
            variant="primary"
            onClick={handleMoreInfo}
          >
            More Info
          </Button>
          {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}
          <Button
            className="card-button"
            variant="primary"
            onClick={handleAddMovie}
          >
            Add Movie
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
