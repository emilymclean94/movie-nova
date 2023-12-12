const express = require("express");
const axios = require("axios");
const router = express.Router();

//! Hide this
const key = "93d064eaaeea0b2a09e2e20af37a5993";

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: key,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

router.get("/movies", (req, res) => {
  const apiUrl = `${apiConfig.baseUrl}movie?api_key=${apiConfig.apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post("/movies", (req, res) => {
  const movieData = req.body;

  axios
    .post(`${apiConfig.baseUrl}movie`, movieData, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}find/${movieId}`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  axios
    .delete(`${apiConfig.baseUrl}movie/${movieId}`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.get("/movies/:id/images", (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}movie/${movieId}/images`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;
