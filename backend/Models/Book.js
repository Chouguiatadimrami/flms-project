const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  availableCopies: Number
});

module.exports = mongoose.model("Book", bookSchema);
