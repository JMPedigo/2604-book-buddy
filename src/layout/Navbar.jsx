import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  return (
    <header>
      <img
        src="../../public/books.png"
        alt="A stack of books."
        className="navImage"
      />
      <NavLink className="navLink">Book Buddy</NavLink>
      <nav>
        <NavLink className="navLink">Books</NavLink>
        <NavLink className="navLink">Login</NavLink>
      </nav>
    </header>
  );
}
