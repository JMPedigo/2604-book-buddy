import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import CatalogList from "./CatalogList";

/** I need a Catalog component
 * with a search bar
 * and a list of books
 * containing an image, the title, author, and synopsis
 */
export default function CatalogPage() {
  const [books, setBooks] = useState([]);

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <CatalogList books={books} syncBooks={syncBooks} />
    </>
  );
}
