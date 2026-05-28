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
      <h2>
        <Link to={`/books/BookDetails/${book.id}`} className="bookLink">
          {book.title}
        </Link>
      </h2>
      <p>
        <strong>{book?.author}</strong>
      </p>
      <p>{book?.description}</p>
    </li>
  );
}
