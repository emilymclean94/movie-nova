const express = require('express');
const axios = require('axios');
const router = express.Router();

const MOVIE_DB_API_KEY = '93d064eaaeea0b2a09e2e20af37a5993';

apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'MOVIE_DB_API_KEY',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};


router.get('/movies', (req, res) => {
  const apiUrl = `https://api.themoviedb.org/3/movie?api_key=${MOVIE_DB_API_KEY}`;

  axios.get(apiUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


router.post('/movies', (req, res) => {
  const movieData = req.body;

  axios.post('https://api.themoviedb.org/3/movie', movieData, {
    params: {
      api_key: MOVIE_DB_API_KEY
    }
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


router.delete('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  // Make a DELETE request to the API
  axios.delete(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
      api_key: MOVIE_DB_API_KEY
    }
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


router.get('/movies/:id/images', (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}movie/${movieId}/images`, {
      params: {
        api_key: MOVIE_DB_API_KEY,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



module.exports = router;