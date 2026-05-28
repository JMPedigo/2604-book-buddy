import { Link } from "react-router";

/** I need a list of books for the CatalogPage */
export default function CatalogList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <CatalogListItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export function CatalogListItem({ book }) {
  return (
    <li>
      <img src="/books.png" alt="A stack of books." className="navImage" />
      <Link to={`/books/${book.id}`}>{book.title}</Link>
      <h2>{book?.author}</h2>
      <p>{book?.description}</p>
    </li>
  );
}
