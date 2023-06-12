import React, { useState } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WatchList = () => {
  const [movies, setMovies] = useState([]);

  // Function to add a movie to the watch list
  const addMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    localStorage.setItem('mylist', JSON.stringify(updatedMovies));
  };

  // Function to delete a movie from the watch list
  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
    localStorage.setItem('mylist', JSON.stringify(updatedMovies));
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
              <tr key={index}>
                <td className="poster-container-watched">
                  <img className="poster-watched" src={movie.poster_url} alt={movie.title} />
                </td>
                <td className="movie-title">{movie.title}</td>
                <td className="overview">{movie.release_date}</td>
                <td className="overview">{movie.overview}</td>
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
              release_date: '2010-07-16',
              overview: 'A mind-bending story...',
              poster_url: 'https://example.com/poster.jpg',
            })
          }
        >
          Add Movie
        </Button>
        <Link to="/watchlist">
          <Button variant="secondary">Go to Watchlist</Button>
        </Link>
      </Col>
    </Col>
  );
};

export default WatchList;
