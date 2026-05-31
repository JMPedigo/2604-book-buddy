import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import CatalogList from "./CatalogList";
import SearchBar from "./SearchBar";

/** I need a Catalog component
 * with a search bar
 * and a list of books
 * containing an image, the title, author, and synopsis
 */
export default function CatalogPage() {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);

  const syncBooks = async () => {
    const data = await getBooks();
    setAllBooks(data);
    setBooks(data);
  };
  /** I need to filter the books to find a single book title*/
  const searchBooks = (searchBook) => {
    const searchTerm = searchBook.trim().toLowerCase();

    if (!searchTerm) {
      setBooks(allBooks);
      return;
    }

    const matchingBooks = allBooks.filter((book) => {
      const title = book.title?.toLowerCase() || "";
      const author = book.author?.toLowerCase() || "";
      return title.includes(searchTerm) || author.includes(searchTerm);
    });

    setBooks(matchingBooks);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar onSearch={searchBooks} />
      <CatalogList books={books} syncBooks={syncBooks} />
    </>
  );
}
