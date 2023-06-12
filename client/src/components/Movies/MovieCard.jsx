import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MovieInfoButton from './MovieInfoButton';
import AddMovieButton from './AddMovieButton';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_MOVIE } from '../../utils/mutations';

const MovieCard = ({ username, movie }) => {
  const { original_title, overview, poster_path, release_date, id } = movie;

  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    releaseDate: '',
    posterImg: '',
    username: '',
  });

  const [addMovie, { error }] = useMutation(ADD_MOVIE);

  const handleAddMovie = async () => {
    const updatedMovieData = {
      ...movieData,
      title: original_title,
      description: overview,
      releaseDate: release_date,
      posterImg: poster_path,
      username: username,
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
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