import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../api/books";

/** I need a function to call BookDetails and grab id using useParams */
export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncBook = async () => {
      try {
        setError(null);
        const data = await getBook(id);
        if (!data) throw Error("Book not found.");
        setBook(data);
      } catch (e) {
        setError(e.message);
      }
    };
    syncBook();
  }, [id]);

  if (error) return <p role="alert">{error}</p>;
  if (!book) return <p>Loading book...</p>;

  return (
    <article>
      <img
        src={book.coverimage || "/books.png"}
        alt={`Cover of ${book.title}`}
        className="bookCover"
      />
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </article>
  );
}
