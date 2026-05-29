import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <img
        src="../../public/books.png"
        alt="A stack of books."
        className="navImage"
      />
      <h1>
        <NavLink to="/" className="mainLink">
          Book Buddy
        </NavLink>
      </h1>
      <nav>
        {token ? (
          <a onClick={() => logout()}>Logout</a>
        ) : (
          <>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
