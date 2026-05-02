import { useEffect, useState } from "react";
import API from "../api";

export default function MyLoans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    API.get("/loans/my").then(res => setLoans(res.data));
  }, []);

  const returnBook = async (id) => {
    await API.put(`/loans/return/${id}`);
    alert("Returned");
  };

  return (
    <div>
      <h2>My Loans</h2>
      {loans.map(l => (
        <div key={l._id}>
          <p>{l.resource.title}</p>
          <button onClick={() => returnBook(l._id)}>Return</button>
        </div>
      ))}
    </div>
  );
}
