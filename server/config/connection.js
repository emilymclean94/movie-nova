const mongoose = require("mongoose");

//! Hide this
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://egarrisxn:testtest123@streamverse.g7pnqft.mongodb.net"
);

module.exports = mongoose.connection;
