const mongoose = require("mongoose");

mongoose.connect(
  process.env.REACT_APP_MONGODB_URI || "mongodb://127.0.0.1:27017/test"
);

module.exports = mongoose.connection;
