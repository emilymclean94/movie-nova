const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    posterImg: { type: String }, 
    title: { type: String, required: true },
    releaseDate: { type: String  },
    description: { type: String, required: true },
  },
);


const Movie = model('Movie', movieSchema);

module.exports = Movie;