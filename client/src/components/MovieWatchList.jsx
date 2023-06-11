import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// import MovieItem from './MovieItem';
// import MovieModal from './MovieModal';


const MovieWatchList = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [watchedList, setWatchedList] = useState([]);

    const searchMovies = () => {
        const apiKey = 'bb8c9e655b550c820642d263e87af207'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
    
        axios
        .get(url)
        .then((response) => {
            setSearchResults(response.data.results);
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
    };

    const addToWatchedList = (movie) => {
        setWatchedList((prevWatchedList) => [...prevWatchedList, movie]);
    };

    return (

        <Container>

        <h1>Movie Search</h1>

        {/* Search form */}
        <Form onSubmit={searchMovies}>
            <Form.Control
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Search</Button>
        </Form>

        {/* Display search results */}
        {searchResults.length > 0 && (
            <div>
            <h2>Search Results</h2>
            {searchResults.map((movie) => (
                <div key={movie.id}>
                <h3>{movie.title}</h3>
                <Button onClick={() => addToWatchedList(movie)}>Add to Watched List</Button>
                </div>
            ))}
            </div>
        )}

        {/* Display watched list */}
        {watchedList.length > 0 && (
            <div>
            <h2>Watched List</h2>
            {watchedList.map((movie) => (
                <div key={movie.id}>
                <h3>{movie.title}</h3>
                {/* Display more movie details here if desired */}
                </div>
            ))}
            </div>
        )}

        </Container>

    )
}

export default MovieWatchList;