import CatalogListItem from "./CatalogListItem";

/** I need a list of books for the CatalogPage */
export default function CatalogList(books) {
  return (
    <ul>
      {books.map((book) => (
        <CatalogListItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
