import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import MovieSearchBar from '../../components/MovieSearchBar';
import PopularMovies from '../../components/PopularMovies';

const Movies = () => {

  return (
<div>
      <MovieSearchBar />
      <PopularMovies />
</div>
  )
}

export default Movies;
