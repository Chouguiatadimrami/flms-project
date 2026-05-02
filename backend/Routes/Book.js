const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// ADD BOOK
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json({ message: "Book added" });
});

// GET BOOKS
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// BORROW BOOK
router.post("/borrow/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book.availableCopies <= 0) {
    return res.json({ message: "Not available" });
  }

  book.availableCopies -= 1;
  await book.save();

  res.json({ message: "Book borrowed" });
});

module.exports = router;
