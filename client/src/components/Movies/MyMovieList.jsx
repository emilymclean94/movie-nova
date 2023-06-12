import React, { useState, useEffect } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../../utils/queries';

const WatchList = ({username}) => {
  
  const [movies, setMovies] = useState([]);

 
  const { data } = useQuery(QUERY_MOVIES);

  useEffect(() => {
    if (data) {
      setMovies(data.movie);
    }
  }, [data]);


  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  
  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <Col className="watchlist">
      <h2 className="watched-list-title text-center">My Watched List</h2>
      <Col className="m-3 content2">
        <Table striped rounded bordered hover>
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
                  <img className="poster-watched" src={movie.posterImg} alt={movie.title} />
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
        <Button
          variant="primary"
          onClick={() =>
            addMovie({
              title: 'Inception',
              releaseDate: '2010-07-16',
              description: 'A mind-bending story...',
              posterImg: 'https://image.tmdb.org/t/p/w300/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
              _id: Date.now().toString(),
            })
          }
        >
          Add Movie
        </Button>
      </Col>
    </Col>
  );
};

export default WatchList;