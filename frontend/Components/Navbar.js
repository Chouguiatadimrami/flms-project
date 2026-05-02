import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Catalog</Link> |{" "}
      <Link to="/loans">My Loans</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}
