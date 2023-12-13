const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://egarrisxn:testtest123@streamverse.g7pnqft.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;
