import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const WatchList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch initial movie data
    fetchMovies();
  }, []);

  // Function to fetch movie data
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'YOUR_API_KEY',
          language: 'en-US',
          page: 1
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to add a movie to the watch list
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Function to delete a movie from the watch list
  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => addMovie({ title: 'Inception', release_date: '2010-07-16', overview: 'A mind-bending story...', poster_url: 'https://example.com/poster.jpg' })}>
        Add Movie
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Overview</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.overview}</td>
              <td>
                <Button variant="danger" onClick={() => deleteMovie(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WatchList;
