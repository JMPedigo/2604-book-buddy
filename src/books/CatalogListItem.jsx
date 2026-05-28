import { Link } from "react-router";

export default function CatalogListItem({ book }) {
  return (
    <li>
      <img src="/books.png" alt="A stack of books." className="navImage" />
      <Link to={`/books/${book.id}`}>{book.title}</Link>
      <h2>{book?.author}</h2>
      <p>{book?.description}</p>
    </li>
  );
}
