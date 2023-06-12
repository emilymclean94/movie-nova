const express = require('express');
const axios = require('axios');
const app = express();

const MOVIE_DB_API_KEY = '93d064eaaeea0b2a09e2e20af37a5993';

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: MOVIE_DB_API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

app.get('/movies', (req, res) => {
  const apiUrl = `${apiConfig.baseUrl}movie?api_key=${apiConfig.apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/movies', (req, res) => {
  const movieData = req.body;

  axios
    .post(`${apiConfig.baseUrl}movie`, movieData, {
      params: {
        api_key: apiConfig.apiKey,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.delete('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  axios
    .delete(`${apiConfig.baseUrl}movie/${movieId}`, {
      params: {
        api_key: apiConfig.apiKey,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}find/${movieId}`, {
      params: {
        api_key: apiConfig.apiKey,
        external_source: 'something', // Provide the external source value
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/movies/:id/images', (req, res) => {
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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
