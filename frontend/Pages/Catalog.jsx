import { useEffect, useState } from "react";
import API from "../api";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get("/resources").then(res => setBooks(res.data));
  }, []);

  const borrow = async (id) => {
    await API.post("/loans/borrow", { resourceId: id });
    alert("Borrowed");
  };

  return (
    <div>
      <h2>Catalog</h2>
      {books.map(b => (
        <div key={b._id}>
          <p>{b.title} (Available: {b.available_copies})</p>
          <button onClick={() => borrow(b._id)}>Borrow</button>
        </div>
      ))}
    </div>
  );
}
