import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import MovieModal from "./MovieModal";
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from "../../utils/mutations";

const MovieInfoButton = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleMoreInfo}>
        More Info
      </Button>
      {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}
    </div>
  );
};

const MovieCard = ({ username, movie }) => {
  const { original_title, overview, poster_path, release_date, _id } = movie;

  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    posterImg: "",
    username: "",
    _id: "",
  });

  const addMovie = useMutation(ADD_MOVIE);

  const handleAddMovie = async () => {
    const updatedMovieData = {
      ...movieData,
      title: original_title,
      description: overview,
      releaseDate: release_date,
      posterImg: `https://image.tmdb.org/t/p/w300${poster_path}`,
      username: username,
      _id: _id,
    };

    setMovieData(updatedMovieData);

    try {
      await addMovie({
        variables: updatedMovieData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie) {
    return null; // Return null or a placeholder if movie prop is undefined
  }

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      />
      <Card.Body>
        <Card.Title>{original_title}</Card.Title>
        <Card.Text>Release Date: {release_date}</Card.Text>
        <div className="d-flex align-items-center justify-content-center ">
          <MovieInfoButton movie={movie} />
          <Button onClick={handleAddMovie}>Add Movie</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
