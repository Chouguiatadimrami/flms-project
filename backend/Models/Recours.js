// models/Resource.js
const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: String,
  authors: String,
  isbn: String,
  category: String,
  format: String,
  total_copies: Number,
  available_copies: Number,
});

module.exports = mongoose.model("Resource", resourceSchema);
