/** Navbar with site navigation links */
export default function Navbar() {
  return (
    <header>
      <img
        src="../../public/books.png"
        alt="A stack of books."
        className="navImage"
      />
      <p>Book Buddy</p>
      <nav>
        <p>Books</p>
        <p>Login/Logout</p>
      </nav>
    </header>
  );
}
