import React, { useState, useEffect } from 'react';
import { Button, Col, Table} from 'react-bootstrap';
import axios from 'axios';
import '../../pages/Dashboard/dashboard.css';

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
          api_key: '93d064eaaeea0b2a09e2e20af37a5993',
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
    <Col className='watchlist'>
      <h2 className="watched-list-title text-center">My Watched List</h2>     
      <Col className="m-3 content2">
        {/* <Button variant="primary" onClick={() => addMovie({ title: 'Inception', release_date: '2010-07-16', overview: 'A mind-bending story...', poster_url: 'https://example.com/poster.jpg' })}>
          Add Movie
        </Button> */}
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
                <td className="poster-container-watched"><img className="poster-watched" src={movie.poster_url} alt={movie.title} /></td>
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

      </Col>
    </Col>

  );
};

export default WatchList;
