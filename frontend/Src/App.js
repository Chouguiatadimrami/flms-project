import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // جلب الكتب من backend
  useEffect(() => {
    axios.get("http://localhost:3000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 FLMS Library</h1>

      {books.map((book) => (
        <div key={book._id} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px"
        }}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Available: {book.availableCopies}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
