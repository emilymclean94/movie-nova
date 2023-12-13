const express = require("express");
const axios = require("axios");
const app = express();

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "93d064eaaeea0b2a09e2e20af37a5993",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

app.get("/movies", (req, res) => {
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

app.post("/movies", (req, res) => {
  const movieData = req.body;

  axios
    .post(`${apiConfig.baseUrl}movie`, movieData, {
      params: {
        api_key: "93d064eaaeea0b2a09e2e20af37a5993",
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}find/${movieId}`, {
      params: {
        api_key: "93d064eaaeea0b2a09e2e20af37a5993",
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  console.log("Movie ID to delete:", movieId); // Check the movieId received from the frontend

  axios
    .delete(`${apiConfig.baseUrl}movie/${movieId}`, {
      params: {
        api_key: "93d064eaaeea0b2a09e2e20af37a5993",
      },
    })
    .then((response) => {
      console.log("Delete API Response:", response.data); // Check the response from the external API
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error deleting movie:", error); // Log any errors during the deletion process
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/movies/:id/images", (req, res) => {
  const movieId = req.params.id;

  axios
    .get(`${apiConfig.baseUrl}movie/${movieId}/images`, {
      params: {
        api_key: "93d064eaaeea0b2a09e2e20af37a5993",
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});
